import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  return (
    <button 
      className={`button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};