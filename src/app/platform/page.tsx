import type { Metadata } from "next";
import { Cta } from "@/components/sections/Cta";
import { Platform } from "@/components/sections/Platform";
import { meta } from "@/content/pages";

export const metadata: Metadata = {
  title: meta.platform.title,
  description: meta.platform.description,
};

export default function PlatformPage() {
  return (
    <div className="pt-16 md:pt-[72px]">
      <Platform />
      <Cta />
    </div>
  );
}
