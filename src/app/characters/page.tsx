import type { Metadata } from "next";
import CharacterSection from "@/components/sections/CharacterSection";
import Footer from "@/components/layout/Footer";

// キャラクターページ用メタデータ
export const metadata: Metadata = {
  title: "キャラクター",
};

// VOID RED キャラクターページ
export default function CharactersPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      {/* キャラクターセクション (大きめサイズで表示) */}
      <CharacterSection size="large" />

      {/* フッター - 著作権表記 */}
      <Footer />
    </main>
  );
}
