import { ArrowLeft, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type LuxuryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  icon?: LucideIcon;
  className?: string;
};

export function LuxuryButton({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowLeft,
  className = "",
  ...props
}: LuxuryButtonProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-3 rounded-[8px] px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-novin-gold md:min-h-12",
    variant === "primary" ? "red-gradient-button text-white hover:-translate-y-0.5" : "",
    variant === "outline"
      ? "border border-[#9f762f] bg-novin-gold/[0.035] text-white hover:border-novin-gold hover:bg-novin-gold/10"
      : "",
    variant === "ghost"
      ? "text-novin-gold hover:text-white"
      : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      <Icon aria-hidden="true" className="h-4 w-4" />
    </>
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={props.type ?? "button"} {...props}>
      {content}
    </button>
  );
}
