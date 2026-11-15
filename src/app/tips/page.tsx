import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TIPS_FAQS } from "@/data/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Throwing Disc Tips & Ricochet Guide",
  description:
    "Throwing disc tips: ricochet angles, multi-target pierce lines, off-hand habits, and PvP / minigame ideas for Minecraft’s new weapon.",
  path: "/tips/",
  keywords: ["throwing disc tips", "throwing disc ricochet", "minecraft disc trick shots"],
});

const TIPS = [
  {
    title: "Bank shots before the chase",
    body: "Base range is short. Pre-aim a hard surface so the first bounce carries the disc into the pack instead of dying in open air.",
  },
  {
    title: "Line up pierce targets",
    body: "Corridor pulls and doorway funnels let one throw clip several mobs. Think arrow Pierce, but with a returning body.",
  },
  {
    title: "Count the return beat",
    body: "You cannot spam like a bow. Treat each throw as a commitment — reposition while the disc is airborne.",
  },
  {
    title: "Off-hand + main-hand mix",
    body: "Sword or axe in main hand, disc in off-hand (or reverse). Discs return to the hand that threw them — plan hotbar muscle memory.",
  },
  {
    title: "Vertical planes",
    body: "No gravity arc means ceiling and floor ricochets are more readable. Practice tower rooms and stairwells.",
  },
  {
    title: "Minigame layouts",
    body: "Arenas with pillars reward bank shots. Expect map makers to add disc-specific parksour and deathmatch modes after release.",
  },
];

export default function TipsPage() {
  return (
    <>
      <JsonLd data={faqSchema(TIPS_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tips", path: "/tips/" },
        ])}
      />

      <PageHero
        eyebrow="Combat tips"
        title="Throwing Disc tips & ricochet tricks"
        lead="Developers teased trick shots on purpose. Use hard surfaces to buy airtime, then catch the disc and reset."
      />

      <section className="section">
        <div className="mech-list">
          {TIPS.map((tip) => (
            <article key={tip.title}>
              <h3>{tip.title}</h3>
              <p>{tip.body}</p>
            </article>
          ))}
        </div>
        <p className="callout">
          Mechanics baseline: <Link href="/stats/">Stats page</Link>. Loadout
          compare: <Link href="/vs-trident/">vs Trident</Link>.
        </p>
      </section>

      <section className="section">
        <Faq items={TIPS_FAQS} />
      </section>

      <section className="section">
        <RelatedLinks
          items={[
            {
              href: "/bedrock-offhand/",
              label: "Bedrock off-hand",
              blurb: "Dual-wield rules arriving with the same drop.",
            },
            {
              href: "/chakram/",
              label: "Chakram nickname",
              blurb: "Why players search that name.",
            },
            {
              href: "/update/",
              label: "2027 update",
              blurb: "When you can test these tips in-game.",
            },
          ]}
        />
      </section>
      <Feedback />
    </>
  );
}
