'use client';

import React from 'react';
import { ProfileImage } from '../atoms/ProfileImage';
import { FlagBadge } from '../atoms/FlagBadge';
import { InfoItem } from '../atoms/InfoItem';
import type { ProfileCard as ProfileCardType } from '@/types';

interface ProfileCardProps {
  card: ProfileCardType;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ card }) => {
  return (
    <div className="bg-white rounded-xl p-6 lg:p-9 flex flex-col items-center justify-center gap-3 lg:gap-4 w-[240px] lg:w-[310px] h-auto min-h-[320px] lg:h-[408px]">
      <div className="relative pt-2 lg:pt-4">
        <ProfileImage src={card.profileImage} alt={card.name} size={120} />
        <FlagBadge src={card.flagImage} alt={`${card.name} flag`} />
      </div>

      <div className='relative'>
        <h1 className="text-[#24252F] text-xl lg:text-2xl font-black text-center">{card.name}</h1>
        <p className="text-[#4A77FF] text-sm lg:text-base font-black text-center">{card.job}</p>
      </div>


      <div className="grid grid-cols-2 gap-1 w-full pt-3 lg:pt-5">
        {card.infoItems.slice(0, 2).map((item, index) => (
          <div
            key={`${card.id}-info-${index}`}
            className="flex justify-center col-span-2"
            style={{ width: '100%' }}
          >
            <div style={{ width: 'max-content' }}>
              <InfoItem text={item} />
            </div>
          </div>
        ))}
        {card.infoItems.slice(2).map((item, index) => (
          <InfoItem key={`${card.id}-info-${index + 2}`} text={item} />
        ))}
      </div>
    </div>
  );
};
