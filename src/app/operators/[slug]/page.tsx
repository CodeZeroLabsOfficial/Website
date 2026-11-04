import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cta } from "@/components/sections/Cta";
import { OperatorDetail } from "@/components/sections/OperatorDetail";
import { copy, meta } from "@/content/pages";
import type { OperatorSegment } from "@/content/types";

type OperatorSlug = OperatorSegment["slug"];

const slugs = copy.operators.items.map((item) => item.slug);

function getOperator(slug: string): OperatorSegment | undefined {
  return copy.operators.items.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!slugs.includes(slug as OperatorSlug)) {
    return {};
  }
  const page = meta.operators[slug as OperatorSlug];
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function OperatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const operator = getOperator(slug);
  if (!operator) {
    notFound();
  }

  return (
    <div className="pt-16 md:pt-[72px]">
      <OperatorDetail operator={operator} />
      <Cta />
    </div>
  );
}
