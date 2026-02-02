import Link from "next/link";
import { ReactNode } from "react";

type Variant = "solid" | "outline";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition";

  const variants = {
    solid: "bg-black text-white hover:bg-neutral-800",
    outline:
      "border border-white/40 text-white hover:bg-white hover:text-black",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
