import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Lock, Scale, Building2, MapPin, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import type { TabKey } from '../types';

interface AboutViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onSelectTab }) => {
  return (
    <div className="pt-24 bg-[#F4F9F9] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO (FONDO PASTEL METÁLICO)
         ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F9F9] via-[#EAF4F5] to-[#F4F9F9]">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-200/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-5xl font-black text-[#102547] tracking-tight mb-4 font-heading">
              Firma Contable y Legal en Tumbaco, Quito
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              En <strong className="text-[#102547]">{COMPANY_DATA.name}</strong> proporcionamos certeza y tranquilidad tributaria a personas naturales (RIMPE y Régimen General) y a sociedades mercantiles (S.A.S., Cías. Ltda. y S.A.) en todo el Ecuador.
            </p>
          </div>
        </div>

        {/* Separador Ondulado */}
        <div className="absolute bottom-0 left-0 right-0">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="wave1" />
        </div>
      </section>


      {/* =========================================================================
          2. DETALLE CORPORATIVO Y LIDERAZGO TÉCNICO
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Columna Texto */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#0D9488] uppercase tracking-wider block mb-2">
                Trayectoria de Autoridad
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#102547] tracking-tight mb-4">
                Más de 12 Años Custodiando la Salud Financiera de Empresas y Emprendedores
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Bajo la dirección de <strong className="text-[#102547]">{COMPANY_DATA.director}</strong>, nos enfocamos en que cada cliente entienda sus números, pague lo justo conforme a la ley y nunca sea sorprendido por notificaciones coactivas del SRI o bloqueos patronales del IESS.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Operamos desde nuestro despacho en <strong className="text-[#102547]">Tumbaco, Quito - Pichincha</strong>, integrando herramientas digitales que permiten atender con la misma cercanía a empresas en Guayaquil, Cuenca, Santo Domingo y el resto del país.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-[#F4F9F9] border border-teal-100 flex items-start gap-3">
                  <Scale className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#102547]">Rigor Normativo</h4>
                    <p className="text-xs text-slate-500">Apego estricto a NIIF y resoluciones del SRI.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4F9F9] border border-teal-100 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#102547]">Confidencialidad</h4>
                    <p className="text-xs text-slate-500">Secreto profesional y resguardo de datos.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-[#0D9488] hover:bg-[#0b7c72] text-white transition-all shadow-md shadow-[#0D9488]/20 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Contactar con el Director</span>
                </a>

                <button
                  onClick={() => onSelectTab('contacto')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-[#102547] bg-[#EAF4F5] hover:bg-teal-100 transition-all cursor-pointer"
                >
                  <span>Ver Despacho en Tumbaco</span>
                </button>
              </div>
            </div>

            {/* Columna Medallón Oficial */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-8 rounded-3xl bg-[#F4F9F9] border border-teal-900/10 shadow-lg text-center max-w-sm w-full">
                <div className="w-36 h-36 mx-auto mb-4">
                  <img
                    src="/logo.webp"
                    alt="Logo GP Solutions"
                    className="w-full h-full object-contain drop-shadow-md"
                    width={144}
                    height={144}
                  />
                </div>

                <h3 className="font-heading font-black text-xl text-[#102547] mb-1">
                  {COMPANY_DATA.director}
                </h3>
                <p className="text-xs text-[#0D9488] font-bold mb-4">
                  Representante Legal & Consultor Principal
                </p>

                <div className="space-y-2 text-xs text-slate-700 text-left pt-4 border-t border-teal-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>Especialista en Auditoría y Normas NIIF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>Planificación Tributaria y Anexos SRI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>Consultor en Creación de Sociedades S.A.S.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>Tumbaco, Quito - Ecuador</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Pilares */}
          <div className="pt-12 border-t border-slate-100">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-heading font-extrabold text-2xl text-[#102547] mb-2">
                Nuestros 4 Pilares Innegociables
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Principios rectores aplicados rigurosamente en cada proceso contable y tributario.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Confidencialidad Absoluta',
                  desc: 'Secreto profesional riguroso en balances, compras, nómina y patrimonio.',
                },
                {
                  title: 'Puntualidad en Vencimientos',
                  desc: 'Declaración anticipada para evitar saturación de servidores del SRI y multas.',
                },
                {
                  title: 'Atención Personalizada',
                  desc: 'Comunicación fluida y directa sin intermediarios ni burocracia.',
                },
                {
                  title: 'Blindaje Preventivo',
                  desc: 'Optimización legal de deducciones y asesoría continua ante auditorías.',
                },
              ].map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#F4F9F9] border border-teal-900/10 hover:border-[#0D9488]/40 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-100 text-[#0D9488] font-bold text-xs flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#102547] mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
