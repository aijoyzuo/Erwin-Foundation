"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { BASE_PATH } from "@/lib/basePath";

const slides = [
  { img: `${BASE_PATH}/img/POSTER/POSTER26-1.png`, href: "/events/exhibitions/artical202601" },
  { img: `${BASE_PATH}/img/POSTER/POSTER26-2.png` },
  { img: `${BASE_PATH}/img/POSTER/POSTER26-3.png` },
];

export default function PosterSwiper() {
  return (
    <Swiper
      className="swiper1 mySwiper"
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop
      speed={2000}
      autoplay={{ delay: 2500 }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.img}>
          {slide.href ? (
            <Link href={slide.href} style={{ display: "block", width: "100%", height: "100%" }}>
              <img src={slide.img} alt="" />
            </Link>
          ) : (
            <img src={slide.img} alt="" />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
