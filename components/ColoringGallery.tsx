"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import type { ColoringGalleryData, ColoringWork } from "@/data/coloringGallery";

// 置中三張的 loop 模式至少需要 6 張，作品不足時重複排列
const MIN_LOOP_SLIDES = 6;

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="cg-frame">
      {["t", "r", "b", "l"].map((side) => (
        <span key={side} className={`cg-side cg-side-${side}`} />
      ))}
      <div className="cg-carve">
        <div className="cg-mat">{children}</div>
      </div>
    </div>
  );
}

function Nameplate({ work }: { work: ColoringWork }) {
  return (
    <div className="cg-nameplate">
      <span className="cg-nameplate-author">作者｜{work.author}</span>
    </div>
  );
}

export default function ColoringGallery({ data }: { data: ColoringGalleryData }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [openWork, setOpenWork] = useState<ColoringWork | null>(null);

  const works = data.works;
  const slides: ColoringWork[] = [];
  while (works.length > 0 && slides.length < MIN_LOOP_SLIDES) slides.push(...works);

  useEffect(() => {
    if (!openWork) return;
    swiperRef.current?.autoplay?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenWork(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      swiperRef.current?.autoplay?.start();
    };
  }, [openWork]);

  if (works.length === 0) return null;

  return (
    <div className="cg-gallery">
      <div className="cg-stage">
        <button className="cg-arrow cg-arrow-prev" aria-label="上一張" onClick={() => swiperRef.current?.slidePrev()}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <Swiper
          className="cg-swiper"
          modules={[Autoplay]}
          loop
          centeredSlides
          grabCursor
          speed={800}
          slidesPerView={1.4}
          breakpoints={{ 768: { slidesPerView: 3 } }}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onClick={(swiper) => {
            const index = swiper.clickedSlide?.dataset.workIndex;
            if (index !== undefined) setOpenWork(slides[Number(index)]);
          }}
        >
          {slides.map((work, i) => (
            <SwiperSlide key={`${work.img}-${i}`} data-work-index={i}>
              <figure className="cg-item">
                <Frame>
                  <img src={work.img} alt={`作者：${work.author}`} draggable={false} />
                </Frame>
                <Nameplate work={work} />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="cg-arrow cg-arrow-next" aria-label="下一張" onClick={() => swiperRef.current?.slideNext()}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      {openWork &&
        createPortal(
          <div className="cg-lightbox" onClick={() => setOpenWork(null)}>
            <figure className="cg-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <button className="cg-close" aria-label="關閉" onClick={() => setOpenWork(null)}>
                ×
              </button>
              <Frame>
                <img src={openWork.img} alt={`作者：${openWork.author}`} />
              </Frame>
              <Nameplate work={openWork} />
            </figure>
          </div>,
          document.body,
        )}
    </div>
  );
}
