"use client";

import { motion } from "framer-motion";
import { DURATION, DELAY } from "@/config/animations";

interface SteamWidgetProps {
  appId: string;
  height?: number;
  className?: string;
}

// Steam ストアウィジェットコンポーネント
export default function SteamWidget({
  appId,
  height = 190,
  className = ""
}: SteamWidgetProps) {
  return (
    <motion.div
      className={`flex justify-center w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.DEFAULT, delay: DELAY.LARGE + 0.2 }}
    >
      <div
        className="w-full max-w-full overflow-hidden"
        style={{ colorScheme: 'light' }}
      >
        <iframe
          src={`https://store.steampowered.com/widget/${appId}/?utm_source=voidred-website`}
          width="100%"
          height={height}
          className="w-full max-w-[646px] min-w-[300px]"
          style={{ maxWidth: '100%' }}
        />
      </div>
    </motion.div>
  );
}
