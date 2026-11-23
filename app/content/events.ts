// Every event Project Skyward runs lives here. To retire an event, move it
// from `currentEvent` into `pastEvents` — the archive page picks it up.

export type EventInfo = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string; // ISO date, used for sorting
  dateLabel: string;
  time?: string;
  venue?: string;
  address?: string;
  summary: string;
  highlights?: string[];
  flyer?: string;
  image?: { src: string; alt: string };
};

export type CurrentEvent = EventInfo & {
  speaker: { name: string; role: string; bio: string };
  register: { email: string; text: { display: string; sms: string } };
  audience: string;
};

export const currentEvent: CurrentEvent = {
  slug: "cracking-the-college-code",
  title: "Cracking the College Code",
  subtitle: "Outsmarting your first 21 days of college",
  date: "2026-12-09",
  dateLabel: "Wednesday, December 9, 2026",
  time: "5:30 – 7:00 PM",
  venue: "Madison College",
  address: "1701 Wright Street, Madison, WI 53704",
  audience: "Students heading to college",
  summary:
    "What they don't tell you about college success. Dr. Theressa Duello shares the hard-won advice she calls “pearls” — the things that rarely make it into print.",
  flyer: "/events/cracking-the-college-code.pdf",
  image: { src: "/events/duello.jpg", alt: "Dr. Theressa Duello" },
  speaker: {
    name: "Dr. Theressa Duello",
    role: "Reproductive biologist",
    bio:
      "Dr. Duello is a reproductive biologist who worked throughout her career to increase access to college for those underrepresented in higher education, especially in science. She was a first-generation college student: neither of her parents had a four-year degree when she graduated from high school, so she had no one to advise her about how to go to college. Throughout her career she kept track of everything she did not know and the questions she did not know to ask. Her presentation emphasizes advice that often doesn't make it into print — advice she calls “pearls”.",
  },
  register: {
    email: "projectskyward2025@gmail.com",
    text: { display: "406-880-3340", sms: "+14068803340" },
  },
};

export type ArchiveSeason = { season: string; title: string; blurb: string; events: EventInfo[] };

export const pastSeasons: ArchiveSeason[] = [
  {
    season: "2025–26",
    title: "Academic Competitions",
    blurb:
      "Our first academic competition season: essay writing, art and mathematics, with cash prizes for first, second and third place.",
    events: [
      {
        slug: "essay-writing-contest-2026",
        title: "Essay Writing Contest",
        date: "2026-01-18",
        dateLabel: "Sunday, January 18, 2026",
        time: "10 AM – 1 PM or 3 PM – 6 PM",
        venue: "University of Indianapolis",
        summary: "Theme: the correlation of global warming to the rise of infectious diseases.",
        highlights: ["Cash prizes", "Special prize: a tour of Harvard University"],
        flyer: "/archive/2026/essay-writing-contest.pdf",
      },
      {
        slug: "art-competition-2026",
        title: "Ingenuity of Art Competition",
        date: "2026-01-17",
        dateLabel: "Saturday, January 17, 2026",
        time: "10 AM – 1 PM or 3 PM – 6 PM",
        summary: "Theme: ancient Egyptian art. Students created an original piece in person.",
        highlights: ["Cash prizes", "Detroit Institute of Arts tour"],
        flyer: "/archive/2026/art-competition.pdf",
      },
      {
        slug: "math-competition-2026",
        title: "Math Competition",
        date: "2026-01-16",
        dateLabel: "Friday, January 16, 2026",
        time: "10 AM – 1 PM or 3 PM – 6 PM",
        venue: "University of Indianapolis",
        summary: "A tournament-style competition built on 10 math games, for students in grades 4 and 5.",
        highlights: ["Cash prizes", "Science museum tour in Detroit, Michigan"],
        flyer: "/archive/2026/math-competition.pdf",
      },
    ],
  },
];
