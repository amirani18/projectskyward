"use client";

import React from "react";
import Image from "next/image";
import NavLinks from "../components/nav-links";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

// Load Stripe publishable key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function Donate() {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    console.error("Stripe Publishable Key is missing. Ensure the environment variable is set.");
  }

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
      <h1 className="text-4xl font-bold text-center font-bunya">Donate</h1>
      <main className="flex-grow max-w-4xl mx-auto p-8 space-y-8">
        {/* Support Mission Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-bunya">Support Our Mission</h2>
          <p className="text-lg font-roboto">
            Your generosity helps us provide essential educational services to refugee youth.
          </p>
        </section>

        {/* Donation Form Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          {stripePromise ? (
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          ) : (
            <p className="text-red-600 font-roboto">
              Unable to load the donation form. Please try again later.
            </p>
          )}
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
