import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { copy } from "@/content/pages";

function JumpArrow() {
  return (
    <span className="jump-link-arrow-track">
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
    </span>
  );
}

export function Operators() {
  const { operators } = copy;

  return (
    <section id="positioning" className="section">
      <Container>
        <Reveal className="mx-auto max-w-[1200px] text-center">
          <SectionHeader
            eyebrow={operators.eyebrow}
            title={operators.title}
            body={operators.body}
            align="center"
            bodyClassName="mx-auto max-w-[1200px]"
          />
        </Reveal>

        <RevealStagger className="mt-16 grid gap-12 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_1fr_auto] lg:gap-x-0 lg:gap-y-4 lg:divide-x lg:divide-ink-3/60">
          {operators.items.map((item) => (
            <RevealItem
              key={item.slug}
              className="flex flex-col gap-4 lg:row-span-5 lg:grid lg:grid-rows-subgrid lg:px-5"
            >
              <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-2xl border border-ink-3/60 bg-ink-2">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="font-display text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="caption">{item.body}</p>

              <ul className="flex flex-col gap-2.5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="caption flex gap-2.5 text-mist"
                  >
                    <span className="shrink-0 text-muted" aria-hidden>
                      ›
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={item.href}
                className="jump-link jump-link-forward mt-auto self-stretch"
              >
                <span>{item.cta}</span>
                <JumpArrow />
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
