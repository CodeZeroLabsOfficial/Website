import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { copy } from "@/content/pages";
import { SUPPORT_EMAIL } from "@/content/site";

export function SupportContent() {
  const { support } = copy;
  return (
    <section className="section">
      <Container className="max-w-[800px]">
        <Reveal>
          <SectionHeader
            eyebrow={support.eyebrow}
            title={support.title}
            body={support.body}
            as="h1"
          />
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-8 inline-block font-display text-2xl text-white transition-opacity hover:opacity-60"
          >
            {SUPPORT_EMAIL}
          </a>
        </Reveal>

        <dl className="mt-16 divide-y divide-ink-3/60 border-y border-ink-3/60">
          {support.items.map((item) => (
            <div key={item.question} className="py-6">
              <dt className="font-display text-lg font-medium text-white">
                {item.question}
              </dt>
              <dd className="body mt-2">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
