import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { 
    name: "BFSI", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    color: "from-blue-50 to-indigo-50", 
    desc: "The biggest trend defining the global financial services industry is digital disruption." 
  },
  { 
    name: "Retail", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    color: "from-rose-50 to-orange-50", 
    desc: "Creating meaningful experiences to enhance customer journeys in today's digital world." 
  },
  { 
    name: "EPC", 
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    color: "from-emerald-50 to-teal-50", 
    desc: "Engineering, Procurement & Construction — delivering complex infrastructure projects." 
  },
  { 
    name: "Oil & Gas", 
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80",
    color: "from-amber-50 to-yellow-50", 
    desc: "Smart digital transformation for energy & natural resources." 
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
          { opacity: 0, x: isEven ? -120 : 120, scale: 0.92 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: { trigger: block, start: "top 75%" },
          }
        );

        gsap.fromTo(
          content,
          { opacity: 0, x: isEven ? 100 : -100, y: 40 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 75%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="industries" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background glow lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#5099ff_1px,transparent_1px)] bg-size-[80px_80px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-5xl font-bold text-slate-900 tracking-tighter">
            Industries We Serve
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            We don't just serve industries — we shape their future with technology.
          </p>
        </div>

        <div className="space-y-32">
          {industries.map((ind, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                ref={(el) => (blocksRef.current[i] = el)}
                className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Visual Side - Real Image */}
                <div className="visual relative h-[460px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={ind.image} 
                    alt={ind.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                  
                  {/* Industry label badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-slate-800">{ind.name}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="content flex flex-col justify-center">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="text-5xl font-black text-[#5099ff]/10">0{i + 1}</div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#5099ff] to-transparent" />
                  </div>

                  <h3 className="text-4xl font-semibold text-slate-900 tracking-tight mb-8">
                    {ind.name}
                  </h3>

                  <p className="text-xl text-slate-600 leading-relaxed max-w-md">
                    {ind.desc}
                  </p>

                  <a
                    href="#contact"
                    className="mt-12 inline-flex items-center gap-4 text-[#5099ff] font-semibold text-lg group"
                  >
                    Explore Solutions
                    <span className="text-3xl transition-transform group-hover:translate-x-4">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

