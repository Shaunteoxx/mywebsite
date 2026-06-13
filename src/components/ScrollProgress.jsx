import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Basketball } from "./Doodles";

// Signature touch #2: a basketball that dribbles across the top of the page,
// rolling forward as you scroll. The progress line is its "court".
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const left = useTransform(progress, [0, 1], ["0%", "100%"]);
  const spin = useTransform(progress, [0, 1], [0, 1080]);

  return (
    <div className="fixed inset-x-0 top-0 z-40 h-0.5">
      <motion.div
        className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-coral via-sun to-ocean"
        style={{ scaleX: progress, width: "100%" }}
      />
      <motion.div
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ left, rotate: spin }}
        aria-hidden="true"
      >
        <Basketball className="h-5 w-5 text-coral drop-shadow-sm" />
      </motion.div>
    </div>
  );
}
