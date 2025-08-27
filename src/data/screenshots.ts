// VOID REDスクリーンショット情報
export interface Screenshot {
  title: string;
  imageUrl: string;
}

export const screenshots: Screenshot[] = [
  {
    title: "戦闘画面",
    imageUrl: "/images/screenshots/ss_battle.png",
  },
  {
    title: "プレイヤーの語り",
    imageUrl: "/images/screenshots/ss_narration.png",
  },
  {
    title: "勝敗の判定",
    imageUrl: "/images/screenshots/ss_judge.png",
  },
  {
    title: "スコアの公開",
    imageUrl: "/images/screenshots/ss_score_reveal.png",
  },
  {
    title: "タイトル画面",
    imageUrl: "/images/screenshots/ss_title.png",
  },
];

// すべてのスクリーンショットを取得
export const getAllScreenshots = (): Screenshot[] => {
  return screenshots;
};
