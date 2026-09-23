import React, { useState, useMemo } from 'react';
import {
  Receipt,
  Users,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { ALL_SERVICES } from '../data/services';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { ServiceCardSlideUp } from '../components/ui/ServiceCardSlideUp';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';

type SubFilter = 'todos' | 'tributaria' | 'laboral';

export const TaxServicesView: React.FC = () => {
  const [subFilter, setSubFilter] = useState<SubFilter>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const taxAndLaborServices = useMemo(() => {
    let list = ALL_SERVICES.filter((s) => s.category === 'tributaria' || s.category === 'laboral');

    if (subFilter !== 'todos') {
      list = list.filter((s) => s.category === subFilter);
    }

    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase();
    return list.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.badge.toLowerCase().includes(q) ||
        s.deliverables.some((d) => d.toLowerCase().includes(q))
    );
  }, [subFilter, searchQuery]);

  return (
    <div className="pt-24 bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO (FONDO PASTEL CELESTE METÁLICO)
         ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F8FC] via-[#EAF2FA] to-[#F4F8FC]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl font-black text-[#102547] tracking-tight mb-4 font-heading">
                Servicios Tributarios y Laborales
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                Liquidación oportuna de declaraciones de IVA e Impuesto a la Renta ante el SRI, trámite de devolución de impuestos, anexos ATS/RDEP, patentes 1.5 x mil, y gestión integral de nómina, roles y obligaciones patronales en el IESS.
              </p>

              {/* Badges de Autoridad */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-sky-200/80 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                  <span>Servicio de Rentas Internas (SRI)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-sky-200/80 shadow-2xs">
                  <Users className="w-4 h-4 text-[#0284C7]" />
                  <span>Seguridad Social (IESS & SUT)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-sky-200/80 shadow-2xs">
                  <Receipt className="w-4 h-4 text-[#0284C7]" />
                  <span>Cero Multas por Glosas</span>
                </div>
              </div>
            </div>

            {/* Buscador Rápido y Filtro de Sub-Categoría */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl bg-white border border-sky-900/10 shadow-lg">
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
        <div className="absolute bottom-0 left-0 right-0">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="wave2" />
        </div>
      </section>


      {/* ========================================================= */}
      {/* 2. GRID DE LAS 13 TARJETAS CON CAJÓN TÉCNICO SLIDE-UP     */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {taxAndLaborServices.map((service) => (
              <ServiceCardSlideUp key={service.id} service={service} />
            ))}
          </div>

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
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar por WhatsApp con un Especialista</span>
          </a>
        </div>
      </section>

    </div>
  );
};
