export const LOGIN_URL = "https://portal.depesch.com";
export const SUPPORT_EMAIL = "support@depesch.com";

export const legalEntity = {
  name: "Depesch Limited",
  acn: "697 379 990",
  abn: "12 697 379 990",
  brand: "Depesch",
  updated: "2 November 2026",
} as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
] as const;

export const siteNav = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Support", href: "/support" },
] as const;

export function legalParty() {
  return `${legalEntity.name} ACN ${legalEntity.acn} (ABN ${legalEntity.abn})`;
}
