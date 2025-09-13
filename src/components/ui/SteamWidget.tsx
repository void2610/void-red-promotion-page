"use client";

import { motion } from "framer-motion";
import { DURATION, DELAY } from "@/config/animations";

interface SteamWidgetProps {
  appId: string;
  width?: number;
  height?: number;
  className?: string;
}

// Steam ストアウィジェットコンポーネント
export default function SteamWidget({ 
  appId, 
  width = 646, 
  height = 190,
  className = ""
}: SteamWidgetProps) {
  return (
    <motion.div
      className={`flex justify-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.DEFAULT, delay: DELAY.LARGE + 0.2 }}
    >
      <iframe 
        src={`https://store.steampowered.com/widget/${appId}/?utm_source=voidred-website`}
        width={width}
        height={height}
      />
    </motion.div>
  );
}
