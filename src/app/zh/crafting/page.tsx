import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { WeaponCard } from "@/components/WeaponCard";
import { ZH_CRAFTING_FAQS, ZH_DISCS } from "@/data/zh-content";
import { breadcrumbSchema, faqSchema, howToCraftSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "投掷飞盘合成配方",
  description:
    "Minecraft 投掷飞盘合成：铜/铁/金/钻石十字配方，以及锻造台升级下界合金步骤。",
  path: "/zh/crafting/",
  locale: "zh",
  keywords: ["投掷飞盘 合成", "throwing disc 配方", "下界合金投掷飞盘"],
});

export default function ZhCraftingPage() {
  return (
    <>
      <JsonLd data={howToCraftSchema()} />
      <JsonLd data={faqSchema(ZH_CRAFTING_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "首页", path: "/zh/" },
          { name: "合成", path: "/zh/crafting/" },
        ])}
      />

      <PageHero
        locale="zh"
        eyebrow="合成指南"
        title="投掷飞盘合成配方"
        lead="铜、铁、金、钻石：工作台十字四格同材质。下界合金：锻造台升级——与其他下界合金装备同理。"
      />

      <section className="section">
        <h2>十字配方（工作台）</h2>
        <p className="lede">
          材料放在上、左、右、下四格，中心留空。每种等级使用四份相同材料。
        </p>
        <div className="tier-grid">
          {ZH_DISCS.filter((d) => d.obtain === "crafting").map((disc) => (
            <WeaponCard key={disc.id} disc={disc} locale="zh" />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>下界合金锻造升级</h2>
        <p className="lede">
          将钻石投掷飞盘与下界合金升级模板、下界合金锭在锻造台合成。
        </p>
        <div className="tier-grid">
          {ZH_DISCS.filter((d) => d.obtain === "smithing").map((disc) => (
            <WeaponCard key={disc.id} disc={disc} locale="zh" />
          ))}
        </div>
        <p className="callout">
          合成后可查看 <Link href="/zh/stats/">伤害与耐久占位</Link>，以及{" "}
          <Link href="/zh/tips/">反弹技巧</Link>。
        </p>
      </section>

      <section className="section">
        <Faq items={ZH_CRAFTING_FAQS} title="常见问题" />
      </section>

      <section className="section">
        <RelatedLinks
          locale="zh"
          items={[
            {
              href: "/zh/wiki/",
              label: "资料页",
              blurb: "结构化获取方式一览。",
            },
            {
              href: "/zh/update/",
              label: "2027 第一波",
              blurb: "配方预计随哪次更新进游戏。",
            },
            {
              href: "/zh/disk/",
              label: "Disk 拼写",
              blurb: "同一配方的 disk 搜索入口。",
            },
          ]}
        />
      </section>
      <Feedback locale="zh" />
    </>
  );
}
