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
    <div className="bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO (FOTO CONTABLE + MÁSCARA ONDULADA)
         ========================================================================= */}
      <section className="relative pt-32 pb-24 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 overflow-hidden bg-[#102547]">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-heading drop-shadow-sm">
                Servicios Contables y Corporativos
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                Llevamos la contabilidad bajo normativa NIIF, elaboramos balances auditables, tramitamos el cumplimiento anual en la Superintendencia de Compañías y constituimos su empresa S.A.S. de forma ágil y segura.
              </p>

              {/* Badges de Autoridad */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-white">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  <span>Normas NIIF para PYMES</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 shadow-sm">
                  <Building2 className="w-4 h-4 text-[#38BDF8]" />
                  <span>Superintendencia de Compañías</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  <span>Constitución Express de S.A.S.</span>
                </div>
              </div>
            </div>

            {/* Buscador Rápido */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl">
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
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F4F8FC] border border-sky-200 text-xs text-[#102547] placeholder-slate-400 focus:outline-none focus:border-[#0284C7] transition-colors"
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
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
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
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar con un Contador en WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
};
