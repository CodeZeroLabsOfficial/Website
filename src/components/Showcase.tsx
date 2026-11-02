"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProductContent } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Showcase({ content }: { content: ProductContent }) {
  return (
    <section id="showcase" className="relative">
      <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src={content.showcase.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col items-center justify-center px-5 text-center">
          <Reveal>
            <p className="eyebrow">{content.showcase.eyebrow}</p>
            <h2 className="h-display mx-auto mt-5 max-w-3xl text-h1">
              {content.showcase.title}
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <button
              aria-label="Play video"
              className="group mt-10 grid h-20 w-20 place-items-center rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-white"
            >
              <span className="absolute h-20 w-20 animate-ping rounded-full border border-white/40" />
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-7 w-7 fill-white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <Reveal>
            <p className="max-w-lg text-lead leading-relaxed text-mist">
              {content.showcase.body}
            </p>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-3">
            {content.showcase.bullets.map((b, i) => (
              <Reveal key={b} delay={0.08 * (i + 1)}>
                <li className="h-full rounded-2xl border border-ink-3/60 bg-ink-2/40 p-5">
                  <span className="font-display text-3xl font-semibold text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-base text-white">{b}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
