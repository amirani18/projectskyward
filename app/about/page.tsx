import type { Metadata } from "next";
import Image from "next/image";
import { SkyBlend, ButtonLink, Container, Eyebrow, Heading, PageHero } from "../components/ui";
import { partners } from "../content/site";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Why Project Skyward exists, and how wisdom and community help refugee youth rise through education.",
};

const beliefs = [
  {
    title: "Wisdom, shared",
    body: "The owl in our logo stands for the guidance every new student deserves: people who have walked the path, explaining what nobody else will.",
  },
  {
    title: "Every student can rise",
    body: "Every student — regardless of race, culture or religion — deserves the chance to thrive in school and beyond.",
  },
  {
    title: "Community-powered",
    body: "We are a nonprofit. Volunteers, partners and donors make every tutoring session and every event possible.",
  },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Helping refugee youth find their footing — and then fly.">
        <p>
          Each year, thousands of refugee students enter the U.S. school system. Many arrive mid-year, in a new
          language, placed grades behind where they belong. Project Skyward exists to close that gap.
        </p>
      </PageHero>

      <section className="bg-linear-to-b from-dusk to-predawn">
        <Container className="grid gap-12 py-20 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow data-reveal>Why we exist</Eyebrow>
            <Heading data-reveal data-delay="1" className="text-4xl">Talent arrives. Guidance often doesn&apos;t.</Heading>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-haze">
            <p>
              Newly arrived students face a school system nobody has explained to them. Specialized support is crucial
              to bridging the academic gaps many of them face, so they can thrive and integrate successfully.
            </p>
            <p>
              Our programs support both academic achievement and emotional well-being — from a student&apos;s first week
              in an American classroom to their first weeks of college.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-predawn">
        <Container className="py-20 md:py-24">
          <Eyebrow data-reveal>What we believe</Eyebrow>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {beliefs.map((b, i) => (
              <li data-reveal data-delay={String((i % 4) + 1)} key={b.title} className="rounded-3xl border-t-[3px] border-gold bg-predawn-deep p-7">
                <h3 className="font-display text-2xl font-semibold">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-haze">{b.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <SkyBlend stops={["predawn", "sky"]} />
      <section className="bg-linear-to-b from-sky via-mist to-dawn text-night">
        <Container className="py-20 md:py-24">
          <Eyebrow data-reveal tone="ink">Partners &amp; sponsors</Eyebrow>
          <Heading data-reveal data-delay="1" className="text-4xl">The people who give us lift.</Heading>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <li data-reveal data-delay={String((i % 4) + 1)} key={p.name} className="overflow-hidden rounded-3xl bg-white">
                <div className="flex h-48 items-center justify-center bg-white p-6">
                  <Image src={p.image} alt={p.name} width={600} height={400} className="max-h-full w-auto object-contain" />
                </div>
                <div className="border-t border-mist p-6">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 text-ink-soft">{p.caption}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-linear-to-b from-dawn to-gold text-night">
        <Container className="flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <Heading data-reveal data-delay="1" className="text-4xl">Want to help a student rise?</Heading>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/get-involved" variant="night">
              Get involved
            </ButtonLink>
            <ButtonLink href="/donate" variant="outline-ink">
              Donate
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
