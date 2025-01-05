import Image from "next/image";
import NavLinks from "../components/nav-links";

export default function Services() {
  return (
    <div className="min-h-screen bg-light-blue text-dark-blue font-sans flex flex-col">
      <header className="bg-dark-blue text-white p-6">
        <nav className="flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Project Skyward Logo"
            width={150}
            height={150}
            className="w-24 sm:w-32 md:w-40 h-auto"
          />
          <NavLinks />
        </nav>
      </header>

      <main className="flex-grow max-w-6xl mx-auto p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center font-bunya">Service Overview</h1>
        <section className="text-center mb-8">
          <p className="text-lg font-roboto">
            At Project Skyward, we are committed to providing a holistic suite of services
            designed to help refugee youth overcome the unique challenges they face
            when integrating into the U.S. school system. With a focus on language
            development, academic support, cultural integration, and emotional
            well-being, our programs are tailored to meet the specific needs of
            newly-arrived refugee students. Our goal is to ensure every child has the
            opportunity to succeed academically, socially, and emotionally, regardless
            of their background or the barriers they face.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bilingual Education Program */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 font-bunya">Bilingual Education Program</h3>
            <p className="text-lg font-roboto">
              English as a Second Language (ESL) instruction. Bilingual tutoring and
              classwork assistance.
            </p>
            <p className="mt-2 text-sm font-semibold font-roboto">
              Key Outcomes: Increased academic performance, better classroom
              participation, and improved language skills.
            </p>
          </div>

          {/* Academic Support and Mentorship */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 font-bunya">Academic Support and Mentorship</h3>
            <p className="text-lg font-roboto">
              One-on-one tutoring in core subjects. After-school study programs. Pairing
              students with mentors.
            </p>
            <p className="mt-2 text-sm font-semibold font-roboto">
              Key Outcomes: Improved grades, increased retention rates, and strengthened
              study habits.
            </p>
          </div>

          {/* Culturally Responsive Teaching */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 font-bunya">Culturally Responsive Teaching</h3>
            <p className="text-lg font-roboto">
              Curriculum integration that reflects diverse cultures and experiences.
              Activities that celebrate cultural diversity and promote mutual respect.
            </p>
            <p className="mt-2 text-sm font-semibold font-roboto">
              Key Outcomes: Stronger family involvement, increased social connections,
              and a smoother transition for students into their new environment.
            </p>
          </div>

          {/* Community Integration Programs */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 font-bunya">Community Integration Programs</h3>
            <p className="text-lg font-roboto">
              Social integration workshops. Family support programs. Cultural exchange
              activities.
            </p>
            <p className="mt-2 text-sm font-semibold font-roboto">
              Key Outcomes: Enhanced engagement, a sense of belonging, and higher levels
              of academic achievement.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-dark-blue text-white p-6 text-center">
        <p>Contact us: +406-880-3340 | 123 Anywhere St., Any City, ST 12345</p>
        <p>Website: www.projectskyward.org</p>
      </footer>
    </div>
  );
}
