"use client";
import Image from "next/image";
import NavLinks from "./components/nav-links";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-light-blue text-dark-blue">
      {/* Header Section */}
      <header className="bg-dark-blue text-white p-6">
        <nav className="flex justify-between items-center">
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

      {/* Mission Section */}
      <section className="p-8 bg-light-blue text-center">
        <Image
            src="/no_words_logo.png"
            alt="Project Skyward Logo"
            width={300}
            height={300}
            className="block mx-auto"
          />
        <h2 className="text-3xl font-semibold mb-4 text-dark-blue">Our Mission</h2>
        <p className="text-lg text-dark-blue">
          &quot;Project Skyward empowers newly-arrived refugee youth in Indianapolis by
          providing culturally responsive education, bilingual programs, and
          community-driven support. We foster belonging, resilience, and success as
          they navigate life in America.&quot;
        </p>
      </section>

      {/* How We Help Section */}
      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4 text-dark-blue">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue">Bilingual Education</h3>
            <p className="text-dark-blue">ESL instruction and bilingual tutoring for academic success.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue">Personalized Support</h3>
            <p className="text-dark-blue">One-on-one tutoring and mentoring to bridge academic gaps.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue">Community Programs</h3>
            <p className="text-dark-blue">Social integration workshops and family support initiatives.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="p-8 bg-light-blue text-center">
        <h2 className="text-3xl font-semibold mb-4 text-dark-blue">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue">500K+</h3>
            <p className="text-dark-blue">Resettled refugees in the U.S. in the last 10 years.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue">60K+</h3>
            <p className="text-dark-blue">Admitted refugees and asylum seekers in 2023.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue">45%</h3>
            <p className="text-dark-blue">Refugee children under 18 admitted in 2023.</p>
          </div>
        </div>
      </section>

      {/* Refugee Testimonials Section */}
      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4 text-dark-blue">Refugee Testimonials</h2>
        <blockquote className="italic border-l-4 border-blue pl-4 text-dark-blue">
          &quot;Project Skyward gave me hope and the tools to succeed in school and life.
          I feel like I belong now.&quot; – A Refugee Youth
        </blockquote>
      </section>

      {/* Take Action Section */}
      <section className="p-8 bg-light-blue text-center">
        <h2 className="text-3xl font-semibold mb-4 text-dark-blue">Take Action</h2>
        <p className="text-lg mb-4 text-dark-blue">Join us in empowering refugee youth and making a difference.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#donate"
            className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-dark-blue hover:text-white"
          >
            Donate
          </a>
          <a
            href="#volunteer"
            className="border border-blue text-blue px-6 py-3 rounded-lg hover:bg-blue hover:text-white"
          >
            Volunteer
          </a>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="p-8 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4 text-dark-blue">Donate</h2>
        <p className="text-lg mb-4 text-dark-blue">
          Your generous donation helps us provide critical support to refugee youth.
        </p>
        <a
          href="/donate"
          className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-dark-blue hover:text-white"
        >
          Donate Now
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark-blue text-white p-6 text-center">
        <p>Contact us: +406-880-3340 | 123 Anywhere St., Any City, ST 12345</p>
        <p>Website: www.projectskyward.org</p>
      </footer>
    </div>
  );
}
