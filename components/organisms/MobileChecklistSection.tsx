'use client';

import React from 'react';

interface ChecklistItem {
  text: string;
}

const checklistItems: ChecklistItem[] = [
  { text: '한국어 능력' },
  { text: '업무 수행 능력' },
  { text: '겸업 여부' },
  { text: '평판 조회' },
];

export const MobileChecklistSection: React.FC = () => {
  return (
    <div className="lg:hidden w-full mt-6">
      <div className="grid grid-cols-2 gap-2 mb-6">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6667 3.5L5.25 9.91667L2.33334 7"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Text */}
            <p className="text-white font-black text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      <p className="text-[#FBFF23] font-black text-base underline text-left">
        개발자가 필요하신가요?
      </p>
    </div>
  );
};
