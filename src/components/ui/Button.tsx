import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-premium font-medium text-base transition-all duration-300 backdrop-blur-md shadow-sm";
  const variants = {
    primary: "bg-accent text-background hover:bg-opacity-90 font-semibold shadow-[0_0_20px_rgba(0,210,106,0.3)]",
    secondary: "bg-surface text-primary border border-white/10 hover:border-white/25",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
