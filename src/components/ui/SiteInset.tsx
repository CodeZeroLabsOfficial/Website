import type { ElementType, ReactNode } from "react";

export const siteInsetClass = "px-5 md:px-8 lg:px-10";

export function SiteInset({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`${siteInsetClass} ${className}`.trim()}>{children}</Tag>
  );
}

export function SiteMeasure({
  className = "max-w-[1200px]",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto w-full ${className}`}>{children}</div>;
}
