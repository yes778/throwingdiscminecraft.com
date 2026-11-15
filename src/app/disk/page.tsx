import Link from "next/link";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Minecraft Throwing Disk — Same as Throwing Disc",
  description:
    "Minecraft throwing disk / throwing disk explained: official Mojang spelling is Throwing Disc. Recipes, stats, and tips with disk↔disc interlinking.",
  path: "/disk/",
  keywords: [
    "minecraft throwing disk",
    "throwing disk",
    "throwing disk minecraft",
  ],
});

export default function DiskPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Disk", path: "/disk/" },
        ])}
      />

      <PageHero
        eyebrow="Spelling variant"
        title="Minecraft throwing disk = Throwing Disc"
        lead="Searching throwing disk? You are in the right place. Mojang’s official name uses disc (c), the British/game-item spelling also used for music discs."
      />

      <section className="section prose">
        <h2>Why two spellings rank</h2>
        <p>
          US English often defaults to <strong>disk</strong>. Minecraft item
          naming follows <strong>disc</strong> (music discs, and now the
          throwing weapon). Search engines see both queries for the same intent:
          the First Drop 2027 returning weapon.
        </p>
        <p>
          This page exists so “minecraft throwing disk” and bare “throwing disk”
          queries resolve to accurate guides without duplicate thin content —
          then deep-link into the canonical{" "}
          <Link href="/">Throwing Disc</Link> hub.
        </p>
        <h2>Where to go next</h2>
        <ul>
          <li>
            <Link href="/crafting/">Crafting recipes</Link> for all five tiers
          </li>
          <li>
            <Link href="/stats/">Damage & ricochet stats</Link>
          </li>
          <li>
            <Link href="/tips/">Combat tips</Link>
          </li>
          <li>
            <Link href="/update/">2027 update tracker</Link>
          </li>
        </ul>
      </section>

      <section className="section">
        <RelatedLinks
          items={[
            {
              href: "/",
              label: "Canonical Disc hub",
              blurb: "Primary throwing disc minecraft landing page.",
            },
            {
              href: "/chakram/",
              label: "Chakram nickname",
              blurb: "Another common player search alias.",
            },
            {
              href: "/wiki/",
              label: "Wiki sheet",
              blurb: "Structured facts for either spelling.",
            },
          ]}
        />
      </section>
      <Feedback />
    </>
  );
}
