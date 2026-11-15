import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { ZH_SITE } from "@/data/zh-content";
import type { Locale } from "@/lib/i18n";
import { localizePath, toEnglishPath } from "@/lib/locale";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  locale?: Locale;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  locale = "en",
}: PageSeo): Metadata {
  const enPath = locale === "zh" ? toEnglishPath(path) : path;
  const localizedPath = localizePath(enPath, locale);
  const url = `${SITE.url}${localizedPath}`;
  const enUrl = `${SITE.url}${enPath === "/" ? "/" : enPath}`;
  const zhUrl = `${SITE.url}${localizePath(enPath, "zh")}`;

  const siteLabel = locale === "zh" ? ZH_SITE.shortName : SITE.shortName;
  const fullTitle =
    localizedPath === "/" || localizedPath === "/zh/"
      ? title
      : `${title} | ${siteLabel} Minecraft`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: {
      canonical: url,
      languages: {
        en: enUrl,
        zh: zhUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: locale === "zh" ? ZH_SITE.name : SITE.name,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
