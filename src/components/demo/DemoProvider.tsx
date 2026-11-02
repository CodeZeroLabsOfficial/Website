"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type DemoContextValue = {
  demoOpen: boolean;
  openDemo: () => void;
  closeDemo: () => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [demoOpen, setDemoOpen] = useState(false);
  const value = useMemo(
    () => ({
      demoOpen,
      openDemo: () => setDemoOpen(true),
      closeDemo: () => setDemoOpen(false),
    }),
    [demoOpen],
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}
