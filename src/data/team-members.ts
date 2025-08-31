// VOID RED制作チームメンバー情報
export interface TeamMember {
  name: string;
  role: string;
  link?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "早乙女ネル",
    role: "リーダー / シナリオライター / プランナー",
  },
  {
    name: "ゲンム",
    role: "プランナー",
  },
  {
    name: "void2610",
    role: "メインプログラマー",
    link: "https://void2610.dev",
  },
  {
    name: "ハンク",
    role: "プログラマー",
  },
  {
    name: "殺人未遂マン",
    role: "イラストレーター",
  },
  {
    name: "ひいらぎ",
    role: "UI/UXデザイナー",
  },
  {
    name: "しゅーま",
    role: "BGM",
  },
  {
    name: "9ローバー🍀",
    role: "SE",
  },
  {
    name: "水かもめ",
    role: "背景イラスト",
  },
];
