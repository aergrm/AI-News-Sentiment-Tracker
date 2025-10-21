
import React from 'react';

export const ThumbsUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.77,2.23C14.31,1.77,13.69,1.5,13,1.5H5.5C4.34,1.5,3.34,2.16,2.87,3.14L0,9.5v11h11.59c0.75,0,1.41-0.41,1.75-1.03l4.58-10.45C18.15,8.53,17.84,8,17.18,8H14V3.5C14,3.09,14.21,2.72,14.77,2.23M5.5,18.5H2v-7h3.5V18.5M22,10.5c0,0.83-0.67,1.5-1.5,1.5S19,11.33,19,10.5c0-0.83,0.67-1.5,1.5-1.5S22,9.67,22,10.5Z" />
  </svg>
);

export const ThumbsDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.23,21.77C9.69,22.23,10.31,22.5,11,22.5H18.5c1.16,0,2.16-0.66,2.63-1.64L24,14.5V3.5H12.41c-0.75,0-1.41,0.41-1.75,1.03L6.08,15.02C5.85,15.47,6.16,16,6.82,16H10v5.5C10,20.91,9.79,21.28,9.23,21.77M18.5,5.5H22v7h-3.5V5.5M2,13.5c0-0.83,0.67-1.5,1.5-1.5S5,12.67,5,13.5c0,0.83-0.67,1.5-1.5,1.5S2,14.33,2,13.5Z" />
  </svg>
);

export const MinusCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2M17,13H7v-2h10Z" />
  </svg>
);

export const AILogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.45,9.22A1,1,0,0,0,17,8H15V6a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1V8H7a1,1,0,0,0-1,1v1.59a1,1,0,0,0,.29.7l3.42,3.42A1,1,0,0,0,10,15.41V17H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2H14V15.41a1,1,0,0,0,.29-.71l3.42-3.42A1,1,0,0,0,18,10.59V9.22M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2Z"/>
    </svg>
);
