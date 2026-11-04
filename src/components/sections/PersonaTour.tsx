"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { copy } from "@/content/pages";
import type { Persona } from "@/content/types";

const pinClass =
  "lg:sticky lg:top-[72px] lg:flex lg:h-[calc(100vh-72px)] lg:flex-col lg:justify-start lg:pt-16 lg:self-start";
const frameClass =
  "flex min-h-[80vh] flex-col justify-start py-16 lg:min-h-[calc(100vh-72px)]";

type Item = Persona["items"][number];

function FramePreview({ item }: { item: Item }) {
  const title = item.body ? item.label : item.frame;
  const description = item.body ?? item.label;

  return (
    <div className="w-full">
      <div className="max-w-[584px] text-left">
        <h3 className="font-display text-[21px] font-semibold uppercase leading-8 text-white">
          {title}
        </h3>
        <p className="body mt-4 max-w-[584px] text-muted">{description}</p>
      </div>
      <div className="mt-10 flex justify-center">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            width={458}
            height={954}
            className="h-auto w-full max-w-[234px]"
          />
        ) : (
          <DeviceFrame>
            <div className="space-y-2">
              <div className="h-24 rounded-2xl bg-white/5" />
              <div className="h-12 rounded-2xl bg-white/5" />
              <div className="h-12 rounded-2xl bg-white/[0.04]" />
            </div>
          </DeviceFrame>
        )}
      </div>
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
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
      <div
        className={`${pinClass} ${pinEnd ? "lg:col-start-2 lg:row-start-1" : ""}`}
      >
        <Reveal>
          <SectionHeader
            eyebrow={persona.eyebrow}
            title={persona.title}
            pulse
          />
          <p className="body mt-4 leading-6 text-muted">{persona.body}</p>
        </Reveal>
        <RevealStagger className="mt-6 flex w-max max-w-full flex-col gap-3" stagger={0.1}>
          {persona.items.map((item, index) => (
            <RevealItem key={item.label} open className="w-full overflow-hidden">
              <div
                className="chip"
                aria-current={active === index ? "true" : undefined}
              >
                <Icon name={item.icon} className="h-4 w-4 shrink-0" />
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
    <section id="positioning" className="stack pt-24 pb-[70px] md:pt-32">
      {copy.personas.map((persona, index) => (
        <Container key={persona.eyebrow}>
          <PersonaBand
            persona={persona}
            pin={index % 2 === 1 ? "end" : "start"}
          />
        </Container>
      ))}
    </section>
  );
}
