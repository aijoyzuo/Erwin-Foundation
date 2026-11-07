"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BASE_PATH } from "@/lib/basePath";
import { SUPABASE_URL, SUPABASE_KEY, TABLE } from "@/lib/game2048Config";

type Tile = { id: number; value: number; r: number; c: number; merged?: boolean; isNew?: boolean };
type Dir = "up" | "down" | "left" | "right";
type ScoreRow = { name: string; score: number; max_tile: number };
type BoardRow = ScoreRow & { created_at: string };
type Boards = { recent: ScoreRow[]; history: ScoreRow[]; recentPeriod: number | null };
type BoardTab = "recent" | "history";
type Celebration = { kind: BoardTab; name: string; score: number };

const SIZE = 4;
const BEST_KEY = "erwin2048-best";
const MAX_TILE_ALLOWED = 8192;
const TOP_N = 5;
// 近期榜單每 3 天一期，從這個時間開始分期（台灣時間午夜換期）
const PERIOD_START = Date.parse("2026-11-07T00:00:00+08:00");
const PERIOD_DAYS = 3;
const PERIOD_MS = PERIOD_DAYS * 24 * 60 * 60 * 1000;
// 一期的紀錄通常遠少於此數，超過時只統計較新的紀錄
const RECENT_FETCH = 500;
// 同名合併前先多取一些，避免前幾名都是同一人時湊不滿五名
const HISTORY_FETCH = 50;
// 雙榜上線時保留的五筆只列入歷史榜單，近期榜單從零開始
const HISTORY_ONLY_IDS = [144, 149, 118, 141, 162];

// 2 → 01.jpg、4 → 02.jpg … 2048 → 11.jpg
const tileImg = (value: number) => {
  const index = Math.log2(value);
  if (!Number.isInteger(index) || index < 1 || index > 11) return null;
  return `${BASE_PATH}/img/20261024armin2048/20261024${String(index).padStart(2, "0")}.jpg`;
};

let nextId = 1;

function addRandomTile(tiles: Tile[]): Tile[] {
  const empty: [number, number][] = [];
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE; c++)
      if (!tiles.some((t) => t.r === r && t.c === c)) empty.push([r, c]);
  if (empty.length === 0) return tiles;
  const [r, c] = empty[Math.floor(Math.random() * empty.length)];
  return [...tiles, { id: nextId++, value: Math.random() < 0.9 ? 2 : 4, r, c, isNew: true }];
}

function newGame(): Tile[] {
  return addRandomTile(addRandomTile([]));
}

function move(tiles: Tile[], dir: Dir): { tiles: Tile[]; gained: number; moved: boolean } {
  const result: Tile[] = [];
  let gained = 0;
  let moved = false;

  for (let line = 0; line < SIZE; line++) {
    // 依移動方向，由前緣往後取出這一列/行的方塊
    const lineTiles = tiles
      .filter((t) => (dir === "left" || dir === "right" ? t.r === line : t.c === line))
      .sort((a, b) => {
        const key = dir === "left" || dir === "right" ? "c" : "r";
        return dir === "left" || dir === "up" ? a[key] - b[key] : b[key] - a[key];
      });

    let pos = 0;
    let prev: Tile | null = null;
    for (const t of lineTiles) {
      if (prev && !prev.merged && prev.value === t.value) {
        prev.value *= 2;
        prev.merged = true;
        gained += prev.value;
        moved = true;
        continue;
      }
      const offset = dir === "left" || dir === "up" ? pos : SIZE - 1 - pos;
      const r = dir === "left" || dir === "right" ? line : offset;
      const c = dir === "left" || dir === "right" ? offset : line;
      if (r !== t.r || c !== t.c) moved = true;
      prev = { id: t.id, value: t.value, r, c };
      result.push(prev);
      pos++;
    }
  }
  return { tiles: result, gained, moved };
}

function canMove(tiles: Tile[]): boolean {
  if (tiles.length < SIZE * SIZE) return true;
  const at = (r: number, c: number) => tiles.find((t) => t.r === r && t.c === c)?.value;
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE; c++) {
      const v = at(r, c);
      if (v === at(r, c + 1) || v === at(r + 1, c)) return true;
    }
  return false;
}

