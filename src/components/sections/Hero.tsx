"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Logo } from "@/components/chrome/Logo";
import { copy } from "@/content/pages";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { hero } = copy;
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
          src={hero.image}
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
          <Logo priority className="h-6 w-auto" />
        </motion.div>
        <motion.p {...fade(0.28)} className="lockup-kicker mt-10 lg:mt-[55px]">
          {hero.eyebrow}
        </motion.p>
        <motion.h1 {...fade(0.4)} className="lockup-title mt-0">
          {hero.title}
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
