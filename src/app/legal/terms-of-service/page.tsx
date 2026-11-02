import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { TermsContent, TermsIntro } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service — Depesch",
  description:
    "Terms governing access to and use of the Depesch platform provided by Depesch Limited.",
};

export default function TermsOfServicePage() {
  return (
    <LegalArticle title="Terms of Service" intro={<TermsIntro />}>
      <TermsContent />
    </LegalArticle>
  );
}
