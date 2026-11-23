import type { Metadata } from "next";
import { SkyBlend, ButtonLink, Container, Eyebrow, Heading, PageHero } from "../components/ui";
import FlightLine from "../components/motion/FlightLine";
import { programs } from "../content/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Bilingual ESL, math and computer science tutoring, free SAT and ACT prep, and community programs for refugee youth.",
};

export default function Programs() {
  return (
    <>
      <PageHero eyebrow="The flight path" title="Four stages, from the nest to the open sky.">
        <p>
          Our programs are built around language, academics, culture and well-being — tailored to students navigating
          the U.S. school system for the first time.
        </p>
      </PageHero>

      <section className="bg-linear-to-b from-dusk to-predawn">
        <Container className="py-20 md:py-24">
          <ol className="relative space-y-6 md:pl-14">
            <FlightLine className="left-[22px] hidden md:block" />
            {programs.map((p, i) => (
              <li key={p.stage} data-reveal className="relative rounded-3xl bg-predawn-deep p-8 md:p-10">
                <span
                  aria-hidden="true"
                  className="absolute top-10 -left-[46px] hidden h-5 w-5 rounded-full border-4 border-predawn bg-gold md:block"
                />
                <p className="font-display text-lg text-gold">
                  {String(i + 1).padStart(2, "0")} · {p.stage}
                </p>
                <Heading as="h2" className="mt-2 text-3xl md:text-4xl">
                  {p.title}
                </Heading>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-haze">{p.detail}</p>
                <p className="mt-5 text-sm font-semibold text-paper">
                  <span className="text-gold">Outcomes · </span>
                  {p.outcomes}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <SkyBlend stops={["predawn", "sky", "dawn"]} />
      <section className="bg-linear-to-b from-dawn to-gold text-night">
        <Container className="flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <Eyebrow data-reveal tone="ink">Tutors &amp; mentors wanted</Eyebrow>
            <Heading data-reveal data-delay="1" className="text-4xl">Teach what you know. Help a student fly.</Heading>
          </div>
          <ButtonLink href="/get-involved" variant="night">
            Volunteer with us
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
