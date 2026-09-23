import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Lock, Scale, Building2, MapPin, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import type { TabKey } from '../types';

interface AboutViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onSelectTab }) => {
  return (
    <div className="pb-16 sm:pb-28 pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Institucional */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D26A] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Firma Corporativa Ecuatoriana</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Sobre GP SOLUTIONS
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
            {COMPANY_DATA.name} — Control Integral que construye Confianza para el crecimiento sólido de su negocio en el Ecuador.
          </p>
        </div>

        {/* Historia y Liderazgo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          
          {/* Columna Texto (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-bold text-[#00D26A] uppercase tracking-wider mb-2">
              Solvencia & Trayectoria
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Más de 12 Años Custodiando la Salud Financiera de Empresas y Emprendedores
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              En <strong className="text-white">GP SOLUTIONS</strong> somos una firma ecuatoriana fundada y liderada por <strong className="text-white">{COMPANY_DATA.director}</strong>, orientada a transformar la gestión tributaria, contable y societaria en una ventaja estratégica para nuestros clientes.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Operando desde nuestro despacho en <strong className="text-white">Tumbaco, Quito</strong> y brindando cobertura técnica a nivel nacional, nos convertimos en el aliado que asume la responsabilidad de mantener a su empresa 100% blindada ante el Servicio de Rentas Internas (SRI), el Instituto Ecuatoriano de Seguridad Social (IESS) y la Superintendencia de Compañías.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#00D26A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Rigor Técnico y Legal</div>
                  <div className="text-xs text-slate-400">Apego irrestricto a NIIF, LORTI y Código del Trabajo.</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Confidencialidad Total</div>
                  <div className="text-xs text-slate-400">Secreto profesional y custodia blindada de archivos.</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_DATA.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#00D26A] hover:bg-[#00c060] text-[#0B192C] transition-all cursor-pointer shadow-lg shadow-[#00D26A]/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Contactar con el Director</span>
              </a>

              <button
                onClick={() => onSelectTab('servicios')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <span>Ver Servicios</span>
              </button>
            </div>
          </div>

          {/* Columna Visual Emblema (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-[#0B192C] to-slate-950 border border-white/15 shadow-2xl flex flex-col items-center text-center">
              
              <div className="w-36 h-36 mb-6">
                <img
                  src="/logo.webp"
                  alt="GP Solutions Logo"
                  className="w-full h-full object-contain drop-shadow-xl"
                  width={144}
                  height={144}
                />
              </div>

              <h3 className="font-heading font-extrabold text-xl text-white mb-1">
                {COMPANY_DATA.director}
              </h3>
              <p className="text-xs text-[#00D26A] font-semibold mb-4">
                Representante Legal & Director de Operaciones
              </p>

              <div className="w-full space-y-2.5 pt-4 border-t border-white/10 text-xs text-slate-300 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D26A] shrink-0" />
                  <span>Especialista en Tributación y Normativa SRI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D26A] shrink-0" />
                  <span>Auditoría de Estados Financieros bajo NIIF</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D26A] shrink-0" />
                  <span>Consultor Societario en Creación de S.A.S.</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00B4D8] shrink-0" />
                  <span>Despacho: {COMPANY_DATA.location}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pilares Fundamentales */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Nuestros 4 Pilares Innegociables
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              La filosofía de trabajo que asegura que su empresa nunca enfrente glosas o contingencias.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Confidencialidad',
                desc: 'Todo registro contable, balance y nómina se trata con estricto secreto profesional bajo cláusulas de custodia.',
              },
              {
                title: 'Puntualidad en Vencimientos',
                desc: 'Monitoreo preventivo del noveno dígito de RUC para declarar con días de anticipación al límite legal.',
              },
              {
                title: 'Acompañamiento Directo',
                desc: 'Atención personalizada sin intermediarios ni tickets demorados; respuesta ágil por llamada o WhatsApp.',
              },
              {
                title: 'Blindaje Preventivo',
                desc: 'No solo registramos números: anticipamos riesgos fiscales y optimizamos deducciones de manera 100% legal.',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-[#00D26A]/40 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#153760] text-[#00D26A] flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-heading font-bold text-base text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
