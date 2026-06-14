import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Image as ImageIcon, Clapperboard } from "lucide-react";

const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src);

const accents = {
  coral: { text: "text-coral", soft: "bg-coral/12", chip: "bg-coral/10 text-coral", bar: "bg-coral" },
  ocean: { text: "text-ocean-deep", soft: "bg-ocean/12", chip: "bg-ocean/10 text-ocean-deep", bar: "bg-ocean" },
  grape: { text: "text-grape", soft: "bg-grape/12", chip: "bg-grape/10 text-grape", bar: "bg-grape" },
  sky: { text: "text-sky", soft: "bg-sky/15", chip: "bg-sky/10 text-sky", bar: "bg-sky" },
};

// A dashed drop-zone standing in for media you'll add later.
function MediaPlaceholder({ label, hint, tall = false, icon: Icon = ImageIcon }) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ink/20 bg-white/50 text-center text-ink-soft ${
        tall ? "aspect-[16/10]" : "aspect-[16/7]"
      }`}
    >
      <Icon className="h-7 w-7 opacity-60" />
      <p className="font-display text-sm font-semibold text-ink">{label}</p>
      {hint && <p className="max-w-xs px-4 text-xs">{hint}</p>}
    </div>
  );
}

// A labelled section heading.
function Heading({ kicker, children, accent }) {
  return (
    <div className="mb-4">
      {kicker && (
        <p className={`font-display text-xs font-bold uppercase tracking-[0.2em] ${accent}`}>{kicker}</p>
      )}
      <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">{children}</h2>
    </div>
  );
}

// A soft "fill this in" note for copy you haven't written yet.
function Todo({ children }) {
  return (
    <p className="rounded-xl border border-dashed border-ocean/40 bg-ocean/5 px-4 py-3 text-sm italic text-ink-soft">
      ✍️ {children}
    </p>
  );
}

export default function CaseStudy({ project, onClose }) {
  const a = accents[project.accent] ?? accents.ocean;
  const s = project.study; // real case-study content, when filled in

  // Sequential section numbers that skip any section we don't render.
  let n = 0;
  const num = () => String(++n).padStart(2, "0");

  // Close on Escape + lock background scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[70] overflow-y-auto bg-sand"
    >
      {/* sticky top bar */}
      <div className="sticky top-0 z-10 border-b border-ink/10 bg-sand/85 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-ink/15 bg-white/70 px-4 py-2 font-display text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink/40 hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </button>
          <span className={`font-display text-sm font-bold ${a.text}`}>{project.title}</span>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-8">
        {/* 1 · Header */}
        <header>
          <div className="flex items-center gap-3">
            <span className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${a.soft}`} aria-hidden>
              {project.emoji}
            </span>
            <span className={`text-xs font-bold uppercase tracking-wider ${a.text}`}>{project.period}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className={`mt-2 font-display text-xl font-medium ${a.text}`}>{project.tagline}</p>

          {/* meta grid */}
          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border-2 border-ink/10 bg-white/70 p-5 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-ink-soft">My role</dt>
              <dd className="mt-1 font-display text-sm font-semibold text-ink">{s?.role ?? "Add your role"}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-ink-soft">Team</dt>
              <dd className="mt-1 font-display text-sm font-semibold text-ink">{s?.team ?? "e.g. 4 people"}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-ink-soft">Timeline</dt>
              <dd className="mt-1 font-display text-sm font-semibold text-ink">{project.period}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-ink-soft">Links</dt>
              <dd className="mt-1">
                {project.links.length > 0 ? (
                  project.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className={`inline-flex items-center gap-1 font-display text-sm font-semibold ${a.text} hover:underline`}
                    >
                      {l.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))
                ) : (
                  <span className="font-display text-sm font-semibold text-ink-soft">Add demo / repo</span>
                )}
              </dd>
            </div>
          </dl>
        </header>

        {/* Hero visual */}
        <div className="mt-8">
          {s?.hero ? (
            isVideo(s.hero) ? (
              <video
                src={s.hero}
                autoPlay
                muted
                loop
                playsInline
                className="mx-auto max-h-[78vh] rounded-[28px] border-2 border-ink/10 shadow-[0_24px_50px_-24px_rgba(27,42,65,0.5)]"
              />
            ) : (
              <img
                src={s.hero}
                alt={`${project.title} preview`}
                className="mx-auto max-h-[78vh] rounded-[28px] border-2 border-ink/10"
              />
            )
          ) : (
            <MediaPlaceholder
              tall
              icon={Clapperboard}
              label="Drop the hero shot or a demo GIF here"
              hint="A short screen-recording of the app in action is the single most convincing thing on this page."
            />
          )}
        </div>

        {/* The problem */}
        <section className="mt-12">
          <Heading kicker={num()} accent={a.text}>The problem</Heading>
          <p className="text-lg leading-relaxed text-ink">{s?.problem ?? project.blurb}</p>
          {!s?.problem && (
            <div className="mt-3">
              <Todo>Expand to 2–3 sentences: who it was for, and why it mattered.</Todo>
            </div>
          )}
        </section>

        {/* What I did */}
        <section className="mt-12">
          <Heading kicker={num()} accent={a.text}>What I did</Heading>
          {!s && (
            <Todo>One short paragraph on your specific contribution — “I built / designed / owned…”.</Todo>
          )}
          {s?.contribution && <p className="text-lg leading-relaxed text-ink">{s.contribution}</p>}
          {s?.features ? (
            <ul className="mt-4 space-y-3">
              {s.features.map((f) => (
                <li key={f.label} className="text-[15px] leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.bar}`} />
                    <span className="text-ink">
                      <span className="font-bold">{f.label}</span>
                      {f.detail && <span className="text-ink-soft"> — {f.detail}</span>}
                    </span>
                  </div>
                  {f.items && (
                    <ul className="ml-6 mt-1.5 space-y-1.5">
                      {f.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 text-ink-soft">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-4 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[15px] text-ink">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.bar}`} />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Gallery — only when there are visuals (or it's the empty template) */}
        {(!s || s.gallery) && (
          <section className="mt-12">
            <Heading kicker={num()} accent={a.text}>A closer look</Heading>
            {s?.gallery ? (
              <div className="grid gap-5 sm:grid-cols-3">
                {s.gallery.map((g) => (
                  <figure key={g.src}>
                    <img
                      src={g.src}
                      alt={g.caption}
                      loading="lazy"
                      className="w-full rounded-2xl border-2 border-ink/10 bg-white"
                    />
                    {g.caption && (
                      <figcaption className="mt-2 text-center text-xs leading-relaxed text-ink-soft">
                        {g.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <MediaPlaceholder label="Drop screenshot here" hint="Key screen or feature" />
                <MediaPlaceholder label="Drop screenshot here" hint="Another flow or detail" />
              </div>
            )}
          </section>
        )}

        {/* Process & decisions */}
        <section className="mt-12">
          <Heading kicker={num()} accent={a.text}>Process &amp; key decisions</Heading>
          {s?.process ? (
            <ol className="space-y-3">
              {s.process.map((p, i) => (
                <li
                  key={p.title}
                  className="flex gap-3 rounded-2xl border-2 border-ink/10 bg-white/70 p-4"
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-bold text-sand ${a.bar}`}
                  >
                    {i + 1}
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink">
                    <span className="font-bold">{p.title}: </span>
                    <span className="text-ink-soft">{p.detail}</span>
                  </p>
                </li>
              ))}
            </ol>
          ) : (
            <Todo>2–3 decisions and the trade-offs — why this stack, what you scoped out, what you’d change.</Todo>
          )}
        </section>

        {/* Challenges */}
        <section className="mt-12">
          <Heading kicker={num()} accent={a.text}>Challenges</Heading>
          {s?.challenges ? (
            <p className="text-lg leading-relaxed text-ink">{s.challenges}</p>
          ) : (
            <Todo>One or two real hurdles and how you solved them.</Todo>
          )}
        </section>

        {/* Outcome */}
        <section className="mt-12">
          <Heading kicker={num()} accent={a.text}>Outcome &amp; impact</Heading>
          {s?.outcome ? (
            <p className="text-lg leading-relaxed text-ink">{s.outcome}</p>
          ) : (
            <Todo>What shipped + any numbers (users, items, performance). Metrics make this section land.</Todo>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className={`rounded-full px-3 py-1 text-xs font-bold ${a.chip}`}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Takeaway */}
        <section className="mt-12 rounded-[28px] border-2 border-ink/10 bg-white/80 p-7">
          <Heading kicker={num()} accent={a.text}>What I took away</Heading>
          <p className="text-lg italic leading-relaxed text-ink-soft">{project.learned}</p>
        </section>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-base font-semibold text-sand transition-transform duration-200 hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all work
          </button>
        </div>
      </article>
    </motion.div>
  );
}
