import TicketMeter from "./TicketMeter";

export default function CTA() {
  return (
    <section id="join" className="px-5 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto bg-ink rounded-3xl px-7 sm:px-14 py-14 sm:py-20 text-paper relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--color-paper) 0px, var(--color-paper) 1px, transparent 1px, transparent 14px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-marigold mb-5">
            Opportunity should belong to everyone
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            Create your account. The cap is already on your side.
          </h2>
          <p className="text-paper/70 leading-relaxed mb-8 max-w-lg">
            Verify your details, browse what's open, and buy up to five
            entries in any Lot — the same limit as everyone else who
            joins.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="px-6 py-3.5 rounded-full font-semibold bg-marigold text-paper hover:bg-marigold-deep transition-colors"
            >
              Create your account
            </a>
            <TicketMeter filled={0} size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
