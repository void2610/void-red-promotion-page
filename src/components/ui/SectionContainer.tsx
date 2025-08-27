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
        !noPadding && "py-16 md:py-20 lg:py-24",
        className,
      )}
    >
      {children}
    </section>
  );
}
