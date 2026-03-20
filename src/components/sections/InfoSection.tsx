"use client";

import { ContentSection } from "@/components/layout/SectionLayout";
import BlurText from "@/components/ui/BlurText";
import { gameInfo } from "@/data/game-info";

interface InfoSectionProps {
  className?: string;
}

// スペック行データ
const specRows = [
  { label: "タイトル", value: gameInfo.title },
  { label: "ジャンル", value: gameInfo.genre.join(", ") },
  { label: "制作", value: gameInfo.developer },
  { label: "プラットフォーム", value: gameInfo.platforms },
  { label: "価格", value: gameInfo.price },
  { label: "対応言語", value: gameInfo.languages.join(", ") },
] as const;

// その他情報セクションコンポーネント
export default function InfoSection({ className }: InfoSectionProps) {
  return (
    <ContentSection id="info" title="その他の情報" className={className}>
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        {specRows.map(({ label, value }, i) => {
          const rowDelay = i * 0.1;
          const valueDelay = rowDelay + label.length * 0.06 + 0.08;
          return (
            <p key={label} className="text-lg text-foreground">
              <strong className="text-foreground">
                <BlurText text={`${label}:`} delay={rowDelay} staggerDelay={0.06} />
              </strong>
              {" "}
              <span className="text-foreground-muted">
                <BlurText text={value} delay={valueDelay} staggerDelay={0.03} />
              </span>
            </p>
          );
        })}
      </div>
    </ContentSection>
  );
}
