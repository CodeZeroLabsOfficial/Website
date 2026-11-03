import type { ElementType, ReactNode } from "react";

/** Horizontal page padding only (nav, full-bleed overlays). */
export const insetClass = "inset";

export function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  const maxWidth = /\bmax-w-/.test(className) ? "" : "max-w-[1200px]";
  return (
    <Tag className={`container ${maxWidth} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
