"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "primary" | "secondary";
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

const variantClasses = {
  primary: "border-red-500 border-t-transparent",
  secondary: "border-void-500 border-t-transparent",
};

// ローディングスピナーコンポーネント
export default function LoadingSpinner({
  size = "md",
  className,
  variant = "primary",
}: LoadingSpinnerProps) {
  return (
    <motion.div
      className={cn(
        "border-2 rounded-full",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
}

// VOID REDテーマローダー
export function VoidRedLoader({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-red-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-2 left-2 w-12 h-12 border-4 border-void-500/50 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-4 left-4 w-8 h-8 bg-red-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
