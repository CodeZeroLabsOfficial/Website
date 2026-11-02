import Link from "next/link";
import type { ProductContent } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { DemoButton } from "@/components/DemoButton";

export function CTA({ content }: { content: ProductContent }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="glow pointer-events-none absolute inset-x-0 bottom-0 h-[420px] rotate-180" />
      <div className="relative mx-auto max-w-[920px] px-5 md:px-8">
        <Reveal className="overflow-hidden rounded-3xl border border-ink-3/60 bg-ink-2/60 p-10 text-center md:p-16">
          <h2 className="h-display text-h1">{content.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lead leading-relaxed text-mist">
            {content.cta.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <DemoButton className="btn-accent rounded-full px-8 py-4 text-sm">
              Request a Demo
            </DemoButton>
            <Link
              href="/features"
              className="btn-ghost rounded-full px-8 py-4 text-sm"
            >
              Explore features
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
