// components/Services.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import dev from '../assets/s1.png';
import mobile from '../assets/s2.png';
import analytics from '../assets/s3.png';
import reeng from '../assets/s4.png';
import aws from '../assets/s5.png';
import qa from '../assets/s6.png';
import rpa from '../assets/s7.png';
import staff from '../assets/s8.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'Application Development', desc: 'We build scalable, secure, and high-performance applications tailored to your business needs.', icon: dev },
  { title: 'Mobile Applications', desc: 'Modern Android and iOS apps designed for performance, usability, and engagement.', icon: mobile },
  { title: 'Data Analytics', desc: 'Transform raw data into meaningful insights to drive smarter business decisions.', icon: analytics },
  { title: 'Application Re-engineering', desc: 'Upgrade legacy systems into modern, efficient, and scalable solutions.', icon: reeng },
  { title: 'AWS Services', desc: 'Cloud infrastructure setup, deployment, and optimization using AWS best practices.', icon: aws },
  { title: 'Quality Assurance', desc: 'Ensure your software is reliable, secure, and performs flawlessly.', icon: qa },
  { title: 'Robotic Process Automation', desc: 'Automate repetitive tasks to increase efficiency and reduce operational costs.', icon: rpa },
  { title: 'IT Staff Augmentation', desc: 'Hire expert developers and engineers to scale your team instantly.', icon: staff },
];

export default function Services() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create one master timeline for all items
      timelineRef.current = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.out' },
      });

      // Add staggered entrance to timeline
      timelineRef.current.fromTo(
        serviceRefs.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.92,
          rotation: -2,
          x: (i) => (i % 2 === 0 ? -30 : 30),
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          x: 0,
          duration: 1.2,
          stagger: 0.18,           // nice wave feel
        }
      );

      // Trigger the whole timeline once when section enters view
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => timelineRef.current.play(),
      });

      // Optional: tiny hover animation per card
      serviceRefs.current.forEach((card) => {
        if (!card) return;

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.03,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12)',
            duration: 0.4,
            ease: 'power2.out',
          });
          gsap.to(card.querySelector('img'), {
            scale: 1.15,
            duration: 0.5,
            ease: 'back.out(1.7)',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            duration: 0.5,
            ease: 'power2.out',
          });
          gsap.to(card.querySelector('img'), {
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to intelligent solutions — we deliver exactly what your business needs.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line (desktop only) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-100 via-blue-300 to-blue-100 hidden md:block" />

          <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceRefs.current[index] = el)}
                className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 bg-white rounded-2xl p-7 md:p-9 shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-400"
              >
                {/* Icon */}
                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-blue-50/70 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-9 h-9 md:w-11 md:h-11 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {service.desc}
                  </p>
                </div>

                {/* Timeline dot (desktop) */}
                <div className="absolute -left-2 md:left-7 top-10 w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow-sm hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}