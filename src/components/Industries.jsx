import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { 
    name: "BFSI", 
    link: "/industries/bfsi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    desc: "The biggest trend defining the global financial services industry is digital disruption." 
  },
  { 
    name: "Retail", 
    link: "/industries/retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    desc: "Creating meaningful experiences to enhance customer journeys in today's digital world." 
  },
  { 
    name: "EPC", 
    link: "/industries/epc",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    desc: "Engineering, Procurement & Construction — delivering complex infrastructure projects." 
  },
  { 
    name: "Oil & Gas", 
    link: "/industries/oil-gas",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=80",
    desc: "Smart digital transformation for energy & natural resources." 
  },
  { 
    name: "Infrastructure", 
    link: "/industries/infrastructure",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80",
    desc: "Building smarter infrastructure with cutting-edge technology solutions." 
  },
  { 
    name: "Engineering", 
    link: "/industries/engineering",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    desc: "Advanced engineering solutions for modern manufacturing and design." 
  },
  { 
    name: "Heavy Equipment Manufacturing", 
    link: "/industries/Manufacturing",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
    desc: "Revolutionizing heavy equipment manufacturing with automation and IoT." 
  },
  { 
    name: "OEM", 
    link: "/industries/OEM",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80",
    desc: "Original Equipment Manufacturer solutions for global supply chains." 
  },
  { 
    name: "Chemical", 
    link: "/industries/Chemical",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    desc: "Digital transformation for chemical processing and manufacturing." 
  },
  { 
    name: "Petrochemical", 
    link: "/industries/Petrochemical",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
    desc: "Innovative solutions for petrochemical industry optimization." 
  },
  { 
    name: "Healthcare", 
    link: "/industries/Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    desc: "Revolutionizing healthcare with digital health solutions and telemedicine." 
  },
  { 
    name: "Building Materials", 
    link: "/industries/BuildingMaterials",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    desc: "Modernizing building materials production with smart technologies." 
  },
  { 
    name: "Metal & Minerals", 
    link: "/industries/MetalMinerals",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "Enhancing metal & minerals extraction with AI and automation." 
  },
  { 
    name: "Telecommunication", 
    link: "/industries/TeleCommunication",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
    desc: "Next-gen telecom solutions for connected world communications." 
  },
  { 
    name: "Defence", 
    link: "/industries/Defence",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    desc: "Advanced defense technology for modern security challenges." 
  },
  { 
    name: "Fertilizer", 
    link: "/industries/Fertilizer",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
    desc: "Smart fertilizer production with sustainable technology solutions." 
  },
  { 
    name: "Power", 
    link: "/industries/Power",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    desc: "Transforming power generation with intelligent energy solutions." 
  },
  { 
    name: "Renewable Energy", 
    link: "/industries/RenewableEnergy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    desc: "Accelerating renewable energy adoption with innovative tech." 
  },
  { 
    name: "IT", 
    link: "/industries/IT",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    desc: "Cutting-edge IT solutions for digital transformation." 
  },
  { 
    name: "Food and beverage", 
    link: "/industries/FoodBeverage",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    desc: "Modern food & beverage manufacturing with smart automation." 
  },
  { 
    name: "Semiconductor", 
    link: "/industries/Semiconductor",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    desc: "Advanced semiconductor manufacturing and design solutions." 
  },
];

export default function Industries() {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      blocksRef.current.forEach((block, i) => {
        if (!block) return;

        const isEven = i % 2 === 0;
        const visual = block.querySelector(".visual");
        const content = block.querySelector(".content");

        gsap.fromTo(
          visual,
          { opacity: 0, x: isEven ? -80 : 80, scale: 0.92 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 80%" },
          }
        );

        gsap.fromTo(
          content,
          { opacity: 0, x: isEven ? 60 : -60, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 80%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="industries" className="py-12 bg-white relative overflow-hidden">
      {/* Subtle background glow lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#5099ff_1px,transparent_1px)] bg-size-[60px_60px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter">
            Industries We Serve
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            We don't just serve industries — we shape their future with technology.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {industries.map((ind, i) => {
            const isEven = i % 2 === 0;
            
            return (
              <div
                key={i}
                ref={(el) => (blocksRef.current[i] = el)}
                className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ""} items-start gap-4 md:gap-6`}
              >
                {/* Visual Side - Bigger Image */}
                <div className="visual relative w-full md:w-80 lg:w-96 h-44 md:h-52 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                  <img 
                    src={ind.image} 
                    alt={ind.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                  
                  {/* Industry label badge */}
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs font-semibold text-slate-800">{ind.name}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="content flex flex-col justify-center flex-1">
                  <div className="inline-flex items-center gap-2 mb-1">
                    <div className="text-2xl md:text-3xl font-black text-[#5099ff]/10">0{i + 1}</div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#5099ff] to-transparent" />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight mb-1">
                    {ind.name}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>

                  <Link
                    to={ind.link}
                    className="mt-3 inline-flex items-center gap-2 text-[#5099ff] font-semibold text-xs group"
                  >
                    Explore Solutions
                    <span className="text-base transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

