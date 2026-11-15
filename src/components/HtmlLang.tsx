"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getLocaleFromPathname } from "@/lib/locale";

export function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocaleFromPathname(pathname);
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [pathname]);

  return null;
}
