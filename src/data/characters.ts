// VOID REDのキャラクター情報
export interface Character {
  name: string;
  title?: string;
  description: string;
  imageUrl: string;
}

export const characters: Character[] = [
  {
    name: "？？？",
    title: "記憶を失った主人公",
    description:
      "全ての記憶を失いVOID REDに行き着いた。 記憶を取り戻すため、VOID REDでの記憶オークションに参加する",
    imageUrl: "/images/characters/protagonist.png",
  },
  {
    name: "アルヴ",
    title: "謎の案内人",
    description: "自分をVOID REDの案内人と名乗る謎の存在。",
    imageUrl: "/images/characters/alv.png",
  },
  {
    name: "セリカ",
    title: "？？？",
    description: "",
    imageUrl: "/images/characters/cerica.png",
  },
  {
    name: "ヴェイル",
    title: "？？？",
    description: "",
    imageUrl: "/images/characters/veil.png",
  },
];

// メインキャラクターを取得
export const getMainCharacters = (): Character[] => {
  return characters;
};
