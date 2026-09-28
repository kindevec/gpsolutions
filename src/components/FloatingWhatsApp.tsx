import React, { useState, useEffect, useRef } from 'react';
import { WhatsAppIcon } from './ui/SocialIcons';
import { COMPANY_DATA } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealedMobile, setIsRevealedMobile] = useState(false);
  const hideTimerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the button if user clicks/touches outside on mobile
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsRevealedMobile(false);
        if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
      }
    };

    document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('mousedown', handleOutsideClick);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobileView = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isMobileView) {
      // On mobile when collapsed, first touch reveals the button instead of navigating
      if (!isRevealedMobile) {
        e.preventDefault();
        setIsRevealedMobile(true);

        // Auto-hide after 5.5 seconds if user doesn't tap it
        if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = window.setTimeout(() => {
          setIsRevealedMobile(false);
        }, 5500);
        return;
      }

      // If already revealed and user taps it, navigate to WhatsApp
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    }
  };

  const isVisible = isHovered || isRevealedMobile;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] md:bottom-[calc(1.75rem+env(safe-area-inset-bottom,0px))] right-0 z-50 flex items-center select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating WhatsApp Button: Yellow / Gold branded */}
      <a
        href={COMPANY_DATA.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        onClick={handleButtonClick}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className={`relative group flex items-center justify-center w-11 h-11 xs:w-12 xs:h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 border-2 border-yellow-100 shadow-[0_6px_20px_rgba(0,0,0,0.35),0_0_20px_rgba(245,158,11,0.6)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.45),0_0_26px_rgba(245,158,11,0.85)] transition-all duration-400 ease-out cursor-pointer active:scale-95 ${
          isVisible
            ? '-translate-x-3 sm:-translate-x-4 md:-translate-x-5 md:scale-110'
            : 'translate-x-6 sm:translate-x-7 md:translate-x-8 md:hover:translate-x-0'
        }`}
        aria-label="Contactar a GP Solutions por WhatsApp"
      >
        {/* Ping pulse ring when at rest */}
        <span
          className={`absolute inset-0 rounded-full bg-amber-400 transition-opacity duration-300 pointer-events-none ${
            isVisible ? 'opacity-0' : 'opacity-40 animate-ping'
          }`}
        />

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-7.5 md:h-7.5 text-[#0A1C24] relative z-10 shrink-0 drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]" />
      </a>
    </div>
  );
};
