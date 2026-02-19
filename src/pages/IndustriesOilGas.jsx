// components/IndustriesOilGas.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesOilGas() {

  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);


  const challenges = [

    {
      title: "Workforce & Talent Optimization",
      desc: "Deploy highly skilled engineers, geoscientists, and technical professionals to ensure operational excellence.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14v7m-7 0h14" />
        </svg>
      ),
    },

    {
      title: "Safety & Regulatory Compliance",
      desc: "Ensure strict adherence to safety standards, environmental regulations, and global compliance requirements.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622" />
        </svg>
      ),
    },

    {
      title: "Upstream, Midstream & Downstream Support",
      desc: "Provide end-to-end staffing and digital solutions across exploration, production, refining, and distribution.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      ),
    },

    {
      title: "Operational Continuity & Efficiency",
      desc: "Ensure uninterrupted operations through intelligent workforce deployment and technology integration.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },

    {
      title: "Digital Transformation for Energy Sector",
      desc: "Modernize legacy oil and gas systems using cloud, analytics, and automation technologies.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581" />
        </svg>
      ),
    },

  ];


  useEffect(() => {

    const ctx = gsap.context(() => {

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


      cardRefs.current.forEach((card, i) => {

        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );


        card.addEventListener("mouseenter", () => {

          gsap.to(card, {
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(80,153,255,0.25)",
            duration: 0.4,
          });

        });


        card.addEventListener("mouseleave", () => {

          gsap.to(card, {
            y: 0,
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            duration: 0.5,
          });

        });

      });


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


    }, sectionRef);

    return () => ctx.revert();

  }, []);



  return (
    <>
      <Navbar />

      <section
        ref={sectionRef}
        className="relative min-h-screen bg-white py-20 lg:py-20 overflow-hidden"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">


          {/* HERO */}
          <div ref={heroRef} className="text-center mb-20 lg:mb-32">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-none">
              Oil & Gas
            </h1>

            <p className="mt-8 text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              The Oil & Gas sector requires a workforce that balances technical expertise with safety and compliance awareness.
            </p>

            <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Whether upstream, midstream, or downstream, Newel provides specialized talent and digital solutions to ensure operational continuity and regulatory compliance.
            </p>

            <div className="mt-10 h-1.5 w-40 bg-gradient-to-r from-[#5099ff] to-blue-600 mx-auto rounded-full" />

          </div>



          {/* CHALLENGES */}
          <div className="mb-24 lg:mb-40">

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
              Challenges We Solve for Oil & Gas Leaders
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

              {challenges.map((challenge, index) => (

                <div
                  key={challenge.title}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100/80 p-8 lg:p-10 hover:shadow-2xl hover:shadow-[#5099ff]/30 transition-all duration-500"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#5099ff]/10 flex items-center justify-center mb-6">
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

          </div>



          {/* CTA */}
          <div
            ref={ctaRef}
            className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 shadow-lg border border-blue-100/50"
          >

            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Oil & Gas Operations?
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Partner with Newel to build intelligent, compliant, and future-ready energy solutions.
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
