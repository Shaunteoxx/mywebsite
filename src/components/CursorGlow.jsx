import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

// Full-viewport background layer with a soft warm glow that trails the cursor.
// Sits behind all content; never intercepts pointer events.
export default function CursorGlow() {
  const reduceMotion = useReducedMotion();

  // Raw pointer position; default to center so SSR / no-mouse looks intentional.
  const x = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const y = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  // Spring smoothing so the glow lazily trails the cursor instead of snapping.
  const springX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.8 });

  // Hide on touch / when the pointer leaves the window so it doesn't sit stale.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const hide = () => setVisible(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", move);
    document.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", move);
      document.removeEventListener("mouseleave", hide);
    };
  }, [reduceMotion, x, y]);

  // Reduced motion: render a single calm static glow, no tracking.
  if (reduceMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60vmax 60vmax at 50% 30%, rgba(255,201,60,0.18), transparent 70%)",
        }}
      />
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Single warm glow (sun -> coral) that trails the cursor */}
      <motion.div
        className="absolute h-[24vmax] w-[24vmax] rounded-full blur-2xl"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(255,201,60,0.60) 0%, rgba(255,107,92,0.40) 45%, transparent 72%)",
        }}
        animate={{ opacity: visible ? 1 : 0.4 }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}
