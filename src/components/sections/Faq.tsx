"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SiteInset, SiteMeasure, siteSectionClass } from "@/components/ui/SiteInset";
import { copy } from "@/content/pages";

export function Faq() {
  const { faq } = copy;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={siteSectionClass}>
      <SiteInset>
        <SiteMeasure>
          <Reveal>
            <p className="eyebrow">{faq.eyebrow}</p>
            <h2 className="h-display mt-3 text-h2">{faq.title}</h2>
          </Reveal>
          <div className="mt-12 divide-y divide-ink-3/60 border-y border-ink-3/60">
            {faq.items.map((item, index) => {
              const expanded = open === index;
              const n = String(index + 1).padStart(2, "0");
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    className="flex w-full items-start gap-6 py-6 text-left md:gap-10 md:py-8"
                    onClick={() => setOpen(expanded ? -1 : index)}
                  >
                    <span className="w-8 shrink-0 font-display text-small text-muted">
                      {n}
                    </span>
                    <span className="flex-1 font-display text-lg font-medium text-white">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display text-xl leading-none text-white"
                    >
                      {expanded ? "×" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden" aria-hidden={!expanded}>
                      <p className="max-w-3xl pb-6 pl-14 pr-8 text-base leading-relaxed text-muted md:pl-[4.5rem]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SiteMeasure>
      </SiteInset>
    </section>
  );
}
