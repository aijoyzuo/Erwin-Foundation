import Link from "next/link";
import type { Metadata } from "next";
import styles from "./sponsor.module.css";
import { BASE_PATH } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "sponsor",
  description: "沒想到你會來到這裡。",
  icons: {
    icon: `${BASE_PATH}/img/coin/favicon.ico`,
  },
};

export default function SponsorPage() {
  return (
    <div className={styles.bgc}>
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb}>
          <Link href="/">首頁</Link> › 贊助調查兵團
        </nav>
        <h1>士兵，謝謝你。</h1>
        <ul>
          <li>
            <a
              href="https://famistore.famiport.com.tw/famistore/users/1553401/malls/010000000000000000994e2c"
              title="好賣+"
              target="_blank"
              rel="noreferrer"
            >
              左邊是有實體物的地方。
            </a>
          </li>
          <li>
            <a
              href="https://www.doujin.com.tw/authors/info/g:m7wq47263w0o4"
              title="同人誌中心"
              target="_blank"
              rel="noreferrer"
            >
              右邊是有電子書的地方。
            </a>
          </li>
        </ul>

        <img src={`${BASE_PATH}/img/hbdwinbig.png`} title="no party in Paradis." alt="no party in Paradis." />
        <p className={styles.pa}>(對了，網頁的製作者是佐降)</p>
        <p className={styles.pb}>Special Thanks: woffy</p>
      </div>
    </div>
  );
}
