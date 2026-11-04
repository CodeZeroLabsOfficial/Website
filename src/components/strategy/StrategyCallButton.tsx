"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { useStrategyCall } from "@/components/strategy/StrategyCallProvider";

/** Opens the strategy-call overlay. Styling comes from `Button`. */
export function StrategyCallButton({
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
  const { openStrategy } = useStrategyCall();
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={openStrategy}
    >
      {children}
    </Button>
  );
}
