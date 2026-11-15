import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Feedback } from "@/components/Feedback";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SITE } from "@/data/site";
import { ZH_BEDROCK_FAQS } from "@/data/zh-content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "基岩版副手支持完整说明",
  description:
    "基岩版副手 / offhand：2027 第一波更新带来接近 Java 的双持能力、HUD 显示，以及投掷飞盘任意手投掷。",
  path: "/zh/bedrock-offhand/",
  locale: "zh",
  keywords: ["基岩版 副手", "bedrock offhand", "基岩 双持", "minecraft 副手"],
});

export default function ZhBedrockOffhandPage() {
  return (
    <>
      <JsonLd data={faqSchema(ZH_BEDROCK_FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "首页", path: "/zh/" },
          { name: "基岩副手", path: "/zh/bedrock-offhand/" },
        ])}
      />

      <PageHero
        locale="zh"
        eyebrow="基岩版"
        title="基岩版副手：完整支持即将到来"
        lead="Java 玩家自 2016 年起就能双持。2027 第一波更新终于把更广泛的副手能力带给基岩——与投掷飞盘同期公布。"
      />

      <section className="section prose">
        <h2>会有什么变化</h2>
        <p>
          基岩副手过去只允许少量物品（图腾、烟花、地图等白名单）。Mojang
          确认玩家将能在副手持用并正确使用更多物品——包括工具。
        </p>
        <p>
          使用副手时，HUD 会在快捷栏旁显示副手槽，可读性更接近 Java。
        </p>
        <h2>对投掷飞盘意味着什么</h2>
        <p>
          官方强调可用 <strong>任意手</strong> 持握飞盘。从副手掷出的飞盘会回到副手，循环比忠诚三叉戟的边界情况更干净。
        </p>
        <p className="callout">
          Preview 时机：Mojang 表示基岩副手支持会进入临近公布窗口的 Preview。版本号请跟{" "}
          <Link href="/zh/update/">2027 第一波更新</Link>。
        </p>
        <p>
          来源：{" "}
          <a href={SITE.officialArticle} target="_blank" rel="noopener noreferrer">
            Minecraft.net TwitchCon 文章
          </a>
          。
        </p>
      </section>

      <section className="section">
        <Faq items={ZH_BEDROCK_FAQS} title="常见问题" />
      </section>

      <section className="section">
        <RelatedLinks
          locale="zh"
          items={[
            {
              href: "/zh/",
              label: "投掷飞盘首页",
              blurb: "同一波更新的武器总览。",
            },
            {
              href: "/zh/tips/",
              label: "技巧",
              blurb: "主副手混搭战斗习惯。",
            },
            {
              href: "/zh/vs-trident/",
              label: "vs 三叉戟",
              blurb: "返回到手差异说明。",
            },
          ]}
        />
      </section>
      <Feedback locale="zh" />
    </>
  );
}
