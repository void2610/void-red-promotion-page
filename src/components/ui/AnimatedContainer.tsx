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
}

// アニメーション付きコンテナーコンポーネント
export default function AnimatedContainer({
  children,
  variant = "fadeInUp",
  duration = DURATION.DEFAULT,
  delay = DELAY.NONE,
  className,
  enableScrollAnimation = true,
  stagger = false,
  staggerDelay = 0.1,
  ...props
}: AnimatedContainerProps) {
  const animationConfig = animationPresets[variant];

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
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: DURATION.DEFAULT,
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
