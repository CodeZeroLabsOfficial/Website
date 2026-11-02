"use client";

import { useEffect, useRef, useState } from "react";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { SiteInset, SiteMeasure } from "@/components/ui/SiteInset";
import { copy } from "@/content/pages";

const pinClass =
  "lg:sticky lg:top-[72px] lg:flex lg:h-[calc(100vh-72px)] lg:flex-col lg:justify-center";
const frameClass =
  "flex min-h-[calc(100vh-72px)] scroll-mt-[72px] flex-col items-center justify-center py-16";

type Persona = (typeof copy.personas)[number];
type Item = Persona["items"][number];

function FramePreview({ item }: { item: Item }) {
  return (
    <div>
      <DeviceFrame>
        <p className="font-display text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
          {item.frame}
        </p>
        <p className="mt-3 font-display text-lg font-medium leading-snug text-white">
          {item.label}
        </p>
        <div className="mt-6 space-y-2">
          <div className="h-24 rounded-2xl bg-white/5" />
          <div className="h-12 rounded-2xl bg-white/5" />
          <div className="h-12 rounded-2xl bg-white/[0.04]" />
        </div>
      </DeviceFrame>
      <p className="mt-6 text-center">
        <span className="font-display text-lg font-medium text-white">
          {item.frame}
        </span>
        <span className="mt-1 block text-small text-muted">{item.label}</span>
      </p>
    </div>
  );
}

function PersonaBand({ persona }: { persona: Persona }) {
  const [active, setActive] = useState(0);
  const framesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = framesRef.current;
    if (!root) return;
    const nodes = [...root.querySelectorAll<HTMLElement>("[data-frame]")];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit) return;
        const index = Number((hit.target as HTMLElement).dataset.frame);
        if (!Number.isNaN(index)) setActive(index);
      },
      { threshold: 0.45 },
    );
    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  const onChip = (index: number) => {
    setActive(index);
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    framesRef.current
      ?.querySelector<HTMLElement>(`[data-frame="${index}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-10">
      <div className={pinClass}>
        <Reveal>
          <p className="flex items-center gap-2 font-display text-base font-medium text-muted">
            <span className="pulse-dot" aria-hidden="true" />
            {persona.eyebrow}
          </p>
          <h2 className="h-display mt-4 max-w-md text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] lg:leading-[1.05]">
            {persona.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            {persona.body}
          </p>
        </Reveal>
        <RevealStagger className="mt-8 flex flex-col gap-3" stagger={0.1}>
          {persona.items.map((item, index) => (
            <RevealItem key={item.label} open className="overflow-hidden">
              <button
                type="button"
                className="chip"
                aria-current={active === index ? "true" : undefined}
                onClick={() => onChip(index)}
              >
                <Icon name={item.icon} className="h-6 w-6 shrink-0 text-muted" />
                {item.label}
              </button>
            </RevealItem>
          ))}
        </RevealStagger>
        <div className="mt-10 lg:hidden">
          <FramePreview item={persona.items[active]} />
        </div>
      </div>
      <div ref={framesRef} className="hidden lg:block">
        {persona.items.map((item, index) => (
          <div key={item.label} data-frame={index} className={frameClass}>
            <FramePreview item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PersonaTour() {
  return (
    <section id="positioning">
      {copy.personas.map((persona) => (
        <SiteInset key={persona.eyebrow} className="py-16 lg:py-0">
          <SiteMeasure>
            <PersonaBand persona={persona} />
          </SiteMeasure>
        </SiteInset>
      ))}
    </section>
  );
}
