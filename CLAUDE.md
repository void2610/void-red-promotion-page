# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - 開発サーバーを起動 (http://localhost:3000)
- `npm run build` - プロダクション用ビルド
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintでコードをチェック

## Architecture Overview

This is a Next.js 15 promotional page for "VOID RED" game built with:
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **HeroUI** components library
- **Lucide React** for icons

### Key Structure

- `src/app/` - Next.js App Router pages
- `src/components/` - React components organized by purpose:
  - `layout/` - ヘッダーやレイアウトコンポーネント
  - `sections/` - ページのメインセクション (Hero, GameIntro, Screenshots, etc.)
  - `ui/` - 再利用可能なUIコンポーネント
- `src/data/` - 静的データファイル (キャラクター、チーム、ゲーム情報)
- `src/config/` - アニメーション設定など
- `src/utils/` - ユーティリティ関数
- `public/images/` - 画像ファイル (背景、キャラクター、スクリーンショット)

### Component Architecture

The main page (`src/app/page.tsx`) consists of these sections in order:
1. HeroSection - メインビジュアル
2. GameIntroSection - ゲーム紹介
3. ScreenshotGallery - スクリーンショット
4. CharacterSection - キャラクター紹介
5. TeamSection - 制作チーム
6. InfoSection - 追加情報

Most components use:
- Framer Motion for animations with standardized durations/delays from `config/animations.ts`
- Tailwind classes with custom color scheme (void-*, red-*)
- TypeScript interfaces for props
- Japanese comments per project requirements

### Styling

- Custom Tailwind config with game-specific colors
- Japanese text styling optimizations
- Responsive design with mobile-first approach
- Dark theme support via next-themes

### Data Management

Static data is centralized in `src/data/` files:
- `characters.ts` - キャラクター情報
- `team-members.ts` - チームメンバー情報
- `game-info.ts` - ゲーム基本情報
- `screenshots.ts` - スクリーンショット情報