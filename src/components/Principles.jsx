import TicketMeter from "./TicketMeter";

export default function Principles() {
  return (
    <section id="principles" className="px-5 sm:px-8 py-20 sm:py-28 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-marigold mb-4">
          Our core principles
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight max-w-xl">
          Fairness isn't a slogan here. It's a rule built into every draw.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10 rounded-2xl overflow-hidden">
          <div className="bg-ink p-7 flex flex-col gap-5">
            <TicketMeter filled={5} size="sm" />
            <div>
              <h3 className="font-display text-xl font-semibold mb-2">Fairness</h3>
              <p className="text-sm text-paper/70 leading-relaxed">
                Five entries is the limit for every verified participant in a
                competition. No one can buy their way to a bigger advantage.
              </p>
            </div>
          </div>

          <div className="bg-ink p-7 flex flex-col gap-5">
            <div className="flex items-center gap-2 font-mono text-xs text-paper/60">
              <TicketMeter filled={5} size="sm" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-sm text-paper/70 leading-relaxed">
                Closing date, draw date, and
                the winning ticket are all public — for every competition.
              </p>
            </div>
          </div>

          <div className="bg-ink p-7 flex flex-col gap-5">
            <div className="flex items-center gap-2 font-mono text-xs text-verified">
              <span>✓</span> verified draw
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-2">Trust</h3>
              <p className="text-sm text-paper/70 leading-relaxed">
                Every prize is verified before listing. Every payment is
                tracked. Every draw is recorded. Every winner is documented.
              </p>
            </div>
          </div>

          <div className="bg-ink p-7 flex flex-col gap-5">
            <div className="font-mono text-xs text-paper/60">
              <TicketMeter filled={5} size="sm" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-sm text-paper/70 leading-relaxed">
                Small entry costs and a hard cap mean you don't need deep
                pockets to participate — just a fair shot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
