// components/Footer.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const colsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      colsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const services = [
    "Application Development",
    "Mobile Applications",
    "Data Analytics",
    "AWS Services",
    "Application Re-engineering",
    "Quality Assurance",
    "Robotic Process Automation",
    "IT Staff Augmentation",
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Careers", href: "#careers" },
    { name: "Contact Us", href: "#contact" },
  ];

  const industries = [
    "BFSI", "Retails", "EPC (Engineering, Procurement & Construction)",
    "Oil & GAS", "Infrastructure", "Chemical", "Healthcare",
    "Defence", "Renewable Energy",
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-[#f8fbff] to-white relative overflow-hidden border-t border-slate-100"
    >
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#5099ff_0.8px,transparent_1px)] [background-size:40px_40px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Contact Info */}
          <div ref={(el) => (colsRef.current[0] = el)} className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">Contact Info</h3>
            
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex gap-3">
                <span className="text-[#5099ff] mt-0.5">📍</span>
                <p>504, Sunrise Business Park, Rd Number 16,<br />
                  Nehru Nagar, Wagle Industrial Estate, Thane West,<br />
                  Thane, Maharashtra 400604
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#5099ff] mt-0.5">✉️</span>
                <a href="mailto:enquiry@neweltechnologies.com" className="hover:text-[#5099ff] transition-colors">
                  enquiry@neweltechnologies.com
                </a>
              </div>

              <div className="flex gap-3">
                <span className="text-[#5099ff] mt-0.5">📞</span>
                <div>
                  <a href="tel:+919664323316" className="block hover:text-[#5099ff] transition-colors">+91 96643 23316</a>
                  <a href="tel:+917208061012" className="block hover:text-[#5099ff] transition-colors">+91 72080 61012</a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {["facebook", "twitter", "linkedin", "instagram"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white border border-slate-200 hover:border-[#5099ff] hover:text-[#5099ff] flex items-center justify-center rounded-xl transition-all duration-300"
                >
                  <span className="text-lg">{
                    social === "facebook" ? "f" :
                    social === "twitter" ? "𝕏" :
                    social === "linkedin" ? "in" : "📷"
                  }</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div ref={(el) => (colsRef.current[1] = el)} className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">Services</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {services.map((item, i) => (
                <li key={i} className="hover:text-[#5099ff] transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div ref={(el) => (colsRef.current[2] = el)} className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-[#5099ff] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div ref={(el) => (colsRef.current[3] = el)} className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900">Industries</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {industries.map((item, i) => (
                <li key={i} className="hover:text-[#5099ff] transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Reg. Office : B-9, Phase 2, Cosmos Hawaiian, GB Road, Thane, Maharashtra.<br className="md:hidden" />
            CIN : U72900MH2016PTC283148
          </p>
          <p className="text-center md:text-right">
            All Rights Reserved. Copyright © {new Date().getFullYear()} <span className="text-[#5099ff] font-medium">Newel Technologies Pvt Ltd.</span>
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 bg-white border border-slate-200 hover:border-[#5099ff] rounded-2xl flex items-center justify-center text-[#5099ff] hover:bg-[#5099ff] hover:text-white transition-all duration-300 shadow-sm"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}