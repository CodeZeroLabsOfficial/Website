"use client";

import type { ReactNode } from "react";
import { DemoProvider } from "@/components/demo/DemoProvider";
import { DemoOverlay } from "@/components/demo/DemoOverlay";
import { Footer } from "@/components/chrome/Footer";
import { Nav } from "@/components/chrome/Nav";
import { PageTransition } from "@/components/chrome/PageTransition";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <DemoProvider>
      <div className="flex min-h-full flex-col bg-ink">
        <Nav />
        <PageTransition>
          {children}
          <Footer />
        </PageTransition>
        <DemoOverlay />
      </div>
    </DemoProvider>
  );
}
