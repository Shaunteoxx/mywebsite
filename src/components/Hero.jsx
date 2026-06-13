import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { MikasaBall, Basketball, Bike, Sun, Star, Camera, Stopwatch } from "./Doodles";

const roles = ["builds web apps", "loves clean data", "plays beach volleyball", "runs half marathons", "shoots photos"];

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

  // Volleyball physics: throw it with the flick velocity, then a light
  // "balloon" gravity arcs it back down to its resting line. It bounces off
  // the viewport walls instead of sticking to them.
  const ballRef = useRef(null);
  const ballX = useMotionValue(0);
  const ballY = useMotionValue(0); // 0 = resting line; negative = above it
  const vel = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);
  const lastT = useRef(0);

  const stopSim = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = 0;
  };

  const step = (t) => {
    const dt = Math.min((t - lastT.current) / 1000, 0.032);
    lastT.current = t;

    let x = ballX.get();
    let y = ballY.get();
    let { x: vx, y: vy } = vel.current;

    vy += 1400 * dt; // gravity pulls down
    const drag = Math.exp(-1.5 * dt); // air resistance keeps the fall floaty
    vx *= drag;
    vy *= drag;
    x += vx * dt;
    y += vy * dt;

    if (y >= 0) {
      // hit the resting line — springy bounce + a little ground friction
      y = 0;
      if (vy > 0) vy = -vy * 0.68;
      vx *= 0.86;
    }

    // bounce off the viewport edges so it never sticks to the sides
    const el = ballRef.current;
    if (el) {
      const r = el.getBoundingClientRect();
      const pad = 6;
      if (r.left < pad) {
        x += pad - r.left;
        vx = Math.abs(vx) * 0.68;
      } else if (r.right > window.innerWidth - pad) {
        x -= r.right - (window.innerWidth - pad);
        vx = -Math.abs(vx) * 0.68;
      }
    }

    ballX.set(x);
    ballY.set(y);
    vel.current = { x: vx, y: vy };

    // settle once it's resting on the line with little energy left
    if (y >= -0.6 && Math.abs(vy) < 30 && Math.abs(vx) < 12) {
      ballY.set(0);
      stopSim();
      return;
    }
    rafId.current = requestAnimationFrame(step);
  };

  const throwBall = (_e, info) => {
    setTossed(true);
    if (reduced) {
      ballX.set(0);
      ballY.set(0);
      return;
    }
    vel.current = { x: info.velocity.x, y: info.velocity.y };
    lastT.current = performance.now();
    stopSim();
    rafId.current = requestAnimationFrame(step);
  };

  useEffect(() => () => stopSim(), []);

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
      <ParallaxDoodle depth={50} reduced={reduced} className="left-[6%] top-[22%] hidden sm:block">
        <Sun className="h-12 w-12 text-sun" style={{ "--r": "0deg" }} />
      </ParallaxDoodle>
      <ParallaxDoodle depth={88} reduced={reduced} className="right-[10%] top-[18%]">
        <Bike className="h-14 w-14 text-ocean" />
      </ParallaxDoodle>
      <ParallaxDoodle depth={64} reduced={reduced} className="right-[18%] bottom-[16%] hidden md:block">
        <Basketball className="h-12 w-12 text-coral" />
      </ParallaxDoodle>
      <ParallaxDoodle depth={38} reduced={reduced} className="left-[12%] bottom-[20%] hidden md:block">
        <Star className="h-9 w-9 text-grape" />
      </ParallaxDoodle>
      <ParallaxDoodle depth={76} reduced={reduced} className="left-[5%] top-[52%] hidden lg:block">
        <Camera className="h-14 w-14 text-grape" />
      </ParallaxDoodle>
      <ParallaxDoodle depth={68} reduced={reduced} className="right-[6%] top-[58%] hidden lg:block">
        <Stopwatch className="h-14 w-14 text-sky" />
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
          actually use — and chasing volleyballs (and good light for photos) on weekends.
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

      {/* Signature element: a beach volleyball you can grab and toss — it
          falls back to its floor line above the basketball with gravity. */}
      <motion.div
        ref={ballRef}
        drag
        dragMomentum={false}
        style={{ x: ballX, y: ballY }}
        whileTap={{ cursor: "grabbing", scale: 1.12 }}
        whileHover={{ scale: 1.06 }}
        onDragStart={() => {
          stopSim();
          setTossed(true);
        }}
        onDragEnd={throwBall}
        className="absolute bottom-[17%] left-1/2 z-20 -ml-9 cursor-grab touch-none"
      >
        <motion.div
          animate={reduced ? {} : { rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <MikasaBall className="h-16 w-16 drop-shadow-[0_10px_18px_rgba(27,42,65,0.30)] sm:h-20 sm:w-20" />
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
