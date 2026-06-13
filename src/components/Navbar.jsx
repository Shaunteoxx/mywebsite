import { useEffect, useState } from "react";
import { Volleyball } from "./Doodles";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Say hi", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-4 sm:top-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-ink/10 bg-sand/80 shadow-[0_10px_30px_-12px_rgba(27,42,65,0.25)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <Volleyball className="h-7 w-7 text-coral transition-transform duration-300 group-hover:rotate-180" />
          <span>Shaun</span>
        </a>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm font-bold text-ink-soft transition-colors duration-200 hover:bg-sand-deep hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
