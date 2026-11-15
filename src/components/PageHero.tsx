import type { Locale } from "@/lib/i18n";
import { LastUpdated } from "./LastUpdated";

type Props = {
  eyebrow?: string;
  title: string;
  lead: string;
  date?: string;
  locale?: Locale;
};

export function PageHero({ eyebrow, title, lead, date, locale = "en" }: Props) {
  return (
    <header className="page-hero">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      <LastUpdated date={date} locale={locale} />
    </header>
  );
}
