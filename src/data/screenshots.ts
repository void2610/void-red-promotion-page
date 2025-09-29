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
    title: "戦闘画面",
    imageUrl: "/images/screenshots/ss_battle.png",
  },
  {
    title: "カード詳細表示",
    imageUrl: "/images/screenshots/ss_card_detail.png",
  },
  {
    title: "ホーム画面",
    imageUrl: "/images/screenshots/ss_home.png",
  },
  {
    title: "アイテム獲得",
    imageUrl: "/images/screenshots/ss_item_get.png",
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
    title: "チュートリアル",
    imageUrl: "/images/screenshots/ss_tutorial.png",
  },
];

// すべてのスクリーンショットを取得
export const getAllScreenshots = (): Screenshot[] => {
  return screenshots;
};
