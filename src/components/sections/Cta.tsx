import { DemoButton } from "@/components/demo/DemoButton";
import { Reveal } from "@/components/ui/Reveal";
import { SiteInset, SiteMeasure, siteSectionClass } from "@/components/ui/SiteInset";
import { copy } from "@/content/pages";

function ArrowChase() {
  return (
    <span className="relative inline-block h-3 w-3 overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 12 12"
        className="absolute inset-0 h-3 w-3 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-full"
        fill="none"
      >
        <path
          d="M2.5 6h7M6.5 3.5 9.5 6l-3 2.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        viewBox="0 0 12 12"
        className="absolute inset-0 h-3 w-3 -translate-x-full transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0"
        fill="none"
      >
        <path
          d="M2.5 6h7M6.5 3.5 9.5 6l-3 2.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Cta() {
  return (
    <section className={`relative overflow-hidden ${siteSectionClass}`}>
      <div className="glow pointer-events-none absolute inset-x-0 bottom-0 h-[420px] rotate-180" />
      <SiteInset className="relative">
        <SiteMeasure className="max-w-[920px]">
          <Reveal className="overflow-hidden rounded-3xl border border-ink-3/60 bg-ink-2/60 p-10 text-center md:p-16">
            <h2 className="h-display text-h2">{copy.cta.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lead leading-relaxed text-mist">
              {copy.cta.subtitle}
            </p>
            <div className="mt-9 flex justify-center">
              <DemoButton className="group inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-5 font-display text-[13px] font-medium uppercase tracking-[0.04em] text-accent-contrast transition-colors duration-300 hover:bg-white">
                Request a Demo
                <ArrowChase />
              </DemoButton>
            </div>
          </Reveal>
        </SiteMeasure>
      </SiteInset>
    </section>
  );
}
