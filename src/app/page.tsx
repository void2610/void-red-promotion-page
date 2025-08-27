import HeroSection from "@/components/sections/HeroSection";
import GameIntroSection from "@/components/sections/GameIntroSection";
import ScreenshotGallery from "@/components/sections/ScreenshotGallery";
import CharacterSection from "@/components/sections/CharacterSection";
import TeamSection from "@/components/sections/TeamSection";
import InfoSection from "@/components/sections/InfoSection";
import Footer from "@/components/layout/Footer";

// VOID RED メインページ
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Heroセクション - メインビジュアルとタイトル */}
      <HeroSection />

      {/* ゲーム紹介セクション - ゲームの詳細情報 */}
      <GameIntroSection />

      {/* スクリーンショットギャラリー - ゲームプレイ画面 */}
      <ScreenshotGallery />

      {/* キャラクターセクション - 登場キャラクターの紹介 */}
      <CharacterSection />

      {/* チームセクション - 制作メンバー紹介 */}
      <TeamSection />

      {/* 情報セクション - その他の情報と連絡先 */}
      <InfoSection />

      {/* フッター - 著作権表記 */}
      <Footer />
    </main>
  );
}
