"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { useDemo } from "@/components/demo/DemoProvider";

/** Opens the request-a-demo overlay. Styling comes from `Button`. */
export function DemoButton({
  variant = "accent",
  size = "md",
  className = "",
  children,
}: {
  variant?: "accent" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}) {
  const { openDemo } = useDemo();
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={openDemo}
    >
      {children}
    </Button>
  );
}
