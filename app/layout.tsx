import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erwin Foundation",
  description: "本基金會旨在過去、現在、將來，向世界傳達真相與自由的可貴。",
  icons: {
    icon: "/img/coin/htmlicon.ico",
  },
  openGraph: {
    description: "本基金會旨在過去、現在、將來，向世界傳達真相與自由的可貴。",
    images: [
      {
        url: "https://images.plurk.com/4IBR4cVCjUWE3dpAWiNzmy.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
