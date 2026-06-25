"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type SubmenuKey = "events" | "support" | "links" | null;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<SubmenuKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setOpenSubmenu(null);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleEnter = (key: SubmenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenSubmenu(key);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenSubmenu(null), 200);
  };

  const closeMobile = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav ref={navRef} className={`navbar ${isOpen ? "is-open" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="logo">
          <img
            src="https://images.plurk.com/UtbUmX81ltjwCg3ucC3fO.png"
            alt="Logo"
            style={{ height: 32, verticalAlign: "middle" }}
          />
          <span>Erwin Foundation</span>
        </Link>
        <div
          className="hamburger"
          id="hamburgerBtn"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((v) => !v);
          }}
        >
          <i className="fa fa-bars" />
        </div>
        <ul className="nav-menu">
          <li><Link href="/#section1">本基金會</Link></li>
          <li><Link href="/#section2">艾爾文生平</Link></li>
          <li><Link href="/#section3">史密斯廣場</Link></li>
          <li><Link href="/#section4">文物典藏</Link></li>
          <li><Link href="/#section5">團長軼聞</Link></li>
          <li
            onMouseEnter={() => handleEnter("events")}
            onMouseLeave={handleLeave}
          >
            <a href="#" className="dropdown-toggle" aria-haspopup="true" aria-expanded={openSubmenu === "events"}>藝文活動</a>
            <ul className={`submenu ${openSubmenu === "events" ? "show" : ""}`}>
              <li><Link href="/events/education">推廣教育</Link></li>
              <li><Link href="/events/exhibitions">藝文展覽</Link></li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleEnter("support")}
            onMouseLeave={handleLeave}
          >
            <a href="#" className="dropdown-toggle" aria-haspopup="true" aria-expanded={openSubmenu === "support"}>支持我們</a>
            <ul className={`submenu ${openSubmenu === "support" ? "show" : ""}`}>
              <li><a href="https://messageboard-five.vercel.app/" target="_blank" rel="noreferrer"><i className="fa-solid fa-comment" /> 留言支持</a></li>
              <li><Link href="/sponsor" target="_blank"><i className="fa-solid fa-circle-dollar-to-slot" /> 贊助支持</Link></li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleEnter("links")}
            onMouseLeave={handleLeave}
          >
            <a href="#" className="dropdown-toggle" aria-haspopup="true" aria-expanded={openSubmenu === "links"}>關聯網站</a>
            <ul className={`submenu ${openSubmenu === "links" ? "show" : ""}`}>
              <li><a href="https://woffymilk.github.io/MrAckerman/index.html" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube" /> 阿卡曼先生頻道</a></li>
              <li><a href="https://woffymilk.github.io/2021Hange/index.html" target="_blank" rel="noreferrer"><i className="fa-solid fa-glasses" /> 韓吉‧佐耶紀念網</a></li>
              <li><a href="https://www.instagram.com/aot_paradis_happy/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" /> 新帕島康樂隊</a></li>
              <li><a href="https://www.youtube.com/watch?v=zR96chkYc08&t=1s" target="_blank" rel="noreferrer"><i className="fa-solid fa-horse-head" /> 馬的圖鑑成果展</a></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* 手機版選單 */}
      <ul className="mobile-menu" id="mobileMenu">
        <li className="mobile-hide"><Link href="/#section1" onClick={closeMobile}>本基金會</Link></li>
        <li className="mobile-hide"><Link href="/#section2" onClick={closeMobile}>艾爾文生平</Link></li>
        <li className="mobile-hide"><Link href="/#section3" onClick={closeMobile}>史密斯廣場</Link></li>
        <li className="mobile-hide"><Link href="/#section4" onClick={closeMobile}>文物典藏</Link></li>
        <li className="mobile-hide"><Link href="/#section5" onClick={closeMobile}>團長軼聞</Link></li>
        <li>
          <a
            href="#"
            className="dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={openSubmenu === "events"}
            onClick={(e) => {
              e.preventDefault();
              setOpenSubmenu((v) => (v === "events" ? null : "events"));
            }}
          >
            藝文活動
          </a>
          <ul className={`submenu ${openSubmenu === "events" ? "show" : ""}`}>
            <li><Link href="/events/education" onClick={closeMobile}><i className="fa-solid fa-graduation-cap indentation" /> 推廣教育</Link></li>
            <li><Link href="/events/exhibitions" onClick={closeMobile}><i className="fa-solid fa-images indentation" /> 藝文展覽</Link></li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            className="dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={openSubmenu === "support"}
            onClick={(e) => {
              e.preventDefault();
              setOpenSubmenu((v) => (v === "support" ? null : "support"));
            }}
          >
            支持我們
          </a>
          <ul className={`submenu ${openSubmenu === "support" ? "show" : ""}`}>
            <li><a href="https://messageboard-five.vercel.app/" target="_blank" rel="noreferrer" onClick={closeMobile}><i className="fa-solid fa-comment indentation" /> 留言支持</a></li>
            <li><Link href="/sponsor" target="_blank" onClick={closeMobile}><i className="fa-solid fa-circle-dollar-to-slot indentation" /> 贊助支持</Link></li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            className="dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={openSubmenu === "links"}
            onClick={(e) => {
              e.preventDefault();
              setOpenSubmenu((v) => (v === "links" ? null : "links"));
            }}
          >
            關聯網站
          </a>
          <ul className={`submenu ${openSubmenu === "links" ? "show" : ""}`}>
            <li><a href="https://woffymilk.github.io/MrAckerman/index.html" target="_blank" rel="noreferrer" onClick={closeMobile}><i className="fa-brands fa-youtube indentation" /> 阿卡曼先生頻道</a></li>
            <li><a href="https://woffymilk.github.io/2021Hange/index.html" target="_blank" rel="noreferrer" onClick={closeMobile}><i className="fa-solid fa-glasses indentation" /> 韓吉‧佐耶紀念網</a></li>
            <li><a href="https://www.instagram.com/aot_paradis_happy/" target="_blank" rel="noreferrer" onClick={closeMobile}><i className="fa-brands fa-instagram indentation" /> 新帕島康樂隊</a></li>
            <li><a href="https://www.youtube.com/watch?v=zR96chkYc08&t=1s" target="_blank" rel="noreferrer" onClick={closeMobile}><i className="fa-solid fa-horse-head indentation" /> 馬的圖鑑成果展</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
