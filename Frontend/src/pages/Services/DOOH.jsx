// src/pages/services/DOOH.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lucide icons
import {
  Monitor,
  MapPin,
  Megaphone,
  BarChart3,
  Zap,
  ShieldCheck,
  Clock,
  ArrowRight,
  Tv,
  Radio,
  Globe,
  PlayCircle,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function DOOH() {
  const container = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'DOOH (Digital Out-of-Home) | Newel';
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
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

      // Offer cards stagger + hover
      gsap.utils.toArray('.offer-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );
      });

      gsap.utils.toArray('.offer-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.03,
            boxShadow: '0 25px 50px -12px rgba(79,70,229,0.18)',
            duration: 0.4,
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.07)',
            duration: 0.5,
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const offerItems = [
    { title: 'LED Video Walls', icon: Tv, color: 'indigo' },
    { title: 'Digital Billboards', icon: Monitor, color: 'blue' },
    { title: 'Highway VMS (Variable Message Signs)', icon: MapPin, color: 'cyan' },
    { title: 'Indoor Standees & Mall Displays', icon: Monitor, color: 'emerald' },
    { title: 'DOOH Media Network Management', icon: Globe, color: 'purple' },
    { title: 'Content Scheduling & Real-time Analytics', icon: BarChart3, color: 'amber' },
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
                DOOH
                <br />
                (Digital Out-of-Home)
              </h1>

              <div className="hero-text space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                <p>
                  Newel Technologies specializes in high-impact DOOH solutions — LED Video Walls, Digital Billboards, Highway VMS, Indoor Standees, Mall Displays, and full-scale media network operations.
                </p>
                <p>
                  We provide end-to-end turnkey services: display hardware, structural fabrication, installation, content management software (NLS), real-time analytics, remote monitoring, and online advertising billing portal.
                </p>
                <p>
                  From massive highway LED screens to premium indoor mall video walls — we help brands, media agencies, and advertisers reach audiences with stunning visuals, high brightness, and reliable performance in any environment.
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

            {/* Right - Illustration (modern DOOH vibe) */}
            <div className="relative hidden lg:block">
              <div className="illustration relative max-w-lg mx-auto">
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-vector/gradient-digital-signage-illustration_23-2150216272.jpg?t=st=1773755865~exp=1773759465~hmac=dfa8ced296eed70bdf25a6bb16ab0859a10bc6b89593d0779aff19ccdaf4aab3&w=1480"
                    alt="Digital Out-of-Home LED Display"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/5" />
                </div>

                {/* Floating DOOH icons */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <Monitor className="w-12 h-12 text-indigo-600" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-blue-600" />
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
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${item.color}-50 group-hover:bg-${item.color}-100 transition-colors`}>
                      <Icon size={44} className={`text-${item.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
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
      Ready to light up your brand with DOOH?
    </h2>

    <p className="text-lg md:text-xl text-gray-700 mb-8">
      From massive LED video walls to smart highway signs — let's create impactful digital experiences that drive attention and results.
    </p>

    <button 
      onClick={() => navigate('/Contact')}
      className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
    >
      Start Your DOOH Project
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>

  </div>
</section>
      </div>

      <Footer />
    </>
  );
}