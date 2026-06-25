"use client";

import { useEffect, useRef } from "react";
import { BASE_PATH } from "@/lib/basePath";

export default function CoinAnimator() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const coin = imgRef.current;
    if (!coin || !coin.animate) return;
    const keyframes = [{ transform: "rotateY(0deg)" }, { transform: "rotateY(360deg)" }];
    const timing = { duration: 1200, easing: "ease-in-out", iterations: 1, fill: "none" as const };
    const interval = setInterval(() => coin.animate(keyframes, timing), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="animatedElement">
      <img ref={imgRef} src={`${BASE_PATH}/img/coin/Free Gold Coin Mockup3.png`} alt="" />
    </div>
  );
}
