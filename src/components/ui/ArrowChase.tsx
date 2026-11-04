/** Hover chase arrow for accent buttons. Parent must include `group`. */
export function ArrowChase() {
  return (
    <span className="relative inline-block h-3 w-3 overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 12 12"
        className="absolute inset-0 h-3 w-3 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-full"
        fill="none"
      >
        <path
          d="M2.5 6h7M6.5 3.5 9.5 6l-3 2.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        viewBox="0 0 12 12"
        className="absolute inset-0 h-3 w-3 -translate-x-full transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0"
        fill="none"
      >
        <path
          d="M2.5 6h7M6.5 3.5 9.5 6l-3 2.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
