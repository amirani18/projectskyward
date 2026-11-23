import Image from "next/image";
import Link from "next/link";
import FeaturedEvent from "./components/FeaturedEvent";
import { SkyBlend, ButtonLink, Container, Eyebrow, Heading } from "./components/ui";
import { pastSeasons } from "./content/events";
import { locations, programs } from "./content/site";

export default function Home() {
  const recentPast = pastSeasons.flatMap((s) => s.events).slice(0, 3);

  return (
    <>
      {/* HERO — night */}
      <section className="relative overflow-hidden bg-linear-to-b from-night to-dusk">
        <div aria-hidden="true" className="pointer-events-none absolute top-1/2 -right-40 h-[680px] w-[680px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,193,78,0.16),transparent_65%)]" />
        <Container className="relative flex flex-col items-center gap-12 py-20 md:flex-row md:py-24">
          <div className="min-w-0 flex-1">
            <Eyebrow>A nonprofit for refugee youth</Eyebrow>
            <Heading as="h1" className="text-5xl md:text-7xl">
              Wisdom gives them wings.
            </Heading>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-haze md:text-xl">
              Every refugee student arrives carrying a whole life. Project Skyward meets them with tutors, mentors and
              teachers who help them find their footing in American schools — and then rise.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/events">See the next event</ButtonLink>
              <ButtonLink href="/about" variant="outline">
                Read our story
              </ButtonLink>
            </div>
          </div>
          <div className="relative flex w-full max-w-md flex-1 justify-center">
            <svg aria-hidden="true" viewBox="0 0 460 420" className="absolute inset-0 h-full w-full">
              <path
                d="M20 400 C 120 360, 160 250, 230 210 S 380 90, 440 20"
                fill="none"
                stroke="var(--color-gold)"
                strokeWidth="2"
                strokeDasharray="2 10"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>
            <Image
              src="/brand/owl.png"
              alt="The Project Skyward owl in flight, circled by a golden trail"
              width={420}
              height={420}
              priority
              className="relative h-auto w-full max-w-[420px]"
            />
          </div>
        </Container>
      </section>

      {/* NEXT EVENT — late night */}
      <section className="bg-linear-to-b from-dusk to-predawn">
        <Container className="py-20 md:py-24">
          <Eyebrow>Taking flight · Next event</Eyebrow>
          <FeaturedEvent />
        </Container>
      </section>

      {/* FLIGHT PATH — predawn */}
      <section className="bg-predawn">
        <Container className="py-20 md:py-24">
          <Eyebrow>The flight path</Eyebrow>
          <Heading className="max-w-3xl text-4xl md:text-5xl">From the nest to the open sky, one stage at a time.</Heading>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <li key={p.stage} className="rounded-3xl border-t-[3px] border-gold bg-predawn-deep p-7">
                <p className="font-display text-4xl text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-[22px] font-semibold">{p.stage}</h3>
                <p className="mt-2 leading-relaxed text-haze">{p.summary}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
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
          <Eyebrow tone="ink">Where we fly</Eyebrow>
          <Heading className="text-4xl md:text-5xl">Four cities, and a new one on the horizon.</Heading>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((l) => (
              <li
                key={l.city}
                className={`flex flex-col gap-2 rounded-3xl p-7 ${l.isNew ? "bg-night text-paper" : "bg-mist"}`}
              >
                {l.isNew && (
                  <span className="self-start rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-night">
                    New
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
          <div className="min-w-0 flex-1">
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
            {recentPast.map((ev) => (
              <li key={ev.slug}>
                <Link
                  href={`/past-events#${ev.slug}`}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-3xl border border-dawn-line bg-white px-7 py-6 transition-colors hover:border-amber"
                >
                  <span>
                    <span className="block text-sm font-semibold text-amber">
                      {ev.dateLabel}
                      {ev.venue ? ` · ${ev.venue}` : ""}
                    </span>
                    <span className="mt-1 block text-xl font-semibold">{ev.title}</span>
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
          <div className="max-w-2xl">
            <Heading className="text-5xl md:text-6xl">Be the lift beneath their wings.</Heading>
            <p className="mt-4 text-lg leading-relaxed">
              Your gift funds tutoring, test prep and events for the students who need them most.
            </p>
          </div>
          <ButtonLink href="/donate" variant="night" className="px-9 text-lg">
            Donate
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
