import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { TermsContent } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service — Depesch",
  description:
    "Terms governing access to and use of the Depesch platform provided by Code Zero Labs Pty Ltd.",
};

export default function TermsOfServicePage() {
  return (
    <LegalArticle title="Terms of Service">
      <TermsContent />
    </LegalArticle>
  );
}
