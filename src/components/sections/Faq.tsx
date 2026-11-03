"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { copy } from "@/content/pages";

export function Faq() {
  const { faq } = copy;
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" className="section">
      <Container>
        <Reveal>
          <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />
        </Reveal>
        <div className="mt-12 divide-y divide-ink-3/60 border-y border-ink-3/60">
          {faq.items.map((item, index) => {
            const expanded = open === index;
            const n = String(index + 1).padStart(2, "0");
            return (
              <div key={item.question}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  className="flex w-full items-start gap-6 py-6 text-left md:gap-10 md:py-8"
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  <span className="caption w-8 shrink-0 font-display">
                    {n}
                  </span>
                  <span className="flex-1 font-display text-base font-medium text-white">
                    {item.question}
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
                    <p className="body max-w-3xl pb-6 pl-14 pr-8 text-muted md:pl-[4.5rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
