import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { supportFaqs } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Support — Depesch",
  description:
    "Get help with Depesch dispatch, driver apps, and account billing. Contact hello@depesch.com.",
};

export default function SupportPage() {
  return (
    <>
      <section className="px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[800px]">
          <Reveal>
            <p className="eyebrow">Support</p>
            <h1 className="h-display mt-4 text-h1">We’re here when you need us</h1>
            <p className="mt-5 max-w-xl text-lead leading-relaxed text-mist">
              Questions about dispatch, driver onboarding, or your account —
              reach the team directly.
            </p>
            <a
              href="mailto:hello@depesch.com"
              className="mt-8 inline-block font-display text-2xl text-white transition-opacity hover:opacity-60"
            >
              hello@depesch.com
            </a>
          </Reveal>

          <dl className="mt-16 divide-y divide-ink-3/60 border-y border-ink-3/60">
            {supportFaqs.map((item) => (
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
        </div>
      </section>
      <Footer />
    </>
  );
}
