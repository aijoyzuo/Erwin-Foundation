import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "海岸線手札：還原艾連‧葉卡故居｜Erwin Foundation",
  description: "匯集雕像檔案、修復草圖與口述歷史，追索史密斯廣場的公共記憶。",
  openGraph: {
    title: "「面向大海」：史密斯廣場公共藝術檔案展",
    description: "本展 1:11比例還原艾連‧葉卡故居，對於艾爾文‧史密斯而言夢想埋葬的所在，卻是人類自由的新生地。",
    images: ["https://aijoyzuo.github.io/Erwin-Foundation/img/POSTER/POSTER2.jpg"],
  },
};

export default function Artical202501Page() {
  return (
    <main className="content">
      <div className="article-wrap">
        <nav className="breadcrumb">
          <Link href="/">首頁</Link> › <Link href="/events/exhibitions">藝文展覽</Link> › 正文
        </nav>

        <article>
          <h1>海岸線手札：還原艾連‧葉卡故居</h1>
          <div className="meta"><span>展期：2025-10-10 ~ 2025-12-25　</span><span>地點：地下室展區　主辦：Erwin Foundation</span></div>

          <img className="hero" src="/img/POSTER/POSTER2.jpg" alt="展覽主視覺" />

          <p style={{ paddingBottom: 8 }}>本展 1:1 比例還原艾連‧葉卡故居，對於艾爾文‧史密斯而言夢想埋葬的所在，卻是人類自由的新生地。</p>
          <h2>緣起</h2>
          <div className="artical-pblock">
            「帕拉迪島的海岸線總長度約為4,828公里，那意味著要搭上將近一星期的火車，才能夠繞行帕島一周。
            把世界交到了我手中的長官與吾友，大概沒有想過這奢侈的自由，首先被我浪費在量測我們的家鄉……」
            <br />
            <span className="quote-note">──摘自阿爾敏‧亞魯雷特《海岸線手札》</span>
          </div>
          <h2>展區重點</h2>
          <div className="artical-pblock">
            <ul>
              <li className="artical-li">艾連‧葉卡故居：依據手札內容，還原地下室格局，包含書桌機關，以及被士官長踢破的門板展示</li>
              <li className="artical-li">來自馬雷的照片：模擬還原來自陌生陸地的照片，為調查兵團第一次得知海另一邊的世界</li>
              <li className="artical-li">同袍語錄：收錄於手札中，有關調查兵團104期(新里維班)在戰時苦中作樂的語錄，顯示士兵們的強大意志</li>
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
