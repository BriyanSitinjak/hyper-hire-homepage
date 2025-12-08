'use client';

import React from 'react';
import Image from 'next/image';
import { LeftContent } from '../organisms/LeftContent';
import { RightContent } from '../organisms/RightContent';
import type { HomePageData } from '@/types';

interface HomeScreenProps {
  data: HomePageData;
  backgroundImage?: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ data, backgroundImage }) => {
  return (
    <div className="relative w-full h-[1042px] overflow-hidden">
      {/* ensure the bg image will show */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image src={backgroundImage} alt="Home background" fill className="object-cover" priority />
        </div>
      )}

      <div className="relative z-10 h-full px-[346px]">
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="relative">
            <LeftContent texts={data.leftContent.texts} />
          </div>

          <div className="relative">
            <RightContent cards={data.cards} />
          </div>
        </div>
      </div>
    </div>
  );
};
