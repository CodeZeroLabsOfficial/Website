import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  accent: "btn btn-accent",
  ghost: "btn btn-ghost",
  link: "btn-link",
} as const;

const sizes = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
} as const;

export function Button({
  variant = "accent",
  size = "md",
  className = "",
  type = "button",
  children,
  ...props
}: {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const sizeClass = variant === "link" ? "" : sizes[size];
  return (
    <button
      type={type}
      className={`${variants[variant]} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
