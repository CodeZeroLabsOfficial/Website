import type { Metadata } from "next";
import { Cta } from "@/components/sections/Cta";
import { Hero } from "@/components/sections/Hero";
import { PositioningBand } from "@/components/sections/PositioningBand";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { meta } from "@/content/pages";

export const metadata: Metadata = {
  title: meta.home.title,
  description: meta.home.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningBand />
      <TrustStrip />
      <Cta />
    </>
  );
}
