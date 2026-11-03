import Image from "next/image";
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

export function Features() {
  const { features } = copy;

  return (
    <>
      <section
        id="features"
        className="flex min-h-[calc(100vh-4rem)] items-center md:min-h-[calc(100vh-72px)]"
      >
        <Container className="w-full py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow={features.eyebrow}
              title={features.title}
              body={features.body}
              align="center"
            />
          </Reveal>

          <Reveal delay={0.12}>
            <nav
              aria-label="Feature sections"
              className="mt-12 grid gap-0 sm:grid-cols-3 sm:gap-8"
            >
              {features.jumps.map((jump) => (
                <a key={jump.href} href={jump.href} className="jump-link">
                  <span>{jump.label}</span>
                  <JumpArrow />
                </a>
              ))}
            </nav>
          </Reveal>
        </Container>
      </section>

      <div className="section stack">
        {features.chapters.map((chapter) => (
          <Container
            key={chapter.id}
            id={chapter.id}
            className="scroll-mt-24 md:scroll-mt-[88px]"
          >
            <Reveal>
              <SectionHeader eyebrow={chapter.eyebrow} title={chapter.title} />
            </Reveal>

            <RevealStagger className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-12">
              {chapter.items.map((item) => (
                <RevealItem key={item.title}>
                  <article className="flex flex-col gap-8">
                    <div className="relative aspect-square overflow-hidden rounded-2xl border border-ink-3/60 bg-ink-2">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="heading-sm">{item.title}</h3>
                      <p className="body mt-3 text-muted">{item.body}</p>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </RevealStagger>
          </Container>
        ))}
      </div>
    </>
  );
}
