"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useDemo } from "@/components/demo/DemoProvider";
import {
  accountingTools,
  amenities,
  bookingChannels,
  dispatchTools,
  findUsOptions,
  fleetSizes,
  flightDataTools,
  roles,
  segments,
} from "@/content/demo";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

const EASE = [0.22, 1, 0.36, 1] as const;

const emptyForm = {
  segment: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  company: "",
  website: "",
  role: "",
  fleetSize: "",
  location: "",
  findUs: "",
  launchDate: "",
  amenities: [] as string[],
  dispatchTool: "",
  accounting: "",
  flightData: "",
  bookingChannels: [] as string[],
};

export function DemoOverlay() {
  const { demoOpen, closeDemo } = useDemo();
  const reduce = useReducedMotion();
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [amenityError, setAmenityError] = useState(false);
  const [segmentError, setSegmentError] = useState(false);

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
        setAmenityError(false);
        setSegmentError(false);
      }, 400);
      return () => window.clearTimeout(id);
    }
  }, [demoOpen]);

  function toggle(list: string[], id: string) {
    return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.segment) {
      setSegmentError(true);
      return;
    }
    if (form.amenities.length === 0) {
      setAmenityError(true);
      return;
    }
    setAmenityError(false);
    setSegmentError(false);
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
                <h2 className="h-display text-h2">We’ll be in touch shortly.</h2>
                <p className="mx-auto mt-4 max-w-md text-lead text-mist">
                  Thanks for requesting a demo. A member of the Depesch team will
                  reach out to schedule a walkthrough.
                </p>
                <button
                  type="button"
                  onClick={closeDemo}
                  className="btn-accent mt-10 rounded-full px-8 py-4 text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-10">
                <h2
                  id="demo-title"
                  className="h-display text-center text-[1.65rem] uppercase tracking-[0.06em] sm:text-[2rem]"
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
                  <Field
                    label="Phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                    placeholder="Enter your phone"
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
                  <Field
                    label="Country / location"
                    required
                    value={form.location}
                    onChange={(v) => setForm((f) => ({ ...f, location: v }))}
                    placeholder="City, country"
                  />
                  <SelectField
                    label="How did you find us?"
                    required
                    value={form.findUs}
                    onChange={(v) => setForm((f) => ({ ...f, findUs: v }))}
                    options={findUsOptions}
                  />
                  <Field
                    label="Intended launch date"
                    required
                    type="date"
                    value={form.launchDate}
                    onChange={(v) => setForm((f) => ({ ...f, launchDate: v }))}
                    className="sm:col-span-2"
                  />
                </div>

                <fieldset>
                  <legend className="mb-4 text-base text-white">
                    Which services and amenities would you like your guests to
                    reserve?
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {amenities.map((item) => (
                      <ChoiceCard
                        key={item.id}
                        selected={form.amenities.includes(item.id)}
                        onClick={() => {
                          setAmenityError(false);
                          setForm((f) => ({
                            ...f,
                            amenities: toggle(f.amenities, item.id),
                          }));
                        }}
                        label={item.label}
                      />
                    ))}
                  </div>
                  {amenityError ? (
                    <p className="mt-3 text-sm text-red-400">
                      This field is required
                    </p>
                  ) : null}
                </fieldset>

                <fieldset className="flex flex-col gap-5">
                  <legend className="mb-1 text-base text-white">
                    Current technology stack
                  </legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField
                      label="Current dispatch tool"
                      required
                      value={form.dispatchTool}
                      onChange={(v) => setForm((f) => ({ ...f, dispatchTool: v }))}
                      options={dispatchTools}
                    />
                    <SelectField
                      label="Accounting / billing"
                      required
                      value={form.accounting}
                      onChange={(v) => setForm((f) => ({ ...f, accounting: v }))}
                      options={accountingTools}
                    />
                    <SelectField
                      label="Flight data"
                      required
                      value={form.flightData}
                      onChange={(v) => setForm((f) => ({ ...f, flightData: v }))}
                      options={flightDataTools}
                      className="sm:col-span-2"
                    />
                  </div>
                  <p className="text-sm text-mist">Booking channels</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {bookingChannels.map((item) => (
                      <ChoiceCard
                        key={item.id}
                        selected={form.bookingChannels.includes(item.id)}
                        onClick={() =>
                          setForm((f) => ({
                            ...f,
                            bookingChannels: toggle(f.bookingChannels, item.id),
                          }))
                        }
                        label={item.label}
                      />
                    ))}
                  </div>
                </fieldset>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="btn-accent inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm"
                  >
                    Request a Demo
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`relative block ${className}`}>
      <span className="absolute -top-2 left-3 z-[1] bg-ink px-1 text-[11px] text-mist">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        required={required}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-ink-3 bg-transparent px-4 py-3.5 text-base text-white outline-none placeholder:text-muted/70 focus:border-white"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`relative block ${className}`}>
      <span className="absolute -top-2 left-3 z-[1] bg-ink px-1 text-[11px] text-mist">
        {label}
        {required ? " *" : ""}
      </span>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-lg border border-ink-3 bg-ink px-4 py-3.5 text-base text-white outline-none focus:border-white"
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function SegmentIcon({ name }: { name: (typeof segments)[number]["icon"] }) {
  const paths = {
    sedan: (
      <>
        <path d="M3.5 15h17" />
        <path d="M5 15 7.2 9.8A1.8 1.8 0 0 1 8.8 8.8h6.6a1.8 1.8 0 0 1 1.6 1L19.2 15" />
        <circle cx="8.2" cy="15" r="1.75" />
        <circle cx="16.2" cy="15" r="1.75" />
        <path d="M10.8 8.9v6.1M14.5 8.9v6.1" />
        <path d="M3.5 15v1.4M20.5 15v1.4" />
      </>
    ),
    plane: (
      <>
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
      </>
    ),
    limo: (
      <>
        <path d="M2 15h20" />
        <path d="M3.5 15 4.8 10.5A1.4 1.4 0 0 1 6.1 9.5h11.8a1.4 1.4 0 0 1 1.3 1L20.5 15" />
        <circle cx="6.5" cy="15" r="1.5" />
        <circle cx="17.5" cy="15" r="1.5" />
        <path d="M8.2 9.5v5.5M12 9.5v5.5M15.6 9.5v5.5" />
        <path d="M2 15v1.3M22 15v1.3" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-14 w-14"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

function ChoiceCard({
  selected,
  onClick,
  label,
  icon,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  icon?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center rounded-xl border px-4 text-center text-sm text-white transition-colors ${
        icon
          ? "min-h-[180px] flex-col gap-4 py-8"
          : "min-h-[104px] py-6"
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
