import type { KeyboardEventHandler } from "react";

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  /** When false, label stays for a11y but is not shown as a floating chip. */
  showLabel?: boolean;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

const labelClass =
  "absolute -top-2 left-3 z-[1] bg-ink px-1 text-xs text-mist";
const controlClass =
  "w-full rounded-lg border border-ink-3 bg-transparent px-4 py-3.5 text-base text-white outline-none placeholder:text-muted/70 focus:border-white";

export function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
  className = "",
  autoFocus,
  showLabel = true,
  onKeyDown,
}: FieldProps) {
  return (
    <label className={`relative block ${className}`}>
      <span className={showLabel ? labelClass : "sr-only"}>
        {label}
        {required ? " *" : ""}
      </span>
      <input
        required={required}
        type={type}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        className={controlClass}
      />
    </label>
  );
}

export function TextAreaField({
  label,
  value,
  onChange,
  required,
  placeholder,
  className = "",
  rows = 5,
  showLabel = true,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  rows?: number;
  showLabel?: boolean;
}) {
  return (
    <label className={`relative block ${className}`}>
      <span className={showLabel ? labelClass : "sr-only"}>
        {label}
        {required ? " *" : ""}
      </span>
      <textarea
        required={required}
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className={`${controlClass} resize-y`}
      />
    </label>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  required,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`relative block ${className}`}>
      <span className={labelClass}>
        {label}
        {required ? " *" : ""}
      </span>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${controlClass} appearance-none bg-ink`}
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
