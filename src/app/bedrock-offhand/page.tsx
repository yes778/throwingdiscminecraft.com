import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BEDROCK_FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bedrock Off-hand Support — Full Offhand Guide",
  description:
    "Bedrock off hand / offhand support in First Drop 2027: full dual-wield parity with Java, HUD slot, and Throwing Disc either-hand throws.",
  path: "/bedrock-offhand/",
  keywords: [
    "bedrock off hand",
    "bedrock offhand",
    "offhand support minecraft",
    "bedrock dual wield",
  ],
});

export default function BedrockOffhandPage() {
  return (
    <>
      <JsonLd data={faqSchema(BEDROCK_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Bedrock Off-hand", path: "/bedrock-offhand/" },
        ])}
      />

      <PageHero
        eyebrow="Bedrock Edition"
        title="Bedrock off-hand: full support is coming"
        lead="Java players dual-wielded since 2016. First Drop 2027 finally brings broad off-hand use to Bedrock — timed with the Throwing Disc reveal."
      />

      <section className="section prose">
        <h2>What changes</h2>
        <p>
          Bedrock’s off-hand was limited to a small allowlist (shields/totems
          era items, fireworks, maps, and similar). Mojang confirmed players
          will be able to hold and use far more items — including tools —
          properly in the off-hand.
        </p>
        <p>
          The off-hand slot will display on the HUD next to the hotbar when in
          use, matching the readability Java players already expect.
        </p>
        <h2>Why it matters for the Throwing Disc</h2>
        <p>
          Official messaging emphasizes holding the disc in{" "}
          <strong>either hand</strong>. Discs thrown from the off-hand return to
          the off-hand, which is a cleaner loop than Loyalty trident edge cases.
        </p>
        <p className="callout">
          Preview timing: Mojang indicated Bedrock off-hand support arrives in
          an upcoming Preview build around the announcement window. Track{" "}
          <Link href="/update/">First Drop 2027</Link> for live version numbers.
        </p>
        <p>
          Source:{" "}
          <a href={SITE.officialArticle} target="_blank" rel="noopener noreferrer">
            Minecraft.net TwitchCon article
          </a>
          .
        </p>
      </section>

      <section className="section">
        <Faq items={BEDROCK_FAQS} />
      </section>

      <section className="section">
        <RelatedLinks
          items={[
            {
              href: "/",
              label: "Throwing Disc home",
              blurb: "Weapon overview tied to the same drop.",
            },
            {
              href: "/tips/",
              label: "Tips",
              blurb: "Off-hand + main-hand combat habits.",
            },
            {
              href: "/vs-trident/",
              label: "vs Trident",
              blurb: "Return-to-hand differences called out.",
            },
          ]}
        />
      </section>
      <Feedback />
    </>
  );
}
