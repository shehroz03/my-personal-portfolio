import { Quote } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div 
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
      style={{ padding: '40px 32px' }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-6">
        <Quote size={24} className="text-teal-600" />
      </div>
      
      <blockquote 
        className="text-gray-700 italic"
        style={{
          fontSize: '16px',
          lineHeight: '1.7',
          marginBottom: '24px'
        }}
      >
        "{quote}"
      </blockquote>
      
      <div className="pt-6 border-t border-gray-200">
        <p 
          className="text-gray-900"
          style={{
            fontSize: '16px',
            fontWeight: 600,
            marginBottom: '4px'
          }}
        >
          {author}
        </p>
        <p 
          className="text-gray-600"
          style={{ fontSize: '14px' }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  // REAL TESTIMONIALS - Do not change
  const testimonials = [
    {
      quote: "Shehroz consistently delivered clean, production‑ready code for his final year project. From planning to deployment, he handled both frontend and backend responsibilities very well.",
      author: "Sir / Project Supervisor", // REAL TESTIMONIAL - Do not change
      role: "University FYP Supervisor", // REAL TESTIMONIAL - Do not change
    },
    {
      quote: "I've worked with Shehroz on multiple projects. He takes ownership of the frontend, keeps the UI consistent with the design, and communicates clearly when integrating with APIs and backend.",
      author: "Team Member", // REAL TESTIMONIAL - Do not change
      role: "Project Teammate", // REAL TESTIMONIAL - Do not change
    },
    {
      quote: "Shehroz is reliable and detail‑oriented. He turns Figma designs into responsive React frontends and is comfortable working with Node.js and Firebase when needed.",
      author: "Client / Collaborator", // REAL TESTIMONIAL - Do not change
      role: "Freelance Collaboration", // REAL TESTIMONIAL - Do not change
    }
  ];

  return (
    <Section id="testimonials" background="gradient">
      <SectionHeader
        title="Client Feedback"
        subtitle="What clients and collaborators say about working with me."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px' }}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
          />
        ))}
      </div>
    </Section>
  );
}