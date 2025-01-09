"use client";
import Image from 'next/image';
import { useState } from 'react';
import NavLinks from "../components/nav-links";

export default function Services() {
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
        
      <h1 className="text-4xl font-bold text-center">Service Overview</h1>
        <section className="text-center mb-8">
          <p className="text-lg">
            At Project Skyward, we are committed to providing a holistic suite of services
            designed to help refugee youth overcome the unique challenges they face
            when integrating into the U.S. school system. With a focus on language
            development, academic support, cultural integration, and emotional
            well-being, our programs are tailored to meet the specific needs of
            newly-arrived refugee students. Our goal is to ensure every child has the
            opportunity to succeed academically, socially, and emotionally, regardless
            of their background or the barriers they face.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4"> Bilingual Education Program</h3>
            <p className="text-lg">
              English as a Second Language (ESL) instruction. Bilingual tutoring and
              classwork assistance. Scroll to learn more.
            </p>
            <p className="mt-2 text-sm font-semibold">
              Key Outcomes: Increased academic performance, better classroom
              participation, and improved language skills.
            </p>
            </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Academic Support and Mentorship</h3>
            <p className="text-lg">
              One-on-one tutoring in core subjects. After-school study programs. Pairing
              students with mentors. 
            </p>
            <p className="mt-2 text-sm font-semibold">
              Key Outcomes: Improved grades, increased retention rates, and strengthened
              study habits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Culturally Responsive Teaching</h3>
            <p className="text-lg">
              Curriculum integration that reflects diverse cultures and experiences.
              Activities that celebrate cultural diversity and promote mutual respect.
            </p>
            <p className="mt-2 text-sm font-semibold">
              Key Outcomes: Stronger family involvement, increased social connections,
              and a smoother transition for students into their new environment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Community Integration Programs</h3>
            <p className="text-lg">
              Social integration workshops. Family support programs. Cultural exchange
              activities.
            </p>
            <p className="mt-2 text-sm font-semibold">
              Key Outcomes: Enhanced engagement, a sense of belonging, and higher levels
              of academic achievement.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Deep Dive Into Our Tutoring Services</h2>
            <p className="text-lg">
            Our tutoring services at Project Skyward are designed to provide comprehensive support 
            to refugee youth. We offer personalized ESL instruction, bilingual tutoring, and academic 
            assistance to help students excel in their studies. Our dedicated tutors work closely with 
            each student to address their unique needs and challenges, ensuring they receive the guidance 
            and encouragement necessary to succeed.
            </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4"> English as a Second Language (ESL) instruction. </h3>
            <p className="text-lg">
              English as a Second Language (ESL) instruction for academic success.
              Bilingual tutoring is a form of educational support where a tutor provides instruction in two languages,
              allowing students to learn and practice academic concepts in both their native language and a second
              language, typically used to assist English Language Learners (ELLs) by bridging the gap between
              their native tongue and English proficiency.


              Unlike other English teaching programs in the country, we focus teaching youth English Grammar. Easy
              writing, and fluency in speaking English. Through our social integration program, we provide newly
              arrived youth cultural and historical awareness of their new home country.
            </p>
            <p className="mt-2 text-sm font-semibold">
              Key Outcomes of ESL Tutoring: Enhanced English proficiency, improved academic performance, and increased confidence in classroom participation.
            </p>
            </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Math Tutoring</h3>
            <p className="text-lg">
              Bilingual math tutoring to help bridge academic gaps.
              Our bilingual teachers provide most needed educational help in middle school Math, algebra, geometry,
              Calculus 1 and Calculus 2 to help refugee and immigrant children move forward to their regular class
              level as many refugee and immigrant children are admitted two years behind their actual class level.
              For example, a newly arrived 9th grader is placed in 7th grad at any middle or high school in the United
              States. We provide them with the necessary help to move forward to their actual class level.
            </p>
            <p className="mt-2 text-sm font-semibold">
              Key Outcomes: Enhanced mathematical understanding, improved problem-solving skills, and better performance in math-related subjects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Computer Science Tutoring</h3>
            <p className="text-lg">
              Bilingual computer science tutoring to foster technical skills.
              Our bilingual teachers provide computer science tutoring to refugee and immigrant children, focusing on
              foundational skills in programming, web development, and computer literacy. This includes teaching coding
              languages such as Python, JavaScript, and HTML/CSS, as well as essential computer skills like using software
              applications and understanding basic hardware components. By equipping students with these technical skills,
              we aim to enhance their educational and career opportunities in the technology sector.
            </p>
            <p className="mt-2 text-sm font-semibold">
              Key Outcomes: Enhanced technical skills, increased interest in STEM fields, and better preparation for technology-related careers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">SAT and ACT Preparation for College Admission</h3>
            <p className="text-lg">
              Bilingual SAT and ACT preparation for college admission.
              We provide excellent services for SAT and ACT preparation free of charge as most Refugee/immigrant
              youth are unaware of the American school system and requirements for college admissions. Our bilingual SAT
              and ACT preparation program helps bridge this gap by providing comprehensive instruction and practice in
              test-taking strategies, critical reading, math, and writing skills. This ensures that students are well-prepared
              to achieve competitive scores and meet college admission requirements.
            </p>
            <p className="mt-2 text-sm font-semibold">
              Key Outcomes: Higher SAT and ACT scores, increased college admission rates, and enhanced test-taking confidence.
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
            <p><span role="img" aria-label="phone">📞</span> Contact Us: +406-880-3340</p>
            <p><span role="img" aria-label="location">📍</span> Bloomington, IN  |  Chicago, IL  |  Indianapolis, IN</p>
            <p><span role="img" aria-label="website">🌐</span> Website: www.projectskyward.org</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
