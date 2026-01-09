import { ReactNode, useState } from 'react';

interface CardProps {
  children: ReactNode;
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, hoverable = false, className = '', onClick }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyles = 'bg-white border border-gray-200 rounded-xl';
  const hoverStyles = hoverable 
    ? 'cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2' 
    : '';
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function CardHeader({ children, icon, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-6 lg:p-8 ${className}`}>
      {icon && (
        <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-lg mb-4">
          <div className="text-teal-600">{icon}</div>
        </div>
      )}
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`px-6 pb-6 lg:px-8 lg:pb-8 ${className}`}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-6 pb-6 pt-4 lg:px-8 lg:pb-8 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
}
