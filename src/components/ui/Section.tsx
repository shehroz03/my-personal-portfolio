import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  background?: 'white' | 'gray' | 'gradient';
  className?: string;
}

export function Section({ id, children, background = 'white', className = '' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-gray-50 to-white'
  };
  
  return (
    <section id={id} className={`py-20 lg:py-32 ${backgrounds[background]} ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ title, subtitle, align = 'center', className = '' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`${alignment} mb-12 lg:mb-16 ${className}`}>
      <h2 className="mb-4 text-gray-900">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
