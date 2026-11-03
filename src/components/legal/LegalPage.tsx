import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { legalEntity } from "@/content/site";
import type {
  LegalBlock,
  LegalDocument,
  LegalInline,
  LegalListItem,
} from "@/content/legal/types";

const bodyClass = "body mt-4";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <Container
      as="article"
      className="max-w-[1320px] pb-[7.5rem] pt-[150px] md:pt-[180px] xl:pt-[200px]"
    >
      <h1 className="heading">{document.title}</h1>
      <div className="mt-16 grid gap-10 md:grid-cols-[300px_minmax(0,800px)] md:gap-x-3">
        <aside>
          <p className="caption">Last updated:</p>
          <p className="mt-1 text-xs text-white">{legalEntity.updated}</p>
        </aside>
        <div>
          <p className="lead text-white">{document.lead}</p>
          {document.preface?.map((paragraph) => (
            <p key={paragraph} className={bodyClass}>
              {paragraph}
            </p>
          ))}
          <div className="mt-16">
            {document.sections.map((section) => (
              <section key={section.title} className="mt-16 first:mt-0">
                <h2 className="heading-sm">{section.title}</h2>
                {section.blocks.map((block, index) => (
                  <Block key={index} block={block} />
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "h3") {
    return <h3 className="heading-sm mt-8">{block.text}</h3>;
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
