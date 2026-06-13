import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { Squiggle } from "./Doodles";

const accents = {
  coral: { text: "text-coral", soft: "bg-coral/12", ring: "group-hover:border-coral/50", chip: "bg-coral/10 text-coral" },
  ocean: { text: "text-ocean-deep", soft: "bg-ocean/12", ring: "group-hover:border-ocean/50", chip: "bg-ocean/10 text-ocean-deep" },
  grape: { text: "text-grape", soft: "bg-grape/12", ring: "group-hover:border-grape/50", chip: "bg-grape/10 text-grape" },
  sky: { text: "text-sky", soft: "bg-sky/15", ring: "group-hover:border-sky/50", chip: "bg-sky/10 text-sky" },
};

function ProjectCard({ project, index }) {
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

      <ul className="relative mt-5 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-[15px] text-ink">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.text} bg-current`} />
            {h}
          </li>
        ))}
      </ul>

      <div className="relative mt-5 rounded-2xl bg-sand-deep/70 px-4 py-3 text-[14px] italic leading-relaxed text-ink-soft">
        <span className="not-italic font-bold text-ink">What I took away: </span>
        {project.learned}
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className={`rounded-full px-3 py-1 text-xs font-bold ${a.chip}`}>
            {s}
          </span>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="relative mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-display text-sm font-semibold text-sand transition-transform duration-200 hover:-translate-y-0.5"
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
  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
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
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
