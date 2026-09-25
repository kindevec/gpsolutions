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
import { ServiceGlareCard } from '../components/ui/ServiceGlareCard';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import type { TabKey } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isAccountingHovered, setIsAccountingHovered] = useState(false);
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
          1. HERO INSTITUCIONAL ONDULADO CON FOTO DE FONDO + 4 CÍRCULOS EN LA CURVA
         ========================================================================= */}
      <section className="relative pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-36 md:pb-14 overflow-hidden bg-[#102547]">
        {/* Foto de Fondo Panorámica con Overlays de Alta Legibilidad */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/hero-home.jpg"
            alt="GP Solutions - Asesoría Contable, Tributaria y Legal en Ecuador"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a30]/95 via-[#0e203c]/90 to-[#0c1a30]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1526]/85 via-transparent to-[#0a1526]/95" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Bloque Central: Título y Párrafo Institucional Centrados */}
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-6 sm:mb-8">
            
            {/* Título Principal */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight leading-[1.08] mb-4 text-white drop-shadow-md text-center">
              <span>Asesoría Integral </span>
              <span className="bg-gradient-to-r from-[#38BDF8] via-sky-300 to-white bg-clip-text text-transparent">
                Contable
              </span>
              <span className="text-white">, </span>
              <span className="text-[#38BDF8]">Tributaria</span>
              <span className="text-white"> & </span>
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-[#FCD34D] bg-clip-text text-transparent">
                Legal
              </span>
            </h1>

            {/* Párrafo Descriptivo Centrado */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl text-center drop-shadow-sm">
              <strong className="text-white">«{COMPANY_DATA.slogan}»</strong>. {COMPANY_DATA.trajectory}. Brindamos soluciones seguras para blindar su empresa ante el SRI, IESS y Superintendencia de Compañías.
            </p>

          </div>
        </div>

        {/* Separador Ondulado SVG en la Base del Banner (detrás de los círculos) */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="wave1" />
        </div>

        {/* Fila Inferior: 4 Círculos Informativos que van POR DELANTE de la Curva */}
        <div className="max-w-4xl mx-auto px-4 relative z-30 select-none">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4.5 mt-2 sm:mt-4 md:mt-6 translate-y-6 sm:translate-y-8 md:translate-y-10">
            
            {/* Card Circular 1: Contabilidad & NIIF */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#0d1d36] border-2 border-white/30 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.65)] flex flex-col items-center justify-center text-center p-3 sm:p-3.5 cursor-default pointer-events-none transform -translate-y-1 sm:-translate-y-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 text-amber-300 flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-white px-2 leading-tight">
                Balances NIIF & Contabilidad
              </h3>
            </div>

            {/* Card Circular 2: Blindaje Tributario */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#0d1d36] border-2 border-white/30 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.65)] flex flex-col items-center justify-center text-center p-3 sm:p-3.5 cursor-default pointer-events-none transform translate-y-1 sm:translate-y-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 text-[#38BDF8] flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner">
                <Receipt className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-white px-2 leading-tight">
                Blindaje Tributario & SRI
              </h3>
            </div>

            {/* Card Circular 3: Nómina & IESS */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#0d1d36] border-2 border-white/30 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.65)] flex flex-col items-center justify-center text-center p-3 sm:p-3.5 cursor-default pointer-events-none transform -translate-y-1 sm:-translate-y-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 text-amber-300 flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-white px-2 leading-tight">
                Nómina & Cumplimiento IESS
              </h3>
            </div>

            {/* Card Circular 4: Constitución S.A.S. & Legal */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#0d1d36] border-2 border-white/30 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.65)] flex flex-col items-center justify-center text-center p-3 sm:p-3.5 cursor-default pointer-events-none transform translate-y-1 sm:translate-y-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 text-[#38BDF8] flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-white px-2 leading-tight">
                Constitución S.A.S. & Legal
              </h3>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          2. RESUMEN: SERVICIOS CONTABLES Y CORPORATIVOS (CARRUSEL HORIZONTAL)
         ========================================================================= */}
      <section
        onMouseEnter={() => setIsAccountingHovered(true)}
        onMouseLeave={() => setIsAccountingHovered(false)}
        className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Encabezado de Sección */}
          <div className="text-center mb-8 sm:mb-10 mt-6 sm:mt-8">
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#102547] tracking-tight">
              Contabilidad, Balances NIIF & Creación de Empresas S.A.S.
            </h2>
          </div>

          {/* Contenedor del Carrusel con Flechas Flotantes en Ambos Lados (Aparecen al hacer hover) */}
          <div className="relative">
            {/* Flecha Izquierda Flotante hacia afuera */}
            <button
              type="button"
              onClick={() => scrollCarousel(accountingScrollRef, 'left')}
              aria-label="Deslizar anterior"
              className={`absolute left-0 sm:-left-6 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#102547] text-white border-2 border-white/90 shadow-[0_12px_32px_rgba(0,0,0,0.45)] flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#0284C7] hover:scale-110 active:scale-95 ${
                isAccountingHovered ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
              }`}
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.8]" />
            </button>

            {/* Carrusel Deslizable Horizontalmente con Estilo Glare Card */}
            <div
              ref={accountingScrollRef}
              className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {contableServicesList.map((service) => (
                <div
                  key={service.id}
                  className="w-[88vw] sm:w-[380px] md:w-[410px] shrink-0 snap-start flex flex-col"
                >
                  <ServiceGlareCard service={service} />
                </div>
              ))}
            </div>

            {/* Flecha Derecha Flotante hacia afuera */}
            <button
              type="button"
              onClick={() => scrollCarousel(accountingScrollRef, 'right')}
              aria-label="Deslizar siguiente"
              className={`absolute right-0 sm:-right-6 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#102547] text-white border-2 border-white/90 shadow-[0_12px_32px_rgba(0,0,0,0.45)] flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#0284C7] hover:scale-110 active:scale-95 ${
                isAccountingHovered ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
              }`}
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.8]" />
            </button>
          </div>

          {/* Botón Ver más en el Centro debajo de las tarjetas */}
          <div className="flex items-center justify-center mt-8 sm:mt-10">
            <button
              onClick={() => onSelectTab('servicios-contables')}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0284C7] hover:text-[#0369a1] transition-all group/btn cursor-pointer py-2.5 px-6 rounded-full bg-sky-50/90 hover:bg-sky-100 text-[#0284C7] border border-sky-200/70 shadow-xs"
            >
              <span>Ver más</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
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
