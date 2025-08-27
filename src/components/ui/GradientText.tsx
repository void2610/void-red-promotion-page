import { ReactNode, createElement } from "react";
import { cn } from "@/utils/cn";

type GradientVariant = "red" | "void" | "void-red" | "primary";
type TextSize =
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";
type HeadingTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

interface GradientTextProps {
  children: ReactNode;
  variant?: GradientVariant;
  size?: TextSize;
  as?: HeadingTag;
  className?: string;
  animate?: boolean;
}

const gradientVariants = {
  red: "gradient-text",
  void: "gradient-text-void",
  "void-red": "gradient-text-void-red",
  primary: "gradient-text",
};

const sizeClasses = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl md:text-3xl",
  "3xl": "text-3xl md:text-4xl",
  "4xl": "text-4xl md:text-5xl lg:text-6xl",
  "5xl": "text-5xl md:text-6xl lg:text-7xl",
  "6xl": "text-6xl md:text-7xl lg:text-8xl",
};

// グラデーションテキストコンポーネント
export default function GradientText({
  children,
  variant = "red",
  size = "base",
  as = "span",
  className,
  animate = false,
}: GradientTextProps) {
  const gradientClass = gradientVariants[variant];
  const sizeClass = sizeClasses[size];

  return createElement(
    as,
    {
      className: cn(
        "font-bold tracking-tight leading-tight",
        gradientClass,
        sizeClass,
        animate && "transition-all duration-300 hover:scale-105",
        className,
      ),
    },
    children,
  );
}

// 特定のサイズとスタイルを持つプリセットコンポーネント
export function HeroTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <GradientText
      as="h1"
      variant="void-red"
      size="4xl"
      animate
      className={cn("mb-6 text-center", className)}
    >
      {children}
    </GradientText>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <GradientText
      as="h2"
      variant="red"
      size="2xl"
      className={cn("mb-8 text-center", className)}
    >
      {children}
    </GradientText>
  );
}

export function SubTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <GradientText
      as="h3"
      variant="void"
      size="xl"
      className={cn("mb-4", className)}
    >
      {children}
    </GradientText>
  );
}
