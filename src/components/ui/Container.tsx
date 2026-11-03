import type { ElementType, ReactNode } from "react";

/** Horizontal page padding only (nav, full-bleed overlays). */
export const insetClass = "inset";

export function Container({
  as: Tag = "div",
  id,
  className = "",
  children,
}: {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const maxWidth = /\bmax-w-/.test(className) ? "" : "max-w-[1200px]";
  return (
    <Tag id={id} className={`container ${maxWidth} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
