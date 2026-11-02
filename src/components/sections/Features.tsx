import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SiteInset, SiteMeasure } from "@/components/ui/SiteInset";
import { copy } from "@/content/pages";

export function Features() {
  const { features } = copy;
  return (
    <section id="features" className="bg-ink-2/30 py-24 md:py-32">
      <SiteInset>
        <SiteMeasure>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{features.eyebrow}</p>
            <h2 className="h-display mt-4 text-h2">{features.title}</h2>
            <p className="mt-5 text-lead leading-relaxed text-mist">
              {features.subtitle}
            </p>
          </Reveal>

          <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.items.map((item) => (
              <RevealItem key={item.title}>
                <div className="group h-full rounded-2xl border border-ink-3/60 bg-ink p-7 transition-colors duration-300 hover:border-white/40">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mt-5 text-h4 font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-mist">
                    {item.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </SiteMeasure>
      </SiteInset>
    </section>
  );
}
