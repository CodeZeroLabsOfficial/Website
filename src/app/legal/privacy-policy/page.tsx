import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/content/legal/privacyPolicy";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} — Depesch`,
  description: privacyPolicy.description,
};

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicy} />;
}
