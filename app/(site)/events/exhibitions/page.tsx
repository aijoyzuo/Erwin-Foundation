import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "藝文展覽｜Erwin Foundation",
};

const posts = [
  {
    slug: "artical202501",
    title: "海岸線手札：還原艾連‧葉卡故居",
    meta: "展期：2025-10-10 ~ 2025-12-25　地點：地下室展區",
    img: "/img/POSTER/POSTER2.jpg",
    text: "帕拉迪島的海岸線總長度約為4,828公里，那意味著要搭上將近一星期的火車，才能夠繞行帕島一周。",
  },
  {
    slug: "artical202502",
    title: "士兵留聲機：朋友啊，在沒有城牆的拂曉中再會吧。",
    meta: "展期：永久　地點：線上展覽",
    img: "/img/spinningrecord-player.jpg",
    text: "本展覽彙集2024年艾爾文‧史密斯誕辰紀念日留聲機活動留言總計20餘則。",
  },
  {
    slug: "artical202401",
    title: "「面向大海」：史密斯廣場公共藝術檔案展",
    meta: "展期：2024-10-10 ~ 2024-12-25　地點：史密斯廣場",
    img: "/img/POSTER/POSTER3.jpg",
    text: "從處刑台到雕像，廣場如何被權力與記憶改寫？本展覽匯集照片、手稿與口述歷史，呈現公共空間的多重意義。",
  },
];

export default function ExhibitionsPage() {
  return (
    <main className="content">
      <div className="exh-wrap">
        <nav className="breadcrumb">
          <Link href="/">首頁</Link> › 藝文展覽
        </nav>
        <h1 style={{ paddingBottom: 8 }}>藝文展覽｜歷年活動</h1>
        <section>
          {posts.map((post) => (
            <article className="post-card" key={post.slug}>
              <h2>{post.title}</h2>
              <div className="meta"><span>{post.meta}</span></div>
              <img className="thumb" src={post.img} alt="展覽縮圖" />
              <p>{post.text}</p>
              <Link className="read-more" href={`/events/exhibitions/${post.slug}`}>繼續閱讀</Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
