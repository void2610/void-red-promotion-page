"use client";

import { ReactNode } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { SectionTitle } from "@/components/ui/GradientText";
import { cn } from "@/utils/cn";
import { DURATION } from "@/config/animations";

interface SectionLayoutProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
  background?: "transparent" | "primary" | "alt";
  contentAnimation?: {
    variant?:
      | "fadeInUp"
      | "fadeInDown"
      | "fadeInLeft"
      | "fadeInRight"
      | "scaleIn"
      | "blurIn"
      | "blurInUp";
    duration?: number;
    delay?: number;
  };
}

const backgroundClasses = {
  transparent: "bg-transparent",
  primary: "bg-background",
  alt: "bg-background-alt",
};

// セクションレイアウトテンプレート
export default function SectionLayout({
  id,
  title,
  children,
  className,
  fullWidth = false,
  noPadding = false,
  background = "transparent",
  contentAnimation = {
    variant: "blurIn" as const,
    duration: DURATION.MEDIUM,
    delay: 0.2,
  },
}: SectionLayoutProps) {
  return (
    <SectionContainer
      id={id}
      fullWidth={fullWidth}
      noPadding={noPadding}
      className={cn(backgroundClasses[background], className)}
    >
      <div className="space-y-8">
        {/* SectionTitle内部でBlurTextが文字ごとのアニメーションを行う */}
        {title && <SectionTitle>{title}</SectionTitle>}

        <AnimatedContainer
          variant={contentAnimation.variant}
          duration={contentAnimation.duration}
          delay={contentAnimation.delay}
        >
          {children}
        </AnimatedContainer>
      </div>
    </SectionContainer>
  );
}

// セクション専用のプリセットエクスポート
export const HeroLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <SectionContainer
    id="hero"
    fullWidth
    className={cn(
      "min-h-screen flex items-center justify-center relative overflow-hidden",
      className,
    )}
  >
    {children}
  </SectionContainer>
);

export const ContentSection = ({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) => (
  <SectionLayout
    id={id}
    title={title}
    className={className}
    background="transparent"
  >
    {children}
  </SectionLayout>
);

export const AlternateSection = ({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) => (
  <SectionLayout id={id} title={title} className={className} background="alt">
    {children}
  </SectionLayout>
);
