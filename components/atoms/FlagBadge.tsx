'use client';

import React from 'react';
import Image from 'next/image';

interface FlagBadgeProps {
  src: string;
  alt: string;
  size?: number;
}

export const FlagBadge: React.FC<FlagBadgeProps> = ({ src, alt, size = 40 }) => {
  return (
    <div
      className="absolute rounded-full overflow-hidden border-2 border-white shadow-md"
      style={{
        width: size,
        height: size,
        bottom: 0,
        right: 0,
      }}>
      <Image src={src} alt={alt} width={size} height={size} className="object-cover w-full h-full" />
    </div>
  );
};
