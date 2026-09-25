import React, { useState } from 'react';
import {
  FileText,
  X,
} from 'lucide-react';
import { GlareCard } from './glare-card';
import { WhatsAppIcon } from './SocialIcons';
import { ServiceItem } from '../../types';
import { buildWhatsAppLink } from '../../data/company';

interface ServiceGlareCardProps {
  service: ServiceItem;
}

export const ServiceGlareCard: React.FC<ServiceGlareCardProps> = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);

  return (
    <GlareCard
      containerClassName="w-full h-full min-h-[460px] sm:min-h-[500px] md:min-h-[520px] [aspect-ratio:unset]"
      className="flex flex-col justify-between p-0 overflow-hidden relative text-white bg-gradient-to-b from-[#0c1a30] via-[#091426] to-[#060e1c] border border-sky-400/25 shadow-2xl rounded-[36px]"
    >
      {/* 1. Imagen Superior Grande */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full h-64 sm:h-72 md:h-76 overflow-hidden bg-slate-900 cursor-pointer group"
        title="Pulsar para ver ficha técnica y entregables"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          loading="lazy"
          crossOrigin="anonymous"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('hero-accounting.jpg')) {
              target.src = '/images/heroes/hero-accounting.jpg';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30] via-[#0c1a30]/30 to-transparent" />
      </div>

      {/* 2. Frontal Limpio: Solo Título y Botones con Mayor Escala */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between relative z-10">
        {/* Título del Servicio */}
        <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight leading-snug line-clamp-2 mb-5">
          {service.title}
        </h3>

        {/* Botones: Ficha Técnica + Cotizar */}
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all cursor-pointer active:scale-95 shadow-xs"
          >
            <FileText className="w-4 h-4 text-sky-300" />
            <span>Ficha Técnica</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#0284C7] to-[#0369a1] text-white hover:brightness-110 transition-all shadow-md shadow-sky-900/40 active:scale-95"
          >
            <span>Cotizar</span>
            <WhatsAppIcon className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>

      {/* 3. Panel Desplegable In-Situ (Ficha Técnica Completa con Información Preservada) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-0 z-30 bg-[#091426]/98 backdrop-blur-lg p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 animate-in fade-in"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Ficha Técnica & Alcance
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar ficha"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h4 className="text-base font-bold text-white mb-2 leading-snug line-clamp-2">
              {service.title}
            </h4>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed line-clamp-2">
              {service.description}
            </p>

            <div className="space-y-2.5 text-xs mb-3">
              {/* Base Legal */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 block mb-0.5">
                  Base Legal Ecuatoriana
                </span>
                <p className="font-medium text-slate-200 text-[11px] line-clamp-2">
                  {service.legalBasis}
                </p>
              </div>

              {/* Todos los Entregables */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 max-h-36 overflow-y-auto">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-300 block mb-1">
                  Entregables Clave
                </span>
                <ul className="space-y-1">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5 font-medium text-slate-200 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1" />
                      <span className="leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/15 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0284C7] hover:bg-[#0369a1] text-white transition-all shadow-md shadow-sky-500/20"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Consultar alcance por WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs text-slate-400 hover:text-white py-1 transition-colors cursor-pointer"
            >
              ✕ Volver a la tarjeta
            </button>
          </div>
        </div>
      )}
    </GlareCard>
  );
};
