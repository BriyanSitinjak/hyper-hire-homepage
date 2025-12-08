'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  content: string;
  fontSize: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animationDelay: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ content, fontSize, position, animationDelay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: animationDelay,
        ease: 'easeOut',
      }}
      className={`absolute ${fontSize} font-bold text-white`}
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
      }}>
      {content}
    </motion.div>
  );
};
