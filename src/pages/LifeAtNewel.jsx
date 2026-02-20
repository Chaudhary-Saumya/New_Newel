// components/LifeAtNewel.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// ✅ Import your images here
// import L1 from "../assets/L1.jpg";
// import L2 from "../assets/L2.jpg";
// import L3 from "../assets/L3.jpg";
// import L4 from "../assets/L4.jpg";
// import L5 from "../assets/L5.jpg";
// import L6 from "../assets/L6.jpg";
// import L7 from "../assets/L7.jpg";
// import L8 from "../assets/L8.jpg";

gsap.registerPlugin(ScrollTrigger);

// You will replace these descriptions with real ones
// Photos are now supported
const lifeMoments = [
  {
    title: "Diwali Celebration",
    description: "Lights, sweets, rangoli, and team bonding under festive vibes.",

  },
  {
    title: "Independence Day",
    description: "Flag hoisting, patriotic songs, and unity in celebration.",
   
  },
  {
    title: "Birthday Surprises",
    description: "Cake cutting, wishes, and making every birthday memorable.",
    
  },
  {
    title: "Virtual Events",
    description: "Online games, fun sessions, and keeping remote teams connected.",
  
  },
  {
    title: "Tech Meetups & Collaborations",
    description: "Knowledge sharing with partners like Outsystems & NuVama.",

  },
  {
    title: "Office Parties",
    description: "Festive gatherings, music, and team energy.",

  },
  {
    title: "Republic Day",
    description: "Honoring the nation with pride and team spirit.",
    
  },
  {
    title: "Team Outings",
    description: "Fun trips, relaxation, and lasting memories.",

  },
];

export default function LifeAtNewel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  // Auto-play + manual navigation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % lifeMoments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Fade-in stagger for cards
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Simple hover lift
      cardRefs.current.forEach((card) => {
        if (!card) return;

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.04,
            y: -8,
            boxShadow: '0 25px 50px -12px rgba(80, 153, 255, 0.15)',
            duration: 0.4,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            duration: 0.5,
            ease: 'power2.out',
          });
        });
      });

    });

    return () => ctx.revert();
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
    <Navbar/>
      <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            Life @ Newel Technologies
          </h1>

          <p className="mt-5 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Where passion meets purpose, hard work meets celebration, and every day builds stronger bonds.
          </p>

          {/* Blue accent line */}
          <div className="mt-6 h-1 w-32 bg-gradient-to-r from-[#5099ff] to-blue-600 mx-auto rounded-full" />

        </div>

        {/* Carousel Container */}
        <div ref={carouselRef} className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >

            {lifeMoments.map((moment, index) => (

              <div
                key={moment.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className="min-w-full px-4 sm:px-8"
              >

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">

                  {/* ✅ Real Image Added */}
                  <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">

                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-10">

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {moment.title}
                    </h3>

                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                      {moment.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">

            {lifeMoments.map((_, index) => (

              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-[#5099ff] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />

            ))}

          </div>

        </div>

        {/* Closing */}
        <div className="text-center mt-16 lg:mt-24">

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Work Hard, Celebrate Together
          </h2>

          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Newel, we believe great work happens when people feel valued, connected, and genuinely happy.
          </p>

        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
}
