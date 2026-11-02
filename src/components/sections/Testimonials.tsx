"use client";

import { useReducedMotion } from "framer-motion";
import { copy } from "@/content/pages";

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const quotes = copy.testimonials;
  const track = reduceMotion ? quotes : [...quotes, ...quotes];

  return (
    <section
      id="testimonials"
      className="overflow-hidden"
      aria-label="Testimonials"
    >
      <div
        className={
          reduceMotion ? "flex" : "marquee-track marquee-slow"
        }
      >
        {track.map((item, index) => (
          <article
            key={`${item.author}-${index}`}
            aria-hidden={index >= quotes.length || undefined}
            className="flex h-screen w-screen shrink-0 flex-col items-center justify-center px-5 text-center"
          >
            <span className="font-display text-7xl leading-none text-white/20">
              &ldquo;
            </span>
            <blockquote className="font-display -mt-6 max-w-3xl text-h4 font-medium leading-10 text-white">
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
    </section>
  );
}
