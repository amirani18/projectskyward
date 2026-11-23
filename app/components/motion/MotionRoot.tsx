"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
  Drives scroll reveals for any element marked `data-reveal`.

  Server components only add the attribute; this one client component
  (mounted once in the root layout) watches them. Elements already on
  screen when a page first loads are shown instantly, so nothing flickers,
  and nothing is ever hidden for visitors who prefer reduced motion.
*/
export default function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const pending = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));

    // First load only: show what is already in view without animating it.
    if (!root.classList.contains("motion-ready")) {
      for (const el of pending) {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.classList.add("is-visible");
      }
      root.classList.add("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    for (const el of pending) {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
