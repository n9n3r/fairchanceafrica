const FUTURE = [
  { title: "Vehicles", body: "Cars, motorcycles, and commercial vehicles." },
  { title: "Education", body: "Scholarships and training programs." },
  { title: "Entrepreneurship", body: "Business grants and startup funding." },
  { title: "Housing", body: "Property competitions and homeownership routes." },
  { title: "Experiences", body: "Travel packages, events, and exclusive access." },
];

export default function Expansion() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28 border-t border-hairline bg-paper-dim/60">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-marigold-deep mb-4">
          Where this goes next
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink max-w-xl mb-12">
          The same fair rule, applied to bigger opportunities.
        </h2>

        <div className="flex flex-wrap gap-4">
          {FUTURE.map((f) => (
            <div
              key={f.title}
              className="flex-1 min-w-[220px] bg-card border border-hairline rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold text-ink mb-1.5">
                {f.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
