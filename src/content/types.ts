import type { IconName } from "@/components/ui/Icon";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FeatureItem = {
  title: string;
  body: string;
  icon: IconName;
};

export type PersonaItem = {
  label: string;
  frame: string;
  icon: IconName;
};

export type Persona = {
  eyebrow: string;
  title: string;
  body: string;
  items: PersonaItem[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type SectionCopy = {
  eyebrow?: string;
  title: string;
  body?: string;
};
