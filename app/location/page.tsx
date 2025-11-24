"use client";
import Image from 'next/image';
import { useState } from 'react';
import NavLinks from "../components/nav-links";

export default function LocationPage() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleToggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  
  
    return (
      <div className="min-h-screen bg-light-blue text-dark-blue font-sans flex flex-col">
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
  
        <main className="flex-grow max-w-6xl mx-auto p-8 space-y-8">
          
        <h1 className="text-4xl font-bold text-center">Location Updates</h1>
          <section className="text-center mb-8">
            <p className="text-lg">
              After successfully launching our education program for Refugee and immigrant children last year, Project Skyward is buying a commercial building to offer in-person and online classes for the following residential areas:
              <ul className="list-disc list-inside text-lg mt-4">
                <li>Indianapolis and its suburban areas</li>
                <li>Chicago and its suburban areas</li>
                <li>Bloomington, Indiana</li>
                <li>More to come</li>
              </ul> 
            </p>
          </section>
  
          <section className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/FloorPlan.png"
                alt="Floor Plan of the New Building"
                className="w-full h-auto rounded-lg mb-4"
                width={300}
                height={300}
              />              
              </div>
          </section>
  
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Project Skyward appreciates your generous donations towards this goal.</h2>
              <p className="text-lg">
              Our tutoring services at Project Skyward are designed to provide comprehensive support 
              to refugee youth. We offer personalized ESL instruction, bilingual tutoring, and academic 
              assistance to help students excel in their studies. Our dedicated tutors work closely with 
              each student to address their unique needs and challenges, ensuring they receive the guidance 
              and encouragement necessary to succeed.
              </p>
          </section>
    
        </main>
  
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
              <p><span role="img" aria-label="phone">📞</span> Contact Us: +406-396-5719</p>
              {/* <p><span role="img" aria-label="location">📍</span> Bloomington, IN  |  Chicago, IL  |  Indianapolis, IN</p> */}
              <p><span role="img" aria-label="email"></span> Email: www.projectskyward2025@gmail.com</p>
              <p><span role="img" aria-label="website">🌐</span> Website: www.projectskyward.org</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  