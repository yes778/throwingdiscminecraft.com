"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/data/site";
import { ZH_NAV, ZH_SITE } from "@/data/zh-content";
import { t } from "@/lib/i18n";
import {
  alternatePath,
  getLocaleFromPathname,
} from "@/lib/locale";

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = t(locale);
  const [open, setOpen] = useState(false);

  const nav = locale === "zh" ? ZH_NAV : NAV;
  const brandName = locale === "zh" ? ZH_SITE.shortName : SITE.shortName;
  const homeHref = locale === "zh" ? "/zh/" : "/";
  const otherLocale = locale === "zh" ? "en" : "zh";
  const switchHref = alternatePath(pathname, otherLocale);

  const isActive = (href: string) => {
    if (href === "/" || href === "/zh/") {
      return pathname === href || pathname === href.replace(/\/$/, "");
    }
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={homeHref} className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden />
          <span className="brand__text">
            <span className="brand__name">{brandName}</span>
            <span className="brand__sub">Minecraft</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{copy.menu}</span>
          <span className={open ? "nav-toggle__bars is-open" : "nav-toggle__bars"} />
        </button>

        <nav
          id="site-nav"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label={copy.navAria}
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? "is-active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lang-switch" aria-label={copy.langLabel}>
            {locale === "en" ? (
              <>
                <span className="lang-switch__active">EN</span>
                <Link
                  href={switchHref}
                  className="lang-switch__link"
                  hrefLang="zh"
                >
                  中文
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={switchHref}
                  className="lang-switch__link"
                  hrefLang="en"
                >
                  EN
                </Link>
                <span className="lang-switch__active">中文</span>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
