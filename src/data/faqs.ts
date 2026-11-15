export type FaqItem = { question: string; answer: string };

export const HOME_FAQS: FaqItem[] = [
  {
    question: "What is the Throwing Disc in Minecraft?",
    answer:
      "The Throwing Disc is a new tiered ranged weapon announced for First Drop 2027. You throw it, it damages entities along its path, can ricochet off hard surfaces, then returns to you.",
  },
  {
    question: "When does the Throwing Disc release?",
    answer:
      "It is planned for Minecraft's First Drop 2027 (expected Q1 2027). It was announced at TwitchCon San Diego on November 14, 2026, and has not shipped in a public snapshot yet.",
  },
  {
    question: "How do you craft a Throwing Disc?",
    answer:
      "Copper, iron, gold, and diamond discs craft with four matching materials in a cross pattern on a crafting table (center empty). Netherite uses a smithing table: Netherite Upgrade + Diamond Throwing Disc + Netherite Ingot.",
  },
  {
    question: "Is it Throwing Disc or Throwing Disk?",
    answer:
      "Mojang's official spelling is Throwing Disc (disc with a c). Players also search for throwing disk — both refer to the same weapon. This site covers both spellings.",
  },
  {
    question: "Can Bedrock players use the off-hand with it?",
    answer:
      "Yes. First Drop 2027 brings full off-hand support to Bedrock, and the disc can be held and thrown from either hand. Discs thrown from the off-hand return to the off-hand.",
  },
];

export const CRAFTING_FAQS: FaqItem[] = [
  {
    question: "What is the Throwing Disc crafting recipe?",
    answer:
      "Place four Copper/Iron/Gold Ingots or Diamonds in a plus-sign / cross: top, left, right, and bottom slots. Leave the center empty.",
  },
  {
    question: "How do you get a Netherite Throwing Disc?",
    answer:
      "Upgrade a Diamond Throwing Disc on a smithing table with a Netherite Upgrade template and a Netherite Ingot — same upgrade flow as other netherite gear.",
  },
  {
    question: "Is there a wood or stone Throwing Disc?",
    answer:
      "No. Announced tiers start at copper. Wiki notes this is the only tiered weapon without wooden or stone variants.",
  },
];

export const STATS_FAQS: FaqItem[] = [
  {
    question: "What is Throwing Disc damage?",
    answer:
      "Exact HP values are not published yet. Track snapshots after First Drop 2027 testing begins; this page will update damage, durability, and enchant tables when numbers land.",
  },
  {
    question: "Does ricochet increase damage?",
    answer:
      "Developers highlighted longer airtime and higher travel speed after ricochets. Whether damage scales with speed is unconfirmed until snapshot data.",
  },
];

export const TIPS_FAQS: FaqItem[] = [
  {
    question: "How do you ricochet the Throwing Disc?",
    answer:
      "Aim so the disc strikes hard surfaces (walls, floors, solid blocks) before or after enemy contact. Each bounce can redirect the path and extend flight.",
  },
  {
    question: "Does it work in PvP and minigames?",
    answer:
      "Mojang positioned it as a new combat fantasy for fights and minigames. Multi-hit pierce and return timing will matter for corridor fights and arena layouts.",
  },
];

export const BEDROCK_FAQS: FaqItem[] = [
  {
    question: "What is Bedrock off-hand support in 2027?",
    answer:
      "Bedrock players will be able to hold and use items in the off-hand more like Java — not just a tiny allowlist (totems, fireworks, etc.). The HUD will show the off-hand slot when used.",
  },
  {
    question: "Can I throw a disc from Bedrock off-hand?",
    answer:
      "Yes — official messaging says hold the disc in either hand and throw. Full Bedrock off-hand is arriving with the same drop window.",
  },
];

export const UPDATE_FAQS: FaqItem[] = [
  {
    question: "What is in Minecraft's 2027 first game drop?",
    answer:
      "Confirmed so far: Throwing Disc weapon tiers and full Bedrock off-hand parity. Mojang said more First Drop 2027 details will follow.",
  },
  {
    question: "Is this a Minecraft snapshot feature yet?",
    answer:
      "Not as of the TwitchCon announcement. Watch Java snapshots and Bedrock Previews once experimental builds start shipping the disc.",
  },
];
