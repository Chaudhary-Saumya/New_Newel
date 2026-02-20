// components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.3 }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Our Core Team', href: '/OurTeam' },
    { name: 'Life@Newel', href: '/LifeAtNewel' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="Newel Technologies"
            className="h-9 sm:h-11 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`px-3 py-2.5 text-sm xl:text-base font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-blue-600'
                    : 'text-gray-800 hover:text-blue-600'
                } relative group`}
              >
                {link.name}
                <span className="absolute bottom-1.5 left-3 right-3 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className={`hidden lg:block px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
            isScrolled
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg hover:shadow-blue-200'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg hover:shadow-blue-200'
          }`}
        >
          Get a Quote
        </button>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-7 h-6 relative">
            <span
              className={`absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'top-1/2 left-0 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'top-1/2 left-0'
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'top-1/2 left-0 -rotate-45' : 'bottom-0'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isMobileMenuOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
        } bg-white shadow-lg`}
      >
        <div className="px-5 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-5 py-3.5 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            className="mt-4 w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;