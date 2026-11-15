export const SITE = {
  name: "Throwing Disc Minecraft",
  shortName: "Throwing Disc",
  domain: "throwingdiscminecraft.com",
  url: "https://throwingdiscminecraft.com",
  locale: "en",
  alternateLocales: ["zh"] as const,
  lastUpdated: "2026-11-15",
  announcedAt: "2026-11-14",
  dropWindow: "Q1 2027",
  dropName: "First Drop 2027",
  twitter: "https://x.com/Minecraft",
  officialArticle:
    "https://www.minecraft.net/en-us/article/twitchcon-gamedrop-features",
  officialWiki: "https://minecraft.wiki/w/Throwing_Disc",
  youtubeSearch:
    "https://www.youtube.com/results?search_query=NEW+THROWING+WEAPON+ALERT+Minecraft",
  description:
    "Everything about Minecraft's Throwing Disc — crafting recipes, damage stats, ricochet tips, Bedrock off-hand support, and First Drop 2027 updates.",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/crafting/", label: "Crafting" },
  { href: "/stats/", label: "Stats" },
  { href: "/vs-trident/", label: "vs Trident" },
  { href: "/tips/", label: "Tips" },
  { href: "/bedrock-offhand/", label: "Bedrock Off-hand" },
  { href: "/update/", label: "2027 Update" },
  { href: "/wiki/", label: "Wiki" },
  { href: "/disk/", label: "Disk" },
  { href: "/chakram/", label: "Chakram" },
] as const;
