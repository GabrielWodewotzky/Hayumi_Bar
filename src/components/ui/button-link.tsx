import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "solid" | "outline" | "light" | "dark";

const variants: Record<Variant, string> = {
  solid: "bg-shu text-white",
  outline: "border-2 border-current",
  light: "bg-washi text-sumi",
  dark: "bg-sumi text-washi",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "solid", external = false, className = "" }: Props) {
  const cls = `inline-block rounded-full px-8 py-4 font-semibold transition-transform duration-150 ease-out-strong active:scale-[0.97] ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}