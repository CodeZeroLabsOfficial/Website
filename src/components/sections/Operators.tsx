import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { copy } from "@/content/pages";

function JumpArrow() {
  return (
    <svg
      className="jump-link-arrow"
      viewBox="0 0 25 24"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3681 8.90377V17.8033H18.3681V5.48955H6.05439V7.48955H14.9539L4.64018 17.8033L6.05439 19.2175L16.3681 8.90377Z"
      />
    </svg>
  );
}

export function Operators() {
  const { operators } = copy;

  return (
    <section id="operators" className="section">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionHeader
            eyebrow={operators.eyebrow}
            title={operators.title}
            body={operators.body}
            align="center"
          />
        </Reveal>

        <RevealStagger className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-ink-3/60">
          {operators.items.map((item) => (
            <RevealItem
              key={item.slug}
              className="lg:px-10 lg:first:pl-0 lg:last:pr-0"
            >
              <article className="flex h-full flex-col gap-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-3/60 bg-ink-2">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4">
                  <h3 className="heading-sm">{item.title}</h3>
                  <p className="body text-mist">{item.body}</p>
                  <ul className="flex flex-col gap-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="caption text-mist">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link href={item.href} className="jump-link mt-auto">
                    <span>{item.cta}</span>
                    <JumpArrow />
                  </Link>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
