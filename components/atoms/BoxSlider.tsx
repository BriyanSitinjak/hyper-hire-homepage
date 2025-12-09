'use client';

import { BoxSliderData } from '@/types';
import Image from 'next/image';
import React from 'react';

export const BoxSlider: React.FC<BoxSliderData> = ({ icon, title }) => {
  return (
    <div className='w-[332px] flex flex-row justify-start items-center gap-6 bg-[rgba(255,255,255,0.2)] rounded-xl p-4'>
      <div className='bg-[rgba(255,255,255,0.4)] p-3 rounded-lg'>
        <Image src={icon} alt={title} width={32} height={32} />
      </div>
      <p className='font-black text-2xl'>{title}</p>
    </div>
  );
};
