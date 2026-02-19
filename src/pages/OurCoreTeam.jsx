// components/OurCoreTeam.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import T1 from "../assets/T1.jpg";
import T2 from "../assets/T2.png";
import T3 from "../assets/T3.png";
import T4 from "../assets/T4.png";
import T5 from "../assets/T5.jpeg";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Mr. Pravin Narhe",
    role: "CEO",
    image: T1,
  },
  {
    name: "Mr. Yogesh Wadile",
    role: "Delivery Head",
    image: T2,
  },
  {
    name: "Mr. Sachin Shinde",
    role: "COO",
    image: T3,
  },
  {
    name: "Mr. Atish Tambe",
    role: "HR Head",
    image: T4,
  },
  {
    name: "Mr. Vishwas Punekar",
    role: "Business & Technologies Advisor",
    image: T5,
  },
];

export default function OurCoreTeam() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll snap + smooth pinning
      let scrollTween = gsap.to(cardsRef.current, {
        xPercent: -100 * (teamMembers.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.5,
          end: () => "+=" + containerRef.current.offsetWidth,
          invalidateOnRefresh: true,
        },
      });

      // Individual card entrance & parallax
      cardsRef.current.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: 200 },
          {
            opacity: 1,
            x: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 80%",
              once: true,
            },
          },
        );

        const img = card.querySelector(".team-image");

        gsap.to(img, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            scrub: true,
          },
        });
      });

      // Hover interactions
      cardsRef.current.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.06,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".overlay"), {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".overlay"), {
            opacity: 0,
            y: 30,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen overflow-hidden">
        {/* Background subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e520_1px,transparent_1px)] bg-size-[60px_60px] opacity-20 pointer-events-none" />

        <div className="relative z-10">
          {/* Hero Intro */}
          <div className="text-center pt-20 pb-16 lg:pt-20 lg:pb-24">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight">
              <span className="block bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent text-6xl">
                The Leadership
              </span>
              <span className="block mt-2">Behind Newel</span>
            </h1>
            <p className="mt-6 text-xl lg:text-2xl text-gray-800 max-w-4xl mx-auto px-6">
              Seasoned experts combining decades of domain mastery, technical
              brilliance, and unwavering client focus.
            </p>
          </div>

          {/* Horizontal scroll container */}
          <div
            ref={containerRef}
            className="relative h-[80vh] lg:h-screen flex items-center overflow-hidden"
          >
            <div className="flex gap-8 lg:gap-16 px-6 lg:px-20">
              {teamMembers.map((member, i) => (
                <div
                  key={member.name}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="group relative w-[320px] sm:w-95 lg:w-115 h-105 lg:h-135 shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50"
                >
                  {/* Image fills entire card */}
                  {/* Image wrapper (IMPORTANT FIX) */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image w-full h-[120%] object-cover absolute top-0 left-0 transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Info overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="overlay opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <p className="text-xl lg:text-2xl font-medium text-blue-400">
                        {member.role}
                      </p>
                      <p className="mt-3 text-base lg:text-lg text-gray-300">
                        {member.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final statement */}
          <div className="text-center py-20 lg:py-32 px-6">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 tracking-tight">
              One Team. One Vision.
            </h2>
            <p className="mt-6 text-xl lg:text-2xl text-gray-500 max-w-4xl mx-auto">
              United by purpose, driven by excellence, and committed to
              transforming businesses through technology.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
