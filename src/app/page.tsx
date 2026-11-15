import Link from "next/link";
import { CompareTable } from "@/components/CompareTable";
import { DiscHeroVisual } from "@/components/DiscHeroVisual";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { WeaponCard } from "@/components/WeaponCard";
import { DISCS, MECHANICS } from "@/data/discs";
import { HOME_FAQS } from "@/data/faqs";
import { SITE } from "@/data/site";
import { TIMELINE } from "@/data/timeline";
import { faqSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Throwing Disc Minecraft — Crafting, Stats & First Drop 2027 Guide",
  description:
    "Complete throwing disc Minecraft guide: five material tiers, crafting recipes, ricochet mechanics, Bedrock off-hand, vs trident comparison, and 2027 update tracking.",
  path: "/",
  keywords: [
    "throwing disc minecraft",
    "minecraft throwing disk",
    "throwing disk",
    "minecraft new weapon",
    "new minecraft weapon",
    "chakram minecraft",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <JsonLd data={itemListSchema()} />

      <section className="home-hero">
        <div className="home-hero__bg" aria-hidden />
        <div className="home-hero__content">
          <div className="home-hero__copy">
            <p className="brand-lockup">
              <span>Minecraft</span>
              Throwing Disc
            </p>
            <h1>Returns. Ricochets. Pierces the line.</h1>
            <p className="lead">
              The new ranged weapon for First Drop 2027 — craft five material
              tiers, throw from either hand, and extend range with hard-surface
              bounces.
            </p>
            <div className="cta-row">
              <Link className="btn btn--primary" href="/crafting/">
                Crafting recipes
              </Link>
              <Link className="btn btn--ghost" href="/stats/">
                Stats & mechanics
              </Link>
            </div>
            <LastUpdated />
          </div>
          <DiscHeroVisual />
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Weapon overview</p>
        <h2>What is the Throwing Disc?</h2>
        <p className="lede">
          Announced at TwitchCon San Diego on {SITE.announcedAt}, the Throwing
          Disc is a short-range returning projectile. It damages entities on the
          way out and back, can pierce multiple targets, and gains airtime when
          it ricochets off hard blocks.
        </p>
        <div className="prose">
          <p>
            Official spelling is <strong>Throwing Disc</strong> (with a{" "}
            <em>c</em>). Looking for{" "}
            <Link href="/disk/">minecraft throwing disk</Link>? Same weapon —
            see the spelling guide. Players also call it a{" "}
            <Link href="/chakram/">chakram</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Material tiers</p>
        <h2>Copper to Netherite</h2>
        <p className="lede">
          Five announced variants. Exact damage and durability land with
          snapshots — recipes are already shown by Mojang.
        </p>
        <div className="tier-grid">
          {DISCS.map((disc) => (
            <WeaponCard key={disc.id} disc={disc} />
          ))}
        </div>
        <p className="callout">
          Full grid walkthrough on the{" "}
          <Link href="/crafting/">Throwing Disc crafting</Link> page.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Mechanics</p>
        <h2>Return, ricochet, pierce</h2>
        <div className="mech-list">
          {MECHANICS.map((m) => (
            <article key={m.title}>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </article>
          ))}
        </div>
        <p className="callout">
          Deep dive: <Link href="/stats/">Throwing Disc damage / stats</Link> ·{" "}
          <Link href="/tips/">Ricochet tips</Link>
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Compare</p>
        <h2>Disc vs Trident vs Bow</h2>
        <p className="lede">
          Built-in return and ricochet make the disc a different combat fantasy
          than Loyalty tridents or charged bows.
        </p>
        <CompareTable />
        <p className="callout">
          Side-by-side focus:{" "}
          <Link href="/vs-trident/">Throwing Disc vs Trident</Link>
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Official</p>
        <h2>Announcement & sources</h2>
        <div className="embed-panel">
          <a
            className="official-card"
            href={SITE.officialArticle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>TwitchCon reveals First Drop 2027 features</strong>
            <span>
              Official Minecraft.net article — throwing disc + Bedrock off-hand.
            </span>
          </a>
          <a
            className="official-card"
            href={SITE.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>@Minecraft on X</strong>
            <span>
              Official posts confirming ricochet, multi-hit, and either-hand use.
            </span>
          </a>
          <a
            className="official-card"
            href={SITE.youtubeSearch}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>“NEW THROWING WEAPON ALERT!”</strong>
            <span>Official teaser footage on YouTube (search Mojang upload).</span>
          </a>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Update radar</p>
        <h2>Latest Minecraft update timeline</h2>
        <p className="lede">
          Tracking minecraft update / snapshot chatter around the disc and
          Bedrock off-hand.
        </p>
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
        <p className="callout">
          Full drop notes: <Link href="/update/">Minecraft 2027 update</Link> ·{" "}
          <Link href="/bedrock-offhand/">Bedrock off-hand</Link>
        </p>
      </section>

      <section className="section">
        <Faq items={HOME_FAQS} />
      </section>

      <section className="section">
        <RelatedLinks
          items={[
            {
              href: "/wiki/",
              label: "Structured wiki page",
              blurb: "Citation-friendly facts for minecraft wiki throwing disc searches.",
            },
            {
              href: "/disk/",
              label: "Disk spelling hub",
              blurb: "Catch traffic for throwing disk / minecraft throwing disk.",
            },
            {
              href: "/tips/",
              label: "Combat tips",
              blurb: "Ricochet angles, multi-hit lines, and off-hand habits.",
            },
          ]}
        />
      </section>

      <Feedback />
    </>
  );
}
