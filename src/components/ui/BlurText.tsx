"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface BlurTextProps {
  text: string;
  className?: string;
  // 各文字のアニメーション開始遅延
  delay?: number;
  // 文字間のスタガー間隔 (秒)
  staggerDelay?: number;
  // スクロール連動かどうか (falseの場合は即時再生)
  triggerOnView?: boolean;
}

// 各文字のアニメーション定義 (y移動なし・ブラーのみ)
const charVariants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// 1文字ずつブラーエフェクトで表示するコンポーネント
export default function BlurText({
  text,
  className,
  delay = 0,
  staggerDelay = 0.05,
  triggerOnView = true,
}: BlurTextProps) {
  const animProps = triggerOnView
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.3 },
      }
    : { initial: "hidden" as const, animate: "visible" as const };

  // 改行を保持しつつ文字列を分割してフラット化
  const lines = text.split("\n");

  return (
    <motion.span
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      {...animProps}
      className={cn("inline", className)}
    >
      {lines.map((line, lineIndex) => (
        <Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          {line.split("").map((char, charIndex) => (
            <motion.span
              key={`${lineIndex}-${charIndex}`}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </Fragment>
      ))}
    </motion.span>
  );
}
