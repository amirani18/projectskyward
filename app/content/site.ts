// Site-wide facts in one place. Update here, not in individual pages.

export const site = {
  name: "Project Skyward",
  url: "https://projectskyward.org",
  tagline: "Wisdom gives them wings.",
  description:
    "Project Skyward is a nonprofit that helps refugee youth find their footing in American schools — and then rise — through tutoring, mentorship, test prep and community events.",
  email: "projectskyward2025@gmail.com",
  phone: { display: "406-880-3340", tel: "+14068803340" },
  volunteerFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfits6lU7kLuajJ_nXvLtHXj4ZnFtnCxjdQbMPHh3mfuqCQdg/viewform?usp=sharing",
};

export const nav = [
  { label: "Our Story", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Locations", href: "/locations" },
  { label: "Past Events", href: "/past-events" },
  { label: "Get Involved", href: "/get-involved" },
];

export type Program = {
  stage: string;
  title: string;
  summary: string;
  detail: string;
  outcomes: string;
};

// The four stages of "the flight path", from arrival to college.
export const programs: Program[] = [
  {
    stage: "The Nest",
    title: "Belonging & community",
    summary: "A safe place to land. Mentors who understand the move, and families welcomed in.",
    detail:
      "Social integration workshops, family support and cultural exchange help newly arrived students and their families feel at home — including the history and culture of their new country.",
    outcomes: "A sense of belonging, stronger family involvement and a smoother transition.",
  },
  {
    stage: "First Flight",
    title: "ESL & bilingual tutoring",
    summary: "English grammar, essay writing and confident speaking, taught in two languages.",
    detail:
      "Bilingual tutors teach in a student's native language and in English, so academic concepts are never lost in translation while English proficiency grows.",
    outcomes: "Stronger English, better grades and more confidence in class.",
  },
  {
    stage: "Gaining Altitude",
    title: "Math & computer science",
    summary: "Middle school math through Calculus 2, plus Python, JavaScript and HTML/CSS.",
    detail:
      "Many newcomer students are placed up to two years below their grade level. Bilingual math tutoring helps them catch up to where they belong, and computer science tutoring opens doors to technology careers.",
    outcomes: "Students reach their real grade level and build skills for STEM.",
  },
  {
    stage: "Skyward",
    title: "SAT, ACT & college readiness",
    summary: "Free test prep and a clear map of how American college admissions work.",
    detail:
      "Many refugee and immigrant students have never been told how college admissions work. Free bilingual SAT and ACT preparation covers test strategy, reading, math and writing.",
    outcomes: "Higher scores, more college admissions and more confident test-takers.",
  },
];

export type Location = { city: string; state: string; note: string; isNew?: boolean };

export const locations: Location[] = [
  { city: "Madison", state: "WI", note: "Our first Wisconsin event lands at Madison College this December.", isNew: true },
  { city: "Indianapolis", state: "IN", note: "And its surrounding suburbs." },
  { city: "Chicago", state: "IL", note: "And its surrounding suburbs." },
  { city: "Bloomington", state: "IN", note: "South-central Indiana." },
];

export type Partner = { name: string; image: string; caption: string };

export const partners: Partner[] = [
  {
    name: "Missoula Interfaith Collaborative",
    image: "/partners/MissoulaInterfaith.jpg",
    caption: "A key partner providing support and resources for our mission.",
  },
  { name: "Sleep Inn", image: "/partners/SleepInn.png", caption: "Missoula, Montana." },
  { name: "Red Lion Inn", image: "/partners/RedLionInn.png", caption: "Missoula, Montana." },
  { name: "Comfort Inn", image: "/partners/ComfortInn.jpg", caption: "Missoula, Montana." },
  {
    name: "Ghareeb Nawaz",
    image: "/partners/GhareebNawaz.png",
    caption: "University of Illinois at Chicago — a community partner.",
  },
];
