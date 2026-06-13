// Custom hand-drawn-ish SVG doodles — Shaun's sporty, coastal personality.
// All inherit currentColor so they can be tinted with Tailwind text-* classes.

export function Volleyball({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="27" fill="currentColor" />
      <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
        <path d="M32 5c-7 9-9 18-6 27" />
        <path d="M32 5c7 9 9 18 6 27" />
        <path d="M59 32c-10-3-19-1-27 4" />
        <path d="M5 32c10-3 19-1 27 4" />
        <path d="M14 52c5-8 12-13 21-14" />
        <path d="M50 52c-5-8-12-13-21-14" />
      </g>
    </svg>
  );
}

export function Basketball({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="27" fill="currentColor" />
      <g stroke="#7a2e12" strokeWidth="2.4" strokeLinecap="round">
        <path d="M5 32h54" />
        <path d="M32 5v54" />
        <path d="M11 13c8 8 12 19 12 19s-4 11-12 19" />
        <path d="M53 13c-8 8-12 19-12 19s4 11 12 19" />
      </g>
    </svg>
  );
}

export function Bike({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="15" cy="44" r="11" />
      <circle cx="49" cy="44" r="11" />
      <path d="M15 44l13-21h12" />
      <path d="M28 23l9 21" />
      <path d="M40 23h7" />
      <circle cx="33" cy="16" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Sun({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="12" fill="currentColor" stroke="none" />
      <g>
        <path d="M32 6v8" /><path d="M32 50v8" /><path d="M6 32h8" /><path d="M50 32h8" />
        <path d="M13 13l6 6" /><path d="M45 45l6 6" /><path d="M51 13l-6 6" /><path d="M19 45l-6 6" />
      </g>
    </svg>
  );
}

export function Squiggle({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 120 12" className={className} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M2 8c12-9 24 9 36 0s24 9 36 0 24 9 44 0" />
    </svg>
  );
}

export function Star({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M32 4c2 14 10 22 24 24-14 2-22 10-24 24-2-14-10-22-24-24 14-2 22-10 24-24z" />
    </svg>
  );
}

export const doodleMap = { Volleyball, Basketball, Bike, Sun, Star };
