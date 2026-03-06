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

// Duplicate logos for seamless infinite scroll
const duplicatedLogos = [...logos, ...logos, ...logos];

export default function TrustedBy() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const headingRef = useRef(null);

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

      // Infinite seamless marquee scroll
      const marquee = marqueeRef.current;
      const totalWidth = marquee.scrollWidth / 3;
      
      gsap.fromTo(
        marquee,
        { x: 0 },
        {
          x: -totalWidth,
          duration: 25,
          ease: "none",
          repeat: -1,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our Clients
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Trusted by the most innovative companies in India and beyond
          </p>
        </div>
      </div>

      {/* Single Infinite Marquee - Seamless scroll */}
      <div className="relative overflow-hidden py-8 bg-white">
        {/* Edge fade effects */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div
          ref={marqueeRef}
          className="flex items-center gap-20 whitespace-nowrap will-change-transform"
        >
          {duplicatedLogos.map((logo, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Client logo"
                className="h-12 md:h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

