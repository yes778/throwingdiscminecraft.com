import Link from "next/link";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SITE } from "@/data/site";
import { ZH_DISCS, ZH_MECHANICS, ZH_SITE } from "@/data/zh-content";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Minecraft Wiki — 投掷飞盘资料",
  description:
    "Wiki 风格投掷飞盘参考：变体、获取、用法机制、历史与引用来源（2027 第一波更新）。",
  path: "/zh/wiki/",
  locale: "zh",
  keywords: ["minecraft wiki 投掷飞盘", "throwing disc wiki 中文"],
});

export default function ZhWikiPage() {
  return (
    <>
      <JsonLd data={itemListSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "首页", path: "/zh/" },
          { name: "资料页", path: "/zh/wiki/" },
        ])}
      />

      <PageHero
        locale="zh"
        eyebrow="结构化资料"
        title="投掷飞盘 — Wiki 参考"
        lead="便于引用的 2027 第一波计划武器资料表。快照上线后请交叉核对社区 Wiki 与 Mojang 文章。"
      />

      <section className="section">
        <h2>信息框</h2>
        <table className="wiki-table">
          <tbody>
            <tr>
              <th scope="row">类型</th>
              <td>分级远程武器（计划中）</td>
            </tr>
            <tr>
              <th scope="row">更新</th>
              <td>
                {ZH_SITE.dropName}（{ZH_SITE.dropWindow}）
              </td>
            </tr>
            <tr>
              <th scope="row">公布</th>
              <td>{SITE.announcedAt} — 圣地亚哥 TwitchCon</td>
            </tr>
            <tr>
              <th scope="row">可堆叠</th>
              <td>否</td>
            </tr>
            <tr>
              <th scope="row">蓄力时间</th>
              <td>0 秒（Wiki 追踪）</td>
            </tr>
            <tr>
              <th scope="row">官方拼写</th>
              <td>
                Disc — 另见 <Link href="/zh/disk/">disk</Link> /{" "}
                <Link href="/zh/chakram/">chakram</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>变体</h2>
        <ul>
          {ZH_DISCS.map((d) => (
            <li key={d.id}>
              <strong>{d.name}</strong> — {d.ingredients}（
              {d.obtain === "crafting" ? "合成" : "锻造"}）
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>用法摘要</h2>
        <ul>
          {ZH_MECHANICS.map((m) => (
            <li key={m.title}>
              <strong>{m.title}：</strong>
              {m.body}
            </li>
          ))}
        </ul>
      </section>

      <section className="section prose">
        <h2>参考来源</h2>
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
              @Minecraft 社媒公告
            </a>
          </li>
        </ol>
      </section>

      <section className="section">
        <RelatedLinks
          locale="zh"
          items={[
            {
              href: "/zh/crafting/",
              label: "合成配方",
              blurb: "各等级可视化网格。",
            },
            {
              href: "/zh/stats/",
              label: "属性",
              blurb: "等待快照填充的伤害表。",
            },
            {
              href: "/zh/update/",
              label: "更新枢纽",
              blurb: "发布窗口与时间线。",
            },
          ]}
        />
      </section>
      <Feedback locale="zh" />
    </>
  );
}
