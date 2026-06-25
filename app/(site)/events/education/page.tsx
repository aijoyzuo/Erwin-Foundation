import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "推廣教育｜Erwin Foundation",
};

const items = [
  {
    title: "2025 課外走讀：史密斯廣場的公共記憶",
    meta: ["日期：2025-09-10　", "地點：史密斯廣場　對象：高中職"],
    tags: ["歷史走讀", "地方學"],
    text: "透過場域導覽與互動任務，認識廣場從政治儀式到公共藝術的轉變。",
  },
  {
    title: "2024 艾爾文史密斯誕辰活動：小士兵體驗營",
    meta: ["日期：2024-10-01～2024-10-31　", "地點：基金會教室　對象：親子"],
    tags: ["工作坊", "活動體驗"],
    text: "透過實際體驗、有獎徵答及三道牆闖關活動，引發幼童對於本島歷史的興趣與認識。",
    img: "/img/POSTER/POSTER1.jpg",
  },
  {
    title: "2023 帕島走春：迎接新氣象",
    meta: ["日期：2023-02-08　", "地點：基金會會館　對象：全員"],
    tags: ["歷史走讀", "走春"],
    text: "從基金會會館出發，透過親身步行和實際體驗，探訪戰後遺跡，深度認識帕拉迪島的歷史文化。",
  },
  {
    title: "2022 艾爾文史密斯誕辰活動：圖像修復入門",
    meta: ["日期：2022-10-14　", "地點：基金會教室　對象：社會人士"],
    tags: ["工作坊", "保存修復"],
    text: "以艾爾文雕像影像為案例，示範基礎影像清理與重建倫理。",
  },
];

export default function EducationPage() {
  return (
    <main className="content">
      <div className="edu-wrap">
        <nav className="breadcrumb">
          <Link href="/">首頁</Link> › 推廣教育
        </nav>
        <h1 style={{ paddingBottom: 8 }}>推廣教育｜歷年活動</h1>
        <section>
          {items.map((item) => (
            <div className="edu-item" key={item.title}>
              <h3>{item.title}</h3>
              <div className="edu-meta">{item.meta.map((m) => <span key={m}>{m}</span>)}</div>
              <div>
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <p className="edu-item-p">{item.text}</p>
              {item.img && <img src={item.img} alt={item.title} className="thumb" />}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
