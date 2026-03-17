// src/pages/services/ApplicationDevelopment.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lucide icons
import {
  Code2,
  Server,
  Globe,
  Zap,
  Smartphone,
  Monitor,
  BarChart3,
  Settings,
  Headphones,
  AlertTriangle,
  Activity,
  Bug,
  Database,
  ArrowUpRight,
  Lightbulb,
  Pencil,
  Layout,
  Terminal,
  CheckCircle2,
  PartyPopper,
  Cpu,
  TestTube2,
  CloudCog,
  GitBranch,
  Container,
  Database as DbIcon,
  TerminalSquare,
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function ApplicationDevelopment() {
  const container = useRef(null);

  useEffect(() => {
        document.title = 'Application Developtment | Newel';
      }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: 'power4.out' });
      gsap.fromTo('.hero-text', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: 'power4.out' });
      gsap.fromTo('.hero-btn', { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, delay: 0.6, ease: 'back.out(1.4)' });

      // Floating icons bob
      gsap.utils.toArray('.float-icon').forEach((icon, i) => {
        gsap.to(icon, {
          y: -18,
          duration: 3.2 + i * 0.5,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.3,
        });
      });

      // Cards & steps stagger + hover
      gsap.utils.toArray('.step-card, .skill-card, .service-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 70, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: i * 0.06,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });

      gsap.utils.toArray('.step-card, .skill-card, .service-card').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          gsap.to(el, { y: -12, scale: 1.03, boxShadow: '0 25px 50px -12px rgba(79,70,229,0.18)', duration: 0.4 });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(el, { y: 0, scale: 1, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.06)', duration: 0.5 });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const processSteps = [
    { title: 'IDEA', desc: 'To analyze the requirement through in depth research with the help of brilliant tools.', icon: Lightbulb, color: 'indigo' },
    { title: 'SKETCH', desc: 'To draft the design that is related to the research in order to check the feasibility.', icon: Pencil, color: 'blue' },
    { title: 'DESIGN', desc: 'After completing feasibility test, a final decision is prepared by using smart tools.', icon: Layout, color: 'purple' },
    { title: 'DEVELOP', desc: 'Now, our development team start developing the solution according to design.', icon: Terminal, color: 'cyan' },
    { title: 'TEST', desc: 'In testing phase, we test every component to make sure that our solution fits the requirement.', icon: TestTube2, color: 'amber' },
    { title: 'CELEBRATE', desc: 'We make delivery for the solution and assist our client to control and administer.', icon: PartyPopper, color: 'pink' },
  ];

  const offerItems = [
    { title: 'Custom Development', icon: Code2 },
    { title: 'Client Server', icon: Server },
    { title: 'Web Services', icon: Globe },
    { title: 'Integration', icon: Zap },
    { title: 'Web Applications', icon: Smartphone },
    { title: 'Standalone', icon: Monitor },
    { title: 'Reporting', icon: BarChart3 },
    { title: 'Customization', icon: Settings },
  ];

  const supportItems = [
    { title: 'L1 - Service Desk', icon: Headphones },
    { title: 'L2 - Incident Management Maintenance Services', icon: AlertTriangle },
    { title: 'Performance Monitoring and Tuning - Backup & Restore', icon: Activity },
    { title: 'Minor and Major Enhancement', icon: ArrowUpRight },
    { title: 'Bug Fixes - Configuration & Release Management', icon: Bug },
    { title: 'Database Support & Maintenance - User & Technical Documentation', icon: Database },
  ];

  const skills = [
    {
      category: 'WEB',
      items: ['MS Technologies', 'Angular, Node, React', 'MSSQL, Oracle, MySQL, PostgreSQL', 'Event Sourcing', 'SharePoint'],
      icon: Globe,
    },
    {
      category: 'UNIT TESTING',
      items: ['NUnit', 'XUnit', 'Mocha', 'Jest', 'Chai', 'Sinon'],
      icon: TestTube2,
    },
    {
      category: 'DEVOPS',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'Azure', 'DevOps'],
      icon: CloudCog,
    },
  ];

  return (
    <>
      <Navbar />

      <div ref={container} className="relative bg-white text-gray-900 overflow-hidden">
        {/* Very light background decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-50 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl" />
        </div>

        {/* HERO */}
        <section className="hero relative pt-20 pb-28 md:pt-32 md:pb-44 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-8">
                Application
                <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mt-2">
                  Development
                </span>
              </h1>

              <div className="hero-text space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                <p>
                  In this technology era, applications have brought convenience in our lives. Applications are an effective way to connect your potential clients as well as engage them in your service offerings.
                </p>
                <p>
                  Application development plays a very vital role for any business that strives to gain recognition and significant market share.
                </p>
              </div>

              <div className="mt-12">
                <button className="hero-btn group relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold text-lg rounded-2xl shadow-2xl shadow-indigo-200/60 transition-all duration-300 hover:-translate-y-1 flex items-center gap-4">
                  Contact Us
                  <span className="text-2xl group-hover:translate-x-2 transition">→</span>
                </button>
              </div>
            </div>

            {/* Floating visual + icons */}
            <div className="relative hidden lg:block">
              <div className="floating-visual relative w-full max-w-xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-vector/mobile-application-development-programming-languages-css-html-it-ui-male-programmer-cartoon-character-developing-website-coding_335657-2367.jpg?t=st=1773755286~exp=1773758886~hmac=e8bc0be8748219fd77abaf8f0b1e714252c85d4f7ea91e249025a0d9a1234ef3&w=1480"
                    alt="Modern Application Development"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-transparent to-blue-600/8" />
                </div>

                {/* Floating icons */}
                <div className="float-icon absolute -top-8 -left-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl">
                  <Code2 size={44} className="text-indigo-600" />
                </div>
                <div className="float-icon absolute -top-12 right-12 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl">
                  <Smartphone size={44} className="text-blue-600" />
                </div>
                <div className="float-icon absolute bottom-6 -left-10 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl">
                  <Database size={40} className="text-purple-600" />
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
              What we offer
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="service-card group relative bg-white border border-gray-100 rounded-3xl p-8 hover:border-indigo-300 transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:shadow-xl"
                  >
                    <div className="w-20 h-20 bg-indigo-50 group-hover:bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                      <Icon size={42} className="text-indigo-600" />
                    </div>
                    <p className="text-xl font-semibold text-gray-800">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SUPPORT SERVICES */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
              Support Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="service-card group bg-white border border-gray-100 rounded-3xl p-8 hover:border-emerald-300 transition-all duration-300 flex gap-6 shadow-sm hover:shadow-xl"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 rounded-2xl flex items-center justify-center transition-colors">
                      <Icon size={32} className="text-emerald-600" />
                    </div>
                    <p className="text-xl font-medium text-gray-800 leading-relaxed">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
              Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={i}
                    className="step-card group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 text-center"
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${step.color}-50 group-hover:bg-${step.color}-100 transition-colors`}>
                      <Icon size={44} className={`text-${step.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR SKILLS */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
              Our Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="skill-card bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center">
                      <skill.icon size={36} className="text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{skill.category}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 bg-gradient-to-br from-indigo-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Ready to build something amazing?
            </h2>
            <p className="text-2xl text-gray-600 mb-12">
              Let’s turn your vision into a powerful, scalable application.
            </p>
            <button className="px-14 py-7 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-indigo-300 transition-all hover:-translate-y-1">
              Get In Touch
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}