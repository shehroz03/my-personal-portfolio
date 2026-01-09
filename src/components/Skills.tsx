import { Code2, Smartphone, Database, Wrench } from 'lucide-react';
import { useState } from 'react';
import { Section, SectionHeader } from './ui/Section';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-default"
      style={{ padding: '40px 32px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`inline-flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl transition-all duration-500 ${
          isHovered ? 'rotate-12 scale-125 shadow-lg' : 'rotate-0 scale-100'
        }`}
        style={{ width: '64px', height: '64px', marginBottom: '24px' }}
      >
        <div className={`text-teal-600 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
          {icon}
        </div>
      </div>
      
      {/* H3 */}
      <h3 
        className={`text-gray-900 transition-colors duration-300 ${isHovered ? 'text-teal-600' : ''}`}
        style={{
          fontSize: '24px',
          lineHeight: '1.3',
          fontWeight: 600,
          marginBottom: '20px'
        }}
      >
        {title}
      </h3>
      
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {skills.map((skill, index) => (
          <li 
            key={index} 
            className="flex items-start transition-transform duration-300 hover:translate-x-2" 
            style={{ gap: '12px' }}
          >
            <span 
              className="text-teal-600 flex-shrink-0"
              style={{ 
                marginTop: '4px',
                fontSize: '20px',
                lineHeight: '1'
              }}
            >
              •
            </span>
            <span 
              className="text-gray-600"
              style={{ fontSize: '16px', lineHeight: '1.5' }}
            >
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={32} strokeWidth={2} />,
      title: 'Full-Stack Web',
      skills: [
        'React with Vite',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Responsive layouts',
        'Node.js & Express basics',
        'REST APIs, auth & routing',
      ],
    },
    {
      icon: <Smartphone size={32} strokeWidth={2} />,
      title: 'Mobile Apps',
      skills: [
        'React Native',
        'Flutter & Dart',
        'Mobile-first UI',
        'API-driven data',
        'Firebase integration',
        'Cross-platform development',
      ],
    },
    {
      icon: <Database size={32} strokeWidth={2} />,
      title: 'Backend & Databases',
      skills: [
        'REST API design',
        'Node.js / Express',
        'MongoDB basics',
        'Firebase Firestore',
        'CRUD operations',
        'Data validation',
      ],
    },
    {
      icon: <Wrench size={32} strokeWidth={2} />,
      title: 'Tools & Workflow',
      skills: [
        'Git & GitHub',
        'VS Code',
        'Postman / API testing',
        'Figma to code',
        'Vercel / Netlify / Render',
        'Agile development',
      ],
    },
  ];

  return (
    <Section id="skills" background="gray">
      <SectionHeader
        title="Skills & Tech Stack"
        subtitle="Full-stack JavaScript development from frontend to backend and mobile."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '32px' }}>
        {skillCategories.map((category, index) => (
          <SkillCard
            key={index}
            icon={category.icon}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </Section>
  );
}