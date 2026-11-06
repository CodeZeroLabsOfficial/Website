import { countries } from "@/content/countries";
import { fleetSizes, segments } from "@/content/demo";

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
    cta: "Close",
  },
  steps: {
    firstName: {
      title: "We’ll keep this quick. What’s your first name?",
      placeholder: "Enter your first name",
    },
    email: {
      titlePrefix: "Awesome.",
      title: (name: string) => `What’s your email, ${name}?`,
      placeholder: "Enter your email",
    },
    segment: {
      title: "What best describes your business?",
      body: "So we can tailor the conversation to how you operate.",
      otherPlaceholder: "Tell us your business type",
    },
    fleet: {
      title: "How many vehicles in your fleet?",
      body: "We’re asking so we know what scale to plan around.",
    },
    countries: {
      title: "What countries do you operate in?",
      placeholder: "Select countries",
      searchPlaceholder: "Search countries…",
      empty: "No countries match",
    },
    bottleneck: {
      title: "What’s your biggest operational bottleneck right now?",
      body: "(Select more than one if applicable)",
    },
    tools: {
      title: "What are you using to run the operation today?",
    },
    goals: {
      title: "In 12 months, what does winning look like for your fleet?",
      placeholder: "Tell us what winning looks like…",
    },
  },
  requiredError: "This field is required",
  fields: {
    firstName: "First name",
    email: "Email",
    countries: "Countries",
    segmentOther: "Other business type",
    goals: "Goals",
  },
  bottlenecks: [
    { id: "bookings", label: "Bookings & passenger experience" },
    { id: "driver-app", label: "Driver app & job management" },
    { id: "dispatch", label: "Dispatch & operations" },
    { id: "quotes", label: "Quotes & pricing" },
    { id: "accounts", label: "Accounts & billing" },
    { id: "reporting", label: "Reporting & analytics" },
    { id: "integrations", label: "Integrations" },
    { id: "custom-workflows", label: "Custom workflows" },
  ],
  countryOptions: countries,
  segments: [
    ...segments.map(({ id, label }) => ({ id, label })),
    { id: "other", label: "Other" },
  ],
  fleetSizes,
} as const;
