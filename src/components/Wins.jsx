import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { wins } from "../data";
import { Squiggle } from "./Doodles";

const accents = {
  coral: { chip: "bg-coral/12 text-coral", ring: "hover:border-coral/50", bar: "bg-coral" },
  ocean: { chip: "bg-ocean/12 text-ocean-deep", ring: "hover:border-ocean/50", bar: "bg-ocean" },
  grape: { chip: "bg-grape/12 text-grape", ring: "hover:border-grape/50", bar: "bg-grape" },
  sky: { chip: "bg-sky/15 text-sky", ring: "hover:border-sky/50", bar: "bg-sky" },
  sun: { chip: "bg-sun/20 text-ink", ring: "hover:border-sun/60", bar: "bg-sun" },
};

export default function Wins() {
  const reduced = useReducedMotion();
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    // active card = whichever is nearest the left edge
    const card = el.firstElementChild;
    const step = card ? card.offsetWidth + 20 : el.clientWidth;
    setActive(Math.round(el.scrollLeft / step));
  };

  useEffect(() => {
    const el = trackRef.current;
    update();
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: reduced ? "auto" : "smooth" });
  };

  const scrollToCard = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i];
    card?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section id="proud" className="relative scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ocean-deep">Highlights</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
              A few <span className="squiggle">proud</span> moments
            </h2>
            <Squiggle className="mt-3 h-3 w-28 text-coral" />
          </div>

          {/* Arrow controls — hidden on touch-first small screens (swipe instead) */}
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              disabled={atStart}
              aria-label="Previous highlights"
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border-2 border-ink/15 bg-white/70 text-ink transition-colors duration-200 hover:border-ink/40 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              disabled={atEnd}
              aria-label="Next highlights"
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border-2 border-ink/15 bg-white/70 text-ink transition-colors duration-200 hover:border-ink/40 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scroll rail */}
        <div
          ref={trackRef}
          role="region"
          aria-label="Things I'm proud of — scroll horizontally"
          tabIndex={0}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean/60 [&::-webkit-scrollbar]:hidden"
          style={{ overscrollBehaviorX: "contain" }}
        >
          {wins.map((w) => {
            const a = accents[w.accent] ?? accents.ocean;
            return (
              <article
                key={w.title}
                className={`group relative flex w-[82%] shrink-0 snap-start flex-col rounded-[28px] border-2 border-ink/10 bg-white/80 p-7 shadow-[0_18px_40px_-24px_rgba(27,42,65,0.45)] transition-colors duration-300 sm:w-[330px] ${a.ring}`}
              >
                <span aria-hidden className="text-4xl">{w.emoji}</span>
                <span className={`mt-4 w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${a.chip}`}>
                  {w.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink">{w.title}</h3>
                <p className="mt-1 font-display text-lg font-medium text-ink-soft">{w.stat}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{w.blurb}</p>
              </article>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="mt-2 flex justify-center gap-2 sm:justify-start" role="tablist" aria-label="Highlight slides">
          {wins.map((w, i) => (
            <button
              key={w.title}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`Go to ${w.title}`}
              aria-selected={i === active}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                i === active ? `w-6 ${accents[w.accent]?.bar ?? "bg-ink"}` : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
