import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectDetailProps {
  projectId: number;
  onClose: () => void;
}

export function ProjectDetail({ projectId, onClose }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  // Project data
  // TODO: Replace all project detail data with real project information
  const projectsData: Record<number, any> = {
    1: {
      // REAL PROJECT: ScholarIQ - Do not change core information
      title: 'ScholarIQ',
      subtitle: 'Full-Stack Scholarship Finder Platform',
      description: 'A comprehensive scholarship discovery and tracking platform designed to help students find and manage scholarship opportunities for studying abroad. ScholarIQ features advanced search filters, personalized recommendations, application deadline tracking, and a database of scholarships from universities and organizations worldwide.',
      role: 'Full-Stack Developer',
      projectInfo: {
        type: 'Personal Project', // TODO: Update if this was client/academic work
        role: 'Full-Stack (Frontend + Backend + DB)',
        duration: '3 months', // TODO: Update with actual duration
        year: '2024', // TODO: Update with actual year
        platform: 'Web',
      },
      frontendTech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Axios'],
      backendTech: ['Node.js', 'Express', 'Firebase', 'Firestore', 'JWT Auth', 'REST API'], // Firebase integrated for backend
      tags: ['Full-Stack', 'Web App', 'Education'],
      liveDemo: null, // TODO: Add live demo URL if available
      sourceCode: 'https://github.com/shehroz03/scholariq', // TODO: Update with actual GitHub repo URL
      screenshots: [ // TODO: Replace all screenshots with real ScholarIQ screenshots (hosted on Cloudinary for optimization)
        'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      ],
      responsibilities: [
        'Designed and implemented responsive React frontend with TypeScript for type safety',
        'Built RESTful API with Node.js and Express for scholarship CRUD operations',
        'Integrated Firebase for authentication (JWT) and Firestore database for scholarships and user data',
        'Implemented user authentication system with Firebase Auth and secure password handling',
        'Developed advanced search and filtering system for scholarship discovery',
        'Built dashboard for students to track application deadlines and saved scholarships',
        'Used Cloudinary to host and optimize project screenshots for fast loading', // Cloudinary mention
      ],
      process: [
        {
          title: 'Discover',
          description: 'Researched student pain points in finding scholarships and analyzed competitor platforms',
        },
        {
          title: 'Design',
          description: 'Created user flows and wireframes focused on easy scholarship discovery and tracking',
        },
        {
          title: 'Build',
          description: 'Developed full-stack platform with React frontend and Node.js backend with MongoDB',
        },
        {
          title: 'Ship',
          description: 'Deployed application and gathered feedback from students for future improvements',
        },
      ],
      outcomes: [
        'Successfully built a working platform that helps students discover scholarships based on their profile and preferences',
        'Demonstrated strong full-stack skills with modern technologies (React, Node.js, MongoDB)',
        'Created a scalable database structure capable of handling thousands of scholarship listings',
      ],
    },
    4: {
      title: 'Task Management App',
      subtitle: 'Mobile-first productivity app for teams',
      description: 'A cross-platform task management application designed to help teams collaborate effectively. Built with React Native for seamless iOS and Android experience, with Firebase backend for real-time synchronization. Features include task boards, team collaboration, deadline tracking, and push notifications.',
      role: 'Full-Stack Mobile Developer',
      projectInfo: {
        type: 'Personal Project',
        role: 'Full-Stack (Mobile + Backend)',
        duration: '2 months',
        year: '2024',
        platform: 'Mobile (iOS & Android)',
      },
      frontendTech: ['React Native', 'TypeScript', 'React Navigation', 'Async Storage', 'Push Notifications'],
      backendTech: ['Firebase Auth', 'Firestore', 'Cloud Functions', 'FCM', 'Firebase Storage'],
      tags: ['Mobile', 'Full-Stack', 'Cross-Platform'],
      liveDemo: null,
      sourceCode: 'https://github.com/shehrozshafiq/task-management',
      screenshots: [
        'https://images.unsplash.com/photo-1640694939366-7725614435ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      ],
      responsibilities: [
        'Built mobile UI with React Native for iOS and Android platforms',
        'Implemented Firebase Authentication for secure user login',
        'Designed Firestore data structure for tasks, teams, and user profiles',
        'Created Cloud Functions for automated notifications and task reminders',
        'Integrated push notifications using Firebase Cloud Messaging',
        'Optimized app performance and offline-first data synchronization',
      ],
      process: [
        {
          title: 'Discover',
          description: 'Researched popular task apps and identified key features users need daily',
        },
        {
          title: 'Design',
          description: 'Created mobile-first wireframes focusing on quick task creation and minimal taps',
        },
        {
          title: 'Build',
          description: 'Developed app with React Native, integrated Firebase for real-time backend',
        },
        {
          title: 'Ship',
          description: 'Tested on multiple devices, prepared for App Store and Play Store submission',
        },
      ],
      outcomes: [
        'Built fully functional cross-platform app demonstrating React Native and Firebase skills',
        'Improved task creation flow to make team collaboration quick and intuitive',
        'Showcased project to win freelance contracts for similar mobile development work',
      ],
    },
    2: {
      title: 'Fitness Tracker Mobile App',
      subtitle: 'Cross-platform fitness & workout tracking',
      description: 'A comprehensive fitness tracking application built with Flutter to help users monitor workouts, track calories, and achieve fitness goals. Includes workout plan builder, progress analytics, social challenges, and integration with Firebase for real-time data sync across devices.',
      role: 'Full-Stack Mobile Developer',
      projectInfo: {
        type: 'Client Project',
        role: 'Full-Stack (Mobile + Backend)',
        duration: '3 months',
        year: '2024',
        platform: 'Mobile (iOS & Android)',
      },
      frontendTech: ['Flutter', 'Dart', 'Provider', 'Charts', 'Local Storage'],
      backendTech: ['Firebase Auth', 'Firestore', 'Cloud Storage', 'Analytics', 'Cloud Functions'],
      tags: ['Mobile', 'Full-Stack', 'Flutter'],
      liveDemo: null,
      sourceCode: 'https://github.com/shehrozshafiq/fitness-tracker',
      screenshots: [
        'https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      ],
      responsibilities: [
        'Designed and built beautiful native UI with Flutter and Dart',
        'Implemented custom workout plan builder with drag-and-drop interface',
        'Created real-time progress charts and analytics dashboard',
        'Integrated Firebase for user authentication and data persistence',
        'Built social features for sharing achievements and challenges',
        'Optimized app for offline mode with local data caching',
      ],
      process: [
        {
          title: 'Discover',
          description: 'Conducted user interviews with gym enthusiasts to understand pain points',
        },
        {
          title: 'Design',
          description: 'Created high-fidelity mockups with focus on motivational UI/UX',
        },
        {
          title: 'Build',
          description: 'Developed Flutter app with Firebase backend and real-time sync',
        },
        {
          title: 'Ship',
          description: 'Beta tested with 50 users, refined based on feedback, launched on stores',
        },
      ],
      outcomes: [
        'Enabled users to track workouts consistently and stay engaged with progress',
        'Client successfully launched app with positive user feedback and solid ratings',
        'Helped build client\'s user base and establish their brand in the fitness app market',
      ],
    },
    3: {
      title: 'Restaurant Booking Platform',
      subtitle: 'Responsive web app for table reservations',
      description: 'A complete restaurant reservation platform with customer-facing booking interface and admin dashboard for restaurant management. Features include real-time table availability, booking management, menu display, and email confirmations.',
      role: 'Full-Stack Developer',
      projectInfo: {
        type: 'Client Project',
        role: 'Full-Stack (Frontend + Backend)',
        duration: '2.5 months',
        year: '2024',
        platform: 'Web',
      },
      frontendTech: ['React', 'TypeScript', 'Tailwind CSS', 'React Query', 'Date Picker'],
      backendTech: ['Node.js', 'Express', 'PostgreSQL', 'Nodemailer', 'JWT'],
      tags: ['Full-Stack', 'Web App', 'Client'],
      liveDemo: 'https://restaurant-booking.example.com',
      sourceCode: null,
      screenshots: [
        'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1428515613728-6b4607e44363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      ],
      responsibilities: [
        'Built responsive booking interface with React and TypeScript',
        'Developed RESTful API with Node.js/Express for reservations',
        'Designed PostgreSQL database schema for tables, bookings, and menus',
        'Implemented email notifications for booking confirmations',
        'Created admin dashboard for restaurant staff to manage reservations',
        'Added real-time table availability checking system',
      ],
      process: [
        {
          title: 'Discover',
          description: 'Analyzed competitor platforms and restaurant owner requirements',
        },
        {
          title: 'Design',
          description: 'Wireframed user flows for seamless booking experience',
        },
        {
          title: 'Build',
          description: 'Built frontend and backend APIs, integrated email service',
        },
        {
          title: 'Ship',
          description: 'Deployed on AWS with CI/CD pipeline, provided training to staff',
        },
      ],
      outcomes: [
        'Platform now handling dozens of bookings per week with improved table management',
        'Reduced manual admin work by automating reservation confirmations and reminders',
        'Client expanded partnership for ongoing feature development and support',
      ],
    },
    5: {
      title: 'Portfolio Website Generator',
      subtitle: 'Tool to create custom portfolio sites from templates',
      description: 'My Final Year Project - a SaaS platform that enables developers and designers to create professional portfolio websites using customizable templates. Built with React frontend and Node.js backend with database for user accounts and projects.',
      role: 'Full-Stack Developer',
      projectInfo: {
        type: 'Final Year Project',
        role: 'Full-Stack (Frontend + Backend + DB)',
        duration: '4 months',
        year: '2024',
        platform: 'Web',
      },
      frontendTech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Drag & Drop'],
      backendTech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
      tags: ['Full-Stack', 'FYP', 'SaaS'],
      liveDemo: 'https://portfolio-gen.example.com',
      sourceCode: 'https://github.com/shehrozshafiq/portfolio-generator',
      screenshots: [
        'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      ],
      responsibilities: [
        'Designed template system with customizable sections and themes',
        'Built drag-and-drop editor for rearranging portfolio sections',
        'Created backend APIs for user management and data persistence',
        'Implemented image upload and optimization with Cloudinary',
        'Added export feature to generate static HTML/CSS files',
        'Developed authentication system with JWT and password encryption',
      ],
      process: [
        {
          title: 'Discover',
          description: 'Surveyed students and freelancers about portfolio creation challenges',
        },
        {
          title: 'Design',
          description: 'Created 5 professional templates and intuitive editor interface',
        },
        {
          title: 'Build',
          description: 'Developed full-stack platform with React + Node.js + MongoDB',
        },
        {
          title: 'Ship',
          description: 'Presented as FYP, deployed live, used by 50+ beta users',
        },
      ],
      outcomes: [
        'Demonstrated complete full-stack development skills as core component of final year evaluation',
        'Gained early user feedback from dozens of students and freelancers during beta testing',
        'Validated concept with positive response from academic panel and industry mentors',
      ],
    },
    6: {
      title: 'Real Estate Listing App',
      subtitle: 'Mobile app for browsing and saving property listings',
      description: 'A Flutter-based mobile application for browsing real estate properties. Features include property search with filters, interactive map view, favorites system, and contact agents. Frontend-only app consuming existing REST API.',
      role: 'Frontend Mobile Developer',
      projectInfo: {
        type: 'Client Project',
        role: 'Frontend Only',
        duration: '1.5 months',
        year: '2024',
        platform: 'Mobile (iOS & Android)',
      },
      frontendTech: ['Flutter', 'Dart', 'Google Maps', 'HTTP Client', 'Shared Preferences'],
      backendTech: ['REST API (Existing)', 'Third-party API Integration'],
      tags: ['Mobile', 'Frontend', 'Flutter'],
      liveDemo: null,
      sourceCode: null,
      screenshots: [
        'https://images.unsplash.com/photo-1640694939366-7725614435ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      ],
      responsibilities: [
        'Built beautiful Flutter UI matching provided design mockups',
        'Integrated with client\'s existing REST API for property data',
        'Implemented Google Maps for interactive property location viewing',
        'Created advanced filtering system (price, location, bedrooms, etc.)',
        'Added favorites and saved searches with local storage',
        'Optimized image loading and caching for smooth scrolling',
      ],
      process: [
        {
          title: 'Discover',
          description: 'Reviewed API documentation and design files from client',
        },
        {
          title: 'Design',
          description: 'Planned component architecture and state management approach',
        },
        {
          title: 'Build',
          description: 'Developed Flutter app with API integration and Google Maps',
        },
        {
          title: 'Ship',
          description: 'Delivered production-ready code to client for deployment',
        },
      ],
      outcomes: [
        'Delivered pixel-perfect implementation matching all design specs',
        'Client successfully deployed app to both iOS and Android stores',
        'Received 5-star review and referral to another client',
      ],
    },
    // Add more projects as needed
  };

  const project = projectsData[projectId];

  if (!project) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={handleClose}
    >
      <div
        className={`min-h-screen px-4 py-8 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-8'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:rotate-90 hover:scale-110 active:scale-95"
          >
            <X size={24} className="text-gray-700" />
          </button>

          {/* Hero Area */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-b border-gray-200" style={{ padding: '64px 48px' }}>
            <div className="max-w-4xl">
              {/* Title & Subtitle */}
              <h1
                className="text-gray-900"
                style={{
                  fontSize: '40px',
                  fontWeight: 600,
                  lineHeight: '1.2',
                  marginBottom: '12px',
                }}
              >
                {project.title}
              </h1>
              <p
                className="text-gray-600"
                style={{
                  fontSize: '20px',
                  lineHeight: '1.4',
                  marginBottom: '32px',
                }}
              >
                {project.subtitle}
              </p>

              {/* Buttons & Tags */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="flex flex-wrap items-center" style={{ gap: '16px' }}>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center"
                      style={{ gap: '8px', fontSize: '16px', fontWeight: 600 }}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center"
                      style={{ gap: '8px', fontSize: '16px', fontWeight: 600 }}
                    >
                      <Github size={20} />
                      Source Code
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap" style={{ gap: '8px' }}>
                  {project.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-teal-600 border border-teal-200 rounded-full"
                      style={{ fontSize: '14px', fontWeight: 600 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ padding: '64px 48px' }}>
            {/* Media Gallery */}
            <section style={{ marginBottom: '80px' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ marginBottom: '24px' }}>
                <ImageWithFallback
                  src={project.screenshots[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-auto"
                  style={{ aspectRatio: '16/10', objectFit: 'cover' }}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronLeft size={24} className="text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronRight size={24} className="text-gray-700" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex overflow-x-auto" style={{ gap: '16px', paddingBottom: '8px' }}>
                {project.screenshots.map((screenshot: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      currentImageIndex === index ? 'ring-4 ring-teal-600 shadow-xl' : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ width: '120px', height: '80px' }}
                  >
                    <ImageWithFallback
                      src={screenshot}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </section>

            {/* Project Overview - 2 Column */}
            <section className="grid lg:grid-cols-2" style={{ gap: '64px', marginBottom: '80px' }}>
              {/* Left: Overview */}
              <div>
                <h2
                  className="text-gray-900"
                  style={{
                    fontSize: '28px',
                    fontWeight: 600,
                    marginBottom: '24px',
                  }}
                >
                  Overview
                </h2>
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Right: Project Info */}
              <div>
                <h3
                  className="text-gray-900"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: '24px',
                  }}
                >
                  Project Info
                </h3>
                <div className="bg-gray-50 rounded-2xl border border-gray-200" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {Object.entries(project.projectInfo).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start" style={{ gap: '16px' }}>
                        <span
                          className="text-gray-500"
                          style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {key}
                        </span>
                        <span
                          className="text-gray-900 text-right"
                          style={{
                            fontSize: '16px',
                            fontWeight: 500,
                          }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* What I Did */}
            <section style={{ marginBottom: '80px' }}>
              <h2
                className="text-gray-900"
                style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  marginBottom: '32px',
                }}
              >
                What I Did
              </h2>
              <div className="grid sm:grid-cols-2" style={{ gap: '16px' }}>
                {project.responsibilities.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start bg-white border border-gray-200 rounded-xl hover:border-teal-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    style={{ gap: '12px', padding: '20px' }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <Check size={16} className="text-teal-600" />
                    </div>
                    <p
                      className="text-gray-700"
                      style={{
                        fontSize: '15px',
                        lineHeight: '1.6',
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section style={{ marginBottom: '80px' }}>
              <h2
                className="text-gray-900"
                style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  marginBottom: '32px',
                }}
              >
                Tech Stack
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {/* Frontend */}
                <div>
                  <h3
                    className="text-gray-700"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '16px',
                    }}
                  >
                    Frontend
                  </h3>
                  <div className="flex flex-wrap" style={{ gap: '12px' }}>
                    {project.frontendTech.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h3
                    className="text-gray-700"
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '16px',
                    }}
                  >
                    Backend & Database
                  </h3>
                  <div className="flex flex-wrap" style={{ gap: '12px' }}>
                    {project.backendTech.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-green-50 text-green-600 border border-green-200 rounded-lg hover:bg-green-100 hover:scale-105 transition-all duration-300"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Process & Highlights */}
            <section style={{ marginBottom: '80px' }}>
              <h2
                className="text-gray-900"
                style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  marginBottom: '32px',
                }}
              >
                Process & Highlights
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px' }}>
                {project.process.map((step: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                    style={{ padding: '32px 24px' }}
                  >
                    <div
                      className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center"
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        marginBottom: '16px',
                      }}
                    >
                      {index + 1}
                    </div>
                    <h4
                      className="text-gray-900"
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        marginBottom: '12px',
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="text-gray-600"
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Outcome */}
            <section style={{ marginBottom: '80px' }}>
              <h2
                className="text-gray-900"
                style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  marginBottom: '32px',
                }}
              >
                Outcome
              </h2>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border border-green-200" style={{ padding: '40px' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {project.outcomes.map((outcome: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start"
                      style={{ gap: '12px' }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center" style={{ marginTop: '2px' }}>
                        <Check size={16} className="text-white" />
                      </div>
                      <p
                        className="text-gray-700"
                        style={{
                          fontSize: '16px',
                          lineHeight: '1.7',
                        }}
                      >
                        {outcome}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl text-center text-white" style={{ padding: '48px 32px' }}>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}
                >
                  Interested in a similar project?
                </h3>
                <p
                  className="text-teal-50"
                  style={{
                    fontSize: '16px',
                    marginBottom: '32px',
                  }}
                >
                  Let's discuss how I can help bring your ideas to life
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 400);
                  }}
                  className="inline-block px-8 py-4 bg-white text-teal-600 rounded-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                  style={{ fontSize: '16px', fontWeight: 600 }}
                >
                  Contact Me
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}