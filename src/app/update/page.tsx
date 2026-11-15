import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { UPDATE_FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";
import { TIMELINE } from "@/data/timeline";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Minecraft 2027 Update — First Game Drop",
  description:
    "Minecraft 2027 update / First Drop guide: Throwing Disc, Bedrock off-hand, announced dates, and snapshot tracking for new minecraft update traffic.",
  path: "/update/",
  keywords: [
    "minecraft 2027 update",
    "minecraft update",
    "new minecraft update",
    "minecraft snapshot",
    "first drop 2027",
  ],
});

export default function UpdatePage() {
  return (
    <>
      <JsonLd data={faqSchema(UPDATE_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "2027 Update", path: "/update/" },
        ])}
      />

      <PageHero
        eyebrow={SITE.dropName}
        title="Minecraft 2027 First Drop — what we know"
        lead={`Target window ${SITE.dropWindow}. Confirmed headlines so far: the Throwing Disc weapon line and full Bedrock off-hand support.`}
      />

      <section className="section prose">
        <h2>Confirmed features</h2>
        <ul>
          <li>
            <Link href="/">Throwing Disc</Link> — copper through netherite
            returning ranged weapon with ricochet and pierce.
          </li>
          <li>
            <Link href="/bedrock-offhand/">Bedrock off-hand parity</Link> — hold
            and use items beyond the old allowlist.
          </li>
        </ul>
        <p>
          Mojang said more First Drop 2027 details will follow. This page is the
          hub for minecraft update / snapshot watchers hunting “new minecraft
          update” coverage tied to the disc.
        </p>
      </section>

      <section className="section">
        <h2>Timeline</h2>
        <ol className="timeline">
          {TIMELINE.map((item) => (
            <li key={`${item.date}-${item.title}`}>
              <time dateTime={item.date}>{item.date}</time>
              <h3>{item.title}</h3>
              <p>
                {item.body}{" "}
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                ) : null}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <Faq items={UPDATE_FAQS} />
      </section>

      <section className="section">
        <RelatedLinks
          items={[
            {
              href: "/crafting/",
              label: "Crafting",
              blurb: "Recipes already shown; usable when the drop ships.",
            },
            {
              href: "/stats/",
              label: "Stats",
              blurb: "Ready for snapshot number drops.",
            },
            {
              href: "/wiki/",
              label: "Wiki",
              blurb: "Structured reference for linkable facts.",
            },
          ]}
        />
      </section>
      <Feedback />
    </>
  );
}
