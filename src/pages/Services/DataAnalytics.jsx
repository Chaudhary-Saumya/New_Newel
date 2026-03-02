// src/pages/services/DataAnalytics.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lucide icons
import {
  BarChart3,
  LineChart,
  ShieldCheck,
  Target,
  Users,
  Zap,
  Database,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Gift,
  SmilePlus,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function DataAnalytics() {
  const container = useRef(null);

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

      // Illustration float
      gsap.fromTo(
        '.illustration',
        { y: 90, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 1.7, ease: 'power3.out', scrollTrigger: { trigger: '.hero', start: 'top 70%' } }
      );

      // Benefits cards stagger
      gsap.utils.toArray('.benefit-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );
      });

      // Hover lift for cards
      gsap.utils.toArray('.benefit-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -10, scale: 1.03, duration: 0.4, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const benefits = [
    { title: 'Proactivity & Anticipating Needs', icon: Zap, color: 'indigo' },
    { title: 'Mitigating Risk & Fraud', icon: ShieldCheck, color: 'red' },
    { title: 'Delivering Relevant Products', icon: Target, color: 'blue' },
    { title: 'Personalisation & Service', icon: SmilePlus, color: 'purple' },
    { title: 'Optimizing & Improving Customer Experience', icon: Users, color: 'emerald' },
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
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-10 text-gray-900">
                Data
                <br />
                Analytics
              </h1>

              <div className="hero-text space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                <p>
                  Data is the oil, some say the gold, of the 21st century — the raw material that our economies, societies and democracies are increasingly being built on.
                </p>
                <p>
                  In a digital economy, data is more valuable than ever with huge rewards.
                </p>
              </div>

              <div className="mt-12">
                <button className="hero-btn group px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-xl shadow-lg shadow-indigo-200/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-3">
                  Contact Us
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right - Illustration (matching style) */}
            <div className="relative hidden lg:block">
              <div className="illustration relative max-w-lg mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGFuYWx5c3R8ZW58MHx8MHx8fDA%3D?auto=format&fit=crop&q=80&w=900"
                    alt="Data Analytics Illustration"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/5" />
                </div>

                {/* Floating chart/data icons */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-indigo-600" />
                </div>
                <div className="absolute -bottom-12 -left-12 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <LineChart className="w-10 h-10 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
              Benefits
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={i}
                    className="benefit-card group bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${benefit.color}-50 group-hover:bg-${benefit.color}-100 transition-colors`}>
                      <Icon size={44} className={`text-${benefit.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Ready to unlock the power of your data?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12">
              Let our data analytics experts turn your raw data into actionable business intelligence.
            </p>
            <button className="group px-12 py-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-indigo-200/40 transition-all duration-300 hover:shadow-indigo-300/60 hover:-translate-y-1 flex items-center gap-4 mx-auto">
              Get Started
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}