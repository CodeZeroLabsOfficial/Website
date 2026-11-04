import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { copy } from "@/content/pages";

export function Platform() {
  const { platform } = copy;
  return (
    <section id="platform" className="pt-16 md:pt-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionHeader
            as="h1"
            eyebrow={platform.eyebrow}
            title={platform.title}
            body={platform.body}
            align="center"
          />
        </Reveal>
      </Container>
      <Reveal delay={0.12} className="mx-auto mt-14 w-full max-w-[1280px] px-5 md:mt-20">
        <div className="overflow-hidden rounded-2xl border border-ink-3/60 bg-ink-2">
          <Image
            src={platform.image}
            alt={platform.imageAlt}
            width={1024}
            height={576}
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="h-auto w-full"
          />
        </div>
      </Reveal>
    </section>
  );
}
