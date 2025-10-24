import React from 'react';

type IconProps = {
  className?: string;
};

export const LogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3H3V21H6V3Z" />
    <path d="M12 3L6 9V21H12V3Z" />
    <path d="M18 3L12 9V21H18V3Z" />
    <path d="M21 3H18V21H21V3Z" />
  </svg>
);
