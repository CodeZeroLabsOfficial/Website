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
  personas: [
    {
      eyebrow: "For Passengers",
      title: "Luxury at\nyour fingertips.",
      body: "Become the leading luxury operator with a fully branded & customised app.",
      items: [
        {
          label: "Elegant, fully branded customer app",
          frame: "Branded app",
          icon: "device" as IconName,
        },
        {
          label: "Seamless booking and instant payments",
          frame: "Booking",
          icon: "calendar" as IconName,
        },
        {
          label: "Live GPS tracking with ETA updates",
          frame: "Live tracking",
          icon: "globe" as IconName,
        },
        {
          label: "In-app messaging with your driver",
          frame: "Messaging",
          icon: "chat" as IconName,
        },
        {
          label: "Loyalty rewards and saved preferences",
          frame: "Loyalty",
          icon: "award" as IconName,
        },
      ],
    },
    {
      eyebrow: "For Dispatch & Drivers",
      title: "Operational chaos.\nHandled forever.",
      body: "Bookings, replies, reminders & reschedules. Let your drivers focus on the ride.",
      items: [
        {
          label: "Dedicated driver app with job management",
          frame: "Driver app",
          icon: "device" as IconName,
        },
        {
          label: "Live status updates with turn-by-turn navigation",
          frame: "Navigation",
          icon: "route" as IconName,
        },
        {
          label: "Automated dispatching and notifications",
          frame: "Dispatch",
          icon: "refresh" as IconName,
        },
        {
          label: "Automated invoicing and instant payments",
          frame: "Invoicing",
          icon: "file" as IconName,
        },
        {
          label: "Intelligent fleet management",
          frame: "Fleet",
          icon: "stack" as IconName,
        },
      ],
    },
  ],
  showcase: {
    eyebrow: "A day in the life of your client",
    title: "Every journey, perfectly orchestrated",
    playLabel: "Play video",
    image: "/img/showcase-chauffeur.jpg",
    body: "From the airport curb to the boardroom, your clients move through a seamless, branded experience while your dispatch team keeps the whole fleet in view.",
    bullets: [
      "Live driver ETA and in-app chat",
      "Automatic flight tracking and curb-side timing",
      "Branded receipts and account billing",
    ],
  },
  testimonials: [
    {
      quote:
        "We replaced three tools with one platform. Dispatch is faster, drivers are happier, and our corporate clients finally have billing that just works.",
      author: "Daniela Rossi",
      role: "Operations Director, Noir Executive",
    },
    {
      quote:
        "Depesch enabled me to establish a very competent app for my chauffeur business.",
      author: "Priya R.",
      role: "Owner Operator, Meridian Cars",
    },
    {
      quote:
        "I made a list of features I wanted and Depesch had most of them — and definitely had more than the others.",
      author: "Marcus T.",
      role: "CEO, Atlas Private",
    },
  ],
  faq: {
    eyebrow: "FAQs",
    title: "Frequently Asked Questions",
    items: [
      {
        q: "What features are included in the platform?",
        a: "Passenger booking with vehicle class, pricing, and tracking; a driver app for jobs, navigation, and status; a dispatch dashboard; realtime GPS; payments and invoicing; notifications; reporting; and integrations with calendars or accounting tools.",
      },
      {
        q: "How is it different from off-the-shelf platforms?",
        a: "Depesch is built for chauffeur and limo operators: fully branded passenger and driver apps, dispatch, compliance, and payments in one platform — not a generic booking tool with a luxury sticker.",
      },
      {
        q: "How much will it cost?",
        a: "Pricing is scoped to your fleet. Request a Demo and we will walk through a plan that fits how you operate.",
      },
      {
        q: "Are there any variable or hidden costs?",
        a: "No per-trip or per-booking fees. Usage is included in the plan we agree with you.",
      },
      {
        q: "How can this platform help my business?",
        a: "It puts a branded client app, driver tools, and dispatch in one place so you can compete with app-based services without stitching together add-ons.",
      },
      {
        q: "What can't it do yet?",
        a: "Some deeper workflow and dashboard customisations are still on the roadmap. Request a Demo and we will be clear about what ships today.",
      },
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
