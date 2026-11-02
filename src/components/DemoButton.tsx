"use client";

import type { ReactNode } from "react";
import { useDemo } from "@/components/DemoProvider";

export function DemoButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { openDemo } = useDemo();
  return (
    <button type="button" onClick={openDemo} className={className}>
      {children}
    </button>
  );
}
