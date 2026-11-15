import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ZH_SITE, ZH_TIMELINE, ZH_UPDATE_FAQS } from "@/data/zh-content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Minecraft 2027 更新 — 第一波 Game Drop",
  description:
    "Minecraft 2027 更新 / 第一波汇总：投掷飞盘、基岩副手、公布时间线与快照追踪。",
  path: "/zh/update/",
  locale: "zh",
  keywords: [
    "minecraft 2027 更新",
    "minecraft 更新",
    "minecraft 快照",
    "first drop 2027",
  ],
});

export default function ZhUpdatePage() {
  return (
    <>
      <JsonLd data={faqSchema(ZH_UPDATE_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "首页", path: "/zh/" },
          { name: "2027 更新", path: "/zh/update/" },
        ])}
      />

      <PageHero
        locale="zh"
        eyebrow={ZH_SITE.dropName}
        title="Minecraft 2027 第一波更新 — 已知内容"
        lead={`目标窗口 ${ZH_SITE.dropWindow}。目前确认头条：投掷飞盘武器线，以及基岩版完整副手支持。`}
      />

      <section className="section prose">
        <h2>已确认特性</h2>
        <ul>
          <li>
            <Link href="/zh/">投掷飞盘</Link> — 铜至下界合金的可返回远程武器，带反弹与穿透。
          </li>
          <li>
            <Link href="/zh/bedrock-offhand/">基岩副手对齐</Link> —
            可持用超出旧白名单的物品。
          </li>
        </ul>
        <p>
          Mojang 表示还会公布更多 First Drop 2027 细节。本页是追踪「新 Minecraft
          更新」与飞盘相关快照的中文枢纽。
        </p>
      </section>

      <section className="section">
        <h2>时间线</h2>
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
      </section>

      <section className="section">
        <Faq items={ZH_UPDATE_FAQS} title="常见问题" />
      </section>

      <section className="section">
        <RelatedLinks
          locale="zh"
          items={[
            {
              href: "/zh/crafting/",
              label: "合成",
              blurb: "配方已展示；随更新进游戏即可用。",
            },
            {
              href: "/zh/stats/",
              label: "属性",
              blurb: "为快照数值预留表格。",
            },
            {
              href: "/zh/wiki/",
              label: "资料页",
              blurb: "可引用的结构化事实。",
            },
          ]}
        />
      </section>
      <Feedback locale="zh" />
    </>
  );
}
