import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

export function Navigation({ isScrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Special case for top of page
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = isScrolled ? 64 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      setActiveSection(href.substring(1));
    }
  };

  const handleHireClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = isScrolled ? 64 : 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
            : 'bg-white/80 backdrop-blur-md border-b border-transparent'
        }`}
        style={{ 
          height: isScrolled ? '72px' : '88px',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo with Accent */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={`relative transition-all duration-300 hover:text-teal-600 group ${
                isScrolled ? 'text-base' : 'text-lg'
              }`}
              style={{ 
                fontWeight: 700,
                letterSpacing: '0.08em',
              }}
            >
              {/* Left Accent Bar */}
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-teal-600 transition-all duration-300 group-hover:h-full"
                style={{ 
                  height: '60%',
                  borderRadius: '2px',
                  marginLeft: '-12px'
                }}
              ></div>
              <span className="relative">
                SHEHROZ SHAFIQ
                {/* Bottom Accent Underline */}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-400 transition-all duration-300 group-hover:w-full"
                ></span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center" style={{ gap: '8px' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                      isActive 
                        ? 'text-teal-600 bg-teal-50' 
                        : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    {/* Animated Underline */}
                    <span 
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-teal-600 transition-all duration-300 ${
                        isActive ? 'w-6' : 'w-0 group-hover:w-6'
                      }`}
                    ></span>
                  </a>
                );
              })}
              
              {/* Hire Me Button */}
              <button
                onClick={handleHireClick}
                className="ml-4 px-6 py-2.5 bg-teal-600 text-white rounded-full transition-all duration-300 hover:bg-teal-700 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(13, 148, 136, 0.25)',
                }}
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-all active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Slide-out Panel */}
          <div 
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden animate-slideInRight"
            style={{
              borderLeft: '1px solid rgba(209, 213, 219, 0.5)',
            }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div 
                className="flex items-center justify-between px-6 border-b border-gray-200"
                style={{ height: isScrolled ? '72px' : '88px' }}
              >
                <span 
                  className="text-gray-900"
                  style={{ 
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    fontSize: '16px'
                  }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-all active:scale-95"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-1 px-6 py-8 overflow-y-auto">
                <div className="flex flex-col" style={{ gap: '8px' }}>
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-teal-600 bg-teal-50 shadow-sm'
                            : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50 active:scale-98'
                        }`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-6 py-6 border-t border-gray-200">
                <button
                  onClick={handleHireClick}
                  className="w-full px-6 py-3.5 bg-teal-600 text-white rounded-xl transition-all duration-300 hover:bg-teal-700 hover:shadow-xl active:scale-95"
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    boxShadow: '0 4px 16px rgba(13, 148, 136, 0.3)',
                  }}
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideInRight {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }

          .animate-slideInRight {
            animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .active\\:scale-98:active {
            transform: scale(0.98);
          }
        `}
      </style>
    </>
  );
}