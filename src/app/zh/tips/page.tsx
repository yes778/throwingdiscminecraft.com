import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ZH_TIPS, ZH_TIPS_FAQS } from "@/data/zh-content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "投掷飞盘技巧与反弹指南",
  description:
    "投掷飞盘技巧：反弹角度、多目标穿透、副手习惯，以及 PvP / 小游戏思路。",
  path: "/zh/tips/",
  locale: "zh",
  keywords: ["投掷飞盘 技巧", "投掷飞盘 反弹", "throwing disc tips"],
});

export default function ZhTipsPage() {
  return (
    <>
      <JsonLd data={faqSchema(ZH_TIPS_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "首页", path: "/zh/" },
          { name: "技巧", path: "/zh/tips/" },
        ])}
      />

      <PageHero
        locale="zh"
        eyebrow="实战技巧"
        title="投掷飞盘技巧与反弹花活"
        lead="开发者特意提到花式弹射。利用硬表面换取滞空，接住飞盘再重置节奏。"
      />

      <section className="section">
        <div className="mech-list">
          {ZH_TIPS.map((tip) => (
            <article key={tip.title}>
              <h3>{tip.title}</h3>
              <p>{tip.body}</p>
            </article>
          ))}
        </div>
        <p className="callout">
          机制基线：<Link href="/zh/stats/">属性页</Link>。配装对比：
          <Link href="/zh/vs-trident/">vs 三叉戟</Link>。
        </p>
      </section>

      <section className="section">
        <Faq items={ZH_TIPS_FAQS} title="常见问题" />
      </section>

      <section className="section">
        <RelatedLinks
          locale="zh"
          items={[
            {
              href: "/zh/bedrock-offhand/",
              label: "基岩副手",
              blurb: "同一波更新带来的双持规则。",
            },
            {
              href: "/zh/chakram/",
              label: "轮刃俗称",
              blurb: "为什么玩家会搜 chakram。",
            },
            {
              href: "/zh/update/",
              label: "2027 更新",
              blurb: "何时能在游戏里实测这些技巧。",
            },
          ]}
        />
      </section>
      <Feedback locale="zh" />
    </>
  );
}
