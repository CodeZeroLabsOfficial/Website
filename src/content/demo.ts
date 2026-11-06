export const segments = [
  { id: "chauffeur", label: "Chauffeur", icon: "sedan" },
  { id: "airport", label: "Airport Transfer", icon: "plane" },
  { id: "luxury", label: "Luxury Transfer Operator", icon: "limo" },
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

export const features = [
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

/** Named platforms A–Z, then the catch-all answers. Shared by both lead forms. */
export const dispatchPlatforms = [
  "Autocab",
  "Cab9",
  "CMT",
  "Cordic",
  "FASTTRAK",
  "Flightbridge",
  "Groundspan",
  "iCabbi",
  "Limo Anywhere",
  "LimoSys",
  "Livery Coach",
  "Moovs",
  "Onde",
  "RideMinder",
  "TaxiCaller",
  "Spreadsheets",
  "None",
  "Other",
];

/** Named platforms A–Z, then the catch-all answers. */
export const accountingTools = [
  "Bexio",
  "Cegid",
  "Datev",
  "e-conomic",
  "Exact",
  "Fortnox",
  "FreeAgent",
  "Holded",
  "Lexware",
  "Moneybird",
  "NetSuite",
  "Odoo",
  "Pennylane",
  "QuickBooks",
  "Sage",
  "sevDesk",
  "Visma",
  "Xero",
  "Zoho Books",
  "Spreadsheets",
  "None",
  "Other",
];

export const bookingChannels = [
  { id: "direct-app", label: "Direct app" },
  { id: "widget", label: "Website widget" },
  { id: "hotel", label: "Hotel / concierge feed" },
  { id: "tmc", label: "Travel management company" },
  { id: "not-sure", label: "Not sure" },
  { id: "none", label: "None" },
] as const;
