export type Theme = "chauffeur" | "clinic" | "gym";

export interface Feature {
  title: string;
  body: string;
  icon: IconName;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface ProductContent {
  theme: Theme;
  slug: string;
  product: string;
  nav: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    rotatingPhrases: string[];
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
  };
  positioning: string;
  trust: { label: string; items: string[] };
  showcase: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    image: string;
  };
  features: { eyebrow: string; title: string; subtitle: string; items: Feature[] };
  stats: Stat[];
  steps: { eyebrow: string; title: string; items: Step[] };
  caseStudy: {
    image: string;
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  testimonial: { quote: string; author: string; role: string };
  cta: { title: string; subtitle: string; button: string };
}

export type IconName =
  | "route"
  | "shield"
  | "clock"
  | "card"
  | "star"
  | "phone"
  | "calendar"
  | "heart"
  | "lock"
  | "chart"
  | "users"
  | "bell"
  | "dumbbell"
  | "flame"
  | "trophy"
  | "qr";

export const products: Record<Theme, ProductContent> = {
  chauffeur: {
    theme: "chauffeur",
    slug: "chauffeur",
    product: "Depesch",
    nav: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Support", href: "/support" },
    ],
    hero: {
      eyebrow: "Elevate Every Journey. Own Every Experience.",
      title: "Dispatch Management for",
      highlight: "Chauffeurs",
      rotatingPhrases: [
        "Chauffeurs",
        "Airport Transfer",
        "Limousine Operators",
      ],
      subtitle:
        "A white-glove booking and fleet platform for executive car services — real-time dispatch, flight tracking, and a ride experience your clients will remember.",
      primaryCta: "Book a demo",
      secondaryCta: "Watch the ride",
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
    showcase: {
      eyebrow: "A day in the life of your client",
      title: "Every journey, perfectly orchestrated",
      body: "From the airport curb to the boardroom, your clients move through a seamless, branded experience while your dispatch team keeps the whole fleet in view.",
      bullets: [
        "Live driver ETA and in-app chat",
        "Automatic flight tracking and curb-side timing",
        "Branded receipts and account billing",
      ],
      image: "/img/showcase-chauffeur.jpg",
    },
    features: {
      eyebrow: "Built for the fleet",
      title: "Everything dispatch and drivers need",
      subtitle:
        "One platform that connects passengers, drivers, and operations in real time.",
      items: [
        { title: "Smart dispatch", body: "Auto-assign the nearest available chauffeur with live traffic-aware routing.", icon: "route" },
        { title: "Flight tracking", body: "Pickups adjust automatically to real-time flight delays and gate changes.", icon: "clock" },
        { title: "Account billing", body: "Corporate accounts, cost centers, and itemized monthly invoicing.", icon: "card" },
        { title: "Vetted drivers", body: "Onboarding, licensing, and background checks tracked in one place.", icon: "shield" },
        { title: "5-star experience", body: "In-ride preferences, climate, music, and refreshments saved per client.", icon: "star" },
        { title: "24/7 concierge", body: "In-app support and ride changes handled around the clock.", icon: "phone" },
      ],
    },
    stats: [
      { value: "4 min", label: "Average dispatch time" },
      { value: "98%", label: "On-time pickups" },
      { value: "4.9★", label: "Average client rating" },
      { value: "60+", label: "Cities served" },
    ],
    steps: {
      eyebrow: "How it works",
      title: "From request to red carpet",
      items: [
        { title: "Request", body: "Clients book in seconds with saved addresses, vehicle class, and preferences." },
        { title: "Dispatch", body: "The platform assigns the ideal chauffeur and shares live ETA instantly." },
        { title: "Ride", body: "A branded, tracked, white-glove journey from pickup to destination." },
        { title: "Bill", body: "Automatic receipts and consolidated account invoicing — no paperwork." },
      ],
    },
    caseStudy: {
      image: "/img/case-chauffeur.jpg",
      eyebrow: "Client story · Noir Executive",
      title: "A door-to-door experience worth remembering",
      body: "Noir Executive moved their entire fleet onto Depesch and cut dispatch time in half — while giving every client a seamless, branded journey from curb to destination.",
      cta: "Read the story",
    },
    testimonial: {
      quote:
        "We replaced three tools with one platform. Dispatch is faster, drivers are happier, and our corporate clients finally have billing that just works.",
      author: "Daniela Rossi",
      role: "Operations Director, Noir Executive",
    },
    cta: {
      title: "Give your clients the ride they expect",
      subtitle: "See Depesch in action with a personalized walkthrough.",
      button: "Book a demo",
    },
  },

  clinic: {
    theme: "clinic",
    slug: "clinic",
    product: "Depesch",
    nav: [
      { label: "Platform", href: "#showcase" },
      { label: "Features", href: "#features" },
      { label: "Results", href: "#stats" },
      { label: "How it works", href: "#steps" },
    ],
    hero: {
      eyebrow: "Medical Center & GP Clinic Platform",
      title: "Modern care, from booking to",
      highlight: "follow-up.",
      rotatingPhrases: [],
      subtitle:
        "A calm, secure patient platform for GP clinics and medical centers — online bookings, telehealth, e-scripts, and reminders that reduce no-shows and free up your front desk.",
      primaryCta: "Book a demo",
      secondaryCta: "See patient view",
      image: "/img/hero-clinic.jpg",
    },
    positioning:
      "Online bookings, telehealth and patient records — in one calm platform.",
    trust: {
      label: "Trusted by clinics and medical centers",
      items: [
        "Riverside Medical",
        "Parkway GP",
        "Coastal Health",
        "Elm Street Clinic",
        "Northgate Care",
        "Summit Family Practice",
      ],
    },
    showcase: {
      eyebrow: "A day in the life of your patient",
      title: "Care that meets patients where they are",
      body: "Patients book, check in, and consult from their phone, while your team works from a single calm dashboard — no double-handling, no phone-tag.",
      bullets: [
        "Online and telehealth appointments",
        "Digital intake forms and e-scripts",
        "Automated reminders that cut no-shows",
      ],
      image: "/img/showcase-clinic.jpg",
    },
    features: {
      eyebrow: "Built for the clinic",
      title: "Everything your practice needs",
      subtitle:
        "Secure, compliant, and designed to give time back to clinicians and staff.",
      items: [
        { title: "Online booking", body: "Patients self-book the right appointment type, 24/7, on any device.", icon: "calendar" },
        { title: "Telehealth", body: "Secure video consults with notes and billing built in.", icon: "phone" },
        { title: "Smart reminders", body: "SMS and email reminders that meaningfully reduce no-shows.", icon: "bell" },
        { title: "Private & secure", body: "Encryption and access controls aligned with health privacy standards.", icon: "lock" },
        { title: "Patient records", body: "History, scripts, and results organized in one tidy timeline.", icon: "heart" },
        { title: "Practice insights", body: "Utilization, wait times, and revenue at a glance.", icon: "chart" },
      ],
    },
    stats: [
      { value: "38%", label: "Fewer no-shows" },
      { value: "12 hrs", label: "Saved per week, per clinic" },
      { value: "4.8★", label: "Patient satisfaction" },
      { value: "100%", label: "Encrypted records" },
    ],
    steps: {
      eyebrow: "How it works",
      title: "A smoother path for every patient",
      items: [
        { title: "Book", body: "Patients choose the right service and time online in under a minute." },
        { title: "Check in", body: "Digital intake forms arrive before the visit — no clipboard required." },
        { title: "Consult", body: "In-person or telehealth, with notes and scripts handled in-app." },
        { title: "Follow up", body: "Results, reminders, and rebooking flow automatically." },
      ],
    },
    caseStudy: {
      image: "/img/case-clinic.jpg",
      eyebrow: "Client story · Riverside Medical",
      title: "More time for care, less time on the phone",
      body: "Riverside Medical gave patients self-service booking and digital check-in, freeing their front desk and cutting no-shows by more than a third in a single quarter.",
      cta: "Read the story",
    },
    testimonial: {
      quote:
        "Our front desk used to drown in phone calls. Now patients book and check in themselves, and our no-show rate dropped by a third in the first quarter.",
      author: "Dr. Amelia Hart",
      role: "Practice Principal, Riverside Medical",
    },
    cta: {
      title: "Give your patients a calmer experience",
      subtitle: "See how Depesch fits your practice with a quick walkthrough.",
      button: "Book a demo",
    },
  },

  gym: {
    theme: "gym",
    slug: "gym",
    product: "Depesch",
    nav: [
      { label: "Platform", href: "#showcase" },
      { label: "Features", href: "#features" },
      { label: "Results", href: "#stats" },
      { label: "How it works", href: "#steps" },
    ],
    hero: {
      eyebrow: "Gym & Fitness Studio Platform",
      title: "Memberships, classes and gains —",
      highlight: "all in one app.",
      rotatingPhrases: [],
      subtitle:
        "A bold member app and gym management platform — class bookings, memberships, check-ins, and workout tracking that keep your members coming back.",
      primaryCta: "Start free trial",
      secondaryCta: "See member app",
      image: "/img/hero-gym.jpg",
    },
    positioning:
      "Memberships, class bookings and workout tracking — in one powerful app.",
    trust: {
      label: "Powering studios and gyms everywhere",
      items: [
        "Iron Republic",
        "Pulse Studio",
        "Forge Fitness",
        "Apex Athletic",
        "Grit House",
        "Momentum Club",
      ],
    },
    showcase: {
      eyebrow: "A day in the life of your member",
      title: "From first rep to personal best",
      body: "Members book classes, check in with a tap, and track every workout — while you manage memberships, schedules, and payments without the spreadsheet chaos.",
      bullets: [
        "Class booking and waitlists",
        "QR check-in and access control",
        "Workout and progress tracking",
      ],
      image: "/img/showcase-gym.jpg",
    },
    features: {
      eyebrow: "Built for the floor",
      title: "Everything your gym needs to grow",
      subtitle:
        "Run memberships, classes, and member engagement from one powerful app.",
      items: [
        { title: "Class booking", body: "Live schedules, waitlists, and capacity limits that fill every session.", icon: "calendar" },
        { title: "QR check-in", body: "Frictionless entry and access control with a single scan.", icon: "qr" },
        { title: "Memberships", body: "Flexible plans, billing, and freezes that members manage themselves.", icon: "card" },
        { title: "Workout tracking", body: "Programs, PRs, and progress that keep members motivated.", icon: "dumbbell" },
        { title: "Streaks & rewards", body: "Challenges and badges that turn attendance into a habit.", icon: "flame" },
        { title: "Member insights", body: "Retention, attendance, and revenue trends in real time.", icon: "chart" },
      ],
    },
    stats: [
      { value: "32%", label: "Better retention" },
      { value: "2x", label: "More class bookings" },
      { value: "4.9★", label: "Member app rating" },
      { value: "15 sec", label: "Average check-in" },
    ],
    steps: {
      eyebrow: "How it works",
      title: "Built to keep members moving",
      items: [
        { title: "Join", body: "Members sign up and pick a plan straight from their phone." },
        { title: "Book", body: "Reserve classes and PT sessions with live availability." },
        { title: "Check in", body: "Tap to scan and walk straight onto the floor." },
        { title: "Progress", body: "Track workouts, hit streaks, and smash personal bests." },
      ],
    },
    caseStudy: {
      image: "/img/case-gym.jpg",
      eyebrow: "Client story · Iron Republic",
      title: "From spreadsheets to a packed class schedule",
      body: "Iron Republic doubled class bookings and turned attendance into a habit with streaks and challenges — while managing memberships in a few taps instead of a weekend.",
      cta: "Read the story",
    },
    testimonial: {
      quote:
        "Bookings doubled and our members are genuinely hooked on the streaks feature. Managing memberships went from a weekend job to a few taps.",
      author: "Marcus Lee",
      role: "Owner, Iron Republic",
    },
    cta: {
      title: "Turn members into regulars",
      subtitle: "Start your free trial and see Depesch on your floor in a day.",
      button: "Start free trial",
    },
  },
};
