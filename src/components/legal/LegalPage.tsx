import Link from "next/link";
import type { ReactNode } from "react";
import { SiteInset, SiteMeasure } from "@/components/ui/SiteInset";
import { legalEntity } from "@/content/site";
import type {
  LegalBlock,
  LegalDocument,
  LegalInline,
  LegalListItem,
} from "@/content/legal/types";

const bodyClass = "mt-4 text-[20px] leading-[26px] tracking-[-0.03em] text-mist";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <SiteMeasure className="max-w-[1320px]">
      <SiteInset as="article" className="w-full pb-[7.5rem] pt-[150px] md:pt-[180px] xl:pt-[200px]">
        <h1 className="font-display text-[2.5rem] font-medium uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl lg:whitespace-nowrap lg:text-[80px] lg:leading-[80px]">
          {document.title}
        </h1>
        <div className="mt-16 grid gap-10 md:grid-cols-[300px_minmax(0,800px)] md:gap-x-3">
          <aside>
            <p className="text-xs text-muted">Last updated:</p>
            <p className="mt-1 text-xs text-white">{legalEntity.updated}</p>
          </aside>
          <div>
            <p className="font-display text-xl font-medium leading-[1.2] tracking-[-0.02em] text-white sm:text-[32px] sm:leading-[38.4px] sm:tracking-[-0.02em]">
              {document.lead}
            </p>
            {document.preface?.map((paragraph) => (
              <p key={paragraph} className={bodyClass}>
                {paragraph}
              </p>
            ))}
            <div className="mt-16">
              {document.sections.map((section) => (
                <section key={section.title} className="mt-16 first:mt-0">
                  <h2 className="font-display text-[1.75rem] font-medium leading-[1.3] tracking-[-0.02em] text-white">
                    {section.title}
                  </h2>
                  {section.blocks.map((block, index) => (
                    <Block key={index} block={block} />
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </SiteInset>
    </SiteMeasure>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "h3") {
    return (
      <h3 className="font-display mt-8 text-[1.25rem] font-medium tracking-[-0.02em] text-white">
        {block.text}
      </h3>
    );
  }
  if (block.type === "p") {
    return <p className={bodyClass}>{renderInline(block.text)}</p>;
  }
  const Tag = block.type;
  return (
    <Tag
      className={`${bodyClass} space-y-2 pl-5 ${
        block.type === "ol" ? "list-decimal" : "list-disc"
      }`}
    >
      {block.items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </Tag>
  );
}

function ListItem({ item }: { item: LegalListItem }) {
  if (typeof item === "string") {
    return <li>{item}</li>;
  }
  return (
    <li>
      {renderInline(item.text)}
      {item.items ? (
        <ul className="mt-2 list-disc space-y-2 pl-5">
          {item.items.map((child, index) => (
            <ListItem key={index} item={child} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function renderInline(parts: LegalInline[]): ReactNode {
  return parts.map((part, index) => {
    if (typeof part === "string") return <span key={index}>{part}</span>;
    if ("strong" in part) {
      return (
        <strong key={index} className="font-medium text-white">
          {part.strong}
        </strong>
      );
    }
    if (part.href.startsWith("/") && !part.href.startsWith("//")) {
      return (
        <Link
          key={index}
          href={part.href}
          className="underline decoration-ink-3 underline-offset-4 transition-colors hover:text-white"
        >
          {part.label}
        </Link>
      );
    }
    const external =
      part.href.startsWith("http") || part.href.startsWith("mailto:");
    return (
      <a
        key={index}
        href={part.href}
        className="underline decoration-ink-3 underline-offset-4 transition-colors hover:text-white"
        {...(external && !part.href.startsWith("mailto:")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {part.label}
      </a>
    );
  });
}
