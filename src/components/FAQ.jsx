import { useState } from "react";

const FAQS = [
  {
    q: "Why is there a 5-entry limit?",
    a: "So no single person — however much money they have — can dominate a draw. The same cap applies to every verified participant, every time.",
  },
  {
    q: "How do I know the draw is real?",
    a: "Every competition publishes total entries, entries remaining, the closing date, the draw date, the winning ticket number, and the verification details — and that record stays public for auditing.",
  },
  {
    q: "How are accounts verified?",
    a: "Through email verification, phone verification, and one-time password authentication, confirming each participant is a real, unique person.",
  },
  {
    q: "What happens to my entry once I buy it?",
    a: "It's assigned a unique ticket number immediately, and that allocation is recorded permanently — visible to you at any time.",
  },
  {
    q: "Can businesses list their own prizes?",
    a: "Yes. Under merchant competitions, FairChance handles marketing, payments, entry management, and winner selection, and earns a platform commission.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="px-5 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-marigold-deep mb-4">
          Questions
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-12">
          Good to know before you join.
        </h2>

        <div className="flex flex-col">
          {FAQS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={item.q} className="border-b border-hairline">
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium text-ink">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center text-ink-soft transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}
                  style={{ display: "grid" }}
                >
                  <p className="overflow-hidden text-ink-soft text-sm leading-relaxed pr-10">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
