"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface BlurTextProps {
  text: string;
  className?: string;
  // 各文字に追加するクラス (グラデーション等)
  charClassName?: string;
  // 各文字のアニメーション開始遅延
  delay?: number;
  // 文字間のスタガー間隔 (秒)
  staggerDelay?: number;
  // スクロール連動かどうか (falseの場合は即時再生)
  triggerOnView?: boolean;
}

// 各文字のアニメーション定義 (ブラー + 下から上へ)
const charVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 16 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// 1文字ずつブラーエフェクトで表示するコンポーネント
export default function BlurText({
  text,
  className,
  charClassName,
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
              className={cn("inline-block", charClassName)}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </Fragment>
      ))}
    </motion.span>
  );
}
