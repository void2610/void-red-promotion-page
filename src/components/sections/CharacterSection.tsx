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

interface CharacterSectionProps {
  className?: string;
}

// キャラクターカードコンポーネント
function CharacterCard({ character }: { character: Character }) {
  return (
    <Card
      variant="overlay"
      src={character.imageUrl}
      alt={character.name}
      title={character.name}
      subtitle={character.title}
      description={character.description}
      aspectRatio="square"
    />
  );
}

// キャラクターセクションコンポーネント
export default function CharacterSection({ className }: CharacterSectionProps) {
  const mainCharacters = getMainCharacters();

  return (
    <SectionContainer
      id="characters"
      className={cn("bg-transparent", className)}
    >
      <div className="space-y-12">
        {/* セクションタイトル */}
        <AnimatedContainer variant="fadeInUp" duration={DURATION.DEFAULT}>
          <SectionTitle>キャラクター</SectionTitle>
        </AnimatedContainer>

        {/* キャラクターカルーセル */}
        <AnimatedContainer
          variant="fadeInUp"
          duration={DURATION.MEDIUM}
          delay={0.2}
        >
          <Carousel
            items={mainCharacters.map((character, index) => (
              <CharacterCard key={index} character={character} />
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
