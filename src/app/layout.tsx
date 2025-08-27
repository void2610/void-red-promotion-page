import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import "./globals.css";
import { gameInfo } from "@/data/game-info";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// サイト基本情報
const siteConfig = {
  name: gameInfo.title,
  description: gameInfo.description,
  url: "https://void-red.void2610.dev/",
  ogImage: "/images/void_red_key_visual.jpg",
  creator: "void2610",
  keywords: [
    "ゲーム",
    "アドベンチャー",
    "ミステリー",
    "インディーゲーム",
    "VOID RED",
    "void2610",
    "ゲーム開発",
    "Unity",
    "C#",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000", // 常に黒テーマ
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.creator,
      url: "https://void2610.dev",
    },
  ],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@void2610",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark scroll-smooth">
      <head>
        {/* JSON-LD構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: gameInfo.title,
              description: gameInfo.description,
              url: siteConfig.url,
              image: siteConfig.ogImage,
              genre: gameInfo.genre,
              platform: gameInfo.platforms,
              operatingSystem: "Windows, Mac",
              applicationCategory: "Game",
              author: {
                "@type": "Person",
                name: siteConfig.creator,
                url: "https://void2610.dev",
              },
              publisher: {
                "@type": "Organization",
                name: "void2610",
                url: "https://void2610.dev",
              },
              datePublished: "2024",
              inLanguage: "ja",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-foreground font-sans antialiased dark`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/backgrounds/back.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <HeroUIProvider>
          <Header />
          <div
            className="relative flex min-h-screen flex-col"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="flex-1">{children}</div>
          </div>
        </HeroUIProvider>
      </body>
    </html>
  );
}
