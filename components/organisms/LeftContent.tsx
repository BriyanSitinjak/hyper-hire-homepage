'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '../molecules/AnimatedText';
import { BoxContentData } from '@/types';
import { BoxInfo } from '../atoms/BoxInfo';

interface LeftContentProps {
  popupContent: string;
  title1: string;
  title2: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
  box: BoxContentData[];
}

export const LeftContent: React.FC<LeftContentProps> = ({ 
  popupContent,
  title1,
  title2,
  subtitle1,
  subtitle2,
  subtitle3,
  box,
}) => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full relative">
      {/* Popup tooltip */}
      <div className="relative" style={{ marginTop: '20%', marginLeft: '0' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.6, 
            ease: 'easeOut',
          }}
          className="absolute top-[-16px] left-0 mt-2 z-50 py-1.5 px-3 bg-white rounded-lg"
          style={{
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            position: 'relative',
          }}
        >
          <span className="text-[#40E2E8] font-bold">{popupContent}</span>
        </motion.div>
      </div>

      {/* Title 1 */}
      <AnimatedText
        animationDelay={0.2}
        animationType="fadeInUp"
        duration={0.5}
      >
        <h1 className="text-[48px] font-black text-white">{title1}</h1>
      </AnimatedText>

      {/* Title 2 */}
      <AnimatedText
        animationDelay={0.4}
        animationType="fadeInUp"
        duration={0.5}
      >
        <h1 className="text-[48px] font-black text-white">{title2}</h1>
      </AnimatedText>

      {/* Subtitle 1 */}
      <AnimatedText
        animationDelay={0.6}
        animationType="fadeInUp"
        duration={0.5}
        className='mt-4'
      >
        <p className="text-[24px] font-black text-white">{subtitle1}</p>
      </AnimatedText>

      {/* Subtitle 2 */}
      <AnimatedText
        animationDelay={0.8}
        animationType="fadeInUp"
        duration={0.5}
      >
        <p className="text-[24px] font-black text-white">{subtitle2}</p>
      </AnimatedText>

      {/* Subtitle 3 */}
      <AnimatedText
        animationDelay={1.0}
        animationType="fadeInUp"
        duration={0.5}
        className='mt-6'
      >
        <p className="text-[18px] font-black text-white underline">{subtitle3}</p>
      </AnimatedText>

      {/* 3 Cards */}
      <AnimatedText
        animationDelay={1.2}
        animationType="fadeIn"
        duration={0.5}
        className='mt-[60px]'
      >
       <div className='flex gap-12 w-full h-fit'>
        {box.map((data, index) => (
          <BoxInfo id={`${data.id}-${index}`} title={data.title} subTitle={data.subTitle}  />
        ))}
       </div>
      </AnimatedText>
    </div>
  );
};
