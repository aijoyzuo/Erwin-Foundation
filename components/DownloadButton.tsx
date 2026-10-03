"use client";

export default function DownloadButton({
  href,
  filename,
  className,
  children,
}: {
  href: string;
  filename: string;
  className?: string;
  children: React.ReactNode;
}) {
  async function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    try {
      const res = await fetch(href);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      window.location.href = href;
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
