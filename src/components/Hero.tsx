import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { useState, useEffect } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <Section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden hero-section">
      {/* Animated Gradient Background Layer */}
      <div className="absolute inset-0 -z-20 gradient-animated"></div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Blob 1 - Large Teal */}
        <div 
          className="absolute animate-blob-slow"
          style={{
            top: '10%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.12) 0%, rgba(13, 148, 136, 0.06) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.8,
          }}
        ></div>

        {/* Blob 2 - Large Blue */}
        <div 
          className="absolute animate-blob-diagonal"
          style={{
            top: '30%',
            right: '-15%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(90px)',
            opacity: 0.7,
            animationDelay: '2s',
          }}
        ></div>

        {/* Blob 3 - Medium Cyan (hidden on mobile) */}
        <div 
          className="absolute animate-blob-reverse hidden lg:block"
          style={{
            bottom: '10%',
            left: '25%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(70px)',
            opacity: 0.6,
            animationDelay: '4s',
          }}
        ></div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          /* Animated Gradient Background */
          @keyframes gradientShift {
            0% {
              background: linear-gradient(120deg, 
                rgba(255, 255, 255, 1) 0%, 
                rgba(204, 251, 241, 1) 20%,
                rgba(186, 230, 253, 1) 45%,
                rgba(207, 250, 254, 1) 70%,
                rgba(255, 255, 255, 1) 100%
              );
            }
            33% {
              background: linear-gradient(135deg, 
                rgba(255, 255, 255, 1) 0%, 
                rgba(207, 250, 254, 1) 25%,
                rgba(204, 251, 241, 1) 50%,
                rgba(186, 230, 253, 1) 75%,
                rgba(255, 255, 255, 1) 100%
              );
            }
            66% {
              background: linear-gradient(145deg, 
                rgba(255, 255, 255, 1) 0%, 
                rgba(186, 230, 253, 1) 22%,
                rgba(207, 250, 254, 1) 48%,
                rgba(204, 251, 241, 1) 74%,
                rgba(255, 255, 255, 1) 100%
              );
            }
            100% {
              background: linear-gradient(120deg, 
                rgba(255, 255, 255, 1) 0%, 
                rgba(204, 251, 241, 1) 20%,
                rgba(186, 230, 253, 1) 45%,
                rgba(207, 250, 254, 1) 70%,
                rgba(255, 255, 255, 1) 100%
              );
            }
          }

          .gradient-animated {
            animation: gradientShift 20s ease-in-out infinite;
          }

          /* Mobile: slower and more subtle */
          @media (max-width: 1024px) {
            @keyframes gradientShift {
              0% {
                background: linear-gradient(120deg, 
                  rgba(255, 255, 255, 1) 0%, 
                  rgba(224, 252, 246, 1) 30%,
                  rgba(219, 234, 254, 1) 60%,
                  rgba(255, 255, 255, 1) 100%
                );
              }
              50% {
                background: linear-gradient(135deg, 
                  rgba(255, 255, 255, 1) 0%, 
                  rgba(232, 251, 253, 1) 35%,
                  rgba(224, 252, 246, 1) 65%,
                  rgba(255, 255, 255, 1) 100%
                );
              }
              100% {
                background: linear-gradient(120deg, 
                  rgba(255, 255, 255, 1) 0%, 
                  rgba(224, 252, 246, 1) 30%,
                  rgba(219, 234, 254, 1) 60%,
                  rgba(255, 255, 255, 1) 100%
                );
              }
            }

            .gradient-animated {
              animation: gradientShift 30s ease-in-out infinite;
            }
          }

          @keyframes blobSlow {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(50px, -30px) scale(1.05);
            }
            66% {
              transform: translate(-30px, 50px) scale(0.95);
            }
          }

          @keyframes blobDiagonal {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(-60px, 40px) scale(1.08);
            }
            66% {
              transform: translate(40px, -50px) scale(0.92);
            }
          }

          @keyframes blobReverse {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(-40px, -40px) scale(1.1);
            }
            66% {
              transform: translate(60px, 30px) scale(0.9);
            }
          }

          .animate-blob-slow {
            animation: blobSlow 25s ease-in-out infinite;
          }

          .animate-blob-diagonal {
            animation: blobDiagonal 30s ease-in-out infinite;
          }

          .animate-blob-reverse {
            animation: blobReverse 28s ease-in-out infinite;
          }

          /* Simplified mobile animation */
          @media (max-width: 1024px) {
            .animate-blob-slow {
              animation: blobSlow 35s ease-in-out infinite;
            }
            
            .animate-blob-diagonal {
              animation: blobDiagonal 40s ease-in-out infinite;
            }
          }
        `}
      </style>

      <div className="grid lg:grid-cols-2 items-center" style={{ gap: '64px' }}>
        {/* Left Content */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* H1 */}
            <h1 
              className="text-gray-900"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: '1.2',
                fontWeight: 600
              }}
            >
              Full-Stack & Mobile App Developer
            </h1>
            
            {/* Subheading */}
            <p 
              className="text-teal-600"
              style={{
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                lineHeight: '1.4',
                fontWeight: 500
              }}
            >
              I build end-to-end React web apps and React Native / Flutter mobile apps, with Node.js APIs and databases behind the scenes.
            </p>
            
            {/* Body text */}
            <p 
              className="text-gray-600"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                maxWidth: '560px'
              }}
            >
              I design responsive UIs and also handle backend APIs, authentication, and data layers for small to medium projects. 
              From pixel-perfect frontends to complete full-stack solutions, I deliver production-ready applications that work seamlessly across all devices.
            </p>
          </div>

          <div className="flex flex-wrap" style={{ gap: '16px' }}>
            <Button onClick={() => handleScroll('#projects')} size="lg">
              View Projects
            </Button>
            <Button 
              onClick={() => handleScroll('#contact')} 
              variant="secondary" 
              size="lg"
            >
              Hire Me
            </Button>
          </div>
        </div>

        {/* Right Illustration with fade-in */}
        <div 
          className={`relative transition-all duration-1200 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative z-10 group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Development workspace with laptop"
              className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* TODO: Replace with real hero image/illustration */}
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </Section>
  );
}