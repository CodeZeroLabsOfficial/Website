import type { IconName } from "@/components/ui/Icon";
import { SUPPORT_EMAIL } from "@/content/site";

export const meta = {
  home: {
    title: "Depesch — Software for Luxury Fleets",
    description:
      "A white-glove booking and fleet platform for executive car services: real-time dispatch, flight tracking, account billing, and a five-star ride experience.",
  },
  features: {
    title: "Features — Depesch",
    description:
      "Dispatch, flight tracking, account billing, and a five-star ride experience — everything operators and chauffeurs need in one platform.",
  },
  support: {
    title: "Support — Depesch",
    description: `Get help with Depesch dispatch, driver apps, and account billing. Contact ${SUPPORT_EMAIL}.`,
  },
} as const;

export const copy = {
  hero: {
    eyebrow: "Elevate Every Journey. Own Every Experience.",
    title: "Software for Luxury Fleets",
    image: "/img/hero-chauffeur.jpg",
  },
  positioning:
    "Dispatch, fleet management and a five-star ride experience — in one platform.",
  trust: {
    label: "Trusted by premium fleets and concierge teams",
    items: [
      "Meridian Cars",
      "Noir Executive",
      "Atlas Private",
      "Halcyon Travel",
      "Crown & Co.",
      "Vantage Fleet",
    ],
  },
  features: {
    eyebrow: "Built for the fleet",
    title: "Everything dispatch and drivers need",
    subtitle:
      "One platform that connects passengers, drivers, and operations in real time.",
    items: [
      {
        title: "Smart dispatch",
        body: "Auto-assign the nearest available chauffeur with live traffic-aware routing.",
        icon: "route" as IconName,
      },
      {
        title: "Flight tracking",
        body: "Pickups adjust automatically to real-time flight delays and gate changes.",
        icon: "clock" as IconName,
      },
      {
        title: "Account billing",
        body: "Corporate accounts, cost centers, and itemized monthly invoicing.",
        icon: "card" as IconName,
      },
      {
        title: "Vetted drivers",
        body: "Onboarding, licensing, and background checks tracked in one place.",
        icon: "shield" as IconName,
      },
      {
        title: "5-star experience",
        body: "In-ride preferences, climate, music, and refreshments saved per client.",
        icon: "star" as IconName,
      },
      {
        title: "24/7 concierge",
        body: "In-app support and ride changes handled around the clock.",
        icon: "phone" as IconName,
      },
    ],
  },
  cta: {
    title: "Ready to Own the Luxury Transfer Experience?",
    subtitle: "See Depesch in action with a personalized walkthrough.",
  },
  support: {
    eyebrow: "Support",
    title: "We’re here when you need us",
    body: "Questions about dispatch, driver onboarding, or your account — reach the team directly.",
    faqs: [
      {
        q: "How do I book a demo?",
        a: "Use Request a Demo in the header. Tell us about your fleet and we’ll schedule a walkthrough.",
      },
      {
        q: "How do drivers get the app?",
        a: "Each chauffeur receives a branded driver app after onboarding. Dispatch can invite drivers from the console.",
      },
      {
        q: "Can we keep our existing phone numbers?",
        a: "Yes. Most operators keep their current booking lines and add Depesch as the dispatch and client layer.",
      },
      {
        q: "How is billing handled?",
        a: "Corporate accounts, cost centres, and itemized invoices run in the platform. Receipts go out automatically after each ride.",
      },
    ],
  },
} as const;
