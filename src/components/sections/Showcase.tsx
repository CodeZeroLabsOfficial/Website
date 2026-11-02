"use client";

import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SiteInset, SiteMeasure } from "@/components/ui/SiteInset";
import { copy } from "@/content/pages";

export function Showcase() {
  const { showcase } = copy;

  return (
    <section id="showcase">
      <div className="relative h-[78vh] min-h-[520px] overflow-hidden">
        <Image
          src={showcase.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col items-center justify-center px-5 text-center">
          <Reveal>
            <p className="eyebrow">{showcase.eyebrow}</p>
            <h2 className="h-display mx-auto mt-5 max-w-3xl text-h2">
              {showcase.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <button
              type="button"
              aria-label={showcase.playLabel}
              className="play-pulse group mt-10 grid h-20 w-20 place-items-center rounded-full border border-white/30 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
            >
              <Icon
                name="play"
                className="ml-0.5 h-7 w-7 fill-white stroke-none"
              />
            </button>
          </Reveal>
        </div>
      </div>
      <SiteInset className="py-20">
        <SiteMeasure>
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
            <Reveal>
              <p className="max-w-lg text-lead leading-relaxed text-mist">
                {showcase.body}
              </p>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-3">
              {showcase.bullets.map((bullet, index) => (
                <Reveal key={bullet} delay={0.08 * (index + 1)}>
                  <li className="h-full rounded-2xl border border-ink-3/60 bg-ink-2/40 p-5">
                    <span className="font-display text-3xl font-bold text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-base text-white">{bullet}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </SiteMeasure>
      </SiteInset>
    </section>
  );
}
