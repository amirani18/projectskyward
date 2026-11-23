import Link from "next/link";
import FeaturedEvent from "./components/FeaturedEvent";
import HeroOwl from "./components/motion/HeroOwl";
import Starfield from "./components/motion/Starfield";
import { SkyBlend, ButtonLink, Container, Eyebrow, Heading } from "./components/ui";
import { pastSeasons } from "./content/events";
import { locations, programs } from "./content/site";

// Cards in a row cascade in one after another (90ms apart).
const stagger = (i: number) => String((i % 4) + 1);

export default function Home() {
  const recentPast = pastSeasons.flatMap((s) => s.events).slice(0, 3);

  return (
    <>
      {/* HERO — night */}
      <section className="relative overflow-hidden bg-linear-to-b from-night to-dusk">
        <Starfield />
        <div
          aria-hidden="true"
          className="glow-breathe pointer-events-none absolute top-1/2 -right-40 h-[680px] w-[680px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,193,78,0.16),transparent_65%)]"
        />
        <Container className="relative flex flex-col items-center gap-12 py-20 md:flex-row md:py-24">
          <div className="min-w-0 flex-1">
            <div className="intro-rise">
              <Eyebrow>A nonprofit for refugee youth</Eyebrow>
            </div>
            <Heading as="h1" className="text-5xl md:text-7xl">
              <span data-delay="1" className="intro-rise inline-block">
                Wisdom gives
              </span>{" "}
              <span data-delay="2" className="intro-rise inline-block">
                them wings.
              </span>
            </Heading>
            <p data-delay="3" className="intro-rise mt-7 max-w-xl text-lg leading-relaxed text-haze md:text-xl">
              Every refugee student arrives carrying a whole life. Project Skyward meets them with tutors, mentors and
              teachers who help them find their footing in American schools — and then rise.
            </p>
            <div data-delay="4" className="intro-rise mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/events">See the next event</ButtonLink>
              <ButtonLink href="/about" variant="outline">
                Read our story
              </ButtonLink>
            </div>
          </div>
          <HeroOwl />
        </Container>
      </section>

      {/* NEXT EVENT — late night */}
      <section className="bg-linear-to-b from-dusk to-predawn">
        <Container className="py-20 md:py-24">
          <div data-reveal>
            <Eyebrow>Taking flight · Next event</Eyebrow>
          </div>
          <div data-reveal data-delay="1">
            <FeaturedEvent />
          </div>
        </Container>
      </section>

      {/* FLIGHT PATH — predawn */}
      <section className="bg-predawn">
        <Container className="py-20 md:py-24">
          <div data-reveal>
            <Eyebrow>The flight path</Eyebrow>
            <Heading className="max-w-3xl text-4xl md:text-5xl">From the nest to the open sky, one stage at a time.</Heading>
          </div>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <li
                key={p.stage}
                data-reveal
                data-delay={stagger(i)}
                className="rounded-3xl border-t-[3px] border-gold bg-predawn-deep p-7 transition-[translate,background-color] duration-300 motion-safe:hover:-translate-y-1.5 hover:bg-[#21356f]"
              >
                <p className="font-display text-4xl text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-[22px] font-semibold">{p.stage}</h3>
                <p className="mt-2 leading-relaxed text-haze">{p.summary}</p>
              </li>
            ))}
          </ol>
          <div data-reveal className="mt-10">
            <ButtonLink href="/programs" variant="outline">
              Explore our programs
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* WHERE WE FLY — first light */}
      <SkyBlend stops={["predawn", "sky"]} />
      <section className="bg-linear-to-b from-sky to-dawn text-night">
        <Container className="py-20 md:py-24">
          <div data-reveal>
            <Eyebrow tone="ink">Where we fly</Eyebrow>
            <Heading className="text-4xl md:text-5xl">Four cities, and a new one on the horizon.</Heading>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((l, i) => (
              <li
                key={l.city}
                data-reveal="scale"
                data-delay={stagger(i)}
                className={`flex flex-col gap-2 rounded-3xl p-7 transition-[translate] duration-300 motion-safe:hover:-translate-y-1.5 ${l.isNew ? "bg-night text-paper" : "bg-mist"}`}
              >
                {l.isNew && (
                  <span className="relative self-start rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-night">
                    <span aria-hidden="true" className="absolute inset-0 rounded-full bg-gold motion-safe:animate-ping motion-safe:opacity-40" />
                    <span className="relative">New</span>
                  </span>
                )}
                <h3 className="font-display text-3xl font-semibold">
                  {l.city}, {l.state}
                </h3>
                <p className={l.isNew ? "text-haze" : "text-ink-soft"}>{l.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* PAST FLIGHTS — dawn */}
      <section className="bg-linear-to-b from-dawn to-gold-soft text-night">
        <Container className="flex flex-col gap-12 py-20 md:flex-row md:py-24">
          <div data-reveal className="min-w-0 flex-1">
            <Eyebrow tone="amber">Past flights</Eyebrow>
            <Heading className="text-4xl md:text-5xl">Where we have already been.</Heading>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              Every event we have hosted, kept as a record of how far our students have come.
            </p>
            <ButtonLink href="/past-events" variant="night" className="mt-8">
              Browse the archive
            </ButtonLink>
          </div>
          <ul className="flex min-w-0 flex-[1.4] flex-col gap-3">
            {recentPast.map((ev, i) => (
              <li key={ev.slug} data-reveal data-delay={stagger(i)}>
                <Link
                  href={`/past-events#${ev.slug}`}
                  className="group flex items-center justify-between gap-6 rounded-3xl border border-dawn-line bg-white px-7 py-6 transition-colors hover:border-amber"
                >
                  <span>
                    <span className="block text-sm font-semibold text-amber">
                      {ev.dateLabel}
                      {ev.venue ? ` · ${ev.venue}` : ""}
                    </span>
                    <span className="mt-1 block text-xl font-semibold">{ev.title}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-2xl text-amber transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* DONATE — sunrise */}
      <section className="bg-linear-to-b from-gold-soft to-gold text-night">
        <Container className="flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center md:py-24">
          <div data-reveal className="max-w-2xl">
            <Heading className="text-5xl md:text-6xl">Be the lift beneath their wings.</Heading>
            <p className="mt-4 text-lg leading-relaxed">
              Your gift funds tutoring, test prep and events for the students who need them most.
            </p>
          </div>
          <div data-reveal="scale" data-delay="2">
            <ButtonLink href="/donate" variant="night" className="px-9 text-lg motion-safe:hover:scale-105">
              Donate
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
