import Link from "next/link";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { DISCS, MECHANICS } from "@/data/discs";
import { SITE } from "@/data/site";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Minecraft Wiki — Throwing Disc Data",
  description:
    "Minecraft wiki style throwing disc reference: variants, obtaining, usage mechanics, history, and citations for First Drop 2027.",
  path: "/wiki/",
  keywords: ["minecraft wiki throwing disc", "throwing disc wiki"],
});

export default function WikiPage() {
  return (
    <>
      <JsonLd data={itemListSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Wiki", path: "/wiki/" },
        ])}
      />

      <PageHero
        eyebrow="Structured data"
        title="Throwing Disc — wiki reference"
        lead="Citation-friendly sheet for the planned First Drop 2027 weapon. Cross-check the community wiki and Mojang article as snapshots land."
      />

      <section className="section">
        <h2>Infobox</h2>
        <table className="wiki-table">
          <tbody>
            <tr>
              <th scope="row">Type</th>
              <td>Tiered ranged weapon (planned)</td>
            </tr>
            <tr>
              <th scope="row">Drop</th>
              <td>{SITE.dropName} ({SITE.dropWindow})</td>
            </tr>
            <tr>
              <th scope="row">Announced</th>
              <td>{SITE.announcedAt} — TwitchCon San Diego</td>
            </tr>
            <tr>
              <th scope="row">Stackable</th>
              <td>No</td>
            </tr>
            <tr>
              <th scope="row">Charge time</th>
              <td>0 s (wiki tracking)</td>
            </tr>
            <tr>
              <th scope="row">Official spelling</th>
              <td>
                Disc — see also <Link href="/disk/">disk</Link> /{" "}
                <Link href="/chakram/">chakram</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>Variants</h2>
        <ul>
          {DISCS.map((d) => (
            <li key={d.id}>
              <strong>{d.name}</strong> — {d.ingredients} ({d.obtain})
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Usage summary</h2>
        <ul>
          {MECHANICS.map((m) => (
            <li key={m.title}>
              <strong>{m.title}:</strong> {m.body}
            </li>
          ))}
        </ul>
      </section>

      <section className="section prose">
        <h2>References</h2>
        <ol>
          <li>
            <a href={SITE.officialArticle} target="_blank" rel="noopener noreferrer">
              Sofia Dankis — TwitchCon reveals the first game drop features of 2027
            </a>{" "}
            — Minecraft.net
          </li>
          <li>
            <a href={SITE.officialWiki} target="_blank" rel="noopener noreferrer">
              Throwing Disc — Minecraft Wiki
            </a>
          </li>
          <li>
            <a href={SITE.twitter} target="_blank" rel="noopener noreferrer">
              @Minecraft social announcement
            </a>
          </li>
        </ol>
      </section>

      <section className="section">
        <RelatedLinks
          items={[
            {
              href: "/crafting/",
              label: "Crafting recipes",
              blurb: "Visual grids for each tier.",
            },
            {
              href: "/stats/",
              label: "Stats",
              blurb: "Damage table awaiting snapshot fills.",
            },
            {
              href: "/update/",
              label: "Update hub",
              blurb: "Release window and timeline.",
            },
          ]}
        />
      </section>
      <Feedback />
    </>
  );
}
