"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/*
  The hero owl. Three layers of motion, each on its own CSS property so
  they combine instead of fighting:
  - parallax (transform, set here from scroll position): the owl climbs
    as the visitor scrolls, as if it's taking off
  - float (translate/rotate, CSS keyframes in globals.css)
  - the gold flight path's dots stream toward the sky (stroke-dashoffset)
  All of it is skipped for visitors who prefer reduced motion.
*/
export default function HeroOwl() {
  const owlRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, 900);
      if (owlRef.current) owlRef.current.style.transform = `translate3d(0, ${-y * 0.22}px, 0)`;
      if (pathRef.current) pathRef.current.style.transform = `translate3d(0, ${-y * 0.1}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative flex w-full max-w-md flex-1 justify-center">
      <svg
        ref={pathRef}
        aria-hidden="true"
        viewBox="0 0 460 420"
        className="absolute inset-0 h-full w-full will-change-transform"
      >
        <path
          className="flight-path"
          d="M20 400 C 120 360, 160 250, 230 210 S 380 90, 440 20"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="2.5"
          strokeDasharray="2 10"
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>
      <div ref={owlRef} className="relative w-full max-w-[420px] will-change-transform">
        <div className="owl-float">
          <Image
            src="/brand/owl.png"
            alt="The Project Skyward owl in flight, circled by a golden trail"
            width={420}
            height={420}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
