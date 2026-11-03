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

export type FeatureJump = {
  label: string;
  href: string;
};

export type FeatureCapability = {
  title: string;
  body: string;
  image: string;
};

export type FeatureChapter = {
  id: string;
  eyebrow: string;
  title: string;
  items: FeatureCapability[];
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
