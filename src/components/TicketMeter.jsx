/**
 * TicketMeter — the site's signature element.
 * A literal row of 5 ticket-stub slots. This isn't decorative;
 * it's the actual mechanic (max 5 entries per person) made visible.
 *
 * filled: how many of the 5 slots are used (0-5)
 * size: 'sm' | 'md' | 'lg'
 * highlightLast: pulses the most-recently-filled stub in marigold
 */
export default function TicketMeter({
  filled = 0,
  size = "md",
  highlightLast = false,
  label,
  animate = false,
  className = "",
}) {
  const dims = {
    sm: { w: "w-6", h: "h-4", gap: "gap-1" },
    md: { w: "w-9", h: "h-6", gap: "gap-1.5" },
    lg: { w: "w-14", h: "h-9", gap: "gap-2" },
  }[size];

  const clamped = Math.max(0, Math.min(5, filled));

  return (
    <div className={`inline-flex flex-col gap-2 ${className}`}>
      <div className={`flex ${dims.gap}`} role="img" aria-label={`${clamped} of 5 entries used`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const isFilled = i < clamped;
          const isLastFilled = highlightLast && i === clamped - 1;
          return (
            <div
              key={i}
              className={[
                dims.w,
                dims.h,
                "rounded-[3px] border-2 relative shrink-0",
                "transition-colors duration-300",
                isFilled
                  ? isLastFilled
                    ? "bg-marigold border-marigold-deep"
                    : "bg-ink border-ink"
                  : "bg-transparent border-ink/25",
                animate ? "opacity-0 animate-fade-up" : "",
              ].join(" ")}
              style={animate ? { animationDelay: `${i * 90}ms` } : undefined}
            >
              {/* ticket-stub notch */}
              <span
                className={[
                  "absolute left-1/2 -translate-x-1/2 -top-[3px] w-1.5 h-1.5 rounded-full",
                  isFilled ? "bg-paper" : "bg-paper",
                  "border",
                  isFilled ? (isLastFilled ? "border-marigold-deep" : "border-ink") : "border-ink/25",
                ].join(" ")}
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>
      {label ? (
        <span className="font-mono text-xs tracking-wide text-ink-soft uppercase">
          {label}
        </span>
      ) : null}
    </div>
  );
}
