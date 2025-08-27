"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";
import LoadingSpinner from "./LoadingSpinner";
import { hoverScale } from "@/config/animations";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

const variantClasses = {
  primary:
    "bg-accent-red hover:bg-accent-red-dark text-foreground shadow-red border-accent-red hover:border-accent-red-dark",
  secondary:
    "bg-card hover:bg-card text-foreground shadow-void border-custom hover:border-custom",
  outline:
    "bg-transparent hover:bg-background-alt text-accent-red border-accent-red hover:border-accent-red-dark",
  ghost:
    "bg-transparent hover:bg-background-alt text-accent-red border-transparent",
  danger:
    "bg-accent-red-dark hover:bg-red-800 text-foreground shadow-red border-accent-red-dark hover:border-red-800",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm h-8",
  md: "px-4 py-2 text-base h-10",
  lg: "px-6 py-3 text-lg h-12",
  xl: "px-8 py-4 text-xl h-14",
};

// カスタムボタンコンポーネント
export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      disabled={isDisabled}
      {...(!isDisabled ? hoverScale : {})}
      {...props}
    >
      {loading && (
        <LoadingSpinner
          size="sm"
          variant={variant === "primary" ? "secondary" : "primary"}
        />
      )}
      {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span className={cn(loading && "opacity-0")}>{children}</span>
      {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </motion.button>
  );
}

// VOID REDテーマボタン
interface VoidRedButtonProps extends Omit<ButtonProps, "variant"> {
  glowEffect?: boolean;
}

export function VoidRedButton({
  children,
  glowEffect = true,
  className,
  ...props
}: VoidRedButtonProps) {
  return (
    <Button
      variant="primary"
      className={cn(
        "bg-void-red-gradient hover:shadow-lg hover:shadow-red-500/25 transform-gpu",
        glowEffect && "hover:shadow-red-500/50 animate-void-glow",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

// アウトラインボタン
export function OutlineButton({
  children,
  className,
  ...props
}: Omit<ButtonProps, "variant">) {
  return (
    <Button
      variant="outline"
      className={cn("backdrop-blur-sm", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

// ゴーストボタン
export function GhostButton({
  children,
  className,
  ...props
}: Omit<ButtonProps, "variant">) {
  return (
    <Button variant="ghost" className={className} {...props}>
      {children}
    </Button>
  );
}
