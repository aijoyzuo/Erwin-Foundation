import Link from "next/link";
import type { Metadata } from "next";
import { BASE_PATH } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "吋尺的天與地｜Erwin Foundation",
  description: "以1/12微縮模型重現天與地之戰。在自由之名下舉起槍的手，也是在人類存亡邊緣，將嬰孩高高托起的手。",
  openGraph: {
    title: "吋尺的天與地：舉起槍也舉起我們的孩子",
    description: "以1/12微縮模型重現天與地之戰。在自由之名下舉起槍的手，也是在人類存亡邊緣，將嬰孩高高托起的手。",
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
          <div className="meta"><span>展期：2025-10-01 ~ 2025-10-30　</span><span>地點：二樓展覽室　主辦：Erwin Foundation</span></div>

          <img className="hero" src={`${BASE_PATH}/img/POSTER/POSTER2025-2.jpg`} alt="展覽主視覺" />

          <p style={{ paddingBottom: 8 }}>以1/12微縮模型重現天與地之戰。在自由之名下舉起槍的手，也是在人類存亡邊緣，將嬰孩高高托起的手。</p>
          <h2>緣起</h2>
          <div className="artical-pblock">
            本展覽為反戰專題月活動，即使身處戰場，人們仍本能地守護生命，將希望寄於尚不可測的未來，一場艾爾迪亞與世界的戰爭，同時也是人類殘虐與溫柔間的拉扯，每雙用來舉槍的手，原本都是用來托起我們的嬰孩。
          </div>
          <h2>展區重點</h2>
          <div className="artical-pblock">
            <ul>
              <li className="artical-li">終尾巨人模型：經口述與側寫的終尾巨人模型，即便是1/12的微縮版，仍幾乎占滿展區。</li>
              <li className="artical-li">紅色包巾：據傳為戰時遺留的嬰兒襁褓，惟無明確證據可考。紀念品區販售還原版。</li>
              <li className="artical-li">反戰留言牆：邀請參觀的民眾寫下自己對和平的展望。</li>
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
