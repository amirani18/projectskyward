import Image from "next/image";
import NavLinks from "../components/nav-links";

export default function About() {
  return (
    <div className="min-h-screen bg-light-blue text-dark-blue font-sans flex flex-col">
      {/* Header Section */}
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

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center font-bunya">About Us</h1>

        <section>
          <h2 className="text-3xl font-semibold mb-4 font-bunya">About Us</h2>
          <p className="text-lg font-roboto">
            Each year, thousands of refugee youth enter the U.S. education system,
            highlighting a significant demand for specialized educational services.
            These services are crucial to bridging the academic gaps many of these
            students face, ensuring they receive the support needed to thrive and
            integrate successfully in the American school system.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 font-bunya">Resettled Refugees</h2>
          <p className="text-lg font-roboto">
            There are more than 500 thousand refugees resettled in the United States
            in the last 10 years. In 2023 alone, more than 60 thousand refugees and
            asylum seekers have been admitted to the United States from many war-torn
            countries. Statistically, 25% of admitted youth are under 18 years of age.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 font-bunya">Niche</h2>
          <p className="text-lg font-roboto">
            There are no other programs or companies that provide the same
            comprehensive, refugee-focused educational services locally or nationally.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 font-bunya">Aim</h2>
          <p className="text-lg font-roboto">
            Our focus will be on students ages 12 and up, who are among the most
            vulnerable in the education system.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 font-bunya">Reason</h2>
          <p className="text-lg font-roboto">
            Equitable education is a constitutional right, and every student
            regardless of their race, culture, and religion deserves the chance to
            thrive.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-dark-blue text-white p-6 text-center">
        <p>Contact us: +406-880-3340 | 123 Anywhere St., Any City, ST 12345</p>
        <p>Website: www.projectskyward.org</p>
      </footer>
    </div>
  );
}
