// VOID REDのゲーム基本情報
export interface GameInfo {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
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
  longDescription: `VOID REDは、語り札を使って敵の記憶に語りかける、対話型カードゲームです。

プレイヤーは「赦し」「喪失」「怒り」などの感情属性を持つ札を選び、精神値をベットして語りを差し出します。敵ごとに異なる「記憶プロファイル」が設定されており、語りがその記憶に届いたとき、共鳴が成立します。

本作は、戦術よりも「意味」を選ぶ体験を重視しており、物語性・感情の揺らぎ・哲学的な余白を持った構造を意図的に設計しています。語りの強度は「闘値」として数値化され、札の属性・出し方・精神ベットによって変化。語りが届いたかどうかは、演出・音響・UIを通じてプレイヤーに体感的に伝えられます。

語りの履歴は人格ログとして記録され、周回時に再構成されることで、プレイヤー自身の語りが物語になります。札は進化・破損・変質し、敵の反応も語り履歴によって変化するため、記憶との接続が繰り返し深まっていきます。

VOID REDは、「語りが届くかどうか」を問い続けるゲーム体験を軸に、記憶・感情・選択の意味をプレイヤーに委ねる作品です。`,
  genre: ["記憶と感情を揺さぶる対話型カードゲーム"],
  platforms: "Steam (Windows, Mac)",
  languages: ["日本語", "英語(予定)"],
  developer: "チーム引きこもり",
  price: "未定",
};
