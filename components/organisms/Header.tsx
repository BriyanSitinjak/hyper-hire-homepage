'use client';

import React from 'react';
import Image from 'next/image';
import { DropdownMenu } from '../molecules/DropdownMenu';

const menuItems = [
  { href: '#about-1', label: '채용' },
  { href: '#about-2', label: '해외 개발자 원격 채용' },
  { href: '#about-3', label: '외국인 원격 채용 (비개발 직군)' },
  { href: '#about-4', label: '한국어 가능 외국인 채용' },
];

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-transparent">
      <div className="h-full px-[346px] flex items-center justify-between py-2.5">
          <Image src="/logo_hyper_hire_white.png" alt="Hyper Hire Logo" width={100} height={21} />

        <div className="flex flex-row gap-15">
          <DropdownMenu buttonLabel="채용" items={menuItems} />
          <h3 className="font-black text-base text-white">해외 개발자 활용 서비스</h3>
        </div>

        <div>
          <button className="text-[#4A77FF] font-black text-xl text-center py-1.5 px-6 bg-white hover:bg- rounded-lg ">
            문의하기
          </button>
        </div>
      </div>
    </header>
  );
};
