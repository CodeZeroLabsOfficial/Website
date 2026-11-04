"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { copy } from "@/content/pages";

const INTERVAL_MS = 5000;

export function DispatchPro() {
  const reduceMotion = useReducedMotion();
  const { title, slides } = copy.dispatchPro;
  const sectionRef = useRef<HTMLElement>(null);
  const interacted = useRef(false);
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);

  function goTo(next: number) {
    interacted.current = true;
    setIndex(next);
  }

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible =
          entry.isIntersecting && entry.intersectionRatio >= 0.45;
        setInView(visible);
        if (!visible) interacted.current = false;
      },
      { threshold: [0, 0.45, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !inView || interacted.current || slides.length < 2) {
      return;
    }
    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [reduceMotion, inView, slides.length, index]);

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = (i + delta + slides.length) % slides.length;
    goTo(next);
    const tabs = sectionRef.current?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]',
    );
    tabs?.[next]?.focus();
  }

  return (
    <section
      ref={sectionRef}
      id="dispatch-pro"
      className="relative pt-16 md:pt-[72px] xl:h-svh xl:pt-[170px]"
      aria-label={title}
      aria-roledescription="carousel"
    >
      <Container>
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <SectionHeader title={title} align="center" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-[781/436] w-full max-w-[781px] overflow-hidden rounded-2xl border border-ink-3/60 bg-ink-2">
            {slides.map((slide, i) => (
              <div
                key={slide.label}
                aria-hidden={i !== index}
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                  i === index ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={i === index ? slide.imageAlt : ""}
                  fill
                  sizes="(max-width: 781px) 100vw, 781px"
                  className="object-contain"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div
          role="tablist"
          aria-label="Dispatch features"
          className="mt-12 grid grid-cols-3 gap-3 pb-8 md:mt-[82px] md:gap-[120px] md:pb-10"
        >
          {slides.map((slide, i) => {
            const active = i === index;
            return (
              <button
                key={slide.label}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={slide.label}
                tabIndex={active ? 0 : -1}
                onClick={() => goTo(i)}
                onKeyDown={(event) => onTabKeyDown(event, i)}
                className="group flex w-full cursor-pointer flex-col gap-3 py-1 text-center md:gap-4"
              >
                <span className="relative block h-0.5 w-full overflow-hidden rounded-full bg-ink-3 transition-colors group-hover:bg-ink-3/80">
                  <span
                    key={active ? `fill-${index}` : `idle-${i}`}
                    className={`absolute inset-y-0 left-0 w-full origin-left bg-white ${
                      active && reduceMotion ? "scale-x-100" : ""
                    } ${!active ? "scale-x-0" : ""}`}
                    style={
                      active && !reduceMotion && !interacted.current
                        ? {
                            animation: `progress-fill ${INTERVAL_MS}ms linear forwards`,
                          }
                        : active
                          ? { transform: "scaleX(1)" }
                          : undefined
                    }
                  />
                </span>
                <span
                  className={`font-display text-xs font-semibold uppercase tracking-[0.08em] transition-colors md:text-[21px] md:leading-8 md:tracking-[0.05em] ${
                    active ? "text-white" : "text-muted group-hover:text-mist"
                  }`}
                >
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
