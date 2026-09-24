import React, { useState, useMemo, useRef } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Building2,
  Receipt,
  Users,
  CheckCircle2,
  Phone,
  Scale,
  Lock,
  MapPin,
  Clock,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Award,
  Check,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/SocialIcons';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { ALL_SERVICES } from '../data/services';
import { ServiceCardSlideUp } from '../components/ui/ServiceCardSlideUp';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import type { TabKey } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const accountingScrollRef = useRef<HTMLDivElement>(null);
  const taxScrollRef = useRef<HTMLDivElement>(null);
  const laborScrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const whatsappHeroUrl = buildWhatsAppLink(
    'Hola GP SOLUTIONS (+593999840649), deseo solicitar asesoría y blindaje para mi empresa en Ecuador.'
  );

  // Catálogo completo de Servicios Contables para deslizar horizontalmente
  const contableServicesList = useMemo(
    () => ALL_SERVICES.filter((s) => s.category === 'contable'),
    []
  );

  // Servicios Tributarios para deslizar horizontalmente
  const tributariosList = useMemo(
    () => ALL_SERVICES.filter((s) => s.category === 'tributaria'),
    []
  );

  // Servicios Laborales para deslizar horizontalmente
  const laboralesList = useMemo(
    () => ALL_SERVICES.filter((s) => s.category === 'laboral'),
    []
  );

  // Preguntas frecuentes resumen de la sección Contacto
  const homeFaqs = [
    {
      q: '¿Qué sucede si tengo declaraciones mensuales o anuales atrasadas ante el SRI?',
      a: 'Es indispensable realizar una regularización técnica de inmediato. Presentamos las declaraciones sustitutivas u omitidas calculando los intereses de ley y multas mínimas con atenuantes antes de que el SRI emita una liquidación de pago o una orden de coactiva.',
    },
    {
      q: '¿Cuáles son las ventajas de constituir una empresa bajo la figura S.A.S. en Ecuador?',
      a: 'La Sociedad por Acciones Simplificada (S.A.S.) permite constituirse desde 1 solo accionista, no requiere capital mínimo obligatorio, su trámite es 100% digital ante la Superintendencia de Compañías y limita la responsabilidad patrimonial al monto aportado, protegiendo sus bienes personales.',
    },
    {
      q: '¿Cómo evitar multas y recargos patronales en el IESS?',
      a: 'Los avisos de entrada de trabajadores deben registrarse dentro de los primeros 15 días posteriores al inicio de labores, y las planillas mensuales deben cancelarse rigurosamente hasta el día 15 del mes siguiente para no incurrir en mora patronal ni bloqueo de servicios médicos para el personal.',
    },
    {
      q: '¿Quiénes tienen derecho al trámite de Devolución de IVA ante el SRI?',
      a: 'Tienen derecho las personas de la tercera edad (65 años o más), personas con discapacidad, exportadores de bienes y servicios, y proyectos de vivienda de interés social. En GP SOLUTIONS gestionamos y auditamos el expediente para su acreditación directa.',
    },
  ];

  return (
    <div className="relative bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HERO INSTITUCIONAL ONDULADO (FOTO CORPORATIVA + MÁSCARA ONDULADA)
         ========================================================================= */}
      <section className="relative pt-32 pb-24 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 overflow-hidden bg-[#102547]">
        {/* Foto de Fondo con Máscara Ondulada y Overlays de Alta Legibilidad */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/hero-home.jpg"
            alt="GP Solutions - Asesoría Contable, Tributaria y Legal en Ecuador"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a30]/96 via-[#102547]/90 to-[#0c1a30]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a30]/80 via-transparent to-[#102547]/90" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columna Izquierda: Mensaje y Acciones */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight leading-[1.08] mb-5 drop-shadow-md">
                <span className="text-white">Asesoría Integral </span>
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#7dd3fc] to-white bg-clip-text text-transparent">
                  Contable
                </span>
                <span className="text-white">, </span>
                <span className="text-[#38BDF8]">Tributaria</span>
                <span className="text-white"> & </span>
                <span className="bg-gradient-to-r from-amber-300 to-[#FCD34D] bg-clip-text text-transparent font-extrabold">
                  Legal
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-6 max-w-2xl text-justify">
                <strong className="text-white">«{COMPANY_DATA.slogan}»</strong>. {COMPANY_DATA.trajectory}. Brindamos soluciones seguras para blindar su empresa ante el SRI, IESS y Superintendencia de Compañías.
              </p>

              {/* Botones de Acción Directa */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
                <button
                  onClick={() => onSelectTab('servicios-contables')}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all duration-200 shadow-md cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-[#38BDF8]" />
                  <span>Servicios Contables</span>
                </button>

                <button
                  onClick={() => onSelectTab('servicios-tributarios')}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369a1] text-white transition-all duration-200 shadow-lg shadow-sky-500/30 cursor-pointer"
                >
                  <Receipt className="w-4 h-4" />
                  <span>Servicios Tributarios</span>
                </button>

                <a
                  href={whatsappHeroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-white text-[#102547] hover:bg-slate-100 transition-all cursor-pointer shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#0284C7]" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>

              {/* Métricas de Confianza */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 w-full">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#38BDF8] font-heading">
                    +12 Años
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5 font-medium">
                    Trayectoria
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-heading">
                    100%
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5 font-medium">
                    Cumplimiento SRI
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#38BDF8] font-heading">
                    0 Mora
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5 font-medium">
                    IESS Patronal
                  </div>
                </div>
              </div>

            </div>

            {/* Columna Derecha: Tarjeta Institucional de Autoridad */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl flex flex-col items-center text-center">
                <div className="w-36 h-36 mb-4 flex items-center justify-center">
                  <img
                    src="/logo.webp"
                    alt="Logo GP Solutions"
                    className="w-full h-full object-contain drop-shadow-md"
                    width={144}
                    height={144}
                  />
                </div>

                <h3 className="font-heading font-extrabold text-xl text-[#102547] mb-1">
                  {COMPANY_DATA.commercialName}
                </h3>
                <p className="text-xs text-[#0284C7] font-semibold mb-4">
                  {COMPANY_DATA.legacySlogan}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 text-justify">
                  {COMPANY_DATA.subSlogan}. Asesoría presencial en Tumbaco y Quito, con cobertura digital a nivel nacional.
                </p>

                <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Director: <strong className="text-[#102547]">{COMPANY_DATA.director}</strong></span>
                  <span className="text-[#0284C7] font-bold">RUC Activo</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Separador Ondulado SVG */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="wave1" />
        </div>
      </section>


      {/* =========================================================================
          2. RESUMEN: SERVICIOS CONTABLES Y CORPORATIVOS (CARRUSEL HORIZONTAL)
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Encabezado de Sección con botón simple "Ver más" y controles de flecha */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#102547] tracking-tight">
                Contabilidad, Balances NIIF & Creación de Empresas S.A.S.
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl text-justify">
                Conozca los principales servicios contables y societarios con los que blindamos el patrimonio de su negocio ante entidades de control en Ecuador.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
              <button
                onClick={() => onSelectTab('servicios-contables')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369a1] transition-all group cursor-pointer"
              >
                <span>Ver más</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-1 pl-2 border-l border-slate-200">
                <button
                  onClick={() => scrollCarousel(accountingScrollRef, 'left')}
                  aria-label="Deslizar anterior"
                  className="w-8 h-8 rounded-full border border-sky-200 bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollCarousel(accountingScrollRef, 'right')}
                  aria-label="Deslizar siguiente"
                  className="w-8 h-8 rounded-full border border-sky-200 bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Carrusel Deslizable Horizontalmente */}
          <div
            ref={accountingScrollRef}
            className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {contableServicesList.map((service) => (
              <div
                key={service.id}
                className="w-[84vw] sm:w-[350px] md:w-[380px] shrink-0 snap-start flex flex-col"
              >
                <ServiceCardSlideUp service={service} />
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          3. RESUMEN: SERVICIOS TRIBUTARIOS Y LABORALES (SEPARADOS)
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F4F8FC] border-t border-sky-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* 3.1 SUBSECCIÓN: SERVICIOS TRIBUTARIOS (SRI) */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#102547] tracking-tight">
                  Servicios Tributarios ante el SRI
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-2xl text-justify">
                  Declaraciones IVA y Renta, anexos ATS, devolución de impuestos y blindaje ante auditorías y determinaciones tributarias.
                </p>
              </div>

              <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
                <button
                  onClick={() => onSelectTab('servicios-tributarios')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369a1] transition-all group cursor-pointer"
                >
                  <span>Ver más</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-1 pl-2 border-l border-slate-200">
                  <button
                    onClick={() => scrollCarousel(taxScrollRef, 'left')}
                    aria-label="Deslizar anterior tributario"
                    className="w-8 h-8 rounded-full border border-sky-200 bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollCarousel(taxScrollRef, 'right')}
                    aria-label="Deslizar siguiente tributario"
                    className="w-8 h-8 rounded-full border border-sky-200 bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Carrusel Deslizable: Tributarios */}
            <div
              ref={taxScrollRef}
              className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {tributariosList.map((service) => (
                <div
                  key={service.id}
                  className="w-[84vw] sm:w-[350px] md:w-[380px] shrink-0 snap-start flex flex-col"
                >
                  <ServiceCardSlideUp service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* DIVISOR ENTRE ÁREA TRIBUTARIA Y LABORAL */}
          <div className="relative pt-2">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-sky-200/70" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#EAF2FA] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0284C7] border border-sky-200 rounded-full shadow-xs">
                Área Laboral y Seguridad Social
              </span>
            </div>
          </div>

          {/* 3.2 SUBSECCIÓN: SERVICIOS LABORALES (IESS & SUT) */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-[#102547] tracking-tight">
                  Gestión Laboral & Nóminas IESS / SUT
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-2xl text-justify">
                  Elaboración de roles de pago, actas de finiquito, avisos de entrada/salida y cumplimiento patronal para evitar mora y glosas.
                </p>
              </div>

              <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
                <button
                  onClick={() => onSelectTab('servicios-tributarios')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369a1] transition-all group cursor-pointer"
                >
                  <span>Ver más</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-1 pl-2 border-l border-slate-200">
                  <button
                    onClick={() => scrollCarousel(laborScrollRef, 'left')}
                    aria-label="Deslizar anterior laboral"
                    className="w-8 h-8 rounded-full border border-sky-200 bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollCarousel(laborScrollRef, 'right')}
                    aria-label="Deslizar siguiente laboral"
                    className="w-8 h-8 rounded-full border border-sky-200 bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Carrusel Deslizable: Laborales */}
            <div
              ref={laborScrollRef}
              className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {laboralesList.map((service) => (
                <div
                  key={service.id}
                  className="w-[84vw] sm:w-[350px] md:w-[380px] shrink-0 snap-start flex flex-col"
                >
                  <ServiceCardSlideUp service={service} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          4. RESUMEN: QUIÉNES SOMOS / TRAYECTORIA INSTITUCIONAL
         ========================================================================= */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columna Texto */}
            <div className="lg:col-span-7">
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#102547] tracking-tight mb-4">
                Más de 12 Años de Rigor Técnico y Respaldo Empresarial
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 text-justify">
                Bajo la dirección de <strong className="text-[#102547]">{COMPANY_DATA.director}</strong>, GP SOLUTIONS se ha consolidado como un aliado estratégico para emprendedores, personas naturales (RIMPE y Régimen General) y sociedades mercantiles (S.A.S., Cías. Ltda. y S.A.) en todo el Ecuador.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 text-justify">
                Operamos desde nuestro despacho en <strong className="text-[#102547]">Tumbaco, Quito</strong>, integrando canales digitales para asegurar un control estricto de balances, declaraciones ante el SRI y nóminas patronales sin contingencias legales.
              </p>

              {/* Pilares Institucionales */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-[#F4F8FC] border border-sky-100 flex items-start gap-3">
                  <Scale className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#102547]">Rigor Normativo</h4>
                    <p className="text-xs text-slate-500 text-justify">Apego estricto a NIIF y resoluciones del SRI.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4F8FC] border border-sky-100 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#102547]">Confidencialidad</h4>
                    <p className="text-xs text-slate-500 text-justify">Secreto profesional y custodia estricta de libros contables.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectTab('nosotros')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-[#102547] hover:bg-[#153760] text-white transition-all cursor-pointer shadow-md"
                >
                  <span>Conocer más sobre GP Solutions</span>
                  <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                </button>

                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-[#0284C7] bg-[#EAF2FA] hover:bg-sky-100 transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Hablar con el Director</span>
                </a>
              </div>
            </div>

            {/* Columna Medallón Oficial */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-8 rounded-3xl bg-[#F4F8FC] border border-sky-900/10 shadow-lg text-center max-w-sm w-full">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img
                    src="/logo.webp"
                    alt="Logo GP Solutions"
                    className="w-full h-full object-contain drop-shadow-md"
                    width={128}
                    height={128}
                  />
                </div>

                <h3 className="font-heading font-black text-xl text-[#102547] mb-1">
                  {COMPANY_DATA.director}
                </h3>
                <p className="text-xs text-[#0284C7] font-bold mb-4">
                  Representante Legal & Consultor Principal
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 text-left pt-4 border-t border-sky-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Especialista en Balances y Normas NIIF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Estrategia Tributaria y Defensa SRI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Constitución Express de Empresas S.A.S.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Despacho en Tumbaco, Quito - Ecuador</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          5. RESUMEN: CONTACTO, DESPACHO Y PREGUNTAS FRECUENTES (FAQS)
         ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#EAF2FA] border-t border-sky-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#102547] tracking-tight">
              Respuestas Claras & Canales de Atención Directa
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 text-justify">
              Resolvemos sus inquietudes más comunes y ponemos a su disposición canales directos para agendar su consultoría en Tumbaco o vía digital.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Acordeón de Preguntas Frecuentes */}
            <div className="lg:col-span-7 space-y-3">
              {homeFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-sky-900/10 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-xs sm:text-sm text-[#102547]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0284C7] shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFaq === idx && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed text-justify">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Ficha Rápida de Despacho y Canales de Contacto */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-sky-900/10 shadow-lg">
                <h3 className="font-heading font-extrabold text-lg text-[#102547] mb-2">
                  Despacho Presencial y Digital
                </h3>
                <p className="text-xs text-slate-600 mb-6 text-justify">
                  Estamos listos para revisar sus libros y balances con atención directa sin intermediarios.
                </p>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#102547] block">Dirección Principal:</span>
                      <span className="text-slate-600 text-justify">{COMPANY_DATA.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#102547] block">Horarios de Atención:</span>
                      <span className="text-slate-600">{COMPANY_DATA.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#102547] block">Contacto Directo:</span>
                      <span className="text-slate-600">{COMPANY_DATA.phoneFormatted1}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2.5">
                  <a
                    href={COMPANY_DATA.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-[#0284C7] hover:bg-[#0369a1] text-white transition-all shadow-md shadow-sky-500/20"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Escribir por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onSelectTab('contacto')}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-[#102547] hover:bg-[#153760] text-white transition-all cursor-pointer"
                  >
                    <span>Ir a Formulario de Contacto Completo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
