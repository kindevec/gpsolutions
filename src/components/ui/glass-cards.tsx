import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Check,
  FileText,
  X,
  Building2,
  Receipt,
  Users,
  ExternalLink
} from 'lucide-react';
import { cardData, CardItemData } from '../../lib/utils';
import { WhatsAppIcon } from './SocialIcons';
import { buildWhatsAppLink } from '../../data/company';

gsap.registerPlugin(ScrollTrigger);

export interface CardProps {
  id: number | string;
  title: string;
  description: string;
  index: number;
  totalCards: number;
  color?: string;
  badge?: string;
  category?: string;
  categoryLabel?: string;
  deliverables?: string[];
  legalBasis?: string;
  frequency?: string;
  image?: string;
  whatsappMessage?: string;
}

export const GlassCard: React.FC<CardProps> = ({
  title,
  description,
  index,
  color = 'rgba(2, 132, 199, 0.85)',
  badge,
  category = 'contable',
  categoryLabel = 'Contable y Corporativo',
  deliverables = [],
  legalBasis,
  frequency,
  image,
  whatsappMessage
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const defaultMsg = whatsappMessage || `Hola GP SOLUTIONS, deseo asesoría para: ${title}.`;
  const whatsappUrl = buildWhatsAppLink(defaultMsg);

  return (
    <article
      ref={cardRef}
      className="relative w-full rounded-2xl sm:rounded-3xl isolate transition-transform duration-300 active:scale-[0.99]"
    >
      {/* 1. Borde Eléctrico con Degradado Conic Corporativo */}
      <div
        className="absolute -inset-[2px] rounded-2xl sm:rounded-3xl pointer-events-none -z-10"
        style={{
          background: `conic-gradient(
            from 180deg,
            transparent 0deg,
            ${color} 65deg,
            rgba(56, 189, 248, 0.9) 130deg,
            transparent 190deg,
            ${color} 270deg,
            transparent 360deg
          )`,
          filter: 'blur(0.5px)'
        }}
      />

      {/* 2. Contenedor Glassmorphism Principal */}
      <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/70 bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(16,37,71,0.08)] flex flex-col">
        
        {/* Capa de Reflejo Glass Superior */}
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
            borderRadius: '16px 16px 0 0'
          }}
        />

        {/* Línea de Brillo Superior */}
        <div
          className="absolute top-2 left-3 right-3 h-[1px] pointer-events-none z-10 opacity-70"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)'
          }}
        />

        {/* Línea de Reflejo Lateral */}
        <div
          className="absolute top-0 left-0 w-[1.5px] h-full pointer-events-none z-10 opacity-60"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, transparent 60%)'
          }}
        />

        {/* Cabecera con Imagen y Badge */}
        {image && (
          <div
            onClick={() => setIsOpen(true)}
            className="relative w-full h-40 sm:h-48 overflow-hidden bg-slate-100 cursor-pointer"
            title="Pulsar para ver ficha técnica"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
              crossOrigin="anonymous"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('hero-accounting.jpg')) {
                  target.src = '/images/heroes/hero-accounting.jpg';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102547]/80 via-transparent to-black/20" />

            {/* Badge de Autoridad */}
            {badge && (
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#0284C7] shadow-sm border border-sky-100">
                {badge}
              </span>
            )}

            {/* Icono de Categoría */}
            <div className="absolute bottom-3 right-3 w-8 h-8 rounded-xl bg-white/95 border border-sky-900/10 backdrop-blur-sm flex items-center justify-center text-[#0284C7] shadow-md">
              {category === 'contable' && <Building2 className="w-4 h-4" />}
              {category === 'tributaria' && <Receipt className="w-4 h-4" />}
              {category === 'laboral' && <Users className="w-4 h-4" />}
            </div>
          </div>
        )}

        {/* Cuerpo de la Tarjeta */}
        <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white/95">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-extrabold text-[#0284C7] tracking-wider uppercase">
                {categoryLabel}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                #{index + 1}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-[#102547] leading-snug mb-1.5 font-heading">
              {title}
            </h3>

            <p className="text-slate-600 text-xs leading-relaxed mb-3 text-justify">
              {description}
            </p>

            {/* Entregables Resumidos */}
            {deliverables && deliverables.length > 0 && (
              <div className="space-y-1 mb-4 pt-2.5 border-t border-slate-100">
                {deliverables.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Botones de Acción Móviles (Ergonomía Táctil) */}
          <div className="grid grid-cols-2 gap-2 pt-1 items-center">
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
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-[#102547] hover:bg-[#153760] text-white active:scale-95 transition-all shadow-sm"
            >
              <span>Cotizar</span>
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
            </a>
          </div>
        </div>

        {/* 3. Panel Desplegable In-Situ (Slide-Up Drawer para Ficha Técnica) */}
        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="absolute inset-0 z-20 bg-white/98 backdrop-blur-xl p-5 flex flex-col justify-between transition-all duration-300 animate-in fade-in"
          >
            <div>
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                  Ficha Técnica #{index + 1}
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

              <h4 className="text-sm font-bold text-[#102547] mb-1.5 leading-snug">
                {title}
              </h4>
              <p className="text-[11px] text-slate-600 mb-3 leading-relaxed text-left">
                {description}
              </p>

              <div className="space-y-2 text-xs mb-3">
                {legalBasis && (
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-500 block mb-0.5">
                      Base Legal Ecuatoriana
                    </span>
                    <p className="font-semibold text-[#102547] text-[11px] line-clamp-1">{legalBasis}</p>
                  </div>
                )}

                {deliverables && deliverables.length > 0 && (
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0284C7] block mb-1">
                      Entregables Incluidos
                    </span>
                    <ul className="space-y-1">
                      {deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-1.5 font-medium text-slate-700 text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                          <span className="line-clamp-1">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0284C7] hover:bg-[#0369a1] text-white transition-all shadow-md shadow-sky-500/20"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Consultar por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-xs text-slate-500 hover:text-slate-800 py-1 transition-colors cursor-pointer"
              >
                ✕ Volver
              </button>
            </div>
          </div>
        )}

      </div>
    </article>
  );
};

interface StackedCardsProps {
  cards?: CardItemData[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const StackedCards: React.FC<StackedCardsProps> = ({
  cards = cardData,
  title,
  subtitle,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container.children,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out'
      }
    );
  }, [cards.length]);

  return (
    <div className={`w-full ${className}`}>
      {(title || subtitle) && (
        <div className="text-center px-4 mb-4">
          {title && (
            <h2 className="text-lg font-black text-[#102547] font-heading tracking-tight mb-1">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Grid vertical compacto y fluido para móvil sin espacios en blanco */}
      <div ref={containerRef} className="grid grid-cols-1 gap-4 w-full">
        {cards.map((card, index) => (
          <GlassCard
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            index={index}
            totalCards={cards.length}
            color={card.color || (index % 2 === 0 ? 'rgba(2, 132, 199, 0.85)' : 'rgba(56, 189, 248, 0.85)')}
            badge={card.badge}
            category={card.category}
            categoryLabel={card.categoryLabel}
            deliverables={card.deliverables}
            legalBasis={card.legalBasis}
            frequency={card.frequency}
            image={card.image}
            whatsappMessage={card.whatsappMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
