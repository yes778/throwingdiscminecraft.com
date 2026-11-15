import Link from "next/link";
import { CompareTable } from "@/components/CompareTable";
import { DiscHeroVisual } from "@/components/DiscHeroVisual";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { WeaponCard } from "@/components/WeaponCard";
import { SITE } from "@/data/site";
import {
  ZH_DISCS,
  ZH_HOME_FAQS,
  ZH_MECHANICS,
  ZH_SITE,
  ZH_TIMELINE,
} from "@/data/zh-content";
import { faqSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Minecraft 投掷飞盘 — 合成、属性与 2027 更新指南",
  description: ZH_SITE.description,
  path: "/zh/",
  locale: "zh",
  keywords: [
    "minecraft 投掷飞盘",
    "throwing disc minecraft",
    "投掷飞盘 合成",
    "基岩版 副手",
    "minecraft 2027 更新",
  ],
});

export default function ZhHomePage() {
  return (
    <>
      <JsonLd data={faqSchema(ZH_HOME_FAQS)} />
      <JsonLd data={itemListSchema()} />

      <section className="home-hero">
        <div className="home-hero__bg" aria-hidden />
        <div className="home-hero__content">
          <div className="home-hero__copy">
            <p className="brand-lockup">
              <span>Minecraft</span>
              投掷飞盘
            </p>
            <h1>返回。反弹。贯穿一排敌人。</h1>
            <p className="lead">
              2027 第一波更新的新远程武器——五种材质，任意手投掷，硬表面弹射延长射程。
            </p>
            <div className="cta-row">
              <Link className="btn btn--primary" href="/zh/crafting/">
                合成配方
              </Link>
              <Link className="btn btn--ghost" href="/zh/stats/">
                属性与机制
              </Link>
            </div>
            <LastUpdated locale="zh" />
          </div>
          <DiscHeroVisual />
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">武器总览</p>
        <h2>什么是投掷飞盘？</h2>
        <p className="lede">
          于 {SITE.announcedAt} 在圣地亚哥 TwitchCon 公布。投掷飞盘是短程可返回投射物：往返途中伤害实体，可穿透多个目标，撞到硬方块后反弹并延长滞空。
        </p>
        <div className="prose">
          <p>
            官方英文名为 <strong>Throwing Disc</strong>（disc 带 c）。若你搜的是{" "}
            <Link href="/zh/disk/">throwing disk</Link>，指向同一武器。玩家也常叫它{" "}
            <Link href="/zh/chakram/">轮刃 / chakram</Link>。
          </p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">材质等级</p>
        <h2>从铜到下界合金</h2>
        <p className="lede">
          已公布五个变体。精确伤害与耐久随快照公布；配方 Mojang 已展示。
        </p>
        <div className="tier-grid">
          {ZH_DISCS.map((disc) => (
            <WeaponCard key={disc.id} disc={disc} locale="zh" />
          ))}
        </div>
        <p className="callout">
          完整网格说明见{" "}
          <Link href="/zh/crafting/">投掷飞盘合成</Link> 页面。
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">机制</p>
        <h2>返回、反弹、穿透</h2>
        <div className="mech-list">
          {ZH_MECHANICS.map((m) => (
            <article key={m.title}>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </article>
          ))}
        </div>
        <p className="callout">
          深入阅读：<Link href="/zh/stats/">伤害 / 属性</Link> ·{" "}
          <Link href="/zh/tips/">反弹技巧</Link>
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">对比</p>
        <h2>飞盘 vs 三叉戟 vs 弓</h2>
        <p className="lede">
          自带返回与反弹，战斗手感不同于忠诚三叉戟或蓄力弓。
        </p>
        <CompareTable locale="zh" />
        <p className="callout">
          专项对比：
          <Link href="/zh/vs-trident/">投掷飞盘 vs 三叉戟</Link>
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">官方</p>
        <h2>公告与来源</h2>
        <div className="embed-panel">
          <a
            className="official-card"
            href={SITE.officialArticle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>TwitchCon 公布 2027 第一波更新特性</strong>
            <span>Minecraft.net 官方文章 — 投掷飞盘 + 基岩副手。</span>
          </a>
          <a
            className="official-card"
            href={SITE.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>@Minecraft on X</strong>
            <span>官方确认反弹、多段命中与任意手使用。</span>
          </a>
          <a
            className="official-card"
            href={SITE.youtubeSearch}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>“NEW THROWING WEAPON ALERT!”</strong>
            <span>YouTube 官方预告片（搜索 Mojang 上传）。</span>
          </a>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">更新雷达</p>
        <h2>最新更新时间线</h2>
        <p className="lede">
          追踪与飞盘、基岩副手相关的 Minecraft 更新 / 快照动态。
        </p>
        <ol className="timeline">
          {ZH_TIMELINE.map((item) => (
            <li key={`${item.date}-${item.title}`}>
              <time dateTime={item.date}>{item.date}</time>
              <h3>{item.title}</h3>
              <p>
                {item.body}{" "}
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    来源
                  </a>
                ) : null}
              </p>
            </li>
          ))}
        </ol>
        <p className="callout">
          完整汇总：<Link href="/zh/update/">Minecraft 2027 更新</Link> ·{" "}
          <Link href="/zh/bedrock-offhand/">基岩副手</Link>
        </p>
      </section>

      <section className="section">
        <Faq items={ZH_HOME_FAQS} title="常见问题" />
      </section>

      <section className="section">
        <RelatedLinks
          locale="zh"
          items={[
            {
              href: "/zh/wiki/",
              label: "结构化资料页",
              blurb: "便于引用的投掷飞盘要点汇总。",
            },
            {
              href: "/zh/disk/",
              label: "Disk 拼写入口",
              blurb: "覆盖 throwing disk 搜索流量。",
            },
            {
              href: "/zh/tips/",
              label: "实战技巧",
              blurb: "反弹角度、多段命中与副手习惯。",
            },
          ]}
        />
      </section>

      <Feedback locale="zh" />
    </>
  );
}
