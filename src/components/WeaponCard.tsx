import type { DiscTier } from "@/data/discs";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { CraftingGrid } from "./CraftingGrid";

export function WeaponCard({
  disc,
  locale = "en",
}: {
  disc: DiscTier;
  locale?: Locale;
}) {
  const copy = t(locale);
  const labels =
    locale === "zh"
      ? { obtain: "获取", ingredients: "材料", damage: "伤害", durability: "耐久" }
      : {
          obtain: "Obtain",
          ingredients: "Ingredients",
          damage: "Damage",
          durability: "Durability",
        };

  return (
    <article className="weapon-card" style={{ ["--tier" as string]: disc.accent }}>
      <header>
        <span className="weapon-card__swatch" style={{ background: disc.color }} />
        <h3>{disc.name}</h3>
      </header>
      <CraftingGrid disc={disc} locale={locale} />
      <dl className="weapon-card__meta">
        <div>
          <dt>{labels.obtain}</dt>
          <dd>
            {disc.obtain === "crafting" ? copy.obtainCrafting : copy.obtainSmithing}
          </dd>
        </div>
        <div>
          <dt>{labels.ingredients}</dt>
          <dd>{disc.ingredients}</dd>
        </div>
        <div>
          <dt>{labels.damage}</dt>
          <dd>{disc.damage}</dd>
        </div>
        <div>
          <dt>{labels.durability}</dt>
          <dd>{disc.durability}</dd>
        </div>
      </dl>
      <p>{disc.notes}</p>
    </article>
  );
}
