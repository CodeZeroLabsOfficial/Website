import type { Metadata } from "next";
import { SupportContent } from "@/components/sections/SupportContent";
import { meta } from "@/content/pages";

export const metadata: Metadata = {
  title: meta.support.title,
  description: meta.support.description,
};

export default function SupportPage() {
  return (
    <div className="pt-16 md:pt-[72px]">
      <SupportContent />
    </div>
  );
}
