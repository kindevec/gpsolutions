import React from 'react';
import { WhatsAppIcon } from '../components/ui/SocialIcons';
import { buildWhatsAppLink } from '../data/company';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import { CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';

export const CorporateLegalView: React.FC = () => {
  const data = CATEGORIES_DATA['asesoria-legal'];

  return (
    <div className="bg-[#F4F8FC] text-[#102547]">
      {/* =========================================================================
          1. HEADER HERO INSTITUCIONAL
         ========================================================================= */}
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-32 md:pt-56 md:pb-36 overflow-hidden bg-[#102547]">
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            alt="Asesoría Legal Corporativa - GP Solutions"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a30]/95 via-[#102547]/88 to-[#0c1a30]/82" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a30]/80 via-transparent to-[#102547]/90" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-4 sm:mt-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 font-heading drop-shadow-md leading-[1.12]">
            <span className="text-white">Asesoría Legal </span>
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
              Corporativa
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            {data.generalDescription}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none translate-y-px">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="organic" />
        </div>
      </section>

      {/* =========================================================================
          2. PILARES Y SUBSECCIONES DETALLADAS (5 SUBSECCIONES)
         ========================================================================= */}
      <section className="-mt-1 py-14 sm:py-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {data.subsections.map((sub, idx) => {
            const isReverse = idx % 2 === 1;
            const whatsappMsg = `Hola GP Solutions (+593 982577313), deseo cotizar el área de: Asesoría Legal Corporativa - ${sub.title}.`;
            const whatsappUrl = buildWhatsAppLink(whatsappMsg);

            return (
              <div
                key={sub.id}
                id={sub.id}
                className="scroll-mt-28 rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-[0_10px_35px_rgba(16,37,71,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_15px_45px_rgba(245,158,11,0.12)]"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 ${isReverse ? 'lg:grid-flow-dense' : ''}`}>
                  
                  {/* Bloque Imagen: Limpia sin etiquetas ni títulos */}
                  <div className={`lg:col-span-5 relative group ${isReverse ? 'lg:col-start-8' : ''}`}>
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-xl border-2 border-slate-200/80 group-hover:border-amber-400/80 transition-colors duration-500">
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('hero-accounting.jpg')) {
                            target.src = '/images/heroes/hero-accounting.jpg';
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Bloque Contenido: Título limpio sin números */}
                  <div className={`lg:col-span-7 flex flex-col justify-center space-y-5 ${isReverse ? 'lg:col-start-1' : ''}`}>
                    <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#102547] tracking-tight">
                      {sub.title}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {sub.description}
                    </p>

                    {/* Lista de Servicios */}
                    <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-5 sm:p-6 space-y-3">
                      <h3 className="text-xs font-black uppercase text-[#0284C7] tracking-wider flex items-center gap-2">
                        <span>Servicios incluidos en esta área:</span>
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2.5">
                        {sub.services.map((srv, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3 text-slate-800 text-xs sm:text-sm">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0 mt-0.5" />
                            <span className="font-medium leading-snug">{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botones de Acción */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-black shadow-md hover:shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                        <span>Cotizar {sub.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <a
                        href="tel:+593982577313"
                        className="inline-flex items-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 hover:text-[#0284C7] bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>Hablar con un asesor legal</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Banner de Consulta Legal Directa */}
      <section className="py-12 bg-gradient-to-r from-[#0c1a30] via-[#102547] to-[#0c1a30] text-white border-t border-sky-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-heading font-black">
            ¿Deseas proteger tu patrimonio, registrar tu marca o formalizar contratos?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
            Acompañamos a tu empresa en cada hito corporativo con respaldo normativo ante la Superintendencia de Compañías, SENADI y Ministerio del Trabajo.
          </p>
          <div className="pt-2">
            <a
              href={buildWhatsAppLink("Hola GP Solutions (+593 982577313), solicito asesoría legal corporativa para mi empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-slate-950" />
              <span>Contactar Asesor Legal</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
