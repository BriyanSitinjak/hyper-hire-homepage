'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LeftContent } from '../organisms/LeftContent';
import { RightContent } from '../organisms/RightContent';
import { MobileChecklistSection } from '../organisms/MobileChecklistSection';
import type { HomePageData } from '@/types';
import { BoxSlider } from '../atoms/BoxSlider';
import { AnimatedText } from '../molecules/AnimatedText';

interface HomeScreenProps {
  data: HomePageData;
  backgroundImage?: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ data, backgroundImage }) => {
  const [translateX, setTranslateX] = useState(0);
  const [isInitial, setIsInitial] = useState(true);
  const itemWidth = 332; // Width of each BoxSlider item
  const gap = 10; 
  const itemWidthWithGap = itemWidth + gap;
  const totalItems = data.boxSlider.length;

  useEffect(() => {

    const initialTimeout = setTimeout(() => {
      setIsInitial(false);
    }, 500);

    const slideInterval = setInterval(() => {
      setTranslateX((prev) => {
        // Calculate how much to slide (one item width + gap)
        const slideAmount = itemWidthWithGap;
        const maxTranslate = -(totalItems - 1) * itemWidthWithGap;
        const nextTranslate = prev - slideAmount;
        
        //  reset to 0
        return nextTranslate < maxTranslate ? 0 : nextTranslate;
      });
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(slideInterval);
    };
  }, [totalItems, itemWidthWithGap]);

  return (
    <div className="relative w-full h-fit overflow-hidden pb-[108px]">
      {backgroundImage && (
        <div className="absolute inset-0 z-0" style={{ top: '-117px' }}>
          <Image src={backgroundImage} alt="Home background" fill className="object-cover" priority />
        </div>
      )}

      <div className="relative z-10 h-full px-4 lg:px-[346px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[136px]">
          <div className="relative flex justify-center lg:justify-start">
            <LeftContent 
              popupContent={data.leftContent.popupContent}
              title1={data.leftContent.title1}
              title2={data.leftContent.title2}
              subtitle1={data.leftContent.subtitle1}
              subtitle2={data.leftContent.subtitle2}
              subtitle3={data.leftContent.subtitle3}
              box={data.leftContent.box}
            />
          </div>

          <div className="relative flex justify-center lg:justify-start mt-8 lg:mt-0">
            <RightContent cards={data.cards} />
          </div>
        </div>
        
        {/* Mobile Checklist Section - Only visible on mobile */}
        <MobileChecklistSection />
        
        {/* BoxSlider - Hidden on mobile */}
        <div className='relative w-full min-h-[88px] mt-[60px] overflow-hidden hidden lg:block'>
          <motion.div
            initial={{ opacity: isInitial ? 0 : 1 }}
            animate={{ 
              opacity: 1,
              x: translateX,
            }}
            transition={{
              opacity: { duration: 0.5, delay: isInitial ? 0 : 0 },
              x: { duration: 0.5, ease: 'easeOut' },
            }}
            className='flex flex-row gap-2.5'
            style={{ willChange: 'transform' }}
          >
            {data.boxSlider.map((box, index) => (
              <AnimatedText
                key={index}
                animationDelay={isInitial ? index * 0.1 : 0}
                animationType="fadeIn"
                duration={0.5}
                className="shrink-0"
              >
                <BoxSlider icon={box.icon} title={box.title} />
              </AnimatedText>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
