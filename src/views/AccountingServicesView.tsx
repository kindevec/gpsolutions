import React from 'react';
import { WhatsAppIcon } from '../components/ui/SocialIcons';
import { ALL_SERVICES } from '../data/services';
import { buildWhatsAppLink } from '../data/company';
import { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent } from '../components/ui/reveal-on-hover';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';

export const AccountingServicesView: React.FC = () => {
  const contableServices = ALL_SERVICES.filter((s) => s.category === 'contable');

  return (
    <div className="bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO (TÍTULO Y TEXTO CENTRADOS)
         ========================================================================= */}
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-32 md:pt-56 md:pb-36 overflow-hidden bg-[#102547]">
        {/* Foto de Fondo con Máscara Ondulada y Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/hero-accounting.jpg"
            alt="Servicios Contables y Corporativos en GP Solutions"
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
              Contables
            </span>
            <span className="text-white"> y </span>
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
              Corporativos
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Llevamos la contabilidad bajo normativa NIIF, elaboramos balances auditables, tramitamos el cumplimiento anual en la Superintendencia de Compañías y constituimos su empresa S.A.S. de forma ágil y segura.
          </p>
        </div>

        {/* Onda Divisoria */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="organic" />
        </div>
      </section>


      {/* =========================================================================
          2. GRID DE TARJETAS ESTILO CONTABILIDAD Y BALANCES (CARD HOVER REVEAL)
         ========================================================================= */}
      <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {contableServices.map((service, idx) => {
              const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);
              const isGold = idx % 2 === 1;
              return (
                <div key={service.id} className="w-full flex flex-col">
                  <CardHoverReveal className={`w-full h-[500px] sm:h-[520px] md:h-[540px] rounded-3xl overflow-hidden shadow-xl border ${
                    isGold
                      ? 'border-amber-400/40 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]'
                      : 'border-slate-700/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]'
                  } bg-slate-900 relative group transition-all duration-500 hover:-translate-y-1.5`}>
                    
                    {/* Portada Principal con Imagen Nítida sin tintes azules */}
                    <CardHoverRevealMain className="size-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="size-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-100"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('hero-accounting.jpg')) {
                            target.src = '/images/heroes/hero-accounting.jpg';
                          }
                        }}
                      />
                      {/* Degradado oscuro neutro inferior para máxima legibilidad del texto sin teñir la foto de azul */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                      {/* Haz de luz perimetral sutil en dorado */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/15 via-transparent to-yellow-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                      {/* Indicador táctil en pantallas móviles para descubrir entregables */}
                      <div className="absolute top-4 left-4 z-20 lg:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-[10.5px] font-semibold text-slate-200 pointer-events-none group-data-[revealed=true]:opacity-0 transition-opacity duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span>Toca para detalles</span>
                      </div>

                      {/* Título y descripción en la base: Visibles completos sin cortes, se ocultan al revelar */}
                      <div className="absolute bottom-5 left-5 right-5 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-y-4 group-data-[revealed=true]:opacity-0 group-data-[revealed=true]:translate-y-4 pointer-events-none">
                        <h3 className="text-lg sm:text-xl font-heading font-black text-white leading-snug drop-shadow-md">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-200 mt-2 leading-relaxed drop-shadow-sm">
                          {service.description}
                        </p>
                      </div>
                    </CardHoverRevealMain>

                    {/* Contenido desplegable en Hover: Solo se muestra este cuadro al pasar el mouse */}
                    <CardHoverRevealContent className={`space-y-3.5 rounded-2xl bg-gradient-to-b from-[#091426]/95 via-[#0c1e38]/95 to-[#091426]/98 backdrop-blur-2xl border ${
                      isGold ? 'border-amber-400/50 shadow-[0_10px_35px_rgba(245,158,11,0.25)]' : 'border-sky-400/40 shadow-[0_10px_35px_rgba(2,132,199,0.3)]'
                    } p-5 sm:p-6 text-white`}>
                      <div className="space-y-2">
                        <span className={`text-[11px] sm:text-xs font-bold ${isGold ? 'text-amber-300' : 'text-[#38BDF8]'} uppercase tracking-wider block`}>
                          Entregables destacados:
                        </span>
                        <div className="space-y-2">
                          {service.deliverables.slice(0, 4).map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-200">
                              <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b]' : 'bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]'} mt-1.5 shrink-0`} />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {service.legalBasis && (
                        <div className="pt-2 border-t border-white/10 text-[11px] text-slate-300 flex items-start gap-1.5">
                          <span className="font-bold text-[#FCD34D] shrink-0">Base legal:</span>
                          <span className="leading-tight">{service.legalBasis}</span>
                        </div>
                      )}

                      <div className="pt-2 border-t border-white/10">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm ${
                            isGold
                              ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-black shadow-md shadow-amber-950/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)]'
                              : 'bg-gradient-to-r from-[#0284C7] via-[#0369a1] to-[#102547] hover:from-[#38BDF8] hover:via-[#0284C7] hover:to-[#0369a1] text-white shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]'
                          } transition-all duration-300 active:scale-95`}
                        >
                          <span>Cotizar</span>
                          <WhatsAppIcon className={`w-4 h-4 ${isGold ? 'text-slate-950' : 'text-white'}`} />
                        </a>
                      </div>
                    </CardHoverRevealContent>

                  </CardHoverReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =========================================================================
          3. BANNER DE ASESORÍA PERSONALIZADA
         ========================================================================= */}
      <section className="py-14 bg-[#EAF2FA] border-t border-sky-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-extrabold text-2xl text-[#102547] mb-2">
            ¿Requiere un diagnóstico contable de su empresa?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Analizamos el estado de sus balances y su situación ante la Superintendencia de Compañías para planificar su cierre anual sin sanciones.
          </p>

          <a
            href={buildWhatsAppLink('Hola GP SOLUTIONS (+593999840649), solicito un diagnóstico de la situación contable de mi negocio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369a1] text-white shadow-md shadow-sky-500/20 transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Consultar con un Contador en WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
};
