import { ChangeEvent } from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel';
  name: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  label?: string;
  className?: string;
}

export function Input({
  type = 'text',
  name,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  label,
  className = ''
}: InputProps) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block mb-2 text-gray-700 font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
      />
    </div>
  );
}

interface TextareaProps {
  name: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  label?: string;
  rows?: number;
  className?: string;
}

export function Textarea({
  name,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  label,
  rows = 6,
  className = ''
}: TextareaProps) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block mb-2 text-gray-700 font-medium">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all resize-none"
      />
    </div>
  );
}
