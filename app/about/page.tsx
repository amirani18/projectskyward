"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import NavLinks from "../components/nav-links";

export default function About() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const partnerImages = [
    { src: "/MissoulaInterfaith.jpg", alt: "Missoula Interfaith Collaborative", caption: "Missoula Interfaith Collaborative is a key partner, providing support and resources to help us achieve our mission." },
    { src: "/SleepInn.png", alt: "Sleep Inn", caption: "Sleep Inn, located in Missoula, Montana, is a proud partner, helping us create a welcoming environment for our students." },
    { src: "/RedLionInn.png", alt: "Red Lion Inn", caption: "Red Lion Inn, located in Missoula, Montana, supports our mission by providing resources and support to uplift our educational program." },
    { src: "/ComfortInn.jpg", alt: "Comfort Inn", caption: "Comfort Inn, located in Missoula, Montana, is a valued partner, offering resources and support to enhance our educational programs." },
    { src: "/GhareebNawaz.png", alt: "Ghareeb Nawaz", caption: "Ghareeb Nawaz, located at the University of Illinois at Chicago, is a community partner, providing cultural insights and support to our refugee youth." },
  ];

  const nextSlide = () => {
    setCarouselIndex((carouselIndex + 1) % partnerImages.length);
  };

  const prevSlide = () => {
    setCarouselIndex((carouselIndex - 1 + partnerImages.length) % partnerImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % partnerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [partnerImages.length]);

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

      {/* Hero Summary */}
      <section className="bg-blue-100 p-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Empowering Refugee Youth Through Education</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Project Skyward supports displaced youth by bridging academic gaps, fostering inclusion, and ensuring equitable access to education.
        </p>
      </section>

      <main className="flex-grow max-w-4xl mx-auto p-8 space-y-10">
        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">500,000+</h3>
            <p className="text-sm">Refugees resettled in 10 years</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">60,000+</h3>
            <p className="text-sm">Admitted in 2023 alone</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">25%</h3>
            <p className="text-sm">Are under age 18</p>
          </div>
        </section>

        {/* 2-Column Layout */}
        <section className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
            <p>
              Each year, thousands of refugee youth enter the U.S. education system, highlighting a significant demand for specialized educational services.
              These services are crucial to bridging the academic gaps many of these students face, ensuring they receive the support needed to thrive and integrate successfully.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Aim</h2>
            <p>
              We focus on students aged 12 and up, who are among the most vulnerable in the education system.
              Our programs support both academic achievement and emotional well-being.
            </p>
          </div>
        </section>

        {/* Additional Sections */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Why We Are Unique</h2>
          <p>
            No other programs or companies provide the same comprehensive, refugee-focused educational services locally or nationally.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Why It Matters</h2>
          <p>
            Equitable education is a constitutional right. Every student—regardless of race, culture, or religion—deserves the chance to thrive.
          </p>
        </section>

        {/* Partner Carousel Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Partners and Sponsors</h2>
          <div className="relative w-full h-100 bg-black rounded-lg shadow-md overflow-hidden">
            <Image
              src={partnerImages[carouselIndex].src}
              alt={partnerImages[carouselIndex].alt}
              className="object-contain w-full h-full"
              width={800}
              height={600}
            />
            <p className="absolute bottom-0 w-full bg-light-blue text-dark-blue text-sm p-4 text-center">
              {partnerImages[carouselIndex].caption}
            </p>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark-blue text-white px-3 py-1 rounded-full">◀</button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark-blue text-white px-3 py-1 rounded-full">▶</button>
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
            <p><span role="img" aria-label="location">📍</span> Bloomington, IN  |  Chicago, IL  |  Indianapolis, IN</p>
            <p><span role="img" aria-label="website">🌐</span> Website: www.projectskyward.org</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
