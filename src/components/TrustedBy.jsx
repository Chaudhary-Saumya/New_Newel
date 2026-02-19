// components/TrustedBy.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bajaj from "../assets/Bajaj.png";
import Edelwises from "../assets/Edelwises.png";
import C2lbiz from "../assets/C2lbiz.png";
import YesSecurity from "../assets/YesSecurity.png";
import Avanse from "../assets/Avanse.png";
import Dovetail from "../assets/Dovetail.png";
import Envea from "../assets/Envea.png";
import IIFL from "../assets/IIFL.png";
import JmFinance from "../assets/JmFinance.png";
import MotilalOswal from "../assets/MotilalOswal.png";
import Relience from "../assets/Relience.png";
import Ventura from "../assets/Ventura.png";
import YesBank from "../assets/YesBank.png";
import i3Info from "../assets/3iInfo.png";
import Alfa from "../assets/Alfa.png";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  Bajaj, Edelwises, C2lbiz, YesSecurity, Avanse,
  Dovetail, Envea, IIFL, JmFinance, MotilalOswal,
  Relience, Ventura, YesBank, i3Info, Alfa,
];

const duplicatedLogos = [...logos, ...logos];

export default function TrustedBy() {
  const sectionRef = useRef(null);
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);
  const headingRef = useRef(null);

  let tl1, tl2;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Marquee 1 → scrolls LEFT
      tl1 = gsap.to(marquee1Ref.current, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      // Marquee 2 → scrolls RIGHT
      gsap.set(marquee2Ref.current, { xPercent: -50 });
      tl2 = gsap.to(marquee2Ref.current, {
        xPercent: 0,
        duration: 35,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    // Pause on hover
    const pauseMarquees = () => {
      tl1?.pause();
      tl2?.pause();
    };
    const resumeMarquees = () => {
      tl1?.resume();
      tl2?.resume();
    };

    const section = sectionRef.current;
    section.addEventListener("mouseenter", pauseMarquees);
    section.addEventListener("mouseleave", resumeMarquees);

    return () => {
      ctx.revert();
      section.removeEventListener("mouseenter", pauseMarquees);
      section.removeEventListener("mouseleave", resumeMarquees);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Our Clients
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Trusted by the most innovative companies in India and beyond
          </p>
        </div>
      </div>

      {/* Marquee 1 - Left scroll */}
      <div className="relative overflow-hidden py-6 bg-white">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div
          ref={marquee1Ref}
          className="flex items-center gap-16 whitespace-nowrap will-change-transform"
        >
          {duplicatedLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 group">
              <img
                src={logo}
                alt="Client logo"
                className="h-11 md:h-14 w-auto object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee 2 - Right scroll */}
      <div className="relative overflow-hidden py-6 bg-white -mt-3">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div
          ref={marquee2Ref}
          className="flex items-center gap-16 whitespace-nowrap will-change-transform"
        >
          {duplicatedLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 group">
              <img
                src={logo}
                alt="Client logo"
                className="h-11 md:h-14 w-auto object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}