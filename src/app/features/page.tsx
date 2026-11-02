import type { Metadata } from "next";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/content";

const content = products.chauffeur;

export const metadata: Metadata = {
  title: "Features — Depesch",
  description:
    "Dispatch, flight tracking, account billing, and a five-star ride experience — everything operators and chauffeurs need in one platform.",
};

export default function FeaturesPage() {
  return (
    <>
      <div className="pt-16 md:pt-[72px]">
        <Features content={content} />
        <CTA content={content} />
      </div>
      <Footer />
    </>
  );
}
