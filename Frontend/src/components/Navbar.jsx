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
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.3 }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        {
          name: 'Staffing & Recruitment',
          isStaffing: true,
          subItems: [
            { name: 'IT Staff Augmentation', to: '/services/ITStaffAugmentation' },
            { name: 'Third Party Contracting', to: '/services/ThirdPartyContracting' },
          ],
        },
        {
          name: 'Application Development',
          isAppDev: true,
          subItems: [
            { name: 'Application Development', to: '/services/ApplicationDevelopment' },
            { name: 'Mobile Application', to: '/services/MobileApplication' },
            { name: 'Application Re-Engineering', to: '/services/ApplicationRe-Engineering' },
          ],
        },
        {
          name: 'Cloud Services',
          isCloud: true,
          subItems: [
            { name: 'AWS', to: '/services/AWS' },
            { name: 'Microsoft on AWS', to: '/services/MicrosoftOnAWS' },
          ],
        },
        {
          name: 'Analytics & Quality',
          isAnalyticsQuality: true,
          subItems: [
            { name: 'Data Analytics', to: '/services/DataAnalytics' },
            { name: 'Quality Assurance', to: '/services/QualityAssurance' },
            { name: 'Robotic Process Automation', to: '/services/RoboticProcessAutomation' },
            { name: 'Outsystems', to: '/services/Outsystems' },
            { name: 'DOOH', to: '/services/DOOH' },
          ],
        },
      ],
    },
    {
      name: 'Industries',
      to: '/industries',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Engineering & Construction',
          isEngineering: true,
          subItems: [
            { name: 'EPC (Engineering, Procurement & Construction)', to: '/industries/epc' },
            { name: 'Engineering', to: '/industries/engineering' },
            { name: 'Heavy Equipment Manufacturing', to: '/industries/Manufacturing' },
            { name: 'OEM', to: '/industries/OEM' },
            { name: 'Building Materials', to: '/industries/BuildingMaterials' },
          ],
        },
        {
          name: 'Oil, Gas & Chemicals',
          isOilGasChem: true,
          subItems: [
            { name: 'Oil & Gas', to: '/industries/oil-gas' },
            { name: 'Chemical', to: '/industries/Chemical' },
            { name: 'Petrochemical', to: '/industries/Petrochemical' },
          ],
        },
        {
          name: 'Financial & Retail',
          isFinancialRetail: true,
          subItems: [
            { name: 'BFSI', to: '/industries/bfsi' },
            { name: 'Retail', to: '/industries/retail' },
          ],
        },
        {
          name: 'Infrastructure & Healthcare',
          isInfraHealth: true,
          subItems: [
            { name: 'Infrastructure', to: '/industries/infrastructure' },
            { name: 'Healthcare', to: '/industries/Healthcare' },
          ],
        },
        {
          name: 'Energy & Resources',
          isEnergyResources: true,
          subItems: [
            { name: 'Metal & Minerals', to: '/industries/MetalMinerals' },
            { name: 'Fertilizer', to: '/industries/Fertilizer' },
            { name: 'Power', to: '/industries/Power' },
            { name: 'Renewable Energy', to: '/industries/RenewableEnergy' },
          ],
        },
        {
          name: 'Technology & Manufacturing',
          isTechMfg: true,
          subItems: [
            { name: 'Telecommunication', to: '/industries/TeleCommunication' },
            { name: 'Defence', to: '/industries/Defence' },
            { name: 'IT', to: '/industries/IT' },
            { name: 'Food and Beverage', to: '/industries/FoodBeverage' },
            { name: 'Semiconductor', to: '/industries/Semiconductor' },
          ],
        },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/80'
          : 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Newel Technologies"
            className="h-9 md:h-12 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1.5 xl:gap-3">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              {link.hasDropdown ? (
                <>
                  <button
                    type="button"
                    className={`flex items-center gap-1.5 px-4 py-3 text-sm xl:text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Mega Dropdown – light theme */}
                  <div
                    className={`
                      absolute top-full left-1/2 -translate-x-1/5 w-[min(90vw,920px)]
                      bg-white rounded-2xl border border-gray-200/80 shadow-2xl shadow-gray-200/40
                      opacity-0 scale-95 -translate-y-3 pointer-events-none
                      transition-all duration-300 ease-out
                      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                      overflow-hidden
                      max-h-[85vh]
                    `}
                  >
                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                      {link.dropdownItems
                        .filter((item) =>
                          item.isStaffing ||
                          item.isAppDev ||
                          item.isCloud ||
                          item.isAnalyticsQuality ||
                          item.isEngineering ||
                          item.isOilGasChem ||
                          item.isFinancialRetail ||
                          item.isInfraHealth ||
                          item.isEnergyResources ||
                          item.isTechMfg
                        )
                        .map((item) => (
                          <div key={item.name} className="space-y-3">
                            <h4 className="text-base md:text-lg font-bold text-blue-600 pb-2 border-b border-indigo-100">
                              {item.name}
                            </h4>
                            <div className="space-y-2">
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.to}
                                  className="block text-sm text-gray-700 hover:text-blue-600 hover:translate-x-1.5 transition-all duration-200 font-medium"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.to}
                  className={`px-4 py-3 text-sm xl:text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 relative group`}
                >
                  {link.name}
                  <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className={`hidden lg:flex items-center px-7 py-3 rounded-full font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-200/40`}
        >
          Get Started
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-8 h-7 relative">
            <span
              className={`absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'top-3.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'top-3.5'
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'top-3.5 -rotate-45' : 'bottom-0'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu – light theme */}
      <div
        className={`lg:hidden overflow-y-auto transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-[calc(100vh-4rem)] opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        } absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-xl`}
      >
        <div className="px-5 py-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.hasDropdown ? (
                <details className="group">
                  <summary className="flex justify-between items-center px-5 py-4 text-gray-800 font-semibold hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-colors cursor-pointer">
                    {link.name}
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-6 pt-3 pb-5 space-y-4">
                    {link.dropdownItems.map((item) => (
                      <div key={item.name}>
                        {item.subItems ? (
                          <details className="group/sub mt-1">
                            <summary className="flex justify-between items-center px-5 py-3 text-sm text-gray-700 hover:text-blue-600 transition-colors cursor-pointer bg-gray-50 rounded-lg">
                              {item.name}
                              <ChevronDown className="w-4 h-4 transition-transform group-open/sub:rotate-180" />
                            </summary>
                            <div className="pl-6 pt-2 space-y-2">
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.to}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </details>
                        ) : (
                          <Link
                            to={item.to}
                            className="block px-5 py-3 text-sm text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  to={link.to}
                  className="block px-5 py-4 text-gray-800 font-semibold hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="mt-6 w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all text-center shadow-md"
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