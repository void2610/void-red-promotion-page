import type { Metadata } from "next";
import StorySection from "@/components/sections/StorySection";
import Footer from "@/components/layout/Footer";

// ストーリーページ用メタデータ
export const metadata: Metadata = {
  title: "ストーリー",
};

// VOID RED ストーリーページ
export default function StoryPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      {/* ストーリーセクション - ゲームの詳細情報 */}
      <StorySection />

      {/* フッター - 著作権表記 */}
      <Footer />
    </main>
  );
}
