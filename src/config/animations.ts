// Framer Motionアニメーション設定

// アニメーションの長さ定義
export const DURATION = {
  FAST: 0.2,
  DEFAULT: 0.6,
  MEDIUM: 0.8,
  SLOW: 1.2,
} as const;

// アニメーションの遅延定義
export const DELAY = {
  NONE: 0,
  SMALL: 0.1,
  MEDIUM: 0.3,
  LARGE: 0.6,
} as const;

// イージング関数定義
export const EASING = {
  EASE_IN_OUT: "easeInOut",
  EASE_OUT: "easeOut",
  EASE_IN: "easeIn",
  BOUNCE: "anticipate",
} as const;

// 基本アニメーションバリエーション
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 60,
  },
};

export const fadeInDown = {
  initial: {
    opacity: 0,
    y: -60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -60,
  },
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -60,
  },
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 60,
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};

export const scaleUp = {
  initial: {
    scale: 0.8,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 0.8,
  },
};

// ホバーアニメーション
export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: DURATION.FAST,
      ease: EASING.EASE_OUT,
    },
  },
  whileTap: {
    scale: 0.98,
  },
};

export const hoverGlow = {
  whileHover: {
    filter: "brightness(1.1)",
    transition: {
      duration: DURATION.FAST,
    },
  },
};

// スクロールアニメーション用の設定
export const scrollAnimation = {
  initial: "initial",
  whileInView: "animate",
  viewport: {
    once: true,
    amount: 0.3,
  },
};

// スタガーアニメーション用のコンテナー
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.DEFAULT,
      ease: EASING.EASE_OUT,
    },
  },
};

// VOID REDテーマ用のカスタムアニメーション
export const voidRedGlow = {
  initial: {
    filter: "drop-shadow(0 0 0 rgba(239, 68, 68, 0))",
  },
  animate: {
    filter: [
      "drop-shadow(0 0 0 rgba(239, 68, 68, 0))",
      "drop-shadow(0 0 20px rgba(239, 68, 68, 0.6))",
      "drop-shadow(0 0 0 rgba(239, 68, 68, 0))",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: EASING.EASE_IN_OUT,
    },
  },
};

export const voidDrift = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: EASING.EASE_IN_OUT,
    },
  },
};

// アニメーションプリセット
export const animationPresets = {
  fadeInUp: {
    variants: fadeInUp,
    transition: {
      duration: DURATION.DEFAULT,
      ease: EASING.EASE_OUT,
    },
  },
  fadeInDown: {
    variants: fadeInDown,
    transition: {
      duration: DURATION.DEFAULT,
      ease: EASING.EASE_OUT,
    },
  },
  fadeInLeft: {
    variants: fadeInLeft,
    transition: {
      duration: DURATION.DEFAULT,
      ease: EASING.EASE_OUT,
    },
  },
  fadeInRight: {
    variants: fadeInRight,
    transition: {
      duration: DURATION.DEFAULT,
      ease: EASING.EASE_OUT,
    },
  },
  scaleIn: {
    variants: scaleIn,
    transition: {
      duration: DURATION.DEFAULT,
      ease: EASING.EASE_OUT,
    },
  },
} as const;

// アニメーションタイプ
export type AnimationVariant = keyof typeof animationPresets;
