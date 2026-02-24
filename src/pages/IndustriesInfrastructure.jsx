// components/IndustriesInfrastructure.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

// Infrastructure related images
const heroImages = [
  "https://images.unsplash.com/photo-1519003300448-174fa1e012e9?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
];

export default function IndustriesInfrastructure() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);
  const ctaRef = useRef(null);

  const challenges = [
    {
      title: "Civil Engineering Excellence",
      desc: "Empower infrastructure projects with highly skilled civil engineers, structural experts, and technical professionals.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 8h6M9 12h6M9 16h6M4 21V7a2 2 0 012-2h12a2 2 0 012 2v14" />
        </svg>
      ),
    },
    {
      title: "Smart Cities & Urban Development",
      desc: "Build intelligent urban ecosystems with modern infrastructure technologies and digital integration.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-4a2 2 0 01-2-2V12H9v8a2 2 0 01-2 2H3z" />
        </svg>
      ),
    },
    {
      title: "Construction Management",
      desc: "Ensure efficient project delivery through expert construction managers and site supervisors.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
    },
    {
      title: "Sustainable Infrastructure",
      desc: "Drive environmentally responsible development aligned with sustainability and green initiatives.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
        </svg>
      ),
    },
    {
      title: "Digital Infrastructure Transformation",
      desc: "Leverage cloud, analytics, and automation to modernize infrastructure operations and project management.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581" />
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
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Hero Section */}
          <div ref={heroRef} className="text-center mb-20 lg:mb-32">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-none">
              Infrastructure
            </h1>
            <p className="mt-8 text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Building the future requires people with vision and precision.
            </p>
            <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Newel supports infrastructure companies with civil engineers, construction managers, and skilled professionals delivering roads, bridges, smart cities, and sustainable development projects.
            </p>
            <div className="mt-10 h-1.5 w-40 bg-gradient-to-r from-[#5099ff] to-blue-600 mx-auto rounded-full" />
          </div>

          {/* Hero Images Section */}
          <div ref={heroImgRef} className="mb-24 lg:mb-40">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
              Our Infrastructure Solutions
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
                    alt={`Infrastructure Solution ${index + 1}`}
                    className="w-full h-64 lg:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-lg">
                      {index === 0 ? "Smart Bridges" : index === 1 ? "Urban Development" : "Sustainable Cities"}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      {index === 0 ? "Engineered for longevity" : index === 1 ? "Modern city planning" : "Eco-friendly infrastructure"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges Section */}
          <div className="mb-24 lg:mb-40">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
              Challenges We Solve for Infrastructure Leaders
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
              Ready to Build the Future of Infrastructure?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Partner with Newel to deliver intelligent, scalable, and future-ready infrastructure solutions.
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

