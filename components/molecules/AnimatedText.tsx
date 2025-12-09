'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  animationDelay: number;
  animationType?: 'fadeIn' | 'fadeInUp' | 'slideLeft';
  duration?: number;
  className?: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  exitAnimation?: {
    opacity?: number;
    x?: number;
    y?: number;
  };
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children,
  animationDelay,
  animationType = 'fadeInUp',
  duration = 0.8,
  className = '',
  position,
  exitAnimation,
}) => {
  const pos = position ?? {};
  
  // Define initial and animate props based on animation type
  let initialProps: any = {};
  let animateProps: any = {};
  
  switch (animationType) {
    case 'fadeIn':
      initialProps = { opacity: 0 };
      animateProps = { opacity: 1 };
      break;
    case 'fadeInUp':
      initialProps = { opacity: 0, y: 20 };
      animateProps = { opacity: 1, y: 0 };
      break;
    case 'slideLeft':
      initialProps = { opacity: 0, x: 100 };
      animateProps = { opacity: 1, x: 0 };
      break;
    default:
      initialProps = { opacity: 0, y: 20 };
      animateProps = { opacity: 1, y: 0 };
  }
  
  // Default Exit 
  const exitProps = exitAnimation || { opacity: 0, x: -100 };

  return (
    <motion.div
      initial={initialProps}
      animate={animateProps}
      exit={exitProps}
      transition={{
        duration,
        delay: animationDelay,
        ease: 'easeOut',
      }}
      className={className ?? undefined}
      style={{
        marginTop: pos.top,
        marginBottom: pos.bottom,
        marginLeft: pos.left,
        marginRight: pos.right,
      }}>
      {children}
    </motion.div>
  );
};
