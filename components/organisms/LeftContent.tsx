'use client';

import React from 'react';
import { AnimatedText } from '../molecules/AnimatedText';

interface LeftContentProps {
  texts: Array<{
    id: string;
    content: string;
    fontSize: string;
    position: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
    animationDelay: number;
  }>;
}
export const LeftContent: React.FC<LeftContentProps> = ({ texts }) => {
  return (
    <div className="relative w-full h-full">
      {texts.map((text) => (
        <AnimatedText
          key={text.id}
          content={text.content}
          fontSize={text.fontSize}
          position={text.position}
          animationDelay={text.animationDelay}
        />
      ))}
    </div>
  );
};
