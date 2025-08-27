// パーティクルエフェクト用データ
export interface ParticleData {
  left: number; // 位置（%）
  top: number; // 位置（%）
  duration: number; // アニメーション時間（秒）
  delay: number; // 遅延時間（秒）
}

// デフォルトパーティクルデータ（hydrationエラー回避のための固定値）
export const defaultParticles: ParticleData[] = [
  { left: 23.5, top: 12.8, duration: 4.2, delay: 0.5 },
  { left: 67.3, top: 89.1, duration: 3.8, delay: 1.2 },
  { left: 15.7, top: 45.3, duration: 4.8, delay: 0.8 },
  { left: 78.2, top: 67.4, duration: 3.5, delay: 1.8 },
  { left: 45.9, top: 23.7, duration: 4.5, delay: 0.3 },
  { left: 92.1, top: 78.6, duration: 3.2, delay: 1.5 },
  { left: 8.4, top: 91.2, duration: 4.7, delay: 0.7 },
  { left: 56.8, top: 34.9, duration: 3.9, delay: 1.9 },
  { left: 34.2, top: 56.1, duration: 4.1, delay: 0.4 },
  { left: 81.7, top: 15.8, duration: 3.6, delay: 1.3 },
  { left: 12.5, top: 73.4, duration: 4.4, delay: 0.9 },
  { left: 63.9, top: 41.7, duration: 3.3, delay: 1.6 },
  { left: 87.3, top: 82.9, duration: 4.9, delay: 0.2 },
  { left: 29.6, top: 19.5, duration: 3.7, delay: 1.4 },
  { left: 74.1, top: 63.8, duration: 4.3, delay: 0.6 },
  { left: 41.8, top: 87.2, duration: 3.4, delay: 1.7 },
  { left: 95.7, top: 28.3, duration: 4.6, delay: 0.1 },
  { left: 18.9, top: 74.6, duration: 3.1, delay: 1.1 },
  { left: 52.4, top: 39.7, duration: 4.0, delay: 1.0 },
  { left: 76.8, top: 85.4, duration: 3.8, delay: 0.5 },
];

// パーティクル設定のカスタマイズ用型
export interface ParticleConfig {
  count?: number;
  color?: string;
  size?: number; // rem単位
  opacity?: [number, number, number]; // [初期, 最大, 最終]
  movement?: {
    yRange?: [number, number]; // Y軸移動範囲
    scaleRange?: [number, number, number]; // スケール変化
  };
}
