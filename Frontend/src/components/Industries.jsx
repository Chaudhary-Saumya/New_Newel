import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { 
    name: "BFSI", 
    link: "/industries/bfsi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    desc: "The biggest trend defining the global financial services industry is digital disruption." 
  },
  { 
    name: "Retail", 
    link: "/industries/retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    desc: "Creating meaningful experiences to enhance customer journeys in today's digital world." 
  },
  { 
    name: "EPC", 
    link: "/industries/epc",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    desc: "Engineering, Procurement & Construction — delivering complex infrastructure projects." 
  },
  { 
    name: "Oil & Gas", 
    link: "/industries/oil-gas",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80",
    desc: "Smart digital transformation for energy & natural resources." 
  },
  { 
    name: "Infrastructure", 
    link: "/industries/infrastructure",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    desc: "Building smarter infrastructure with cutting-edge technology solutions." 
  },
  { 
    name: "Engineering", 
    link: "/industries/engineering",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    desc: "Advanced engineering solutions for modern manufacturing and design." 
  },
  { 
    name: "Heavy Equipment Manufacturing", 
    link: "/industries/Manufacturing",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    desc: "Revolutionizing heavy equipment manufacturing with automation and IoT." 
  },
  { 
    name: "OEM", 
    link: "/industries/OEM",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    desc: "Original Equipment Manufacturer solutions for global supply chains." 
  },
  { 
    name: "Chemical", 
    link: "/industries/Chemical",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    desc: "Digital transformation for chemical processing and manufacturing." 
  },
  { 
    name: "Petrochemical", 
    link: "/industries/Petrochemical",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
    desc: "Innovative solutions for petrochemical industry optimization." 
  },
  { 
    name: "Healthcare", 
    link: "/industries/Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    desc: "Revolutionizing healthcare with digital health solutions and telemedicine." 
  },
  { 
    name: "Building Materials", 
    link: "/industries/BuildingMaterials",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    desc: "Modernizing building materials production with smart technologies." 
  },
  { 
    name: "Metal & Minerals", 
    link: "/industries/MetalMinerals",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    desc: "Enhancing metal & minerals extraction with AI and automation." 
  },
  { 
    name: "Telecommunication", 
    link: "/industries/TeleCommunication",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    desc: "Next-gen telecom solutions for connected world communications." 
  },
  { 
    name: "Defence", 
    link: "/industries/Defence",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    desc: "Advanced defense technology for modern security challenges." 
  },
  { 
    name: "Fertilizer", 
    link: "/industries/Fertilizer",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    desc: "Smart fertilizer production with sustainable technology solutions." 
  },
  { 
    name: "Power", 
    link: "/industries/Power",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    desc: "Transforming power generation with intelligent energy solutions." 
  },
  { 
    name: "Renewable Energy", 
    link: "/industries/RenewableEnergy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    desc: "Accelerating renewable energy adoption with innovative tech." 
  },
  { 
    name: "IT", 
    link: "/industries/IT",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    desc: "Cutting-edge IT solutions for digital transformation." 
  },
  { 
    name: "Food and beverage", 
    link: "/industries/FoodBeverage",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    desc: "Modern food & beverage manufacturing with smart automation." 
  },
  { 
    name: "Semiconductor", 
    link: "/industries/Semiconductor",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    desc: "Advanced semiconductor manufacturing and design solutions." 
  },
];

export default function Industries() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!scrollerRef.current || !sectionRef.current) return;

      const scroller = scrollerRef.current;
      const totalScrollWidth = scroller.scrollWidth;
      const viewportWidth = sectionRef.current.offsetWidth;

      // === MAIN SUPER HORIZONTAL SCROLL (Pin + Scrub) ===
      gsap.to(scroller, {
        x: () => -(totalScrollWidth - viewportWidth + 200),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${totalScrollWidth - viewportWidth + 200}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // === INDIVIDUAL SUPER ANIMATIONS ===
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const img = card.querySelector("img");
        const content = card.querySelector(".content-layer");
        const shine = card.querySelector(".shine");

        // 1. Image parallax (vertical movement while scrolling horizontally)
        if (img) {
          ScrollTrigger.create({
            trigger: card,
            start: "left 85%",
            end: "right 15%",
            scrub: 0.8,
            onUpdate: (self) => {
              gsap.to(img, {
                y: -120 * self.progress,
                ease: "none",
                overwrite: true,
              });
            },
          });
        }

        // 2. Content fade + lift on enter
        gsap.fromTo(
          content,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "left 75%",
              end: "left 40%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // 3. Shine sweep on hover (extra flair)
        card.addEventListener("mouseenter", () => {
          if (shine) {
            gsap.fromTo(
              shine,
              { x: "-150%" },
              { x: "150%", duration: 1.4, ease: "power2.out" }
            );
          }
        });
      });

      // Extra global background parallax (very subtle)
      const bgLayer = sectionRef.current.querySelector(".bg-layer");
      if (bgLayer) {
        gsap.to(bgLayer, {
          x: -80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative h-screen bg-white overflow-hidden flex flex-col"
    >
      {/* Subtle white glow layer */}
      <div
        className="bg-layer absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(80,153,255,0.05)_0%,transparent_60%)] pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-20 pt-1 px-6 md:px-12 flex justify-between items-start">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tighter">
            Industries We <span className="text-[#5099ff]">Serve</span>
          </h2>
          
        </div>

        <div className="hidden md:block text-right">
          <div className="text-xs uppercase tracking-[3px] text-slate-600 mb-1 font-semibold">SCROLL TO VIEW</div>
          <div className="h-px w-16 bg-[#5099ff] ml-auto" />
        </div>
      </div>

      {/* HORIZONTAL SCROLLER CONTAINER */}
      <div className="flex-1 relative flex items-center overflow-hidden px-6 md:px-12">
        <div
          ref={scrollerRef}
          className="flex gap-6 md:gap-8 h-[400px] md:h-[480px] items-center will-change-transform"
        >
          {industries.map((ind, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="group flex-shrink-0 w-[280px] md:w-[340px] h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl relative cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* IMAGE CONTAINER WITH PARALLAX */}
              <div className="relative h-[100%] overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover  transition-transform duration-700"
                  loading="lazy"
                />

                {/* Light overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-800/10 to-slate-900/40" />

                {/* Industry name floating on image */}
                <div className="absolute bottom-6 left-4 right-4">
                  <div className="inline-block bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-xl shadow-lg">
                    <span className="text-sm md:text-base font-bold text-slate-900 tracking-tight">
                      {ind.name}
                    </span>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />
              </div>

              {/* CONTENT LAYER */}
              <div className="content-layer absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-5 md:p-6 h-[34%] flex flex-col justify-between border-t border-slate-200/50">
                <p className="text-xs md:text-sm text-slate-700 line-clamp-3 leading-tight">
                  {ind.desc}
                </p>

                <Link
                  to={ind.link}
                  className="mt-auto inline-flex items-center gap-2 text-[#5099ff] font-semibold text-sm md:text-base group-hover:gap-3 transition-all hover:underline"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 text-xs uppercase tracking-wide font-medium text-slate-500">
        <div className="h-px w-6 bg-slate-300" />
        Scroll horizontally to view all industries
        <div className="h-px w-6 bg-slate-300" />
      </div>
    </section>
  );
}
