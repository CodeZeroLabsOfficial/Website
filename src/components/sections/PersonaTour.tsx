"use client";

import { useEffect, useRef, useState } from "react";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { SiteInset, SiteMeasure } from "@/components/ui/SiteInset";
import { copy } from "@/content/pages";

const pinClass =
  "lg:sticky lg:top-[72px] lg:flex lg:h-[calc(100vh-72px)] lg:flex-col lg:justify-center lg:self-start";
const frameClass =
  "flex min-h-[80vh] flex-col items-center justify-center py-16 lg:min-h-[calc(100vh-72px)]";

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

function PersonaBand({
  persona,
  pin = "start",
}: {
  persona: Persona;
  pin?: "start" | "end";
}) {
  const [active, setActive] = useState(0);
  const framesRef = useRef<HTMLDivElement>(null);
  const pinEnd = pin === "end";

  useEffect(() => {
    const root = framesRef.current;
    if (!root) return;
    const nodes = [...root.querySelectorAll<HTMLElement>("[data-frame]")];
    const ratios = new Map<number, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.frame);
          if (Number.isNaN(index)) continue;
          ratios.set(index, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let next = 0;
        let best = 0;
        ratios.forEach((ratio, index) => {
          if (ratio > best) {
            best = ratio;
            next = index;
          }
        });
        if (best > 0) setActive(next);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={
        pinEnd
          ? "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] lg:gap-x-16"
          : "lg:grid lg:grid-cols-[minmax(0,36rem)_minmax(0,1fr)] lg:gap-x-16"
      }
    >
      <div
        className={`${pinClass} ${pinEnd ? "lg:col-start-2 lg:row-start-1" : ""}`}
      >
        <Reveal>
          <p className="flex items-center gap-2 font-display text-base font-semibold uppercase tracking-[0.12em] text-muted">
            <span className="pulse-dot" aria-hidden="true" />
            {persona.eyebrow}
          </p>
          <h2 className="h-display mt-4 whitespace-pre-line text-h2">
            {persona.title}
          </h2>
          <p className="mt-4 max-w-[350px] text-base leading-6 text-muted">
            {persona.body}
          </p>
        </Reveal>
        <RevealStagger className="mt-6 flex flex-col gap-3" stagger={0.1}>
          {persona.items.map((item, index) => (
            <RevealItem key={item.label} open className="overflow-hidden">
              <div
                className="chip"
                aria-current={active === index ? "true" : undefined}
              >
                <Icon name={item.icon} className="h-6 w-6 shrink-0" />
                {item.label}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
      <div
        ref={framesRef}
        className={pinEnd ? "lg:col-start-1 lg:row-start-1" : ""}
      >
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
      {copy.personas.map((persona, index) => (
        <SiteInset key={persona.eyebrow} className="py-16 lg:py-0">
          <SiteMeasure>
            <PersonaBand
              persona={persona}
              pin={index % 2 === 1 ? "end" : "start"}
            />
          </SiteMeasure>
        </SiteInset>
      ))}
    </section>
  );
}
