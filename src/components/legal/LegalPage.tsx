import Link from "next/link";
import type { ReactNode } from "react";
import { SiteInset } from "@/components/ui/SiteInset";
import { legalEntity } from "@/content/site";
import type {
  LegalBlock,
  LegalDocument,
  LegalInline,
  LegalListItem,
} from "@/content/legal/types";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <SiteInset
      as="article"
      className="w-full pb-24 pt-32 md:pb-32 md:pt-40"
    >
      <h1 className="font-display text-[2.25rem] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-[4rem]">
        {document.title}
      </h1>
      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[8.5rem_minmax(0,40rem)] lg:gap-16">
        <aside className="md:pt-1">
          <p className="text-sm text-muted">Last updated</p>
          <p className="mt-1 text-sm text-white">{legalEntity.updated}</p>
        </aside>
        <div>
          <p className="font-display text-[1.25rem] font-medium leading-snug text-white sm:text-[1.4rem]">
            {document.lead}
          </p>
          {document.preface?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-base leading-[1.75] text-mist"
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-10">
            {document.sections.map((section) => (
              <section key={section.title} className="mt-10 first:mt-0">
                <h2 className="font-display text-xl font-medium text-white">
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
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "h3") {
    return (
      <h3 className="font-display mt-8 text-lg font-medium text-white">
        {block.text}
      </h3>
    );
  }
  if (block.type === "p") {
    return (
      <p className="mt-4 text-base leading-[1.75] text-mist">
        {renderInline(block.text)}
      </p>
    );
  }
  const Tag = block.type;
  return (
    <Tag
      className={`mt-4 space-y-2 pl-5 text-base leading-[1.75] text-mist ${
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
