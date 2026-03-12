// src/pages/services/RoboticProcessAutomation.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lucide icons
import {
  Bot,
  Zap,
  Clock,
  DollarSign,
  Scale,
  Users,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Rocket,
  Repeat,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function RoboticProcessAutomation() {
  const container = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Robotic Process Automation | Newel';
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

      // Illustration animation
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

      // Benefits cards stagger + hover
      gsap.utils.toArray('.benefit-card').forEach((card, i) => {
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

      gsap.utils.toArray('.benefit-card').forEach((card) => {
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

  const benefits = [
    { title: 'Availability', desc: '24/7 operation without fatigue or breaks', icon: Clock, color: 'indigo' },
    { title: 'Instant Scalability', desc: 'Scale up or down instantly based on demand', icon: Zap, color: 'blue' },
    { title: 'Error Reduction', desc: 'Eliminate human errors in repetitive tasks', icon: ShieldCheck, color: 'emerald' },
    { title: 'Cost Saving', desc: 'Significant reduction in operational costs', icon: DollarSign, color: 'green' },
    { title: 'Employee Satisfaction', desc: 'Free employees from mundane tasks', icon: Users, color: 'purple' },
    { title: 'Volume Processing', desc: 'Handle large volumes with consistent speed', icon: BarChart3, color: 'cyan' },
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
                Robotic Process
                <br />
                Automation
              </h1>

              <div className="hero-text space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                <p className="font-medium text-gray-800">
                  John Cryan, CEO of Deutsche Bank said back in September 2017:
                </p>
                <blockquote className="italic border-l-4 border-indigo-500 pl-5">
                  "In our banks we have people behaving like robots doing mechanical things, tomorrow we're going to have robots behaving like people."
                </blockquote>

                <p>
                  According to a report from Deloitte: The benefits of RPA adoption are significant. Payback was reported at less than 12 months, with an average 20% full-time equivalent (FTE) capacity provided by robots. RPA continues to meet and exceed expectations across multiple dimensions including improved compliance (92%), improved quality/accuracy (90%), improved productivity (86%), cost reduction (59%).
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

            {/* Right - Illustration (workers + robots + machinery) */}
            <div className="relative hidden lg:block">
              <div className="illustration relative max-w-lg mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3RpYyUyMHByb2Nlc3MlMjBhdXRvbWF0aW9ufGVufDB8fDB8fHww?auto=format&fit=crop&q=80&w=900"
                    alt="RPA Illustration - Humans & Robots Working Together"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 to-blue-600/5" />
                </div>

                {/* Floating RPA symbols */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <Bot className="w-12 h-12 text-indigo-600" />
                </div>
                <div className="absolute -bottom-12 -left-12 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <Repeat className="w-10 h-10 text-blue-600" />
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
      Ready to automate your business processes?
    </h2>

    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Let intelligent robots handle repetitive tasks while your team focuses on what truly matters.
    </p>

    <button 
      onClick={() => navigate('/Contact')}
      className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
    >
      Start RPA Journey
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>

  </div>
</section>
      </div>

      <Footer />
    </>
  );
}