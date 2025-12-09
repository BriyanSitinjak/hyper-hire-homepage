'use client';

import React from 'react';
import { BoxContentData } from '@/types';

export const BoxInfo: React.FC<BoxContentData> = ({ id, title, subTitle }) => {
  return (
    <div key={id} className='w-full max-w-[280px] lg:w-[161px] flex flex-col gap-2 items-center lg:items-start'>
        <div className='w-full max-w-[220px] lg:w-[129px] border border-solid border-white'></div>
        <p className='font-black text-base lg:text-lg text-center lg:text-left'>{title}</p>
        <p className='font-black text-sm lg:text-base text-center lg:text-left'>{subTitle}</p>
    </div>
  );
};
