// components/LifeAtNewel.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "Diwali Celebration",
    cover: 'https://neweltechnologies.com/LifeAtNewel/Diwali/1.jpeg',
    images: [
      'https://neweltechnologies.com/LifeAtNewel/Diwali/1.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Diwali/2.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Diwali/3.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Diwali/6.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Diwali/9.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Diwali/13.jpeg',
    ],
  },
  {
    title: "Independence Day Celebration",
    cover: 'https://neweltechnologies.com/LifeAtNewel/15Aug2022/6.jpeg',
    images: [
      'https://neweltechnologies.com/LifeAtNewel/15Aug2022/1.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/15Aug2022/3.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/15Aug2022/4.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/15Aug2022/5.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/15Aug2022/6.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/15Aug2022/9.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/15Aug2022/10.jpeg',
    ],
  },
  {
    title: "Birthday Celebration",
    cover: 'https://neweltechnologies.com/LifeAtNewel/Birthday/WhatsAppImage2022-08-17at10.52.53AM(1).jpeg',
    images: [
      'https://neweltechnologies.com/LifeAtNewel/Birthday/WhatsAppImage2022-08-17at10.52.53AM(1).jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Birthday/WhatsAppImage2022-08-17at10.52.53AM(2).jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Birthday/WhatsAppImage2022-08-17at10.52.53AM(3).jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Birthday/WhatsAppImage2022-08-17at10.52.53AM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Birthday/WhatsAppImage2022-08-17at10.52.54AM(1).jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Birthday/WhatsAppImage2022-08-17at10.52.54AM(2).jpeg',
    ],
  },
  {
    title: "Virtual Event",
    cover: 'https://neweltechnologies.com/LifeAtNewel/VirtualEvent/WhatsAppImage2022-08-17at10.53.32AM(2).jpeg',
    images: [
      'https://neweltechnologies.com/LifeAtNewel/VirtualEvent/WhatsAppImage2022-08-17at10.53.30AM(1).jpeg',
      'https://neweltechnologies.com/LifeAtNewel/VirtualEvent/WhatsAppImage2022-08-17at10.53.30AM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/VirtualEvent/WhatsAppImage2022-08-17at10.53.31AM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/VirtualEvent/WhatsAppImage2022-08-17at10.53.32AM(2).jpeg',
      'https://neweltechnologies.com/LifeAtNewel/VirtualEvent/WhatsAppImage2022-08-17at10.53.32AM.jpeg',
    ],
  },
  {
    title: "Outsystem Event Held In MCA With Nuvama Tech Team",
    cover: 'https://neweltechnologies.com/LifeAtNewel/EVENTHELDINMCAWITHNUVAMTECHTEAM/7.jpeg',
    images: [
      'https://neweltechnologies.com/LifeAtNewel/EVENTHELDINMCAWITHNUVAMTECHTEAM/2.png',
      'https://neweltechnologies.com/LifeAtNewel/EVENTHELDINMCAWITHNUVAMTECHTEAM/1.png',
      'https://neweltechnologies.com/LifeAtNewel/EVENTHELDINMCAWITHNUVAMTECHTEAM/3.png',
      'https://neweltechnologies.com/LifeAtNewel/EVENTHELDINMCAWITHNUVAMTECHTEAM/5.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/EVENTHELDINMCAWITHNUVAMTECHTEAM/6.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/EVENTHELDINMCAWITHNUVAMTECHTEAM/7.jpeg',
    ],
  },
  {
    title: "Party Time",
    cover: 'https://neweltechnologies.com/LifeAtNewel/PARTYTIME/WhatsApp%20Image%202023-01-21%20at%209.44.12%20AM.jpeg',
    images: [
      'https://neweltechnologies.com/LifeAtNewel/PARTYTIME/WhatsApp%20Image%202023-01-21%20at%209.44.12%20AM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/PARTYTIME/WhatsApp%20Image%202023-01-21%20at%209.44.13%20AM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/PARTYTIME/WhatsApp%20Image%202023-01-21%20at%209.44.14%20AM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/PARTYTIME/WhatsApp%20Image%202023-01-21%20at%2012.10.10%20PM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/PARTYTIME/WhatsApp%20Image%202023-01-21%20at%2012.10.09%20PM%20(1).jpeg',
      'https://neweltechnologies.com/LifeAtNewel/PARTYTIME/WhatsApp%20Image%202023-01-21%20at%2012.10.09%20PM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/PARTYTIME/WhatsApp%20Image%202023-01-21%20at%2012.10.09%20PM%20(2).jpeg',
    ],
  },
  {
    title: "Republic Day Celebration",
    cover: 'https://neweltechnologies.com/LifeAtNewel/REPUBLICDAY2023/WhatsApp%20Image%202023-01-25%20at%205.48.39%20PM.jpeg',
    images: [
      'https://neweltechnologies.com/LifeAtNewel/REPUBLICDAY2023/WhatsApp%20Image%202023-01-25%20at%205.48.39%20PM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/REPUBLICDAY2023/WhatsApp%20Image%202023-01-25%20at%205.48.37%20PM%20(1).jpeg',
      'https://neweltechnologies.com/LifeAtNewel/REPUBLICDAY2023/WhatsApp%20Image%202023-01-25%20at%205.48.38%20PM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/REPUBLICDAY2023/WhatsApp%20Image%202023-01-25%20at%205.48.40%20PM%20(1).jpeg',
      'https://neweltechnologies.com/LifeAtNewel/REPUBLICDAY2023/WhatsApp%20Image%202023-01-25%20at%205.48.40%20PM.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/REPUBLICDAY2023/WhatsApp%20Image%202023-01-25%20at%205.48.39%20PM.jpeg',
    ],
  },
  {
    title: "Outing Time",
    cover: 'https://neweltechnologies.com/LifeAtNewel/Outing3/1.jpeg',
    images: [
      'https://neweltechnologies.com/LifeAtNewel/Outing3/1.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Outing3/2.JPG',
      'https://neweltechnologies.com/LifeAtNewel/Outing3/4.jpeg',
      'https://neweltechnologies.com/LifeAtNewel/Outing3/5.JPG',
      'https://neweltechnologies.com/LifeAtNewel/Outing3/6.JPG',
      'https://neweltechnologies.com/LifeAtNewel/Outing3/7.JPG',
      'https://neweltechnologies.com/LifeAtNewel/Outing3/8.JPG',
      'https://neweltechnologies.com/LifeAtNewel/Outing3/9.JPG',
      'https://neweltechnologies.com/LifeAtNewel/Outing3/12.JPG',
      'https://neweltechnologies.com/LifeAtNewel/Outing3/13.jpeg',
    ],
  }
];

