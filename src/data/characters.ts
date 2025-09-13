// VOID REDのキャラクター情報
export interface Character {
  name: string;
  title?: string;
  description: string;
  imageUrl: string;
}

export const characters: Character[] = [
  {
    name: "主人公",
    title: "記憶を失った少女",
    description: "名前を含め全ての記憶を失った少女。 VOID REDを探索する。",
    imageUrl: "/images/characters/protagonist.jpg",
  },
  {
    name: "アルヴ",
    title: "謎の案内人",
    description: "自分をVOID REDの案内人と名乗る謎の存在。",
    imageUrl: "/images/characters/alv.jpg",
  },
];

// メインキャラクターを取得
export const getMainCharacters = (): Character[] => {
  return characters;
};
