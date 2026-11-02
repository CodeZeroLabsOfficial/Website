import type { ReactNode } from "react";

export type IconName =
  | "route"
  | "shield"
  | "clock"
  | "card"
  | "star"
  | "phone"
  | "device"
  | "calendar"
  | "globe"
  | "chat"
  | "award"
  | "refresh"
  | "stack"
  | "file"
  | "currency"
  | "play";

const paths: Record<IconName, ReactNode> = {
  route: (
    <>
      <circle cx="6" cy="19" r="2.4" />
      <circle cx="18" cy="5" r="2.4" />
      <path d="M8.4 19H14a3.5 3.5 0 0 0 0-7H10a3.5 3.5 0 0 1 0-7h5.6" />
    </>
  ),
  shield: <path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="M3 10h18" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
  ),
  phone: (
    <path d="M6.5 3.5h3l1.4 4-2 1.4a12 12 0 0 0 5.2 5.2l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" />
  ),
  device: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.2" />
      <path d="M12 17.5h.01" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M8 3.5V7M16 3.5V7M3.5 10h17" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.3 3.6 8.5S14.4 18.1 12 20.5c-2.4-2.4-3.6-5.3-3.6-8.5S9.6 5.9 12 3.5z" />
    </>
  ),
  chat: (
    <path d="M20 15.2a2 2 0 0 1-2 2H8l-4 3.3V6.8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
  ),
  award: (
    <>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="M8.6 13.4L7.5 20.5 12 18.2l4.5 2.3-1.1-7.1" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 7.5v-4H16" />
      <path d="M4 16.5v4H8" />
      <path d="M19.2 7.5A8 8 0 0 0 6.4 6.2L4 9" />
      <path d="M4.8 16.5A8 8 0 0 0 17.6 17.8L20 15" />
    </>
  ),
  stack: (
    <>
      <rect x="3.5" y="3.5" width="17" height="7" rx="1.8" />
      <rect x="3.5" y="13.5" width="17" height="7" rx="1.8" />
    </>
  ),
  file: (
    <>
      <path d="M14 3.5H7.5A2 2 0 0 0 5.5 5.5v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V9z" />
      <path d="M14 3.5V9h5.5" />
    </>
  ),
  currency: (
    <>
      <path d="M12 3.5v17" />
      <path d="M16.5 7H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H7.5" />
    </>
  ),
  play: <path d="M9 7.2v9.6L17.5 12z" fill="currentColor" stroke="none" />,
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
