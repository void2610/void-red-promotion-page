"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import ParticleEffect from "@/components/ui/ParticleEffect";
import { gameInfo } from "@/data/game-info";
import { cn } from "@/utils/cn";
import { DURATION, DELAY } from "@/config/animations";

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
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          {/* テキストコンテンツ */}
          <AnimatedContainer
            variant="fadeInUp"
            duration={DURATION.SLOW}
            className="text-center max-w-4xl"
          >
            {/* ロゴ */}
            <motion.div
              className="mb-8 flex justify-center"
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
              className="text-foreground/90 text-xl md:text-2xl mb-8 font-medium sm:whitespace-nowrap"
              style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.DEFAULT, delay: DELAY.MEDIUM }}
            >
              {gameInfo.tagline}
            </motion.p>

            {/* ゲーム説明 */}
            <motion.p
              className="text-foreground/80 text-lg leading-relaxed mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.DEFAULT, delay: DELAY.LARGE }}
            >
              {gameInfo.description}
            </motion.p>
          </AnimatedContainer>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.DEFAULT, delay: 1.5 }}
        >
          <motion.div
            className="w-8 h-12 md:w-10 md:h-16 border-2 md:border-[3px] border-white/80 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1.5 h-4 md:w-2 md:h-5 bg-white rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
