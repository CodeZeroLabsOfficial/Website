import type { Metadata } from "next";
import { Cta } from "@/components/sections/Cta";
import { Features } from "@/components/sections/Features";
import { meta } from "@/content/pages";

export const metadata: Metadata = {
  title: meta.features.title,
  description: meta.features.description,
};

export default function FeaturesPage() {
  return (
    <div className="pt-16 md:pt-[72px]">
      <Features />
      <Cta />
    </div>
  );
}
