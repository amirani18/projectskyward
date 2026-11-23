import type { CSSProperties } from "react";

// A seeded (deterministic) starfield, so server and client render the same
// positions. Twinkling is CSS-only and switched off for reduced motion.
function makeStars(count: number, seed: number) {
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => ({
    left: rnd() * 100,
    top: rnd() * 100,
    size: rnd() < 0.82 ? 2 : 3,
    duration: 3 + rnd() * 4,
    delay: rnd() * 5,
  }));
}

export default function Starfield({ count = 48, seed = 11, className = "" }: { count?: number; seed?: number; className?: string }) {
  const stars = makeStars(count, seed);
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {stars.map((st, i) => (
        <span
          key={i}
          className="star absolute rounded-full bg-paper opacity-40"
          style={
            {
              left: `${st.left}%`,
              top: `${st.top}%`,
              width: st.size,
              height: st.size,
              "--twinkle": `${st.duration.toFixed(2)}s`,
              "--twinkle-delay": `${st.delay.toFixed(2)}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
