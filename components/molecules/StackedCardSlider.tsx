'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfileCard } from './ProfileCard';
import type { ProfileCard as ProfileCardType } from '@/types';

interface StackedCardSliderProps {
  cards: ProfileCardType[];
}

export const StackedCardSlider: React.FC<StackedCardSliderProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayedCards = cards.slice(0, 3); // Ensure max 3 cards

  // Auto-rotate cards
  useEffect(() => {
    if (displayedCards.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayedCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [displayedCards.length]);

  const getCardStyle = (index: number) => {
    const position = (index - activeIndex + displayedCards.length) % displayedCards.length;

    if (position === 0) {
      // Active card in the center
      return {
        zIndex: 20,
        x: 0,
        scale: 1,
        opacity: 1,
        pointerEvents: 'auto',
      };
    } else if (position === 1) {
      // Next card: peek on the right
      return {
        zIndex: 10,
        x: 120,
        scale: 0.92,
        opacity: 0.75,
        pointerEvents: 'none',
      };
    } else if (displayedCards.length === 3 && position === 2) {
      // Previous card: peek on the left
      return {
        zIndex: 10,
        x: -120,
        scale: 0.92,
        opacity: 0.75,
        pointerEvents: 'none',
      };
    }
    return {};
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + displayedCards.length) % displayedCards.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % displayedCards.length);
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center border border-solid border-red-900">
      {displayedCards.length > 1 && (
        <button
          className="absolute top-1/2 z-40 bg-transparent p-0 m-0 flex items-center focus:outline-none border border-solid border-red-900"
          style={{
            left: "-48px",
            transform: "translateY(-50%)",
            background: 'none',
            boxShadow: 'none'
          }}
          onClick={handlePrev}
          aria-label="Previous card"
          type="button"
        >
          <svg width="32" height="32" fill="none" stroke="#FFFFFF" strokeWidth="2">
            <path d="M20 6 L12 16 L20 26" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <AnimatePresence mode="wait">
        {displayedCards.map((card, index) => {
          const style = getCardStyle(index);
          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                zIndex: style.zIndex,
                x: style.x,
                scale: style.scale,
                opacity: style.opacity,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              className="absolute"
            >
              <ProfileCard card={card} />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {displayedCards.length > 1 && (
        <button
          className="absolute top-1/2 z-40 bg-transparent border-none p-0 m-0 flex items-center focus:outline-none"
          style={{
            right: "-48px",
            transform: "translateY(-50%)",
            background: 'none',
            boxShadow: 'none'
          }}
          onClick={handleNext}
          aria-label="Next card"
          type="button"
        >
          <svg width="32" height="32" fill="none" stroke="#FFFFFF" strokeWidth="2">
            <path d="M12 6 L20 16 L12 26" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
};
