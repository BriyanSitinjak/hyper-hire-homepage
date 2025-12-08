'use client';

import React from 'react';
import Image from 'next/image';

interface FlagBadgeProps {
  src: string;
  alt: string;
}

export const FlagBadge: React.FC<FlagBadgeProps> = ({ src, alt }) => {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        width: 25,
        height: 18,
        bottom: 0,
        right: '10px',
      }}>
      <Image src={src} alt={alt} width={25} height={18} className="object-cover w-full h-full" />
    </div>
  );
};
