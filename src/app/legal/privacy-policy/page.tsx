import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Depesch",
  description:
    "How Code Zero Labs Pty Ltd, trading as Depesch, collects, uses and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalArticle title="Privacy Policy">
      <PrivacyContent />
    </LegalArticle>
  );
}
