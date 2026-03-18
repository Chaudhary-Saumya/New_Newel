// src/pages/services/ApplicationReEngineering.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lucide icons
import {
  RefreshCw,
  Code2,
  Database,
  LayoutDashboard,
  Server,
  ArrowRight,
  Wrench,
  Cpu,
  Layers,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function ApplicationReEngineering() {
  const container = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Application Re-Engineering | Newel';
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

      // Illustration float + subtle scale
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

      // Offer cards stagger + hover lift
      gsap.utils.toArray('.offer-card').forEach((card, i) => {
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

      gsap.utils.toArray('.offer-card').forEach((card) => {
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

  const offerItems = [
    { title: 'Current application assessment', icon: Layers },
    { title: 'Language Upgradation', icon: Code2 },
    { title: 'User interface conversion', icon: LayoutDashboard },
    { title: 'Database changes', icon: Database },
    { title: 'Technology upgradation', icon: RefreshCw },
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
                Application Re-
                <br />
                Engineering
              </h1>

              <div className="hero-text space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                <p>
                  Today, due to rapid change in technologies, enterprises are increasingly facing the challenges of aging applications, which are essential for the organizations but at the same time prove to be a nightmare for IT Developers and maintenance engineers.
                </p>
                <p>
                  Since these legacy applications carry years of accumulated experience and knowledge, strategically organization should build new state-of-the-art applications to leverage current technologies before discarding old systems.
                </p>
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => navigate('/Contact')}
                  className="hero-btn group px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-xl shadow-lg shadow-indigo-200/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-3"
                >
                  Contact Us
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right - Illustration (crane lifting app blocks - symbolic re-engineering) */}
            <div className="relative hidden lg:block">
              <div className="illustration relative max-w-lg mx-auto">
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_335657-2370.jpg?t=st=1773755500~exp=1773759100~hmac=a9c0419aae66c5cc41766160fa544883a58fbf307c32a7550f9cdf7dddad3253&w=1480"
                    alt="Application Re-Engineering Illustration"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/5" />
                </div>

                {/* Floating crane / tech symbols */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <Wrench className="w-12 h-12 text-indigo-600" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <RefreshCw className="w-10 h-10 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {offerItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="offer-card group bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                      <Icon size={44} className="text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
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
      Ready to modernize your legacy applications?
    </h2>

    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Transform aging systems into powerful, future-ready applications with our expert re-engineering services.
    </p>

    <button 
      onClick={() => navigate('/Contact')}
      className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
    >
      Start Re-Engineering Now
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>

  </div>
</section>
      </div>

      <Footer />
    </>
  );
}