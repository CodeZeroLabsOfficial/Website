import type { ProductContent } from "@/lib/content";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

export function Steps({ content }: { content: ProductContent }) {
  return (
    <section id="steps" className="bg-ink-2/30 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{content.steps.eyebrow}</p>
          <h2 className="h-display mt-4 text-h2">{content.steps.title}</h2>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {content.steps.items.map((s, i) => (
            <RevealItem key={s.title}>
              <div className="relative h-full rounded-2xl border border-ink-3/60 bg-ink p-7">
                <span className="font-display text-5xl font-semibold text-white/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-h4 font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-mist">{s.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
