'use client';

import React from 'react';

interface TooltipProps {
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div
      className="absolute top-[-26px] lg:top-[16px] left-1/2 z-50 flex flex-col items-center w-[152px] h-[51px]"
      style={{
        transform: 'translateX(-50%)',
      }}
    >
      <div
        className="flex items-center px-4 py-2"
        style={{
          background: '#E9F7EF',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          position: 'relative',
        }}
      >
        <img
          src="/tooltip_card.svg"
          alt="Tooltip Icon"
          width={22}
          height={22}
          style={{ marginRight: 8 }}
        />
        <span
          style={{
            color: '#00C696',
            fontWeight: 700,
            fontSize: 18,
            whiteSpace: 'nowrap'
          }}
        >
          {text}
        </span>
      </div>
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: '10px solid #E9F7EF',
        }}
      />
    </div>
  );
};

