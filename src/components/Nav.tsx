"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import { DemoButton } from "@/components/DemoButton";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";
import { LOGIN_URL, siteNav } from "@/lib/site";

const linkClass =
  "font-display text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-opacity duration-300 hover:opacity-60";

const NAV_DELAY = 280;

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      if (isHome) {
        const next = document.getElementById("positioning");
        setScrolled(
          next ? next.getBoundingClientRect().top <= 72 : window.scrollY > 24,
        );
      } else {
        setScrolled(window.scrollY > 8);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    lockScroll();
    return () => unlockScroll();
  }, [open]);

  const close = () => setOpen(false);
  const showLogo = !isHome || scrolled;
  const frosted = open || scrolled || !isHome;

  function go(href: string, e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      setOpen(false);
      return;
    }
    e.preventDefault();
    setOpen(false);
    if (href === pathname) return;
    window.setTimeout(() => router.push(href), open ? NAV_DELAY : 0);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        open
          ? "bg-ink"
          : frosted
            ? "bg-ink/85 backdrop-blur-md border-b border-ink-3/60"
            : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="relative flex h-16 w-full shrink-0 items-center justify-between px-5 md:h-[72px] md:px-8 lg:px-10">
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="group flex items-center gap-3"
        >
          <span className="flex h-10 w-8 flex-col items-start justify-center gap-1.5">
            <span
              className={`h-[1.5px] w-5 bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open
                  ? "translate-y-[3.5px] rotate-45"
                  : "group-hover:translate-x-1"
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open
                  ? "-translate-y-[3.5px] -rotate-45"
                  : "group-hover:-translate-x-1"
              }`}
            />
          </span>
          <span className="font-display text-[12px] font-medium uppercase tracking-[0.14em] text-white">
            Menu
          </span>
        </button>

        <Link
          href="/"
          onClick={(e) => go("/", e)}
          aria-hidden={!showLogo}
          tabIndex={showLogo ? 0 : -1}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
            showLogo ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Logo className="h-5 w-auto" />
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          <DemoButton className={`${linkClass} hidden sm:inline`}>
            Request a Demo
          </DemoButton>
          <a
            href={LOGIN_URL}
            className={`${linkClass} inline-flex items-center gap-2`}
          >
            Log in
            <span className="grid h-4 w-4 place-items-center rounded-[3px] border border-white/80">
              <svg
                viewBox="0 0 12 12"
                className="h-2.5 w-2.5"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2.5 6h7M6.5 3.5 9.5 6l-3 2.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </nav>

      <div
        inert={!open ? true : undefined}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-10 px-5 py-8 md:px-8 md:py-10 lg:px-10">
            <ul className="flex flex-col gap-3 md:gap-4">
              {siteNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => go(item.href, e)}
                    className="font-display text-[2rem] font-medium leading-none tracking-tight text-white transition-opacity hover:opacity-60 sm:text-[2.5rem]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col justify-between gap-6 border-t border-ink-3/60 pt-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  Need support?
                </p>
                <a
                  href="mailto:hello@depesch.com"
                  className="mt-1 block font-display text-lg text-white transition-opacity hover:opacity-60"
                >
                  hello@depesch.com
                </a>
              </div>
              <div className="flex gap-8">
                <a href="#" className={linkClass}>
                  Privacy Policy
                </a>
                <a href="#" className={linkClass}>
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
