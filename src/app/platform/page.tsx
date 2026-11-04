import type { Metadata } from "next";
import { Cta } from "@/components/sections/Cta";
import { DispatchPro } from "@/components/sections/DispatchPro";
import { PersonaTour } from "@/components/sections/PersonaTour";
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
      <PersonaTour />
      <DispatchPro />
      <Cta />
    </div>
  );
}
