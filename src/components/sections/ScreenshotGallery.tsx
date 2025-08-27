"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { SectionTitle } from "@/components/ui/GradientText";
import Carousel from "@/components/ui/Carousel";
import { getAllScreenshots } from "@/data/screenshots";
import { cn } from "@/utils/cn";
import { DURATION } from "@/config/animations";

interface ScreenshotGalleryProps {
  className?: string;
}

// スクリーンショット表示アイテムコンポーネント
function ScreenshotItem({
  screenshot,
}: {
  screenshot: { title: string; imageUrl: string };
}) {
  return (
    <div className="relative aspect-video w-full max-w-4xl mx-auto group cursor-pointer">
      <Image
        src={screenshot.imageUrl}
        alt={screenshot.title}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />

      {/* ズームオーバーレイ */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

      {/* ズームアイコン */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 bg-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-foreground" />
        </div>
      </div>
    </div>
  );
}

// スクリーンショットギャラリーコンポーネント
export default function ScreenshotGallery({
  className,
}: ScreenshotGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const screenshots = getAllScreenshots();

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // カルーセル用アイテム作成
  const carouselItems = screenshots.map((screenshot, index) => (
    <div key={index} onClick={() => openModal(screenshot.imageUrl)}>
      <ScreenshotItem screenshot={screenshot} />
    </div>
  ));

  return (
    <>
      <SectionContainer
        id="screenshots"
        className={cn("bg-transparent", className)}
      >
        <div className="space-y-12">
          {/* セクションタイトル */}
          <AnimatedContainer variant="fadeInUp" duration={DURATION.DEFAULT}>
            <SectionTitle>スクリーンショット</SectionTitle>
          </AnimatedContainer>

          {/* スクリーンショットカルーセル */}
          <AnimatedContainer
            variant="fadeInUp"
            duration={DURATION.MEDIUM}
            delay={0.2}
          >
            <Carousel
              items={carouselItems}
              showNavigation={true}
              showIndicators={true}
              className="w-full"
            />
          </AnimatedContainer>
        </div>
      </SectionContainer>

      {/* モーダル */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="スクリーンショット"
                fill
                className="object-contain"
                sizes="100vw"
              />

              {/* 閉じるボタン */}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
