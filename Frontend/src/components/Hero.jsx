import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Carousel data — now with consistent, theme-relevant layers
const slides = [
  {
    id: 1,
    title: "Transform Your",
    subtitle: "Business with",
    highlight: "AWS",
    description:
      "Our AWS cloud services enable you to transform operations with secure, scalable, and cost-efficient solutions tailored to your goals. From seamless cloud migration to complete modernization, we deliver the right strategy, architecture, and ongoing support to help you innovate faster, operate smarter, and stay ahead.",
    layer1: {
      number: "01",
      title: "Migration",
      desc: "Lift & shift with AWS Application Migration Service",
      color: "blue-600",
    },
    layer2: {
      number: "02",
      title: "Modern Architecture",
      desc: "Serverless & microservices using Lambda + ECS/Fargate",
      color: "indigo-600",
    },
    layer3: {
      number: "03",
      title: "Cost & Performance",
      desc: "Optimization with AWS Cost Explorer & Auto Scaling",
      color: "blue-600",
    },
  },
  {
    id: 2,
    title: "Web And Mobile",
    subtitle: "App",
    highlight: "Development",
    description:
      "Building high-performance web & mobile applications is essential in today's digital-first world. We deliver fast, scalable, and user-centric apps using modern frameworks and powerful AWS backend services — helping your business engage users, grow revenue, and stay competitive.",
    layer1: {
      number: "01",
      title: "Amplify",
      desc: "Full-stack development & hosting for web/mobile",
      color: "purple-600",
    },
    layer2: {
      number: "02",
      title: "AppSync",
      desc: "Real-time GraphQL APIs & offline data sync",
      color: "pink-600",
    },
    layer3: {
      number: "03",
      title: "Cognito",
      desc: "Secure user authentication & identity management",
      color: "purple-600",
    },
  },
  {
    id: 3,
    title: "Staffing and",
    subtitle: "",
    highlight: "Recruitment",
    description:
      "We provide tailored staffing and recruitment solutions powered by smart technology. Combining human expertise with AI-driven insights, we help you build high-performing teams quickly, match talent to roles accurately, and scale your workforce with confidence and agility.",
    layer1: {
      number: "01",
      title: "Talent Analytics",
      desc: "Real-time workforce insights & gap analysis",
      color: "emerald-600",
    },
    layer2: {
      number: "02",
      title: "AI Matching",
      desc: "Intelligent candidate–role matching with ML",
      color: "teal-600",
    },
    layer3: {
      number: "03",
      title: "Automated Screening",
      desc: "Resume parsing & skill assessment at scale",
      color: "emerald-600",
    },
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
  const [isLayerOpen, setIsLayerOpen] = useState(false);
  const isAnimating = useRef(false);

  const currentContent = slides[currentSlide];

const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
    setIsLayerOpen(activeCard !== index); // Pause if opening, resume if closing
  };

  const goToSlide = (index) => {
    if (isAnimating.current || index === currentSlide) return;
    isAnimating.current = true;

    const direction = index > currentSlide ? 1 : -1;

    // Reset active card on slide change
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

    tl.to(
      layerRefs.current.filter(Boolean),
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      },
      "-=0.2"
    );

    // After out → update content & animate in
    tl.add(() => {
      gsap.fromTo(
        headlineRef.current.querySelectorAll(".word"),
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

      gsap.fromTo(
        layerRefs.current,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }, "-=0.1");
  };

  const goToNextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const goToPrevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  // Auto-play - pauses during layer open
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating.current && !isLayerOpen) goToNextSlide();
    }, 5800);
    return () => clearInterval(interval);
  }, [currentSlide, isLayerOpen]);

  // Auto-close layer after 4s
  useEffect(() => {
    if (isLayerOpen) {
      const timer = setTimeout(() => {
        setIsLayerOpen(false);
        setActiveCard(null);
      }, 45000);
      return () => clearTimeout(timer);
    }
  }, [isLayerOpen]);

  // Initial animations + mouse tilt
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.from(headlineRef.current.querySelectorAll(".word"), {
        y: 90,
        opacity: 0,
        stagger: 0.1,
        duration: 1.4,
        ease: "power4.out",
      });

      // Gradient flow
      gsap.to(".aws-gradient", {
        backgroundPosition: "200% 0",
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      gsap.from(descRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.1,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(ctaRef.current.children, {
        y: 40,
        opacity: 0,
        scale: 0.94,
        stagger: 0.14,
        duration: 1,
        delay: 0.9,
        ease: "back.out(1.5)",
      });

      // Cards scroll-triggered entrance
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
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      });

      // Mouse tilt effect
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
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-100 via-blue-50/10 to-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT — Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <h1
            key={`headline-${currentSlide}`}
            ref={headlineRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold tracking-[-0.02em] leading-tight text-gray-900"
          >
            <span className="word block">{currentContent.title}</span>
            <span className="word block">{currentContent.subtitle}</span>
            <span className="word block">
              <span className="aws-gradient inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent">
                {currentContent.highlight}
              </span>
            </span>
          </h1>

          <p ref={descRef} className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
            {currentContent.description}
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
              Get Started
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button className="px-8 py-4 border-2 border-blue-600 text-blue-700 font-semibold text-base rounded-xl hover:bg-blue-50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT — Visual Cards (now theme-relevant) */}
        <div
          ref={visualRef}
          className="hidden lg:block lg:col-span-5 relative h-[680px] perspective-[1400px]"
          style={{ transformStyle: "preserve-3d" }}
          onClick={() => {
            if (isLayerOpen) {
              setIsLayerOpen(false);
              setActiveCard(null);
            }
          }}
        >
          {/* Card 1 */}
          <div
            ref={(el) => (layerRefs.current[0] = el)}
            onClick={() => toggleCard(0)}
            className={`absolute top-12 right-8 w-72 bg-white/75 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col justify-center cursor-pointer transition-all duration-500 hover:shadow-2xl ${
              activeCard === 0 ? "ring-2 ring-blue-500 z-30" : ""
            }`}
          >
            <div className={`text-${currentContent.layer1.color} text-3xl font-bold`}>
              {currentContent.layer1.number}
            </div>
            <div className="mt-3 text-xl font-semibold text-gray-900">{currentContent.layer1.title}</div>
            <div className="text-gray-600 mt-2 text-sm">{currentContent.layer1.desc}</div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeCard === 0
                  ? "max-h-40 mt-4 pt-4 border-t border-gray-200 opacity-100"
                  : "max-h-0 mt-0 pt-0 border-t-0 border-transparent opacity-0"
              }`}
            >
              <p className="text-sm text-gray-600">
                Discover how we implement {currentContent.layer1.title.toLowerCase()} to accelerate your cloud journey.
              </p>
              
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (layerRefs.current[1] = el)}
            onClick={() => toggleCard(1)}
            className={`absolute top-28 right-0 w-72 bg-white/85 backdrop-blur-2xl border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col justify-center cursor-pointer transition-all duration-500 hover:shadow-2xl ${
              activeCard === 1 ? "ring-2 ring-blue-500 z-30" : ""
            }`}
          >
            <div className={`text-${currentContent.layer2.color} text-3xl font-bold`}>
              {currentContent.layer2.number}
            </div>
            <div className="mt-3 text-xl font-semibold text-gray-900">{currentContent.layer2.title}</div>
            <div className="text-gray-600 mt-2 text-sm">{currentContent.layer2.desc}</div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeCard === 1
                  ? "max-h-40 mt-4 pt-4 border-t border-gray-200 opacity-100"
                  : "max-h-0 mt-0 pt-0 border-t-0 border-transparent opacity-0"
              }`}
            >
              <p className="text-sm text-gray-600">
                Learn how {currentContent.layer2.title} powers real-time experiences.
              </p>
              
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (layerRefs.current[2] = el)}
            onClick={() => toggleCard(2)}
            className={`absolute top-44 -right-5 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col justify-center cursor-pointer transition-all duration-500 hover:shadow-2xl ${
              activeCard === 2 ? "ring-2 ring-blue-500 z-30" : ""
            }`}
          >
            <div className={`text-${currentContent.layer3.color} text-3xl font-bold`}>
              {currentContent.layer3.number}
            </div>
            <div className="mt-3 text-xl font-semibold text-gray-900">{currentContent.layer3.title}</div>
            <div className="text-gray-600 mt-2 text-sm">{currentContent.layer3.desc}</div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeCard === 2
                  ? "max-h-40 mt-4 pt-4 border-t border-gray-200 opacity-100"
                  : "max-h-0 mt-0 pt-0 border-t-0 border-transparent opacity-0"
              }`}
            >
              <p className="text-sm text-gray-600">
                Maximize efficiency with our {currentContent.layer3.title.toLowerCase()} solutions.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-5">
        <button
          onClick={goToPrevSlide}
          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-md"
          aria-label="Previous slide"
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
                  ? "bg-blue-600 scale-125 shadow-md"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNextSlide}
          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-md"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-10 z-20 text-sm text-gray-500 font-medium">
        <span className="text-blue-600 text-xl font-bold">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="mx-1.5">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
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
