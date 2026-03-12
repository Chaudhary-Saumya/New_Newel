// components/Services.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

import dev from '../assets/s1.png';
import mobile from '../assets/s2.png';
import analytics from '../assets/s3.png';
import reeng from '../assets/s4.png';
import aws from '../assets/s5.png';
import qa from '../assets/s6.png';
import rpa from '../assets/s7.png';
import staff from '../assets/s8.png';

const services = [
  { title: 'Application Development', desc: 'Scalable, secure, high-performance apps tailored to your needs.', icon: dev, link: '/services/ApplicationDevelopment' },
  { title: 'Mobile Applications', desc: 'High-performance Android & iOS apps built for engagement.', icon: mobile, link: '/services/MobileApplication' },
  { title: 'Data Analytics', desc: 'Turn raw data into actionable business intelligence.', icon: analytics, link: '/services/DataAnalytics' },
  { title: 'Application Re-engineering', desc: 'Modernize legacy systems without losing core value.', icon: reeng, link: '/services/ApplicationRe-Engineering' },
  { title: 'AWS Services', desc: 'Cloud architecture, migration & optimization on AWS.', icon: aws, link: '/services/CloudServices' },
  { title: 'Quality Assurance', desc: 'Rigorous testing for flawless, secure software.', icon: qa, link: '/services/QualityAssurance' },
  { title: 'Robotic Process Automation', desc: 'Automate repetitive tasks — save time & cost.', icon: rpa, link: '/services/RoboticProcessAutomation' },
  { title: 'IT Staff Augmentation', desc: 'Instant access to skilled developers & engineers.', icon: staff, link: '/services/ITstaffAugmentation' },
];

export default function Services() {
  const sectionRef = useRef(null);
  const orbitRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle orbiting / floating motion for each icon
      orbitRefs.current.forEach((el, i) => {
        if (!el) return;

        const angle = (i / services.length) * Math.PI * 2;
        const radius = 18 + Math.random() * 12;
        const speed = 14 + Math.random() * 8;

        gsap.to(el, {
          motionPath: {
            path: [
              { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius },
              { x: Math.cos(angle + Math.PI) * radius * 1.1, y: Math.sin(angle + Math.PI) * radius * 1.1 },
              { x: Math.cos(angle + Math.PI * 2) * radius, y: Math.sin(angle + Math.PI * 2) * radius },
            ],
            alignOrigin: [0.5, 0.5],
          },
          duration: speed,
          repeat: -1,
          ease: 'sine.inOut',
          transformOrigin: 'center center',
        });

        // Slight scale pulse synced to orbit
        gsap.to(el, {
          scale: 1.12,
          duration: speed * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3,
        });
      });

      // Scroll-triggered entrance for whole blocks
      gsap.utils.toArray('.service-item').forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 90,
            rotationX: 25,
            transformPerspective: 800,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
              delay: i * 0.08,
            },
          }
        );
      });

      // Hover lift + glow
      gsap.utils.toArray('.service-item').forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -14,
            scale: 1.04,
            boxShadow: '0 30px 60px -15px rgba(80,153,255,0.28)',
            duration: 0.5,
            ease: 'power2.out',
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            boxShadow: '0 10px 25px -10px rgba(0,0,0,0.08)',
            duration: 0.6,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Very soft radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-100/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-blue-700 text-sm font-medium tracking-wider mb-5">
            OUR CAPABILITIES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tight leading-none">
            Services That <span className="text-[#5099ff] font-black tracking-tight">Move the Needle</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Purpose-built digital solutions engineered for velocity, resilience and measurable outcomes.
          </p>
        </div>

        {/* Main grid – compact, asymmetric, modern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 auto-rows-fr">
          {services.map((service, i) => (
            <Link
              to={service.link}
              key={i}
              className="service-item group relative bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100/70 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-[#5099ff]/30 flex flex-col h-full"
            >
              <div className="relative p-8 pb-0 flex justify-center">
                <div
                  ref={(el) => (orbitRefs.current[i] = el)}
                  className="service-icon relative w-28 h-28 md:w-32 md:h-32"
                >
                  <div className="absolute inset-[-20%] rounded-full bg-gradient-to-br from-[#5099ff]/15 via-blue-100/10 to-transparent blur-xl group-hover:blur-2xl transition-all duration-700" />
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="relative w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              <div className="flex-1 p-7 pt-4 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#5099ff] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>

                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="text-[#5099ff] group-hover:underline underline-offset-4">
                    Explore →
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5099ff]/10 to-blue-50/30 flex items-center justify-center text-[#5099ff] opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}