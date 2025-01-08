"use client";
import Image from "next/image";
import { useState } from "react";
import NavLinks from "./components/nav-links";


export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [isBilingualEducationOpen, setIsBilingualEducationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-dark-blue text-light-blue">
      {/* Header Section */}
      <header className="bg-dark-blue text-white p-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="Project Skyward Logo"
              width={150}
              height={150}
              className="mr-4"
            />
          </div>


          {/* NavLinks */}
          <NavLinks isNavOpen={isNavOpen} />


          {/* Mobile Menu Button */}
          <div className="flex items-center gap-6">
            <button
              className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-dark-blue hover:text-white"
              onClick={() => window.location.href = "/donate"}
            >
              Donate
            </button>
            <button
              className="text-3xl md:hidden text-white"
              onClick={handleToggleNav}
              aria-label="Toggle navigation menu"
            >
              {isNavOpen ? "✖" : "☰"}
            </button>
          </div>
        </nav>
      </header>


      {/* Mission Section */}
      <section className="p-8 bg-light-blue text-center">
        <Image
          src="/no_words_logo.png"
          alt="Project Skyward Logo"
          width={100}
          height={100}
          className="block mx-auto"
        />
        <h2 className="text-3xl font-semibold mb-4 text-dark-blue">Our Mission</h2>
        <p className="text-lg text-dark-blue">
          &quot;Project Skyward empowers newly-arrived refugee youth in Indianapolis, Bloomington, and Chicago
          by providing culturally responsive education, bilingual programs, and
          community-driven support. We foster belonging, resilience, and success as
          they navigate life in America.&quot;
        </p>
      </section>


      {/* How We Help Section */}
      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4 text-dark-blue">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
            <button
              className="text-xl font-bold text-blue"
              onClick={() => setIsBilingualEducationOpen(!isBilingualEducationOpen)}
            >
              Bilingual Education
            </button>
            {isBilingualEducationOpen && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-dark-blue">ESL Tutoring</h4>
                <p className="text-dark-blue">English as a Second Language (ESL) instruction for academic success. 
                  Bilingual tutoring is a form of educational support where a tutor provides instruction in two languages, 
                  allowing students to learn and practice academic concepts in both their native language and a second 
                  language, typically used to assist English Language Learners (ELLs) by bridging the gap between 
                  their native tongue and English proficiency.

                  Unlike other English teaching programs in the country, we focus teaching youth English Grammar. Easy 
                  writing, and fluency in speaking English. Through our social integration program, we provide newly 
                  arrived youth cultural and historical awareness of their new home country.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-blue">Math Tutoring</h4>
                <p className="text-dark-blue">Bilingual math tutoring to help bridge academic gaps.
                Our bilingual teachers provide most needed educational help in middle school Math, algebra, geometry, 
                Calculus 1 and Calculus 2 to help refugee and immigrant children move forward to their regular class 
                level as many refugee and immigrant children are admitted two years behind their actual class level. 
                For example, a newly arrived 9th grader is placed in 7th grad at any middle or high school in the United 
                States. We provide them with the necessary help to move forward to their actual class level.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-blue">Computer Science Tutoring</h4>
                <p className="text-dark-blue">Bilingual computer science tutoring to foster technical skills.
                Our bilingual teachers provide computer science tutoring to refugee and immigrant children, focusing on 
                foundational skills in programming, web development, and computer literacy. This includes teaching coding 
                languages such as Python, JavaScript, and HTML/CSS, as well as essential computer skills like using software 
                applications and understanding basic hardware components. By equipping students with these technical skills, 
                we aim to enhance their educational and career opportunities in the technology sector.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-blue">SAT and ACT Preparation for College Admission</h4>
                <p className="text-dark-blue">Bilingual SAT and ACT preparation for college admission.
                We provide excellent services for SAT and ACT preparation free of charge as most Refugee/immigrant 
                youth are unaware of the American school system and requirements for college admissions. Our bilingual SAT 
                and ACT preparation program helps bridge this gap by providing comprehensive instruction and practice in 
                test-taking strategies, critical reading, math, and writing skills. This ensures that students are well-prepared 
                to achieve competitive scores and meet college admission requirements.
                </p>
              </div>
              </div>
            )}
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
          I feel like I belong now.&quot; – A Refugee Youth &quot;
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
