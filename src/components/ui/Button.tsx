import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-medium rounded-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95";

  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/50",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white",
    outline:
      "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
