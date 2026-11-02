"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { copy } from "@/content/pages";

const INTERVAL_MS = 5000;

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const quotes = copy.testimonials;
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const resumeAt = useRef(0);
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);

  function scrollToIndex(next: number, behavior: ScrollBehavior = "smooth") {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: next * el.clientWidth, behavior });
  }

  function pauseAutoplay() {
    resumeAt.current = Date.now() + INTERVAL_MS;
  }

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.45);
      },
      { threshold: [0, 0.45, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !inView || quotes.length < 2) return;
    let id = 0;
    const advance = () => {
      const el = scrollerRef.current;
      if (!el?.clientWidth) return;
      const current = Math.round(el.scrollLeft / el.clientWidth);
      el.scrollTo({
        left: ((current + 1) % quotes.length) * el.clientWidth,
        behavior: "smooth",
      });
    };
    const schedule = (delay = INTERVAL_MS) => {
      id = window.setTimeout(() => {
        const wait = resumeAt.current - Date.now();
        if (wait > 0) {
          schedule(wait);
          return;
        }
        advance();
        schedule();
      }, delay);
    };
    schedule();
    return () => window.clearTimeout(id);
  }, [reduceMotion, inView, quotes.length]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative"
      aria-label="Testimonials"
      aria-roledescription="carousel"
    >
      <div
        ref={scrollerRef}
        onScroll={() => {
          const el = scrollerRef.current;
          if (!el?.clientWidth) return;
          setIndex(Math.round(el.scrollLeft / el.clientWidth));
        }}
        onPointerDown={pauseAutoplay}
        onWheel={pauseAutoplay}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {quotes.map((item, i) => (
          <article
            key={item.author}
            aria-label={`${i + 1} of ${quotes.length}`}
            aria-roledescription="slide"
            className="flex h-screen w-full min-w-full shrink-0 snap-start flex-col items-center justify-center px-5 text-center"
          >
            <span className="font-display text-7xl leading-none text-white/20">
              &ldquo;
            </span>
            <blockquote className="font-display -mt-6 max-w-3xl text-h4 font-medium leading-relaxed text-white">
              {item.quote}
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white font-display font-bold text-accent-contrast">
                {item.author.charAt(0)}
              </span>
              <div className="text-left">
                <p className="font-display font-semibold text-white">
                  {item.author}
                </p>
                <p className="text-small text-muted">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-2">
          {quotes.map((item, i) => (
            <button
              key={item.author}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index || undefined}
              onClick={() => {
                pauseAutoplay();
                scrollToIndex(i, reduceMotion ? "auto" : "smooth");
              }}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                i === index
                  ? "w-4 bg-white"
                  : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
