import Link from "next/link";
import type { Metadata } from "next";
import { BASE_PATH } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "吋尺的天與地｜Erwin Foundation",
  description: "反戰專題月微縮模型特展，以士兵公仔重現戰場場景，叩問舉起槍的手，也曾是孩子的手。",
  openGraph: {
    title: "吋尺的天與地：舉起槍也舉起我們的孩子",
    description: "反戰專題月微縮模型特展，以士兵公仔重現戰場場景，叩問舉起槍的手，也曾是孩子的手。",
    images: ["https://aijoyzuo.github.io/Erwin-Foundation/img/POSTER/POSTER2025-2.jpg"],
  },
};

export default function Artical202504Page() {
  return (
    <main className="content">
      <div className="article-wrap">
        <nav className="breadcrumb">
          <Link href="/">首頁</Link> › <Link href="/events/exhibitions">藝文展覽</Link> › 正文
        </nav>

        <article>
          <h1>吋尺的天與地：舉起槍也舉起我們的孩子</h1>
          <div className="meta"><span>展期：現正展出中　</span><span>地點：二樓展覽室　主辦：Erwin Foundation</span></div>

          <img className="hero" src={`${BASE_PATH}/img/POSTER/POSTER2025-2.jpg`} alt="展覽主視覺" />

          <p style={{ paddingBottom: 8 }}>反戰專題月微縮模型特展，以士兵公仔重現戰場場景，叩問舉起槍的手，也曾是孩子的手。</p>
          <h2>緣起</h2>
          <div className="artical-pblock">
            天與地之戰中倒下的，不只有葉卡派與保守派的士兵，更有尚未長大就被迫披上軍裝的孩子。本展以吋尺大小的公仔重現戰場一隅，刻意保留玩具般的比例與神情，提醒觀者：每一個舉槍的身影，都曾是某人懷裡的孩子。
          </div>
          <h2>展區重點</h2>
          <div className="artical-pblock">
            <ul>
              <li className="artical-li">微縮戰場：以吋尺比例公仔還原天與地之戰的交戰場景</li>
              <li className="artical-li">孩子的手：並陳士兵從軍前後的身形對照，呈現戰爭對個體的改寫</li>
              <li className="artical-li">反戰留言牆：開放觀展民眾寫下對和平的想望</li>
            </ul>
          </div>
          <h2>參觀資訊</h2>
          <div className="artical-pblock">
            <p>免費入場；週一休館。導覽預約請來信 info@erwin-foundation.com。</p>
          </div>

          <Link className="back-link" href="/events/exhibitions">回到展覽列表</Link>
        </article>
      </div>
    </main>
  );
}
