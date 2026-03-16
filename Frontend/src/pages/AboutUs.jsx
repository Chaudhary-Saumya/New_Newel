// src/components/AboutUs.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TrustedBy from '../components/TrustedBy';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const pageRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const sectionRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    document.title = 'About Us | Newel';
    
    // Reset scroll to top on page load
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }, []);

  useEffect(() => {
    let scroll;

    const initScroll = () => {
      try {
        scroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          multiplier: 0.8,
          class: 'is-revealed',
          tablet: { smooth: true, multiplier: 0.7 },
          smartphone: { smooth: true, multiplier: 0.6 },
          lerp: 0.08,
        });

        setTimeout(() => {
          scroll.update();
        }, 300);
      } catch (error) {
        console.error('Locomotive Scroll init error:', error);
      }
    };

    const timer = setTimeout(initScroll, 100);

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          },
        }
      );

      // Progress line animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1,
          },
        }
      );

      // Each section entrance animation
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const content = section.querySelector('.section-content');
        const visual = section.querySelector('.section-visual');

        gsap.fromTo(
          content,
          { opacity: 0, x: index % 2 === 0 ? -60 : 60, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
            },
          }
        );

        gsap.fromTo(
          visual,
          { opacity: 0, scale: 0.85, rotate: index % 2 === 0 ? -3 : 3 },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            },
          }
        );
      });
    }, pageRef);

    return () => {
      clearTimeout(timer);
      if (scroll) {
        scroll.destroy();
      }
      ctx.revert();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const sections = [
    {
      number: "01",
      title: "Our Core Team",
      content:
        "We have developed a strong foundation of specialties to accommodate the expanding needs of our clients. Companies have overwhelmingly benefited from our talented and proficient teams by becoming more effective, knowledgeable, and profitable. Newel Technologies is a closely held company committed to the personal touch.",
      icon: "team",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      number: "02",
      title: "Customer Centricity",
      content:
        "Every project and customer is unique and requires special attention. We provide solutions that navigate your company beyond current requirements to accommodate future expansion. Our business model is customer driven, where the various businesses are evolved from our customer needs. We help our customers respond quickly to changing market dynamics and increase their competitiveness.",
      icon: "customer",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      number: "03",
      title: "Vision",
      content: (
        <>
          <p className="mb-5 text-gray-700 leading-relaxed">
            Our ultimate goal is to emerge as a globally recognized company by delivering superior quality services and solutions.
          </p>
          <p className="font-semibold mb-4 text-gray-800">We adhere to the following principles in fulfilling our vision:</p>
          <ul className="space-y-3">
            {[
              "Newel is dedicated to exploring new opportunities that maximize business value, ensuring consistent growth and sustainability through our core competencies.",
              "We are committed to meeting the expectations of our customers, employees, and partners.",
              "We highly value integrity, commitment, excellence, teamwork, transparency, and satisfaction for both our clients and ourselves.",
              "We aim to be widely recognized for delivering quality services to customers worldwide, while steadfastly adhering to our core values.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-2.5 shrink-0" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
      icon: "vision",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      number: "04",
      title: "Mission",
      content: (
        <>
          <p className="mb-5 text-gray-700 leading-relaxed">
            Our mission is to deliver customer-centric, result-oriented, cost-competitive, innovative IT solutions to clients.
          </p>
          <p className="font-semibold mb-4 text-gray-800">We adhere to the following principles in fulfilling our mission:</p>
          <ul className="space-y-3">
            {[
              "We listen to our customers' needs and use technology to meet them effectively.",
              "We empower our clients to respond faster and more intuitively to changing market dynamics.",
              "We assist our clients in bringing great products to market faster and at lower costs.",
              "We collaborate closely with our clients to ensure their ongoing success.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2.5 shrink-0" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
      icon: "mission",
    gradient: "from-cyan-500 to-blue-600",
    },
  ];

  const renderIcon = (icon) => {
    const iconClass = "w-6 h-6 md:w-8 md:h-8";
    switch (icon) {
      case 'team':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM6 5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'customer':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'vision':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'mission':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <div ref={scrollContainerRef} data-scroll-container>
        <div data-scroll-section>
          <Navbar />
          <section ref={sectionRef} className="py-20 md:py-24 bg-white relative overflow-hidden">
            {/* Background subtle pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f610_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
            
            {/* Gradient orbs */}
            <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-bl from-indigo-100 to-transparent rounded-full blur-3xl opacity-60" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
              {/* Header */}
              <div ref={headerRef} className="text-center mb-12 md:mb-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                  About Us
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Our story, vision, mission, and what drives us every day.
                </p>
              </div>

              {/* Animated connecting line */}
              <div className="hidden lg:block absolute left-1/2 top-[280px] bottom-20 w-0.5 bg-gray-100 transform -translate-x-1/2">
                <div
                  ref={lineRef}
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 origin-top scale-y-0"
                  style={{ transform: 'scaleY(0)' }}
                />
              </div>

              {/* Sections with alternating layout */}
<div className="space-y-12 md:space-y-16">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    ref={addToRefs}
                    className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Card */}
                    <div className="section-content w-full lg:w-1/2">
                      <div className="relative bg-white rounded-xl p-4 md:p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-500">
                        {/* Gradient border effect */}
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${section.gradient} opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-md`} />
                        <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${section.gradient} -z-10`} style={{ background: 'white', padding: '2px' }}>
                          <div className="w-full h-full bg-white rounded-xl" />
                        </div>
                        
                        {/* Number badge */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                            {section.number}
                          </span>
                          <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                          {section.title}
                        </h2>
                        <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {section.content}
                        </div>
                      </div>
                    </div>

                    {/* Visual/Card Section */}
                    <div className="section-visual w-full lg:w-1/2 flex justify-center">
                      <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-500`}>
                        {/* Inner circle */}
                        <div className="absolute inset-2 rounded-lg bg-white/95 backdrop-blur flex items-center justify-center">
                          <div className={`text-gray-800`}>
                            {renderIcon(section.icon)}
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.gradient}`} />
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${section.gradient}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

             
            </div>
          </section>
          <div data-scroll-section>
            <TrustedBy />
          </div>
          <div data-scroll-section>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
