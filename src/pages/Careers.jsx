// components/Careers.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Rocket, Sprout, PartyPopper, Briefcase, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const whyLineRef = useRef(null);
  const whyPointsRef = useRef([]);
  const jobsRef = useRef([]);
  const statsRef = useRef([]);
  const ctaRef = useRef(null);

  const [expandedJob, setExpandedJob] = useState(null);

  const whyNewel = [
    {
      title: "Cutting-Edge Projects",
      desc: "Work on real-world cloud, AWS, AI & digital transformation solutions for global clients.",
      icon: Rocket,
    },
    {
      title: "Rapid Growth Path",
      desc: "Structured career progression, certifications, mentorship and leadership opportunities.",
      icon: Sprout,
    },
    {
      title: "Flexible & Fun Culture",
      desc: "Hybrid/remote options, 5-day week, team outings, birthday celebrations & more.",
      icon: PartyPopper,
    },
    {
      title: "Competitive Rewards",
      desc: "Best-in-class salaries, performance bonuses, health insurance & ESOP potential.",
      icon: Briefcase,
    },
    {
      title: "Inclusive & Diverse Team",
      desc: "Open, respectful environment that values ideas from everyone.",
      icon: Users,
    },
  ];

  const openPositions = [
    {
      title: "ASP.NET MVC Developer",
      experience: "3+ Years",
      skills: "ASP.NET MVC, Web API, SQL Server, JavaScript, Angular JS",
    },
    {
      title: ".NET Core Developer",
      experience: "3+ Years",
      skills: ".NET Core, C#, SQL Server, Entity Framework, REST APIs",
    },
    {
      title: "Business Analyst",
      experience: "2+ Years",
      skills: "Requirements Gathering, Process Modeling, Agile, Data Analysis",
    },
  ];

  const stats = [
    { label: "Average Growth Rate", value: "28%", desc: "Annual promotion & salary hikes" },
    { label: "Employee Satisfaction", value: "94%", desc: "From internal surveys" },
    { label: "Projects Delivered", value: "120+", desc: "In last 3 years" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        heroRef.current.querySelector('h1'),
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 2,
          ease: "power4.out",
          scrollTrigger: { trigger: heroRef.current, start: "top 80%", once: true },
        }
      );

      // Why Newel timeline line draw
      if (whyLineRef.current) {
        gsap.fromTo(
          whyLineRef.current,
          { height: '0%' },
          {
            height: '100%',
            duration: 3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: whyLineRef.current.parentElement,
              start: 'top 70%',
              end: 'bottom 90%',
              scrub: 1,
            },
          }
        );
      }

      // Why points entrance
      whyPointsRef.current.forEach((point, i) => {
        if (!point) return;
        gsap.fromTo(
          point,
          { opacity: 0, x: i % 2 === 0 ? -80 : 80, scale: 0.92 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: point,
              start: "top 85%",
              once: true,
            },
            delay: i * 0.18,
          }
        );
      });

      // Job cards entrance
      jobsRef.current.forEach((job, i) => {
        if (!job) return;
        gsap.fromTo(
          job,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: job,
              start: "top 85%",
              once: true,
            },
            delay: i * 0.15,
          }
        );
      });

      // Stats counter
      statsRef.current.forEach((stat) => {
        if (!stat) return;
        const valueEl = stat.querySelector('.value');
        if (!valueEl) return;

        gsap.fromTo(
          valueEl,
          { textContent: 0 },
          {
            textContent: parseFloat(valueEl.dataset.value),
            duration: 2.5,
            snap: { textContent: 1 },
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              once: true,
            },
            onUpdate: function () {
              valueEl.textContent = Math.round(this.targets()[0].textContent * 10) / 10;
            },
          }
        );
      });

      // CTA pulse
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.3,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
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

      <section ref={sectionRef} className="relative bg-white py-20 lg:py-32 overflow-hidden">
        {/* Light animated wave background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div ref={heroRef} className="text-center mb-16 lg:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-[#5099ff] to-blue-700 tracking-tight leading-none mb-5">
              Careers at Newel
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 font-medium max-w-4xl mx-auto">
              Want to work with us?
            </p>
            <div className="mt-8 h-1.5 w-40 bg-gradient-to-r from-[#5099ff] to-blue-600 mx-auto rounded-full" />
          </div>

          {/* Why Newel – Floating Timeline */}
          <div className="relative mb-20 lg:mb-28">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12 lg:mb-16">
              Why Newel?
            </h2>

            <div className="relative max-w-5xl mx-auto">
              {/* Curved connecting line */}
              <div ref={whyLineRef} className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5099ff]/30 to-blue-600/30 transform -translate-x-1/2 rounded-full hidden lg:block" />

              <div className="space-y-16 lg:space-y-20">
                {whyNewel.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                  <div
                    key={benefit.title}
                    ref={(el) => (whyPointsRef.current[index] = el)}
                    className={`
                      group relative bg-white/95 backdrop-blur-xl rounded-2xl 
                      shadow-lg border border-gray-100/60 p-6 lg:p-8 
                      hover:shadow-[#5099ff]/40 transition-all duration-500
                      ${index % 2 === 0 ? 'lg:ml-auto lg:pr-28' : 'lg:mr-auto lg:pl-28'}
                      max-w-xl
                    `}
                  >
                    {/* Connection dot */}

                    <div className="relative z-10 flex items-center gap-4 lg:gap-5">
                      <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-[#5099ff] to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5099ff] transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-10 lg:mb-14">
              We Are Hiring
            </h2>

            <div className="space-y-5">
              {openPositions.map((job, index) => (
                <div
                  key={job.title}
                  ref={(el) => (jobsRef.current[index] = el)}
                  className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#5099ff]/30"
                >
                  <div 
                    className="flex justify-between items-center p-5 lg:p-6 cursor-pointer"
                    onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                  >
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#5099ff] transition-colors">
                      {job.title}
                    </h3>
                    <span className="text-2xl lg:text-3xl font-bold text-[#5099ff]">
                      {expandedJob === index ? '−' : '+'}
                    </span>
                  </div>

                  <div 
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      expandedJob === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-5 lg:p-6 pt-0 border-t border-gray-100">
                      <p className="text-base lg:text-lg text-gray-700 mb-4">
                        <strong>Experience:</strong> {job.experience}
                      </p>
                      <p className="text-base lg:text-lg text-gray-700 mb-5">
                        <strong>Skills:</strong> {job.skills}
                      </p>
                      <a
                        href="#apply"
                        className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-[#5099ff] to-blue-600 text-white font-semibold text-base rounded-full shadow-lg hover:shadow-xl hover:shadow-[#5099ff]/40 transition-all duration-300 hover:-translate-y-1"
                      >
                        Apply Now →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                ref={(el) => (statsRef.current[index] = el)}
                className="text-center bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8"
              >
                <div className="text-4xl lg:text-5xl font-extrabold text-[#5099ff] mb-3">
                  <span className="value" data-value={parseFloat(stat.value)}>{stat.value}</span>
                </div>
                <p className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600 text-sm lg:text-base">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-2xl p-8 lg:p-12 shadow-xl border border-blue-100/50">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Join Newel and work on meaningful projects that impact millions — with great people, great pay, and great culture.
            </p>
            <a
              href="#apply"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#5099ff] to-blue-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#5099ff]/50 transition-all duration-500 hover:-translate-y-2 active:scale-95 relative overflow-hidden"
            >
              <span className="relative z-10">Apply Today →</span>
              <span className="absolute inset-0 bg-white/20 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}