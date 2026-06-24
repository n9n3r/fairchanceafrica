export default function Revenue() {
  return (
    <section id="revenue" className="px-5 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-marigold-deep mb-4">
          For businesses
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink max-w-xl">
          Two ways competitions get funded.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* Model one */}
          <div className="bg-card border border-hairline rounded-2xl p-7 sm:p-8">
            <span className="font-mono text-xs text-ink-soft">Model 01</span>
            <h3 className="font-display text-xl font-semibold text-ink mt-1.5 mb-3">
              Platform-owned competitions
            </h3>
            <p className="text-sm text-ink-soft leading-relaxed mb-6">
              FairChance buys the prize directly and runs the competition
              end to end.
            </p>

            <div className="rounded-xl bg-paper-dim p-5 font-mono text-sm">
              <Row label="Prize value" value="₦800,000" />
              <Row label="Entries" value="1,000 × ₦1,500" />
              <Row label="Revenue" value="₦1,500,000" />
              <Row label="Prize cost" value="− ₦800,000" />
              <div className="h-px bg-hairline my-3" />
              <Row label="Operating margin" value="₦700,000" strong />
            </div>
          </div>

          {/* Model two */}
          <div className="bg-card border border-hairline rounded-2xl p-7 sm:p-8">
            <span className="font-mono text-xs text-ink-soft">Model 02</span>
            <h3 className="font-display text-xl font-semibold text-ink mt-1.5 mb-3">
              Merchant competitions
            </h3>
            <p className="text-sm text-ink-soft leading-relaxed mb-6">
              Businesses list their own products. FairChance handles the
              rest — and earns a commission.
            </p>

            <ul className="flex flex-col gap-2.5">
              {[
                "Marketing",
                "Payment processing",
                "Entry management",
                "Competition administration",
                "Winner selection",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 text-sm text-ink bg-paper-dim rounded-lg px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-verified shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-soft mt-5">
              FairChance earns a platform commission on every entry sold.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, strong }) {
  return (
    <div className="flex justify-between py-1">
      <span className="text-ink-soft">{label}</span>
      <span className={strong ? "text-marigold-deep font-semibold" : "text-ink"}>
        {value}
      </span>
    </div>
  );
}
