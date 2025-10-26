import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedPageProps {
  children: ReactNode;
  className?: string;
  // 'none' disables the subtle overlay (useful for pages with precise colors)
  palette?: 'ai' | 'cloud' | 'quantum' | 'edge' | 'sunset' | 'default' | 'none';
}

export default function AnimatedPage({ children, className = '', palette = 'default' }: AnimatedPageProps) {
  const paletteClass = (() => {
    switch (palette) {
      case 'ai':
        return 'bg-gradient-to-br from-[#0ea5e9] via-[#7c3aed] to-[#06b6d4] opacity-15';
      case 'cloud':
        return 'bg-gradient-to-br from-[#7dd3fc] via-[#60a5fa] to-[#7c3aed] opacity-12';
      case 'quantum':
        return 'bg-gradient-to-br from-[#a78bfa] via-[#7c3aed] to-[#60a5fa] opacity-14';
      case 'edge':
        return 'bg-gradient-to-br from-[#34d399] via-[#06b6d4] to-[#60a5fa] opacity-12';
      case 'sunset':
        return 'bg-gradient-to-br from-[#fb7185] via-[#f97316] to-[#f59e0b] opacity-12';
      case 'none':
        return '';
      default:
        return 'bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-700 opacity-10';
    }
  })();

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onAnimationComplete={() => setShowOverlay(true)}
      className={`page-transition relative ${className}`}
    >
      {/* subtle radiant gradient overlay (reduced intensity) — only render when a palette is provided
          and after the entry animation completes to avoid initial color flash */}
      {paletteClass && showOverlay ? (
        <div className={`pointer-events-none absolute inset-0 mix-blend-screen ${paletteClass}`} style={{ transition: 'opacity 1s ease' }} />
      ) : null}
      {children}
    </motion.div>
  );
}
