import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  ...props 
}) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};