import type { ProductContent } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Testimonial({ content }: { content: ProductContent }) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[920px] px-5 text-center md:px-8">
        <Reveal>
          <span className="font-display text-7xl leading-none text-white/25">
            &ldquo;
          </span>
          <blockquote className="font-display -mt-6 text-[1.75rem] font-medium leading-snug text-white md:text-[2.25rem]">
            {content.testimonial.quote}
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent font-display font-bold text-accent-contrast">
              {content.testimonial.author.charAt(0)}
            </span>
            <div className="text-left">
              <p className="font-display font-semibold text-white">
                {content.testimonial.author}
              </p>
              <p className="text-small text-muted">{content.testimonial.role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
