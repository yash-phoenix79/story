"use client";
import React, { useState, useEffect } from "react";
import { GetIcon } from "@/components/svg-icons";
import { cva } from "class-variance-authority";

const InputStyles = cva(["outline-none bg-transparent border-0"], {
  variants: {
    intent: {
      primary: [
        "w-full",
        "text-gray-900",
        "placeholder-gray-600",
        "bg-gray-50",
        "border",
        "rounded-md",
        "form-input",
      ],
      primarySearch: [
        "w-full",
        "pl-8 ",
        "pr-2",
        "text-gray-400",
        "placeholder-gray-600",
        "bg-gray-50",
        "border",
        "rounded-md",
        "form-input",
      ],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
        "form-input",
      ],
    },
    size: {
      sm: ["text-sm", "py-1", "px-2"],
      md: ["text-base", "py-2", "px-4"],
      lg: ["text-lg", "py-3", "px-6"],
      xl: ["text-xl", "py-4", "px-8"],
      // Add more sizes as needed...
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "md",
      class: "",
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

type props = {
  label?: string;
  intent?: "primarySearch" | "primary" | "secondary";
  placeholder?: string;
  name?: string;
  className?: string;
  value?: string | "";
  touched?: boolean | undefined;
  error?: string;
  autofocus?: boolean;
  type?: string;
  size?: "md" | "sm" | "lg" | "xl";
  setFieldValue?: (name: string, value: string | number) => void;
  updateValue?: (value: string | number) => void;
  disabled?: boolean;
  onClick?: () => void;
  onBlur?: any | null;
  passwordIconColor?: string;
};

const Input = ({
  label,
  placeholder,
  className,
  intent,
  size,
  value,
  type,
  autofocus,
  setFieldValue,
  disabled,
  updateValue,
  name,
  error,
  touched,
  onBlur,
  onClick,
  passwordIconColor,
}: props) => {
  const [inputType, setInputType] = useState(type);
  useEffect(() => {
    setInputType(type);
  }, [type]);

  return (
    <>
      {label && (
        <div className="mb-1">
          <label className="pb-3 font-semibold">
            {label} {<span className="text-red-900"> {"  "}*</span>}
          </label>
        </div>
      )}
      <div className="relative flex items-center border-2 border-gray-500 rounded-md">
        <input
          autoFocus={autofocus}
          type={inputType}
          className={InputStyles({
            intent,
            size,
            class: ` ${className} ${
              disabled ? "!bg-gray-100 border-gray-300 cursor-not-allowed" : ""
            } }`,
          })}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onBlur={onBlur}
          onChange={(e) => {
            setFieldValue && name && setFieldValue(name, e.target.value);
            updateValue && name && updateValue(e.target.value);
          }}
        />
        {type == "password" && (
          <span
            className={`mr-1 ${passwordIconColor}`}
            onClick={() => {
              setInputType(inputType === "text" ? "password" : "text");
            }}
          >
            <GetIcon
              type={inputType === "password" ? "hidePassword" : "showPassword"}
              fill="#fff"
            />
          </span>
        )}
      </div>

      {error && touched && (
        <div className="text-red-600 animate-pulse transition-all pt-2">
          {error}
        </div>
      )}
    </>
  );
};

export default Input;
