import React, { useState, useMemo } from 'react';
import {
  Receipt,
  Users,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/SocialIcons';
import { ALL_SERVICES } from '../data/services';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { ServiceCardSlideUp } from '../components/ui/ServiceCardSlideUp';
import { StackedCards } from '../components/ui/glass-cards';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';

type SubFilter = 'todos' | 'tributaria' | 'laboral';

export const TaxServicesView: React.FC = () => {
  const [subFilter, setSubFilter] = useState<SubFilter>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const tributariosServices = useMemo(() => {
    const list = ALL_SERVICES.filter((s) => s.category === 'tributaria');
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.badge.toLowerCase().includes(q) ||
        s.deliverables.some((d) => d.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const laboralesServices = useMemo(() => {
    const list = ALL_SERVICES.filter((s) => s.category === 'laboral');
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.badge.toLowerCase().includes(q) ||
        s.deliverables.some((d) => d.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO (FOTO TRIBUTARIA + MÁSCARA ONDULADA)
         ========================================================================= */}
      <section className="relative pt-32 pb-24 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 overflow-hidden bg-[#102547]">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 font-heading drop-shadow-md leading-[1.12]">
                <span className="text-white">Servicios </span>
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#7dd3fc] to-white bg-clip-text text-transparent">
                  Tributarios
                </span>
                <span className="text-white"> y </span>
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-100 bg-clip-text text-transparent">
                  Laborales
                </span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                Liquidación oportuna de declaraciones de IVA e Impuesto a la Renta ante el SRI, trámite de devolución de impuestos, anexos ATS/RDEP, patentes 1.5 x mil, y gestión integral de nómina, roles y obligaciones patronales en el IESS.
              </p>

              {/* Badges de Autoridad */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-white">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  <span>Servicio de Rentas Internas (SRI)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 shadow-sm">
                  <Users className="w-4 h-4 text-[#38BDF8]" />
                  <span>Seguridad Social (IESS & SUT)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 shadow-sm">
                  <Receipt className="w-4 h-4 text-[#38BDF8]" />
                  <span>Cero Multas por Glosas</span>
                </div>
              </div>
            </div>

            {/* Buscador Rápido y Filtro de Sub-Categoría */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl">
                <label className="text-xs font-bold text-[#102547] uppercase tracking-wider block mb-2">
                  Filtrar Especialidad
                </label>

                {/* Subfiltros */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button
                    onClick={() => setSubFilter('todos')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                      subFilter === 'todos'
                        ? 'bg-[#0284C7] text-white shadow-sm'
                        : 'bg-[#F4F8FC] text-slate-700 hover:bg-slate-100 border border-sky-100'
                    }`}
                  >
                    Todos (13)
                  </button>

                  <button
                    onClick={() => setSubFilter('tributaria')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                      subFilter === 'tributaria'
                        ? 'bg-[#0284C7] text-white shadow-sm'
                        : 'bg-[#F4F8FC] text-slate-700 hover:bg-slate-100 border border-sky-100'
                    }`}
                  >
                    SRI (8)
                  </button>

                  <button
                    onClick={() => setSubFilter('laboral')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                      subFilter === 'laboral'
                        ? 'bg-[#0284C7] text-white shadow-sm'
                        : 'bg-[#F4F8FC] text-slate-700 hover:bg-slate-100 border border-sky-100'
                    }`}
                  >
                    IESS (5)
                  </button>
                </div>

                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar declaración, nómina, SRI..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F4F8FC] border border-sky-200 text-xs text-[#102547] placeholder-slate-400 focus:outline-none focus:border-[#0284C7] transition-colors"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Onda Divisoria */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="wave2" />
        </div>
      </section>


      {/* ========================================================= */}
      {/* 2. CATÁLOGO CON SEPARACIÓN TRIBUTARIA Y LABORAL            */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SECCIÓN 1: SERVICIOS TRIBUTARIOS (SRI) */}
          {(subFilter === 'todos' || subFilter === 'tributaria') && (
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-1.5">
                  <Receipt className="w-5 h-5 text-[#0284C7]" />
                  <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#102547] tracking-tight">
                    Servicios Tributarios ante el SRI
                  </h2>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm max-w-2xl text-justify">
                  Declaraciones de IVA e Impuesto a la Renta, retenciones, anexos ATS y recuperación técnica de tributos con 100% apego a la normativa fiscal.
                </p>
              </div>

              {/* Vista Móvil: Glass Cards */}
              <div className="block md:hidden">
                <StackedCards
                  cards={tributariosServices.map((s) => ({
                    id: s.id,
                    title: s.title,
                    description: s.description,
                    color: 'rgba(2, 132, 199, 0.85)',
                    badge: s.badge,
                    category: s.category,
                    categoryLabel: s.categoryLabel,
                    deliverables: s.deliverables,
                    legalBasis: s.legalBasis,
                    frequency: s.frequency,
                    image: s.image,
                    whatsappMessage: s.whatsappMessage,
                  }))}
                />
              </div>

              {/* Vista Tablet / Desktop: Grid de 3 en 3 */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {tributariosServices.map((service) => (
                  <ServiceCardSlideUp key={service.id} service={service} />
                ))}
              </div>
            </div>
          )}

          {/* SEPARACIÓN ENTRE SECCIÓN TRIBUTARIA Y LABORAL */}
          {subFilter === 'todos' && tributariosServices.length > 0 && laboralesServices.length > 0 && (
            <div className="relative my-12 sm:my-16">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-sky-100" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#F4F8FC] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0284C7] border border-sky-200 rounded-full shadow-xs">
                  Área Laboral y Seguridad Social
                </span>
              </div>
            </div>
          )}

          {/* SECCIÓN 2: SERVICIOS LABORALES (IESS & SUT) */}
          {(subFilter === 'todos' || subFilter === 'laboral') && (
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-1.5">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#102547] tracking-tight">
                    Servicios Laborales y Seguridad Social (IESS & SUT)
                  </h2>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm max-w-2xl text-justify">
                  Elaboración de roles de pago, registro de contratos en plataforma SUT, liquidaciones y avisos patronales para evitar multas, glosas y mora en el IESS.
                </p>
              </div>

              {/* Vista Móvil: Glass Cards */}
              <div className="block md:hidden">
                <StackedCards
                  cards={laboralesServices.map((s) => ({
                    id: s.id,
                    title: s.title,
                    description: s.description,
                    color: 'rgba(16, 185, 129, 0.85)',
                    badge: s.badge,
                    category: s.category,
                    categoryLabel: s.categoryLabel,
                    deliverables: s.deliverables,
                    legalBasis: s.legalBasis,
                    frequency: s.frequency,
                    image: s.image,
                    whatsappMessage: s.whatsappMessage,
                  }))}
                />
              </div>

              {/* Vista Tablet / Desktop: Grid de 3 en 3 */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {laboralesServices.map((service) => (
                  <ServiceCardSlideUp key={service.id} service={service} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>


      {/* ========================================================= */}
      {/* 3. BANNER DE CONTACTO TRIBUTARIO                           */}
      {/* ========================================================= */}
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
