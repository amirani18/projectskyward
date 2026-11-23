import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import Starfield from "./motion/Starfield";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({
  children,
  tone = "gold",
  ...rest
}: { children: ReactNode; tone?: "gold" | "ink" | "amber" } & Omit<ComponentProps<"p">, "children" | "className">) {
  const color = { gold: "text-gold", ink: "text-predawn", amber: "text-amber" }[tone];
  return (
    <p {...rest} className={`mb-3 font-mono text-[13px] uppercase tracking-[0.2em] ${color}`}>
      {children}
    </p>
  );
}

export function Heading({
  children,
  as: Tag = "h2",
  className = "",
  ...rest
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
} & Omit<ComponentProps<"h2">, "children" | "className">) {
  return (
    <Tag {...rest} className={`font-display font-semibold tracking-[-0.03em] text-balance leading-[1.02] ${className}`}>
      {children}
    </Tag>
  );
}

type Variant = "gold" | "outline" | "night" | "outline-ink";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-night hover:bg-gold-bright",
  outline: "border-[1.5px] border-[#3a4c86] text-paper hover:border-gold hover:text-gold",
  night: "bg-night text-paper hover:bg-predawn",
  "outline-ink": "border-[1.5px] border-night text-night hover:bg-night hover:text-paper",
};

const base =
  "inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 font-semibold transition-[color,background-color,border-color,scale,translate] duration-200 motion-safe:active:scale-[0.97]";

export function ButtonLink({
  variant = "gold",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function ButtonAnchor({
  variant = "gold",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function buttonClass(variant: Variant = "gold") {
  return `${base} ${variants[variant]}`;
}

type SkyColor = "night" | "dusk" | "predawn" | "sky" | "mist" | "dawn" | "gold-soft" | "gold";

/*
  A purely decorative gradient strip that carries the sky from one section's
  color into the next — used where the page crosses from dark to light, so
  no text ever sits on the mid-tones.

  To keep the dark-to-light crossing easy on the eyes:
  - each segment is eased (smoothstep), so the strip starts and ends with no
    visible "edge" against the flat sections around it
  - colors are mixed in OKLab, which stays clean through the midtones
    instead of going grey
  - strips are tall, scaling with how many colors they pass through
*/
const EASE_STEPS = 8;
const smoothstep = (t: number) => t * t * (3 - 2 * t);

function easedGradient(stops: SkyColor[]) {
  const parts: string[] = [];
  const segments = stops.length - 1;
  stops.slice(0, -1).forEach((from, i) => {
    const to = stops[i + 1];
    for (let k = 0; k < EASE_STEPS; k++) {
      const t = k / EASE_STEPS;
      const mix = (smoothstep(t) * 100).toFixed(1);
      const pos = (((i + t) / segments) * 100).toFixed(2);
      parts.push(`color-mix(in oklab, var(--color-${to}) ${mix}%, var(--color-${from})) ${pos}%`);
    }
  });
  parts.push(`var(--color-${stops[stops.length - 1]}) 100%`);
  return `linear-gradient(to bottom, ${parts.join(", ")})`;
}

const BLEND_HEIGHT: Record<number, string> = {
  1: "h-56 md:h-80",
  2: "h-72 md:h-[26rem]",
  3: "h-80 md:h-[30rem]",
};

export function SkyBlend({ stops, className }: { stops: SkyColor[]; className?: string }) {
  const height = className ?? BLEND_HEIGHT[Math.min(stops.length - 1, 3)];
  return <div aria-hidden="true" className={height} style={{ backgroundImage: easedGradient(stops) }} />;
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-night to-dusk">
      <Starfield count={28} seed={23} />
      <Container className="relative py-20 md:py-24">
        <div className="intro-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <Heading as="h1" data-delay="1" className="intro-rise max-w-4xl text-5xl md:text-7xl">
          {title}
        </Heading>
        {children && (
          <div data-delay="2" className="intro-rise mt-6 max-w-2xl text-lg leading-relaxed text-haze md:text-xl">
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
