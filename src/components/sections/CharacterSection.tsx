"use client";

import SectionContainer from "@/components/ui/SectionContainer";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { SectionTitle } from "@/components/ui/GradientText";
import Carousel from "@/components/ui/Carousel";
import Card from "@/components/ui/Card";
import { getMainCharacters } from "@/data/characters";
import type { Character } from "@/data/characters";
import { cn } from "@/utils/cn";
import { DURATION } from "@/config/animations";

type CharacterSize = "default" | "large";

interface CharacterSectionProps {
  className?: string;
  size?: CharacterSize;
}

// サイズごとのカード最大幅 (twMerge により Card 内部の max-w-2xl を上書きする)
const cardSizeClasses: Record<CharacterSize, string> = {
  default: "",
  large: "max-w-4xl",
};

// キャラクターカードコンポーネント
function CharacterCard({
  character,
  size = "default",
}: {
  character: Character;
  size?: CharacterSize;
}) {
  return (
    <Card
      variant="overlay"
      src={character.imageUrl}
      alt={character.name}
      title={character.name}
      subtitle={character.title}
      description={character.description}
      aspectRatio="square"
      objectPosition="top"
      className={cardSizeClasses[size]}
    />
  );
}

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

        {/* キャラクターカルーセル */}
        <AnimatedContainer
          variant="blurIn"
          duration={DURATION.MEDIUM}
          delay={0.2}
        >
          <Carousel
            items={mainCharacters.map((character, index) => (
              <CharacterCard key={index} character={character} size={size} />
            ))}
            showNavigation={true}
            showIndicators={true}
            className="w-full"
          />
        </AnimatedContainer>
      </div>
    </SectionContainer>
  );
}
