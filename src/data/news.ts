// VOID RED ニュース情報

export type NewsCategory =
  | "お知らせ"
  | "リリース"
  | "アップデート"
  | "イベント"
  | "メディア";

export interface NewsItem {
  // 一意なID (任意の文字列)
  id: string;
  // 公開日 (YYYY-MM-DD 形式)
  date: string;
  // 表示用カテゴリ (任意)
  category?: NewsCategory;
  title: string;
  // 本文 (任意)
  body?: string;
  // 外部 / 内部リンク (任意)
  link?: string;
}

// ニュースデータ (新しいものを上に追加していく形でも、日付で自動ソートされるためどこに足してもよい)
export const newsItems: NewsItem[] = [
  {
    id: "2026-04-29-promo-site-update",
    date: "2026-04-29",
    category: "お知らせ",
    title: "公式ページを更新しました",
  },
  {
    id: "2026-05-03-game-dyngeon-12",
    date: "2026-05-03",
    category: "イベント",
    title: "東京ゲームダンジョン12に出展決定！",
    link: "https://gamedungeon.jp/events/tokyo12/exhibit_informations#176",
  },
  {
    id: "2026-03-28-game-pavilion-jp",
    date: "2026-03-28",
    category: "イベント",
    title: "ゲームパビリオンjpに出展します！",
    link: "https://gamepavilion.jp/games-2026-03/void-red/",
  },
  {
    id: "2025-11-19-game-dyngeon-10",
    date: "2025-11-19",
    category: "イベント",
    title: "東京ゲームダンジョン10に出展決定！",
    link: "https://gamedungeon.jp/events/tokyo10/exhibit_informations",
  },
  {
    id: "2025-11-03-promo-site-open",
    date: "2025-11-03",
    category: "お知らせ",
    title: "公式ページを公開しました",
  },
  {
    id: "2025-09-13-steam-page-open",
    date: "2025-09-13",
    category: "お知らせ",
    title: "Steamストアページを公開しました",
    link: "https://store.steampowered.com/app/3997140/VOID_RED/",
  },
];

// 日付降順 (新しい順) で最新 N 件を取得
export const getLatestNews = (limit?: number): NewsItem[] => {
  const sorted = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
};
