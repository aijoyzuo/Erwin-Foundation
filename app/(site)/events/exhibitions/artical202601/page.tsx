import Link from "next/link";
import type { Metadata } from "next";
import { BASE_PATH } from "@/lib/basePath";
import ImagePopup from "@/components/ImagePopup";

export const metadata: Metadata = {
  title: "2026史密斯誕辰著色徵稿活動｜Erwin Foundation",
  description: "本基金會為凝聚新生代對在地歷史的共感，特於史密斯團長生日月舉辦著色畫徵稿，敬邀大小朋友共襄盛舉。",
  openGraph: {
    title: "2026史密斯誕辰著色徵稿活動",
    description: "本基金會為凝聚新生代對在地歷史的共感，特於史密斯團長生日月舉辦著色畫徵稿，敬邀大小朋友共襄盛舉。",
    images: ["https://aijoyzuo.github.io/Erwin-Foundation/img/POSTER/POSTER26-1.png"],
  },
};

export default function Artical202601Page() {
  return (
    <main className="content">
      <div className="article-wrap">
        <nav className="breadcrumb">
          <Link href="/">首頁</Link> › <Link href="/events/exhibitions">藝文展覽</Link> › 正文
        </nav>

        <article>
          <h1>2026史密斯誕辰著色徵稿活動</h1>
          <div className="meta"><span>徵稿期間：即日起至 2026-10-10（六）23:59　</span><span>地點：線上徵稿　主辦：Erwin Foundation</span></div>

          <img className="hero" src={`${BASE_PATH}/img/POSTER/POSTER26-1.png`} style={{ height: 300, objectFit: "cover" }} alt="活動主視覺" />

          <p style={{ paddingBottom: 8 }}>本基金會為凝聚新生代對在地歷史的共感，特於史密斯團長生日月舉辦著色畫徵稿，敬邀大小朋友共襄盛舉。</p>

          <h2>參加方式</h2>
          <div className="artical-pblock">
            下載著色畫公版，完成後透過 Google 表單上傳投稿。
            <br />
            <a href="https://forms.gle/Bw86zUYTH13pdSZK9" target="_blank" rel="noopener noreferrer" className="read-more" style={{ marginTop: 8 }}>投稿表單</a>
          </div>

          <h2>著色畫公版</h2>
          <div className="artical-pblock" style={{ textAlign: "center" }}>
            <ImagePopup
              src="https://images.plurk.com/5tzu5A81KUmPQGtzpzj7TU.jpg"
              alt="著色畫公版圖案"
              thumbStyle={{ width: "100%", maxWidth: 500, borderRadius: 8 }}
            />
            <div style={{ display: "flex", justifyContent: "center", gap: 12, paddingTop: 12 }}>
              <a href="https://images.plurk.com/4zF8D7UfjgA9n96TRM4OFi.png" download className="read-more">下載 PNG</a>
              <a href="https://images.plurk.com/5tzu5A81KUmPQGtzpzj7TU.jpg" download className="read-more">下載 JPG</a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, paddingTop: 24 }}>
              <ImagePopup
                src="https://images.plurk.com/7oYhqtSdyzeGmvVwUeSUr8.jpg"
                alt="範例圖一"
                thumbStyle={{ width: 260, maxWidth: "100%", borderRadius: 8 }}
              />
              <ImagePopup
                src="https://images.plurk.com/4h4t4icXR71uWpJAxXaYbK.jpg"
                alt="範例圖二"
                thumbStyle={{ width: 260, maxWidth: "100%", borderRadius: 8 }}
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

          <Link className="back-link" href="/events/exhibitions">回到展覽列表</Link>
        </article>
      </div>
    </main>
  );
}
