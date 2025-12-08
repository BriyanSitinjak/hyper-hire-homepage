'use client';

import React from 'react';

interface InfoItemProps {
  text: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ text }) => {
  return (
    <div className="rounded-[6px] border border-[#C1C5CF] px-4 py-2">
      <span className="text-[#5E626F] text-base font-black">{text}</span>
    </div>
  );
};
