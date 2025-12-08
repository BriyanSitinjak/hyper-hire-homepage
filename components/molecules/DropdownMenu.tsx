'use client';

import React from 'react';

interface MenuItem {
  href: string;
  label: string;
}

interface DropdownMenuProps {
  buttonLabel: string;
  items: MenuItem[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ buttonLabel, items }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-white font-black hover:opacity-80 focus:outline-none">
        <span>{buttonLabel}</span>
        <svg
          className="w-4 h-4 transition-transform group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute left-0 mt-2 min-w-[240px] min-h-[164px] bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
        <ul className="flex flex-col gap-2 px-2">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block text-gray-800 px-3 py-1 rounded hover:bg-blue-50 font-medium text-sm">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

