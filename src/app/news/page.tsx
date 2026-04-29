import type { Metadata } from "next";
import NewsSection from "@/components/sections/NewsSection";
import Footer from "@/components/layout/Footer";

// ニュース一覧ページ用メタデータ
export const metadata: Metadata = {
  title: "ニュース",
};

// VOID RED ニュース一覧ページ (全件表示)
export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      {/* ニュース全件表示 (limit / moreLinkHref を指定しない) */}
      <NewsSection />

      {/* フッター - 著作権表記 */}
      <Footer />
    </main>
  );
}
