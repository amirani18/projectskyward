"use client";
import Image from 'next/image';
import { useState } from 'react';
import NavLinks from "../components/nav-links";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CompetitionPayment from "../components/CompetitionPayment";

// Use the environment variable
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function Competitions() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-h-screen bg-white text-dark-blue font-sans flex flex-col">
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
        
      <h1 className="text-4xl font-bold text-center">2025-2026 Competition</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tile 1 - Essay Competition */}
          <div className="bg-light-blue rounded-lg shadow-md p-4 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2 text-center">📜 Essay Competition</h3>
            <embed
              src="/ESSAY_WRITING_CONTEST.pdf"
              type="application/pdf"
              width="100%"
              height="400px"
              className="rounded border border-gray-300"
            />
            <a href="/ESSAY_WRITING_CONTEST.pdf" target="_blank" className="mt-3 text-sm text-blue-700 underline">View Fullscreen</a>
          </div>

          {/* Tile 2 - Art Competition */}
          <div className="bg-light-blue rounded-lg shadow-md p-4 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2 text-center">🎨 Art Competition</h3>
            <embed
              src="/ART_COMPETITION.pdf"
              type="application/pdf"
              width="100%"
              height="400px"
              className="rounded border border-gray-300"
            />
            <a href="/ART_COMPETITION.pdf" target="_blank" className="mt-3 text-sm text-blue-700 underline">View Fullscreen</a>
          </div>

          {/* Tile 3 - Math Competition */}
          <div className="bg-light-blue rounded-lg shadow-md p-4 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2 text-center">🧮 Math Competition</h3>
            <embed
              src="/MATH_COMPETITION.pdf"
              type="application/pdf"
              width="100%"
              height="400px"
              className="rounded border border-gray-300"
            />
            <a href="/MATH_COMPETITION.pdf" target="_blank" className="mt-3 text-sm text-blue-700 underline">View Fullscreen</a>
          </div>
        </div>

        {/* Payment Section */}
        <section className="bg-light-blue p-6 rounded-lg shadow-lg">
          <Elements stripe={stripePromise}>
            <CompetitionPayment />
          </Elements>
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
            <p><span role="img" aria-label="location">📍</span> Bloomington, IN  |  Chicago, IL  |  Indianapolis, IN</p>
            <p><span role="img" aria-label="website">🌐</span> Website: www.projectskyward.org</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
