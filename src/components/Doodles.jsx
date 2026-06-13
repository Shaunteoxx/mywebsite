// Custom hand-drawn-ish SVG doodles — Shaun's sporty, coastal personality.
// All inherit currentColor so they can be tinted with Tailwind text-* classes.

export function Volleyball({ className = "", ...props }) {
  // Classic 6-panel volleyball: three identical panel groups rotated 120°,
  // each a pair of seams sweeping from a pole plus a wrapping curve.
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="27" fill="currentColor" />
      <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {[0, 120, 240].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 32 32)`}>
            <path d="M32 6c-4.5 9-6 17-3.5 24" />
            <path d="M32 6c4.5 9 6 17 3.5 24" />
            <path d="M28.5 30c-6.5 1.5-12.5 5-17.5 10.5" />
          </g>
        ))}
      </g>
    </svg>
  );
}

// Full-colour Mikasa BV550C-WYBR beach volleyball: white ball with a yellow
// equator band, a blue panel down the left, an orange tip top-left, and the
// classic curved seams.
export function MikasaBall({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <defs>
        <clipPath id="mikasa-ball">
          <circle cx="32" cy="32" r="27" />
        </clipPath>
      </defs>
      <g clipPath="url(#mikasa-ball)">
        {/* white base */}
        <rect x="0" y="0" width="64" height="64" fill="#fdfdfb" />
        {/* yellow equator band */}
        <path d="M1 27Q32 20 63 27L63 39Q32 46 1 39Z" fill="#f4c333" />
        {/* blue panels down both sides */}
        <path d="M-2 -2L26 -2C15 20 15 44 26 66L-2 66Z" fill="#1f6fb2" />
        <path d="M66 -2L38 -2C49 20 49 44 38 66L66 66Z" fill="#1f6fb2" />
        {/* orange tips at the top edges */}
        <path d="M-2 -2L17 -2C12 12 9 21 7 31C2 22 -1 10 -2 -2Z" fill="#ef7a3a" />
        <path d="M66 -2L47 -2C52 12 55 21 57 31C62 22 65 10 66 -2Z" fill="#ef7a3a" />
        {/* curved seams */}
        <g stroke="#16243a" strokeOpacity="0.5" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d="M26 -2C15 20 15 44 26 66" />
          <path d="M38 -2C49 20 49 44 38 66" />
          <path d="M1 27Q32 20 63 27" />
          <path d="M1 39Q32 46 63 39" />
        </g>
        {/* branding */}
        <g fontFamily="'Arial Narrow', Arial, sans-serif" textAnchor="middle" fontWeight="800">
          <text x="32" y="18" fontSize="4.6" fill="#16243a">BEACH PRO</text>
          <text x="32" y="26" fontSize="5" fill="#1f6fb2">★</text>
          <text x="32" y="35.6" fontSize="7" fill="#1f6fb2" letterSpacing="-0.4">MIKASA</text>
          <text x="32" y="43.5" fontSize="4.2" fill="#1f6fb2">FIVB</text>
          <text x="32" y="48.5" fontSize="2.6" fill="#16243a" fontWeight="700">OFFICIAL GAME BALL</text>
        </g>
      </g>
      <circle cx="32" cy="32" r="27" fill="none" stroke="#16243a" strokeOpacity="0.3" strokeWidth="2" />
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

export function Camera({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true" {...props}>
      {/* viewfinder hump */}
      <path d="M22 16h12l3 6H19l3-6z" fill="currentColor" />
      {/* body */}
      <rect x="6" y="20" width="52" height="34" rx="9" fill="currentColor" />
      {/* lens */}
      <circle cx="32" cy="38" r="11" fill="#fff" />
      <circle cx="32" cy="38" r="6" fill="currentColor" />
      {/* flash / shutter dot */}
      <circle cx="48" cy="28" r="2.6" fill="#fff" />
    </svg>
  );
}

export function Stopwatch({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true" {...props}>
      {/* top stem + button */}
      <rect x="26" y="3" width="12" height="6" rx="2.5" fill="currentColor" />
      <rect x="29" y="8" width="6" height="6" fill="currentColor" />
      {/* side crown button */}
      <path d="M50 16l5-5" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* watch body */}
      <circle cx="32" cy="39" r="22" fill="currentColor" />
      <circle cx="32" cy="39" r="16" fill="#fff" />
      {/* hand + pivot */}
      <path d="M32 39l9-8" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="32" cy="39" r="2.8" fill="currentColor" />
    </svg>
  );
}

export const doodleMap = { Volleyball, Basketball, Bike, Sun, Star, Camera, Stopwatch };
