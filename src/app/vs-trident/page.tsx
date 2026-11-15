import Link from "next/link";
import { CompareTable } from "@/components/CompareTable";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Throwing Disc vs Trident",
  description:
    "Throwing disc vs trident comparison — return behavior, ricochet, pierce, off-hand quirks, and when to pick each Minecraft weapon.",
  path: "/vs-trident/",
  keywords: ["throwing disc vs trident", "minecraft trident vs disc"],
});

export default function VsTridentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "vs Trident", path: "/vs-trident/" },
        ])}
      />

      <PageHero
        eyebrow="Weapon compare"
        title="Throwing Disc vs Trident"
        lead="Both can be thrown and both can return — but the disc brings built-in return, ricochet extension, and multi-target pierce without Loyalty."
      />

      <section className="section">
        <h2>Quick comparison</h2>
        <CompareTable />
      </section>

      <section className="section prose">
        <h2>When to choose the disc</h2>
        <p>
          Pick the disc for tight corridors, trial-chamber style rooms, and any
          fight where wall bounces create free angle extensions. Multi-hit
          pierce rewards lined-up mobs.
        </p>
        <h2>When to keep the trident</h2>
        <p>
          Tridents still win for melee thrust damage, Channeling / Impaling
          niches, and long aquatic throws. Loyalty is enchant-gated; the disc’s
          return is baseline.
        </p>
        <p className="callout">
          Off-hand note: discs thrown from the off-hand return to the off-hand.
          Loyalty tridents behave differently — see{" "}
          <Link href="/bedrock-offhand/">Bedrock off-hand</Link>.
        </p>
      </section>

      <section className="section">
        <RelatedLinks
          items={[
            {
              href: "/stats/",
              label: "Stats",
              blurb: "Damage placeholders and ricochet rules.",
            },
            {
              href: "/tips/",
              label: "Tips",
              blurb: "Practical throw patterns versus spear play.",
            },
            {
              href: "/crafting/",
              label: "Crafting",
              blurb: "Material cost to field each disc tier.",
            },
          ]}
        />
      </section>
      <Feedback />
    </>
  );
}
