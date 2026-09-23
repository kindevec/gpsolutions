import React, { useState } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Building2,
  Receipt,
  Users,
  Check,
  X,
  FileText,
  Calculator,
  Award,
  Clock,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { ALL_SERVICES } from '../data/services';
import type { TabKey } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab }) => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  // 3 Master Bento Cards for Home
  const featuredBento = [
    {
      id: 'bento-contable',
      title: 'Área Contable y Corporativa',
      category: 'contable' as const,
      badge: 'Normativa NIIF & SuperCías',
      tagline: 'Control patrimonial y cumplimiento societario',
      description: 'Contabilidad bajo NIIF para PYMES y personas naturales, balances auditables, trámites en Superintendencia de Compañías y constitución express de empresas S.A.S.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      icon: Building2,
      deliverables: [
        'Contabilidad general y balances NIIF auditables',
        'Presentación anual ante Superintendencia de Compañías',
        'Constitución y liquidación ágil de empresas S.A.S.',
        'Registro de marcas ante el SENADI y actas societarias'
      ],
      legalBasis: 'Ley de Compañías y Normas Internacionales de Información Financiera (NIIF)',
      whatsapp: 'Hola GP SOLUTIONS (+593999840649), deseo cotizar servicios del Área Contable y Corporativa.'
    },
    {
      id: 'bento-tributario',
      title: 'Área Tributaria & Fiscal (SRI)',
      category: 'tributaria' as const,
      badge: 'Cero Contingencias SRI',
      tagline: 'Liquidación puntual y defensa ante el fisco',
      description: 'Declaraciones mensuales y semestrales de IVA e Impuesto a la Renta, anexos ATS/RDEP, retenciones, trámite de devolución de impuestos y patentes municipales 1.5 x mil.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      icon: Receipt,
      deliverables: [
        'Declaraciones mensuales/semestrales de IVA e Impuesto a la Renta',
        'Elaboración de Anexos Transaccionales (ATS) y RDEP',
        'Trámite de devolución de IVA (Tercera Edad y Exportadores)',
        'Declaración de Patentes Municipales y 1.5 por mil'
      ],
      legalBasis: 'Ley Orgánica de Régimen Tributario Interno (LORTI) y Resoluciones SRI',
      whatsapp: 'Hola GP SOLUTIONS (+593999840649), solicito asesoría en Declaraciones y Trámites del SRI.'
    },
    {
      id: 'bento-laboral',
      title: 'Área Laboral & Nómina (IESS)',
      category: 'laboral' as const,
      badge: 'Cero Mora Patronal',
      tagline: 'Seguridad jurídica en talento humano',
      description: 'Gestión de nómina, roles de pago individuales, cálculo de décimos y utilidades, inscripción de contratos en el SUT y administración patronal en el IESS.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
      icon: Users,
      deliverables: [
        'Contratos de trabajo y actas de finiquito en SUT',
        'Roles de pago y planillas de aportes al IESS',
        'Liquidación de 13er, 14to sueldo y utilidades',
        'Asesoría en préstamos quirografarios e hipotecarios BIESS'
      ],
      legalBasis: 'Código del Trabajo del Ecuador y Ley de Seguridad Social',
      whatsapp: 'Hola GP SOLUTIONS (+593999840649), necesito gestionar la nómina y planillas de mis empleados ante el IESS.'
    }
  ];

  return (
    <div className="flex flex-col gap-16 sm:gap-24 md:gap-32 pb-12 sm:pb-24">
      
      {/* ========================================================= */}
      {/* 1. HERO INSTITUCIONAL - IMMERSIVE TECH-TRUST */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32 bg-slate-950">
        
        {/* Subtle Ambient Gradients (Sin Clichés de IA) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[#153760]/35 rounded-full blur-[140px]" />
          <div className="absolute top-12 right-8 w-80 h-80 bg-[#00D26A]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Badge de Autoridad */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse" />
                <span>Asesoría Contable, Tributaria & Legal en Ecuador</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4 sm:mb-6 drop-shadow-md">
                Tranquilidad tributaria y control contable para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00D26A]">
                  su empresa
                </span>
              </h1>

              {/* Subtitle with official slogan */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
                <strong className="text-[#00D26A] font-semibold">{COMPANY_DATA.legacySlogan}.</strong> En GP SOLUTIONS blindamos su negocio ante el <strong className="text-white">SRI</strong>, <strong className="text-white">IESS</strong> y <strong className="text-white">Superintendencia de Compañías</strong> con soluciones a la medida de personas naturales y sociedades.
              </p>

              {/* Dual CTAs Mobile-Friendly */}
              <div className="flex flex-row items-center gap-3 w-full sm:w-auto mb-10">
                <button
                  onClick={() => onSelectTab('servicios')}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#153760] hover:bg-[#1E3E62] border border-[#00C4A7]/30 rounded-xl sm:rounded-2xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
                >
                  <span>Ver Catálogo</span>
                  <ArrowRight className="w-4 h-4 text-[#00D26A]" />
                </button>

                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-[#0B192C] bg-[#00D26A] hover:bg-[#00c060] rounded-xl sm:rounded-2xl shadow-lg shadow-[#00D26A]/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Cotizar WhatsApp</span>
                </a>
              </div>

              {/* Metricas Rápidas en una Sola Fila Abierta */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#00D26A] font-heading">
                    +12 Años
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Trayectoria Contable
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-heading">
                    100%
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Cumplimiento Legal
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#00B4D8] font-heading">
                    0 Mora
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Ante SRI e IESS
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Medallón de Autoridad con Vidrio Esmerilado */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center">
                
                {/* Logo Oficial Nítido */}
                <div className="relative w-44 h-44 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#00D26A]/10 rounded-full blur-xl" />
                  <img
                    src="/logo.webp"
                    alt="Emblema Oficial GP Solutions"
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                    width={176}
                    height={176}
                  />
                </div>

                <h3 className="font-heading font-extrabold text-xl text-white mb-1">
                  {COMPANY_DATA.commercialName}
                </h3>
                <p className="text-xs text-[#00D26A] font-semibold mb-4 uppercase tracking-wider">
                  {COMPANY_DATA.slogan}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Firma especializada en asesoría tributaria, contabilidad bajo NIIF, nómina y blindaje societario con sede en Tumbaco, Quito.
                </p>

                <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Director: <strong className="text-white">{COMPANY_DATA.director}</strong></span>
                  <span className="text-[#00D26A] font-semibold">Estatus Activo</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 2. BENTO GRID CON SANGRADO COMPLETO & SLIDE-UP DRAWER     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D26A] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Áreas Maestras de Atención</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Especialidades con Sangrado Completo
            </h2>
          </div>
          
          <button
            onClick={() => onSelectTab('servicios')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00D26A] hover:text-white transition-colors cursor-pointer"
          >
            <span>Explorar los 21 servicios</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Modular Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredBento.map((item) => {
            const isExpanded = expandedCardId === item.id;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-slate-900/70 rounded-3xl border border-white/10 hover:border-white/20 shadow-xl flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                {/* 1. Full-Bleed Image Stage with Slide-Up Drawer */}
                <div
                  className="relative w-full h-56 sm:h-64 overflow-hidden cursor-pointer select-none rounded-t-3xl"
                  onClick={() => toggleExpand(item.id)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-md bg-slate-900/90 text-[#00D26A] border border-white/15 backdrop-blur-md shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-slate-900/90 border border-white/15 backdrop-blur-md flex items-center justify-center text-[#00D26A] shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* CAJÓN TÉCNICO DESPLEGABLE IN-SITU (SLIDE-UP DRAWER) */}
                  <div
                    className={`absolute inset-0 z-20 bg-slate-950/95 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 ease-out cursor-default ${
                      isExpanded
                        ? 'translate-y-0 opacity-100 pointer-events-auto'
                        : 'translate-y-full opacity-0 pointer-events-none'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#00D26A] uppercase tracking-wider">
                          <FileText className="w-3.5 h-3.5" />
                          <span>Alcance Técnico</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleExpand(item.id)}
                          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Cerrar ficha"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-2">
                        {item.title}
                      </h4>

                      <div className="space-y-2 mb-3 max-h-36 overflow-y-auto no-scrollbar">
                        {item.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-[#00D26A] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-[11px] text-slate-400 italic">
                        Base: {item.legalBasis}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={buildWhatsAppLink(item.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#00D26A] hover:underline flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Cotizar WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => toggleExpand(item.id)}
                        className="text-xs text-slate-400 hover:text-white cursor-pointer"
                      >
                        Volver a la foto
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Cuerpo de la Tarjeta */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isExpanded
                          ? 'bg-[#00D26A] text-[#0B192C]'
                          : 'bg-white/5 hover:bg-white/10 text-slate-200'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{isExpanded ? 'Ver Foto' : 'Ficha Técnica'}</span>
                    </button>

                    <button
                      onClick={() => onSelectTab('servicios')}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#153760] hover:bg-[#1E3E62] text-white transition-all cursor-pointer"
                    >
                      <span>Ver Catálogo</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00D26A]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>


      {/* ========================================================= */}
      {/* 3. RUTA DE BLINDAJE EMPRESARIAL (4 FASES LIMPIAS)          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D26A] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Metodología de Acompañamiento</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Ruta Integral de Blindaje Fiscal & Legal
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300">
            Un método estructurado en 4 fases que elimina el riesgo de sanciones, auditorías sorpresivas y contingencias laborales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Diagnóstico & Auditoría',
              desc: 'Inspección de buzones del SRI, IESS y SuperCías para detectar omisiones, multas pendientes o inconsistencias.',
            },
            {
              step: '02',
              title: 'Saneamiento Inmediato',
              desc: 'Presentación sustitutiva de declaraciones atrasadas, actualización de contratos en SUT y acuerdos de pago.',
            },
            {
              step: '03',
              title: 'Operación Mensual',
              desc: 'Registro contable continuo bajo NIIF, liquidación de nómina, roles y cálculo mensual de retenciones e IVA.',
            },
            {
              step: '04',
              title: 'Blindaje & Respaldo',
              desc: 'Cierre anual con estados financieros auditables, actas de socios y asesoría societaria permanente.',
            },
          ].map((phase, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-[#00D26A]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-heading font-black text-2xl text-[#00D26A] block mb-3">
                  Fase {phase.step}
                </span>
                <h3 className="font-heading font-bold text-base text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#00D26A]">
                <Check className="w-3.5 h-3.5" />
                <span>Protocolo Oficial GP</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================= */}
      {/* 4. BANNER DE CONVERSIÓN RÁPIDA AL COTIZADOR                */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#153760] to-[#0B192C] border border-white/15 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-[#00D26A] uppercase tracking-wider block mb-2">
              Cotizador Inteligente Bespoke
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              ¿Desea conocer el presupuesto estimado para su empresa?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Personalice en segundos su plan contable según su régimen fiscal (RIMPE o General) y envíelo directamente a nuestro WhatsApp oficial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onSelectTab('cotizador')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#00D26A] hover:bg-[#00c060] text-[#0B192C] transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-[#00D26A]/20"
            >
              <Calculator className="w-4 h-4" />
              <span>Abrir Cotizador</span>
            </button>

            <button
              onClick={() => onSelectTab('contacto')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all cursor-pointer"
            >
              <span>Contacto Directo</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
