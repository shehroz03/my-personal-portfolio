import { ImageWithFallback } from './figma/ImageWithFallback';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';

export function About() {
  const timeline = [
    {
      icon: <GraduationCap size={24} />,
      title: 'BCS Student',
      description: 'Focusing on full-stack JavaScript and cross-platform mobile development with React, Node.js, and Flutter',
    },
    {
      icon: <Code size={24} />,
      title: 'Final Year Project',
      description: 'Built a full-stack travel/portfolio-style project with React frontend, Node.js backend, and database integration',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Freelance Developer',
      description: 'Delivering React frontends and API-ready backends for clients on Fiverr (scrapingmaster1) and other platforms', // Updated to mention real Fiverr username
    },
  ];

  return (
    <Section id="about" background="white">
      <SectionHeader title="About Shehroz – Full-Stack Developer" align="center" />

      <div className="grid lg:grid-cols-2 items-center" style={{ gap: '64px' }}>
        {/* Portrait */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Shehroz Shafiq"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl ring-8 ring-white transition-transform duration-500 group-hover:scale-105"
              />
              {/* TODO: Replace with real professional portrait photo of Shehroz Shafiq */}
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Bio & Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p 
              className="text-gray-600"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              I'm a BCS student specializing in full-stack web development and cross-platform mobile apps, 
              working mainly with React on the frontend and Node.js / Firebase on the backend. I build 
              complete solutions from database design to responsive UI.
            </p>
            <p 
              className="text-gray-600"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              I focus on creating clean, maintainable code that provides excellent user experiences. 
              Whether it's a web dashboard, mobile app, or full-stack application with APIs and authentication, 
              I deliver solutions that are both beautiful and functional. Comfortable working with Firebase 
              (Auth, Firestore, Analytics) and Cloudinary for media handling in production-ready projects.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center text-teal-600 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <h4 
                    className="text-gray-900 group-hover:text-teal-600 transition-colors"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '8px'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p 
                    className="text-gray-600"
                    style={{ fontSize: '15px', lineHeight: '1.6' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}