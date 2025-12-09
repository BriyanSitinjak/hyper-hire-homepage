'use client';

import { TextFooterInterface } from '@/types';
import React from 'react';

export const TextFooterCompany: React.FC<TextFooterInterface> = ({ title, name, address }) => {
  return (
    <div className="flex flex-col flex-nowrap gap-[5px] w-fit">
      <p className='font-black text-[#343741] text-[12px]'>{title}</p>
      <p className='font-black text-[#5E626F] text-[13px]'>{name}</p>
      <p className='font-black text-[#5E626F] text-[13px]'>{address}</p>
    </div>
  );
};
