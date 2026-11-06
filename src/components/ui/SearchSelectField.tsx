"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

type SearchSelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  /** When false, label stays for a11y but is not shown as a floating chip. */
  showLabel?: boolean;
  required?: boolean;
  autoFocus?: boolean;
};

const labelClass =
  "absolute -top-2 left-3 z-[1] bg-ink px-1 text-xs text-mist";
const controlClass =
  "w-full rounded-lg border border-ink-3 bg-transparent px-4 py-3.5 text-base text-white outline-none placeholder:text-muted/70 focus:border-white";

export function SearchSelectField({
  label,
  value,
  onChange,
  options,
  placeholder = "Select…",
  searchPlaceholder = "Search…",
  emptyMessage = "No matches",
  className = "",
  showLabel = true,
  required,
  autoFocus,
}: SearchSelectFieldProps) {
  const id = useId();
  const listId = `${id}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [...options];
    return options.filter((opt) => opt.toLowerCase().includes(q));
  }, [options, query]);

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
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(option: string) {
    onChange(option);
    setOpen(false);
    setQuery("");
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
      const opt = filtered[activeIndex];
      if (opt) choose(opt);
    }
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <span className={showLabel ? labelClass : "sr-only"}>
        {label}
        {required ? " *" : ""}
      </span>

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        autoFocus={autoFocus}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onTriggerKeyDown}
        className={`${controlClass} flex items-center gap-2 text-left ${
          open ? "border-white" : ""
        } ${value ? "" : "text-muted/70"}`}
      >
        <span className="min-w-0 flex-1 truncate">{value || placeholder}</span>
        <span className="shrink-0 text-mist" aria-hidden>
          {open ? "▴" : "▾"}
        </span>
      </button>

      {open ? (
        <div
          id={listId}
          role="listbox"
          aria-label={label}
          className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-lg border border-ink-3 bg-ink shadow-[0_16px_48px_-16px_rgba(0,0,0,0.65)]"
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
              placeholder={searchPlaceholder}
              className="w-full rounded-md border border-ink-3 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-muted/70 focus:border-white"
            />
          </div>
          <ul className="max-h-56 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-sm text-mist">{emptyMessage}</li>
            ) : (
              filtered.map((opt, index) => {
                const selected = opt === value;
                const active = index === activeIndex;
                return (
                  <li key={opt} role="option" aria-selected={selected}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => choose(opt)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-white ${
                        active ? "bg-white/5" : ""
                      }`}
                    >
                      <span
                        className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                          selected ? "border-accent bg-accent" : "border-ink-3"
                        }`}
                        aria-hidden
                      >
                        {selected ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-contrast" />
                        ) : null}
                      </span>
                      {opt}
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
