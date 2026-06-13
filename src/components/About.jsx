import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, BarChart3, Sparkles, RefreshCw } from "lucide-react";
import { skillGroups, funFacts, certs } from "../data";
import { Volleyball, Bike, Basketball } from "./Doodles";

const groupIcons = {
  code: Code2,
  chart: BarChart3,
  spark: Sparkles,
};

const hobbies = [
  { name: "Beach volleyball", Icon: Volleyball, tint: "text-coral", bg: "bg-coral/12" },
  { name: "Cycling", Icon: Bike, tint: "text-ocean-deep", bg: "bg-ocean/12" },
  { name: "Basketball", Icon: Basketball, tint: "text-sun", bg: "bg-sun/20" },
];

export default function About() {
  const [fact, setFact] = useState(0);
  const shuffle = () => setFact((f) => (f + 1) % funFacts.length);

  return (
    <section id="about" className="relative scroll-mt-24 bg-sand-deep/50 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ocean-deep">The human bit</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">A little about me</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Intro + fun fact */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="rounded-[28px] border-2 border-ink/10 bg-white/80 p-7 sm:p-9">
              <p className="text-lg leading-relaxed text-ink">
                I'm a <strong>chill, curious builder</strong> who genuinely enjoys the messy middle of a project —
                wrangling data, sketching UI, and getting something working before a deadline. The Business
                Analytics + FinTech double track means I get to live in both the <em>numbers</em> and the{" "}
                <em>product</em>, which suits me.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                When I'm not at a laptop, I'm probably outside — diving for a dig on the sand court, on a long ride,
                or running a fast break.
              </p>
            </div>

            <button
              onClick={shuffle}
              className="group flex items-start gap-4 rounded-[28px] border-2 border-dashed border-ocean/40 bg-ocean/8 p-7 text-left transition-colors duration-200 hover:bg-ocean/15"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ocean text-sand transition-transform duration-300 group-hover:rotate-180">
                <RefreshCw className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-sm font-semibold uppercase tracking-wider text-ocean-deep">
                  Fun fact · tap to shuffle
                </span>
                <span className="mt-1 block min-h-[3.5rem] text-lg font-semibold text-ink">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={fact}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="block"
                    >
                      {funFacts[fact]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </button>
          </div>

          {/* Hobbies */}
          <div className="lg:col-span-2 rounded-[28px] border-2 border-ink/10 bg-white/80 p-7 sm:p-9">
            <h3 className="font-display text-xl font-semibold text-ink">Off the clock</h3>
            <ul className="mt-5 space-y-4">
              {hobbies.map(({ name, Icon, tint, bg }) => (
                <li key={name} className="flex items-center gap-4">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl ${bg}`}>
                    <Icon className={`h-9 w-9 ${tint}`} />
                  </span>
                  <span className="font-display text-lg font-medium text-ink">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <h3 className="text-center font-display text-2xl font-semibold text-ink">What's in my toolkit</h3>
          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = groupIcons[group.icon];
              return (
                <div key={group.label} className="rounded-[28px] border-2 border-ink/10 bg-white/80 p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-sand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="font-display text-lg font-semibold text-ink">{group.label}</h4>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="cursor-default rounded-full border border-ink/12 bg-sand px-3 py-1.5 text-sm font-bold text-ink-soft transition-colors duration-200 hover:border-coral/50 hover:bg-coral/10 hover:text-coral"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certs */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {certs.map((cert) => (
            <div key={cert.title} className="flex flex-col rounded-[28px] border-2 border-ink/10 bg-white/80 p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sun" />
                <span className="text-xs font-bold uppercase tracking-wider text-ocean-deep">{cert.issuer}</span>
              </div>
              <h4 className="mt-2 font-display text-lg font-semibold text-ink">{cert.title}</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{cert.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
