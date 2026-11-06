import type { ElementType, ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  body,
  as: TitleTag = "h2",
  align = "start",
  pulse,
  className = "",
  bodyClassName,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  as?: ElementType;
  align?: "start" | "center";
  pulse?: boolean;
  className?: string;
  bodyClassName?: string;
}) {
  const alignClass = align === "center" ? "text-center" : "";
  const bodyMeasure =
    bodyClassName ?? (align === "center" ? "mx-auto max-w-xl" : "");
  return (
    <div className={`${alignClass} ${className}`.trim()}>
      {eyebrow ? (
        <p
          className={
            pulse ? "eyebrow eyebrow-pulse flex items-center gap-2" : "eyebrow"
          }
        >
          {pulse ? <span className="pulse-dot" aria-hidden="true" /> : null}
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className={`heading ${eyebrow ? "mt-4" : ""}`.trim()}>
        {title.includes("\n")
          ? title.split("\n").map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))
          : title}
      </TitleTag>
      {body ? (
        <p
          className={`lead ${eyebrow || title ? "mt-5" : ""} ${bodyMeasure}`.trim()}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
