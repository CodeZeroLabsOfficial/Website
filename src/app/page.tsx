import type { Metadata } from "next";
import { Cta } from "@/components/sections/Cta";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Operators } from "@/components/sections/Operators";
import { Showcase } from "@/components/sections/Showcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { meta } from "@/content/pages";

export const metadata: Metadata = {
  title: meta.home.title,
  description: meta.home.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Operators />
      <Showcase />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
