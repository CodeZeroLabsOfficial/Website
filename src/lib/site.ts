export const LOGIN_URL = "https://portal.depesch.com";

export const siteNav = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Support", href: "/support" },
] as const;

export const segments = [
  { id: "chauffeur", label: "Chauffeur" },
  { id: "airport", label: "Airport Transfer" },
  { id: "luxury", label: "Luxury Transfer Operator" },
] as const;

export const roles = [
  "Owner / Founder",
  "Operations Director",
  "Dispatch Manager",
  "Fleet Manager",
  "Sales / Account Manager",
  "Concierge / Guest Services",
  "Other",
];

export const fleetSizes = ["1–5", "6–15", "16–40", "41–100", "100+"];

export const findUsOptions = [
  "Google search",
  "Referral",
  "Industry event",
  "Social media",
  "Press / article",
  "Existing customer",
  "Other",
];

export const amenities = [
  { id: "airport-pickup", label: "Airport pickup" },
  { id: "hourly", label: "Hourly charter" },
  { id: "point-to-point", label: "Point-to-point" },
  { id: "meet-greet", label: "Meet & greet" },
  { id: "flight-tracking", label: "Flight tracking" },
  { id: "wait-time", label: "Extra wait time" },
  { id: "child-seats", label: "Child seats" },
  { id: "corporate", label: "Corporate accounts" },
  { id: "other", label: "Other" },
] as const;

export const dispatchTools = [
  "Groundspan",
  "Limo Anywhere",
  "Flightbridge",
  "Spreadsheets / none",
  "Other",
];

export const accountingTools = ["Xero", "QuickBooks", "Sage", "Other / none"];

export const flightDataTools = ["FlightAware", "OAG", "None", "Not sure"];

export const bookingChannels = [
  { id: "direct-app", label: "Direct app" },
  { id: "widget", label: "Website widget" },
  { id: "hotel", label: "Hotel / concierge feed" },
  { id: "tmc", label: "Travel management company" },
  { id: "not-sure", label: "Not sure" },
  { id: "none", label: "None" },
] as const;

export const supportFaqs = [
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
];
