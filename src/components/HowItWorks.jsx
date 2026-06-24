import TicketMeter from "./TicketMeter";

const STEPS = [
  {
    n: "01",
    title: "A competition is listed",
    body: "Each listing shows the prize, entry fee, the five-entry cap, and the closing date — upfront, before anyone pays.",
  },
  {
    n: "02",
    title: "Accounts are verified",
    body: "Email, phone, and one-time password authentication confirm every participant is a real, unique person.",
  },
  {
    n: "03",
    title: "Entries are purchased — up to five",
    body: "Buy 1 to 5 entries. Once you hit five, that's it for this competition, no matter your budget.",
  },
  {
    n: "04",
    title: "Every entry gets a ticket number",
    body: "Each entry is assigned a unique, permanently recorded ticket number the moment it's purchased.",
  },
  {
    n: "05",
    title: "A transparent draw is run",
    body: "When the competition closes, the winning ticket is chosen by a secure, verifiable random process.",
  },
  {
    n: "06",
    title: "The winner is announced",
    body: "Results are published publicly and stay available for anyone to audit, indefinitely.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-marigold-deep mb-4">
          How it works
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink max-w-xl">
          Six steps. The cap holds at every one of them.
        </h2>

        <div className="mt-14 grid lg:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-0">
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {STEPS.map((s) => (
              <li key={s.n}>
                <span className="font-mono text-xs text-marigold-deep">{s.n}</span>
                <h3 className="font-display text-lg font-semibold text-ink mt-1.5 mb-1.5">
                  {s.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="hidden lg:block bg-hairline" />

          {/* Worked example: John & Sarah, straight from the cap rule */}
          <div className="bg-card border border-hairline rounded-2xl p-7 sm:p-8 lg:ml-10 h-fit">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft mb-6">
              Worked example
            </p>

            <div className="flex flex-col gap-7">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-ink">John</span>
                  <span className="font-mono text-xs text-ink-soft">3 entries bought</span>
                </div>
                <TicketMeter filled={3} size="md" />
                <p className="text-sm text-ink-soft mt-3 leading-relaxed">
                  John can still buy 2 more entries before he hits the limit.
                </p>
              </div>

              <div className="h-px bg-hairline" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-ink">Sarah</span>
                  <span className="font-mono text-xs text-marigold-deep">5 entries bought</span>
                </div>
                <TicketMeter filled={5} highlightLast size="md" />
                <p className="text-sm text-ink-soft mt-3 leading-relaxed">
                  Sarah is at the cap. She can't buy any more entries in this
                  competition — no matter how much she's willing to spend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
