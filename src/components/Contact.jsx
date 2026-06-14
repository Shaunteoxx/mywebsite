import { Mail, ArrowUpRight } from "lucide-react";
import { socials } from "../data";
import { Volleyball, Sun } from "./Doodles";

function Linkedin({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const iconMap = { mail: Mail, linkedin: Linkedin };

export default function Contact() {
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden bg-ink px-5 py-20 text-sand sm:px-8 sm:py-28">
      <Sun aria-hidden className="float-slow pointer-events-none absolute -left-6 top-10 h-24 w-24 text-sun/30" />
      <Volleyball aria-hidden className="float-slow pointer-events-none absolute -right-4 bottom-8 h-28 w-28 text-coral/40" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sun">Let's talk</p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-6xl">
          Got a project, a role, or a <span className="text-coral">volleyball</span> game?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-sand/70">
          I'm always up for interesting problems and good people. Drop me a line — I reply faster than I serve.
        </p>

        <a
          href="mailto:shaunteo2003@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun px-8 py-4 font-display text-lg font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5 hover:bg-coral hover:text-sand"
        >
          <Mail className="h-5 w-5" />
          shaunteo2003@gmail.com
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {socials.map((s) => {
            const Icon = iconMap[s.kind];
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.kind === "linkedin" ? "_blank" : undefined}
                rel={s.kind === "linkedin" ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-sand/20 px-5 py-2.5 font-display text-sm font-semibold text-sand transition-colors duration-200 hover:border-sand/50 hover:bg-sand/10"
              >
                <Icon className="h-4 w-4" />
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>
            );
          })}
        </div>

        <p className="mt-14 text-sm text-sand/50">
          Designed & built by Shaun Teo · 2026 · Vue at work, React for this one 🙂
        </p>
      </div>
    </footer>
  );
}
