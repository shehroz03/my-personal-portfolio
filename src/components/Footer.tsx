import { Mail, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Mail size={20} />, href: 'mailto:shehrozshafiq03@gmail.com', label: 'Email' }, // REAL PRODUCTION EMAIL - Do not change
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/chshehrozshafiq/', label: 'LinkedIn' }, // REAL PRODUCTION LINK - Do not change
    { icon: <Github size={20} />, href: 'https://github.com/shehroz03', label: 'GitHub' }, // REAL PRODUCTION LINK - Do not change
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white" style={{ padding: '64px 0 32px' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 
              className="tracking-wider mb-4"
              style={{
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '0.1em'
              }}
            >
              SHEHROZ SHAFIQ
            </h3>
            <p 
              className="text-gray-400"
              style={{ fontSize: '15px', lineHeight: '1.6' }}
            >
              Full-Stack & Mobile App Developer specializing in React, Node.js, React Native, and Flutter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-white mb-4"
              style={{ fontSize: '16px', fontWeight: 600 }}
            >
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                    style={{ fontSize: '14px' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 
              className="text-white mb-4"
              style={{ fontSize: '16px', fontWeight: 600 }}
            >
              Connect
            </h4>
            <div className="flex" style={{ gap: '12px' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg hover:bg-teal-600 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p 
            className="text-gray-500"
            style={{ fontSize: '14px' }}
          >
            © {currentYear} Shehroz Shafiq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}