export type LegalInline =
  | string
  | { href: string; label: string }
  | { strong: string };

export type LegalListItem =
  | string
  | { text: LegalInline[]; items?: LegalListItem[] };

export type LegalBlock =
  | { type: "p"; text: LegalInline[] }
  | { type: "h3"; text: string }
  | { type: "ul"; items: LegalListItem[] }
  | { type: "ol"; items: LegalListItem[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  description: string;
  lead: string;
  preface?: string[];
  sections: LegalSection[];
};
