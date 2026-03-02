// src/pages/services/ThirdPartyContracting.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lucide icons
import {
  Handshake,
  FileCheck,
  ShieldCheck,
  Users,
  Scale,
  ArrowRight,
  CheckCircle,
  Briefcase,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function ThirdPartyContracting() {
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
        '.hero-text p',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.2, delay: 0.3, ease: 'power4.out' }
      );
      gsap.fromTo(
        '.hero-btn',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.6, ease: 'back.out(1.4)' }
      );

      // Illustration entrance
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

      // Process icons stagger
      gsap.utils.toArray('.process-step').forEach((step, i) => {
        gsap.fromTo(
          step,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: step, start: 'top 85%' },
          }
        );
      });

      // Hover lift on illustration elements
      gsap.utils.toArray('.float-el').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          gsap.to(el, { y: -8, scale: 1.1, duration: 0.4, ease: 'power2.out' });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(el, { y: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

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
                Third-Party
                <br />
                Contracting
              </h1>

              <div className="hero-text space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                <p>
                  At Newel Technologies, third-party contracting is one of our core passions. We specialize in managing professional staff for contract-based roles, ensuring that both clients and professionals receive exceptional service and support.
                </p>
                <p>
                  Our approach is rooted in full compliance and transparency. We strictly adhere to all legal and regulatory standards, creating a trustworthy and efficient process for every stakeholder involved.
                </p>
                <p>
                  With Newel Technologies, you can count on a reliable partner who values integrity, clarity, and excellence in third-party staffing solutions.
                </p>
              </div>

              <div className="mt-12">
                <button className="hero-btn group px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-xl shadow-lg shadow-indigo-200/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-3">
                  Contact Us
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right - Illustration (handshake + process icons) */}
            <div className="relative hidden lg:block">
              <div className="illustration relative max-w-lg mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
                  <div className="flex justify-center">
                    <div className="relative w-80 h-80">
                      {/* Main handshake illustration */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg">
                          <Handshake className="w-40 h-40 text-indigo-600" />
                        </div>
                      </div>

                      {/* Floating process icons */}
                      <div className="float-el absolute -top-6 left-0 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <FileCheck className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div className="float-el absolute top-4 -right-6 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="float-el absolute bottom-0 -right-8 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <Briefcase className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Ready to partner for reliable staffing?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12">
              Let Newel Technologies handle your third-party contracting needs with full compliance, transparency, and excellence.
            </p>
            <button className="group px-12 py-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-indigo-200/40 transition-all duration-300 hover:shadow-indigo-300/60 hover:-translate-y-1 flex items-center gap-4 mx-auto">
              Get In Touch
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}