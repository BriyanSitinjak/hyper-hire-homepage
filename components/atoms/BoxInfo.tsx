'use client';

import React from 'react';
import { BoxContentData } from '@/types';

export const BoxInfo: React.FC<BoxContentData> = ({ id, title, subTitle }) => {
  return (
    <div key={id} className='w-[161px] flex flex-col gap-2'>
        <div className='w-[129px] border border-solid border-white'></div>
        <p className='font-black text-lg'>{title}</p>
        <p className='font-black text-base'>{subTitle}</p>
    </div>
  );
};
