import { SITE } from "@/data/site";
import type { FaqItem } from "@/data/faqs";
import { DISCS } from "@/data/discs";

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function howToCraftSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to craft a Throwing Disc in Minecraft",
    description:
      "Craft copper, iron, gold, or diamond Throwing Discs with four materials in a cross pattern, then upgrade diamond to netherite on a smithing table.",
    totalTime: "PT2M",
    tool: [{ "@type": "HowToTool", name: "Crafting Table" }],
    step: [
      {
        "@type": "HowToStep",
        name: "Gather four materials",
        text: "Collect four Copper Ingots, Iron Ingots, Gold Ingots, or Diamonds.",
      },
      {
        "@type": "HowToStep",
        name: "Place the cross recipe",
        text: "On a crafting table, put materials in the top, left, right, and bottom slots. Leave the center empty.",
      },
      {
        "@type": "HowToStep",
        name: "Optional netherite upgrade",
        text: "Combine a Diamond Throwing Disc, Netherite Upgrade, and Netherite Ingot on a smithing table.",
      },
    ],
  };
}

export function itemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Minecraft Throwing Disc tiers",
    itemListElement: DISCS.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: d.name,
      description: `${d.obtain === "crafting" ? "Craft with" : "Smith with"} ${d.ingredients}`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: ["en", "zh"],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
