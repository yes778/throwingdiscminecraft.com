import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { WeaponCard } from "@/components/WeaponCard";
import { DISCS } from "@/data/discs";
import { CRAFTING_FAQS } from "@/data/faqs";
import { breadcrumbSchema, howToCraftSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Throwing Disc Crafting Recipe",
  description:
    "Throwing disc crafting recipe for copper, iron, gold, diamond, and netherite — cross pattern on the crafting table plus smithing upgrade steps.",
  path: "/crafting/",
  keywords: [
    "throwing disc crafting recipe",
    "minecraft throwing disc recipe",
    "netherite throwing disc",
  ],
});

export default function CraftingPage() {
  return (
    <>
      <JsonLd data={howToCraftSchema()} />
      <JsonLd data={faqSchema(CRAFTING_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Crafting", path: "/crafting/" },
        ])}
      />

      <PageHero
        eyebrow="Crafting guide"
        title="Throwing Disc crafting recipe"
        lead="Four materials in a cross for copper, iron, gold, and diamond. Netherite upgrades on the smithing table — same idea as other netherite gear."
      />

      <section className="section">
        <h2>Cross pattern (crafting table)</h2>
        <p className="lede">
          Place matching materials in the top, left, right, and bottom slots.
          Leave the center empty. Uses four of the same tier ingredient.
        </p>
        <div className="tier-grid">
          {DISCS.filter((d) => d.obtain === "crafting").map((disc) => (
            <WeaponCard key={disc.id} disc={disc} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Netherite smithing upgrade</h2>
        <p className="lede">
          Combine a Diamond Throwing Disc with a Netherite Upgrade template and
          a Netherite Ingot.
        </p>
        <div className="tier-grid">
          {DISCS.filter((d) => d.obtain === "smithing").map((disc) => (
            <WeaponCard key={disc.id} disc={disc} />
          ))}
        </div>
        <p className="callout">
          After you craft one, check{" "}
          <Link href="/stats/">damage & durability placeholders</Link> and{" "}
          <Link href="/tips/">ricochet tips</Link> for combat use.
        </p>
      </section>

      <section className="section">
        <Faq items={CRAFTING_FAQS} />
      </section>

      <section className="section">
        <RelatedLinks
          items={[
            {
              href: "/wiki/",
              label: "Wiki data sheet",
              blurb: "Structured obtain methods for quick reference.",
            },
            {
              href: "/update/",
              label: "2027 First Drop",
              blurb: "When recipes are expected to hit live versions.",
            },
            {
              href: "/disk/",
              label: "Disk spelling",
              blurb: "Same recipes under the disk search spelling.",
            },
          ]}
        />
      </section>
      <Feedback />
    </>
  );
}
