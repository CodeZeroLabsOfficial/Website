import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { PrivacyContent, PrivacyIntro } from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Depesch",
  description:
    "How Depesch Limited collects, uses and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalArticle title="Privacy Policy" intro={<PrivacyIntro />}>
      <PrivacyContent />
    </LegalArticle>
  );
}
