'use client';

import React from 'react';
import { StackedCardSlider } from '../molecules/StackedCardSlider';
import type { ProfileCard } from '@/types';

interface RightContentProps {
  cards: ProfileCard[];
}
export const RightContent: React.FC<RightContentProps> = ({ cards }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-start">
      <StackedCardSlider cards={cards} />
    </div>
  );
};
