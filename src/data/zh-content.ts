import type { DiscTier } from "@/data/discs";
import type { FaqItem } from "@/data/faqs";
import type { TimelineItem } from "@/data/timeline";
import { DISCS, WEAPON_COMPARE } from "@/data/discs";

export const ZH_NAV = [
  { href: "/zh/", label: "首页" },
  { href: "/zh/crafting/", label: "合成" },
  { href: "/zh/stats/", label: "属性" },
  { href: "/zh/vs-trident/", label: "对比三叉戟" },
  { href: "/zh/tips/", label: "技巧" },
  { href: "/zh/bedrock-offhand/", label: "基岩副手" },
  { href: "/zh/update/", label: "2027 更新" },
  { href: "/zh/wiki/", label: "资料页" },
  { href: "/zh/disk/", label: "Disk 拼写" },
  { href: "/zh/chakram/", label: "轮刃俗称" },
] as const;

export const ZH_SITE = {
  name: "Minecraft 投掷飞盘",
  shortName: "投掷飞盘",
  description:
    "Minecraft 投掷飞盘（Throwing Disc）完整指南：合成配方、伤害属性、反弹技巧、基岩版副手，以及 2027 第一波更新追踪。",
  dropName: "2027 第一波更新（First Drop 2027）",
  dropWindow: "2027 年第一季度",
} as const;

const ZH_DISC_COPY: Record<
  string,
  Pick<DiscTier, "name" | "material" | "ingredients" | "damage" | "durability" | "notes">
> = {
  copper: {
    name: "铜质投掷飞盘",
    material: "铜锭",
    ingredients: "4× 铜锭",
    damage: "待定（快照）",
    durability: "待定（快照）",
    notes: "前期入门档。铜在当代版本中产量充足。",
  },
  iron: {
    name: "铁质投掷飞盘",
    material: "铁锭",
    ingredients: "4× 铁锭",
    damage: "待定（快照）",
    durability: "待定（快照）",
    notes: "中期稳健选择，铁轨农场即可稳定供应。",
  },
  gold: {
    name: "金质投掷飞盘",
    material: "金锭",
    ingredients: "4× 金锭",
    damage: "待定（快照）",
    durability: "待定（快照）",
    notes: "外观取向更强。附魔亲和与耐久差异尚待快照确认。",
  },
  diamond: {
    name: "钻石投掷飞盘",
    material: "钻石",
    ingredients: "4× 钻石",
    damage: "待定（快照）",
    durability: "待定（快照）",
    notes: "可合成的最高档，之后可锻造为下界合金。",
  },
  netherite: {
    name: "下界合金投掷飞盘",
    material: "下界合金锭",
    ingredients: "下界合金升级模板 + 钻石投掷飞盘 + 下界合金锭",
    damage: "待定（快照）",
    durability: "待定（快照）",
    notes: "锻造台升级。是否保留下界合金防火/防熔岩特性需快照确认。",
  },
};

export const ZH_DISCS: DiscTier[] = DISCS.map((d) => ({
  ...d,
  ...ZH_DISC_COPY[d.id],
}));

export const ZH_MECHANICS = [
  {
    title: "自动返回",
    body: "掷出后飞盘会像回旋镖一样飞回。无需从地上捡起即可再次使用——等它回来即可。",
  },
  {
    title: "硬表面反弹",
    body: "撞到硬方块可延长滞空并可能加速。利用墙面与地面做花式折射，突破基础短射程。",
  },
  {
    title: "多目标穿透",
    body: "同一条轨迹上排成一线的敌人可连续受伤。飞盘不会在第一个实体处停下。",
  },
  {
    title: "任意手投掷",
    body: "主手或副手均可持握与投掷。从副手掷出的飞盘会回到副手——与忠诚三叉戟不同。",
  },
  {
    title: "不受重力影响",
    body: "官方预览显示可按角度掷出且无明显下坠，走廊平射与垂直墙面弹射更可预期。",
  },
] as const;

export const ZH_WEAPON_COMPARE = WEAPON_COMPARE.map((row, i) => {
  const zh = [
    {
      feature: "类型",
      disc: "可返回的远程飞盘",
      trident: "近战 + 投掷长矛",
      bow: "蓄力投射物",
    },
    {
      feature: "自动返回",
      disc: "是（自带）",
      trident: "仅忠诚附魔",
      bow: "否（箭矢）",
    },
    {
      feature: "反弹",
      disc: "是 — 硬表面",
      trident: "否",
      bow: "否",
    },
    {
      feature: "穿透多目标",
      disc: "是（已公布）",
      trident: "否",
      bow: "需穿透（弩）",
    },
    {
      feature: "副手返回",
      disc: "从副手掷出则回到副手",
      trident: "忠诚返回逻辑不同",
      bow: "不适用",
    },
    {
      feature: "基础射程",
      disc: "偏短；靠反弹延长",
      trident: "中等投掷距离",
      bow: "远",
    },
    {
      feature: "材质等级",
      disc: "铜 → 铁 → 金 → 钻石 → 下界合金",
      trident: "单一物品",
      bow: "单一物品（+箭）",
    },
  ] as const;
  return zh[i] ?? row;
});

