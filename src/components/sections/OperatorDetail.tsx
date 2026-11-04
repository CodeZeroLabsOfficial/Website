import Image from "next/image";
import { DemoButton } from "@/components/demo/DemoButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { OperatorSegment } from "@/content/types";

export function OperatorDetail({
  operator,
}: {
  operator: OperatorSegment;
}) {
  return (
    <section className="section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-3/60 bg-ink-2">
              <Image
                src={operator.image}
                alt={operator.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeader
              eyebrow={operator.planLabel}
              title={operator.title}
              body={operator.body}
              as="h1"
            />

            <div className="mt-10">
              {operator.includesFrom ? (
                <p className="caption mb-4 text-mist">{operator.includesFrom}</p>
              ) : null}
              <ul className="divide-y divide-ink-3/60 border-y border-ink-3/60">
                {operator.features.map((feature) => (
                  <li key={feature} className="body py-3 text-white">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <DemoButton size="lg">Request a Demo</DemoButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
