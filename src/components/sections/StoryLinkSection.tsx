"use client";

import Link from "next/link";
import { ContentSection } from "@/components/layout/SectionLayout";
import { gameInfo } from "@/data/game-info";
import { cn } from "@/utils/cn";

interface StoryLinkSectionProps {
  className?: string;
}

// ストーリーページへの導線セクション (プレビュー)
export default function StoryLinkSection({
  className,
}: StoryLinkSectionProps) {
  // データのテンプレートリテラル由来の先頭改行・行頭インデントを除去
  const previewText = gameInfo.storyPreview
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join("\n");

  return (
    <ContentSection id="story" title="ストーリー" className={className}>
      <div className="max-w-3xl mx-auto">
        {/* プレビュー本文 (中央配置) */}
        <p className="text-base md:text-lg leading-loose text-foreground text-center whitespace-pre-line">
          {previewText}
        </p>

        {/* 本文の斜め下 (右下) に MORE リンクを配置 */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/story"
            className={cn(
              "inline-flex items-center gap-1 text-foreground/80 hover:text-accent-red",
              "text-base md:text-lg font-medium tracking-widest",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black rounded",
            )}
          >
            MORE
            <span aria-hidden="true">≫</span>
          </Link>
        </div>
      </div>
    </ContentSection>
  );
}
