import TicketMeter from "./TicketMeter";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-5 sm:px-8 overflow-hidden"
    >
      {/* subtle background texture: faint ledger lines */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 38px, var(--color-hairline) 38px, var(--color-hairline) 39px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-marigold-deep mb-5 opacity-0 animate-fade-up">
            A fair opportunity marketplace
          </p>

          <h1
            className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] font-semibold text-ink tracking-tight opacity-0 animate-fade-up"
            style={{ animationDelay: "90ms" }}
          >
            Winning shouldn't belong
            <br className="hidden sm:block" /> to whoever spends the most.
          </h1>

          <p
            className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            FairChance Africa caps every competition at five entries per
            person. The same rule for everyone — so a real chance to win
            doesn't depend on how much you can afford to spend.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "270ms" }}
          >
            <TicketMeter filled={3} highlightLast size="lg" animate />
            <div className="text-sm text-ink-soft leading-snug">
              <span className="font-semibold text-ink">3 of 5 entries used.</span>
              <br />
              That's the limit. For everyone. No exceptions.
            </div>
          </div>

          <div
            className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#competitions"
              className="px-6 py-3.5 rounded-full font-semibold bg-marigold text-paper hover:bg-marigold-deep transition-colors shadow-[0_8px_24px_-8px_rgba(232,112,42,0.55)]"
            >
              Browse competitions
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3.5 rounded-full font-semibold text-ink border border-ink/15 hover:border-ink/40 transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
