import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "ink" | "amber" }) {
  const color = { gold: "text-gold", ink: "text-predawn", amber: "text-amber" }[tone];
  return <p className={`mb-3 font-mono text-[13px] uppercase tracking-[0.2em] ${color}`}>{children}</p>;
}

export function Heading({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`font-display font-semibold tracking-[-0.03em] text-balance leading-[1.02] ${className}`}>
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
  "inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 font-semibold transition-colors";

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
    <section className="bg-linear-to-b from-night to-dusk">
      <Container className="py-20 md:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" className="max-w-4xl text-5xl md:text-7xl">
          {title}
        </Heading>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-haze md:text-xl">{children}</div>}
      </Container>
    </section>
  );
}
