// components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const visualRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const chatRef = useRef(null);
  const layerRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.from(headlineRef.current.querySelectorAll('.word'), {
        y: 120,
        opacity: 0,
        stagger: 0.1,
        duration: 1.4,
        ease: 'power4.out',
      });

      // AWS gradient shift
      gsap.to('.aws-gradient', {
        backgroundPosition: '200% 0',
        duration: 8,
        repeat: -1,
        ease: 'none',
      });

      gsap.from(descRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.6,
        ease: 'power3.out',
      });

      gsap.from(ctaRef.current.children, {
        y: 50,
        opacity: 0,
        scale: 0.92,
        stagger: 0.15,
        duration: 1,
        delay: 0.9,
        ease: 'back.out(1.4)',
      });

      // Cloud layers parallax + entrance
      layerRefs.current.forEach((layer, i) => {
        gsap.fromTo(
          layer,
          { opacity: 0, y: 80, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            delay: 0.8 + i * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        );
      });

      // Mouse tilt on visual container
      const handleMouseMove = (e) => {
        if (!visualRef.current) return;
        const rect = visualRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(visualRef.current, {
          rotationY: x * 25,
          rotationX: -y * 25,
          transformPerspective: 1400,
          duration: 0.8,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-linear-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden"
    >
      {/* Subtle dotted grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT — Text Content */}
        <div className="lg:col-span-7 space-y-10">
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black tracking-[-0.04em] leading-none text-gray-900"
          >
            <span className="word block">The Future</span>
            <span className="word block">of Cloud is</span>
            <span className="word block">
              <span className="aws-gradient inline-block bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600 bg-size-[200%_auto] bg-clip-text text-transparent">
                AWS
              </span>
            </span>
          </h1>

          <p
            ref={descRef}
            className="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed"
          >
            Enterprise-grade migration, intelligent architecture, serverless innovation, and cost intelligence that scales with your ambition.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5">
            <button className="group px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
              Start Cloud Transformation
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>

            <button className="px-10 py-5 border-2 border-blue-600 text-blue-700 font-semibold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>

        {/* RIGHT — Interactive Cloud Stack Visual */}
        <div
          ref={visualRef}
          className="hidden lg:block lg:col-span-5 relative h-155 perspective-[1800px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Layer 1 - Back */}
          <div
            ref={(el) => (layerRefs.current[0] = el)}
            className="absolute top-12 right-8 w-80 h-80 bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl shadow-2xl p-8 flex flex-col justify-center"
          >
            <div className="text-blue-600 text-4xl font-bold">01</div>
            <div className="mt-4 text-2xl font-semibold text-gray-900">Migration</div>
            <div className="text-gray-600 mt-2">Zero-downtime cloud lift &amp; shift</div>
          </div>

          {/* Layer 2 - Middle */}
          <div
            ref={(el) => (layerRefs.current[1] = el)}
            className="absolute top-28 right-0 w-80 h-80 bg-white/80 backdrop-blur-2xl border border-indigo-100 rounded-3xl shadow-2xl p-8 flex flex-col justify-center"
          >
            <div className="text-indigo-600 text-4xl font-bold">02</div>
            <div className="mt-4 text-2xl font-semibold text-gray-900">Architecture</div>
            <div className="text-gray-600 mt-2">Serverless + microservices at scale</div>
          </div>

          {/* Layer 3 - Front (most prominent) */}
          <div
            ref={(el) => (layerRefs.current[2] = el)}
            className="absolute top-44 -right-5 w-80 h-80 bg-white border border-blue-200 rounded-3xl shadow-2xl p-8 flex flex-col justify-center"
          >
            <div className="text-blue-600 text-4xl font-bold">03</div>
            <div className="mt-4 text-2xl font-semibold text-gray-900">Optimization</div>
            <div className="text-gray-600 mt-2">Real-time cost intelligence &amp; auto-scaling</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="mt-2 w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-500 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        ref={chatRef}
        className="fixed bottom-8 right-8 z-50 bg-linear-to-br from-blue-600 to-indigo-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="Open chat"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;