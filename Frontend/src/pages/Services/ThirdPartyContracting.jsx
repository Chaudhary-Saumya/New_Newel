import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function ThirdPartyContracting() {
  const container = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Third Party Contracting | Newel';
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
              <h1 className="hero-title text-5xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-none mb-10 text-gray-900">
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
                <button 
                  onClick={() => navigate('/Contact')}
                  className="hero-btn group px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-xl shadow-lg shadow-indigo-200/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-3"
                >
                  Contact Us →
                </button>
              </div>
            </div>

            {/* Right - Illustration (DOOH style) */}
            <div className="relative hidden lg:block">
              <div className="illustration relative max-w-lg mx-auto">
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-vector/satisfied-businessmen-shake-hands-against-signed-agreement_107791-69.jpg?t=st=1773755933~exp=1773759533~hmac=c9c811eb09b61df33584c6f778735419a79dcfb99c73c02a87c32564868e8dda&w=1480"
                    alt="Business agreement handshake"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/5" />
                </div>

                {/* Floating icons */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM6 5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to partner for reliable staffing?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Let Newel Technologies handle your third-party contracting needs with full compliance, transparency, and excellence.
            </p>
            <button 
              onClick={() => navigate('/Contact')}
              className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
            >
              Get In Touch →
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

