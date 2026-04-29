// VOID REDスクリーンショット情報
export interface Screenshot {
  title: string;
  imageUrl: string;
}

export const screenshots: Screenshot[] = [
  {
    title: "タイトル画面",
    imageUrl: "/images/screenshots/ss_title.png",
  },
  {
    title: "ノベルパート",
    imageUrl: "/images/screenshots/ss_novel.png",
  },
  {
    title: "対話フェーズ",
    imageUrl: "/images/screenshots/ss_dialogue.png",
  },
  {
    title: "カットイン",
    imageUrl: "/images/screenshots/ss_cutin.png",
  },
  {
    title: "戦闘画面",
    imageUrl: "/images/screenshots/ss_battle.png",
  },
  {
    title: "競合画面",
    imageUrl: "/images/screenshots/ss_competition.png",
  },
  {
    title: "入札",
    imageUrl: "/images/screenshots/ss_bet.png",
  },
  {
    title: "ホーム画面",
    imageUrl: "/images/screenshots/ss_home.png",
  },
];

// すべてのスクリーンショットを取得
export const getAllScreenshots = (): Screenshot[] => {
  return screenshots;
};
