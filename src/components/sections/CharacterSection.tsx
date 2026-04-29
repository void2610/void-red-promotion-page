"use client";

import SectionContainer from "@/components/ui/SectionContainer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { SectionTitle } from "@/components/ui/GradientText";
import Carousel from "@/components/ui/Carousel";
import CharacterDetailCard from "@/components/ui/CharacterDetailCard";
import { getMainCharacters } from "@/data/characters";
import { cn } from "@/utils/cn";
import { DURATION } from "@/config/animations";

type CharacterSize = "default" | "large";

interface CharacterSectionProps {
  className?: string;
  size?: CharacterSize;
}

// サイズごとのカルーセル最大幅
const carouselSizeClasses: Record<CharacterSize, string> = {
  default: "max-w-3xl",
  large: "max-w-6xl",
};

// キャラクターセクションコンポーネント
export default function CharacterSection({
  className,
  size = "default",
}: CharacterSectionProps) {
  const mainCharacters = getMainCharacters();

  return (
    <SectionContainer
      id="characters"
      className={cn("bg-transparent", className)}
    >
      <div className="space-y-12">
        {/* セクションタイトル (SectionTitle内部でBlurTextが文字ごとのアニメーションを行う) */}
        <SectionTitle>キャラクター</SectionTitle>

        {/* キャラクターカルーセル (画像左・テキスト右の詳細レイアウト) */}
        <AnimatedContainer
          variant="blurIn"
          duration={DURATION.MEDIUM}
          delay={0.2}
        >
          <Carousel
            items={mainCharacters.map((character, index) => (
              <CharacterDetailCard key={index} character={character} />
            ))}
            showNavigation={true}
            showIndicators={true}
            className={cn("w-full mx-auto", carouselSizeClasses[size])}
          />
        </AnimatedContainer>
      </div>
    </SectionContainer>
  );
}