async function fetchRows(query: string): Promise<BoardRow[]> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}?select=name,score,max_tile,created_at&${query}`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// 同一暱稱只留最高分，再取前幾名
function topByName(rows: ScoreRow[]): ScoreRow[] {
  const best = new Map<string, ScoreRow>();
  for (const row of rows) {
    const current = best.get(row.name);
    if (!current || row.score > current.score) best.set(row.name, row);
  }
  return [...best.values()].sort((a, b) => b.score - a.score).slice(0, TOP_N);
}

const periodOf = (time: number) => Math.floor((time - PERIOD_START) / PERIOD_MS);

const formatDate = (time: number) =>
  new Date(time).toLocaleDateString("zh-TW", { month: "numeric", day: "numeric", timeZone: "Asia/Taipei" });

function periodLabel(period: number): string {
  const start = PERIOD_START + period * PERIOD_MS;
  return `${formatDate(start)}–${formatDate(start + PERIOD_MS - 1)}`;
}

// 近期榜單顯示最新一筆紀錄所屬的那一期：沒人玩時留著舊榜，換期後第一筆紀錄才開新榜
async function fetchBoards(): Promise<Boards> {
  const [latest, history] = await Promise.all([
    fetchRows(`id=not.in.(${HISTORY_ONLY_IDS.join(",")})&order=id.desc&limit=${RECENT_FETCH}`),
    fetchRows(`order=score.desc&limit=${HISTORY_FETCH}`),
  ]);
  const recentPeriod = latest[0] ? periodOf(Date.parse(latest[0].created_at)) : null;
  const recent = latest.filter((row) => periodOf(Date.parse(row.created_at)) === recentPeriod);
  return { recent: topByName(recent), history: topByName(history), recentPeriod };
}

async function submitScore(row: ScoreRow) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) throw new Error(await res.text());
}

function TileFace({ value }: { value: number }) {
  const src = tileImg(value);
  const [broken, setBroken] = useState(false);
  if (!src || broken) return <span className="g2048-num">{value}</span>;
  return (
    <>
      <img src={src} alt={String(value)} draggable={false} onError={() => setBroken(true)} />
      <span className="g2048-badge">{value}</span>
    </>
  );
}

const CONFETTI_COLORS = ["#d6c563", "#d4a017", "#f2e3a0", "#7a6a2a", "#4f8fd6", "#e57373", "#fffbf4"];

// 刷新全站最高分或登上近期榜單時的慶祝動畫：彩帶飄落 + 橫幅，約 6 秒或點擊後關閉
function RecordCelebration({ record, onClose }: { record: Celebration; onClose: () => void }) {
  const [pieces] = useState(() =>
    Array.from({ length: 70 }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 1.2,
      duration: 2.4 + Math.random() * 1.8,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size: 6 + Math.random() * 6,
      spin: Math.random() < 0.5 ? -1 : 1,
    })),
  );

  useEffect(() => {
    const t = setTimeout(onClose, 6000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="g2048-record" onClick={onClose}>
      {pieces.map((p, i) => (
        <span
          key={i}
          className="g2048-confetti"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.45,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            "--spin": p.spin,
          } as React.CSSProperties}
        />
      ))}
      <div className="g2048-record-banner">
        <i className={`fa-solid ${record.kind === "history" ? "fa-trophy" : "fa-medal"}`} />
        <p className="g2048-record-title">{record.kind === "history" ? "全站新紀錄！" : "登上近期榜單！"}</p>
        <p className="g2048-record-name">{record.name}</p>
        <p className="g2048-record-score">{record.score} 分</p>
        <p className="g2048-record-sub">第15任團長也為你喝采！</p>
      </div>
    </div>
  );
}

export default function Game2048() {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [over, setOver] = useState(false);
  const [won, setWon] = useState(false);
  const [keepPlaying, setKeepPlaying] = useState(false);
  const [name, setName] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [boards, setBoards] = useState<Boards | null>(null);
  const [boardTab, setBoardTab] = useState<BoardTab>("recent");
  const [boardError, setBoardError] = useState(false);
  const [splash, setSplash] = useState<string | null>(null);
  const [splashLeaving, setSplashLeaving] = useState(false);
  const [record, setRecord] = useState<Celebration | null>(null);
  const closeRecord = useCallback(() => setRecord(null), []);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  // 手機在棋盤上滑動時不要捲動頁面；本頁也關閉下拉重新整理
  useEffect(() => {
    const board = boardRef.current;
    const block = (e: TouchEvent) => {
      if ((e.target as HTMLElement)?.closest("input, button")) return;
      e.preventDefault();
    };
    board?.addEventListener("touchmove", block, { passive: false });
    const html = document.documentElement;
    const prevOverscroll = html.style.overscrollBehaviorY;
    html.style.overscrollBehaviorY = "none";
    return () => {
      board?.removeEventListener("touchmove", block);
      html.style.overscrollBehaviorY = prevOverscroll;
    };
  }, []);

  const maxTile = tiles.reduce((m, t) => Math.max(m, t.value), 0);

  const loadBoards = useCallback(() => {
    fetchBoards()
      .then((rows) => {
        setBoards(rows);
        setBoardError(false);
      })
      .catch(() => setBoardError(true));
  }, []);

  const restart = useCallback(() => {
    setTiles(newGame());
    setScore(0);
    setOver(false);
    setWon(false);
    setKeepPlaying(false);
    setSubmitState("idle");
  }, []);

  useEffect(() => {
    restart();
    try {
      setBest(Number(localStorage.getItem(BEST_KEY)) || 0);
    } catch {}
    loadBoards();
    // 預載方塊圖
    for (let i = 1; i <= 11; i++) {
      const src = tileImg(2 ** i);
      if (src) new Image().src = src;
    }
  }, [restart, loadBoards]);

  // 進入頁面時的蓋板：隨機一張插圖，約兩秒後淡出（重新開始不會再出現）
  useEffect(() => {
    setSplash(tileImg(2 ** (Math.floor(Math.random() * 11) + 1)));
    const fade = setTimeout(() => setSplashLeaving(true), 2000);
    const hide = setTimeout(() => setSplash(null), 2400);
    return () => {
      clearTimeout(fade);
      clearTimeout(hide);
    };
  }, []);

  const dismissSplash = () => {
    setSplashLeaving(true);
    setTimeout(() => setSplash(null), 400);
  };

  const handleMove = useCallback(
    (dir: Dir) => {
      if (over || (won && !keepPlaying)) return;
      const { tiles: moved, gained, moved: didMove } = move(tiles, dir);
      if (!didMove) return;
      const next = addRandomTile(moved);
      const newScore = score + gained;
      setTiles(next);
      setScore(newScore);
      if (newScore > best) {
        setBest(newScore);
        try {
          localStorage.setItem(BEST_KEY, String(newScore));
        } catch {}
      }
      if (!keepPlaying && next.some((t) => t.value >= 2048)) setWon(true);
      if (!canMove(next)) setOver(true);
    },
    [tiles, score, best, over, won, keepPlaying],
  );

  useEffect(() => {
    const keyMap: Record<string, Dir> = {
      ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right",
      w: "up", s: "down", a: "left", d: "right",
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      const dir = keyMap[e.key];
      if (!dir) return;
      e.preventDefault();
      handleMove(dir);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleMove]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
    handleMove(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 1 || trimmed.length > 12 || submitState === "sending") return;
    setSubmitState("sending");
    const finalScore = Math.min(score, 500000);
    try {
      // 送出前取最新排行榜，用來判斷是否刷新全站最高分或新登上近期榜單
      const before = await fetchBoards().catch(() => null);
      await submitScore({
        name: trimmed,
        score: finalScore,
        max_tile: Math.min(maxTile, MAX_TILE_ALLOWED),
      });
      setSubmitState("done");
      const after = await fetchBoards().catch(() => null);
      if (after) setBoards(after);
      setBoardError(!after);
      const isMine = (row: ScoreRow) => row.name === trimmed && row.score === finalScore;
      if (before && finalScore > 0 && finalScore > (before.history[0]?.score ?? 0)) {
        setRecord({ kind: "history", name: trimmed, score: finalScore });
      } else if (before && after?.recent.some(isMine) && !before.recent.some(isMine)) {
        setRecord({ kind: "recent", name: trimmed, score: finalScore });
      }
    } catch {
      setSubmitState("error");
    }
  };

  const showOverlay = over || (won && !keepPlaying);
  const shownRows = boards?.[boardTab] ?? null;
  const recentPeriod = boards?.recentPeriod ?? null;
  const recentNote =
    recentPeriod === null
      ? null
      : recentPeriod === periodOf(Date.now())
        ? `本期 ${periodLabel(recentPeriod)}`
        : `目前顯示最近一期 ${periodLabel(recentPeriod)}，下一位送出分數的玩家將開啟新一期榜單。`;
  const rankNote = boardTab === "recent" ? recentNote : "全站歷來的前五名，同一暱稱只列最高分。";

  // 繼續挑戰後，遊戲結束時可以再送出更高的最終分數
  const continueGame = () => {
    setKeepPlaying(true);
    setSubmitState("idle");
  };

  return (
    <div className="g2048">
      {record && <RecordCelebration record={record} onClose={closeRecord} />}
      {splash && (
        <div className={`g2048-splash${splashLeaving ? " is-leaving" : ""}`} onClick={dismissSplash}>
          <figure>
            <img src={splash} alt="阿爾敏插圖" />
            <figcaption>為第15任團長獻上祝福！</figcaption>
          </figure>
        </div>
      )}
      <div className="g2048-scores">
        <div className="g2048-score"><span>分數</span><strong>{score}</strong></div>
        <div className="g2048-score"><span>最高分</span><strong>{best}</strong></div>
        <button type="button" className="g2048-btn" onClick={restart}>重新開始</button>
      </div>

      <div className="g2048-board" ref={boardRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {Array.from({ length: SIZE * SIZE }, (_, i) => (
          <div className="g2048-cell" key={i} style={{ gridRow: Math.floor(i / SIZE) + 1, gridColumn: (i % SIZE) + 1 }} />
        ))}
        {tiles.map((t) => (
          <div
            key={t.id}
            className={`g2048-tile${t.merged ? " is-merged" : ""}${t.isNew ? " is-new" : ""}`}
            style={{ "--r": t.r, "--c": t.c } as React.CSSProperties}
          >
            <div className="g2048-tile-inner">
              <TileFace value={t.value} />
            </div>
          </div>
        ))}

        {showOverlay && (
          <div className="g2048-overlay">
            <p className="g2048-overlay-title">{over ? "遊戲結束" : "達成 2048！生日快樂，阿爾敏！"}</p>
            <p>本局分數：{score}</p>
            {!over && (
              <>
                <p>遊戲還沒結束，可以繼續挑戰更高分！</p>
                <button type="button" className="g2048-btn g2048-btn-primary" onClick={continueGame}>繼續挑戰</button>
              </>
            )}
            {submitState === "done" ? (
              <p>已送出分數，感謝參與！</p>
            ) : (
              <form className="g2048-form" onSubmit={onSubmit}>
                <input
                  type="text"
                  value={name}
                  maxLength={12}
                  placeholder="輸入暱稱（1–12 字）"
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="g2048-btn" disabled={!name.trim() || submitState === "sending"}>
                  {submitState === "sending" ? "送出中…" : "送出分數"}
                </button>
              </form>
            )}
            {submitState === "error" && <p className="g2048-error">送出失敗，請稍後再試。</p>}
            <div className="g2048-overlay-actions">
              <button type="button" className="g2048-btn" onClick={restart}>再玩一次</button>
            </div>
          </div>
        )}
      </div>

      <p className="g2048-hint">電腦用方向鍵（或 WASD），手機在棋盤上滑動。</p>

      <section className="g2048-rank">
        <h3>排行榜前五名</h3>
        <div className="g2048-rank-tabs" role="group" aria-label="切換排行榜">
          <button type="button" aria-pressed={boardTab === "recent"} onClick={() => setBoardTab("recent")}>近期榜單</button>
          <button type="button" aria-pressed={boardTab === "history"} onClick={() => setBoardTab("history")}>歷史榜單</button>
        </div>
        {rankNote && <p className="g2048-rank-note">{rankNote}</p>}
        {boardError ? (
          <p>排行榜暫時無法載入。</p>
        ) : shownRows === null ? (
          <p>載入中…</p>
        ) : shownRows.length === 0 ? (
          <p className="g2048-rank-empty">目前還沒有紀錄，成為第一位吧！</p>
        ) : (
          <ol>
            {shownRows.map((row, i) => (
              <li key={i} className={`g2048-rank-${i + 1}`}>
                <span className="g2048-rank-no">{i + 1}</span>
                <span className="g2048-rank-name">{row.name}</span>
                <span className="g2048-rank-score">{row.score} 分</span>
                <span className="g2048-rank-tile">最大 {row.max_tile}</span>
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  );
}
