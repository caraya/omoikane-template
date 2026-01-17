import React from 'react';
import { cn } from '../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  className, 
  children, 
  bordered = true, 
  shadow = false, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg overflow-hidden",
        bordered && "border border-gray-200",
        shadow && "shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
