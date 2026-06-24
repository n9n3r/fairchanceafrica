import { useState } from "react";

const LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#principles", label: "Principles" },
  { href: "#competitions", label: "Competitions" },
  { href: "#revenue", label: "For businesses" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-hairline">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#1B2340" />
            <rect x="6" y="11" width="20" height="10" rx="2" fill="#FBF7EE" />
            <circle cx="6" cy="16" r="2" fill="#1B2340" />
            <circle cx="26" cy="16" r="2" fill="#1B2340" />
            <rect x="11" y="14" width="10" height="4" rx="1" fill="#E8702A" />
          </svg>
          FairChance <span className="text-marigold">Africa</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-ink-soft">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#join"
            className="px-4 py-2 rounded-full text-sm font-semibold text-ink border border-ink/15 hover:border-ink/40 transition-colors"
          >
            Log in
          </a>
          <a
            href="#join"
            className="px-4 py-2 rounded-full text-sm font-semibold bg-ink text-paper hover:bg-marigold-deep transition-colors"
          >
            Browse competitions
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-[2px] bg-ink transition-transform origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span className={`h-[2px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-[2px] bg-ink transition-transform origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-hairline bg-paper px-5 py-4">
          <ul className="flex flex-col gap-3 font-medium text-ink-soft">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1.5">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-4">
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-semibold border border-ink/15"
            >
              Log in
            </a>
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-semibold bg-ink text-paper"
            >
              Browse
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
