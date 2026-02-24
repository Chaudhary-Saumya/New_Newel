// components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
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
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    {
      name: 'Services',
      to: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Staffing and recruiting', to: '/services/staff-augmentation' },
        { name: 'Application Development', to: '/services/ApplicationDevelopment' },
        { name: 'Mobile Application', to: '/services/MobileApplication' },
        { name: 'Data Analytics', to: '/services/DataAnalytics' },
        { name: 'Cloud Services', to: '/services/CloudServices' },
        { name: 'Application Re-Engineering', to: '/services/ApplicationRe-Engineering' },
        { name: 'Quality Assurance', to: '/services/QualityAssurance' },
        { name: 'Robotic Process Automation', to: '/services/RoboticProcessAutomation' },
        { name: 'Outsystems', to: '/services/Outsystems' },
        { name: 'DOOH', to: '/services/DOOH' },
      ],
    },
    {
      name: 'Industries',
      to: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'BFSI', to: '/industries/bfsi' },
        { name: 'Retail', to: '/industries/retail' },
        { name: 'EPC (Engineering, Procurement & Construction)', to: '/industries/epc' },
        { name: 'Oil & Gas', to: '/industries/oil-gas' },
        { name: 'Infrastructure', to: '/industries/infrastructure' },
        { name: 'Engineering', to: '/industries/engineering' },
        { name: 'Heavy Equipment Manufacturing', to: '/industries/Manufacturing' },
        { name: 'OEM', to: '/industries/OEM' },
        { name: 'Chemical', to: '/industries/Chemical' },
        { name: 'Petrochemical', to: '/industries/Petrochemical' },
        { name: 'Healthcare', to: '/industries/Healthcare' },
        { name: 'Building materials', to: '/industries/BuildingMaterials' },
        { name: 'Metal & Minerals', to: '/industries/MetalMinerals' },
        { name: 'Tele communication', to: '/industries/TeleCommunication' },
        { name: 'Defence', to: '/industries/Defence' },
        { name: 'Fertilizer', to: '/industries/Fertilizer' },
        { name: 'Power', to: '/industries/Power' },
        { name: 'Renewable Energy', to: '/industries/RenewableEnergy' },
        { name: 'IT', to: '/industries/IT' },
        { name: 'Food and beverage', to: '/industries/FoodBeverage' },
        { name: 'Semiconductor', to: '/industries/Semiconductor' },
      ],
    },
    { name: 'Our Core Team', to: '/OurTeam' },
    { name: 'Life@Newel', to: '/LifeAtNewel' },
    { name: 'Careers', to: '/careers' },
    { name: 'Contact', to: '/contact' },
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
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Newel Technologies"
            className="h-9 sm:h-13 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              {link.hasDropdown ? (
                <>
                  <Link
                    to={link.to}
                    className={`flex items-center gap-1.5 px-3 py-2.5 text-sm xl:text-base font-medium transition-colors duration-200 ${
                      isScrolled ? 'text-gray-800' : 'text-gray-800'
                    } group-hover:text-blue-600`}
                  >
                    {link.name}
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    />
                  </Link>

                  <div
                    className={`
                      absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100/80
                      opacity-0 scale-95 translate-y-2 pointer-events-none transition-all duration-300
                      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                    `}
                  >
                    <div className="max-h-80 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-50">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors whitespace-nowrap"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.to}
                  className={`px-3 py-2.5 text-sm xl:text-base font-medium transition-colors duration-200 ${
                    isScrolled ? 'text-gray-800' : 'text-gray-800'
                  } hover:text-blue-600 relative group`}
                >
                  {link.name}
                  <span className="absolute bottom-1.5 left-3 right-3 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className={`hidden lg:block px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
            isScrolled
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg hover:shadow-blue-200'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg hover:shadow-blue-200'
          }`}
        >
          Get Started
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-7 h-6 relative">
            <span className={`absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-1/2 left-0 rotate-45' : 'top-0'}`} />
            <span className={`absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'top-1/2 left-0'}`} />
            <span className={`absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'top-1/2 left-0 -rotate-45' : 'bottom-0'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white shadow-lg`}
      >
        <div className="px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.hasDropdown ? (
                <details className="group">
                  <summary className="flex justify-between items-center px-5 py-3.5 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors cursor-pointer">
                    {link.name}
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-6 pt-1 pb-3">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  to={link.to}
                  className="block px-5 py-3.5 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="mt-4 w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;