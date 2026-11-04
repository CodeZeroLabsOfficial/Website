"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { DemoProvider } from "@/components/demo/DemoProvider";
import { DemoOverlay } from "@/components/demo/DemoOverlay";
import { Footer } from "@/components/chrome/Footer";
import { Nav } from "@/components/chrome/Nav";
import { PageTransition } from "@/components/chrome/PageTransition";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const bare = pathname === "/strategy-call";

  return (
    <DemoProvider>
      <div className="flex min-h-full flex-col bg-ink">
        {bare ? null : <Nav />}
        <PageTransition>
          {children}
          {bare ? null : <Footer />}
        </PageTransition>
        {bare ? null : <DemoOverlay />}
      </div>
    </DemoProvider>
  );
}
