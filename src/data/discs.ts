export type DiscTier = {
  id: string;
  name: string;
  material: string;
  color: string;
  accent: string;
  obtain: "crafting" | "smithing";
  ingredients: string;
  pattern: ("empty" | "mat")[];
  damage: string;
  durability: string;
  notes: string;
};

/** Cross pattern: top / left / center / right / bottom — 4 materials, center empty */
export const CRAFTING_SLOTS = [
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
] as const;

export const DISCS: DiscTier[] = [
  {
    id: "copper",
    name: "Copper Throwing Disc",
    material: "Copper Ingot",
    color: "#b87333",
    accent: "#e0a06a",
    obtain: "crafting",
    ingredients: "4× Copper Ingot",
    pattern: ["empty", "mat", "empty", "mat", "empty", "mat", "empty", "mat", "empty"],
    damage: "TBD (snapshot)",
    durability: "TBD (snapshot)",
    notes: "Early-game entry tier. Copper is abundant after the copper age updates.",
  },
  {
    id: "iron",
    name: "Iron Throwing Disc",
    material: "Iron Ingot",
    color: "#c0c0c0",
    accent: "#e8e8e8",
    obtain: "crafting",
    ingredients: "4× Iron Ingot",
    pattern: ["empty", "mat", "empty", "mat", "empty", "mat", "empty", "mat", "empty"],
    damage: "TBD (snapshot)",
    durability: "TBD (snapshot)",
    notes: "Reliable mid-game option with easy renewable iron farms.",
  },
  {
    id: "gold",
    name: "Golden Throwing Disc",
    material: "Gold Ingot",
    color: "#d4af37",
    accent: "#f0d56a",
    obtain: "crafting",
    ingredients: "4× Gold Ingot",
    pattern: ["empty", "mat", "empty", "mat", "empty", "mat", "empty", "mat", "empty"],
    damage: "TBD (snapshot)",
    durability: "TBD (snapshot)",
    notes: "Style-forward tier. Exact enchantability vs durability not yet confirmed.",
  },
  {
    id: "diamond",
    name: "Diamond Throwing Disc",
    material: "Diamond",
    color: "#4ecdc4",
    accent: "#7ef0e8",
    obtain: "crafting",
    ingredients: "4× Diamond",
    pattern: ["empty", "mat", "empty", "mat", "empty", "mat", "empty", "mat", "empty"],
    damage: "TBD (snapshot)",
    durability: "TBD (snapshot)",
    notes: "Top craftable tier before smithing into netherite.",
  },
  {
    id: "netherite",
    name: "Netherite Throwing Disc",
    material: "Netherite Ingot",
    color: "#4a3f35",
    accent: "#8a7a68",
    obtain: "smithing",
    ingredients: "Netherite Upgrade + Diamond Throwing Disc + Netherite Ingot",
    pattern: [],
    damage: "TBD (snapshot)",
    durability: "TBD (snapshot)",
    notes: "Smithing-table upgrade. Expected to keep netherite fire/lava survivability traits — confirm in snapshot.",
  },
];

export const MECHANICS = [
  {
    title: "Returns to thrower",
    body: "After a throw, the disc flies back like a boomerang. You do not need to pick it up from the ground to reuse it — wait for the return.",
  },
  {
    title: "Ricochet on hard surfaces",
    body: "Hitting hard blocks extends airtime and can increase speed. Use walls and floors for trick-shot angle extensions beyond the base short range.",
  },
  {
    title: "Multi-target pierce",
    body: "Lined-up enemies can all take hits along the same trajectory. The disc continues through entities instead of stopping on the first contact.",
  },
  {
    title: "Either-hand throw",
    body: "Hold and throw from main hand or off-hand. Discs thrown from the off-hand return to the off-hand — unlike Loyalty tridents.",
  },
  {
    title: "No gravity arc",
    body: "Official preview notes describe angled throws without a gravity drop, making flat hallway and vertical wall shots more predictable.",
  },
] as const;

export const WEAPON_COMPARE = [
  {
    feature: "Type",
    disc: "Returning ranged disc",
    trident: "Melee + thrown spear",
    bow: "Charged projectile",
  },
  {
    feature: "Returns automatically",
    disc: "Yes (built-in)",
    trident: "Only with Loyalty",
    bow: "No (arrows)",
  },
  {
    feature: "Ricochet",
    disc: "Yes — hard surfaces",
    trident: "No",
    bow: "No",
  },
  {
    feature: "Pierce multiple targets",
    disc: "Yes (announced)",
    trident: "No",
    bow: "With Piercing (crossbow)",
  },
  {
    feature: "Off-hand return",
    disc: "Returns to off-hand if thrown there",
    trident: "Loyalty returns to inventory/main behavior differs",
    bow: "N/A",
  },
  {
    feature: "Base range",
    disc: "Short; extend via ricochet",
    trident: "Medium thrown range",
    bow: "Long",
  },
  {
    feature: "Material tiers",
    disc: "Copper → Iron → Gold → Diamond → Netherite",
    trident: "Single item",
    bow: "Single item (+ arrows)",
  },
] as const;
