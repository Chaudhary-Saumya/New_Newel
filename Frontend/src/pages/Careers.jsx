// components/Careers.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Rocket, Sprout, PartyPopper, Briefcase, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const pageRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const whyPointsRef = useRef([]);
  const jobsRef = useRef([]);
  const statsRef = useRef([]);
  const ctaRef = useRef(null);

  const [expandedJob, setExpandedJob] = useState(null);

  useEffect(() => {
    document.title = 'Careers | Newel';
    
    // Reset scroll to top on page load
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }, []);

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
    {
      label: "Average Growth Rate",
      value: "28%",
      desc: "Annual promotion & salary hikes",
    },
    {
      label: "Employee Satisfaction",
      value: "94%",
      desc: "From internal surveys",
    },
    { label: "Projects Delivered", value: "120+", desc: "In last 3 years" },
  ];

  useEffect(() => {
    let scroll;

    const initScroll = () => {
      try {
        scroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          multiplier: 0.8,
          class: 'is-revealed',
          tablet: { smooth: true, multiplier: 0.7 },
          smartphone: { smooth: true, multiplier: 0.6 },
          lerp: 0.08,
        });

        setTimeout(() => {
          scroll.update();
        }, 300);
      } catch (error) {
        console.error('Locomotive Scroll init error:', error);
      }
    };

    const timer = setTimeout(initScroll, 100);

    const ctx = gsap.context(() => {
      // Hero – simple fade + lift
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
      );

      // Why Newel cards – stagger fade in
      gsap.fromTo(
        whyPointsRef.current.filter(Boolean),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        },
      );

      // Job cards – stagger from bottom
      gsap.fromTo(
        jobsRef.current.filter(Boolean),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.13,
        },
      );

      // Stats – quick pop in + number count
      statsRef.current.forEach((stat, i) => {
        if (!stat) return;
        const valueEl = stat.querySelector(".value");
        if (!valueEl) return;

        gsap.fromTo(
          valueEl,
          { textContent: 0 },
          {
            textContent: parseFloat(valueEl.dataset.value),
            duration: 1.6,
            snap: { textContent: 1 },
            ease: "power2.out",
            delay: i * 0.15,
            onUpdate: function () {
              valueEl.textContent =
                Math.round(this.targets()[0].textContent * 10) / 10;
            },
          },
        );

        gsap.fromTo(
          stat,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.3)",
            delay: i * 0.15,
          },
        );
      });

      // CTA – simple entrance
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.4 },
      );
    }, pageRef);

    return () => {
      clearTimeout(timer);
      if (scroll) {
        scroll.destroy();
      }
      ctx.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <div ref={scrollContainerRef} data-scroll-container>
        <div data-scroll-section>
          <Navbar />
          <section
            ref={sectionRef}
            className="relative bg-white py-20 lg:py-32 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
              {/* Hero */}
              <div ref={heroRef} className="text-center mb-16 lg:mb-24 opacity-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-[#5099ff] to-blue-700 tracking-tight leading-none mb-5">
                  Careers at Newel
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 font-medium max-w-4xl mx-auto">
                  Want to work with us?
                </p>
                <div className="mt-8 h-1.5 w-40 bg-gradient-to-r from-[#5099ff] to-blue-600 mx-auto rounded-full" />
              </div>

              {/* Why Newel */}
              <div className="mb-20 lg:mb-28">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12 lg:mb-16">
                  Why Newel?
                </h2>

                <div className="space-y-10 lg:space-y-12 max-w-5xl mx-auto">
                  {whyNewel.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div
                        key={benefit.title}
                        ref={(el) => (whyPointsRef.current[index] = el)}
                        className="group bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100/60 p-6 lg:p-8 hover:shadow-[#5099ff]/30 transition-all duration-300 opacity-0"
                      >
                        <div className="flex items-center gap-5">
                          <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#5099ff] to-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5099ff] transition-colors">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {benefit.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
                      className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#5099ff]/30 opacity-0"
                    >
                      <div
                        className="flex justify-between items-center p-6 cursor-pointer"
                        onClick={() =>
                          setExpandedJob(expandedJob === index ? null : index)
                        }
                      >
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#5099ff] transition-colors">
                          {job.title}
                        </h3>
                        <span className="text-3xl font-bold text-[#5099ff]">
                          {expandedJob === index ? "−" : "+"}
                        </span>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-600 ease-in-out ${
                          expandedJob === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="p-6 pt-0 border-t border-gray-100">
                          <p className="text-lg text-gray-700 mb-4">
                            <strong>Experience:</strong> {job.experience}
                          </p>
                          <p className="text-lg text-gray-700 mb-6">
                            <strong>Skills:</strong> {job.skills}
                          </p>
                          <a
                            href="#apply"
                            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-[#5099ff] to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
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
                    className="text-center bg-white rounded-2xl shadow-lg border border-gray-100 p-8 opacity-0"
                  >
                    <div className="text-5xl font-extrabold text-[#5099ff] mb-3">
                      <span className="value" data-value={parseFloat(stat.value)}>
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      {stat.label}
                    </p>
                    <p className="text-gray-600">{stat.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                ref={ctaRef}
                className="text-center bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-xl p-6 lg:p-8 shadow-lg border border-blue-100/50 opacity-0 max-w-4xl mx-auto"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Build the Future?
                </h2>

                <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
                  Join Newel and work on meaningful projects that impact millions —
                  with great people, great pay, and great culture.
                </p>

                <a
                  href="#apply"
                  className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#5099ff] to-blue-700 text-white font-semibold text-base rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Apply Today →</span>
                  <span className="absolute inset-0 bg-white/20 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
                </a>
              </div>
            </div>
          </section>
          <div data-scroll-section>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

