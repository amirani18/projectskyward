"use client";

import React from "react";
import Image from "next/image";
import NavLinks from "../components/nav-links";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

// Use the environment variable
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function Donate() {
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

      <main className="flex-grow max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">Donate</h1>
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Support Our Mission</h2>
          <p className="text-lg">
            Your generosity helps us provide essential educational services to refugee youth.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
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
