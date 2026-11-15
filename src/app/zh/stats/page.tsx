import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ZH_DISCS, ZH_MECHANICS, ZH_STATS_FAQS } from "@/data/zh-content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "投掷飞盘伤害与属性",
  description:
    "投掷飞盘伤害、耐久、射程与反弹机制——持续追踪 Minecraft 2027 第一波更新快照数据。",
  path: "/zh/stats/",
  locale: "zh",
  keywords: ["投掷飞盘 伤害", "投掷飞盘 属性", "throwing disc stats"],
});

export default function ZhStatsPage() {
  return (
    <>
      <JsonLd data={faqSchema(ZH_STATS_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "首页", path: "/zh/" },
          { name: "属性", path: "/zh/stats/" },
        ])}
      />

      <PageHero
        locale="zh"
        eyebrow="属性与机制"
        title="投掷飞盘伤害、射程与反弹数据"
        lead="下表数值在公开快照公布前为占位。机制部分来自 Mojang TwitchCon 公布内容。"
      />

      <section className="section">
        <h2>已知机制</h2>
        <dl className="stat-grid">
          <div>
            <dt>蓄力时间</dt>
            <dd>0 秒</dd>
          </div>
          <div>
            <dt>重力</dt>
            <dd>无</dd>
          </div>
          <div>
            <dt>返回</dt>
            <dd>自带</dd>
          </div>
          <div>
            <dt>可堆叠</dt>
            <dd>否</dd>
          </div>
        </dl>
        <div className="mech-list" style={{ marginTop: "1.5rem" }}>
          {ZH_MECHANICS.map((m) => (
            <article key={m.title}>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>各等级表（等待快照）</h2>
        <p className="lede">
          快照数值公布后编辑 <code>src/data/zh-content.ts</code> /{" "}
          <code>discs.ts</code> 即可静态重建上线。
        </p>
        <div className="table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col">等级</th>
                <th scope="col">伤害</th>
                <th scope="col">耐久</th>
                <th scope="col">备注</th>
              </tr>
            </thead>
            <tbody>
              {ZH_DISCS.map((d) => (
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
          玩法对比见 <Link href="/zh/vs-trident/">vs 三叉戟</Link>。练习角度见{" "}
          <Link href="/zh/tips/">技巧</Link>。
        </p>
      </section>

      <section className="section">
        <Faq items={ZH_STATS_FAQS} title="常见问题" />
      </section>

      <section className="section">
        <RelatedLinks
          locale="zh"
          items={[
            {
              href: "/zh/crafting/",
              label: "合成",
              blurb: "先做出各等级再测伤。",
            },
            {
              href: "/zh/update/",
              label: "更新追踪",
              blurb: "关注首个带战斗数值的快照。",
            },
            {
              href: "/zh/wiki/",
              label: "资料页",
              blurb: "便于引用的精简信息块。",
            },
          ]}
        />
      </section>
      <Feedback locale="zh" />
    </>
  );
}
