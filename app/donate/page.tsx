"use client";

import React from "react";
import Image from "next/image";
import NavLinks from "../components/nav-links";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

// Use the environment variable
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function Donate() {
  return (
    <div className="min-h-screen bg-light-blue text-dark-blue font-sans flex flex-col">
      <header className="bg-dark-blue text-white p-6">
        {/* Header Section */}
        <nav className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Project Skyward</h1>
          <Image
            src="/logo_projectskyward.png"
            alt="Project Skyward Logo"
            width={50}
            height={50}
          />
          <NavLinks />
        </nav>
      </header>

      <h1 className="text-4xl font-bold text-center">Donate</h1>
      <main className="flex-grow max-w-4xl mx-auto p-8 space-y-8">
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

      <footer className="bg-dark-blue text-white p-6 text-center">
        <p>Contact us: +123-456-7890 | 123 Anywhere St., Any City, ST 12345</p>
        <p>Website: www.reallygreatsite.com</p>
      </footer>
    </div>
  );
}
