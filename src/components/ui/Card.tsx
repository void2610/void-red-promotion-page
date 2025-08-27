"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface CardProps {
  className?: string;
  children?: ReactNode;
  hover?: boolean;
  variant?: "default" | "image" | "overlay";
}

interface ImageCardProps extends Omit<CardProps, "variant" | "children"> {
  variant: "image";
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait";
  overlay?: ReactNode;
  showOverlayOnHover?: boolean;
}

interface OverlayCardProps extends Omit<CardProps, "variant" | "children"> {
  variant: "overlay";
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  description?: string;
  aspectRatio?: "square" | "video" | "portrait";
}

type AllCardProps = CardProps | ImageCardProps | OverlayCardProps;

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
};

// 基本カードコンポーネント
function BaseCard({ className, children, hover = true }: CardProps) {
  return (
    <div className={cn("card-base", hover && "card-hover", className)}>
      {children}
    </div>
  );
}

// 画像カードコンポーネント
function ImageCard({
  className,
  src,
  alt,
  aspectRatio = "square",
  overlay,
  showOverlayOnHover = false,
  hover = true,
}: ImageCardProps) {
  return (
    <div className={cn("relative group", className)}>
      <div
        className={cn(
          "relative rounded-lg overflow-hidden",
          aspectRatioClasses[aspectRatio],
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "object-cover",
            hover && "transition-transform duration-300 group-hover:scale-105",
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
        />

        {overlay && (
          <div
            className={cn(
              "absolute inset-0",
              showOverlayOnHover &&
                "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            )}
          >
            {overlay}
          </div>
        )}
      </div>
    </div>
  );
}

// オーバーレイ付き画像カードコンポーネント
function OverlayCard({
  className,
  src,
  alt,
  title,
  subtitle,
  description,
  aspectRatio = "square",
  hover = true,
}: OverlayCardProps) {
  return (
    <ImageCard
      className={cn("w-full max-w-2xl mx-auto", className)}
      src={src}
      alt={alt}
      aspectRatio={aspectRatio}
      hover={hover}
      showOverlayOnHover
      overlay={
        <>
          {/* グラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* コンテンツオーバーレイ */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-2">{title}</h3>

            {subtitle && (
              <p className="text-accent-red text-lg font-medium mb-3">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-foreground/90 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </>
      }
    />
  );
}

// メインCardコンポーネント（型安全なオーバーロード）
export default function Card(props: AllCardProps) {
  if (props.variant === "image") {
    return <ImageCard {...props} />;
  }

  if (props.variant === "overlay") {
    return <OverlayCard {...props} />;
  }

  return <BaseCard {...props} />;
}

// 個別エクスポート
export { BaseCard, ImageCard, OverlayCard };
