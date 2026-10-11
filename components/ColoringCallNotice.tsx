"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BASE_PATH } from "@/lib/basePath";

// 2026 著色徵稿公告快照（徵稿已結束，按鈕僅保留外觀不可點擊）
export default function ColoringCallNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" className="read-more call-notice-btn" onClick={() => setOpen(true)}>
        徵稿要點
      </button>

      {open &&
        createPortal(
          <div className="call-notice" onClick={() => setOpen(false)}>
            <div className="call-notice-inner" onClick={(e) => e.stopPropagation()}>
              <button className="cg-close" aria-label="關閉" onClick={() => setOpen(false)}>
                ×
              </button>
              <article className="call-notice-body">
                <h1>2026史密斯誕辰著色徵稿活動</h1>
                <div className="meta"><span>徵稿期間：即日起至 2026-10-10（六）23:59　</span><span>地點：線上徵稿　主辦：Erwin Foundation</span></div>

                <img className="hero" src={`${BASE_PATH}/img/POSTER/POSTER26-1.png`} alt="活動主視覺" />

                <p style={{ paddingBottom: 8 }}>本基金會為凝聚新生代對在地歷史的共感，特於史密斯團長生日月舉辦著色畫徵稿，敬邀大小朋友共襄盛舉。</p>

                <h2>參加方式</h2>
                <div className="artical-pblock">
                  下載著色畫公版，完成後透過 Google 表單上傳投稿。
                  <br />
                  <span className="read-more snapshot-link" style={{ marginTop: 8 }}>投稿表單</span>
                </div>

                <h2>著色畫公版</h2>
                <div className="artical-pblock" style={{ textAlign: "center" }}>
                  <img
                    src="https://images.plurk.com/5tzu5A81KUmPQGtzpzj7TU.jpg"
                    alt="著色畫公版圖案"
                    style={{ width: "100%", maxWidth: 500, aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 8, margin: "0 auto" }}
                  />
                  <div style={{ display: "flex", justifyContent: "center", gap: 12, paddingTop: 12 }}>
                    <span className="read-more snapshot-link">PNG</span>
                    <span className="read-more snapshot-link">JPG</span>
                  </div>
                </div>

                <h2>投稿示範圖</h2>
                <div className="artical-pblock" style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
                    <img
                      src="https://images.plurk.com/7oYhqtSdyzeGmvVwUeSUr8.jpg"
                      alt="範例圖一"
                      style={{ width: 260, maxWidth: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 8 }}
                    />
                    <img
                      src="https://images.plurk.com/kW5LlKrvI6mCi0AtKgDml.jpg"
                      alt="範例圖二"
                      style={{ width: 260, maxWidth: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 8 }}
                    />
                  </div>
                </div>

                <h2>投稿須知</h2>
                <div className="artical-pblock">
                  <ul>
                    <li className="artical-li">可自由修改、增添圖面；嚴禁 AI 生成及違反善良風俗的內容。</li>
                    <li className="artical-li">檔案格式 JPG，長寬 900px，請保持公版原始比例。</li>
                    <li className="artical-li">投稿作品將展示於本基金會官網藝廊。</li>
                    <li className="artical-li">公版下載及投稿連結詳見公告。</li>
                  </ul>
                  <p style={{ paddingTop: 8 }}>TIPS：萬聖節快到了，不妨讓團長換上特別的服裝吧！</p>
                </div>

                <h2>注意事項</h2>
                <div className="artical-pblock">
                  <ul>
                    <li className="artical-li">著色畫公版僅供本次徵稿使用，請勿另作他用。</li>
                    <li className="artical-li">投稿作品之著作權歸投稿人所有，未經投稿人同意，任何人不得擅自轉載或改作。</li>
                    <li className="artical-li">投稿即視為同意本基金會將作品展示於官網及社群，並標示投稿人署名。</li>
                    <li className="artical-li">本基金會保有作品是否展出之決定權。</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
