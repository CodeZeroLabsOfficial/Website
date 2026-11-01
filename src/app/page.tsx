import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Depesch — Luxury travel, dispatched in a single tap",
  description:
    "A white-glove booking and fleet platform for executive car services: real-time dispatch, flight tracking, account billing, and a five-star ride experience.",
};

export default function Home() {
  return <ProductPage content={products.chauffeur} />;
}
