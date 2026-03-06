// src/pages/services/MicrosoftOnAWS.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import {
  Cloud,
  Server,
  Database,
  ShieldCheck,
  Settings,
  ArrowRight,
  CheckCircle,
  Cpu,
  Code,
  Globe,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function MicrosoftOnAWS() {
  const pageRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Microsoft on AWS | Newel';
    
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }, []);

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
      // Hero entrance
      gsap.fromTo(
        '.hero > *',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.18, ease: 'power4.out' }
      );

      // Illustration subtle float
      gsap.to('.illustration', {
        y: -12,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Section titles
      gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.fromTo(
          title,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: title, start: 'top 80%' },
          }
        );
      });

      // Cards stagger + hover lift
      gsap.utils.toArray('.focus-card, .service-card').forEach((card, i) => {
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

        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -10, scale: 1.03, duration: 0.4, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
        });
      });
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
          <div ref={containerRef} className="bg-white">
            {/* HERO */}
            <section className="hero relative pt-20 pb-24 md:pt-32 md:pb-40 px-6 lg:px-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left - Text */}
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-none mb-10">
                    Managed Services & Cloud
                    <br />
                    Consulting for Microsoft
                    <span className="block text-indigo-600 mt-2">on AWS</span>
                  </h1>

                  <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                    <p>
                      As an AWS Partner specializing in Microsoft workloads, we help enterprises seamlessly migrate, optimize, and manage their Windows-based environments on AWS.
                    </p>
                  </div>

                  <div className="mt-12">
                    <Link to="/contact" className="group px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-xl shadow-xl shadow-indigo-200/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-300/60 hover:-translate-y-1 flex items-center gap-3 w-fit">
                      Contact Us
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right - Illustration */}
                <div className="relative hidden lg:block">
                  <div className="illustration relative max-w-lg mx-auto">
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                      alt="Microsoft on AWS Illustration"
                      className="w-full h-auto object-cover rounded-3xl shadow-2xl border border-gray-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-3xl" />
                  </div>
                </div>
              </div>
            </section>

            {/* FOCUS AREAS */}
            <section className="py-20 lg:py-28 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
                  Our Microsoft Workload Focus Areas on AWS
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  {[
                    {
                      title: 'SQL SERVER ON AWS',
                      icon: Database,
                      color: 'indigo',
                      items: [
                        'Lift-and-shift or re-platform SQL Server to Amazon EC2, RDS, or Aurora',
                        'Licensing optimization with BYOL or fully managed options',
                        'High availability tuning, backups, disaster recovery design',
                        'Performance tuning and automated patching',
                      ],
                    },
                    {
                      title: 'WINDOWS SERVER MIGRATION',
                      icon: Server,
                      color: 'blue',
                      items: [
                        'Migrate Windows Server 2008–2022 to Amazon EC2',
                        'Extended support and AWS Systems Manager licensing patches & automation',
                        'Integration with AWS Systems Manager for patching & automation',
                      ],
                    },
                    {
                      title: 'ACTIVE DIRECTORY & IDENTITY',
                      icon: ShieldCheck,
                      color: 'emerald',
                      items: [
                        'Deploy AWS Managed Microsoft AD or integrate on-prem AD',
                        'Configure Group Policy, trust relationships, and secure access',
                        'Use with AWS SSO, FSx for Windows File Server, and other services',
                      ],
                    },
                    {
                      title: '.NET APPLICATION MODERNIZATION',
                      icon: Code,
                      color: 'purple',
                      items: [
                        'Rehost, refactor, or rearchitect legacy .NET applications',
                        'Containerize apps using Amazon EKS/ECS',
                        'Adopt serverless .NET on AWS Lambda',
                        'CI/CD pipelines and DevOps automation',
                      ],
                    },
                  ].map((area, i) => (
                    <div
                      key={i}
                      className="focus-card group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                    >
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${area.color}-50 group-hover:bg-${area.color}-100 transition-colors`}>
                        <area.icon size={32} className={`text-${area.color}-600`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{area.title}</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {area.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* MANAGED SERVICES */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-indigo-50/30">
              <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
                  Our Services as an AWS Managed Service Provider
                </h2>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  {[
                    {
                      title: 'Cloud Migration & Transformation',
                      icon: Cloud,
                      color: 'indigo',
                      items: [
                        'Full-stack assessments and cloud readiness checks',
                        'TCO analysis and migration planning',
                        'Leverage AWS Migration Acceleration Program (MAP)',
                      ],
                    },
                    {
                      title: 'Optimization & Licensing',
                      icon: Settings,
                      color: 'blue',
                      items: [
                        'Perform AWS Optimization and Licensing Assessment (OLA)',
                        'Align Microsoft licensing with AWS pricing models',
                        'Right-size resources and implement cost control strategies',
                      ],
                    },
                    {
                      title: 'Ongoing Managed Services',
                      icon: ShieldCheck,
                      color: 'emerald',
                      items: [
                        '24/7 monitoring, patching, and incident orchestration',
                        'Backup, patching, and DR orchestration',
                        'Security, compliance, and governance management',
                        'Well-Architected Framework reviews',
                      ],
                    },
                  ].map((service, i) => (
                    <div
                      key={i}
                      className="service-card group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                    >
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${service.color}-50 group-hover:bg-${service.color}-100 transition-colors`}>
                        <service.icon size={32} className={`text-${service.color}-600`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* BUSINESS BENEFITS */}
            <section className="py-20 lg:py-28 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
                  Business Benefits Delivered
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  {[
                    'Lower TCO with flexible licensing and optimized resources',
                    'Increased agility through automation and DevOps',
                    'Enhanced application performance and scalability',
                    'Strengthened security and compliance posture',
                    'Full support for hybrid or cloud-native architectures',
                  ].map((benefit, i) => (
                    <div
                      key={i}
                      className="benefit-card group bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex items-start gap-4"
                    >
                      <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <p className="text-lg font-medium text-gray-800">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div data-scroll-section>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

