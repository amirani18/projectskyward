"use client";
import Image from "next/image";
import { useState } from "react";
import NavLinks from "./components/nav-links";


export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col font-sans bg-dark-blue text-light-blue">
      {/* Header Section */}
      <header className="bg-dark-blue text-white p-6">
        <nav className="flex justify-between items-center">
            {/* Logo */}
            <div onClick={() => window.location.href = "/"} className="cursor-pointer">
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
          src="/logo2.png"
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
            <h3 className="text-xl font-bold text-blue">Bilingual Education</h3>
            <p className="text-dark-blue">ESL instruction, math tutoring, and more to support academic success.</p>
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
          <button
            className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-dark-blue hover:text-white"
            onClick={() => window.location.href = "/donate"}
          >
            Donate
          </button>
          <button
            className="border border-blue text-blue px-6 py-3 rounded-lg hover:bg-blue hover:text-white"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfits6lU7kLuajJ_nXvLtHXj4ZnFtnCxjdQbMPHh3mfuqCQdg/viewform?usp=sharing", "_blank")}
          >
            Volunteer
          </button>
        </div>
      </section>


      {/* Donate Section
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
      </section> */}

      {/* Footer Section */}
      <footer className="bg-dark-blue text-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/logo.png"
              alt="Project Skyward Logo"
              width={150}
              height={150}
            />
          </div>
          {/* Contact Information */}
          <div className="text-center md:text-right text-sm">
            <p><span role="img" aria-label="phone">📞</span> Contact Us: +406-880-3340</p>
            <p><span role="img" aria-label="location">📍</span> Bloomington, IN  |  Chicago, IL  |  Indianapolis, IN</p>
            <p><span role="img" aria-label="website">🌐</span> Website: www.projectskyward.org</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
