import { Reveal } from "@/components/ui/Reveal";
import { SiteInset, SiteMeasure, siteSectionClass } from "@/components/ui/SiteInset";
import { copy } from "@/content/pages";
import { SUPPORT_EMAIL } from "@/content/site";

export function SupportContent() {
  const { support } = copy;
  return (
    <section className={siteSectionClass}>
      <SiteInset>
        <SiteMeasure className="max-w-[800px]">
          <Reveal>
            <p className="eyebrow">{support.eyebrow}</p>
            <h1 className="h-display mt-4 text-h2">{support.title}</h1>
            <p className="mt-5 max-w-xl text-lead leading-relaxed text-mist">
              {support.body}
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-8 inline-block font-display text-2xl text-white transition-opacity hover:opacity-60"
            >
              {SUPPORT_EMAIL}
            </a>
          </Reveal>

          <dl className="mt-16 divide-y divide-ink-3/60 border-y border-ink-3/60">
            {support.faqs.map((item) => (
              <div key={item.q} className="py-6">
                <dt className="font-display text-lg font-medium text-white">
                  {item.q}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-mist">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </SiteMeasure>
      </SiteInset>
    </section>
  );
}
