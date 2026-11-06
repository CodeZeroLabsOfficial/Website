"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type JSX,
  type KeyboardEvent,
  type SVGAttributes,
} from "react";
import * as flagIcons from "country-flag-icons/react/3x2";
import { callingCodes, type CallingCode } from "@/content/calling-codes";

type FlagComponent = (props: SVGAttributes<SVGSVGElement>) => JSX.Element;

const flags = flagIcons as Record<string, FlagComponent>;

type PhoneFieldProps = {
  label: string;
  /** ISO 3166-1 alpha-2. Empty until a country is chosen. */
  country: string;
  number: string;
  onCountryChange: (iso: string) => void;
  onNumberChange: (value: string) => void;
  required?: boolean;
  numberPlaceholder?: string;
  error?: boolean;
  className?: string;
};

const labelClass = "absolute -top-2 left-3 z-[1] bg-ink px-1 text-xs text-mist";

function CountryFlag({ iso }: { iso: string }) {
  const Flag = flags[iso];
  if (!Flag) return null;
  return (
    <span className="inline-flex h-4 w-6 shrink-0 overflow-hidden rounded-[2px]" aria-hidden>
      <Flag className="h-full w-full" />
    </span>
  );
}

function matches(item: CallingCode, query: string) {
  const q = query.trim().toLowerCase().replace(/^\+/, "");
  if (!q) return true;
  return item.name.toLowerCase().includes(q) || item.dial.slice(1).startsWith(q);
}

export function PhoneField({
  label,
  country,
  number,
  onCountryChange,
  onNumberChange,
  required,
  numberPlaceholder = "Enter your phone",
  error,
  className = "",
}: PhoneFieldProps) {
  const id = useId();
  const listId = `${id}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const selected = callingCodes.find((item) => item.iso === country);
  const filtered = useMemo(
    () => callingCodes.filter((item) => matches(item, query)),
    [query],
  );

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();
    setActiveIndex(0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key !== "Escape") return;
      e.stopPropagation();
      setOpen(false);
      setQuery("");
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(iso: string) {
    onCountryChange(iso);
    setOpen(false);
    setQuery("");
    numberRef.current?.focus();
  }

  function onTriggerKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  }

  function onSearchKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[activeIndex];
      if (item) choose(item.iso);
    }
  }

  return (
    <div ref={rootRef} className={`relative ${open ? "z-30" : ""} ${className}`}>
      <span className={labelClass}>
        {label}
        {required ? " *" : ""}
      </span>

      <div
        className={`flex rounded-lg border bg-transparent focus-within:border-white ${
          open ? "border-white" : "border-ink-3"
        }`}
      >
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-required={required || undefined}
          aria-label={selected ? `${selected.name} ${selected.dial}` : "Country code"}
          onClick={() => setOpen((value) => !value)}
          onKeyDown={onTriggerKeyDown}
          className="flex shrink-0 items-center gap-2 border-r border-ink-3 px-3 text-base text-white outline-none"
        >
          {selected ? (
            <>
              <CountryFlag iso={selected.iso} />
              <span>{selected.dial}</span>
            </>
          ) : (
            <span className="text-muted/70">Code</span>
          )}
          <span className="text-mist" aria-hidden>
            {open ? "▴" : "▾"}
          </span>
        </button>
        <input
          ref={numberRef}
          required={required}
          type="tel"
          value={number}
          placeholder={numberPlaceholder}
          aria-label={label}
          onChange={(e) => onNumberChange(e.target.value)}
          className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-base text-white outline-none placeholder:text-muted/70"
        />
      </div>

      {error ? <p className="mt-2 text-sm text-red-400">This field is required</p> : null}

      {open ? (
        <div
          id={listId}
          role="listbox"
          aria-label={label}
          className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-lg border border-ink-3 bg-ink shadow-[0_16px_48px_-16px_rgba(0,0,0,0.65)]"
        >
          <div className="border-b border-ink-3 p-2">
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={onSearchKeyDown}
              placeholder="Search countries…"
              className="w-full rounded-md border border-ink-3 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-muted/70 focus:border-white"
            />
          </div>
          <ul className="max-h-56 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-sm text-mist">No countries match</li>
            ) : (
              filtered.map((item, index) => {
                const isSelected = item.iso === country;
                const active = index === activeIndex;
                return (
                  <li key={item.iso} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => choose(item.iso)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-white ${
                        active ? "bg-white/5" : ""
                      }`}
                    >
                      <CountryFlag iso={item.iso} />
                      <span className="min-w-0 flex-1 truncate">{item.name}</span>
                      <span className="shrink-0 text-mist">{item.dial}</span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
