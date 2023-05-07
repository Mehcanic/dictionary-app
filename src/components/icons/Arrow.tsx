import React from 'react';

type ArrowIconProps = React.SVGProps<SVGSVGElement> & {
  stroke?: string;
};

const ArrowIcon: React.FC<ArrowIconProps> = ({...props}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="14" 
      height="8" 
      viewBox="0 0 14 8"
      {...props}
    >
      <path 
        fill="none" 
        stroke="#A445ED" 
        strokeWidth="1.5" 
        d="m1 1 6 6 6-6"
      />
    </svg>
  );
};

export default ArrowIcon;
