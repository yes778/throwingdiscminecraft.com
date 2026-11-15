"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/data/site";
import { ZH_NAV, ZH_SITE } from "@/data/zh-content";
import { t } from "@/lib/i18n";
import { getLocaleFromPathname } from "@/lib/locale";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = t(locale);
  const nav = locale === "zh" ? ZH_NAV : NAV;
  const name = locale === "zh" ? ZH_SITE.name : SITE.name;

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <strong>{name}</strong>
          <p>{copy.footerBlurb}</p>
        </div>
        <div className="site-footer__links">
          <p>{copy.guides}</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="site-footer__links">
          <p>{copy.official}</p>
          <ul>
            <li>
              <a href={SITE.officialArticle} rel="noopener noreferrer" target="_blank">
                {copy.officialArticle}
              </a>
            </li>
            <li>
              <a href={SITE.officialWiki} rel="noopener noreferrer" target="_blank">
                {copy.officialWiki}
              </a>
            </li>
            <li>
              <a href={SITE.twitter} rel="noopener noreferrer" target="_blank">
                @Minecraft on X
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="site-footer__copy">
        © {new Date().getFullYear()} {SITE.domain} · {copy.footerEdit}{" "}
        <code>src/data</code>
      </p>
    </footer>
  );
}
