"use client";

import Image from "next/image";
import type { Character } from "@/data/characters";
import { cn } from "@/utils/cn";

interface CharacterDetailCardProps {
  character: Character;
  className?: string;
}

// プロフィール 1 行 (ラベル: 値)
function ProfileItem({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <p className="text-foreground/90 text-base">
      {label}：{value}
    </p>
  );
}

// 画像左・テキスト右の詳細レイアウトでキャラクターを表示するカード
export default function CharacterDetailCard({
  character,
  className,
}: CharacterDetailCardProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-10 items-start",
        "px-4 md:px-10 py-8 md:py-10",
        "bg-black/50 rounded-lg backdrop-blur-sm",
        className,
      )}
    >
      {/* 左: キャラクター画像 (縦長・大きめ) */}
      <div className="relative w-full aspect-[3/4] md:aspect-[2/3] rounded-lg overflow-hidden">
        <Image
          src={character.imageUrl}
          alt={character.name}
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority={false}
        />
      </div>

      {/* 右: テキスト情報 */}
      <div className="space-y-6 md:pt-4">
        {/* 肩書き (タグライン) */}
        {character.title && (
          <p className="text-foreground/80 text-lg md:text-xl">
            {character.title}
          </p>
        )}

        {/* 名前 + ローマ字 */}
        <div className="space-y-1">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {character.name}
          </h2>
          {character.nameEn && (
            <p className="text-foreground/60 text-lg tracking-wider">
              {character.nameEn}
            </p>
          )}
        </div>

        {/* プロフィール (誕生日・年齢・身長) — 何か 1 つでもあれば描画 */}
        {(character.birthday || character.age || character.height) && (
          <div className="space-y-2 pt-2">
            <ProfileItem label="誕生日" value={character.birthday} />
            <ProfileItem label="年齢" value={character.age} />
            <ProfileItem label="身長" value={character.height} />
          </div>
        )}

        {/* 説明文 */}
        {character.description && (
          <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
            {character.description}
          </p>
        )}

        {/* セリフ */}
        {character.quote && (
          <p className="text-foreground/80 italic leading-relaxed whitespace-pre-line border-l-2 border-accent-red pl-4">
            「{character.quote}」
          </p>
        )}
      </div>
    </div>
  );
}
