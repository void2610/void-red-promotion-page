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
    title: "失われた記憶の少女",
    description: "ここに主人公の説明文が入ります。",
    imageUrl: "/images/characters/protagonist.jpg",
  },
  {
    name: "アルヴ",
    title: "謎の案内人",
    description: "ここにアルヴの説明文が入ります。",
    imageUrl: "/images/characters/alv.jpg",
  },
];

// メインキャラクターを取得
export const getMainCharacters = (): Character[] => {
  return characters;
};
