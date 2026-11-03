import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { copy } from "@/content/pages";

export function Platform() {
  const { platform } = copy;
  return (
    <section id="platform" className="section bg-ink-2/30">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionHeader
            eyebrow={platform.eyebrow}
            title={platform.title}
            body={platform.body}
            align="center"
          />
        </Reveal>

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platform.items.map((item) => (
            <RevealItem key={item.title}>
              <div className="group h-full rounded-2xl border border-ink-3/60 bg-ink p-7 transition-colors duration-300 hover:border-white/40">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="heading-sm mt-5">{item.title}</h3>
                <p className="body mt-2.5">{item.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
