// VOID REDのゲーム基本情報
export interface GameInfo {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  storyPreview: string;
  genre: string[];
  platforms: string;
  languages: string[];
  developer: string;
  price: string;
}

export const gameInfo: GameInfo = {
  title: "VOID RED",
  tagline: "記憶と感情を揺さぶる対話型カードゲーム",
  description:
    "記憶と感情を揺さぶる対話型カードゲーム。沈黙の中で札が語り、心の深層に触れる。哲学的な余白と緊張感が、静かにプレイヤーを包み込む。",
  longDescription: `VOID RED とは？
記憶の再選択を望んだ者だけが訪れることのできる、人々の集合意識下に存在している精神世界。
人生に疲れ切っていた主人公ノアは支配人アルヴの案内により、記憶の再選択をするオークション会場「VOID RED」で自らが宿じた記憶を取り戻すか、自分を苦しめた記憶を放棄するかを迫られる。
あなたは自分の選択を後悔しないと言えるだろうか？`,
  storyPreview: `
  記憶の再選択をするオークション会場「VOID RED」に行き着いた主人公。
  支配人アルヴの案内により、自らが借じた記憶を取り戻すか、自分を苦しめた記憶を放棄するかを迫られる。
  あなたは自分の選択を後悔しないと言えるだろうか？`,
  genre: ["記憶と感情を揺さぶる対話型カードゲーム"],
  platforms: "Steam (Windows, Mac)",
  languages: ["日本語", "英語(予定)"],
  developer: "チーム引きこもり",
  price: "未定",
};
