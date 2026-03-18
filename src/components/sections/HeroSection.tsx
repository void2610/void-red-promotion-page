"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import ParticleEffect from "@/components/ui/ParticleEffect";
import SteamWidget from "@/components/ui/SteamWidget";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
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
              className="text-foreground/90 text-xl md:text-2xl mb-12 font-medium break-all px-4"
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: DURATION.MEDIUM, delay: DELAY.MEDIUM, ease: "easeOut" }}
            >
              {gameInfo.tagline}
            </motion.p>

            {/* ゲーム説明 */}
            <motion.p
              className="text-foreground/80 text-lg leading-relaxed mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: DURATION.MEDIUM, delay: DELAY.LARGE, ease: "easeOut" }}
            >
              {gameInfo.description}
            </motion.p>

            {/* プロモーション動画 */}
            <div className="mb-12 max-w-2xl mx-auto">
              <YouTubeEmbed
                videoId="Tl3ZYcEbP8g"
                title="VOID RED - プロモーション動画"
                delay={1.0}
              />
            </div>

            {/* Steamウィジェット */}
            <SteamWidget appId="3997140" />
          </AnimatedContainer>
        </div>
      </div>

    </SectionContainer>
  );
}
