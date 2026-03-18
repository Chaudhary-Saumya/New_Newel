// src/pages/services/AWS.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Cloud, Database, ShieldCheck, Zap, Code, BarChart3, Settings, ArrowRight, CheckCircle, DollarSign } from 'lucide-react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

export default function AWS() {
  const pageRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'AWS Services | Newel';
    
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
      gsap.to('.aws-illustration', {
        y: -15,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Section titles fade + slide
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

      // Cards stagger entrance + hover lift
      gsap.utils.toArray('.service-card').forEach((card, i) => {
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

      // Cycle diagram animation
      gsap.fromTo(
        '.cycle-ring',
        { rotation: -90, opacity: 0 },
        {
          rotation: 0,
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.cycle', start: 'top 70%' },
        }
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
          <div ref={containerRef} className="bg-white">
            {/* HERO */}
            <section className="hero relative pt-20 pb-24 md:pt-32 md:pb-40 px-6 lg:px-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left - Text */}
                  <div>
                    <h1 className="text-5xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-none mb-10">
                      Unlock the Power of
                      <span className="block text-indigo-600 mt-2">AWS</span>
                      <span className="block text-4xl md:text-5xl mt-2">with Us</span>
                    </h1>

                    <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                      <p>
                        As an AWS Partner, we are committed to helping businesses scale, innovate, and achieve their goals with Amazon Web Services (AWS).
                      </p>
                      <p>
                        Whether you are looking for cloud migration, security, application development, App Modernization, or Cost Optimization, our team of experts is here to help you leverage the best of AWS.
                      </p>
                    </div>

                    <div className="mt-12">
                      <Link to="/contact" className="group px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-xl shadow-xl shadow-indigo-200/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-300/60 hover:-translate-y-1 flex items-center gap-3 w-fit">
                        Contact Us
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right - Illustration */}
                  <div className="relative hidden lg:block">
                    <div className="aws-illustration relative max-w-lg mx-auto">
                      <img
                        src="https://img.freepik.com/free-vector/big-data-center-server-room-rack-engineering-process-teamwork-computer-technology-cloud-storage_39422-1032.jpg?t=st=1773755547~exp=1773759147~hmac=3e054cc641ea59b28b9aeb16db72d81a5b4426b72a7bd92d8836b0a495f36461&w=1480"
                        alt="AWS Cloud Illustration"
                        className="w-full h-auto object-cover rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* WHY CHOOSE NEWEL */}
            <section className="py-20 lg:py-28 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <h2 className="section-title text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900">
                  Why Choose Newel Technologies?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="service-card bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 shadow-lg border border-indigo-100 hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6">
                      <ShieldCheck className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Expertise in AWS Solutions</h3>
                    <p className="text-gray-700">
                      As an AWS Partner, we specialize in implementing, managing, and optimizing AWS services for businesses of all sizes. Our team holds AWS certifications and has extensive experience in a variety of AWS services.
                    </p>
                  </div>

                  <div className="service-card bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">End-to-End AWS Services</h3>
                    <p className="text-gray-700">
                      We offer comprehensive AWS solutions, from initial consultation and architecture design to full implementation and ongoing support. Our services include:
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" /> Cloud Migration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" /> DevOps
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" /> Data Analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" /> Machine Learning
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" /> Security and Compliance
                      </li>
                    </ul>
                  </div>

                  <div className="service-card bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-8 shadow-lg border border-cyan-100 hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center mb-6">
                      <Settings className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Tailored Cloud Solutions</h3>
                    <p className="text-gray-700">
                      Every business is unique. We work with you to design custom cloud solutions on AWS that meet your specific needs, whether you are focused on scalability, cost-efficiency, or security.
                    </p>
                  </div>

                  <div className="service-card bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 shadow-lg border border-emerald-100 hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                      <DollarSign className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Cost Optimization</h3>
                    <p className="text-gray-700">
                      AWS provides a pay-as-you-go pricing model, and we help you optimize your cloud spend to make sure you are getting the most value from your investment. Our experts will analyze your current cloud architecture to help you cut costs while improving performance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* AWS SERVICES CYCLE */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-indigo-50/30">
              <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
                <h2 className="section-title text-4xl md:text-5xl lg:text-5xl font-bold mb-16 tracking-tight text-gray-900">
                  AWS Services Cycle
                </h2>

                <div className="cycle relative max-w-4xl mx-auto">
                  {/* Central Circle */}
                  <div className="relative w-64 h-64 mx-auto mb-12">
                    <div className="cycle-ring absolute inset-0 rounded-full border-8 border-indigo-200/50" />
                    <div className="absolute inset-4 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-indigo-700">AWS Services</h3>
                        <p className="text-sm text-gray-600">End-to-End Excellence</p>
                      </div>
                    </div>
                  </div>

                  {/* Surrounding Points */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                      { title: 'Expertise in AWS Solutions', icon: ShieldCheck, color: 'indigo' },
                      { title: 'App Modernization', icon: Code, color: 'blue' },
                      { title: 'Cost Optimization', icon: DollarSign, color: 'emerald' },
                      { title: 'Tailored Cloud Solutions', icon: Settings, color: 'cyan' },
                    ].map((point, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-full bg-${point.color}-100 flex items-center justify-center mb-4 shadow-md`}>
                          <point.icon className={`w-8 h-8 text-${point.color}-600`} />
                        </div>
                        <p className="font-medium text-gray-800">{point.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* OUR AWS SERVICES GRID */}
            <section className="py-20 lg:py-28 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <h2 className="section-title text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900">
                  Our AWS Services
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: 'Compute', items: ['EC2', 'Lambda', 'Lightsail', 'Elastic Container Registry', 'Elastic Load Balancing'], icon: Zap, color: 'indigo' },
                    { title: 'Developer Tools', items: ['CodeCommit', 'CodeDeploy', 'CodeBuild'], icon: Code, color: 'blue' },
                    { title: 'Database', items: ['RDS', 'DynamoDB'], icon: Database, color: 'emerald' },
                    { title: 'Analytics & AI', items: ['Bedrock', 'SageMaker', 'Glue'], icon: BarChart3, color: 'purple' },
                    { title: 'Security & Identity', items: ['IAM', 'Shield', 'WAF'], icon: ShieldCheck, color: 'red' },
                    { title: 'Storage', items: ['S3', 'EBS'], icon: Database, color: 'cyan' },
                    { title: 'Networking', items: ['VPC', 'CloudFront', 'Direct Connect'], icon: Code, color: 'amber' },
                    { title: 'Monitoring', items: ['CloudWatch', 'CloudTrail', 'Grafana'], icon: BarChart3, color: 'teal' },
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
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
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

