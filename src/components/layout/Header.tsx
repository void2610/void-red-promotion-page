"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { cn } from "@/utils/cn";

interface HeaderProps {
  className?: string;
}

// VOID RED ヘッダーナビゲーションコンポーネント
export default function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // スムーススクロール関数
  const handleNavigation = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // モバイルメニューを閉じる
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "backdrop-blur-sm bg-black/30 border-b border-white/10",
        "transition-all duration-300",
        className,
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ/タイトル */}
          <motion.button
            className="text-xl md:text-2xl font-bold text-foreground hover:text-accent-red transition-colors"
            onClick={() => handleNavigation("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VOID RED
          </motion.button>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className="text-foreground hover:text-accent-red transition-colors font-medium"
                onClick={() => handleNavigation(item.id)}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* モバイルハンバーガーメニューボタン */}
          <button
            className="md:hidden text-foreground hover:text-accent-red transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く/閉じる"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    className="block w-full text-left px-6 py-3 text-foreground hover:text-accent-red hover:bg-white/5 transition-colors font-medium"
                    onClick={() => handleNavigation(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
