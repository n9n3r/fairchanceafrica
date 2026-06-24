import TicketMeter from "./TicketMeter";

const COMPETITIONS = [
  {
    title: "Brand-New iPhone",
    sub: "Latest model, sealed box",
    fee: "₦1,000",
    closes: "12 days",
    used: 0,
  },
  {
    title: "Honda Motorcycle",
    sub: "Brand-new, 2026 model",
    fee: "₦2,500",
    closes: "20 days",
    used: 2,
  },
  {
    title: "Solar Power System",
    sub: "5kVA, full installation",
    fee: "₦1,500",
    closes: "27 days",
    used: 0,
  },
  {
    title: "Business Starter Kit",
    sub: "Equipment + ₦200,000 grant",
    fee: "₦2,000",
    closes: "9 days",
    used: 5,
  },
];

export default function Competitions() {
  return (
    <section id="competitions" className="px-5 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-marigold-deep mb-4">
              Live competitions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">
              Open right now. Five-entry cap on every one.
            </h2>
          </div>
          <a
            href="#join"
            className="text-sm font-semibold text-ink-soft hover:text-ink transition-colors whitespace-nowrap"
          >
            See all competitions →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPETITIONS.map((c) => {
            const pct = Math.round((c.entries / c.total) * 100);
            return (
              <article
                key={c.title}
                className="bg-card border border-hairline rounded-2xl p-6 flex flex-col gap-5 hover:border-ink/25 transition-colors"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-sm text-ink-soft mt-0.5">{c.sub}</p>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-ink-soft mb-2">
                    <span>{c.entries.toLocaleString()} / {c.total.toLocaleString()} entries</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-paper-dim overflow-hidden">
                    <div
                      className="h-full bg-marigold rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-ink-soft">Entry fee</p>
                    <p className="font-mono font-semibold text-ink">{c.fee}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-ink-soft">Closes in</p>
                    <p className="font-mono font-semibold text-ink">{c.closes}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-hairline flex items-center justify-between">
                  <TicketMeter filled={c.used} size="sm" />
                  <span className="font-mono text-xs text-ink-soft">{c.used}/5 used</span>
                </div>

                <a
                  href="#join"
                  className="mt-1 text-center py-2.5 rounded-full text-sm font-semibold bg-ink text-paper hover:bg-marigold-deep transition-colors"
                >
                  {c.used >= 5 ? "Limit reached" : "Buy entries"}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
