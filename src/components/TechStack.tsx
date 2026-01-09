import { useState, useRef, useEffect } from 'react';

interface TechItem {
  name: string;
  icon: string;
  description: string;
  gradient: string;
}

export function TechStack() {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const techStack: TechItem[] = [
    { name: 'React', icon: '⚛️', description: 'Main frontend framework', gradient: 'from-cyan-50 to-blue-50' },
    { name: 'React Native', icon: '📱', description: 'Cross-platform mobile apps', gradient: 'from-blue-50 to-indigo-50' },
    { name: 'Flutter', icon: '🦋', description: 'Cross-platform UI toolkit', gradient: 'from-sky-50 to-cyan-50' },
    { name: 'Node.js', icon: '🟢', description: 'JavaScript backend runtime', gradient: 'from-green-50 to-emerald-50' },
    { name: 'TypeScript', icon: '📘', description: 'Typed JavaScript for safer code', gradient: 'from-blue-50 to-indigo-50' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL document database', gradient: 'from-emerald-50 to-teal-50' },
    { name: 'Firebase', icon: '🔥', description: 'Backend services, auth, Firestore and analytics for my apps', gradient: 'from-orange-50 to-amber-50' }, // REAL TECH - Production use
    { name: 'Cloudinary', icon: '☁️', description: 'Optimized hosting and delivery of project images & screenshots', gradient: 'from-sky-50 to-blue-50' }, // REAL TECH - Production use
    { name: 'Git', icon: '🔀', description: 'Version control system', gradient: 'from-red-50 to-orange-50' },
    { name: 'Tailwind', icon: '🎨', description: 'Utility-first CSS framework', gradient: 'from-teal-50 to-cyan-50' },
    { name: 'Express', icon: '🚂', description: 'Node.js web framework', gradient: 'from-gray-50 to-slate-50' },
    { name: 'Figma', icon: '🎯', description: 'Design to code workflow', gradient: 'from-purple-50 to-pink-50' },
    { name: 'Postman', icon: '📮', description: 'API testing & development', gradient: 'from-orange-50 to-red-50' },
  ];

  // Duplicate items for seamless infinite scroll
  const duplicatedTech = [...techStack, ...techStack, ...techStack];

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const touch = e.touches[0];
    setStartX(touch.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 border-y border-gray-100" style={{ padding: '64px 0', overflow: 'hidden' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '16px' }}>
          <h3 
            className="text-gray-900"
            style={{ 
              fontSize: '28px', 
              fontWeight: 600, 
              letterSpacing: '0.02em',
              marginBottom: '12px'
            }}
          >
            Technologies I Use
          </h3>
          <p 
            className="text-gray-600"
            style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}
          >
            Tools I rely on to build full-stack web and mobile apps
          </p>
        </div>

        {/* Carousel Container with Fade Edges */}
        <div className="relative" style={{ marginTop: '48px', marginBottom: '24px' }}>
          {/* Left Fade */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            }}
          ></div>
          
          {/* Right Fade */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            }}
          ></div>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className={`relative overflow-x-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              padding: '16px 0',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              setIsDragging(false);
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <style>
              {`
                @keyframes marqueeFlow {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-33.333%);
                  }
                }

                @keyframes marqueeFlowSlow {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-33.333%);
                  }
                }

                .marquee-flow {
                  animation: marqueeFlow 60s linear infinite;
                }

                .marquee-flow.paused {
                  animation: marqueeFlowSlow 120s linear infinite;
                }

                .marquee-flow.dragging {
                  animation-play-state: paused;
                }

                @keyframes iconBounce {
                  0%, 100% {
                    transform: scale(1) rotate(0deg);
                  }
                  50% {
                    transform: scale(1.15) rotate(5deg);
                  }
                }

                .tech-pill-icon.active {
                  animation: iconBounce 0.5s ease-in-out;
                }

                @keyframes fadeIn {
                  from {
                    opacity: 0;
                    transform: translateY(-8px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                .tooltip-fade {
                  animation: fadeIn 0.2s ease-out;
                }
              `}
            </style>

            <div 
              className={`marquee-flow flex items-center ${isPaused ? 'paused' : ''} ${isDragging ? 'dragging' : ''}`}
              style={{ gap: '24px', width: 'fit-content' }}
            >
              {duplicatedTech.map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="flex items-center" style={{ gap: '24px' }}>
                  {/* Tech Pill */}
                  <div
                    className={`tech-pill group relative flex-shrink-0 select-none bg-gradient-to-br ${tech.gradient}`}
                    onMouseEnter={() => setHoveredTech(`${tech.name}-${index}`)}
                    onMouseLeave={() => setHoveredTech(null)}
                    style={{
                      minWidth: '200px',
                      padding: '24px 40px',
                      border: '1.5px solid rgba(209, 213, 219, 0.5)',
                      borderRadius: '9999px',
                      boxShadow: hoveredTech === `${tech.name}-${index}` 
                        ? '0 12px 24px -4px rgba(13, 148, 136, 0.15), 0 0 0 3px rgba(13, 148, 136, 0.08)'
                        : '0 4px 16px -2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: hoveredTech === `${tech.name}-${index}` ? 'scale(1.03) translateY(-4px)' : 'scale(1) translateY(0)',
                      backdropFilter: 'blur(8px)',
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.transform = 'scale(0.98)';
                    }}
                    onTouchEnd={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <div className="flex items-center justify-center" style={{ gap: '14px' }}>
                      <div 
                        className={`tech-pill-icon transition-transform duration-300 ${hoveredTech === `${tech.name}-${index}` ? 'active' : ''}`}
                        style={{ 
                          fontSize: '36px',
                          filter: hoveredTech === `${tech.name}-${index}` ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' : 'none',
                        }}
                      >
                        {tech.icon}
                      </div>
                      <span 
                        className="text-gray-800 whitespace-nowrap"
                        style={{ 
                          fontSize: '17px', 
                          fontWeight: 600,
                          letterSpacing: '0.01em',
                        }}
                      >
                        {tech.name}
                      </span>
                    </div>

                    {/* Tooltip */}
                    {hoveredTech === `${tech.name}-${index}` && (
                      <div 
                        className="tooltip-fade absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3 bg-gray-900/95 backdrop-blur-sm text-white rounded-xl shadow-2xl whitespace-nowrap pointer-events-none z-20"
                        style={{ fontSize: '14px', fontWeight: 500 }}
                      >
                        <div className="relative">
                          {tech.name} – {tech.description}
                          {/* Arrow */}
                          <div 
                            className="absolute top-full left-1/2 -translate-x-1/2"
                            style={{
                              width: 0,
                              height: 0,
                              borderLeft: '7px solid transparent',
                              borderRight: '7px solid transparent',
                              borderTop: '7px solid rgba(17, 24, 39, 0.95)'
                            }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Vertical Divider Dot */}
                  {index < duplicatedTech.length - 1 && (
                    <div 
                      className="flex-shrink-0"
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#d1d5db',
                        opacity: 0.4,
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="text-center">
          <p 
            className="text-gray-500"
            style={{ fontSize: '14px', fontStyle: 'italic' }}
          >
            Hover over a logo to see what I use it for • Drag to explore
          </p>
        </div>
      </div>
    </div>
  );
}