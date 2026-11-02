import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PositioningBand } from "@/components/PositioningBand";
import { TrustStrip } from "@/components/TrustStrip";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/content";

const content = products.chauffeur;

export const metadata: Metadata = {
  title: "Depesch — Dispatch Management for Chauffeurs",
  description:
    "A white-glove booking and fleet platform for executive car services: real-time dispatch, flight tracking, account billing, and a five-star ride experience.",
};

export default function Home() {
  return (
    <>
      <Hero content={content} />
      <PositioningBand content={content} />
      <TrustStrip content={content} />
      <CTA content={content} />
      <Footer />
    </>
  );
}
