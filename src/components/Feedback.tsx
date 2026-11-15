import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export function Feedback({ locale = "en" }: { locale?: Locale }) {
  const copy = t(locale);
  return (
    <section className="feedback" aria-labelledby="feedback-heading">
      <h2 id="feedback-heading">{copy.feedbackTitle}</h2>
      <p>{copy.feedbackBody}</p>
      <a
        className="btn btn--ghost"
        href={`mailto:hello@throwingdiscminecraft.com?subject=${encodeURIComponent(copy.feedbackSubject)}`}
      >
        {copy.feedbackCta}
      </a>
    </section>
  );
}
