"use client";

import { useEffect } from "react";

export default function ScrollObserverInit() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("scrolled", entry.isIntersecting);
      });
    });
    document.querySelectorAll(".scroll-element").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
