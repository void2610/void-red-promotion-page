"use client";

import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("hero");

  // アクティブセクション検出
  useEffect(() => {
    const sections = navItems.map((item) => item.id);
    
    const observerOptions = {
      rootMargin: "-10% 0px -60% 0px", // より敏感な検出範囲
      threshold: [0.1, 0.3, 0.5], // 複数の閾値を設定
    };

    const updateActiveSection = (sectionId: string) => {
      setActiveSection(current => {
        // 既に同じセクションがアクティブな場合は更新しない
        if (current === sectionId) {
          return current;
        }
        return sectionId;
      });
    };

    const observer = new IntersectionObserver((entries) => {
      // スクロール位置チェック（最下部付近では Intersection Observer を無視）
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);

      // 97%以上スクロールしている場合は最下部セクションを優先
      if (scrollPercent >= 0.97) {
        const lastSectionId = sections[sections.length - 1];
        updateActiveSection(lastSectionId);
      }

      // 通常の Intersection Observer ロジック
      let maxIntersection = 0;
      let activeId = "";

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
          maxIntersection = entry.intersectionRatio;
          activeId = entry.target.id;
        }
      });

      if (activeId) {
        updateActiveSection(activeId);
      }
    }, observerOptions);

    // スクロール位置ベースの検出（最下部セクション用）
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);

      // 98%以上スクロールした場合は最後のセクションを強制的にアクティブに
      if (scrollPercent >= 0.98) {
        const lastSectionId = sections[sections.length - 1];
        updateActiveSection(lastSectionId);
      }
    };

    // 各セクションを監視開始
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // スムーススクロール関数
  const handleNavigation = (targetId: string) => {
    // メニューを先に閉じる
    setIsMenuOpen(false);
    
    // 少し遅延してからスクロールを実行（メニューのアニメーションを待つ）
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
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
          {/* 左側のスペーサー */}
          <div className="w-8"></div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={cn(
                  "text-foreground hover:text-accent-red transition-colors font-medium relative",
                  activeSection === item.id && "text-accent-red"
                )}
                onClick={() => handleNavigation(item.id)}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
                {/* アクティブインジケーター */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-red rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
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
                    className={cn(
                      "block w-full text-left px-6 py-3 text-foreground hover:text-accent-red hover:bg-white/5 transition-colors font-medium relative",
                      activeSection === item.id && "text-accent-red bg-white/10"
                    )}
                    onClick={() => handleNavigation(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.label}
                    {/* モバイル用アクティブインジケーター */}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-accent-red"
                        layoutId="mobileActiveIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
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
