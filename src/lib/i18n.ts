export type Locale = "en" | "zh";

export const LOCALES: Locale[] = ["en", "zh"];

export const UI = {
  en: {
    lastUpdated: "Last Updated",
    officialSource: "Official source",
    relatedGuides: "Related guides",
    feedbackTitle: "Spot a wrong number?",
    feedbackBody:
      "Stats ship with snapshots. When Mojang publishes new values, send a correction so we can update the same day.",
    feedbackCta: "Email feedback",
    feedbackSubject: "Throwing Disc correction",
    langLabel: "Language",
    plannedFeature: "Planned for First Drop 2027",
    readMore: "Read guide",
    navAria: "Primary",
    menu: "Menu",
    guides: "Guides",
    official: "Official",
    footerBlurb:
      "Fan reference hub for the Minecraft Throwing Disc and First Drop 2027. Not affiliated with Mojang or Microsoft.",
    footerEdit: "Content editable in",
    officialArticle: "Minecraft.net announcement",
    officialWiki: "Minecraft Wiki",
    source: "Source",
    obtainCrafting: "Crafting Table",
    obtainSmithing: "Smithing Table",
    empty: "Empty",
  },
  zh: {
    lastUpdated: "最后更新",
    officialSource: "官方来源",
    relatedGuides: "相关指南",
    feedbackTitle: "发现数据有误？",
    feedbackBody:
      "伤害与耐久会随快照更新。Mojang 公布新数值后欢迎提交更正，我们会尽快同步。",
    feedbackCta: "邮件反馈",
    feedbackSubject: "投掷飞盘数据更正",
    langLabel: "语言",
    plannedFeature: "预计加入 2027 第一波更新",
    readMore: "阅读指南",
    navAria: "主导航",
    menu: "菜单",
    guides: "指南",
    official: "官方",
    footerBlurb:
      "Minecraft 投掷飞盘与 2027 第一波更新的玩家参考站，与 Mojang / Microsoft 无隶属关系。",
    footerEdit: "内容可编辑于",
    officialArticle: "Minecraft.net 公告",
    officialWiki: "Minecraft Wiki",
    source: "来源",
    obtainCrafting: "工作台",
    obtainSmithing: "锻造台",
    empty: "空",
  },
} as const;

export function t(locale: Locale = "en") {
  return UI[locale];
}
