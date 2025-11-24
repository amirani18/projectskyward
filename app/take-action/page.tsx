"use client";
import React, { useState, JSX } from "react";
import Image from 'next/image';
import NavLinks from "../components/nav-links";

export default function TakeAction(): JSX.Element {
  const [showPopup, setShowPopup] = useState(false);
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
      <h1 className="text-4xl font-bold text-center">Take Action</h1>
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Join Us in Making a Difference</h2>
          <p className="text-lg">
            Help us empower refugee youth and make a lasting impact by taking action today.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Volunteer Button */}
          <div>
            <button
              className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-dark-blue"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfits6lU7kLuajJ_nXvLtHXj4ZnFtnCxjdQbMPHh3mfuqCQdg/viewform?usp=sharing", "_blank")}
            >
              Volunteer
            </button>
          </div>

          {/* Donate Button */}
          <div>
            <button
              className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-dark-blue"
              onClick={() => window.location.href = "/donate"}
            >
              Donate
            </button>
          </div>

          {/* Spread the Word Button */}
          <div>
            <button
              className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-dark-blue"
              onClick={() => setShowPopup(!showPopup)}
            >
              Spread the Word
            </button>
            {showPopup && (
              <div className="mt-4 bg-white text-dark-blue p-4 rounded-lg shadow-lg">
                <p className="text-lg font-semibold">Spread the Word</p>
                <p className="text-sm mt-2">
                  Follow us on <a href="https://www.tiktok.com" target="_blank" className="text-blue underline">TikTok</a> and
                  <a href="https://www.instagram.com" target="_blank" className="text-blue underline"> Instagram</a>. Share our mission with your friends and family!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Animation Section */}
        <section className="mt-12 text-center">
          <p className="text-lg mb-4">Together, we can make a difference!</p>
          <div className="w-full h-64 bg-gradient-to-b from-light-blue to-white flex items-center justify-center">
          <Image
            src="/students-studying.png"
            alt="Students Studying"
            width={800}
            height={600}
            className="h-full object-contain"
          />
          </div>
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
