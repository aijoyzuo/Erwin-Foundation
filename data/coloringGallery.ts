// 著色畫比賽展覽區資料
// 新增作品：在 works 陣列裡複製一筆 { img, author } 並填入圖片網址即可
export type ColoringWork = {
  img: string;
  author: string;
};

export type ColoringGalleryData = {
  title: string;
  meta: string[];
  tags: string[];
  text: string;
  works: ColoringWork[];
};

export const coloringGallery: ColoringGalleryData = {
  title: "2026 史密斯誕辰著色徵稿：線上作品展",
  meta: ["日期：即日起至 2026-10-10（六）　", "地點：線上展出　對象：全員"],
  tags: ["著色徵稿", "線上展覽"],
  text: "本基金會為凝聚新生代對在地歷史的共感，於史密斯團長生日月舉辦著色畫徵稿，並於線上展出。",
  works: [
    { img: "https://images.plurk.com/7oYhqtSdyzeGmvVwUeSUr8.jpg", author: "佐降" },
    { img: "https://images.plurk.com/3UnKemvWu5dLEnWeVMsKjJ.jpg", author: "蛋餅" },
    { img: "https://images.plurk.com/4ub9nmc3sHDO3AAi6kH4aT.jpg", author: "一四" },
    { img: "https://images.plurk.com/4mD9MnOMpCskka1blmNeVx.jpg", author: "點狗" },
    { img: "https://images.plurk.com/AffzwL5pxYUCVgZ3nPQME.png", author: "KITTY" },
    { img: "https://images.plurk.com/7fGUn4CDkzQ9rUhO6zXnnn.png", author: "珞走走" },
    { img: "https://images.plurk.com/kW5LlKrvI6mCi0AtKgDml.jpg", author: "woffy" },
    { img: "https://images.plurk.com/3w9jTavXGMveu9LJ8QTJ8R.jpg", author: "joel" },
    { img: "https://images.plurk.com/6SLx6rVOB5g07o379mDGGv.png", author: "珞走走" },
    { img: "https://images.plurk.com/5gYXh1UjL7WRUAOVHEq0Ch.jpg", author: "小瀨" },
    { img: "https://images.plurk.com/4hD9ef2HobQz6vjQqtTdxE.jpg", author: "麵包" },
    { img: "https://images.plurk.com/2t28DxEfYPlO9uWZEgJZxr.jpg", author: "佐降" },
    { img: "https://images.plurk.com/4TgA9s6u1iLzK9RT98dC9Q.jpg", author: "阿喬" },
    { img: "https://images.plurk.com/6Nz1GSKkAyW6okDKPhvCgB.jpg", author: "Simiru/西米る" },
    { img: "https://images.plurk.com/45ZwqKKCTN3q24CvtuGlnf.jpg", author: "燕尾狐蒙面俠" },
    { img: "https://images.plurk.com/1lgYbb94ykI7UJxU9GpWH7.png", author: "花花" },
    { img: "https://images.plurk.com/2x2kTrH7NJe7F7bOBrMafF.jpg", author: "零柒" },
    { img: "https://images.plurk.com/2eNcTOgZHbloxviAXONynO.png", author: "Take" },
    { img: "https://images.plurk.com/3C3WDz3b8QAUluz1mQK6k9.jpg", author: "唉理" },
    { img: "https://images.plurk.com/61UyCr4pcIKYuPf45Jhlw3.jpg", author: "Yuuka" },
  ],
};
