import Image from "next/image";
import { cn } from "@/utils/cn";

interface SectionBackgroundProps {
  // 背景に表示する画像パス
  image: string;
  alt?: string;
  // 0〜1。画像の上に黒オーバーレイを乗せる場合に指定
  overlayOpacity?: number;
  // 画像の表示位置 (object-position 用、CSS 値そのまま)
  position?: string;
  // ファーストビュー等で優先読み込みしたい場合
  priority?: boolean;
  className?: string;
}

// 親要素 (position: relative) に対して絶対配置の背景画像 (＋任意で黒オーバーレイ) を提供するコンポーネント
// 使用例: SectionContainer の中に置き、コンテンツは `relative z-10` で前面に出す
export default function SectionBackground({
  image,
  alt = "",
  overlayOpacity = 0,
  position = "center",
  priority = false,
  className,
}: SectionBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: position }}
        sizes="100vw"
        priority={priority}
      />
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}
