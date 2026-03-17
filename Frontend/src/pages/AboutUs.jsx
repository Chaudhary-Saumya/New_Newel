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
  const sectionRefs = useRef([]);

  useEffect(() => {
    document.title = 'About Us | Newel';
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
  }, []);

  useEffect(() => {
    let scroll;

    const initScroll = () => {
      try {
        scroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          multiplier: 0.85,
          lerp: 0.09,
          tablet: { smooth: true, breakpoint: 1024 },
          smartphone: { smooth: true },
        });
        setTimeout(() => scroll.update(), 400);
      } catch (err) {
        console.error('LocomotiveScroll init failed:', err);
      }
    };

    const timer = setTimeout(initScroll, 150);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", scrollTrigger: { trigger: ".hero", start: "top 80%" } }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.3, delay: 0.3, ease: "power3.out", scrollTrigger: { trigger: ".hero", start: "top 80%" } }
      );

      sectionRefs.current.forEach((section) => {
        if (!section) return;
        gsap.fromTo(
          section,
          { opacity: 0, y: 60, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 75%" },
          }
        );
      });
    }, pageRef);

    return () => {
      clearTimeout(timer);
      if (scroll) scroll.destroy();
      ctx.revert();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-white antialiased">
      <div ref={scrollContainerRef} data-scroll-container>
        <div data-scroll-section>
          <Navbar />

          <section className="relative pt-20 pb-24 md:pt-28 md:pb-40 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

            <div className="absolute -top-32 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent rounded-full blur-3xl opacity-70" />
            <div className="absolute bottom-0 -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-purple-50 via-pink-50 to-transparent rounded-full blur-3xl opacity-60" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
              <div className="hero text-center max-w-4xl mx-auto mb-20 md:mb-28">
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-5">
                  About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Newel</span>
                </h1>
                <p className="hero-subtitle text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
                  Building tomorrow's solutions with today's trust, talent, and technology.
                </p>
              </div>

              {/* Core Team & Customer Centricity – Big Illustration Style */}
              <div className="space-y-24 md:space-y-32">
                {/* 01 Core Team */}
                <div ref={addToRefs} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl lg:text-7xl font-black bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent opacity-90">
                        01
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                        Our Core Team
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg lg:text-xl">
                      We have developed a strong foundation of specialties to accommodate the expanding needs of our clients. Companies have overwhelmingly benefited from our talented and proficient teams by becoming more effective, knowledgeable, and profitable. Newel Technologies is a closely held company committed to the personal touch.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 flex justify-center">
                    <img
                      src="https://thumbs.dreamstime.com/b/business-people-work-team-colleagues-research-analyze-develop-create-new-ideas-vector-illustration-430615889.jpg"
                      alt="Team working together illustration"
                      className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* 02 Customer Centricity */}
                <div ref={addToRefs} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center lg:flex-row-reverse">
                  <div className="order-2 lg:order-2">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl lg:text-7xl font-black bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent opacity-90">
                        02
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                        Customer Centricity
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg lg:text-xl">
                      Every project and customer is unique and requires special attention. We provide solutions that navigate your company beyond current requirements to accommodate future expansion. Our business model is customer driven, where the various businesses are evolved from our customer needs. We help our customers respond quickly to changing market dynamics and increase their competitiveness.
                    </p>
                  </div>
                  <div className="order-1 lg:order-1 flex justify-center">
                    <img
                      src="https://thumbs.dreamstime.com/b/business-handshake-cartoon-illustration-cartoon-illustration-business-deal-two-business-people-shaking-hands-front-two-415761227.jpg"
                      alt="Customer handshake illustration"
                      className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* Vision & Mission – Card Style like reference */}
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-12">
                  {/* Vision */}
                  <div ref={addToRefs} className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl font-black bg-gradient-to-br from-purple-500 to-pink-600 bg-clip-text text-transparent">
                        03
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900">Vision</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      Our ultimate goal is to emerge as a globally recognized company by delivering superior quality services and solutions.
                    </p>
                    <p className="font-semibold text-gray-800 mb-4">We adhere to the following principles in fulfilling our vision:</p>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mt-2 shrink-0" />
                        Newel is dedicated to exploring new opportunities that maximize business value, ensuring consistent growth and sustainability through our core competencies.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mt-2 shrink-0" />
                        We are committed to meeting the expectations of our customers, employees, and partners.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mt-2 shrink-0" />
                        We highly value integrity, commitment, excellence, teamwork, transparency, and satisfaction for both our clients and ourselves.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mt-2 shrink-0" />
                        We aim to be widely recognized for delivering quality services to customers worldwide, while steadfastly adhering to our core values.
                      </li>
                    </ul>
                    <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-600" />
                  </div>

                  {/* Mission */}
                  <div ref={addToRefs} className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl font-black bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        04
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900">Mission</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      Our mission is to deliver customer-centric, result-oriented, cost-competitive, innovative IT solutions to clients.
                    </p>
                    <p className="font-semibold text-gray-800 mb-4">We adhere to the following principles in fulfilling our mission:</p>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mt-2 shrink-0" />
                        We listen to our customers' needs and use technology to meet them effectively.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mt-2 shrink-0" />
                        We empower our clients to respond faster and more intuitively to changing market dynamics.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mt-2 shrink-0" />
                        We assist our clients in bringing great products to market faster and at lower costs.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mt-2 shrink-0" />
                        We collaborate closely with our clients to ensure their ongoing success.
                      </li>
                    </ul>
                    <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div data-scroll-section><TrustedBy /></div>
          <div data-scroll-section><Footer /></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;