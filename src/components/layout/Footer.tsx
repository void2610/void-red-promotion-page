import { cn } from "@/utils/cn";

interface FooterProps {
  className?: string;
}

// シンプルな著作権フッターコンポーネント
export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "py-8 text-center border-t border-white/10 bg-black/30 backdrop-blur-sm",
        className,
      )}
    >
      <p className="text-foreground/60 text-sm">
        <span style={{ fontFamily: 'Arial, sans-serif' }}>©</span> 2025 Team Hikikomori. All rights reserved.
      </p>
    </footer>
  );
}