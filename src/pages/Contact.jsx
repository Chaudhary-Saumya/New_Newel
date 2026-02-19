// components/Contact.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [formStatus] = useState('idle'); // idle | loading | success | error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side entrance
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      );

      // Right side entrance (form)
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      );

      // Floating map pin pulse
      gsap.to('.map-pin', {
        scale: 1.15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <>
    
    <Navbar/>
      <section ref={sectionRef} className="min-h-screen py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Very light background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[60px_60px] opacity-30 pointer-events-none" />
            
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Hero Header */}
          <div className="text-center mb-16 lg:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 tracking-tight">
              Why Wait? <span className="text-[#5099ff]">Let's Connect</span> Now
            </h1>
            <p className="mt-6 text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ready to accelerate your business with next-gen cloud, AWS, and IT solutions? Drop us a message — we're excited to talk.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Contact Info + Map */}
            <div ref={leftRef} className="space-y-10 lg:space-y-12">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 bg-linear-to-r from-[#5099ff] to-blue-600 bg-clip-text inline-block">
                  Reach Us Directly
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#5099ff]/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#5099ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Registered & Head Office</p>
                      <p className="text-gray-700 mt-1">
                        504, Sunrise Business Park, Rd Number 16,<br />
                        Nehru Nagar, Wagle Industrial Estate,<br />
                        Thane West, Thane, Maharashtra 400604
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#5099ff]/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#5099ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Phone</p>
                      <p className="text-gray-700 mt-1">
                        +91 96643 23316<br />
                        +91 72080 61012
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#5099ff]/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#5099ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Email</p>
                      <a
                        href="mailto:enquiry@neweltechnologies.com"
                        className="text-[#5099ff] hover:underline text-lg"
                      >
                        enquiry@neweltechnologies.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div ref={rightRef} className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100/50 p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 bg-linear-to-r from-[#5099ff] to-blue-600 bg-clip-text inline-block">
                Let's Connect Now
              </h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#5099ff] focus:ring-2 focus:ring-[#5099ff]/20 transition-all text-gray-900"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-5 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#5099ff]"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#5099ff] focus:ring-2 focus:ring-[#5099ff]/20 transition-all text-gray-900"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-5 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#5099ff]"
                    >
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#5099ff] focus:ring-2 focus:ring-[#5099ff]/20 transition-all text-gray-900"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-5 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#5099ff]"
                    >
                      Your Phone
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#5099ff] focus:ring-2 focus:ring-[#5099ff]/20 transition-all text-gray-900"
                      placeholder=" "
                    />
                    <label
                      htmlFor="subject"
                      className="absolute left-5 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#5099ff]"
                    >
                      Subject
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="peer w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#5099ff] focus:ring-2 focus:ring-[#5099ff]/20 transition-all text-gray-900 resize-none"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-5 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#5099ff]"
                  >
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className={`w-full py-5 px-10 bg-gradient-to-r from-[#5099ff] to-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed ${
                    formStatus === 'loading' ? 'animate-pulse' : 'hover:shadow-xl hover:shadow-[#5099ff]/40 hover:-translate-y-1'
                  }`}
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? (
                    <>
                      <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      </svg>
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    'Message Sent! ✓'
                  ) : (
                    'Send Message →'
                  )}
                </button>

                {formStatus === 'success' && (
                  <p className="text-center text-green-600 font-medium mt-4 animate-fade-in">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Social Follow */}
          <div className="text-center mt-16 lg:mt-24">
            <p className="text-sm text-gray-600 mb-6">Follow Us On</p>
            <div className="flex justify-center gap-8">
              <a href="#" className="text-[#5099ff] hover:text-blue-700 transition-colors transform hover:scale-110">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-[#5099ff] hover:text-blue-700 transition-colors transform hover:scale-110">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
