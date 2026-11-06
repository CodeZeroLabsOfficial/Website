"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { DayPicker, type ChevronProps } from "react-day-picker";

type DateFieldProps = {
  label: string;
  /** Calendar day as yyyy-MM-dd. Empty when unset. */
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

const labelClass = "absolute -top-2 left-3 z-[1] bg-ink px-1 text-xs text-mist";
const controlClass =
  "w-full rounded-lg border border-ink-3 bg-transparent px-4 py-3.5 text-base text-white outline-none placeholder:text-muted/70 focus:border-white";

const DATE_VALUE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** Local calendar day. Parsing through UTC would shift the selected day. */
function parseDate(value: string): Date | undefined {
  const match = DATE_VALUE.exec(value.trim());
  if (!match) return undefined;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return undefined;
  }
  return date;
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatLabel(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function CalendarChevron({ orientation, className }: ChevronProps) {
  const left = orientation === "left";
  const right = orientation === "right";
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden
    >
      <path
        d={
          left
            ? "M10 3 5 8l5 5"
            : right
              ? "M6 3l5 5-5 5"
              : "M4 6l4 4 4-4"
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DateField({
  label,
  value,
  onChange,
  required,
  placeholder = "Select a date",
  className = "",
}: DateFieldProps) {
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const selected = parseDate(value);
  const today = new Date();
  const startMonth = new Date(today.getFullYear() - 1, 0);
  const endMonth = new Date(today.getFullYear() + 8, 11);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function onTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
    }
  }

  return (
    <div ref={rootRef} className={`relative ${open ? "z-30" : ""} ${className}`}>
      <span className={labelClass}>
        {label}
        {required ? " *" : ""}
      </span>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        aria-required={required || undefined}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={onTriggerKeyDown}
        className={`${controlClass} flex items-center gap-2 text-left ${
          open ? "border-white" : ""
        } ${selected ? "" : "text-muted/70"}`}
      >
        <span className="min-w-0 flex-1 truncate">
          {selected ? formatLabel(selected) : placeholder}
        </span>
        <span className="shrink-0 text-mist" aria-hidden>
          {open ? "▴" : "▾"}
        </span>
      </button>
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label={label}
          className="absolute left-0 z-30 mt-2 w-[min(20rem,calc(100vw-3rem))] rounded-lg border border-ink-3 bg-ink p-3 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.65)]"
        >
          <DayPicker
            mode="single"
            captionLayout="dropdown"
            showOutsideDays
            startMonth={startMonth}
            endMonth={endMonth}
            selected={selected}
            defaultMonth={selected ?? today}
            onSelect={(date) => {
              onChange(date ? formatDate(date) : "");
              if (date) setOpen(false);
            }}
            className="w-full text-white"
            classNames={{
              months: "relative w-full",
              month: "flex w-full flex-col gap-3",
              // Side padding matches the arrow buttons so they sit beside the dropdowns.
              month_caption: "flex h-9 w-full items-center justify-center px-9",
              dropdowns: "flex min-w-0 items-center justify-center gap-1.5",
              dropdown_root: "relative min-w-0",
              dropdown: "absolute inset-0 z-10 cursor-pointer opacity-0",
              caption_label:
                "inline-flex min-w-0 items-center gap-1 rounded-md border border-ink-3 px-2 py-1 text-sm text-white",
              nav: "absolute inset-x-0 top-0 flex h-9 items-center justify-between",
              button_previous:
                "grid size-9 shrink-0 place-items-center rounded-md text-mist hover:bg-white/10 hover:text-white",
              button_next:
                "grid size-9 shrink-0 place-items-center rounded-md text-mist hover:bg-white/10 hover:text-white",
              chevron: "size-4",
              month_grid: "w-full",
              weekdays: "flex w-full",
              weekday: "flex-1 text-center text-xs font-normal text-muted",
              week: "mt-1 flex w-full",
              day: "flex-1 p-0 text-center",
              day_button:
                "mx-auto grid size-9 place-items-center rounded-md text-sm text-white hover:bg-white/10",
              selected: "[&>button]:bg-white [&>button]:text-ink [&>button]:hover:bg-white",
              today: "[&>button]:ring-1 [&>button]:ring-inset [&>button]:ring-white/40",
              outside: "[&>button]:text-muted/40",
              disabled: "[&>button]:text-muted/30",
            }}
            components={{ Chevron: CalendarChevron }}
          />
        </div>
      ) : null}
    </div>
  );
}
