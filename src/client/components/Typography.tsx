import React from 'react';
import { cn } from '../utils/cn';

// Wonder Blocks inspired Typography
// Using standard Tailwind scaling

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  htmlFor?: string;
}

export const DisplayHeading: React.FC<TypographyProps> = ({ as: Component = 'h1', className, children, ...props }) => (
  <Component className={cn("text-4xl md:text-5xl font-bold tracking-tight text-gray-900", className)} {...props}>
    {children}
  </Component>
);

export const Title: React.FC<TypographyProps> = ({ as: Component = 'h2', className, children, ...props }) => (
  <Component className={cn("text-2xl md:text-3xl font-bold text-gray-900", className)} {...props}>
    {children}
  </Component>
);

export const Heading: React.FC<TypographyProps> = ({ as: Component = 'h3', className, children, ...props }) => (
  <Component className={cn("text-xl md:text-2xl font-bold text-gray-800", className)} {...props}>
    {children}
  </Component>
);

export const Subheading: React.FC<TypographyProps> = ({ as: Component = 'h4', className, children, ...props }) => (
  <Component className={cn("text-lg font-semibold text-gray-700", className)} {...props}>
    {children}
  </Component>
);

export const Body: React.FC<TypographyProps> = ({ as: Component = 'p', className, children, ...props }) => (
  <Component className={cn("text-base leading-relaxed text-gray-700", className)} {...props}>
    {children}
  </Component>
);

export const Label: React.FC<TypographyProps> = ({ as: Component = 'span', className, children, ...props }) => (
  <Component className={cn("text-sm font-bold uppercase tracking-wider text-gray-500", className)} {...props}>
    {children}
  </Component>
);

export const Caption: React.FC<TypographyProps> = ({ as: Component = 'span', className, children, ...props }) => (
  <Component className={cn("text-sm text-gray-500", className)} {...props}>
    {children}
  </Component>
);
