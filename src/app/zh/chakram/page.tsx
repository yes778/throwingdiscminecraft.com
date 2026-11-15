import Link from "next/link";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Chakram / 轮刃 — Minecraft 投掷飞盘俗称",
  description:
    "Chakram Minecraft 解释：玩家把投掷飞盘昵称为轮刃/chakram。官方名称、机制与合成技巧入口。",
  path: "/zh/chakram/",
  locale: "zh",
  keywords: ["chakram minecraft", "minecraft 轮刃", "投掷飞盘 chakram"],
});

export default function ZhChakramPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "首页", path: "/zh/" },
          { name: "轮刃", path: "/zh/chakram/" },
        ])}
      />

      <PageHero
        locale="zh"
        eyebrow="玩家俗称"
        title="Chakram / 轮刃 = 投掷飞盘"
        lead="Chakram 是现实中的圆形投掷刃。TwitchCon 公布后，玩家用这个昵称称呼 Minecraft 的可返回飞盘武器。"
      />

      <section className="section prose">
        <h2>官方名 vs 昵称</h2>
        <p>
          Mojang 称之为 <strong>Throwing Disc（投掷飞盘）</strong>
          。尚未公布单独的 “chakram” 物品 ID。若你搜的是 chakram
          minecraft，请看 <Link href="/zh/">投掷飞盘指南</Link> 获取配方与机制。
        </p>
        <h2>为什么这个绰号贴切</h2>
        <p>
          圆形外形、投掷飞行与反弹幻想，和媒体里的轮刃形象高度重合——类似玩家给其他武器起外号的习惯。
        </p>
        <p className="callout">
          更常用 disk 拼写？去{" "}
          <Link href="/zh/disk/">minecraft throwing disk</Link>。
        </p>
      </section>

      <section className="section">
        <RelatedLinks
          locale="zh"
          items={[
            {
              href: "/zh/crafting/",
              label: "合成飞盘",
              blurb: "五种材质，轮刃手感拉满。",
            },
            {
              href: "/zh/tips/",
              label: "花式弹射",
              blurb: "最能打出 chakram 幻想的技巧。",
            },
            {
              href: "/zh/vs-trident/",
              label: "vs 三叉戟",
              blurb: "与另一把投掷武器的差异。",
            },
          ]}
        />
      </section>
      <Feedback locale="zh" />
    </>
  );
}
