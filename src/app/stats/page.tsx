import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { DISCS, MECHANICS } from "@/data/discs";
import { STATS_FAQS } from "@/data/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Throwing Disc Damage & Stats",
  description:
    "Throwing disc damage, durability, range, and ricochet mechanics — tracked for Minecraft First Drop 2027 snapshots.",
  path: "/stats/",
  keywords: [
    "throwing disc damage",
    "throwing disc stats",
    "minecraft throwing disc durability",
  ],
});

export default function StatsPage() {
  return (
    <>
      <JsonLd data={faqSchema(STATS_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Stats", path: "/stats/" },
        ])}
      />

      <PageHero
        eyebrow="Stats & mechanics"
        title="Throwing Disc damage, range & ricochet data"
        lead="Numbers below are placeholders until public snapshots publish values. Mechanics are confirmed from Mojang’s TwitchCon reveal."
      />

      <section className="section">
        <h2>Known mechanics</h2>
        <dl className="stat-grid">
          <div>
            <dt>Charge time</dt>
            <dd>0 s</dd>
          </div>
          <div>
            <dt>Gravity</dt>
            <dd>None</dd>
          </div>
          <div>
            <dt>Return</dt>
            <dd>Built-in</dd>
          </div>
          <div>
            <dt>Stackable</dt>
            <dd>No</dd>
          </div>
        </dl>
        <div className="mech-list" style={{ marginTop: "1.5rem" }}>
          {MECHANICS.map((m) => (
            <article key={m.title}>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Per-tier table (awaiting snapshot)</h2>
        <p className="lede">
          Edit <code>src/data/discs.ts</code> when HP and durability land — the
          site rebuilds statically for Cloudflare Pages.
        </p>
        <div className="table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col">Tier</th>
                <th scope="col">Damage</th>
                <th scope="col">Durability</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {DISCS.map((d) => (
                <tr key={d.id}>
                  <th scope="row">{d.name}</th>
                  <td>{d.damage}</td>
                  <td>{d.durability}</td>
                  <td>{d.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="callout">
          Compare playstyle vs Loyalty weapons on{" "}
          <Link href="/vs-trident/">vs Trident</Link>. Practice angles on{" "}
          <Link href="/tips/">Tips</Link>.
        </p>
      </section>

      <section className="section">
        <Faq items={STATS_FAQS} />
      </section>

      <section className="section">
        <RelatedLinks
          items={[
            {
              href: "/crafting/",
              label: "Crafting",
              blurb: "Unlock each tier before testing damage.",
            },
            {
              href: "/update/",
              label: "Update tracker",
              blurb: "Watch for the first snapshot with combat numbers.",
            },
            {
              href: "/wiki/",
              label: "Wiki sheet",
              blurb: "Compact reference block for citations.",
            },
          ]}
        />
      </section>
      <Feedback />
    </>
  );
}
