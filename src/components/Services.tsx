import { Monitor, Smartphone, Code } from 'lucide-react';
import { useState } from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Button } from './ui/Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group"
      style={{ padding: '40px 32px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`inline-flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl transition-all duration-500 ${
          isHovered ? 'scale-125 rotate-12 shadow-lg' : 'scale-100 rotate-0'
        }`}
        style={{ width: '72px', height: '72px', marginBottom: '24px' }}
      >
        <div className={`text-teal-600 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
          {icon}
        </div>
      </div>
      
      <h3 
        className={`text-gray-900 transition-colors duration-300 ${isHovered ? 'text-teal-600' : ''}`}
        style={{
          fontSize: '22px',
          lineHeight: '1.3',
          fontWeight: 600,
          marginBottom: '16px'
        }}
      >
        {title}
      </h3>
      
      <p 
        className="text-gray-600"
        style={{
          fontSize: '15px',
          lineHeight: '1.7',
          marginBottom: '32px',
          minHeight: '100px'
        }}
      >
        {description}
      </p>
      
      <Button
        onClick={handleScroll}
        variant="primary"
        className={`w-full transition-all duration-300 ${
          isHovered ? 'shadow-xl shadow-teal-600/30 scale-105' : ''
        }`}
      >
        Request this service
      </Button>
    </div>
  );
}

export function Services() {
  const services = [
    {
      icon: <Monitor size={36} strokeWidth={2} />,
      title: 'Full-Stack React Web Apps',
      description:
        'Design and build complete web apps with React frontends, Node.js/Express APIs, and database integration (MongoDB, Firebase). Includes Firebase/Cloudinary integration for auth and media handling. From authentication to deployment.',
    },
    {
      icon: <Smartphone size={36} strokeWidth={2} />,
      title: 'Mobile App UI in React Native / Flutter',
      description:
        'Cross-platform mobile UIs connected to real APIs and backend services. Beautiful native apps for iOS and Android with complete data integration.',
    },
    {
      icon: <Code size={36} strokeWidth={2} />,
      title: 'Frontend-only or API-Ready UI',
      description:
        'Clean, maintainable frontends that plug into existing or future backends. Pixel-perfect implementation with proper API integration setup.',
    },
  ];

  return (
    <Section id="services" background="gray">
      <SectionHeader
        title="Services"
        subtitle="Professional full-stack development services tailored to your needs"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px' }}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
}