'use client';

import React from 'react';
import Image from 'next/image';
import { serviceCards, textFooterCompany } from '@/const';
import { TextFooterCompany } from '../atoms/TextFooterCompany';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-10 sm:py-20 bg-[#FBFBFB] overflow-x-hidden">
      <div className="w-full mx-auto px-4 lg:px-[346px] flex flex-col gap-6 sm:gap-[46px]">
        {/* Top Section: Logo, Tagline, Contact & Service Cards */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between mb-8 lg:mb-16 w-full">
          {/* Left: Logo, Tagline, Contact */}
          <div className="flex flex-col gap-4 w-full max-w-[247px] lg:w-[247px] mb-8 lg:mb-0">
            {/* Logo */}
            <Image 
              src="/hyper-hire-logo.png" 
              alt="Hyperhire Logo" 
              width={187} 
              height={34}
              className="w-auto h-auto max-w-[150px] sm:max-w-[187px]"
            />
            
            {/* Tagline */}
            <p className="text-[14px] text-[#343741] font-black mt-0.5">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-col gap-2">
              <p className="text-[13px] text-[#5E626F] font-black">010-0000-0000</p>
              <p className="text-[13px] text-[#5E626F] font-black">aaaaa@naver.com</p>
            </div>
          </div>

          {/* Right: Service Cards */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row gap-3 sm:gap-[15px] w-full max-w-[360px] lg:max-w-none lg:w-auto">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col p-3 sm:p-4 gap-2 sm:gap-3 items-start justify-start w-full lg:w-[187px] h-auto min-h-[120px] sm:min-h-[142px] lg:h-[142px] bg-white rounded-xl"
              >
                <div className='bg-[#EFF1F6] p-2 rounded-lg'>
                  <Image 
                    src={card.icon} 
                    alt={card.title} 
                    width={24} 
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <h3 className="text-[12px] sm:text-[14px] font-black text-black leading-tight">
                  {card.title}
                </h3>
                <a className='flex flex-row gap-1 items-center justify-center cursor-pointer' href={card.link}>
                  <span className="text-[12px] sm:text-[14px] font-black text-[#5E626F] mt-1">바로가기</span>
                  <Image 
                      src={'go_to_footer.svg'} 
                      alt={'go to'} 
                      width={20} 
                      height={20}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Company Information */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-9">
          {textFooterCompany.map((text, index) => (
            <TextFooterCompany key={index} title={text.title} name={text.name} address={text.address} />
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-0.5 w-full">
            <p className="font-black text-[11px] sm:text-[13px] text-[#5E626F]">© 2023 Hyperhire</p>
          </div>
      </div>
    </footer>
  );
};
