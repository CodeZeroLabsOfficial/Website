import { DemoButton } from "@/components/demo/DemoButton";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { copy } from "@/content/pages";

function ArrowChase() {
  return (
    <span className="relative inline-block h-3 w-3 overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 12 12"
        className="absolute inset-0 h-3 w-3 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-full"
        fill="none"
      >
        <path
          d="M2.5 6h7M6.5 3.5 9.5 6l-3 2.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        viewBox="0 0 12 12"
        className="absolute inset-0 h-3 w-3 -translate-x-full transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0"
        fill="none"
      >
        <path
          d="M2.5 6h7M6.5 3.5 9.5 6l-3 2.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

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
            <DemoButton className="group hover:bg-white">
              Request a Demo
              <ArrowChase />
            </DemoButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
