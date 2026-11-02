import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsOfService } from "@/content/legal/termsOfService";

export const metadata: Metadata = {
  title: `${termsOfService.title} — Depesch`,
  description: termsOfService.description,
};

export default function TermsOfServicePage() {
  return <LegalPage document={termsOfService} />;
}
