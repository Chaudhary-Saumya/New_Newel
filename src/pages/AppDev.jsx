// components/AppDev.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function AppDev() {
  const heroRef = useRef(null);
  const processRef = useRef(null);
  const processLineRef = useRef(null);
  const processStepsRef = useRef([]);
  const stackRef = useRef(null);

  // Sample tech stack (you can replace icons with real ones)
  const techStack = [
    { name: "React Native", icon: "⚛️" },
    { name: "Flutter", icon: "🐦" },
    { name: "Node.js", icon: "🟢" },
    { name: "AWS Amplify", icon: "☁️" },
    { name: "Firebase", icon: "🔥" },
    { name: "GraphQL", icon: "◈" },
  ];

  const processSteps = [
    { title: "IDEA", desc: "Deep requirement analysis with brilliant tools", icon: "💡" },
    { title: "SKETCH", desc: "Draft design related to feasibility research", icon: "✏️" },
    { title: "DESIGN", desc: "Final decision after feasibility test", icon: "🎨" },
    { title: "DEVELOP", desc: "Build solution according to approved design", icon: "🛠️" },
    { title: "TEST", desc: "Test every component for perfect fit", icon: "🧪" },
    { title: "CELEBRATE", desc: "Deliver, control & handover", icon: "🎉" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero typing headline animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelector('h1'),
          { width: 0 },
          {
            width: "100%",
            duration: 2.5,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Process line draw
      if (processLineRef.current) {
        gsap.fromTo(
          processLineRef.current,
          { width: '0%' },
          {
            width: '100%',
            duration: 4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: processRef.current,
              start: 'top 70%',
              end: 'bottom 90%',
              scrub: 1.2,
            },
          }
        );
      }

      // Process steps pop-in
      processStepsRef.current.forEach((step, i) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { opacity: 0, scale: 0.7, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'back.out(1.6)',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              once: true,
            },
            delay: i * 0.25,
          }
        );
      });

      // Tech stack float & hover
      if (stackRef.current) {
        gsap.fromTo(
          stackRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stackRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        {/* Very subtle animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Hero Section */}
          <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-40">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-none overflow-hidden whitespace-nowrap">
                Application Development
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                In today's technology era, applications are the most effective way to connect with your potential clients and engage them deeply in your service offerings.
              </p>
              <p className="text-lg lg:text-xl text-gray-600">
                Application development plays a vital role for any business that strives to gain recognition, significant market share, and long-term customer loyalty.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-10 py-5 bg-[#5099ff] text-white font-semibold text-lg rounded-full shadow-lg hover:bg-[#3d7fd9] hover:shadow-2xl hover:shadow-[#5099ff]/40 transition-all duration-300 hover:-translate-y-1"
              >
                Contact Us →
              </a>
            </div>

            {/* Visual placeholder - you can replace with real animated illustration */}
            <div className="relative h-80 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <p className="text-3xl lg:text-4xl font-bold">Build Once, Reach Everywhere</p>
                <p className="text-lg mt-4">Cross-Platform • Native • Secure</p>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div ref={processRef} className="mb-24 lg:mb-40">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
              Our Proven Development Process
            </h2>

            <div className="relative flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
              {/* Animated connecting line */}
              <div className="hidden lg:block absolute left-0 top-1/2 w-full h-1 bg-gray-200 rounded-full">
                <div
                  ref={processLineRef}
                  className="h-full bg-gradient-to-r from-[#5099ff] to-blue-600 origin-left rounded-full"
                  style={{ width: '0%' }}
                />
              </div>

              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  ref={(el) => (processStepsRef.current[index] = el)}
                  className="group relative z-10 w-full lg:w-auto text-center p-6 lg:p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-[#5099ff]/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#5099ff]/10 flex items-center justify-center mx-auto mb-4 text-3xl lg:text-4xl">
                    {step.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#5099ff] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-base lg:text-lg">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Showcase */}
          <div ref={stackRef} className="mb-20 lg:mb-32">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
              Technologies We Master
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-2xl hover:shadow-[#5099ff]/30 hover:-translate-y-2 transition-all duration-400 flex flex-col items-center text-center"
                >
                  <div className="text-4xl lg:text-5xl mb-4">{tech.icon}</div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-[#5099ff] transition-colors">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-3xl p-12 lg:p-20 shadow-2xl border border-blue-100/50">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Ready to Build Your Next Big Application?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Let's create fast, secure, and scalable applications that drive real business growth.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#5099ff] to-blue-700 text-white font-semibold text-xl rounded-full shadow-2xl hover:shadow-3xl hover:shadow-[#5099ff]/40 transition-all duration-500 hover:-translate-y-2 active:scale-95"
            >
              Get Started →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}