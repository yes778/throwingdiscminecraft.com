import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

type Related = { href: string; label: string; blurb: string };

export function RelatedLinks({
  items,
  locale = "en",
}: {
  items: Related[];
  locale?: Locale;
}) {
  return (
    <section className="related" aria-labelledby="related-heading">
      <h2 id="related-heading">{t(locale).relatedGuides}</h2>
      <ul className="related__grid">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <span className="related__label">{item.label}</span>
              <span className="related__blurb">{item.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
