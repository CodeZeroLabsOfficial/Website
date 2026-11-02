import type { Metadata } from "next";
import { SupportContent } from "@/components/sections/SupportContent";
import { meta } from "@/content/pages";

export const metadata: Metadata = {
  title: meta.support.title,
  description: meta.support.description,
};

export default function SupportPage() {
  return <SupportContent />;
}
