import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old URLs from the previous site keep working (and keep their search ranking).
  async redirects() {
    return [
      { source: "/services", destination: "/programs", permanent: true },
      { source: "/location", destination: "/locations", permanent: true },
      { source: "/competitions", destination: "/past-events", permanent: true },
      { source: "/take-action", destination: "/get-involved", permanent: true },
      { source: "/ESSAY_WRITING_CONTEST.pdf", destination: "/archive/2026/essay-writing-contest.pdf", permanent: true },
      { source: "/ART_COMPETITION.pdf", destination: "/archive/2026/art-competition.pdf", permanent: true },
      { source: "/MATH_COMPETITION.pdf", destination: "/archive/2026/math-competition.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
