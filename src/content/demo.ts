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

/** Trip types a guest can reserve. Posted as labels on the services brief key. */
export const services = [
  { id: "airport-transfer", label: "Airport transfer" },
  { id: "hourly", label: "Hourly charter" },
  { id: "point-to-point", label: "Point-to-point" },
] as const;

/** Platform capabilities. Alphabetical, with Other last. */
export const platformFeatures = [
  { id: "accounts-and-billing", label: "Accounts and Billing" },
  { id: "affiliate", label: "Affiliate and partner jobs" },
  { id: "analytics", label: "Analytics and reporting" },
  { id: "auto-dispatch", label: "Auto dispatch" },
  { id: "compliance", label: "Compliance management" },
  { id: "corporate-billing", label: "Corporate billing" },
  { id: "customer-and-driver-apps", label: "Customer and driver apps" },
  { id: "dynamic-pricing", label: "Dynamic pricing" },
  { id: "flight-tracking", label: "Flight tracking" },
  { id: "in-app-messaging", label: "In-app messaging" },
  { id: "live-gps", label: "Live GPS and ETA" },
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
  { id: "affiliates", label: "Affiliates" },
  { id: "corporate-account", label: "Corporate account" },
  { id: "email", label: "Email" },
  { id: "mobile-app", label: "Mobile app" },
  { id: "phone", label: "Phone" },
  { id: "website", label: "Website" },
  { id: "whatsapp", label: "WhatsApp / messaging" },
  { id: "not-sure", label: "Not sure" },
  { id: "none", label: "None" },
] as const;
