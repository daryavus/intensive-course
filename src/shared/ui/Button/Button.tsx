import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  ...props 
}) => {
  const baseStyle = 'px-4 py-2 rounded transition-colors';
  const variantStyle = variant === 'primary' 
    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
    : 'bg-gray-200 hover:bg-gray-300 text-black';

  return (
    <button 
      className={`${baseStyle} ${variantStyle}`}
      {...props}
    >
      {children}
    </button>
  );
};