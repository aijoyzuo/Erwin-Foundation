"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      id="backToTopBtn"
      title="回到上方"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: 30,
        right: 20,
        width: 48,
        height: 48,
        borderRadius: 9999,
        backgroundColor: "rgb(122, 106, 42)",
        color: "white",
        border: "none",
        boxShadow: "0 4px 10px rgba(122, 106, 42, 0.3)",
        cursor: "pointer",
        zIndex: 1055,
        display: visible ? "block" : "none",
      }}
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
