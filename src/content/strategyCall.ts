import { fleetSizes, segments } from "@/content/demo";

export const strategyCallMeta = {
  title: "Book a Strategy Call — Depesch",
  description:
    "A free 30-minute strategy call to see if Depesch fits your luxury transfer operation.",
} as const;

export const strategyCall = {
  back: "Back",
  continue: "Continue",
  continueArrow: "→",
  intro: {
    eyebrow: "Strategy call · 30 minutes",
    title: "See if Depesch fits your luxury operation",
    body: "A short call to map whether you’re driving a platform built for your service — or fitting luxury into a rigid box.",
    cta: "See If You’re A Fit",
  },
  success: {
    title: "You’re on the list.",
    body: "Thanks for sharing how you operate. A member of the Depesch team will reach out to schedule your strategy call.",
    cta: "Back to home",
    href: "/",
  },
  steps: {
    firstName: {
      title: "We’ll keep this quick. What’s your first name?",
    },
    email: {
      titlePrefix: "Awesome.",
      title: (name: string) => `What’s your email, ${name}?`,
      placeholder: "Email",
    },
    segment: {
      title: "What best describes your business?",
      body: "So we can tailor the conversation to how you actually run.",
    },
    fleet: {
      title: "How many vehicles in your fleet?",
      body: "We’re asking so we know what scale to plan around.",
    },
    countries: {
      title: "What country or countries do you operate in?",
      placeholder: "e.g. Cyprus, UAE, UK",
    },
    bottleneck: {
      title: "What’s your biggest ops bottleneck right now?",
      body: "Pick the one that costs you the most time or brand polish.",
    },
    tools: {
      title: "What are you using to run the operation today?",
      body: "Select all that apply.",
    },
    goals: {
      title: "In 12 months, what does winning look like for your fleet?",
      placeholder: "Type your answer here…",
    },
  },
  fields: {
    firstName: "First name",
    email: "Email",
  },
  bottlenecks: [
    { id: "bookings", label: "Bookings & guest experience" },
    { id: "dispatch", label: "Dispatch & live ops" },
    { id: "drivers", label: "Drivers & fleet coordination" },
    { id: "billing", label: "Billing & corporate accounts" },
    { id: "brand", label: "Branded app & client retention" },
    { id: "all", label: "All of the above" },
  ],
  tools: [
    { id: "limo-anywhere", label: "Limo Anywhere" },
    { id: "groundspan", label: "Groundspan" },
    { id: "flightbridge", label: "Flightbridge" },
    { id: "spreadsheets", label: "Spreadsheets / WhatsApp" },
    { id: "custom", label: "Custom / in-house" },
    { id: "other", label: "Other / not sure" },
  ],
  segments,
  fleetSizes,
} as const;
