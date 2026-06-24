export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-12 border-t border-hairline">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-ink">
            FairChance <span className="text-marigold">Africa</span>
          </p>
          <p className="text-sm text-ink-soft mt-1">
            A new way to win. A fair way to compete.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-ink-soft">
          <a href="#how-it-works" className="hover:text-ink transition-colors">How it works</a>
          <a href="#principles" className="hover:text-ink transition-colors">Principles</a>
          <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
          <a href="#" className="hover:text-ink transition-colors">Terms</a>
          <a href="#" className="hover:text-ink transition-colors">Privacy</a>
        </div>
      </div>
      <p className="max-w-6xl mx-auto text-xs text-ink-soft/70 mt-8">
        © {new Date().getFullYear()} FairChance Africa. All draws are recorded and publicly auditable.
      </p>
    </footer>
  );
}
