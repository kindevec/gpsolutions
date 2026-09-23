import React, { useId } from 'react';

interface CurvedShapeDividerProps {
  fillColor?: string;
  position?: 'top' | 'bottom';
  className?: string;
  variant?: 'wave1' | 'wave2' | 'organic';
}

export const CurvedShapeDivider: React.FC<CurvedShapeDividerProps> = ({
  fillColor = '#F4F8FC',
  position = 'bottom',
  className = '',
  variant = 'wave1',
}) => {
  const uniqueId = useId().replace(/:/g, '');

  const paths = {
    wave1: 'M0,48 C240,110 480,10 720,60 C960,110 1200,20 1440,64 L1440,120 L0,120 Z',
    wave2: 'M0,64 C360,130 720,10 1080,75 C1240,100 1360,50 1440,70 L1440,120 L0,120 Z',
    organic: 'M0,32 C280,100 520,0 800,55 C1080,110 1300,25 1440,60 L1440,120 L0,120 Z',
  };

  const selectedPath = paths[variant] || paths.wave1;

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none ${
        position === 'top' ? 'rotate-180 -mt-1' : '-mb-1'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="relative block w-full h-12 sm:h-18 md:h-24 lg:h-32"
      >
        <path
          d={selectedPath}
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
