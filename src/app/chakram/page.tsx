import Link from "next/link";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Chakram Minecraft — Throwing Disc Nickname",
  description:
    "Chakram Minecraft explained: players nickname the Throwing Disc a chakram. Official name, mechanics, and links to crafting and tips.",
  path: "/chakram/",
  keywords: ["chakram minecraft", "minecraft chakram", "throwing disc chakram"],
});

export default function ChakramPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Chakram", path: "/chakram/" },
        ])}
      />

      <PageHero
        eyebrow="Player slang"
        title="Chakram Minecraft = the Throwing Disc"
        lead="A chakram is a real-world circular throwing blade. After the TwitchCon reveal, players reused that nickname for Minecraft’s returning disc weapon."
      />

      <section className="section prose">
        <h2>Official name vs nickname</h2>
        <p>
          Mojang calls it the <strong>Throwing Disc</strong>. There is no
          separate “chakram” item ID announced. If you searched chakram
          minecraft, follow the{" "}
          <Link href="/">Throwing Disc guide</Link> for recipes and mechanics.
        </p>
        <h2>Why the nickname fits</h2>
        <p>
          Circular silhouette, thrown flight, and ricochet fantasy map cleanly
          onto chakram media tropes — similar to how players nickname other
          weapons long before wiki pages settle.
        </p>
        <p className="callout">
          Prefer the disk spelling? Visit{" "}
          <Link href="/disk/">minecraft throwing disk</Link>.
        </p>
      </section>

      <section className="section">
        <RelatedLinks
          items={[
            {
              href: "/crafting/",
              label: "Craft the disc",
              blurb: "Five material tiers, chakram vibes included.",
            },
            {
              href: "/tips/",
              label: "Trick shots",
              blurb: "Ricochet play that sells the chakram fantasy.",
            },
            {
              href: "/vs-trident/",
              label: "vs Trident",
              blurb: "How it differs from Minecraft’s other throw weapon.",
            },
          ]}
        />
      </section>
      <Feedback />
    </>
  );
}
