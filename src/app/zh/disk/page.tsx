import Link from "next/link";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Minecraft Throwing Disk — 即投掷飞盘",
  description:
    "minecraft throwing disk / throwing disk 说明：官方拼写为 Throwing Disc。配方、属性与技巧的中文互链页。",
  path: "/zh/disk/",
  locale: "zh",
  keywords: ["minecraft throwing disk", "throwing disk", "投掷飞盘 disk"],
});

export default function ZhDiskPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "首页", path: "/zh/" },
          { name: "Disk", path: "/zh/disk/" },
        ])}
      />

      <PageHero
        locale="zh"
        eyebrow="拼写变体"
        title="Throwing disk = 投掷飞盘（Throwing Disc）"
        lead="在搜 throwing disk？你来对了。Mojang 官方名用 disc（c），与音乐唱片 music disc 同一拼写习惯。"
      />

      <section className="section prose">
        <h2>为什么两种拼写都会排到</h2>
        <p>
          美式英语常默认写 <strong>disk</strong>。Minecraft 物品命名习惯用{" "}
          <strong>disc</strong>。搜索引擎会把两种查询当成同一意图：2027
          第一波更新的可返回武器。
        </p>
        <p>
          本页承接 “minecraft throwing disk” 流量，再导向权威中文枢纽{" "}
          <Link href="/zh/">投掷飞盘</Link>，避免薄内容重复。
        </p>
        <h2>接下来去哪</h2>
        <ul>
          <li>
            <Link href="/zh/crafting/">五种材质合成配方</Link>
          </li>
          <li>
            <Link href="/zh/stats/">伤害与反弹属性</Link>
          </li>
          <li>
            <Link href="/zh/tips/">实战技巧</Link>
          </li>
          <li>
            <Link href="/zh/update/">2027 更新追踪</Link>
          </li>
        </ul>
      </section>

      <section className="section">
        <RelatedLinks
          locale="zh"
          items={[
            {
              href: "/zh/",
              label: "飞盘首页",
              blurb: "中文主落地页。",
            },
            {
              href: "/zh/chakram/",
              label: "轮刃俗称",
              blurb: "另一常见玩家搜索别名。",
            },
            {
              href: "/zh/wiki/",
              label: "资料页",
              blurb: "两种拼写共用的结构化事实。",
            },
          ]}
        />
      </section>
      <Feedback locale="zh" />
    </>
  );
}
