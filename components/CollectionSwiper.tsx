"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const items = [
  {
    img: "/img/boject/bolotie.jpg",
    title: "波洛領帶",
    text: "本基金會館藏為複製品。艾爾文升任團長後使用的波洛領帶，真品在艾爾文於瑪麗亞之牆奪還戰殉職數月之後，隨同下葬。",
  },
  {
    img: "/img/boject/titan.jpg",
    title: "巨人手稿",
    text: "艾爾文領兵對戰羅德‧雷斯變成的奇形種時，以左手繪製，留下的珍貴手稿。由當時仍為調查兵團成員的希斯特莉亞‧雷斯保存，以艾爾迪亞皇室名義捐贈。",
  },
  {
    img: "/img/boject/armband.jpg",
    title: "調查兵團臂章",
    text: "退役士官長里維‧阿卡曼捐贈。",
  },
];

export default function CollectionSwiper() {
  return (
    <Swiper
      className="swiper mySwiper"
      modules={[Pagination, Navigation, Scrollbar, Autoplay]}
      direction="horizontal"
      speed={1500}
      loop
      autoplay={{ delay: 2500 }}
      pagination={{ el: ".swiper-pagination" }}
      navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      scrollbar={{ el: ".swiper-scrollbar" }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.title}>
          <img src={item.img} alt={item.title} />
          <div className="collection-a">
            <h3>{item.title}</h3>
            <p className="section-p">{item.text}</p>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination" />
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
      <div className="swiper-scrollbar" />
    </Swiper>
  );
}
