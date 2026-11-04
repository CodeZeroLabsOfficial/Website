"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type StrategyCallContextValue = {
  strategyOpen: boolean;
  openStrategy: () => void;
  closeStrategy: () => void;
};

const StrategyCallContext = createContext<StrategyCallContextValue | null>(null);

export function StrategyCallProvider({ children }: { children: ReactNode }) {
  const [strategyOpen, setStrategyOpen] = useState(false);
  const value = useMemo(
    () => ({
      strategyOpen,
      openStrategy: () => setStrategyOpen(true),
      closeStrategy: () => setStrategyOpen(false),
    }),
    [strategyOpen],
  );

  return (
    <StrategyCallContext.Provider value={value}>
      {children}
    </StrategyCallContext.Provider>
  );
}

export function useStrategyCall() {
  const ctx = useContext(StrategyCallContext);
  if (!ctx) {
    throw new Error("useStrategyCall must be used within StrategyCallProvider");
  }
  return ctx;
}
