"use client";

import { useState, type CSSProperties } from "react";

export default function ImagePopup({
  src,
  alt,
  thumbStyle,
}: {
  src: string;
  alt: string;
  thumbStyle?: CSSProperties;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ cursor: "pointer", ...thumbStyle }}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 16,
          }}
        >
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 900,
              height: 900,
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 8,
              background: "#fff",
            }}
          />
        </div>
      )}
    </>
  );
}
