import type { DiscTier } from "@/data/discs";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export function CraftingGrid({
  disc,
  locale = "en",
}: {
  disc: DiscTier;
  locale?: Locale;
}) {
  const emptyLabel = t(locale).empty;

  if (disc.obtain === "smithing") {
    const slots =
      locale === "zh"
        ? ["下界合金升级模板", "钻石飞盘", "下界合金锭"]
        : ["Netherite Upgrade", "Diamond Disc", "Netherite Ingot"];
    return (
      <div className="smithing" style={{ ["--tier" as string]: disc.accent }}>
        {slots.map((slot) => (
          <div key={slot} className="smithing__slot">
            {slot}
          </div>
        ))}
        <span className="smithing__arrow" aria-hidden>
          →
        </span>
        <div className="smithing__result" style={{ borderColor: disc.color }}>
          {disc.name}
        </div>
      </div>
    );
  }

  return (
    <div className="craft-grid" aria-label={`${disc.name} recipe`}>
      {disc.pattern.map((cell, i) => (
        <div
          key={`${disc.id}-${i}`}
          className={cell === "mat" ? "craft-grid__cell is-mat" : "craft-grid__cell"}
          style={cell === "mat" ? { background: disc.color } : undefined}
          title={cell === "mat" ? disc.material : emptyLabel}
        >
          {cell === "mat" ? <span className="sr-only">{disc.material}</span> : null}
        </div>
      ))}
    </div>
  );
}
