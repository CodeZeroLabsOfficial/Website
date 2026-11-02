import type { ReactNode } from "react";
import { legalEntity } from "@/lib/site";

export function LegalArticle({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-[720px] px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
      <h1 className="h-display text-[2.5rem] leading-[1.08] sm:text-h1">{title}</h1>
      <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-muted">
        Last updated
      </p>
      <p className="mt-2 text-base text-white">{legalEntity.updated}</p>
      <div className="mt-10">{children}</div>
    </article>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display mt-12 text-[1.35rem] font-semibold text-white">
      {children}
    </h2>
  );
}

export function LegalH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display mt-8 text-lg font-medium text-white">
      {children}
    </h3>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-base leading-[1.75] text-mist">{children}</p>
  );
}

export function LegalUl({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[1.75] text-mist">
      {children}
    </ul>
  );
}

export function LegalOl({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-[1.75] text-mist">
      {children}
    </ol>
  );
}

export function LegalA({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      className="underline decoration-ink-3 underline-offset-4 transition-colors hover:text-white"
      {...(external && !href.startsWith("mailto:")
        ? { target: "_blank", rel: "noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
