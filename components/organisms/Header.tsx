'use client';

import React from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-transparent">
      <div className="h-full px-[346px] flex justify-between border border-solid border-red-900 py-2.5">
        <div className="border border-solid border-red-900">
          <Image src="/logo_hyper_hire_white.png" alt="Hyper Hire Logo" width={100} height={21} />
        </div>
        <div className="border border-solid border-red-900">
          <div className="relative group">
            <button className="flex items-center gap-1 text-white hover:opacity-80 focus:outline-none">
              <span>서비스 소개</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 min-w-[180px] bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
              <ul className="flex flex-col gap-2 px-2">
                <li>
                  <a
                    href="#about-1"
                    className="block text-gray-800 px-3 py-1 rounded hover:bg-blue-50 font-medium text-sm">
                    글로벌 개발자 네트워크
                  </a>
                </li>
                <li>
                  <a
                    href="#about-2"
                    className="block text-gray-800 px-3 py-1 rounded hover:bg-blue-50 font-medium text-sm">
                    개발자 검증 시스템
                  </a>
                </li>
                <li>
                  <a
                    href="#about-3"
                    className="block text-gray-800 px-3 py-1 rounded hover:bg-blue-50 font-medium text-sm">
                    언어 및 소통 지원
                  </a>
                </li>
                <li>
                  <a
                    href="#about-4"
                    className="block text-gray-800 px-3 py-1 rounded hover:bg-blue-50 font-medium text-sm">
                    합리적 가격 정책
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h3 className="font-bold text-base text-white">해외 개발자 활용 서비스</h3>
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
