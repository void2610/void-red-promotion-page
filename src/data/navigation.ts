// VOID RED ナビゲーションデータ
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    id: "hero",
    label: "トップ",
    href: "#hero",
  },
  {
    id: "about",
    label: "ゲーム紹介",
    href: "#about",
  },
  {
    id: "screenshots",
    label: "スクリーンショット",
    href: "#screenshots",
  },
  {
    id: "characters",
    label: "キャラクター",
    href: "#characters",
  },
  {
    id: "team",
    label: "制作メンバー",
    href: "#team",
  },
  {
    id: "info",
    label: "その他の情報",
    href: "#info",
  },
];

// ナビゲーション関連ユーティリティ関数
export const getNavItemById = (id: string): NavItem | undefined => {
  return navItems.find((item) => item.id === id);
};

export const getNavItemByHref = (href: string): NavItem | undefined => {
  return navItems.find((item) => item.href === href);
};
