"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  default: "bg-brand-primary text-white hover:bg-brand-hover",
  outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
  secondary: "bg-brand-secondary text-gray-900 hover:bg-gray-100",
  ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  link: "bg-transparent p-0 text-brand-primary underline-offset-4 hover:underline",
} as const;

const sizeClasses = {
  default: "min-h-12 px-5 py-3 text-sm",
  xs: "min-h-8 px-3 py-1.5 text-xs",
  sm: "min-h-10 px-4 py-2 text-sm",
  lg: "min-h-14 px-6 py-4 text-base",
  icon: "size-12",
  "icon-xs": "size-8",
  "icon-sm": "size-10",
  "icon-lg": "size-14",
} as const;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
};

function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-bold tracking-[0.08em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      data-slot="button"
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}

export { Button, buttonVariants };
