import React from 'react';
import { cn } from '../utils/cn';
import { Label, Caption } from './Typography';

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  error?: string;
  fullWidth?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, label, description, error, fullWidth, id, ...props }, ref) => {
    const inputId = id || React.useId();
    const hasError = !!error;

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full", className)}>
        {label && <Label as="label" htmlFor={inputId} className="mb-1">{label}</Label>}
        
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "flex h-10 w-full rounded-md border text-base px-3 py-2",
            "bg-white text-gray-900 placeholder:text-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500",
            "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
            hasError ? "border-red-500 focus:ring-red-500" : "border-gray-300",
            className
          )}
          {...props}
        />

        {description && !hasError && (
          <Caption className="text-gray-500">{description}</Caption>
        )}
        
        {hasError && (
          <Caption className="text-red-600">{error}</Caption>
        )}
      </div>
    );
  }
);
TextField.displayName = "TextField";
