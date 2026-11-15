import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { SITE_PATHS, localizePath } from "@/lib/locale";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.lastUpdated);
  const entries: MetadataRoute.Sitemap = [];

  for (const path of SITE_PATHS) {
    const en = localizePath(path, "en");
    const zh = localizePath(path, "zh");
    const isHome = path === "/";
    const isUpdate = path === "/update/";

    entries.push({
      url: `${SITE.url}${en}`,
      lastModified,
      changeFrequency: isHome || isUpdate ? "daily" : "weekly",
      priority: isHome ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${SITE.url}${en}`,
          zh: `${SITE.url}${zh}`,
        },
      },
    });

    entries.push({
      url: `${SITE.url}${zh}`,
      lastModified,
      changeFrequency: isHome || isUpdate ? "daily" : "weekly",
      priority: isHome ? 0.9 : 0.75,
      alternates: {
        languages: {
          en: `${SITE.url}${en}`,
          zh: `${SITE.url}${zh}`,
        },
      },
    });
  }

  return entries;
}
