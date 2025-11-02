import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 ${className}`}
    >
      {children}
    </span>
  );
}
