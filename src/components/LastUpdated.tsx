import { SITE } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export function LastUpdated({
  date = SITE.lastUpdated,
  locale = "en",
}: {
  date?: string;
  locale?: Locale;
}) {
  const label = t(locale).lastUpdated;
  return (
    <p className="last-updated">
      <time dateTime={date}>
        {label}: {date}
      </time>
    </p>
  );
}
