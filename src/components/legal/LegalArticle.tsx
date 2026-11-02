import type { ReactNode } from "react";
import { legalEntity } from "@/lib/site";

export function LegalArticle({
  title,
  intro,
  children,
}: {
  title: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-[1200px] px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40 lg:px-12">
      <h1 className="font-display text-[2.75rem] font-semibold uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-[5.5rem]">
        {title}
      </h1>
      <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-[160px_minmax(0,1fr)] lg:grid-cols-[200px_minmax(0,760px)] lg:gap-16">
        <aside className="md:pt-1">
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
            Last updated
          </p>
          <p className="mt-2 text-sm text-white">{legalEntity.updated}</p>
        </aside>
        <div>
          <div className="flex flex-col gap-6">{intro}</div>
          <div className="mt-12">{children}</div>
        </div>
      </div>
    </article>
  );
}

export function LegalLead({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-[1.35rem] font-medium leading-[1.35] text-white sm:text-[1.65rem]">
      {children}
    </p>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display mt-12 text-[1.25rem] font-medium text-white first:mt-0">
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
