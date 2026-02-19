// src/components/AboutUs.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TrustedBy from '../components/TrustedBy';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const timelineLineRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline vertical line draw animation
      gsap.fromTo(
        timelineLineRef.current,
        { height: '0%' },
        {
          height: '100%',
          duration: 3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'bottom 90%',
            scrub: 1.2,
          },
        }
      );

      // Each card entrance animation
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 90,
            scale: 0.94,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              once: true,
            },
            delay: index * 0.15,
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const timelineItems = [
    {
      title: "Our Core Team",
      content:
        "We have developed a strong foundation of specialties to accommodate the expanding needs of our clients. Companies have overwhelmingly benefited from our talented and proficient teams by becoming more effective, knowledgeable, and profitable. Newel Technologies is a closely held company committed to the personal touch.",
      icon: "team", // you can replace with real SVG or image
      align: "left",
    },
    {
      title: "Customer Centricity",
      content:
        "Every project and customer is unique and requires special attention. We provide solutions that navigate your company beyond current requirements to accommodate future expansion. Our business model is customer driven, where the various businesses are evolved from our customer needs. We help our customers respond quickly to changing market dynamics and increase their competitiveness.",
      icon: "customer",
      align: "right",
    },
    {
      title: "Vision",
      content: (
        <>
          <p className="mb-4">
            Our ultimate goal is to emerge as a globally recognized company by delivering superior quality services and solutions.
          </p>
          <p className="font-medium mb-3">We adhere to the following principles in fulfilling our vision:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Newel is dedicated to exploring new opportunities that maximize business value, ensuring consistent growth and sustainability through our core competencies.</li>
            <li>We are committed to meeting the expectations of our customers, employees, and partners.</li>
            <li>We highly value integrity, commitment, excellence, teamwork, transparency, and satisfaction for both our clients and ourselves.</li>
            <li>We aim to be widely recognized for delivering quality services to customers worldwide, while steadfastly adhering to our core values.</li>
          </ul>
        </>
      ),
      icon: "vision",
      align: "left",
    },
    {
      title: "Mission",
      content: (
        <>
          <p className="mb-4">
            Our mission is to deliver customer-centric, result-oriented, cost-competitive, innovative IT solutions to clients.
          </p>
          <p className="font-medium mb-3">We adhere to the following principles in fulfilling our mission:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We listen to our customers' needs and use technology to meet them effectively.</li>
            <li>We empower our clients to respond faster and more intuitively to changing market dynamics.</li>
            <li>We assist our clients in bringing great products to market faster and at lower costs.</li>
            <li>We collaborate closely with our clients to ensure their ongoing success.</li>
          </ul>
        </>
      ),
      icon: "mission",
      align: "right",
    },
  ];

  return (
   <>
   <Navbar/>
    <section ref={sectionRef} className="py-20 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            About Us
          </h1>
          <p className="mt-5 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our story, vision, mission, and what drives us every day.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line (animated) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-200 via-blue-400 to-indigo-400 transform -translate-x-1/2">
            <div
              ref={timelineLineRef}
              className="absolute top-0 left-0 w-full bg-linear-to-b from-blue-600 to-indigo-600 origin-top"
              style={{ height: '0%' }}
            />
          </div>

          {/* Timeline Items */}
          {timelineItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20 md:mb-32 last:mb-0 ${
                item.align === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ${
                  item.align === 'right' ? 'md:text-left' : 'md:text-right'
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                  {item.title}
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed">
                  {item.content}
                </div>
              </div>

              {/* Circle + Icon */}
              <div className="relative z-10 shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-xl border-4 border-white">
                {/* Replace these with real SVG icons or images */}
                {item.icon === 'team' && (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM6 5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )}
                {item.icon === 'customer' && (
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
                {item.icon === 'vision' && (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )}
                {item.icon === 'mission' && (
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
              </div>

              {/* Empty space on opposite side (desktop only) */}
              <div className="hidden md:block md:w-5/12" />
            </div>
          ))}
        </div>

        <TrustedBy/>
      </div>
    </section>
    <Footer/>
   </>
  );
};

export default AboutUs;