import type { Metadata } from "next";
import GameIntroSection from "@/components/sections/GameIntroSection";
import Footer from "@/components/layout/Footer";

// ゲーム紹介ページ用メタデータ
export const metadata: Metadata = {
  title: "ゲーム紹介",
};

// VOID RED ゲーム紹介ページ
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      {/* ゲーム紹介セクション - ゲームの詳細情報 */}
      <GameIntroSection />

      {/* フッター - 著作権表記 */}
      <Footer />
    </main>
  );
}
