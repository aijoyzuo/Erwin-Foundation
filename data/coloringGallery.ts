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
    {
      img: "https://images.plurk.com/5tzu5A81KUmPQGtzpzj7TU.jpg",
      author: "Erwin Foundation",
    },
    {
      img: "https://images.plurk.com/7oYhqtSdyzeGmvVwUeSUr8.jpg",
      author: "範例作者一",
    },
    {
      img: "https://images.plurk.com/kW5LlKrvI6mCi0AtKgDml.jpg",
      author: "範例作者二",
    },
  ],
};
