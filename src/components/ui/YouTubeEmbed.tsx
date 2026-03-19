'use client';

import { motion } from 'framer-motion';
import { DURATION } from '@/config/animations';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  delay?: number;
}

/**
 * YouTube動画埋め込みコンポーネント
 */
export function YouTubeEmbed({ 
  videoId, 
  title = "YouTube video", 
  className = "",
  delay = 0 
}: YouTubeEmbedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: DURATION.MEDIUM, delay, ease: "easeOut" }}
      className={`relative w-full ${className}`}
    >
      <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>
    </motion.div>
  );
}