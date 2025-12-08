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
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 w-[300px] h-[408px]">
      <div className="relative">
        <ProfileImage src={card.profileImage} alt={card.name} size={150} />
        <FlagBadge src={card.flagImage} alt={`${card.name} flag`} size={40} />
      </div>

      <h3 className="text-[#24252F] text-2xl font-black text-center">{card.name}</h3>

      <p className="text-[#4A77FF] text-base font-black text-center">{card.job}</p>

      <div className="grid grid-cols-2 gap-2 w-full mt-2">
        {card.infoItems.map((item, index) => (
          <InfoItem key={`${card.id}-info-${index}`} text={item} />
        ))}
      </div>
    </div>
  );
};
