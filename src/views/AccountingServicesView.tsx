import React, { useState, useMemo } from 'react';
import {
  Building2,
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

export const AccountingServicesView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const contableServices = useMemo(() => {
    const list = ALL_SERVICES.filter((s) => s.category === 'contable');
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
    <div className="pt-24 bg-[#F4F9F9] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO (FONDO PASTEL TURQUESA METÁLICO)
         ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F9F9] via-[#EAF4F5] to-[#F4F9F9]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl font-black text-[#102547] tracking-tight mb-4 font-heading">
                Servicios Contables y Corporativos
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                Llevamos la contabilidad bajo normativa NIIF, elaboramos balances auditables, tramitamos el cumplimiento anual en la Superintendencia de Compañías y constituimos su empresa S.A.S. de forma ágil y segura.
              </p>

              {/* Badges de Autoridad */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-teal-200/80 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                  <span>Normas NIIF para PYMES</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-teal-200/80 shadow-2xs">
                  <Building2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Superintendencia de Compañías</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-teal-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>Constitución Express de S.A.S.</span>
                </div>
              </div>
            </div>

            {/* Buscador Rápido */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white border border-teal-900/10 shadow-lg">
                <label className="text-xs font-bold text-[#102547] uppercase tracking-wider block mb-2">
                  Buscar Servicio Contable
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ej. Balances, S.A.S., NIIF..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F4F9F9] border border-teal-200 text-xs text-[#102547] placeholder-slate-400 focus:outline-none focus:border-[#0D9488] transition-colors"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-2">
                  Mostrando {contableServices.length} de 8 servicios contables oficiales.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Onda Divisoria */}
        <div className="absolute bottom-0 left-0 right-0">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="organic" />
        </div>
      </section>


      {/* =========================================================================
          2. GRID DE LAS 8 TARJETAS CON CAJÓN TÉCNICO SLIDE-UP
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contableServices.map((service) => (
              <ServiceCardSlideUp key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          3. BANNER DE ASESORÍA PERSONALIZADA
         ========================================================================= */}
      <section className="py-14 bg-[#EAF4F5] border-t border-teal-200/60">
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
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-[#0D9488] hover:bg-[#0b7c72] text-white shadow-md shadow-[#0D9488]/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar con un Contador en WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
};
