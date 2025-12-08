'use client';

import React from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
}
export const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, size = 150 }) => {
  return (
    <div className="relative rounded-full overflow-hidden" style={{ width: size, height: size }}>
      <Image src={src} alt={alt} width={size} height={size} className="object-cover w-full h-full" />
    </div>
  );
};