export const ZH_HOME_FAQS: FaqItem[] = [
  {
    question: "Minecraft 投掷飞盘是什么？",
    answer:
      "投掷飞盘（Throwing Disc）是预计加入 2027 第一波更新的新分级远程武器。掷出后沿轨迹伤害实体，可在硬表面反弹，然后返回手中。",
  },
  {
    question: "投掷飞盘什么时候上线？",
    answer:
      "计划进入 Minecraft 2027 第一波更新（预计 2027 Q1）。2026 年 11 月 14 日在圣地亚哥 TwitchCon 公布，目前尚未出现在公开快照中。",
  },
  {
    question: "投掷飞盘怎么合成？",
    answer:
      "铜/铁/金/钻石飞盘：工作台十字摆放同材质材料四份（中心留空）。下界合金：锻造台使用下界合金升级模板 + 钻石投掷飞盘 + 下界合金锭。",
  },
  {
    question: "是 Disc 还是 Disk？",
    answer:
      "官方拼写为 Throwing Disc（c）。玩家也常搜 throwing disk，指的是同一把武器。本站两种拼写都有对应页面。",
  },
  {
    question: "基岩版能副手使用吗？",
    answer:
      "可以。2027 第一波更新为基岩版带来完整副手支持，飞盘可用任意手持握投掷；从副手掷出则回到副手。",
  },
];

export const ZH_CRAFTING_FAQS: FaqItem[] = [
  {
    question: "投掷飞盘合成配方是什么？",
    answer:
      "在工作台将四份铜锭/铁锭/金锭或钻石放成十字：上、左、右、下，中心留空。",
  },
  {
    question: "如何获得下界合金投掷飞盘？",
    answer:
      "在锻造台用钻石投掷飞盘、下界合金升级模板与下界合金锭升级，流程与其他下界合金装备相同。",
  },
  {
    question: "有木制或石质投掷飞盘吗？",
    answer:
      "没有。已公布等级从铜开始。资料站指出这是唯一没有木/石变体的分级武器。",
  },
];

export const ZH_STATS_FAQS: FaqItem[] = [
  {
    question: "投掷飞盘伤害是多少？",
    answer:
      "精确生命值尚未公布。等 2027 第一波测试快照出现后，本页会同步伤害、耐久与附魔表。",
  },
  {
    question: "反弹会提高伤害吗？",
    answer:
      "开发者强调反弹后滞空更久、速度更快。伤害是否随速度缩放需等快照数据确认。",
  },
];

export const ZH_TIPS_FAQS: FaqItem[] = [
  {
    question: "怎么打出飞盘反弹？",
    answer:
      "瞄准让飞盘在命中敌人前后撞上硬表面（墙、地、实心方块）。每次弹射会改变方向并延长飞行。",
  },
  {
    question: "适合 PvP 和小游戏吗？",
    answer:
      "Mojang 将其定位为新的战斗与小游戏玩法。多段穿透与返回节奏，对走廊战与竞技场布局很关键。",
  },
];

export const ZH_BEDROCK_FAQS: FaqItem[] = [
  {
    question: "2027 基岩版副手支持是什么？",
    answer:
      "基岩玩家将能像 Java 一样在副手持用更多物品与方块，而不再限于少量白名单（烟花、图腾等）。使用时 HUD 会在快捷栏旁显示副手槽。",
  },
  {
    question: "能从基岩副手掷飞盘吗？",
    answer:
      "可以——官方说明任意手可持握投掷。完整基岩副手与同一波更新一起到来。",
  },
];

export const ZH_UPDATE_FAQS: FaqItem[] = [
  {
    question: "Minecraft 2027 第一波更新有什么？",
    answer:
      "目前确认：投掷飞盘各材质等级，以及基岩版完整副手。Mojang 表示还会公布更多 First Drop 2027 细节。",
  },
  {
    question: "已经进快照了吗？",
    answer:
      "截至 TwitchCon 公布时尚无。一旦开发版开始加入飞盘，请关注 Java 快照与基岩 Preview。",
  },
];

export const ZH_TIMELINE: TimelineItem[] = [
  {
    date: "2026-11-14",
    title: "圣地亚哥 TwitchCon 公布",
    body: "Mojang 公布投掷飞盘材质（铜、铁、金、钻石、下界合金），以及基岩版完整副手，同属 2027 第一波更新。",
    href: "https://www.minecraft.net/en-us/article/twitchcon-gamedrop-features",
  },
  {
    date: "2026-11-14",
    title: "官方社媒与预告片",
    body: "Minecraft 官方帖确认返回飞行、硬表面反弹、多敌人穿透与任意手使用。",
    href: "https://x.com/Minecraft",
  },
  {
    date: "2027 Q1",
    title: "2027 第一波更新目标窗口",
    body: "投掷飞盘与基岩副手对齐的计划发布窗口（社区资料追踪约 Java 27.1 / 基岩 27.10）。",
  },
  {
    date: "待定",
    title: "首个公开快照 / Preview",
    body: "伤害数值、附魔与精确反弹规则预计随开发版公布。本站会在同日更新。",
  },
];

export const ZH_TIPS = [
  {
    title: "先找墙再追击",
    body: "基础射程偏短。预瞄硬表面，让第一次弹射把飞盘送进怪堆，而不是在空地耗尽。",
  },
  {
    title: "排成一线打穿透",
    body: "走廊拉怪与门口收束，一掷可擦过多个目标。类似箭的穿透，但飞盘还会飞回来。",
  },
  {
    title: "算准返回节拍",
    body: "不能像弓那样连射。每次投掷都是承诺——飞盘滞空时顺势走位。",
  },
  {
    title: "主副手混搭",
    body: "主手剑/斧、副手飞盘（或对调）。飞盘回到掷出的那只手——练好快捷栏肌肉记忆。",
  },
  {
    title: "利用垂直面",
    body: "无重力弧线让天花板与地面弹射更清晰。多在塔楼与楼梯间练习。",
  },
  {
    title: "小游戏地图",
    body: "有柱子的竞技场利于弹射。上线后预计会出现专为飞盘设计的跑酷与死斗图。",
  },
] as const;
