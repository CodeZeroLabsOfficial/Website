import type { ReactNode } from "react";

export function DeviceFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto aspect-[9/19] w-full max-w-[234px] overflow-hidden rounded-[2rem] border border-ink-3/60 bg-ink-2 p-3 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)] ${className}`.trim()}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-ink p-4">
        {children}
      </div>
    </div>
  );
}
