"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import ParticleEffect from "@/components/ui/ParticleEffect";
import { gameInfo } from "@/data/game-info";
import { cn } from "@/utils/cn";
import { voidRedGlow, DURATION, DELAY } from "@/config/animations";

interface HeroSectionProps {
  className?: string;
}

// VOID REDのHeroセクションコンポーネント
export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <SectionContainer
      id="hero"
      fullWidth
      className={cn(
        "min-h-screen flex items-center justify-center relative overflow-hidden",
        className,
      )}
    >
      {/* 背景エフェクト */}
      <div className="absolute inset-0">
        {/* パーティクルエフェクト */}
        <ParticleEffect />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* テキストコンテンツ */}
          <AnimatedContainer
            variant="fadeInLeft"
            duration={DURATION.SLOW}
            className="text-center lg:text-left"
          >
            {/* ロゴ */}
            <motion.div
              className="mb-8 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: DURATION.DEFAULT, delay: DELAY.SMALL }}
            >
              <Image
                src="/images/assets/logo.png"
                alt={`${gameInfo.title} Logo`}
                width={500}
                height={250}
                className="object-contain w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px]"
                priority
              />
            </motion.div>

            {/* タグライン */}
            <motion.p
              className="text-foreground/90 text-xl md:text-2xl mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.DEFAULT, delay: DELAY.MEDIUM }}
            >
              {gameInfo.tagline}
            </motion.p>

            {/* ゲーム説明 */}
            <motion.p
              className="text-foreground/80 text-lg leading-relaxed mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.DEFAULT, delay: DELAY.LARGE }}
            >
              {gameInfo.description}
            </motion.p>
          </AnimatedContainer>

          {/* ビジュアルコンテンツ */}
          <AnimatedContainer
            variant="fadeInRight"
            duration={DURATION.SLOW}
            delay={DELAY.MEDIUM}
            className="relative"
          >
            <div className="relative">
              {/* メインイメージ */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-500/25"
                {...voidRedGlow}
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src="/images/void_red_key_visual.jpg"
                    alt={`${gameInfo.title} - メインビジュアル`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* オーバーレイグラデーション */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void-900/50 to-transparent" />
                </div>
              </motion.div>

              {/* サイドエフェクト */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-void-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </AnimatedContainer>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.DEFAULT, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-foreground/70 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
