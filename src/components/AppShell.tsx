"use client";

import type { ReactNode } from "react";
import { DemoProvider } from "@/components/DemoProvider";
import { DemoOverlay } from "@/components/DemoOverlay";
import { Nav } from "@/components/Nav";
import { PageTransition } from "@/components/PageTransition";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <DemoProvider>
      <div className="flex min-h-full flex-col bg-ink">
        <Nav />
        <PageTransition>{children}</PageTransition>
        <DemoOverlay />
      </div>
    </DemoProvider>
  );
}
