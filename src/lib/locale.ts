import type { Locale } from "@/lib/i18n";

const EN_PATHS = [
  "/",
  "/crafting/",
  "/stats/",
  "/vs-trident/",
  "/tips/",
  "/bedrock-offhand/",
  "/update/",
  "/wiki/",
  "/disk/",
  "/chakram/",
] as const;

export type SitePath = (typeof EN_PATHS)[number];

export const SITE_PATHS: SitePath[] = [...EN_PATHS];

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

/** Strip `/zh` prefix → English path */
export function toEnglishPath(pathname: string): string {
  if (pathname === "/zh" || pathname === "/zh/") return "/";
  if (pathname.startsWith("/zh/")) {
    const rest = pathname.slice(3);
    return rest.endsWith("/") ? rest : `${rest}/`;
  }
  return pathname.endsWith("/") || pathname === "/" ? pathname : `${pathname}/`;
}

/** English path → localized path */
export function localizePath(path: string, locale: Locale): string {
  const normalized =
    path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  if (locale === "en") return normalized;
  return normalized === "/" ? "/zh/" : `/zh${normalized}`;
}

export function alternatePath(pathname: string, target: Locale): string {
  const en = toEnglishPath(pathname);
  return localizePath(en, target);
}
