import type { Metadata } from "next";
import { SkyBlend, ButtonLink, Container, Eyebrow, Heading, PageHero } from "../components/ui";
import { currentEvent } from "../content/events";
import { locations } from "../content/site";

export const metadata: Metadata = {
  title: "Locations",
  description: "Project Skyward serves refugee youth in Indianapolis, Chicago and Bloomington — and now Madison, Wisconsin.",
};

export default function Locations() {
  return (
    <>
      <PageHero eyebrow="Where we fly" title="Four cities, and a new one on the horizon.">
        <p>We offer in-person and online support across the Midwest, and we&apos;re growing.</p>
      </PageHero>

      <SkyBlend stops={["dusk", "predawn", "sky"]} />
      <section className="bg-linear-to-b from-sky to-dawn text-night">
        <Container className="py-20 md:py-24">
          <ul className="grid gap-5 md:grid-cols-2">
            {locations.map((l, i) => (
              <li data-reveal data-delay={String((i % 4) + 1)}
                key={l.city}
                className={`flex flex-col gap-3 rounded-3xl p-8 md:p-10 ${l.isNew ? "bg-night text-paper md:col-span-2" : "bg-mist"}`}
              >
                {l.isNew && (
                  <span className="self-start rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-night">
                    New in Wisconsin
                  </span>
                )}
                <Heading as="h2" className="text-4xl">
                  {l.city}, {l.state}
                </Heading>
                <p className={`text-lg ${l.isNew ? "text-haze" : "text-ink-soft"}`}>{l.note}</p>
                {l.isNew && (
                  <div className="mt-2">
                    <ButtonLink href="/events">
                      {currentEvent.title} · {currentEvent.dateLabel.replace(/^\w+, /, "")}
                    </ButtonLink>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-linear-to-b from-dawn to-gold-soft text-night">
        <Container className="py-16">
          <Eyebrow data-reveal tone="amber">Bring Project Skyward to your city</Eyebrow>
          <Heading data-reveal data-delay="1" className="max-w-3xl text-4xl">Know a community that needs us? We&apos;d love to hear from you.</Heading>
          <ButtonLink href="/get-involved" variant="night" className="mt-8">
            Get in touch
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
