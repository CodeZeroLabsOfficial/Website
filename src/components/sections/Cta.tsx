import { StrategyCallButton } from "@/components/strategy/StrategyCallButton";
import { ArrowChase } from "@/components/ui/ArrowChase";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { copy } from "@/content/pages";

export function Cta() {
  return (
    <section className="section relative overflow-hidden">
      <div className="glow pointer-events-none absolute inset-x-0 bottom-0 h-[420px] rotate-180" />
      <Container className="relative max-w-[920px]">
        <Reveal className="text-center">
          <SectionHeader
            title={copy.cta.title}
            body={copy.cta.body}
            align="center"
          />
          <div className="mt-9 flex justify-center">
            <StrategyCallButton className="group">
              {copy.cta.button}
              <ArrowChase />
            </StrategyCallButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
