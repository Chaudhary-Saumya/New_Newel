// components/Hero.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Carousel data
const slides = [
  {
    id: 1,
    title: "Transform Your",
    subtitle: "Business with",
    highlight: "AWS",
    description: "Our AWS cloud services enable you to transform operations with secure, scalable, and cost-efficient solutions tailored to your goals. From seamless cloud migration to complete modernization, we deliver the right strategy, architecture, and ongoing support to help you innovate faster, operate smarter, and stay ahead in a rapidly evolving digital landscape.",
    layer1: { number: "01", title: "Migration", desc: "Zero-downtime cloud lift & shift", color: "blue-600" },
    layer2: { number: "02", title: "Architecture", desc: "Serverless + microservices at scale", color: "indigo-600" },
    layer3: { number: "03", title: "Optimization", desc: "Real-time cost intelligence & auto-scaling", color: "blue-600" },
  },
  {
    id: 2,
    title: "Web And Mobile",
    subtitle: "App",
    highlight: "Development",
    description: "It is important for every business to invest in mobile app development services as studies suggest that the community of app-users increases very speedily with each passing year. The correct business case of mobile app can take business to new heights.",
    layer1: { number: "01", title: "Lambda", desc: "Event-driven compute at any scale", color: "purple-600" },
    layer2: { number: "02", title: "Fargate", desc: "Serverless containers without clusters", color: "pink-600" },
    layer3: { number: "03", title: "Step Functions", desc: "Visual workflow orchestration", color: "purple-600" },
  },
  {
    id: 3,
    title: "Staffing and",
    subtitle: "",
    highlight: "Recruitment",
    description: "We focus on meeting your needs while empowering the individuals who drive our success. Our pursuit of the best solutions starts with each person's unique drive and entrepreneurial spirit. We provide customised project and workforce solutions tailored to help you lead your industry with confidence and agility.",
    layer1: { number: "01", title: "Analytics", desc: "Real-time data processing at scale", color: "emerald-600" },
    layer2: { number: "02", title: "Machine Learning", desc: "ML models for predictive insights", color: "teal-600" },
    layer3: { number: "03", title: "AI Services", desc: "Pre-built AI for every use case", color: "emerald-600" },
  },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);
  const layerRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const isAnimating = useRef(false);

  const currentContent = slides[currentSlide];

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const goToSlide = (index) => {
    if (isAnimating.current || index === currentSlide) return;
    isAnimating.current = true;

    const direction = index > currentSlide ? 1 : -1;

    // First, reset the active card when changing slides
    setActiveCard(null);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(index);
        isAnimating.current = false;
      },
    });

    // Fade/slide out current content
    tl.to([headlineRef.current, descRef.current, ctaRef.current], {
      opacity: 0,
      x: direction * -60,
      duration: 0.45,
      stagger: 0.08,
      ease: "power2.in",
    });

    // Animate out the cards smoothly
    tl.to(layerRefs.current.filter(Boolean), {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
    }, "-=0.2");

    // After content is out → change slide & animate in new content
    tl.add(() => {
      // Animate in new headline words
      gsap.fromTo(
        headlineRef.current.querySelectorAll('.word'),
        { x: direction * 80, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.09, duration: 0.9, ease: "power3.out" }
      );

      gsap.fromTo(
        descRef.current,
        { x: direction * 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );

      gsap.fromTo(
        ctaRef.current.children,
        { y: 30, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.7, ease: "back.out(1.3)" }
      );

      // Cards entrance with smooth transition
      gsap.fromTo(
        layerRefs.current,
        { opacity: 0, y: 40, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power3.out" 
        }
      );
    }, "-=0.1");
  };

  const goToNextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const goToPrevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating.current) goToNextSlide();
    }, 5800);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Initial animations + mouse tilt
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline initial reveal
      gsap.from(headlineRef.current.querySelectorAll('.word'), {
        y: 90,
        opacity: 0,
        stagger: 0.1,
        duration: 1.4,
        ease: 'power4.out',
      });

      // Gradient animation
      gsap.to('.aws-gradient', {
        backgroundPosition: '200% 0',
        duration: 10,
        repeat: -1,
        ease: 'none',
      });

      gsap.from(descRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.1,
        delay: 0.6,
        ease: 'power3.out',
      });

      gsap.from(ctaRef.current.children, {
        y: 40,
        opacity: 0,
        scale: 0.94,
        stagger: 0.14,
        duration: 1,
        delay: 0.9,
        ease: 'back.out(1.5)',
      });

      // Initial card entrance
      layerRefs.current.forEach((layer, i) => {
        gsap.fromTo(
          layer,
          { opacity: 0, y: 70, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            delay: 0.8 + i * 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );
      });

      // Mouse tilt
      const handleMouseMove = (e) => {
        if (!visualRef.current) return;
        const rect = visualRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(visualRef.current, {
          rotationY: x * 16,
          rotationX: -y * 16,
          transformPerspective: 1100,
          duration: 0.7,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT — Text Content */}
        <div className="lg:col-span-7 space-y-8">
          {/* Headline with key → forces remount on slide change */}
          <h1
            key={`headline-${currentSlide}`}
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-[-0.02em] leading-tight text-gray-900"
          >
            <span className="word block">{currentContent.title}</span>
            <span className="word block">{currentContent.subtitle}</span>
            <span className="word block">
              <span className="aws-gradient inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent">
                {currentContent.highlight}
              </span>
            </span>
          </h1>

          <p ref={descRef} className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            {currentContent.description}
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
              Start Cloud Transformation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button className="px-8 py-4 border-2 border-blue-600 text-blue-700 font-semibold text-base rounded-xl hover:bg-blue-50 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>

        {/* RIGHT — Visual Cards */}
        <div
          ref={visualRef}
          className="hidden lg:block lg:col-span-5 relative h-[680px] perspective-[1400px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Card 1 */}
          <div
            ref={(el) => (layerRefs.current[0] = el)}
            onClick={() => toggleCard(0)}
            className={`absolute top-12 right-8 w-72 bg-white/75 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col justify-center cursor-pointer transition-all duration-500 hover:shadow-2xl ${
              activeCard === 0 ? 'ring-2 ring-blue-500 z-30' : ''
            }`}
          >
            <div className={`text-${currentContent.layer1.color} text-3xl font-bold`}>{currentContent.layer1.number}</div>
            <div className="mt-3 text-xl font-semibold text-gray-900">{currentContent.layer1.title}</div>
            <div className="text-gray-600 mt-2 text-sm">{currentContent.layer1.desc}</div>
            <div className={`overflow-hidden transition-all duration-300 ${activeCard === 0 ? 'max-h-40 mt-4 pt-4 border-t border-gray-200 opacity-100' : 'max-h-0 mt-0 pt-0 border-t-0 border-transparent opacity-0'}`}>
              <p className="text-sm text-gray-600">Learn more about our {currentContent.layer1.title.toLowerCase()} solutions and how we can help transform your business infrastructure.</p>
              <button className="mt-3 text-blue-600 font-medium text-sm hover:underline">Explore Now →</button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (layerRefs.current[1] = el)}
            onClick={() => toggleCard(1)}
            className={`absolute top-28 right-0 w-72 bg-white/85 backdrop-blur-2xl border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col justify-center cursor-pointer transition-all duration-500 hover:shadow-2xl ${
              activeCard === 1 ? 'ring-2 ring-blue-500 z-30' : ''
            }`}
          >
            <div className={`text-${currentContent.layer2.color} text-3xl font-bold`}>{currentContent.layer2.number}</div>
            <div className="mt-3 text-xl font-semibold text-gray-900">{currentContent.layer2.title}</div>
            <div className="text-gray-600 mt-2 text-sm">{currentContent.layer2.desc}</div>
            <div className={`overflow-hidden transition-all duration-300 ${activeCard === 1 ? 'max-h-40 mt-4 pt-4 border-t border-gray-200 opacity-100' : 'max-h-0 mt-0 pt-0 border-t-0 border-transparent opacity-0'}`}>
              <p className="text-sm text-gray-600">Discover how our {currentContent.layer2.title.toLowerCase()} capabilities can accelerate your digital transformation journey.</p>
              <button className="mt-3 text-blue-600 font-medium text-sm hover:underline">Explore Now →</button>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (layerRefs.current[2] = el)}
            onClick={() => toggleCard(2)}
            className={`absolute top-44 -right-5 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col justify-center cursor-pointer transition-all duration-500 hover:shadow-2xl ${
              activeCard === 2 ? 'ring-2 ring-blue-500 z-30' : ''
            }`}
          >
            <div className={`text-${currentContent.layer3.color} text-3xl font-bold`}>{currentContent.layer3.number}</div>
            <div className="mt-3 text-xl font-semibold text-gray-900">{currentContent.layer3.title}</div>
            <div className="text-gray-600 mt-2 text-sm">{currentContent.layer3.desc}</div>
            <div className={`overflow-hidden transition-all duration-300 ${activeCard === 2 ? 'max-h-40 mt-4 pt-4 border-t border-gray-200 opacity-100' : 'max-h-0 mt-0 pt-0 border-t-0 border-transparent opacity-0'}`}>
              <p className="text-sm text-gray-600">Explore our {currentContent.layer3.title.toLowerCase()} services to maximize efficiency and reduce operational costs.</p>
              <button className="mt-3 text-blue-600 font-medium text-sm hover:underline">Explore Now →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-5">
        <button
          onClick={goToPrevSlide}
          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-md"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-400 ${
                i === currentSlide
                  ? 'bg-blue-600 scale-125 shadow-md'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNextSlide}
          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-md"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-10 z-20 text-sm text-gray-500 font-medium">
        <span className="text-blue-600 text-xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-1.5">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="mt-2 w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;