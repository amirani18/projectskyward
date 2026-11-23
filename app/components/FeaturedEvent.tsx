import Image from "next/image";
import { currentEvent as e } from "../content/events";
import { ButtonAnchor, ButtonLink, Heading } from "./ui";

// The "next event" card, shared by the home page and /events.
export default function FeaturedEvent({ showDetailsLink = true }: { showDetailsLink?: boolean }) {
  const facts = [
    { label: "When", lines: [e.dateLabel, e.time] },
    { label: "Where", lines: [e.venue, e.address] },
    { label: "Register", lines: ["Email us, or", `text ${e.register.text.display}`] },
  ];

  return (
    <div className="flex flex-col gap-10 rounded-3xl border border-line bg-night p-8 md:flex-row md:p-10">
      <div className="min-w-0 flex-[2]">
        <Heading className="text-4xl md:text-5xl">{e.title}</Heading>
        {e.subtitle && <p className="mt-3 text-xl font-medium text-gold">{e.subtitle}</p>}
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-haze">{e.summary}</p>

        <dl className="mt-8 grid gap-6 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-haze-dim">{f.label}</dt>
              {f.lines.filter(Boolean).map((line) => (
                <dd key={line} className="mt-1 font-semibold leading-snug">
                  {line}
                </dd>
              ))}
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonAnchor
            href={`mailto:${e.register.email}?subject=${encodeURIComponent(`Register: ${e.title}`)}`}
          >
            Register by email
          </ButtonAnchor>
          <ButtonAnchor href={`sms:${e.register.text.sms}`} variant="outline">
            Register by text
          </ButtonAnchor>
          {showDetailsLink ? (
            <ButtonLink href="/events" variant="outline">
              Event details
            </ButtonLink>
          ) : (
            e.flyer && (
              <ButtonAnchor href={e.flyer} target="_blank" rel="noopener" variant="outline">
                Download the flyer (PDF)
              </ButtonAnchor>
            )
          )}
        </div>
      </div>

      {e.image && (
        <figure className="min-w-0 flex-1">
          <Image
            src={e.image.src}
            alt={e.image.alt}
            width={334}
            height={270}
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 text-sm text-haze-dim">
            {e.speaker.name} · {e.speaker.role}
          </figcaption>
        </figure>
      )}
    </div>
  );
}
