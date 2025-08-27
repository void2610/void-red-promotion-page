"use client";

import { ContentSection } from "@/components/layout/SectionLayout";
import { gameInfo } from "@/data/game-info";

interface GameIntroSectionProps {
  className?: string;
}

// ゲーム紹介セクションコンポーネント
export default function GameIntroSection({ className }: GameIntroSectionProps) {
  return (
    <ContentSection id="about" title="ゲーム紹介" className={className}>
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed text-foreground-muted whitespace-pre-line">
          {gameInfo.longDescription}
        </p>
      </div>
    </ContentSection>
  );
}
