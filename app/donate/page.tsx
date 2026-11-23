import type { Metadata } from "next";
import { SkyBlend, Container, Eyebrow, Heading } from "../components/ui";
import DonateForm from "./DonateForm";

export const metadata: Metadata = {
  title: "Donate",
  description: "Your gift funds tutoring, test prep and events for refugee youth.",
};

export default async function Donate({ searchParams }: { searchParams: Promise<{ canceled?: string }> }) {
  const { canceled } = await searchParams;

  return (
    <>
      <SkyBlend stops={["night", "predawn", "sky", "dawn", "gold-soft"]} />
      <section className="bg-linear-to-b from-gold-soft to-gold text-night">
        <Container className="grid items-start gap-12 py-20 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow tone="ink">Donate</Eyebrow>
            <Heading as="h1" className="text-5xl md:text-6xl">
              Be the lift beneath their wings.
            </Heading>
            <p className="mt-6 text-lg leading-relaxed">
              Project Skyward is community-powered. Your gift funds bilingual tutoring, free SAT and ACT prep, and
              events that help refugee students find their footing — and then rise.
            </p>
          </div>
          <DonateForm canceled={canceled === "1"} />
        </Container>
      </section>
    </>
  );
}
