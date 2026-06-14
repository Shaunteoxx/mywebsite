import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { ArrowUpRight, DollarSign, GraduationCap, Code2, PiggyBank, Sparkles, Braces } from "lucide-react";
import { projects } from "../data";
import { Squiggle } from "./Doodles";
import CaseStudy from "./CaseStudy";

// Faint thematic icons scattered behind the grid — fills the wide side margins
// and adds depth. Kept very low opacity + behind the bg-white/80 cards so it
// never hurts text contrast.
function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <DollarSign className="absolute left-[3%] top-[9%] h-24 w-24 -rotate-12 text-ocean/10" />
      <GraduationCap className="absolute right-[4%] top-[15%] hidden h-28 w-28 rotate-12 text-coral/10 sm:block" />
      <Braces className="absolute right-[2%] top-[50%] hidden h-20 w-20 text-grape/10 lg:block" />
      <Code2 className="absolute bottom-[14%] left-[6%] hidden h-24 w-24 rotate-6 text-grape/10 sm:block" />
      <PiggyBank className="absolute bottom-[8%] right-[7%] h-28 w-28 -rotate-6 text-sky/12" />
      <Sparkles className="absolute left-[2%] top-[46%] hidden h-16 w-16 text-sun/20 lg:block" />
      <DollarSign className="absolute left-[46%] top-[3%] h-12 w-12 rotate-12 text-sun/15" />
    </div>
  );
}

const accents = {
  coral: { text: "text-coral", soft: "bg-coral/12", ring: "group-hover:border-coral/50", chip: "bg-coral/10 text-coral" },
  ocean: { text: "text-ocean-deep", soft: "bg-ocean/12", ring: "group-hover:border-ocean/50", chip: "bg-ocean/10 text-ocean-deep" },
  grape: { text: "text-grape", soft: "bg-grape/12", ring: "group-hover:border-grape/50", chip: "bg-grape/10 text-grape" },
  sky: { text: "text-sky", soft: "bg-sky/15", ring: "group-hover:border-sky/50", chip: "bg-sky/10 text-sky" },
};

function ProjectCard({ project, index, onOpen }) {
  const a = accents[project.accent];
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduced ? {} : { rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-[28px] border-2 border-ink/10 bg-white/80 p-6 shadow-[0_18px_40px_-24px_rgba(27,42,65,0.45)] transition-colors duration-300 sm:p-8"
    >
      {/* big translucent emoji that drifts in on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-6 select-none text-[7rem] opacity-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:opacity-20"
      >
        {project.emoji}
      </span>

      <div className={`absolute inset-0 rounded-[28px] border-2 border-transparent transition-colors duration-300 ${a.ring}`} />

      <div className="relative flex items-center gap-3">
        <span className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${a.soft}`} aria-hidden>
          {project.emoji}
        </span>
        <span className={`text-xs font-bold uppercase tracking-wider ${a.text}`}>{project.period}</span>
      </div>

      <h3 className="relative mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">{project.title}</h3>
      <p className={`relative mt-1 font-display text-lg font-medium ${a.text}`}>{project.tagline}</p>

      <p className="relative mt-4 text-[15px] leading-relaxed text-ink-soft">{project.blurb}</p>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className={`rounded-full px-3 py-1 text-xs font-bold ${a.chip}`}>
            {s}
          </span>
        ))}
      </div>

      {(project.caseStudy || project.links.length > 0) && (
        <div className="relative mt-auto pt-6 flex flex-wrap gap-3">
          {project.caseStudy && (
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-display text-sm font-semibold text-sand transition-transform duration-200 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </button>
          )}
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink/15 bg-white/60 px-4 py-2 font-display text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink/40 hover:bg-white"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  return (
    <section id="work" className="relative scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <Backdrop />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ocean-deep">Stuff I've made</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
            Things I'm <span className="squiggle">proud</span> of
          </h2>
          <Squiggle className="mx-auto mt-3 h-3 w-28 text-coral" />
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            A mix of full-stack builds, a design-heavy summer project, and the community work that keeps me grounded.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={() => setActive(project)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <CaseStudy key={active.id} project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
