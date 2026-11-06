"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useDemo } from "@/components/demo/DemoProvider";
import { Button } from "@/components/ui/Button";
import { phoneWithCallingCode } from "@/content/calling-codes";
import { countries } from "@/content/countries";
import { DateField } from "@/components/ui/DateField";
import { Field, SelectField } from "@/components/ui/Field";
import { PhoneField } from "@/components/ui/PhoneField";
import { MultiSelectField } from "@/components/ui/MultiSelectField";
import { SearchSelectField } from "@/components/ui/SearchSelectField";
import {
  accountingTools,
  bookingChannels,
  platformFeatures,
  services,
  dispatchPlatforms,
  findUsOptions,
  fleetSizes,
  roles,
  segments,
} from "@/content/demo";
import { submitLead } from "@/lib/leads";
import { EASE } from "@/lib/motion";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

const emptyForm = {
  segment: "",
  firstName: "",
  lastName: "",
  phoneCountry: "",
  phone: "",
  email: "",
  company: "",
  website: "",
  role: "",
  fleetSize: "",
  location: [] as string[],
  findUs: "",
  launchDate: "",
  services: [] as string[],
  platformFeatures: [] as string[],
  dispatchTool: "",
  accounting: "",
  bookingChannels: [] as string[],
};

export function DemoOverlay() {
  const { demoOpen, closeDemo } = useDemo();
  const reduce = useReducedMotion();
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [amenityError, setAmenityError] = useState(false);
  const [segmentError, setSegmentError] = useState(false);
  const [dispatchError, setDispatchError] = useState(false);
  const [accountingError, setAccountingError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [launchDateError, setLaunchDateError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    if (!demoOpen) return;
    lockScroll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDemo();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [demoOpen, closeDemo]);

  useEffect(() => {
    if (!demoOpen) {
      const id = window.setTimeout(() => {
        setSubmitted(false);
        setSubmitError(null);
        setAmenityError(false);
        setSegmentError(false);
        setDispatchError(false);
        setAccountingError(false);
        setLocationError(false);
        setPhoneError(false);
      }, 400);
      return () => window.clearTimeout(id);
    }
  }, [demoOpen]);

  function toggle(list: string[], id: string) {
    return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;
    if (!form.segment) {
      setSegmentError(true);
      return;
    }
    if (form.services.length === 0) {
      setAmenityError(true);
      return;
    }
    if (!form.dispatchTool) {
      setDispatchError(true);
      return;
    }
    if (form.location.length === 0) {
      setLocationError(true);
      return;
    }
    if (!form.accounting) {
      setAccountingError(true);
      return;
    }
    if (!form.launchDate) {
      setLaunchDateError(true);
      return;
    }
    if (!form.phoneCountry) {
      setPhoneError(true);
      return;
    }
    setAmenityError(false);
    setSegmentError(false);
    setDispatchError(false);
    setAccountingError(false);
    setLocationError(false);
    setLaunchDateError(false);
    setPhoneError(false);
    setSubmitting(true);
    setSubmitError(null);
    const segment =
      segments.find((item) => item.id === form.segment)?.label ?? form.segment;
    const serviceLabels = form.services
      .map((id) => services.find((item) => item.id === id)?.label ?? id)
      .join(", ");
    const platformFeatureLabels = form.platformFeatures
      .map((id) => platformFeatures.find((item) => item.id === id)?.label ?? id)
      .join(", ");
    const channelLabels = form.bookingChannels
      .map((id) => bookingChannels.find((item) => item.id === id)?.label ?? id)
      .join(", ");
    const location = form.location.join(", ");
    const result = await submitLead({
      form: "demo",
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email.trim(),
      phone: phoneWithCallingCode(form.phoneCountry, form.phone),
      country: location,
      fields: {
        segment,
        fleetSize: form.fleetSize,
        features: serviceLabels,
        ...(platformFeatureLabels ? { platformFeatures: platformFeatureLabels } : {}),
        dispatchPlatform: form.dispatchTool,
        accountingPlatform: form.accounting,
        bookingChannels: channelLabels,
        company: form.company.trim(),
        role: form.role,
        location,
        website: form.website.trim(),
        findUs: form.findUs,
        launchDate: form.launchDate,
      },
      pageUrl: window.location.href,
    });
    setSubmitting(false);
    if (!result.ok) {
      setSubmitError(result.message);
      return;
    }
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {demoOpen ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-title"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-ink [color-scheme:dark]"
        >
          <button
            type="button"
            aria-label="Close demo form"
            onClick={closeDemo}
            className="fixed right-5 top-5 z-10 grid h-10 w-10 place-items-center text-white md:right-8"
          >
            <span className="relative block h-4 w-4">
              <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 rotate-45 bg-white" />
              <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 -rotate-45 bg-white" />
            </span>
          </button>

          <div className="mx-auto w-full max-w-[920px] px-5 py-20 md:px-8 md:py-24">
            {submitted ? (
              <div className="py-24 text-center">
                <h2 className="font-display text-[1.65rem] font-semibold leading-tight tracking-normal text-white sm:text-[2rem]">
                  We’ll be in touch shortly.
                </h2>
                <p className="lead mx-auto mt-4 max-w-md">
                  Thanks for requesting a demo. A member of the Depesch team will
                  reach out to schedule a walkthrough.
                </p>
                <Button className="mt-10" onClick={closeDemo}>
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-10">
                <h2
                  id="demo-title"
                  className="text-center font-display text-[1.65rem] font-semibold leading-tight tracking-normal text-white sm:text-[2rem]"
                >
                  Let us show you how Depesch can impact your business
                </h2>

                <fieldset>
                  <legend className="mb-4 text-center text-base text-white">
                    Which service best represents your business?
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {segments.map((item) => (
                      <ChoiceCard
                        key={item.id}
                        selected={form.segment === item.id}
                        onClick={() => {
                          setSegmentError(false);
                          setForm((f) => ({ ...f, segment: item.id }));
                        }}
                        label={item.label}
                        icon={<SegmentIcon name={item.icon} />}
                      />
                    ))}
                  </div>
                  {segmentError ? (
                    <p className="mt-3 text-center text-sm text-red-400">
                      This field is required
                    </p>
                  ) : null}
                </fieldset>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="First name"
                    required
                    value={form.firstName}
                    onChange={(v) => setForm((f) => ({ ...f, firstName: v }))}
                    placeholder="Enter first name"
                  />
                  <Field
                    label="Last name"
                    required
                    value={form.lastName}
                    onChange={(v) => setForm((f) => ({ ...f, lastName: v }))}
                    placeholder="Enter last name"
                  />
                  <PhoneField
                    label="Phone"
                    required
                    country={form.phoneCountry}
                    number={form.phone}
                    onCountryChange={(iso) => {
                      setPhoneError(false);
                      setForm((f) => ({ ...f, phoneCountry: iso }));
                    }}
                    onNumberChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                    error={phoneError}
                  />
                  <Field
                    label="Email address"
                    required
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    placeholder="Enter your email"
                  />
                  <Field
                    label="Company name"
                    required
                    value={form.company}
                    onChange={(v) => setForm((f) => ({ ...f, company: v }))}
                    placeholder="Enter company name"
                  />
                  <Field
                    label="Company website"
                    required
                    type="url"
                    value={form.website}
                    onChange={(v) => setForm((f) => ({ ...f, website: v }))}
                    placeholder="Enter company website"
                  />
                  <SelectField
                    label="What is your role?"
                    required
                    value={form.role}
                    onChange={(v) => setForm((f) => ({ ...f, role: v }))}
                    options={roles}
                  />
                  <SelectField
                    label="Drivers / fleet size"
                    required
                    value={form.fleetSize}
                    onChange={(v) => setForm((f) => ({ ...f, fleetSize: v }))}
                    options={fleetSizes}
                  />
                  <div>
                    <MultiSelectField
                      label="Country"
                      required
                      showValueChips={false}
                      value={form.location}
                      onChange={(v) => {
                        setLocationError(false);
                        setForm((f) => ({ ...f, location: v }));
                      }}
                      options={countries}
                      placeholder="Select countries"
                      searchPlaceholder="Search countries…"
                      emptyMessage="No countries match"
                    />
                    {locationError ? (
                      <p className="mt-2 text-sm text-red-400">This field is required</p>
                    ) : null}
                  </div>
                  <SelectField
                    label="How did you find us?"
                    required
                    value={form.findUs}
                    onChange={(v) => setForm((f) => ({ ...f, findUs: v }))}
                    options={findUsOptions}
                  />
                  <div className="sm:col-span-2">
                    <DateField
                      label="Intended launch date"
                      required
                      value={form.launchDate}
                      onChange={(v) => {
                        setLaunchDateError(false);
                        setForm((f) => ({ ...f, launchDate: v }));
                      }}
                    />
                    {launchDateError ? (
                      <p className="mt-2 text-sm text-red-400">This field is required</p>
                    ) : null}
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-4 text-base text-white">
                    Which services do you offer?
                  </legend>
                  <div className="grid gap-6 sm:grid-cols-3">
                    {services.map((item) => (
                      <ChoiceCard
                        key={item.id}
                        compact
                        selected={form.services.includes(item.id)}
                        onClick={() => {
                          setAmenityError(false);
                          setForm((f) => ({
                            ...f,
                            services: toggle(f.services, item.id),
                          }));
                        }}
                        label={item.label}
                        icon={serviceIcon(item.id)}
                      />
                    ))}
                  </div>
                  {amenityError ? (
                    <p className="mt-3 text-sm text-red-400">
                      This field is required
                    </p>
                  ) : null}
                </fieldset>

                <fieldset>
                  <legend className="mb-4 text-base text-white">
                    Which features are important to your business?
                  </legend>
                  <div className="grid gap-6 sm:grid-cols-3">
                    {platformFeatures.map((item) => (
                      <ChoiceCard
                        key={item.id}
                        compact
                        selected={form.platformFeatures.includes(item.id)}
                        onClick={() =>
                          setForm((f) => ({
                            ...f,
                            platformFeatures: toggle(f.platformFeatures, item.id),
                          }))
                        }
                        label={item.label}
                        icon={platformFeatureIcon(item.id)}
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="mb-6 text-base text-white">
                    Current technology stack
                  </legend>
                  <div className="flex flex-col gap-8">
                    <div>
                      <SearchSelectField
                        label="Current dispatch platform"
                        required
                        value={form.dispatchTool}
                        onChange={(v) => {
                          setDispatchError(false);
                          setForm((f) => ({ ...f, dispatchTool: v }));
                        }}
                        options={dispatchPlatforms}
                        placeholder="Select a platform"
                        searchPlaceholder="Search platforms…"
                        emptyMessage="No platforms match"
                      />
                      {dispatchError ? (
                        <p className="mt-2 text-sm text-red-400">This field is required</p>
                      ) : null}
                    </div>
                    <div>
                      <SearchSelectField
                        label="Current accounting platform"
                        required
                        value={form.accounting}
                        onChange={(v) => {
                          setAccountingError(false);
                          setForm((f) => ({ ...f, accounting: v }));
                        }}
                        options={accountingTools}
                        placeholder="Select a platform"
                        searchPlaceholder="Search platforms…"
                        emptyMessage="No platforms match"
                      />
                      {accountingError ? (
                        <p className="mt-2 text-sm text-red-400">This field is required</p>
                      ) : null}
                    </div>
                  </div>
                  <p className="mb-3 mt-8 text-sm text-mist">Booking channels</p>
                  <div className="grid gap-6 sm:grid-cols-3">
                    {bookingChannels.map((item) => (
                      <ChoiceCard
                        key={item.id}
                        compact
                        selected={form.bookingChannels.includes(item.id)}
                        onClick={() =>
                          setForm((f) => ({
                            ...f,
                            bookingChannels: toggle(f.bookingChannels, item.id),
                          }))
                        }
                        label={item.label}
                        icon={channelIcon(item.id)}
                      />
                    ))}
                  </div>
                </fieldset>

                {submitError ? (
                  <p className="text-center text-sm text-red-400">{submitError}</p>
                ) : null}
                <div className="flex justify-center pt-2">
                  <Button type="submit" className="group" disabled={submitting}>
                    {submitting ? "Sending…" : "Request a Demo"}
                    <span aria-hidden>→</span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function LineIcon({ children, className = "h-14 w-14" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

function SegmentIcon({ name }: { name: (typeof segments)[number]["icon"] }) {
  if (name === "plane") {
    return (
      <LineIcon>
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
      </LineIcon>
    );
  }
  if (name === "limo") {
    return (
      <LineIcon>
        <path d="M2.6 15.8 5.4 12.6 8 10.4h5.4l2.2 2.2H19l2.2 3.2" />
        <path d="M2.6 15.8h18.6" />
        <path d="M8.3 12.4h6.2" />
        <circle cx="7.2" cy="15.8" r="1.55" />
        <circle cx="16.8" cy="15.8" r="1.55" />
      </LineIcon>
    );
  }
  return (
    <svg viewBox="99 99 291 298" className="h-14 w-14" aria-hidden>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M109 151 178 152 187 156 195 169 225 255 225 378 217 388 192 389 185 385 182 380 182 361 180 359 107 359 107 226 184 225 168 180 107 180 107 152Z M153 271 164 271 171 274 180 286 181 294 178 304 173 310 163 315 154 315 145 311 140 306 136 296 139 281 146 274Z"
      />
      <path fill="currentColor" d="M312 107 349 107 353 109 359 117 359 135 301 135 302 115Z" />
      <path fill="currentColor" d="M301 152 359 152 359 158 355 167 346 176 325 180 316 177 307 169Z" />
      <path
        fill="currentColor"
        d="M299 197 315 197 330 226 345 197 366 199 376 208 381 218 382 285 359 301 352 389 308 388 301 300 278 285 279 219 284 208Z"
      />
    </svg>
  );
}

function serviceIcon(id: (typeof services)[number]["id"]) {
  const glyph: Record<(typeof services)[number]["id"], ReactNode> = {
    "airport-transfer": (
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
    ),
    hourly: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    "point-to-point": (
      <>
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <path d="M8.5 18H14a3 3 0 0 0 0-6H10a3 3 0 0 1 0-6h5.5" />
      </>
    ),
  };
  return <LineIcon className="h-[45px] w-[45px]">{glyph[id]}</LineIcon>;
}

function platformFeatureIcon(id: (typeof platformFeatures)[number]["id"]) {
  const glyph: Record<(typeof platformFeatures)[number]["id"], ReactNode> = {
    "accounts-and-billing": (
      <>
        <path d="M6 3.5h9l3 3V20.5H6z" />
        <path d="M15 3.5V7h3.5" />
        <path d="M8.5 11h7M8.5 14.5h7M8.5 18h4" />
      </>
    ),
    affiliate: (
      <>
        <circle cx="6" cy="12" r="2.4" />
        <circle cx="17" cy="6.5" r="2.4" />
        <circle cx="17" cy="17.5" r="2.4" />
        <path d="m8.2 11 6.6-3.2M8.2 13l6.6 3.2" />
      </>
    ),
    analytics: (
      <>
        <path d="M4 19.5h16" />
        <path d="M7 19.5v-6M12 19.5V8M17 19.5v-9" />
      </>
    ),
    "auto-dispatch": (
      <>
        <circle cx="6" cy="7" r="2.2" />
        <circle cx="18" cy="7" r="2.2" />
        <circle cx="12" cy="17" r="2.2" />
        <path d="M8 8.2 10.6 15M16 8.2 13.4 15" />
      </>
    ),
    compliance: (
      <>
        <path d="M12 3.5 5 6.5v5.2c0 4 2.8 6.6 7 8.3 4.2-1.7 7-4.3 7-8.3V6.5z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    "corporate-billing": (
      <>
        <path d="M4 21V6.5A1.5 1.5 0 0 1 5.5 5h7A1.5 1.5 0 0 1 14 6.5V21" />
        <path d="M14 10h4.5A1.5 1.5 0 0 1 20 11.5V21" />
        <path d="M4 21h16" />
        <path d="M7 8.5h4M7 12h4M7 15.5h4" />
      </>
    ),
    "customer-and-driver-apps": (
      <>
        <rect x="3.5" y="4" width="7" height="16" rx="1.5" />
        <rect x="13.5" y="4" width="7" height="16" rx="1.5" />
        <path d="M6.2 17.2h1.6M16.2 17.2h1.6" />
      </>
    ),
    "dynamic-pricing": (
      <>
        <path d="M5 16.5 10 8l3.2 5.2L16 9.5 19 14" />
        <path d="M4 19.5h16" />
      </>
    ),
    "flight-tracking": (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" />
        <path d="m12 12 6-4" />
      </>
    ),
    "in-app-messaging": (
      <>
        <path d="M5 6.5h14v9H8.5L5 18.5z" />
      </>
    ),
    "live-gps": (
      <>
        <path d="M12 21s6-5.2 6-9.2A6 6 0 0 0 6 11.8C6 15.8 12 21 12 21z" />
        <circle cx="12" cy="11.5" r="2" />
      </>
    ),
    other: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.8.4-1.2.9-1.2 1.8" />
        <path d="M12 17h.01" />
      </>
    ),
  };
  return <LineIcon className="h-[45px] w-[45px]">{glyph[id]}</LineIcon>;
}

function channelIcon(id: (typeof bookingChannels)[number]["id"]) {
  const glyph: Record<(typeof bookingChannels)[number]["id"], ReactNode> = {
    affiliates: (
      <>
        <circle cx="6" cy="12" r="2.4" />
        <circle cx="17" cy="6.5" r="2.4" />
        <circle cx="17" cy="17.5" r="2.4" />
        <path d="m8.2 11 6.6-3.2M8.2 13l6.6 3.2" />
      </>
    ),
    "corporate-account": (
      <>
        <rect x="3" y="7" width="18" height="12" rx="1.5" />
        <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
        <path d="M3 12h18" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    "mobile-app": (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M11 18.5h2" />
      </>
    ),
    phone: (
      <path d="M8 3.5h2.2l1.2 3-1.6 1a12 12 0 0 0 5.7 5.7l1-1.6 3 1.2V15a2 2 0 0 1-2.2 2A15 15 0 0 1 6 5.7 2 2 0 0 1 8 3.5z" />
    ),
    website: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3z" />
      </>
    ),
    whatsapp: <path d="M8 19.5A8.5 8.5 0 1 0 5.2 16L3.5 20.5 8 19.5z" />,
    "not-sure": (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.8.4-1.2.9-1.2 1.8" />
        <path d="M12 17h.01" />
      </>
    ),
    none: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m6 6 12 12" />
      </>
    ),
  };
  return <LineIcon className="h-[45px] w-[45px]">{glyph[id]}</LineIcon>;
}

function ChoiceCard({
  selected,
  onClick,
  label,
  icon,
  compact = false,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  icon?: ReactNode;
  /** Shorter tile for services and booking channels. */
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center rounded-xl border text-center text-sm text-white transition-colors ${
        icon
          ? compact
            ? "min-h-[127px] flex-col gap-4 px-3 py-5"
            : "min-h-[180px] flex-col gap-4 px-4 py-8"
          : "min-h-[104px] px-4 py-6"
      } ${
        selected
          ? "border-white bg-white/5"
          : "border-ink-3 hover:border-white/50"
      }`}
    >
      {icon}
      <span className="leading-snug">{label}</span>
    </button>
  );
}
