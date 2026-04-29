"use client";

import Link from "next/link";
import { ContentSection } from "@/components/layout/SectionLayout";
import { cn } from "@/utils/cn";

interface CharacterLinkSectionProps {
  className?: string;
}

// キャラクター紹介ページへの導線セクション
export default function CharacterLinkSection({
  className,
}: CharacterLinkSectionProps) {
  return (
    <ContentSection id="characters" title="キャラクター" className={className}>
      <div className="max-w-3xl mx-auto">
        {/* 簡単なティザーテキスト */}
        <p className="text-base md:text-lg leading-loose text-foreground text-center">
          VOID RED で出会う、過去と記憶に揺れる人々。
        </p>

        {/* 本文の斜め下 (右下) に MORE リンクを配置 */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/characters"
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
