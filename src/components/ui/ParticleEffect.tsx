"use client";

import { motion } from "framer-motion";
import {
  defaultParticles,
  type ParticleData,
  type ParticleConfig,
} from "@/data/particles";
import { cn } from "@/utils/cn";

interface ParticleEffectProps {
  className?: string;
  particles?: ParticleData[];
  config?: ParticleConfig;
}

// パーティクルエフェクトコンポーネント
export default function ParticleEffect({
  className,
  particles = defaultParticles,
  config = {},
}: ParticleEffectProps) {
  // デフォルト設定
  const {
    count = 20,
    color = "bg-red-500/30",
    size = 0.5, // 0.5rem = 8px
    opacity = [0.3, 0.8, 0.3],
    movement = {
      yRange: [-20, 20, -20],
      scaleRange: [0.5, 1, 0.5],
    },
  } = config;

  // 使用するパーティクル数を制限
  const activeParticles = particles.slice(0, count);

  return (
    <div className={cn("absolute inset-0", className)}>
      {activeParticles.map((particle, i) => (
        <motion.div
          key={i}
          className={cn("absolute rounded-full", color)}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${size}rem`,
            height: `${size}rem`,
          }}
          animate={{
            y: movement.yRange,
            opacity: opacity,
            scale: movement.scaleRange,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
