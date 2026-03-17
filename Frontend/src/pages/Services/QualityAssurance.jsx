// src/pages/services/QualityAssurance.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lucide icons
import {
  CheckCircle,
  ShieldCheck,
  Zap,
  RefreshCw,
  Gauge,
  Crosshair,
  ArrowRight,
  Bug,
  Terminal,
  Activity,
  Layers,
  Code2,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function QualityAssurance() {
  const container = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Quality Assurance | Newel';
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title + text + button entrance
      gsap.fromTo(
        '.hero-title',
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.3, ease: 'power4.out' }
      );
      gsap.fromTo(
        '.hero-text',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, delay: 0.3, ease: 'power4.out' }
      );
      gsap.fromTo(
        '.hero-btn',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.6, ease: 'back.out(1.4)' }
      );

      // Illustration float + scale
      gsap.fromTo(
        '.illustration',
        { y: 90, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.hero', start: 'top 70%' },
        }
      );

      // Benefit cards stagger + hover lift
      gsap.utils.toArray('.benefit-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: i * 0.09,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );
      });

      gsap.utils.toArray('.benefit-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -10, scale: 1.03, boxShadow: '0 25px 50px -12px rgba(79,70,229,0.18)', duration: 0.4 });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, scale: 1, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.07)', duration: 0.5 });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      title: 'Functional Testing',
      desc: 'Depending on the need of the customer, we do manual and automation testing to ensure the verification & validation of applications against the defined specifications and acceptance criteria.',
      icon: CheckCircle,
      color: 'indigo',
    },
    {
      title: 'Compatibility Testing',
      desc: 'Comprehensive testing that can be performed across different versions, browsers, databases, servers, hardware, operating systems, configurations, and display resolutions, etc.',
      icon: Layers,
      color: 'blue',
    },
    {
      title: 'Performance Testing',
      desc: 'This testing service includes load and stress testing, capacity planning, baseline test, and benchmarking against industry practices, and production monitoring.',
      icon: Gauge,
      color: 'cyan',
    },
    {
      title: 'Regression Testing',
      desc: 'Re-execution of functional & non-functional tests using CI/CD to ensure that the software continues to perform in the same manner as it did before making any changes.',
      icon: RefreshCw,
      color: 'emerald',
    },
  ];

  return (
    <>
      <Navbar />

      <div ref={container} className="bg-white min-h-screen">
        {/* HERO */}
        <section className="hero relative pt-20 pb-24 md:pt-28 md:pb-40 px-6 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div>
              <h1 className="hero-title text-5xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-none mb-10 text-gray-900">
                Quality
                <br />
                Assurance
              </h1>

              <div className="hero-text space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                <p>
                  If a website or web application takes three extra seconds to load, users get annoyed and become furious in today’s super fast world.
                </p>
                <p>
                  If a mobile app that constantly glitches, then client find the market for a new app. Users don’t have the time to be patient with software.
                </p>
                <p>
                  That’s why quality assurance (QA) is indispensable to any software project.
                </p>
                <p>
                  QA is all about making sure that software works the way it is supposed to work every time. It’s an umbrella term that refers to many different methods and processes for testing software and ensuring quality. We practice DevOps, CI/CD, agile testing and test automation and provide the following testing services for web, desktop, mobile, legacy applications, or next-gen applications or APIs:
                </p>
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => navigate('/Contact')}
                  className="hero-btn group px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-xl shadow-lg shadow-indigo-200/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-3"
                >
                  Contact Us
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right - Illustration */}
            <div className="relative hidden lg:block">
              <div className="illustration relative max-w-lg mx-auto">
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-vector/iso-certification-illustration_23-2148688046.jpg?t=st=1773755711~exp=1773759311~hmac=4dbac4c5ec2a1bdd8c901b64ae4038abe2a26279768b664339c8806d51ad78e7&w=1480"
                    alt="Quality Assurance Illustration"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/5" />
                </div>

                {/* Floating QA symbols */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-indigo-600" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <Bug className="w-10 h-10 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900">
              Benefits
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={i}
                    className="benefit-card group bg-white border border-gray-100 rounded-3xl p-10 text-center shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-${benefit.color}-50 group-hover:bg-${benefit.color}-100 transition-colors`}>
                      <Icon size={44} className={`text-${benefit.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
  <div className="max-w-3xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
      Ready to ensure flawless software quality?
    </h2>

    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Let our QA experts help you deliver bug-free, high-performance applications every time.
    </p>

    <button 
      onClick={() => navigate('/Contact')}
      className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
    >
      Start QA Journey
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>

  </div>
</section>
      </div>

      <Footer />
    </>
  );
}