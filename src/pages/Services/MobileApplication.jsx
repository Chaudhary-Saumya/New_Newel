// src/pages/services/MobileApplication.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lucide icons
import {
  Apple,
  Smartphone,
  Code,
  Globe,
  Layout,
  Rocket,
  ShieldCheck,
  Zap,
  Clock,
  Headphones,
  ArrowRight,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function MobileApplication() {
  const container = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Mobile Application | Newel';
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title & text fade-in
      gsap.fromTo(
        '.hero-title',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
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
        { y: 80, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 1.6, ease: 'power3.out', scrollTrigger: { trigger: '.hero', start: 'top 70%' } }
      );

      // Platform cards stagger
      gsap.utils.toArray('.platform-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: i * 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );
      });

      // Why choose cards + process steps stagger
      gsap.utils.toArray('.why-card, .process-step').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      // Hover lift effect on cards
      gsap.utils.toArray('.platform-card, .why-card, .process-step').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          gsap.to(el, { y: -10, scale: 1.03, duration: 0.4, ease: 'power2.out' });
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
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-8 text-gray-900">
                Mobile
                <br />
                Application
              </h1>

              <div className="hero-text space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                <p>
                  It is important for every business to invest in mobile app development services as studies suggest that the community of app-users increases very speedily with each passing year.
                </p>
                <p>
                  The correct business case of mobile app can take business to new heights.
                </p>
              </div>

              <div className="mt-10">
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
                {/* Main phone illustration */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=900"
                    alt="Mobile App Illustration"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/5" />
                </div>

                {/* Floating elements around phone */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <Smartphone className="w-12 h-12 text-indigo-600" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <Rocket className="w-10 h-10 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLATFORM TYPES */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { title: 'Native', icon: Apple, color: 'black', platforms: ['iOS', 'Android', 'Windows'] },
                { title: 'Hybrid', icon: Code, color: 'teal', platforms: ['React Native', 'Ionic', 'Flutter'] },
                { title: 'Cross Platform', icon: Globe, color: 'green', platforms: ['Flutter', 'React Native', 'Xamarin'] },
                { title: 'Progressive Web App', icon: Layout, color: 'purple', platforms: ['PWA'] },
              ].map((item, i) => (
                <div
                  key={i}
                  className="platform-card group bg-white rounded-3xl border border-gray-100 p-8 text-center shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                >
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${item.color === 'black' ? 'gray-900' : `${item.color}-50`} group-hover:bg-${item.color === 'black' ? 'gray-800' : `${item.color}-100`}`}>
                    <item.icon size={52} className={`text-${item.color === 'black' ? 'white' : `${item.color}-600`}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.platforms.join(' • ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
              Why Choose Our Mobile Apps?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { title: 'Security First', desc: 'Industry-standard encryption & secure coding practices', icon: ShieldCheck, color: 'indigo' },
                { title: 'High Performance', desc: 'Optimized for speed and smooth user experience', icon: Zap, color: 'blue' },
                { title: '24/7 Support', desc: 'Dedicated team available round the clock', icon: Headphones, color: 'emerald' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="why-card group bg-white border border-gray-100 rounded-3xl p-10 text-center shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${item.color}-50 group-hover:bg-${item.color}-100 transition-colors`}>
                    <item.icon size={44} className={`text-${item.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
              Our Development Process
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-blue-200 to-emerald-200 hidden md:block" />

              <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
                {[
                  { step: '1. Planning', icon: Layout, color: 'indigo' },
                  // eslint-disable-next-line no-undef
                  { step: '2. Design', icon: Layout, color: 'blue' },
                  { step: '3. Development', icon: Code, color: 'cyan' },
                  { step: '4. Deployment', icon: Rocket, color: 'emerald' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="process-step relative bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 z-10"
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${item.color}-50 group-hover:bg-${item.color}-100 transition-colors`}>
                      <item.icon size={44} className={`text-${item.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.step}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GET STARTED CTA */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
  <div className="max-w-3xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
      Get Started Today
    </h2>

    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Ready to take your business to the next level with a custom mobile application?
    </p>

    <button 
      onClick={() => navigate('/Contact')}
      className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
    >
      Start Your Project
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>

  </div>
</section>
      </div>

      <Footer />
    </>
  );
}