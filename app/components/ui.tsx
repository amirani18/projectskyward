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
*/
export function SkyBlend({ stops, className = "h-28 md:h-44" }: { stops: SkyColor[]; className?: string }) {
  const gradient = `linear-gradient(to bottom, ${stops.map((s) => `var(--color-${s})`).join(", ")})`;
  return <div aria-hidden="true" className={className} style={{ backgroundImage: gradient }} />;
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
