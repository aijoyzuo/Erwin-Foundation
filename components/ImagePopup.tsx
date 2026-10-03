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
        onClick={() => setOpen(true)}
        style={{
          cursor: "pointer",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          ...thumbStyle,
        }}
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
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(900px, 90vw, 90vh)",
              aspectRatio: "1 / 1",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="關閉"
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "none",
                background: "#fff",
                color: "#333",
                fontSize: 18,
                lineHeight: "32px",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,.3)",
              }}
            >
              ×
            </button>
            <img
              src={src}
              alt={alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: 8,
                background: "#fff",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
