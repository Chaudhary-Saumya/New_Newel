// components/IndustriesEPC.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesEPC() {

  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);


  // EPC Challenges (industry-specific, enterprise-level content)
  const challenges = [

    {
      title: "Digital Project Delivery",
      desc: "Adopt intelligent project delivery platforms with real-time collaboration, automation, and integrated digital workflows.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M9 17v-6h13M9 7h13M5 7h.01M5 17h.01M5 12h.01M9 12h13" />
        </svg>
      ),
    },

    {
      title: "Integrated Data Environment",
      desc: "Create unified data ecosystems connecting engineering, procurement, and construction processes seamlessly.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4 7v10m16-10v10M8 7v10m8-10v10M2 17h20M2 7h20" />
        </svg>
      ),
    },

    {
      title: "Real-Time Project Analytics",
      desc: "Use advanced analytics and dashboards to track progress, reduce delays, and improve operational efficiency.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M11 3v18M5 12h14M5 6h14M5 18h14" />
        </svg>
      ),
    },

    {
      title: "Automation & Engineering Efficiency",
      desc: "Automate repetitive workflows and enhance engineering productivity using modern digital engineering tools.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },

    {
      title: "Infrastructure Innovation & Sustainability",
      desc: "Build future-ready infrastructure using smart technologies and sustainable engineering practices.",
      icon: (
        <svg className="w-8 h-8 text-[#5099ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" />
        </svg>
      ),
    },

  ];


  useEffect(() => {

    const ctx = gsap.context(() => {

      // Hero animation
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


      // Cards animation
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


        // Hover lift
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

        {/* background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 pointer-events-none" />


        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

          {/* HERO */}
          <div ref={heroRef} className="text-center mb-20 lg:mb-32">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-none">
              EPC (Engineering, Procurement & Construction)
            </h1>


            <p className="mt-8 text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              The EPC industry is transforming with the adoption of smart project delivery methods, digital engineering, and automation tools.
            </p>


            <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              As projects grow in scale and complexity, organizations must embrace digital workflows, integrated data environments, and real-time analytics to improve efficiency, reduce risks, and build future-ready infrastructure.
            </p>


            <div className="mt-10 h-1.5 w-40 bg-gradient-to-r from-[#5099ff] to-blue-600 mx-auto rounded-full" />

          </div>



          {/* Challenges */}
          <div className="mb-24 lg:mb-40">

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
              Challenges We Solve for EPC Leaders
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
              Ready to Transform Your EPC Operations?
            </h2>


            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Partner with Newel to build intelligent, efficient, and future-ready EPC digital ecosystems.
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
