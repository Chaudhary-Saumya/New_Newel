// components/IndustriesEngineering.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesEngineering() {

  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);


  const challenges = [

    {
      title: "Mechanical Engineering Expertise",
      desc: "Deliver highly skilled mechanical engineers capable of designing, developing, and optimizing industrial systems.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M9.75 3a.75.75 0 01.75.75V6h3V3.75a.75.75 0 011.5 0V6h1.5a.75.75 0 010 1.5H15v3h3.75a.75.75 0 010 1.5H15v1.5a.75.75 0 01-1.5 0V12h-3v3.75a.75.75 0 01-1.5 0V12H6.75a.75.75 0 010-1.5H9v-3H5.25a.75.75 0 010-1.5H9V3.75A.75.75 0 019.75 3z"/>
        </svg>
      ),
    },

    {
      title: "Electrical Engineering Solutions",
      desc: "Support energy, manufacturing, and infrastructure sectors with advanced electrical engineering talent.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
    },

    {
      title: "Civil Engineering & Structural Design",
      desc: "Provide civil engineers specializing in structural analysis, construction planning, and infrastructure development.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 21h18M9 8h6M9 12h6M9 16h6M4 21V7a2 2 0 012-2h12a2 2 0 012 2v14"/>
        </svg>
      ),
    },

    {
      title: "Process Engineering Optimization",
      desc: "Improve industrial efficiency through process engineering, automation, and system optimization.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581"/>
        </svg>
      ),
    },

    {
      title: "Engineering Workforce Solutions",
      desc: "Build strong engineering teams ready to meet project demands across manufacturing, infrastructure, and energy sectors.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14v7m-7 0h14"/>
        </svg>
      ),
    },

  ];


  useEffect(() => {

    const ctx = gsap.context(() => {

      // HERO animation
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


      // CARDS animation
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


      // CTA animation
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

        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">


          {/* HERO */}
          <div ref={heroRef} className="text-center mb-20 lg:mb-32">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-none">
              Engineering
            </h1>


            <p className="mt-8 text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Whether mechanical, electrical, civil, or process engineering — engineering drives industrial innovation.
            </p>


            <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Newel provides highly qualified engineers ready to meet technical and project demands across industries including manufacturing, infrastructure, and energy.
            </p>


            <div className="mt-10 h-1.5 w-40 bg-gradient-to-r from-[#5099ff] to-blue-600 mx-auto rounded-full" />

          </div>



          {/* CHALLENGES */}
          <div className="mb-24 lg:mb-40">

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
              Challenges We Solve for Engineering Leaders
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
              Ready to Build World-Class Engineering Teams?
            </h2>


            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Partner with Newel to deliver high-performance engineering solutions across industries.
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
