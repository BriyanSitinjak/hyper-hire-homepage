'use client';

import React from 'react';

interface InfoItemProps {
  text: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ text }) => {
  return (
    <div className="flex flex-nowrap rounded-[6px] border border-[#C1C5CF] py-1 px-3">
      <span className="text-[#5E626F] text-base font-black">{text}</span>
    </div>
  );
};
