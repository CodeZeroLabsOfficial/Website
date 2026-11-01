import type { ProductContent } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

export function PositioningBand({ content }: { content: ProductContent }) {
  return (
    <section id="positioning" className="py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <Logo className="mx-auto h-8 w-auto sm:h-10" />
          <p className="font-display mt-6 text-[1.9rem] font-medium leading-[1.25] tracking-tight text-white sm:text-[2.5rem] lg:text-[3rem]">
            {content.positioning}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
