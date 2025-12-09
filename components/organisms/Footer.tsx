'use client';

import React from 'react';
import Image from 'next/image';
import { serviceCards, textFooterCompany } from '@/const';
import { TextFooterCompany } from '../atoms/TextFooterCompany';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-20 bg-[#FBFBFB] overflow-x-hidden">
      <div className="w-full mx-auto px-[346px] flex flex-col gap-[46px]">
        {/* Top Section: Logo, Tagline, Contact & Service Cards */}
        <div className="flex flex-row justify-between items-start mb-16">
          {/* Left: Logo, Tagline, Contact */}
          <div className="flex flex-col gap-4 w-[247px]">
            {/* Logo */}
            <Image 
              src="/hyper-hire-logo.png" 
              alt="Hyperhire Logo" 
              width={187} 
              height={34}
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
          <div className="flex flex-row gap-[15px]">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col p-4 gap-3 items-start justify-start w-[187px] h-[142px] bg-white rounded-xl"
              >
                <div className='bg-[#EFF1F6] p-2 rounded-lg'>
                  <Image 
                    src={card.icon} 
                    alt={card.title} 
                    width={24} 
                    height={24}
                  />
                </div>
                <h3 className="text-[14px] font-black text-black">
                  {card.title}
                </h3>
                <a className='flex flex-row gap-1 items-center justify-center cursor-pointer' href={card.link}>
                  <span className="text-[14px] font-black text-[#5E626F] mt-1">바로가기</span>
                  <Image 
                      src={'go_to_footer.svg'} 
                      alt={'go to'} 
                      width={20} 
                      height={20}
                    />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Company Information */}
        <div className="flex gap-11">
          {textFooterCompany.map((text, index) => (
            <TextFooterCompany key={index} title={text.title} name={text.name} address={text.address} />
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-0.5">
            <p className="font-black text-[13px] text-[#5E626F]">© 2023 Hyperhire</p>
          </div>
      </div>
    </footer>
  );
};
