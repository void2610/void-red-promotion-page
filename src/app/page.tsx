import HeroSection from "@/components/sections/HeroSection";
import GameIntroLinkSection from "@/components/sections/GameIntroLinkSection";
import ScreenshotGallery from "@/components/sections/ScreenshotGallery";
import CharacterLinkSection from "@/components/sections/CharacterLinkSection";
import TeamSection from "@/components/sections/TeamSection";
import InfoSection from "@/components/sections/InfoSection";
import Footer from "@/components/layout/Footer";

// VOID RED メインページ
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Heroセクション - メインビジュアルとタイトル */}
      <HeroSection />

      {/* ゲーム紹介ページへの導線 */}
      <GameIntroLinkSection />

      {/* キャラクターページへの導線 */}
      <CharacterLinkSection />

      {/* スクリーンショットギャラリー - ゲームプレイ画面 */}
      <ScreenshotGallery />

      {/* チームセクション - 制作メンバー紹介 */}
      <TeamSection />

      {/* 情報セクション - その他の情報と連絡先 */}
      <InfoSection />

      {/* フッター - 著作権表記 */}
      <Footer />
    </main>
  );
}
