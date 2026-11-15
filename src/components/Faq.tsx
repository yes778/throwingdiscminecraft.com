import type { FaqItem } from "@/data/faqs";

export function Faq({ items, title = "FAQ" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading">{title}</h2>
      <div className="faq__list">
        {items.map((item) => (
          <details key={item.question} className="faq__item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
