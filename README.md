# FairChance Africa — Website

A responsive marketing site for FairChance Africa, built with **Vite + React + Tailwind CSS v4**.

## Design concept

The site's signature element is the **ticket-stub meter** — a literal row of
5 slots representing the platform's core rule: no participant can hold more
than 5 entries in a competition. It appears in the hero, the "how it works"
worked example (John & Sarah), the principles section, and every competition
card, so the rule is something you *see* repeatedly, not just read once.

Palette and type were chosen to read as a trustworthy public ledger rather
than a casino: warm paper background, deep indigo "ink," a single marigold
accent reserved for entries/CTAs, a serif display face (Fraunces) for
headlines, Inter for body copy, and JetBrains Mono for ticket numbers and
data — reinforcing that every entry is tracked and auditable.

## Run it

```bash
npm install
npm run dev      # starts a local dev server (prints the URL)
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Structure

```
src/
  components/
    Navbar.jsx        responsive nav with mobile menu
    Hero.jsx           thesis section built around the ticket meter
    Problem.jsx         the problem this platform solves
    Principles.jsx       fairness / transparency / trust / accessibility
    HowItWorks.jsx        6-step flow + John/Sarah worked example
    Competitions.jsx       sample "browse competitions" grid
    Revenue.jsx            the two revenue models
    Expansion.jsx           future categories (vehicles, education, etc.)
    FAQ.jsx                  accordion
    CTA.jsx                   closing call to action
    Footer.jsx
    TicketMeter.jsx            the reusable signature component
  index.css            Tailwind v4 theme tokens (@theme block)
```

## Notes

- Tailwind v4 is configured via the `@tailwindcss/vite` plugin and a CSS-first
  `@theme` block in `src/index.css` — there is no `tailwind.config.js`.
- Respects `prefers-reduced-motion`.
- All interactive elements have visible focus states and appropriate
  `aria-*` attributes.
