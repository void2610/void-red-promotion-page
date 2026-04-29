"use client";

import { ContentSection } from "@/components/layout/SectionLayout";
import BlurText from "@/components/ui/BlurText";
import { gameInfo } from "@/data/game-info";

interface StorySectionProps {
  className?: string;
}

// ストーリーセクションコンポーネント
export default function StorySection({ className }: StorySectionProps) {
  return (
    <ContentSection id="story" title="ストーリー" className={className}>
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed text-foreground-muted">
          <BlurText
            text={gameInfo.longDescription}
            staggerDelay={0.02}
          />
        </p>
      </div>
    </ContentSection>
  );
}
