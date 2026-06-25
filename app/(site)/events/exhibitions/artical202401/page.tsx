import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "「面向大海」：史密斯廣場公共藝術檔案展｜Erwin Foundation",
  description: "匯集雕像檔案、修復草圖與口述歷史，追索史密斯廣場的公共記憶。",
  openGraph: {
    title: "「面向大海」：史密斯廣場公共藝術檔案展",
    description: "匯集雕像檔案、修復草圖與口述歷史，追索史密斯廣場的公共記憶。",
    images: ["https://aijoyzuo.github.io/Erwin-Foundation/img/POSTER/POSTER3.jpg"],
  },
};

export default function Artical202401Page() {
  return (
    <main className="content">
      <div className="article-wrap">
        <nav className="breadcrumb">
          <Link href="/">首頁</Link> › <Link href="/events/exhibitions">藝文展覽</Link> › 正文
        </nav>

        <article>
          <h1>「面向大海」：史密斯廣場公共藝術檔案展</h1>
          <div className="meta"><span>展期：2024-10-10 ~ 2024-12-25　</span><span>地點：史密斯廣場　主辦：Erwin Foundation</span></div>

          <img className="hero" src="/img/POSTER/POSTER3.jpg" alt="展覽主視覺" />

          <p style={{ paddingBottom: 8 }}>本展從公共空間的政治象徵出發，透過檔案影像、修復草圖與口述歷史，呈現雕像如何在不同政權更替之間被摧毀、重寫與再詮釋。</p>
          <h2>緣起</h2>
          <div className="artical-pblock">
            廣場上立起了艾爾文的雕像，誇大的鼻樑和深邃的眉眼，神情嚴肅的男子與他的駿馬面朝著海的方向，象徵帕島的驍勇，與對真相的無盡渴求。
          </div>
          <h2>展區重點</h2>
          <div className="artical-pblock">
            <ul>
              <li className="artical-li">檔案室：模擬雕像被拆毀前後的影像對照</li>
              <li className="artical-li">史密斯廣場：以史密斯廣場為主軸之藝術作品展覽</li>
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
