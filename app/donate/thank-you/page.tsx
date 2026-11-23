import type { Metadata } from "next";
import { SkyBlend, ButtonLink, Container, Eyebrow, Heading } from "../../components/ui";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <>
      <SkyBlend stops={["night", "predawn", "sky", "dawn", "gold-soft"]} />
      <section className="bg-linear-to-b from-gold-soft to-gold text-night">
        <Container className="py-24 md:py-32">
          <Eyebrow data-reveal tone="ink">Donation received</Eyebrow>
          <Heading as="h1" className="max-w-3xl text-5xl md:text-7xl">
            Thank you for giving them lift.
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Your generosity helps refugee students find their footing in school — and then rise. Your receipt will be
            emailed to the address you entered at checkout.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/" variant="night">
              Back to home
            </ButtonLink>
            <ButtonLink href="/events" variant="outline-ink">
              See our next event
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
