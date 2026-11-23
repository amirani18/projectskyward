import type { Metadata } from "next";
import FeaturedEvent from "../components/FeaturedEvent";
import { SkyBlend, ButtonLink, Container, Eyebrow, Heading } from "../components/ui";
import { currentEvent as e } from "../content/events";

export const metadata: Metadata = {
  title: `Events — ${e.title}`,
  description: `${e.title}: ${e.subtitle}. ${e.dateLabel}, ${e.time} at ${e.venue}.`,
};

export default function Events() {
  return (
    <>
      <section className="bg-night">
        <Container className="pt-20 pb-10 md:pt-24">
          <Eyebrow data-reveal>Taking flight · Next event</Eyebrow>
          <Heading as="h1" className="text-5xl md:text-6xl">
            Our next event
          </Heading>
        </Container>
      </section>

      <section className="bg-linear-to-b from-night to-dusk">
        <Container className="pb-20 md:pb-24">
          <div data-reveal data-delay="1">
            <FeaturedEvent showDetailsLink={false} />
          </div>
        </Container>
      </section>

      <section className="bg-linear-to-b from-dusk to-predawn">
        <Container className="grid gap-12 py-20 md:grid-cols-[1fr_1.6fr] md:py-24">
          <div>
            <Eyebrow data-reveal>About the speaker</Eyebrow>
            <Heading data-reveal data-delay="1" className="text-4xl">{e.speaker.name}</Heading>
            <p className="mt-2 text-haze-dim">{e.speaker.role}</p>
          </div>
          <p data-reveal data-delay="2" className="text-lg leading-relaxed text-haze">{e.speaker.bio}</p>
        </Container>
      </section>

      <section className="bg-predawn">
        <Container className="grid gap-10 py-20 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow data-reveal>How to register</Eyebrow>
            <Heading data-reveal data-delay="1" className="text-4xl">Save your seat.</Heading>
            <p className="mt-4 text-lg leading-relaxed text-haze">
              Registration is required. Email or text us to save your seat.
            </p>
          </div>
          <ul className="space-y-4">
            <li data-reveal data-delay="1" className="rounded-3xl bg-predawn-deep p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-haze-dim">Email</p>
              <a href={`mailto:${e.register.email}`} className="mt-1 block break-all text-xl font-semibold hover:text-gold">
                {e.register.email}
              </a>
            </li>
            <li data-reveal data-delay="2" className="rounded-3xl bg-predawn-deep p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-haze-dim">Text</p>
              <a href={`sms:${e.register.text.sms}`} className="mt-1 block text-xl font-semibold hover:text-gold">
                {e.register.text.display}
              </a>
            </li>
            <li data-reveal data-delay="3" className="rounded-3xl bg-predawn-deep p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-haze-dim">Venue</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${e.venue}, ${e.address}`)}`}
                target="_blank"
                rel="noopener"
                className="mt-1 block text-xl font-semibold hover:text-gold"
              >
                {e.venue} — {e.address}
              </a>
            </li>
          </ul>
        </Container>
      </section>

      <SkyBlend stops={["predawn", "sky", "dawn"]} />
      <section className="bg-linear-to-b from-dawn to-gold-soft text-night">
        <Container className="flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <Heading data-reveal data-delay="1" className="text-4xl">Curious where we&apos;ve been?</Heading>
          <ButtonLink href="/past-events" variant="night">
            Browse past events
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
