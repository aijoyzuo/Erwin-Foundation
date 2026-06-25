"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function StickyFooterBody({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const isHome = pathname === "/";
    document.body.classList.toggle("sticky-footer", !isHome);
  }, [pathname]);

  return <>{children}</>;
}
