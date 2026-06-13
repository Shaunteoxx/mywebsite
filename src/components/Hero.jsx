import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Volleyball, Basketball, Bike, Sun, Star } from "./Doodles";

const roles = ["builds web apps", "loves clean data", "plays beach volleyball", "rides bikes", "ships fast"];

// Floating doodles get a parallax offset based on cursor position.
function ParallaxDoodle({ children, depth, className, reduced }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 18 });
  const sy = useSpring(y, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e) => {
      const dx = (e.clientX / window.innerWidth - 0.5) * depth;
      const dy = (e.clientY / window.innerHeight - 0.5) * depth;
      x.set(dx);
      y.set(dy);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [depth, reduced, x, y]);

  return (
    <motion.div style={{ x: sx, y: sy }} className={`pointer-events-none absolute ${className}`}>
      <div className={reduced ? "" : "float-slow"}>{children}</div>
    </motion.div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [tossed, setTossed] = useState(false);
  const constraints = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      ref={constraints}
      className="dot-grid relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8"
    >
      {/* soft gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-16 h-80 w-80 rounded-full bg-sun/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-24 h-96 w-96 rounded-full bg-ocean/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />

      {/* floating doodles */}
      <ParallaxDoodle depth={28} reduced={reduced} className="left-[6%] top-[22%] hidden sm:block">
        <Sun className="h-12 w-12 text-sun" style={{ "--r": "0deg" }} />
      </ParallaxDoodle>
      <ParallaxDoodle depth={50} reduced={reduced} className="right-[10%] top-[18%]">
        <Bike className="h-14 w-14 text-ocean" />
      </ParallaxDoodle>
      <ParallaxDoodle depth={36} reduced={reduced} className="right-[18%] bottom-[16%] hidden md:block">
        <Basketball className="h-12 w-12 text-coral" />
      </ParallaxDoodle>
      <ParallaxDoodle depth={20} reduced={reduced} className="left-[12%] bottom-[20%] hidden md:block">
        <Star className="h-9 w-9 text-grape" />
      </ParallaxDoodle>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-ocean/30 bg-white/70 px-4 py-1.5 text-sm font-bold text-ocean-deep backdrop-blur"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ocean/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ocean" />
          </span>
          Open to internships · Singapore
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-7xl"
        >
          Hey, I'm <span className="squiggle">Shaun</span> 👋
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 font-display text-2xl font-medium text-ink-soft sm:text-3xl"
        >
          <span>An IS student who </span>
          <span className="relative inline-grid">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={roleIndex}
                initial={{ y: "0.7em", opacity: 0, rotateX: -45 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: "-0.7em", opacity: 0, rotateX: 45 }}
                transition={{ duration: 0.45 }}
                className="font-bold text-coral [grid-area:1/1] whitespace-nowrap"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          I'm studying <strong className="text-ink">Information Systems at SMU</strong>, doubling up on{" "}
          <strong className="text-ink">Business Analytics</strong> and{" "}
          <strong className="text-ink">FinTech</strong>. I like turning messy ideas into things people
          actually use — and chasing volleyballs into the sand on weekends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-ink px-7 py-3.5 font-display text-base font-semibold text-sand shadow-[0_14px_30px_-12px_rgba(27,42,65,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-ocean-deep"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-ink/15 bg-white/60 px-7 py-3.5 font-display text-base font-semibold text-ink backdrop-blur transition-colors duration-200 hover:border-ink/40 hover:bg-white"
          >
            Say hi
          </a>
        </motion.div>
      </div>

      {/* Signature element: a beach volleyball you can grab and toss around */}
      <motion.div
        drag
        dragConstraints={constraints}
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 14 }}
        whileTap={{ cursor: "grabbing", scale: 1.1 }}
        whileHover={{ scale: 1.06 }}
        onDragStart={() => setTossed(true)}
        className="absolute bottom-10 left-1/2 z-20 -ml-9 cursor-grab touch-none"
      >
        <motion.div
          animate={reduced ? {} : { rotate: [0, 14, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Volleyball className="h-16 w-16 text-coral drop-shadow-[0_10px_18px_rgba(255,107,92,0.45)] sm:h-20 sm:w-20" />
        </motion.div>
        <AnimatePresence>
          {!tossed && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 font-display text-xs font-medium text-sand"
            >
              toss me! 🏐
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
