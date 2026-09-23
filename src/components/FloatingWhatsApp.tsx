import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 sm:right-6 z-40 flex items-end gap-2.5">
      {/* Floating Tooltip Help */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/95 text-white text-xs shadow-xl border border-white/10 backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-ping" />
          <span>¿Consultas con el SRI o IESS? Escríbanos</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 cursor-pointer"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={COMPANY_DATA.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#00D26A] hover:bg-[#00c060] text-[#0B192C] flex items-center justify-center shadow-lg shadow-[#00D26A]/30 transition-all duration-300 transform hover:scale-108 active:scale-95 cursor-pointer"
        aria-label="Contactar a GP Solutions por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </div>
  );
};
