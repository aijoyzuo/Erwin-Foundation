"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { BASE_PATH } from "@/lib/basePath";

const slides = [
  `${BASE_PATH}/img/POSTER/POSTER2025-3.jpg`,
  `${BASE_PATH}/img/POSTER/POSTER2025-2.jpg`,
  `${BASE_PATH}/img/POSTER/POSTER2025-1.jpg`,
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
      {slides.map((src) => (
        <SwiperSlide key={src}>
          <img src={src} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
