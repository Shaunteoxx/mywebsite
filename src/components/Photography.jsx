import { Camera, Squiggle } from "./Doodles";

// Empty-state pattern: never a blank space — show frames + a friendly
// "coming soon" message (per UX guidelines), with SVG icons (no emoji).
const frames = [
  { tint: "text-coral", bg: "bg-coral/8", border: "border-coral/30" },
  { tint: "text-ocean", bg: "bg-ocean/8", border: "border-ocean/30" },
  { tint: "text-sun", bg: "bg-sun/15", border: "border-sun/40" },
];

export default function Photography() {
  return (
    <section id="photography" className="relative scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ocean-deep">Off the clock</p>
          <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
            Through my <span className="squiggle">lens</span>
          </h2>
          <Squiggle className="mx-auto mt-3 h-3 w-28 text-coral" />
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Photography is my favourite excuse to chase good light. A proper gallery is on the way.
          </p>
        </div>

        <div className="rounded-[28px] border-2 border-dashed border-ink/15 bg-white/60 p-6 sm:p-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {frames.map((f, i) => (
              <div
                key={i}
                className={`flex aspect-[4/3] items-center justify-center rounded-2xl border-2 border-dashed ${f.border} ${f.bg}`}
              >
                <Camera className={`h-10 w-10 ${f.tint} opacity-70`} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-sand px-4 py-1.5 font-display text-sm font-bold text-ink">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
              </span>
              Under construction
            </span>
            <p className="max-w-md text-ink-soft">
              The film's still developing — I'm curating my favourite shots. Check back soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
