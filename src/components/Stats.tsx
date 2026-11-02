import type { ProductContent } from "@/lib/content";
import { RevealStagger, RevealItem } from "@/components/Reveal";

export function Stats({ content }: { content: ProductContent }) {
  return (
    <section id="stats" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <RevealStagger className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-3/60 bg-ink-3/40 lg:grid-cols-4">
          {content.stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="h-full bg-ink p-8 text-center md:p-10">
                <p className="font-display text-[2.75rem] font-semibold leading-none text-white">
                  {s.value}
                </p>
                <p className="mt-3 text-small uppercase tracking-wide text-muted">
                  {s.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
