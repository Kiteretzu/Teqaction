'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  link: string;
  position?: 'left' | 'center' | 'right';
}

const Button: React.FC<ButtonProps> = ({ label, link, position = 'left' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const positionClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[position];

  return (
    <div className={`flex ${positionClass} m-5`}>
      <Link href={link} className="flex group">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`h-[2.3rem] px-4 text-white rounded-l-full bg-gray-900 flex items-center transition-all duration-300 ease-in-out ${
            isHovered ? 'rounded-full' : ''
          }`}
        >
          <span className="font-semibold">{label}</span>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-[2.3rem] h-[2.3rem] rounded-r-full flex items-center justify-center bg-gray-900 transition-all duration-300 ease-in-out ${
            isHovered ? 'rounded-full' : ''
          }`}
        >
          <ArrowUpRight className="text-white w-4 h-4" />
        </div>
      </Link>
    </div>
  );
};

export default Button;
