import Link from "next/link";
import type { Metadata } from "next";
import { BASE_PATH } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "藝文展覽｜Erwin Foundation",
};

const posts = [
  {
    slug: "artical202601",
    title: "2026史密斯誕辰著色徵稿活動",
    meta: "徵稿期間：即日起至 2026-10-10（六）　地點：線上徵稿",
    img: `${BASE_PATH}/img/POSTER/POSTER26-1.png`,
    text: "本基金會為凝聚新生代對在地歷史的共感，特於史密斯團長生日月舉辦著色畫徵稿，敬邀大小朋友共襄盛舉。",
  },
  {
    slug: "artical202504",
    title: "吋尺的天與地：舉起槍也舉起我們的孩子",
    meta: "展期：2025-10-01 ~ 2025-10-30　地點：二樓展覽室",
    img: `${BASE_PATH}/img/POSTER/POSTER2025-2.jpg`,
    text: "以1/12微縮模型重現天與地之戰。在自由之名下舉起槍的手，也是在人類存亡邊緣，將嬰孩高高托起的手。",
  },
  {
    slug: "artical202501",
    title: "海岸線手札：還原艾連‧葉卡故居",
    meta: "展期：2025-10-10 ~ 2025-12-25　地點：地下室展區",
    img: `${BASE_PATH}/img/POSTER/POSTER2.jpg`,
    text: "帕拉迪島的海岸線總長度約為4,828公里，那意味著要搭上將近一星期的火車，才能夠繞行帕島一周。",
  },
  {
    slug: "artical202503",
    title: "士兵留聲機（2025）：朋友啊，在沒有城牆的拂曉中再會吧。",
    meta: "展期：永久　地點：線上展覽",
    img: `${BASE_PATH}/img/spinningrecord-player.jpg`,
    text: "本展覽彙集2025年艾爾文‧史密斯誕辰紀念日留聲機活動留言總計35則。",
  },
  {
    slug: "artical202502",
    title: "士兵留聲機：朋友啊，在沒有城牆的拂曉中再會吧。",
    meta: "展期：永久　地點：線上展覽",
    img: `${BASE_PATH}/img/spinningrecord-player.jpg`,
    text: "本展覽彙集2024年艾爾文‧史密斯誕辰紀念日留聲機活動留言總計20餘則。",
  },
  {
    slug: "artical202401",
    title: "「面向大海」：史密斯廣場公共藝術檔案展",
    meta: "展期：2024-10-10 ~ 2024-12-25　地點：史密斯廣場",
    img: `${BASE_PATH}/img/POSTER/POSTER3.jpg`,
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
