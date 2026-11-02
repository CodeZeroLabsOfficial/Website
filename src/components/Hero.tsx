"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ProductContent } from "@/lib/content";
import { Logo } from "@/components/Logo";

const EASE = [0.22, 1, 0.36, 1] as const;

function RotatingPhrase({ phrases }: { phrases: string[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const longest = phrases.reduce(
    (a, b) => (b.length > a.length ? b : a),
    phrases[0] ?? "",
  );

  useEffect(() => {
    if (phrases.length < 2 || reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 2500);
    return () => window.clearInterval(id);
  }, [phrases, reduceMotion]);

  if (phrases.length === 0) return null;

  if (reduceMotion || phrases.length === 1) {
    return <span>{phrases[0]}</span>;
  }

  return (
    <span className="relative inline-grid overflow-hidden" aria-live="polite">
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {longest}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero({ content }: { content: ProductContent }) {
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute inset-0"
      >
        <Image
          src={content.hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/70" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        <motion.div {...fade(0.15)} className="flex justify-center">
          <Logo priority className="h-7 w-auto sm:h-8" />
        </motion.div>
        <motion.p
          {...fade(0.28)}
          className="mt-14 font-display text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-white sm:mt-16 sm:text-sm"
        >
          {content.hero.eyebrow}
        </motion.p>
        <motion.h1
          {...fade(0.4)}
          className="mt-5 font-display text-[1.85rem] font-semibold uppercase leading-[1.1] tracking-[0.04em] text-white sm:text-[2.75rem] lg:text-[3.5rem]"
        >
          <span className="block">{content.hero.title}</span>
          <span className="mt-1 block">
            <RotatingPhrase phrases={content.hero.rotatingPhrases} />
          </span>
        </motion.h1>
      </div>

      <motion.a
        href="#positioning"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-mist/40 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-white"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
