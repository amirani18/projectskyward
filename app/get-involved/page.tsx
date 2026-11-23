import type { Metadata } from "next";
import { SkyBlend, ButtonAnchor, ButtonLink, Container, PageHero } from "../components/ui";
import { site } from "../content/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer as a tutor or mentor, donate, or partner with Project Skyward.",
};

export default function GetInvolved() {
  const ways = [
    {
      title: "Volunteer",
      body: "Tutor, mentor or help run an event. Bilingual volunteers are especially welcome.",
      action: (
        <ButtonAnchor href={site.volunteerFormUrl} target="_blank" rel="noopener">
          Volunteer sign-up
        </ButtonAnchor>
      ),
    },
    {
      title: "Donate",
      body: "Every gift funds tutoring, test prep and events for refugee students.",
      action: <ButtonLink href="/donate">Give lift</ButtonLink>,
    },
    {
      title: "Partner with us",
      body: "Schools, businesses and community groups help us reach more students in more cities.",
      action: (
        <ButtonAnchor href={`mailto:${site.email}?subject=${encodeURIComponent("Partnering with Project Skyward")}`}>
          Email us
        </ButtonAnchor>
      ),
    },
  ];

  return (
    <>
      <PageHero eyebrow="Get involved" title="Every flight needs a crew.">
        <p>However you can help, there&apos;s a place for you on the team.</p>
      </PageHero>

      <section className="bg-linear-to-b from-dusk to-predawn">
        <Container className="py-20 md:py-24">
          <ul className="grid gap-5 md:grid-cols-3">
            {ways.map((w, i) => (
              <li data-reveal data-delay={String((i % 4) + 1)} key={w.title} className="flex flex-col gap-4 rounded-3xl border-t-[3px] border-gold bg-night p-8">
                <h2 className="font-display text-3xl font-semibold">{w.title}</h2>
                <p className="flex-1 leading-relaxed text-haze">{w.body}</p>
                <div>{w.action}</div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <SkyBlend stops={["predawn", "night"]} className="h-24" />
    </>
  );
}
