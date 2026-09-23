import React from 'react';

interface MaskedBackgroundLayerProps {
  imageUrl: string;
  alt?: string;
  maskType?: 'radial' | 'linear-vertical' | 'soft-edges';
  opacity?: number;
  className?: string;
}

export const MaskedBackgroundLayer: React.FC<MaskedBackgroundLayerProps> = ({
  imageUrl,
  alt = 'Fondo enmascarado',
  maskType = 'radial',
  opacity = 0.08,
  className = '',
}) => {
  const getMaskStyle = (): React.CSSProperties => {
    switch (maskType) {
      case 'radial':
        return {
          maskImage:
            'radial-gradient(circle at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 80%)',
        };
      case 'linear-vertical':
        return {
          maskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.85) 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.85) 85%, transparent 100%)',
        };
      case 'soft-edges':
      default:
        return {
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 90%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 90%)',
        };
    }
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      style={getMaskStyle()}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover object-center filter grayscale mix-blend-multiply transition-opacity duration-700"
        style={{ opacity }}
        loading="lazy"
      />
    </div>
  );
};
