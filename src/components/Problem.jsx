const ITEMS = [
  "Smartphones",
  "Laptops",
  "Motorcycles",
  "Cars",
  "Business equipment",
  "Solar systems",
  "Home appliances",
  "Educational opportunities",
];

export default function Problem() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink leading-tight">
            Millions of people want a fair shot at things that change their lives.
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            Across Africa, the cost of these items keeps them out of reach for
            most people. Traditional raffles don't help — entries are
            unlimited, draws are unclear, and there's rarely a way to verify a
            winner is real. So trust stays low, and so does participation.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {[
              "Entry purchases are unlimited",
              "The draw process is unclear",
              "Organizers aren't trusted",
              "Winners can't easily be verified",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 text-sm text-ink-soft">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-marigold shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-hairline rounded-2xl p-7 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft mb-5">
            What people are hoping to win
          </p>
          <ul className="grid grid-cols-2 gap-3">
            {ITEMS.map((item) => (
              <li
                key={item}
                className="text-sm font-medium text-ink bg-paper-dim rounded-lg px-3.5 py-3 border border-hairline"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
