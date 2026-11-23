import type { Metadata } from "next";
import { SkyBlend, ButtonLink, Container, Eyebrow, Heading } from "../components/ui";
import { pastSeasons } from "../content/events";

export const metadata: Metadata = {
  title: "Past Events",
  description: "An archive of every Project Skyward event — competitions, workshops and more.",
};

export default function PastEvents() {
  return (
    <>
      <SkyBlend stops={["night", "predawn", "sky", "dawn"]} />
      <section className="bg-dawn text-night">
        <Container className="py-20 md:py-24">
          <Eyebrow data-reveal tone="amber">Past flights · Archive</Eyebrow>
          <Heading as="h1" className="max-w-4xl text-5xl md:text-7xl">
            Where we have already been.
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Every event we have hosted, kept as a record of how far our students have come.
          </p>
        </Container>
      </section>

      {pastSeasons.map((season) => (
        <section key={season.season} className="border-t border-dawn-line bg-dawn text-night">
          <Container className="grid gap-10 py-16 md:grid-cols-[1fr_2fr] md:py-20">
            <div>
              <p data-reveal className="font-display text-5xl font-semibold text-amber">{season.season}</p>
              <Heading data-reveal data-delay="1" className="mt-3 text-3xl">{season.title}</Heading>
              <p data-reveal data-delay="2" className="mt-3 leading-relaxed text-ink-soft">{season.blurb}</p>
            </div>
            <ol className="space-y-4">
              {season.events.map((ev, i) => (
                <li data-reveal data-delay={String((i % 4) + 1)} key={ev.slug} id={ev.slug} className="scroll-mt-28 rounded-3xl border border-dawn-line bg-white p-7">
                  <p className="text-sm font-semibold text-amber">
                    {ev.dateLabel}
                    {ev.venue ? ` · ${ev.venue}` : ""}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold">{ev.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{ev.summary}</p>
                  {ev.highlights && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {ev.highlights.map((h) => (
                        <li key={h} className="rounded-full bg-dawn px-3 py-1 text-sm font-medium">
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  {ev.flyer && (
                    <a
                      href={ev.flyer}
                      target="_blank"
                      rel="noopener"
                      className="mt-5 inline-flex min-h-11 items-center font-semibold text-night underline decoration-amber decoration-2 underline-offset-4 hover:text-amber"
                    >
                      View the original flyer (PDF)
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ))}

      <section className="bg-linear-to-b from-dawn to-gold text-night">
        <Container className="flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <Heading data-reveal data-delay="1" className="text-4xl">The next flight is already boarding.</Heading>
          <ButtonLink href="/events" variant="night">
            See the next event
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
