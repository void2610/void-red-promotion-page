"use client";

import { ContentSection } from "@/components/layout/SectionLayout";
import { gameInfo } from "@/data/game-info";

interface InfoSectionProps {
  className?: string;
}

// その他情報セクションコンポーネント
export default function InfoSection({ className }: InfoSectionProps) {
  return (
    <ContentSection id="info" title="その他の情報" className={className}>
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <p className="text-lg text-foreground">
          <strong className="text-foreground">タイトル:</strong>{" "}
          <span className="text-foreground-muted">{gameInfo.title}</span>
        </p>
        <p className="text-lg text-foreground">
          <strong className="text-foreground">ジャンル:</strong>{" "}
          <span className="text-foreground-muted">
            {gameInfo.genre.join(", ")}
          </span>
        </p>
        <p className="text-lg text-foreground">
          <strong className="text-foreground">制作:</strong>{" "}
          <span className="text-foreground-muted">{gameInfo.developer}</span>
        </p>
        <p className="text-lg text-foreground">
          <strong className="text-foreground">プラットフォーム:</strong>{" "}
          <span className="text-foreground-muted">{gameInfo.platforms}</span>
        </p>
        <p className="text-lg text-foreground">
          <strong className="text-foreground">価格:</strong>{" "}
          <span className="text-foreground-muted">{gameInfo.price}</span>
        </p>
        <p className="text-lg text-foreground">
          <strong className="text-foreground">対応言語:</strong>{" "}
          <span className="text-foreground-muted">
            {gameInfo.languages.join(", ")}
          </span>
        </p>
      </div>
    </ContentSection>
  );
}
