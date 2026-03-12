// components/IndustriesRenewableEnergy.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// Renewable Energy related images (solar panels, wind turbines, hydro power)
const heroImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop&auto=format",  // Solar farm in open landscape

"https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop&auto=format",  // Wind turbines in renewable energy field

"https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&h=600&fit=crop&auto=format",  // Hydroelectric dam / renewable power generation  // Hydro dam and renewable energy infrastructure
];

export default function IndustriesRenewableEnergy() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
        document.title = 'Industries Renewable Energy | Newel';
      }, []);

  const challenges = [
    {
      title: "Solar & Photovoltaic Expertise",
      desc: "Sourcing engineers and technicians specialized in solar panel design, installation, and grid integration for efficient clean energy capture.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Wind Energy Systems Management",
      desc: "Staffing professionals for turbine engineering, maintenance, and offshore/onshore wind farm operations to maximize energy output.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Hydro & Emerging Green Tech Innovation",
      desc: "Recruiting experts in hydroelectric systems, battery storage, and next-gen renewables like tidal or geothermal for sustainable advancements.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Sustainability Consulting & Compliance",
      desc: "Providing consultants to guide carbon reduction strategies, regulatory compliance, and ESG reporting for eco-friendly operations.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Project Management & Implementation",
      desc: "Staffing project managers to oversee renewable installations, timelines, budgets, and stakeholder coordination for successful deployments.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Hero images entrance
      if (heroImgRef.current) {
        gsap.fromTo(
          imageRefs.current,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heroImgRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );

        // Hero images hover animation
        imageRefs.current.forEach((img) => {
          if (!img) return;
          img.addEventListener("mouseenter", () => {
            gsap.to(img, {
              y: -8,
              boxShadow: "0 30px 60px -12px rgba(80, 153, 255, 0.35)",
              duration: 0.4,
              ease: "power2.out",
            });
          });
          img.addEventListener("mouseleave", () => {
            gsap.to(img, {
              y: 0,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              duration: 0.4,
              ease: "power2.out",
            });
          });
        });
      }

      // Card stagger reveal
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
            delay: i * 0.12,
          }
        );
      });

      // CTA entrance
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Card hover lift
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(80, 153, 255, 0.25)",
            duration: 0.4,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <section ref={sectionRef} className="relative min-h-screen bg-white py-20 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Hero Section */}
          <div ref={heroRef} className="text-center mb-20 lg:mb-32">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-none">
              Renewable Energy
            </h1>
            <p className="mt-8 text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              As the renewable energy sector expands, so does the need for specialized talent in solar, wind, hydro, and emerging green technologies.
            </p>
            <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              We support energy companies with engineers, sustainability consultants, project managers, and technicians who are passionate about clean energy and innovation. Our staffing services help drive a greener tomorrow.
            </p>
            <div className="mt-10 h-1.5 w-40 bg-gradient-to-r from-[#5099ff] to-blue-600 mx-auto rounded-full" />
          </div>

          {/* Hero Images Section */}
          <div ref={heroImgRef} className="mb-24 lg:mb-40">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
              Our Renewable Energy Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {heroImages.map((img, index) => (
                <div 
                  key={index}
                  ref={(el) => (imageRefs.current[index] = el)}
                  className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`Renewable Energy Solution ${index + 1}`}
                    className="w-full h-64 lg:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-lg">
                      {index === 0 ? "Solar Power Excellence" : index === 1 ? "Wind Energy Innovation" : "Hydro & Green Tech"}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      {index === 0 ? "Advanced solar installations" : index === 1 ? "Efficient wind turbine systems" : "Sustainable hydro solutions"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges Section */}
          <div className="mb-24 lg:mb-40">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
              Challenges We Solve for Renewable Energy Leaders
            </h2>

            {/* First row - 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
              {challenges.slice(0, 3).map((challenge, index) => (
                <div
                  key={challenge.title}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100/80 p-8 lg:p-10 hover:shadow-2xl hover:shadow-[#5099ff]/30 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#5099ff]/10 flex items-center justify-center mb-6 text-3xl">
                    {challenge.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#5099ff] transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                    {challenge.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Second row - 2 centered cards */}
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-12">
              {challenges.slice(3).map((challenge, index) => (
                <div
                  key={challenge.title}
                  ref={(el) => (cardRefs.current[index + 3] = el)}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100/80 p-6 md:p-8 lg:p-10 hover:shadow-2xl hover:shadow-[#5099ff]/30 transition-all duration-500 w-full md:max-w-sm lg:max-w-md"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#5099ff]/10 flex items-center justify-center mb-4 md:mb-6 text-2xl md:text-3xl">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-[#5099ff] transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                    {challenge.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Block */}
          <div ref={ctaRef} className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 shadow-lg border border-blue-100/50">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Drive a Greener Tomorrow?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Staff passionate experts in renewables with Newel to fuel innovation and sustainability.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#5099ff] to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#5099ff]/40 transition-all duration-300 hover:-translate-y-1"
            >
              Start the Conversation →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}