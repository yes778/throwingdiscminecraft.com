export type TimelineItem = {
  date: string;
  title: string;
  body: string;
  href?: string;
};

export const TIMELINE: TimelineItem[] = [
  {
    date: "2026-11-14",
    title: "Announced at TwitchCon San Diego",
    body: "Mojang reveals Throwing Disc tiers (copper, iron, gold, diamond, netherite) plus Bedrock full off-hand support for First Drop 2027.",
    href: "https://www.minecraft.net/en-us/article/twitchcon-gamedrop-features",
  },
  {
    date: "2026-11-14",
    title: "Official social + teaser footage",
    body: "Minecraft social posts confirm return flight, hard-surface ricochet, multi-enemy pierce, and either-hand use.",
    href: "https://x.com/Minecraft",
  },
  {
    date: "Q1 2027",
    title: "First Drop 2027 target window",
    body: "Planned release window for the throwing disc and Bedrock off-hand parity (Java ~27.1 / Bedrock ~27.10 per community wiki tracking).",
  },
  {
    date: "TBD",
    title: "First public snapshot / Preview",
    body: "Damage numbers, enchantments, and exact ricochet rules expected once development versions ship. This site will update the same day.",
  },
];
