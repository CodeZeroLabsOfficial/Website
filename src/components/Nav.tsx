"use client";

import { useEffect, useState } from "react";
import type { ProductContent } from "@/lib/content";
import { Logo } from "@/components/Logo";

export function Nav({ content }: { content: ProductContent }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-ink-3/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center">
          <Logo priority className="h-6 w-auto sm:h-8" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm font-medium text-mist transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="btn-accent rounded-full px-5 py-2.5 text-sm"
          >
            {content.hero.primaryCta}
          </a>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-ink-3/60 bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-display text-base font-medium text-mist transition-colors hover:bg-ink-2 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="btn-accent mt-2 rounded-full px-5 py-3 text-center text-sm"
          >
            {content.hero.primaryCta}
          </a>
        </div>
      </div>
    </header>
  );
}
