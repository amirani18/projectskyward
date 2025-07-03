"use client";
import Image from 'next/image';
import { useState } from 'react';
import NavLinks from "../components/nav-links";

export default function PromotionalClasses() {
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
        
      <h1 className="text-4xl font-bold text-center">Promotional South Asian Cooking Classes</h1>
        <section className="text-center mb-8">
          <p className="text-lg">
          Project Skyward is raising funds towards buying a school building in a commercial area. In an effort to promote our educational program, 
          we are offering a variety of promotional classes in the Fall of 2025. 
          </p>
          <p className="text-lg mt-4">
            Learn how to cook authentic South Asian dishes with our expert chefs.
            Join us for a series of hands-on cooking classes where you will learn to prepare traditional recipes
            from various South Asian cuisines. Whether you are a beginner or an experienced cook, our classes
            are designed to enhance your culinary skills and introduce you to the rich flavors and techniques of South Asian cooking. 
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center"> Class Details </h3>
            <ul className="text-lg">
                <li>Each class involves two hours of creating a dish from the South Asian cuisine. Twenty students may be admitted per class.</li>
                <li>Pricing Options for Admission:</li>
            </ul>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-light-blue p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-center"> General Admission </h3>
                    <p className="text-4xl font-semibold text-center">
                    $150
                    </p>
                    {/* <p className="text-sm">
                    Includes all materials and ingredients.
                    </p> */}
                </div>
                <div className="bg-light-blue p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-center"> Weekly Package </h3>
                    <p className="text-4xl font-semibold text-center">
                    $550
                    </p>
                    {/* <p className="text-sm">
                    Includes all materials and ingredients.
                    </p> */}
                </div>
              </section>
            <p className="mt-2 text-sm font-semibold">
              All pricing options include materials and ingredients at every class.
            </p>
            </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4"> Chicken Dishes </h3>
            <Image
              src="/NonVeg.jpg"
              alt="Non-Vegetarian Dishes"
              className="w-full h-auto rounded-lg mb-4"
              width={600}
              height={600}
            />
            <ul className="text-lg list-disc list-inside">
              <li>Chicken Jalfezi</li>
              <li>Hyderabadi Shahi Korma</li>
              <li>Chicken Karahi</li>
              <li>Chicken and Potato Curry</li>
              <li>Butter Chicken</li>
            </ul>
            <p className="mt-2 text-sm font-semibold">
              Key Outcomes: Mastery of traditional chicken dishes.
            </p>
            </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Vegetarian Dishes</h3>
            <Image
              src="/Vegetarian.jpg"
              alt="Vegetarian Dishes"
              className="w-full h-auto rounded-lg mb-4"
              width={600}
              height={600}
            />
            <ul className="text-lg list-disc list-inside">
              <li>Cauliflower, Peas, and Potato Curry</li>
              <li>Vegetable Red Curry</li>
              <li>Zucchini cooked with Bell Pepper and Tomato</li>
              <li>Egg Plant Curry</li>
              <li>South Asian Lentil Soup</li>
            </ul>
            <p className="mt-2 text-sm font-semibold">
              Key Outcomes: Mastery of traditional vegetarian dishes, enhanced cooking skills, and a deeper understanding of South Asian culinary techniques as also gained in Chicken-based cooking classes.
            </p>
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
