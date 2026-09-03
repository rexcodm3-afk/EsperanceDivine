import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
