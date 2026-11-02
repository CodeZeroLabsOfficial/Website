import { copy } from "@/content/pages";

export function TrustStrip() {
  const items = [...copy.trust.items, ...copy.trust.items];
  return (
    <section className="border-y border-ink-3/50 bg-ink-2/30 py-10">
      <p className="mb-7 text-center text-eyebrow font-semibold uppercase tracking-[0.28em] text-muted">
        {copy.trust.label}
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track gap-14 px-7">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-xl font-semibold text-mist/55 transition-colors hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
