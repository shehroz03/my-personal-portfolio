import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  variant?: 'teal' | 'gray';
  size?: 'sm' | 'md';
  className?: string;
}

export function Tag({ children, variant = 'teal', size = 'md', className = '' }: TagProps) {
  const variants = {
    teal: 'bg-teal-50 text-teal-600',
    gray: 'bg-gray-100 text-gray-700'
  };
  
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base'
  };
  
  return (
    <span className={`inline-block rounded-full ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
