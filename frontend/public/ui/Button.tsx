"use client";
import React, { useRef } from "react";
import { cva } from "class-variance-authority";

const button = cva(["button  text-center"], {
  variants: {
    intent: {
      primary: [
        "bg-blue-400",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
        "transition duration-300 ease-in-out",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
        "transition duration-300 ease-in-out",
      ],
      tertiary: [
        "bg-yellow-400",
        "text-black",
        "border-transparent",
        "hover:bg-yellow-500",
        "transition duration-300 ease-in-out",
      ],
      success: [
        "bg-green-500",
        "text-white",
        "border-transparent",
        "hover:bg-green-600",
        "transition duration-300 ease-in-out",
      ],
      danger: [
        "bg-red-500",
        "text-white",
        "border-transparent",
        "hover:bg-red-600",
        "transition duration-300 ease-in-out",
      ],
      warning: [
        "bg-yellow-500",
        "text-white",
        "border-transparent",
        "hover:bg-yellow-600",
        "transition duration-300 ease-in-out",
      ],
      info: [
        "bg-blue-400",
        "text-white",
        "border-transparent",
        "hover:bg-blue-500",
        "transition duration-300 ease-in-out",
      ],
      dark: [
        "bg-gray-800",
        "text-white",
        "border-transparent",
        "hover:bg-gray-900",
        "transition duration-300 ease-in-out",
      ],
      light: [
        "bg-gray-200",
        "text-gray-800",
        "border-transparent",
        "hover:bg-gray-300",
        "transition duration-300 ease-in-out",
      ],
      accent: [
        "bg-purple-500",
        "text-white",
        "border-transparent",
        "hover:bg-purple-600",
        "transition duration-300 ease-in-out",
      ],
      orange: [
        "bg-orange-500",
        "text-white",
        "border-transparent",
        "hover:bg-orange-600",
        "transition duration-300 ease-in-out",
      ],
      purple: [
        "bg-purple-500",
        "text-white",
        "border-transparent",
        "hover:bg-purple-600",
        "transition duration-300 ease-in-out",
      ],
    },
    size: {
      sm: ["text-sm", "py-1", "px-2"],
      md: ["text-base", "py-2", "px-4"],
      lg: ["text-lg", "py-3", "px-6"],
      xl: ["text-xl", "py-4", "px-8"],
      // Add more sizes as needed...
    },
    rounded: {
      sm: ["rounded-sm"],
      lg: ["rounded-lg"],
      md: ["rounded-md"],
      xl: ["rounded-xl"],

      // Add more sizes as needed...
    },
  },
  compoundVariants: [
    { intent: "primary", size: "md", rounded: "md", class: "" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "md",
    rounded: "md",
  },
});

type ButtonProps = {
  children: React.ReactNode;
  intent?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "danger"
    | "orange"
    | "info"
    | "warning"
    | "dark"
    | "light"
    | "accent"
    | "purple";
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "sm" | "md" | "lg" | "xl";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  as?: string;
  disabled?: boolean;
  btnref?: any;
};

const Button = ({
  onClick,
  className,
  intent,
  rounded,
  size,
  as,
  type,
  disabled,
  children,
  btnref,
}: ButtonProps) => {
  const buttonref: any = useRef();

  return(
    as === "button" ? (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={button({ intent, size, rounded,  class: `${className} ${disabled && 'cursor-not-allowed'}` })}
      ref={btnref || buttonref}
    >
      {children}
    </button>
  ) : (
    <button
      aria-disabled={disabled}
      onClick={onClick}
      className={button({ intent, size, rounded, class: `${className} ${disabled && 'cursor-not-allowed'}`  })}
      ref={buttonref || btnref}
    >
      {children}
    </button>
  ));
};

export default Button;
