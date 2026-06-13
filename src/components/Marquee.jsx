import { marqueeWords } from "../data";
import { Star } from "./Doodles";

// An infinite scrolling strip of words that describe Shaun — a tilted ribbon.
export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative -my-2 flex -rotate-1 overflow-hidden border-y-2 border-ink/10 bg-ink py-4 text-sand">
      <div className="flex w-max animate-marquee gap-6 whitespace-nowrap will-change-transform">
        {row.map((word, i) => (
          <span key={i} className="flex items-center gap-6 font-display text-xl font-medium sm:text-2xl">
            {word}
            <Star className="h-4 w-4 text-sun" />
          </span>
        ))}
      </div>
    </div>
  );
}
