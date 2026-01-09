import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DesignSystemPage } from './components/DesignSystemPage';
import { Toaster } from 'sonner';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDesignSystem, setShowDesignSystem] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Design system keyboard shortcut (Ctrl/Cmd + D)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        setShowDesignSystem(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleProjectSelect = (projectId: number) => {
    setSelectedProject(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  if (showDesignSystem) {
    return <DesignSystemPage onClose={() => setShowDesignSystem(false)} />;
  }

  if (selectedProject !== null) {
    return <ProjectDetail projectId={selectedProject} onClose={handleCloseProject} />;
  }

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Hero Gradient Wash */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: '100vh',
            background: 'linear-gradient(135deg, rgba(204, 251, 241, 0.3) 0%, rgba(224, 242, 254, 0.3) 40%, rgba(255, 255, 255, 0) 70%)',
          }}
        ></div>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: '100vh',
            backgroundImage: `
              linear-gradient(rgba(13, 148, 136, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13, 148, 136, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            opacity: 0.4,
          }}
        ></div>

        {/* Abstract Shapes */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        ></div>

        <div
          className="absolute top-1/3 -left-40 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        ></div>

        {/* Footer Gradient Wash */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '600px',
            background: 'linear-gradient(to top, rgba(243, 244, 246, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
          }}
        ></div>

        {/* Dot Pattern in Footer Area */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '400px',
            backgroundImage: 'radial-gradient(circle, rgba(13, 148, 136, 0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.3,
          }}
        ></div>
      </div>

      <Navigation isScrolled={isScrolled} />
      <Hero />
      <TechStack />
      <Skills />
      <Projects onProjectSelect={handleProjectSelect} />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}