import Image from 'next/image';
import NavLinks from "../components/nav-links";

export default function about() {
  return (
    <div className="min-h-screen bg-light-blue text-dark-blue font-sans flex flex-col">
      <header className="bg-dark-blue text-white p-6">
      {/* Header Section */}
            <nav className="flex justify-between items-center">
            {/* <h1 className="text-4xl font-bold">Project Skyward</h1> */}
          <Image
            src="/logo.png"
            alt="Project Skyward Logo"
            width={100}
            height={100}
            className="mr-4"
          />
            <NavLinks />
            </nav>
      </header>

      <main className="flex-grow max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">About Us</h1>
        <section>
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">
            Each year, thousands of refugee youth enter the U.S. education system,
            highlighting a significant demand for specialized educational services.
            These services are crucial to bridging the academic gaps many of these
            students face, ensuring they receive the support needed to thrive and
            integrate successfully in the American school system.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Resettled Refugees</h2>
          <p className="text-lg">
            There are more than 500 thousand refugees resettled in the United States
            in the last 10 years. In 2023 alone, more than 60 thousand refugees and
            asylum seekers have been admitted to the United States from many war-torn
            countries. Statistically, 25% of admitted youth are under 18 years of age.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Niche</h2>
          <p className="text-lg">
            There are no other programs or companies that provide the same
            comprehensive, refugee-focused educational services locally or nationally.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Aim</h2>
          <p className="text-lg">
            Our focus will be on students ages 12 and up, who are among the most
            vulnerable in the education system.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Reason</h2>
          <p className="text-lg">
            Equitable education is a constitutional right, and every student
            regardless of their race, culture, and religion deserves the chance to
            thrive.
          </p>
        </section>
      </main>

      <footer className="bg-dark-blue text-white p-6 text-center">
        <p>Contact us: +406-880-3340 | 123 Anywhere St., Any City, ST 12345</p>
        <p>Website: www.projectskyward.org</p>
      </footer>
    </div>
  );
}