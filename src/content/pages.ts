import type { IconName } from "@/components/ui/Icon";
import { SUPPORT_EMAIL } from "@/content/site";
import type {
  FaqItem,
  FeatureChapter,
  FeatureItem,
  FeatureJump,
  Persona,
  Testimonial,
} from "@/content/types";

export const meta = {
  home: {
    title: "Depesch — Software for Luxury Fleets",
    description:
      "A white-glove booking and fleet platform for executive car services: real-time dispatch, flight tracking, account billing, and a five-star ride experience.",
  },
  platform: {
    title: "Platform — Depesch",
    description:
      "The Depesch platform for luxury fleets: passenger, driver, and dispatch tools connected in one system.",
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
  ] satisfies Persona[],
  showcase: {
    eyebrow: "A day in the life of your client",
    title: "Every journey, perfectly orchestrated",
    playLabel: "Play video",
    image: "/img/showcase-chauffeur.jpg",
    body: "From the airport curb to the boardroom, your clients move through a seamless, branded experience while your dispatch team keeps the whole fleet in view.",
    highlights: [
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
  ] satisfies Testimonial[],
  faq: {
    eyebrow: "FAQs",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What features are included in the platform?",
        answer:
          "Passenger booking with vehicle class, pricing, and tracking; a driver app for jobs, navigation, and status; a dispatch dashboard; realtime GPS; payments and invoicing; notifications; reporting; and integrations with calendars or accounting tools.",
      },
      {
        question: "How is it different from off-the-shelf platforms?",
        answer:
          "Depesch is built for chauffeur and limo operators: fully branded passenger and driver apps, dispatch, compliance, and payments in one platform — not a generic booking tool with a luxury sticker.",
      },
      {
        question: "How much will it cost?",
        answer:
          "Pricing is scoped to your fleet. Request a Demo and we will walk through a plan that fits how you operate.",
      },
      {
        question: "Are there any variable or hidden costs?",
        answer:
          "No per-trip or per-booking fees. Usage is included in the plan we agree with you.",
      },
      {
        question: "How can this platform help my business?",
        answer:
          "It puts a branded client app, driver tools, and dispatch in one place so you can compete with app-based services without stitching together add-ons.",
      },
      {
        question: "What can't it do yet?",
        answer:
          "Some deeper workflow and dashboard customisations are still on the roadmap. Request a Demo and we will be clear about what ships today.",
      },
    ] satisfies FaqItem[],
  },
  platform: {
    eyebrow: "The platform",
    title: "One system for every seat in the fleet",
    body: "Passenger, driver, and dispatch experiences built to work together — not stitched on later.",
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
    ] satisfies FeatureItem[],
  },
  features: {
    eyebrow: "Built for the fleet",
    title: "Everything dispatch and drivers need",
    body: "One platform that connects passengers, drivers, and operations in real time.",
    jumps: [
      { label: "Own the experience", href: "#customer-experience" },
      { label: "Focus on the Drive", href: "#dispatch-chaos" },
      { label: "Orchestrate every journey", href: "#orchestrate-journey" },
      { label: "Premium features", href: "#premium" },
    ] satisfies FeatureJump[],
    chapters: [
      {
        id: "customer-experience",
        eyebrow: "Capabilities",
        title: "Own the customer\nexperience",
        items: [
          {
            title: "Branded customer app",
            body: "Your identity on every screen — elegant, fully customised for the luxury fleets you run.",
            image: "/img/features/branded-app.jpg",
          },
          {
            title: "Seamless booking",
            body: "Instant ordering, pre-booking, and payments that clear without friction.",
            image: "/img/features/booking.jpg",
          },
          {
            title: "Live GPS tracking",
            body: "Real-time ETA updates so clients always know where their chauffeur is.",
            image: "/img/features/gps.jpg",
          },
        ],
      },
      {
        id: "dispatch-chaos",
        eyebrow: "Operations",
        title: "Navigation, status, jobs.\nHandled in one place.",
        items: [
          {
            title: "Dedicated driver app",
            body: "Jobs, status, and tools in one place — built for the road, not the office.",
            image: "/img/features/driver-app.jpg",
          },
          {
            title: "Job management",
            body: "Accept, update, and complete assignments without the radio chatter.",
            image: "/img/features/job-management.jpg",
          },
          {
            title: "Turn-by-turn navigation",
            body: "Routing that keeps every pickup and drop-off on track.",
            image: "/img/features/navigation.jpg",
          },
          {
            title: "Effortless onboarding",
            body: "Invite drivers to your fleet and onboard them with ease.",
            image: "/img/features/onboarding.jpg",
          },
          {
            title: "In-app messaging",
            body: "Talk to clients and dispatch without leaving the job screen.",
            image: "/img/features/messaging.jpg",
          },
          {
            title: "Vehicle management",
            body: "Vehicle status, readiness, and details at hand before you roll.",
            image: "/img/features/vehicle-management.jpg",
          },
        ],
      },
      {
        id: "orchestrate-journey",
        eyebrow: "Dispatch Management",
        title: "Every journey,\nperfectly orchestrated",
        items: [
          {
            title: "Account billing",
            body: "Corporate accounts, cost centers, and itemized invoicing without the chase.",
            image: "/img/features/billing.jpg",
          },
          {
            title: "Analytics and reporting",
            body: "See utilisation, revenue, and performance across the fleet in one view.",
            image: "/img/features/analytics.jpg",
          },
          {
            title: "Compliance management",
            body: "Licensing, documents, and checks tracked before they become a problem.",
            image: "/img/features/compliance.jpg",
          },
          {
            title: "Fleet visibility",
            body: "The whole fleet in view so operations never lose the thread mid-journey.",
            image: "/img/features/fleet.jpg",
          },
          {
            title: "Live ops board",
            body: "Jobs, statuses, and assignments running on a single live console.",
            image: "/img/features/live-ops.jpg",
          },
          {
            title: "Loyalty and promotions",
            body: "Rewards and offers that keep premium clients coming back.",
            image: "/img/features/loyalty.jpg",
          },
        ],
      },
      {
        id: "premium",
        eyebrow: "Premium",
        title: "Premium features.\nBuilt to scale.",
        items: [
          {
            title: "Automated dispatch",
            body: "Assignments and notifications that cut the back-and-forth out of operations.",
            image: "/img/features/dispatch.jpg",
          },
          {
            title: "Booking validation",
            body: "Catch conflicts, gaps, and bad data before a job hits the road.",
            image: "/img/features/booking-validation.jpg",
          },
          {
            title: "Dynamic pricing",
            body: "Configure rates that flex with demand, distance, and service class.",
            image: "/img/features/dynamic-pricing.jpg",
          },
          {
            title: "Driver ratings",
            body: "Quality scores that keep the fleet sharp and clients confident.",
            image: "/img/features/driver-ratings.jpg",
          },
          {
            title: "Multiple locations",
            body: "Run several bases or cities from one connected operation.",
            image: "/img/features/multiple-locations.jpg",
          },
        ],
      },
    ] satisfies FeatureChapter[],
  },
  cta: {
    title: "Ready to Own the Luxury Transfer Experience?",
    body: "See Depesch in action with a personalized walkthrough.",
  },
  support: {
    eyebrow: "Support",
    title: "We’re here when you need us",
    body: "Questions about dispatch, driver onboarding, or your account — reach the team directly.",
    items: [
      {
        question: "How do I book a demo?",
        answer:
          "Use Request a Demo in the header. Tell us about your fleet and we’ll schedule a walkthrough.",
      },
      {
        question: "How do drivers get the app?",
        answer:
          "Each chauffeur receives a branded driver app after onboarding. Dispatch can invite drivers from the console.",
      },
      {
        question: "Can we keep our existing phone numbers?",
        answer:
          "Yes. Most operators keep their current booking lines and add Depesch as the dispatch and client layer.",
      },
      {
        question: "How is billing handled?",
        answer:
          "Corporate accounts, cost centres, and itemized invoices run in the platform. Receipts go out automatically after each ride.",
      },
    ] satisfies FaqItem[],
  },
} as const;
