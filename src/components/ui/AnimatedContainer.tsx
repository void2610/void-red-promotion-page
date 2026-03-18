"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";
import {
  AnimationVariant,
  animationPresets,
  scrollAnimation,
  DURATION,
  DELAY,
} from "@/config/animations";

interface AnimatedContainerProps
  extends Omit<
    HTMLMotionProps<"div">,
    "variants" | "initial" | "animate" | "transition"
  > {
  children: ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  className?: string;
  enableScrollAnimation?: boolean;
  stagger?: boolean;
  staggerDelay?: number;
  blur?: boolean;
}

// アニメーション付きコンテナーコンポーネント
export default function AnimatedContainer({
  children,
  variant = "blurInUp",
  duration = DURATION.DEFAULT,
  delay = DELAY.NONE,
  className,
  enableScrollAnimation = true,
  stagger = false,
  staggerDelay = 0.1,
  blur,
  ...props
}: AnimatedContainerProps) {
  // blur propが明示指定された場合はblurInUpバリアントを強制
  const resolvedVariant = blur === true ? "blurInUp" : blur === false ? "fadeInUp" : variant;
  const animationConfig = animationPresets[resolvedVariant];

  const motionProps = {
    variants: animationConfig.variants,
    transition: {
      ...animationConfig.transition,
      duration,
      delay: stagger ? delay : delay,
    },
    ...(enableScrollAnimation
      ? scrollAnimation
      : {
          initial: "initial",
          animate: "animate",
        }),
    ...props,
  };

  if (stagger) {
    return (
      <motion.div
        className={cn("relative", className)}
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay,
            },
          },
        }}
        {...(enableScrollAnimation
          ? scrollAnimation
          : {
              initial: "initial",
              animate: "animate",
            })}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={cn("relative", className)} {...motionProps}>
      {children}
    </motion.div>
  );
}

// スタガーアニメーション用のアイツムコンポーネント
interface AnimatedItemProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  className?: string;
}

export function AnimatedItem({
  children,
  className,
  ...props
}: AnimatedItemProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      variants={{
        initial: {
          opacity: 0,
          y: 30,
          filter: "blur(12px)",
        },
        animate: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: DURATION.MEDIUM,
            ease: "easeOut",
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
