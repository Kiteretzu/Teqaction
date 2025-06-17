'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

type ButtonPosition = 'left' | 'center' | 'right';
type ButtonColor = 'primary' | 'secondary' | 'custom';

interface ButtonProps {
  label: string;
  link: string;
  position?: ButtonPosition;
  paddingX?: string;
  paddingY?: string;
  color?: ButtonColor;
  customColor?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  link, 
  position = 'left', 
  paddingX = 'px-4', 
  paddingY = 'py-0',
  color = 'primary',
  customColor = 'bg-gray-900'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const positionClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[position];

  const colorClass = {
    primary: 'bg-gray-900',
    secondary: 'bg-blue-600',
    custom: customColor
  }[color];

  return (
    <div className={`flex ${positionClass} m-5 z-10`}>
      <Link href={link} className="flex group">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`${paddingY} ${paddingX} text-white rounded-l-full ${colorClass} flex items-center transition-all duration-300 ease-in-out ${
            isHovered ? 'rounded-full' : ''
          }`}
        >
          <span className="font-semibold">{label}</span>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`${paddingY} ${paddingX} rounded-r-full flex items-center justify-center ${colorClass} transition-all duration-300 ease-in-out ${
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