export default function LifeAtNewel() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pageRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    document.title = 'Life At Newel | Newel';
    
    // Reset scroll to top on page load
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
      // Cards stagger entrance
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 80, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Hover zoom + overlay
      cardRefs.current.forEach((card) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card.querySelector('img'), {
            scale: 1.12,
            duration: 0.7,
            ease: "power2.out",
          });
          gsap.to(card.querySelector('.overlay'), {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card.querySelector('img'), {
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          });
          gsap.to(card.querySelector('.overlay'), {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
          });
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length);
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <div ref={scrollContainerRef} data-scroll-container>
        <div data-scroll-section>
          <Navbar />
          <section ref={sectionRef} className="relative bg-white py-20 lg:py-32 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:60px_60px] opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
              {/* Hero */}
              <div className="text-center mb-16 lg:mb-24">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                  Life @ Newel Technologies
                </h1>
                <p className="mt-6 text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                  Where work meets joy, growth meets fun, and every moment builds stronger bonds.
                </p>
                <div className="mt-8 h-1 w-32 bg-gradient-to-r from-[#5099ff] to-blue-600 mx-auto rounded-full" />
              </div>

              {/* Horizontal Snap Carousel */}
              <div className="relative">
                <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-6 lg:gap-10 pb-8">
                  {events.map((event, index) => (
                    <div
                      key={event.title}
                      ref={(el) => (cardRefs.current[index] = el)}
                      className="group relative w-[300px] sm:w-[360px] lg:w-[420px] flex-shrink-0 snap-center rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 hover:shadow-2xl hover:shadow-[#5099ff]/30 transition-all duration-500"
                      onClick={() => {
                        setSelectedEvent(event);
                        setCurrentImageIndex(0);
                      }}
                    >
                      <div className="relative h-[380px] lg:h-[480px] overflow-hidden">
                        <img
                          src={event.cover}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white z-10">
                        <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm lg:text-base opacity-90">
                          Click to view gallery →
                        </p>
                      </div>

                      <div className="absolute bottom-6 right-6">
                        <button className="bg-[#5099ff] text-white px-6 py-2 rounded-full font-medium text-sm lg:text-base shadow-lg hover:bg-blue-600 transition-colors">
                          View Gallery
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white transition-colors hidden lg:block"
                  onClick={() => {
                    const container = document.querySelector('.overflow-x-auto');
                    container.scrollBy({ left: -420, behavior: 'smooth' });
                  }}
                >
                  ←
                </button>

                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white transition-colors hidden lg:block"
                  onClick={() => {
                    const container = document.querySelector('.overflow-x-auto');
                    container.scrollBy({ left: 420, behavior: 'smooth' });
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </section>
          <div data-scroll-section>
            <Footer />
          </div>
        </div>
      </div>

      {/* Full-screen Gallery Modal - Outside scroll container */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white text-5xl hover:text-[#5099ff] transition-colors z-50"
            onClick={() => setSelectedEvent(null)}
          >
            ×
          </button>

          <div className="relative w-full max-w-6xl h-[80vh] px-4 flex items-center">
            <button
              className="absolute left-4 lg:left-8 text-white text-6xl hover:text-[#5099ff] transition-colors z-50"
              onClick={prevImage}
            >
              ‹
            </button>

            <img
              src={selectedEvent.images[currentImageIndex]}
              alt={`${selectedEvent.title} - ${currentImageIndex + 1}`}
              className="w-full h-full object-contain rounded-2xl shadow-2xl transition-all duration-500"
            />

            <button
              className="absolute right-4 lg:right-8 text-white text-6xl hover:text-[#5099ff] transition-colors z-50"
              onClick={nextImage}
            >
              ›
            </button>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-8 py-3 rounded-full text-lg">
              {currentImageIndex + 1} / {selectedEvent.images.length}
            </p>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-black/60 px-6 py-3 rounded-full overflow-x-auto max-w-full">
            {selectedEvent.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  idx === currentImageIndex
                    ? 'border-[#5099ff] scale-110 shadow-lg'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

