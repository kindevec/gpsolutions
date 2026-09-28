import React, { useRef } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/SocialIcons';
import { ALL_SERVICES } from '../data/services';
import { buildWhatsAppLink } from '../data/company';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';

export const TaxServicesView: React.FC = () => {
  const tributariosServices = ALL_SERVICES.filter((s) => s.category === 'tributaria');
  const laboralesServices = ALL_SERVICES.filter((s) => s.category === 'laboral');

  const taxCarouselRef = useRef<HTMLDivElement>(null);

  const scrollTaxCarousel = (direction: 'left' | 'right') => {
    if (taxCarouselRef.current) {
      const scrollAmount = taxCarouselRef.current.clientWidth * 0.85;
      taxCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO (TÍTULO Y TEXTO CENTRADOS)
         ========================================================================= */}
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-32 md:pt-56 md:pb-36 overflow-hidden bg-[#102547]">
        {/* Foto de Fondo con Máscara Ondulada y Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/hero-tax.jpg"
            alt="Servicios Tributarios y Laborales en GP Solutions"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a30]/95 via-[#102547]/88 to-[#0c1a30]/82" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a30]/80 via-transparent to-[#102547]/90" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Contenido del Hero Centrado */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-4 sm:mt-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 font-heading drop-shadow-md leading-[1.12]">
            <span className="text-white">Servicios </span>
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#7dd3fc] to-white bg-clip-text text-transparent">
              Tributarios
            </span>
            <span className="text-white"> y </span>
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-[#FCD34D] bg-clip-text text-transparent">
              Laborales
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Liquidación oportuna de declaraciones de IVA e Impuesto a la Renta ante el SRI, trámite de devolución de impuestos, anexos ATS/RDEP, patentes 1.5 x mil, y gestión integral de nómina, roles y obligaciones patronales en el IESS.
          </p>
        </div>

        {/* Onda Divisoria */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="wave2" />
        </div>
      </section>


      {/* =========================================================================
          2. SECCIÓN 1: SERVICIOS TRIBUTARIOS (SRI) - CARRUSEL LINEAL (8 TARJETAS)
         ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden group/tax">
        {/* Efectos de Iluminación Ambiental */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#0284C7]/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Cabecera Centrada (Sin icono) */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#102547] tracking-tight">
              Servicios Tributarios ante el SRI
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
              Declaraciones de IVA e Impuesto a la Renta, retenciones, anexos ATS y recuperación técnica de tributos con 100% de apego a la normativa fiscal.
            </p>
          </div>

          {/* Carrusel Deslizable de Forma Lineal con Flechas Flotantes */}
          <div className="relative">
            {/* Botón Flecha Izquierda Flotante (más afuera del carrusel) */}
            <button
              type="button"
              onClick={() => scrollTaxCarousel('left')}
              aria-label="Deslizar anterior"
              className="absolute -left-4 sm:-left-8 md:-left-12 lg:-left-14 xl:-left-16 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-white text-[#102547] hover:text-[#0284C7] border border-slate-200 shadow-[0_8px_30px_rgba(2,132,199,0.25)] flex items-center justify-center transition-all duration-300 opacity-0 group-hover/tax:opacity-100 pointer-events-none group-hover/tax:pointer-events-auto hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.8]" />
            </button>

            {/* Contenedor del Carrusel Lineal con las 8 Tarjetas */}
            <div
              ref={taxCarouselRef}
              className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-2 no-scrollbar relative z-10"
            >
              {tributariosServices.map((service, idx) => {
                const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);
                const isGold = idx % 2 === 1;
                return (
                  <article
                    key={service.id}
                    className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-center rounded-3xl border ${
                      isGold
                        ? 'border-amber-200/90 hover:border-amber-400 hover:shadow-[0_12px_40px_rgba(245,158,11,0.2)]'
                        : 'border-slate-200/90 hover:border-[#0284C7] hover:shadow-[0_12px_40px_rgba(2,132,199,0.22)]'
                    } bg-white hover:bg-gradient-to-b hover:from-white ${
                      isGold ? 'hover:to-amber-50/40' : 'hover:to-sky-50/40'
                    } hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col justify-between group/card shadow-sm`}
                  >
                    {/* 1. Imagen de Portada con Zoom */}
                    <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100 shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-500 opacity-95 group-hover/card:opacity-100"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('hero-tax.jpg')) {
                            target.src = '/images/heroes/hero-tax.jpg';
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102547]/80 via-transparent to-black/20 pointer-events-none" />
                      
                      {/* Luz al hover */}
                      <div className={`absolute inset-0 ${
                        isGold ? 'bg-gradient-to-tr from-amber-400/20 via-transparent to-yellow-300/15' : 'bg-gradient-to-tr from-[#0284C7]/20 via-transparent to-amber-400/10'
                      } opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                    </div>

                    {/* 2. Cuerpo de la Tarjeta con Todo el Texto Completo */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                      <div>
                        {/* Título de la tarjeta */}
                        <h3 className={`text-base sm:text-lg font-heading font-bold text-[#102547] ${
                          isGold ? 'group-hover/card:text-amber-600' : 'group-hover/card:text-[#0284C7]'
                        } transition-colors duration-300 leading-snug mb-2`}>
                          {service.title}
                        </h3>

                        {/* Descripción completa sin cortes */}
                        <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-3.5">
                          {service.description}
                        </p>

                        {/* 2 Entregables Principales con Checkmark */}
                        <div className="space-y-1.5 mb-4 pt-3 border-t border-slate-100">
                          {service.deliverables.slice(0, 2).map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                              <Check className={`w-4 h-4 ${isGold ? 'text-amber-500' : 'text-[#0284C7]'} shrink-0 mt-0.5`} />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Botón de Cotizar */}
                      <div className={`pt-3 border-t ${isGold ? 'border-amber-200/60' : 'border-slate-100'}`}>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm ${
                            isGold
                              ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-black shadow-md shadow-amber-950/30 hover:shadow-[0_0_18px_rgba(245,158,11,0.5)]'
                              : 'bg-gradient-to-r from-[#0284C7] to-[#0369a1] hover:from-[#38BDF8] hover:to-[#0284C7] text-white shadow-md hover:shadow-sky-500/30'
                          } transition-all duration-300 active:scale-95 cursor-pointer`}
                        >
                          <span>Cotizar</span>
                          <WhatsAppIcon className={`w-4 h-4 ${isGold ? 'text-slate-950' : 'text-white'}`} />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Botón Flecha Derecha Flotante (más afuera del carrusel) */}
            <button
              type="button"
              onClick={() => scrollTaxCarousel('right')}
              aria-label="Deslizar siguiente"
              className="absolute -right-4 sm:-right-8 md:-right-12 lg:-right-14 xl:-right-16 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-white text-[#102547] hover:text-[#0284C7] border border-slate-200 shadow-[0_8px_30px_rgba(2,132,199,0.25)] flex items-center justify-center transition-all duration-300 opacity-0 group-hover/tax:opacity-100 pointer-events-none group-hover/tax:pointer-events-auto hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.8]" />
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          3. SECCIÓN 2: SERVICIOS LABORALES (IESS & SUT) - ESTILO NEON CYAN
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#081829] relative overflow-hidden text-white border-t border-cyan-900/60">
        {/* Efectos de Iluminación de Fondo */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#00e5ff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Cabecera Centrada (Sin icono y sin etiqueta arriba) */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight">
              Servicios Laborales y Seguridad Social (IESS & SUT)
            </h2>
            <p className="text-cyan-100/80 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
              Elaboración de roles de pago, registro de contratos en plataforma SUT, liquidaciones y avisos patronales para evitar multas, glosas y mora en el IESS.
            </p>
          </div>

          {/* Contenedor de Tarjetas Laborales con estilo cyan glow, información equilibrada y tarjetas inferiores centradas */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-7">
            {laboralesServices.map((service, idx) => {
              const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);
              const isGold = idx % 2 === 1;
              return (
                <article
                  key={service.id}
                  className={`w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] max-w-sm rounded-2xl sm:rounded-3xl border-2 ${
                    isGold
                      ? 'border-amber-400/80 hover:border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_35px_rgba(245,158,11,0.45)]'
                      : 'border-[#00b4d8]/85 hover:border-[#00e5ff] shadow-[0_0_20px_rgba(0,180,216,0.18)] hover:shadow-[0_0_35px_rgba(0,229,255,0.45)]'
                  } bg-gradient-to-b from-[#0e273c] via-[#091b2c] to-[#071624] p-4 sm:p-5 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group`}
                >
                  <div>
                    {/* Imagen de Portada con marco redondeado interno */}
                    <div className="relative w-full h-44 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden bg-[#05111d] shadow-inner">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('hero-tax.jpg')) {
                            target.src = '/images/heroes/hero-tax.jpg';
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091b2c]/80 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Efecto de luz al hover */}
                      <div className={`absolute inset-0 ${
                        isGold ? 'bg-amber-400/15' : 'bg-cyan-400/10'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                    </div>

                    {/* Cuerpo de la Tarjeta (Título centrado en blanco, descripción y 2 entregables principales) */}
                    <div className="pt-4 pb-1 text-center">
                      <h3 className={`text-base sm:text-lg font-heading font-bold text-white ${
                        isGold ? 'group-hover:text-amber-300' : 'group-hover:text-[#38BDF8]'
                      } transition-colors duration-300 leading-snug`}>
                        {service.title}
                      </h3>
                      <p className="text-cyan-100/80 text-xs sm:text-[13px] mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* 2 Entregables clave en tarjetas laborales */}
                    <div className={`space-y-1.5 my-3 pt-3 border-t ${isGold ? 'border-amber-400/25' : 'border-cyan-500/20'} text-left`}>
                      {service.deliverables.slice(0, 2).map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-cyan-100/90">
                          <Check className={`w-4 h-4 ${isGold ? 'text-amber-400' : 'text-[#38BDF8]'} shrink-0 mt-0.5`} />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón de Cotizar */}
                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm ${
                        isGold
                          ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-black shadow-md shadow-amber-950/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)]'
                          : 'bg-gradient-to-r from-[#0284C7] to-[#00b4d8] hover:from-[#00b4d8] hover:to-[#38BDF8] text-white shadow-md shadow-cyan-950/40 hover:shadow-[0_0_20px_rgba(0,180,216,0.6)]'
                      } transition-all duration-300 active:scale-95 cursor-pointer`}
                    >
                      <span>Cotizar</span>
                      <WhatsAppIcon className={`w-4 h-4 ${isGold ? 'text-slate-950' : 'text-white'}`} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          4. BANNER DE CONTACTO TRIBUTARIO Y LABORAL
         ========================================================================= */}
      <section className="py-14 bg-[#EAF2FA] border-t border-sky-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-extrabold text-2xl text-[#102547] mb-2">
            ¿Tiene declaraciones atrasadas o dudas sobre el cálculo de liquidaciones?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Realizamos la revisión inmediata de su buzón en el SRI y el portal patronal del IESS para regularizar su situación de forma oportuna.
          </p>

          <a
            href={buildWhatsAppLink('Hola GP SOLUTIONS (+593999840649), necesito asesoría urgente para regularizar mi situación tributaria/laboral.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369a1] text-white shadow-md shadow-sky-500/20 transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Consultar por WhatsApp con un Especialista</span>
          </a>
        </div>
      </section>

    </div>
  );
};
