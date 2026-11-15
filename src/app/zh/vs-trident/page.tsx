import Link from "next/link";
import { CompareTable } from "@/components/CompareTable";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "投掷飞盘 vs 三叉戟",
  description:
    "投掷飞盘与三叉戟对比：返回、反弹、穿透、副手差异，以及什么时候该选哪把武器。",
  path: "/zh/vs-trident/",
  locale: "zh",
  keywords: ["投掷飞盘 vs 三叉戟", "throwing disc vs trident"],
});

export default function ZhVsTridentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "首页", path: "/zh/" },
          { name: "对比三叉戟", path: "/zh/vs-trident/" },
        ])}
      />

      <PageHero
        locale="zh"
        eyebrow="武器对比"
        title="投掷飞盘 vs 三叉戟"
        lead="两者都能投掷、都能返回——但飞盘自带返回、反弹延长与多目标穿透，无需忠诚附魔。"
      />

      <section className="section">
        <h2>快速对比</h2>
        <CompareTable locale="zh" />
      </section>

      <section className="section prose">
        <h2>什么时候选飞盘</h2>
        <p>
          适合狭窄走廊、试炼密室式房间，以及任何能靠墙面弹射换角度的战斗。多段穿透奖励排成一线的怪群。
        </p>
        <h2>什么时候留着三叉戟</h2>
        <p>
          近战突刺、引雷 / 穿刺等附魔场景，以及水中远投，三叉戟仍更强。忠诚依赖附魔；飞盘返回是默认能力。
        </p>
        <p className="callout">
          副手提示：从副手掷出的飞盘会回到副手。忠诚三叉戟行为不同——见{" "}
          <Link href="/zh/bedrock-offhand/">基岩副手</Link>。
        </p>
      </section>

      <section className="section">
        <RelatedLinks
          locale="zh"
          items={[
            {
              href: "/zh/stats/",
              label: "属性",
              blurb: "伤害占位与反弹规则。",
            },
            {
              href: "/zh/tips/",
              label: "技巧",
              blurb: "相对长矛玩法的投掷节奏。",
            },
            {
              href: "/zh/crafting/",
              label: "合成",
              blurb: "各材质飞盘的材料成本。",
            },
          ]}
        />
      </section>
      <Feedback locale="zh" />
    </>
  );
}
