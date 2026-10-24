import Link from "next/link";
import type { Metadata } from "next";
import Game2048 from "@/components/Game2048";

export const metadata: Metadata = {
  title: "阿爾敏生日紀念 2048｜Erwin Foundation",
};

export default function Armin2048Page() {
  return (
    <main className="content">
      <div className="edu-wrap">
        <nav className="breadcrumb">
          <Link href="/">首頁</Link> › 阿爾敏生日紀念
        </nav>
        <h1 style={{ paddingBottom: 8 }}>阿爾敏生日紀念｜2048</h1>
        <section className="edu-item">
          <p className="edu-item-p">合併相同的方塊，從 2 一路合成到 2048，收集所有阿爾敏的插圖吧！</p>
          <Game2048 />
        </section>
      </div>
    </main>
  );
}
