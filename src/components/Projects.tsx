import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  role?: string;
  onSelect: (id: number) => void;
}

function ProjectCard({ id, title, description, image, tags, role, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(id)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <ImageWithFallback
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        <button
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-teal-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-500 active:scale-95 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ fontSize: '16px' }}
        >
          View Details
        </button>
      </div>

      <div style={{ padding: '32px 24px' }}>
        {/* Role Badge */}
        {role && (
          <div style={{ marginBottom: '12px' }}>
            <span
              className="inline-block px-3 py-1.5 bg-teal-600 text-white rounded-lg"
              style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.02em' }}
            >
              {role}
            </span>
          </div>
        )}
        
        <h3 
          className="text-gray-900 transition-colors duration-300 hover:text-teal-600" 
          style={{
            fontSize: '20px',
            lineHeight: '1.3',
            fontWeight: 600,
            marginBottom: '12px'
          }}
        >
          {title}
        </h3>
        <p 
          className="text-gray-600" 
          style={{
            fontSize: '15px',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}
        >
          {description}
        </p>
        <div className="flex flex-wrap" style={{ gap: '8px' }}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-teal-50 text-teal-600 rounded-full transition-all duration-300 hover:bg-teal-100 hover:scale-105"
              style={{ fontSize: '13px', fontWeight: 500 }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectsProps {
  onProjectSelect: (projectId: number) => void;
}

export function Projects({ onProjectSelect }: ProjectsProps) {
  // TODO: Replace all project data with real projects
  const projects = [
    {
      id: 1,
      title: 'ScholarIQ', // REAL PROJECT - Do not change
      description: 'Full-stack scholarship finder platform for students studying abroad', // REAL PROJECT - Do not change
      image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3MjQ4NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', // TODO: Replace with real ScholarIQ screenshot
      tags: ['React', 'Node.js', 'Firebase'], // REAL PROJECT - Do not change
      role: 'Full-Stack (Frontend + Backend + DB)', // REAL PROJECT - Do not change
    },
    {
      id: 2,
      title: 'Fitness Tracker Mobile App', // TODO: Real project title
      description: 'Cross-platform fitness tracking with workout plans', // TODO: Real project description
      image: 'https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NzE2NDYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', // TODO: Real project screenshot
      tags: ['Flutter', 'Firebase', 'API'], // TODO: Real tech stack
      role: 'Full-Stack (Mobile + Backend)', // TODO: Real role
    },
    {
      id: 3,
      title: 'Restaurant Booking Platform', // TODO: Real project title
      description: 'Responsive web app for table reservations', // TODO: Real project description
      image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2NzE4OTcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', // TODO: Real project screenshot
      tags: ['React', 'Express', 'PostgreSQL'], // TODO: Real tech stack
      role: 'Full-Stack (Frontend + Backend)', // TODO: Real role
    },
    {
      id: 4,
      title: 'Task Management App', // TODO: Real project title
      description: 'Mobile-first productivity app for teams', // TODO: Real project description
      image: 'https://images.unsplash.com/photo-1640694939366-7725614435ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY3MjQ4NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', // TODO: Real project screenshot
      tags: ['React Native', 'Firebase', 'REST API'], // TODO: Real tech stack
      role: 'Full-Stack (Mobile + Backend)', // TODO: Real role
    },
    {
      id: 5,
      title: 'Portfolio Website Generator', // TODO: Real project title
      description: 'Tool to create custom portfolio sites from templates', // TODO: Real project description
      image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3MjQ4NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', // TODO: Real project screenshot
      tags: ['React', 'Vite', 'Node.js'], // TODO: Real tech stack
      role: 'Full-Stack (FYP)', // TODO: Real role
    },
    {
      id: 6,
      title: 'Real Estate Listing App', // TODO: Real project title
      description: 'Mobile app for browsing and saving property listings', // TODO: Real project description
      image: 'https://images.unsplash.com/photo-1640694939366-7725614435ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY3MjQ4NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', // TODO: Real project screenshot
      tags: ['Flutter', 'Firebase', 'Maps API'], // TODO: Real tech stack
      role: 'Frontend Only', // TODO: Real role
    },
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-gray-50">
      {/* Subtle Line Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 148, 136, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      ></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="mb-4 text-gray-900">Selected Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real client work, final year project, and personal builds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onSelect={onProjectSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}