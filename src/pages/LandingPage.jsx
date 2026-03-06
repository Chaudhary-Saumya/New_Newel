import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const pageRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    document.title = 'NEWEL TECHNOLOGIES PVT LTD';
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
      // Premium section reveal animations
      gsap.utils.toArray('section').forEach((section) => {
        // Staggered children animation
        const children = section.querySelectorAll('.reveal-item');
        
        if (children.length > 0) {
          gsap.fromTo(children, 
            { opacity: 0, y: 80, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 75%',
              },
            }
          );
        } else {
          gsap.fromTo(section,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
              },
            }
          );
        }
      });

      // Parallax background effects
      gsap.utils.toArray('.parallax-bg').forEach((bg) => {
        gsap.to(bg, {
          yPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: bg.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Horizontal scroll sections
      gsap.utils.toArray('.horizontal-scroll').forEach((section) => {
        const container = section.querySelector('.horizontal-container');
        if (container) {
          gsap.to(container, {
            x: () => -(container.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => `+=${container.scrollWidth}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });
        }
      });

      // Text reveal animations
      gsap.utils.toArray('.text-reveal').forEach((text) => {
        gsap.fromTo(text,
          { y: 50, opacity: 0, rotateX: -20 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
            },
          }
        );
      });

      // Image scale reveal
      gsap.utils.toArray('.image-reveal').forEach((img) => {
        gsap.fromTo(img,
          { scale: 1.3, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 80%',
            },
          }
        );
      });

      // Custom progress indicator
      const progressBar = document.querySelector('.scroll-progress');
      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        });
      }
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
    <div ref={pageRef} className="min-h-screen bg-gray-50">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100]">
        <div className="scroll-progress h-full bg-gradient-to-r from-blue-600 to-indigo-600 origin-left scale-x-0" />
      </div>

      <div ref={scrollContainerRef} data-scroll-container>
        <Navbar />
        <div data-scroll-section>
          <Hero />
        </div>
        <div data-scroll-section>
          <TrustedBy />
        </div>
        <div data-scroll-section>
          <Services />
        </div>
        <div data-scroll-section>
          <Industries />
        </div>
        <div data-scroll-section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

