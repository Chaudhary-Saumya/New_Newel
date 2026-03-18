// components/IndustriesHeavyEquipmentManufacturing.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// Heavy Equipment Manufacturing related images (assembly lines & machinery)
const heroImages = [
  "https://i.ytimg.com/vi/eGCKZPRQTdQ/maxresdefault.jpg",      // SANY excavator assembly line
  "https://img.website.xin/contents/sitefiles3606/18031187/images/9063495.jpg",  // Modern excavator production
  "https://i.ytimg.com/vi/M2SE6mqVpLU/maxresdefault.jpg",      // Massive heavy equipment factory
];

export default function EquipmentManufacturing() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
        document.title = 'Industries Manufacturing | Newel';
      }, []);

  const challenges = [
    {
      title: "Skilled Talent Acquisition & Retention",
      desc: "Sourcing and retaining expert machinists, welders, and technicians in a competitive labor market.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Precision Manufacturing & Quality Control",
      desc: "Maintaining tight tolerances and rigorous quality standards across complex components and assemblies.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Supply Chain Resilience & Component Sourcing",
      desc: "Managing global supply chains for critical parts while mitigating disruptions and cost volatility.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-3-4H7L4 7m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0H4" />
        </svg>
      ),
    },
    {
      title: "Innovation & R&D Pipeline Acceleration",
      desc: "Developing next-generation equipment with advanced hydraulics, automation, and sustainability features.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Workforce Scaling for Production Goals",
      desc: "Rapidly building teams of design engineers, assembly specialists, and QC professionals to meet demand surges.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM6 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-none">
              Heavy Equipment Manufacturing
            </h1>
            <p className="mt-8 text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              We help manufacturers build and scale teams with skilled machinists, assembly technicians, design engineers, and quality control professionals.
            </p>
            <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Our recruitment services support your production goals and innovation pipeline in this demanding industrial sector.
            </p>
            <div className="mt-10 h-1.5 w-40 bg-gradient-to-r from-[#5099ff] to-blue-600 mx-auto rounded-full" />
          </div>

          {/* Hero Images Section */}
          <div ref={heroImgRef} className="mb-24 lg:mb-40">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
              Our Heavy Equipment Manufacturing Solutions
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
                    alt={`Manufacturing Solution ${index + 1}`}
                    className="w-full h-64 lg:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-lg">
                      {index === 0 ? "Assembly Line Precision" : index === 1 ? "Advanced Production" : "Heavy Machinery Innovation"}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      {index === 0 ? "State-of-the-art equipment assembly" : index === 1 ? "Efficient manufacturing workflows" : "Next-gen design & engineering"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges Section */}
          <div className="mb-24 lg:mb-40">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
              Challenges We Solve for Manufacturing Leaders
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
                  <h3 className="text-2xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#5099ff] transition-colors">
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
                  <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-[#5099ff] transition-colors">
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
              Ready to Scale Your Heavy Equipment Production?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Build powerful, skilled teams and drive manufacturing excellence with Newel.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#5099ff] to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#5099ff]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <Link to={'/contact'}> Start the Conversation →</Link>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}