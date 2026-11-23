"use client";

import { useEffect, useRef } from "react";

/*
  The vertical flight path on the Programs page. A faint dashed track is
  always visible; a bright gold line "flies" down it as the visitor scrolls
  through the stages. Place it inside a `relative` parent — it measures that
  parent. With reduced motion, the line is simply drawn in full.
*/
export default function FlightLine({ className = "" }: { className?: string }) {
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    const track = fill?.parentElement?.parentElement;
    if (!fill || !track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fill.style.transform = "scaleY(1)";
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      // 0 when the list's top reaches 70% down the screen, 1 when its bottom does.
      const progress = (window.innerHeight * 0.7 - rect.top) / rect.height;
      fill.style.transform = `scaleY(${Math.min(1, Math.max(0, progress))})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <span aria-hidden="true" className={`absolute top-2 bottom-2 w-0.5 ${className}`}>
      <span className="absolute inset-0 border-l-2 border-dashed border-gold/35" />
      <span
        ref={fillRef}
        className="absolute inset-0 origin-top bg-gold shadow-[0_0_12px_rgba(242,193,78,0.6)]"
        style={{ transform: "scaleY(0)" }}
      />
    </span>
  );
}
