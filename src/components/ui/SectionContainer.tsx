import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

// 共通セクションコンテナーコンポーネント
export default function SectionContainer({
  children,
  className,
  id,
  fullWidth = false,
  noPadding = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        !fullWidth && "section-container",
        !noPadding && "py-8 md:py-12 lg:py-14",
        className,
      )}
    >
      {children}
    </section>
  );
}
