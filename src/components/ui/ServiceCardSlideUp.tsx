import React, { useState } from 'react';
import {
  FileText,
  Check,
  X,
  Building2,
  Receipt,
  Users,
  ArrowRight,
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { ServiceItem } from '../../types';
import { buildWhatsAppLink } from '../../data/company';

interface ServiceCardSlideUpProps {
  service: ServiceItem;
}

export const ServiceCardSlideUp: React.FC<ServiceCardSlideUpProps> = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);

  return (
    <article
      className="relative overflow-hidden rounded-3xl border border-sky-900/10 bg-white hover:border-[#0284C7]/40 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(16,37,71,0.06)] hover:shadow-xl flex flex-col justify-between group"
    >
      {/* 1. Full-Bleed Image Stage */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100 cursor-pointer rounded-t-3xl"
        title="Pulsar para ver alcance técnico y entregables"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
          loading="lazy"
          crossOrigin="anonymous"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('hero-accounting.jpg')) {
              target.src = '/images/heroes/hero-accounting.jpg';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102547]/75 via-transparent to-black/20" />

        {/* Indicador de Icono */}
        <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/95 border border-sky-900/10 backdrop-blur-sm flex items-center justify-center text-[#0284C7] shadow-md group-hover:bg-[#102547] group-hover:text-white transition-colors">
          {service.category === 'contable' && <Building2 className="w-4 h-4" />}
          {service.category === 'tributaria' && <Receipt className="w-4 h-4" />}
          {service.category === 'laboral' && <Users className="w-4 h-4" />}
        </div>
      </div>

      {/* 2. Cuerpo de la Tarjeta */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
        <div>
          <span className="text-[11px] font-bold text-[#0284C7] tracking-wider uppercase block mb-1.5">
            {service.categoryLabel}
          </span>
          <h3 className="text-xl font-bold text-[#102547] tracking-tight mb-2.5 min-h-[3.25rem] flex items-center">
            {service.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
            {service.description}
          </p>

          <div className="space-y-2 mb-6 pt-3.5 border-t border-slate-100">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                <Check className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Acciones duales */}
        <div className="grid grid-cols-2 gap-2.5 pt-2 items-center">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="text-xs font-semibold text-slate-500 hover:text-[#0284C7] underline-offset-4 hover:underline transition-colors cursor-pointer text-center py-2"
          >
            Ficha Técnica
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-[#102547] text-white hover:bg-[#153760] transition-colors shadow-sm"
          >
            <span>Cotizar</span>
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
          </a>
        </div>
      </div>

      {/* 3. Panel Desplegable In-Situ (Slide-Up Drawer) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 animate-in fade-in"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#102547]">
                Ficha Técnica
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                aria-label="Cerrar ficha"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h4 className="text-base font-bold text-[#102547] mb-2 leading-snug line-clamp-1">
              {service.title}
            </h4>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed line-clamp-2">
              {service.description}
            </p>

            <div className="space-y-2 text-xs mb-3">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-0.5">
                  Base Legal Ecuatoriana
                </span>
                <p className="font-semibold text-[#102547] text-[11px] line-clamp-1">{service.legalBasis}</p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0284C7] block mb-1">
                  Entregables Clave
                </span>
                <ul className="space-y-1">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-1.5 font-medium text-slate-700 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                      <span className="line-clamp-1">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 space-y-2">
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
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800 py-1 transition-colors cursor-pointer"
            >
              ✕ Volver a la tarjeta
            </button>
          </div>
        </div>
      )}
    </article>
  );
};
