import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Users,
  Building2,
  Scale,
  Award,
  CheckCircle2,
  ShieldCheck,
  Play,
  Check,
  HardHat,
  FileCheck,
  FileText,
  BadgePercent,
  BookOpen,
  Lock,
  Handshake,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { WhatsAppIcon, LinkedInIcon } from '../components/ui/SocialIcons';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import type { TabKey } from '../types';


interface CorporateValueItem {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  theme: 'celeste' | 'amber';
}

const CORPORATE_VALUES: CorporateValueItem[] = [
  {
    id: '01',
    title: 'Ética y Transparencia',
    description: 'Manejo íntegro de la información financiera, contable, legal y de salud ocupacional con total pulcritud y trazabilidad.',
    shortDescription: 'Manejo íntegro y trazabilidad garantizada.',
    icon: Scale,
    image: '/images/valores/etica-transparencia.jpg',
    theme: 'celeste',
  },
  {
    id: '02',
    title: 'Confidencialidad',
    description: 'Custodia blindada y protección irrestricta de bases de datos, balances y secretos comerciales de su organización.',
    shortDescription: 'Custodia blindada y secreto corporativo.',
    icon: Lock,
    image: '/images/valores/confidencialidad.jpg',
    theme: 'amber',
  },
  {
    id: '03',
    title: 'Enfoque Multidisciplinario',
    description: 'Articulación técnica entre consultores tributarios, peritos jurídicos corporativos y especialistas en seguridad laboral.',
    shortDescription: 'Sinergia tributaria, legal y laboral.',
    icon: Users,
    image: '/images/valores/enfoque-multidisciplinario.jpg',
    theme: 'celeste',
  },
  {
    id: '04',
    title: 'Compromiso con el Cliente',
    description: 'Acompañamiento directivo continuo y cercano, enfocado en resultados medibles y en la rentabilidad de su negocio.',
    shortDescription: 'Acompañamiento cercano y resultados.',
    icon: Handshake,
    image: '/images/valores/compromiso-cliente.jpg',
    theme: 'amber',
  },
];

interface AboutViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onSelectTab }) => {
  const [showMoreAlvaro, setShowMoreAlvaro] = useState(false);
  const [showMoreLuis, setShowMoreLuis] = useState(false);
  const [activeMobileValue, setActiveMobileValue] = useState<string | null>(null);
  const corporateGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (corporateGridRef.current && !corporateGridRef.current.contains(e.target as Node)) {
        setActiveMobileValue(null);
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);
  return (
    <div className="bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO
         ========================================================================= */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-14 sm:pb-16 md:pb-20 overflow-hidden bg-[#102547]">
        {/* Foto de Fondo con Máscara Ondulada y Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/hero-about.jpg"
            alt="Firma Contable, Tributaria y Legal GP Solutions en Quito"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a30]/95 via-[#102547]/88 to-[#0c1a30]/82" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a30]/80 via-transparent to-[#102547]/90" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center max-w-5xl xl:max-w-6xl mx-auto mt-0 sm:mt-2 mb-4 sm:mb-6">
            
            {/* Logo Oficial GP Solutions Centrado (Mismo diseño, animaciones y proporciones que Inicio) */}
            <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[410px] xl:h-[410px] aspect-square flex items-center justify-center select-none pointer-events-none transition-all duration-300">
              {/* Anillo perimetral sincronizado idéntico al Inicio */}
              <div className="absolute inset-0 rounded-full border-2 sm:border-[2.5px] lg:border-[3px] logo-ring-cycle pointer-events-none z-10" />

              <picture>
                <source srcSet="/logo.avif" type="image/avif" />
                <source srcSet="/logo.webp" type="image/webp" />
                <img
                  src="/logo.png"
                  alt="Logo Oficial GP Solutions"
                  className="w-full h-full object-contain opacity-95 logo-border-glow-cycle drop-shadow-[0_12px_36px_rgba(0,0,0,0.55)]"
                  width={410}
                  height={410}
                  loading="eager"
                />
              </picture>
            </div>

            <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight drop-shadow-md mt-4 sm:mt-5">
              GP SOLUTIONS S.A.S.
            </h1>

            {/* Servicios principales en una sola línea en vista de PC */}
            <p className="text-xs sm:text-sm lg:text-[14px] xl:text-[15px] text-[#38BDF8] font-bold uppercase tracking-wider xl:tracking-widest mt-2 lg:whitespace-nowrap leading-relaxed drop-shadow-sm">
              Seguridad y Salud Ocupacional • Asesoría Tributaria • Asesoría Legal Corporativa
            </p>

          </div>
        </div>

        {/* Separador Ondulado SVG en la base del Hero en color azul (#071324) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none translate-y-px">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="wave1" />
        </div>
      </section>


      {/* =========================================================================
          BLOQUE 1: MISIÓN Y VISIÓN (ESTILO EDITORIAL ORGÁNICO)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28 lg:space-y-32">
          
          {/* ================= FILA 1: NUESTRA MISIÓN ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Texto Misión */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="text-amber-500 font-bold text-xs sm:text-sm tracking-wider uppercase block text-center lg:text-left">
                Sobre Nosotros
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0d1e38] tracking-tight leading-tight text-center lg:text-left">
                Nuestra Misión
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left antialiased">
                En GP Solutions brindamos soluciones integrales en seguridad y salud ocupacional, asesoría contable, legal y financiera, optimizando la gestión estratégica y el cumplimiento normativo de nuestros clientes. Protegemos el talento humano, blindamos la estructura legal y maximizamos la salud financiera de las organizaciones a través de un equipo multidisciplinario altamente calificado, garantizando su tranquilidad operativa y su crecimiento sostenible.
              </p>
              <div className="pt-2 flex justify-center w-full">
                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Conocer Más</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Imagen Misión (Bordes suaves orgánicos y aura decorativa radial) */}
            <div className="lg:col-span-6 relative">
              {/* Líneas decorativas radiales en la esquina derecha */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 sm:w-60 sm:h-60 pointer-events-none opacity-40">
                <svg viewBox="0 0 200 200" className="w-full h-full text-amber-500/40" fill="none" stroke="currentColor">
                  <circle cx="150" cy="150" r="35" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="150" cy="150" r="60" strokeWidth="1.2" />
                  <circle cx="150" cy="150" r="85" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="150" cy="150" r="110" strokeWidth="1.2" />
                  <line x1="150" y1="150" x2="30" y2="150" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="150" y1="150" x2="45" y2="45" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="150" y1="150" x2="150" y2="30" strokeWidth="1" strokeDasharray="3 4" />
                </svg>
              </div>

              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 aspect-[16/11] sm:aspect-[4/3] group">
                <img
                  src="/images/reunion-estrategica-equipo.jpg"
                  alt="Nuestra Misión - Equipo GP Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* ================= FILA 2: NUESTRA VISIÓN ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Collage Visión (3 imágenes con esquinas arqueadas idénticas a la referencia) */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              {/* Líneas decorativas radiales en la esquina superior izquierda */}
              <div className="absolute -top-6 -left-6 w-48 h-48 sm:w-60 sm:h-60 pointer-events-none opacity-40">
                <svg viewBox="0 0 200 200" className="w-full h-full text-amber-500/40" fill="none" stroke="currentColor">
                  <circle cx="50" cy="50" r="35" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="60" strokeWidth="1.2" />
                  <circle cx="50" cy="50" r="85" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="110" strokeWidth="1.2" />
                  <line x1="50" y1="50" x2="170" y2="50" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="50" y1="50" x2="155" y2="155" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="50" y1="50" x2="50" y2="170" strokeWidth="1" strokeDasharray="3 4" />
                </svg>
              </div>

              {/* Grid 2 Columnas para Collage */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4 relative z-10">
                {/* Imagen 1 (Izquierda grande): Esquina superior izquierda arqueada */}
                <div className="rounded-tl-[52px] sm:rounded-tl-[64px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 h-[300px] sm:h-[380px] lg:h-[400px] group">
                  <img
                    src="/images/reunion-directorio.jpg"
                    alt="Directorio y liderazgo GP Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Columna derecha con 2 imágenes apiladas */}
                <div className="flex flex-col gap-3.5 sm:gap-4">
                  {/* Imagen 2 (Superior derecha): Esquina superior derecha arqueada */}
                  <div className="rounded-tr-[52px] sm:rounded-tr-[64px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 h-[143px] sm:h-[182px] lg:h-[192px] group">
                    <img
                      src="/images/reunion-acuerdo-equipo.jpg"
                      alt="Alianza estratégica y asesoría integral"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>

                  {/* Imagen 3 (Inferior derecha): Esquina inferior derecha arqueada */}
                  <div className="rounded-br-[52px] sm:rounded-br-[64px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 h-[143px] sm:h-[182px] lg:h-[192px] group">
                    <img
                      src="/images/servicios-corporativos/mesas-dialogo-ejecutivo-estrategico.jpg"
                      alt="Consultoría ejecutiva y cumplimiento tributario"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Texto Visión */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 sm:space-y-6">
              <span className="text-amber-500 font-bold text-xs sm:text-sm tracking-wider uppercase block text-center lg:text-left">
                Proyección Estratégica
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0d1e38] tracking-tight leading-tight text-center lg:text-left">
                Nuestra Visión
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left antialiased">
                Consolidarnos como la firma aliada líder en asesoría multidisciplinaria, siendo reconocidos por nuestra innovación, ética y excelencia en la gestión del riesgo laboral, legal y financiero. Proyectamos expandir nuestra cobertura a nivel nacional, transformando la complejidad regulatoria en ventajas competitivas y seguridad patrimonial para nuestros socios estratégicos.
              </p>
              <div className="pt-2 flex justify-center w-full">
                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Conocer Más</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          BLOQUE 2: VALORES CORPORATIVOS (CÍRCULOS UNIDOS CON ESTRELLA AMARILLA CENTRAL)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#071324] relative z-20 overflow-hidden text-white border-t border-sky-900/40">
        {/* Luces y brillos ambientales de fondo */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-amber-400/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LADO IZQUIERDO: Título y texto en su misma ubicación original, con el título y texto alineados al centro */}
            <div className="lg:col-span-4 space-y-4 flex flex-col items-center text-center">
              <div className="space-y-3 flex flex-col items-center text-center">
                <h3 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight text-center">
                  Valores <br className="hidden sm:inline" />
                  <span className="text-[#38BDF8]">Corporativos</span>
                </h3>
                <div className="w-16 h-1 bg-[#38BDF8] rounded-full mx-auto" />
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed antialiased text-center max-w-md mx-auto">
                Directrices fundamentales de integridad técnica, blindaje preventivo y confidencialidad que guían cada actuación de nuestra firma en el Ecuador.
              </p>
            </div>

            {/* LADO DERECHO: 4 Contenedores cuadrados unidos sin bordes redondeados y sin espacios vacíos */}
            <div className="lg:col-span-8 flex justify-center lg:justify-end">
              <div ref={corporateGridRef} className="grid grid-cols-2 gap-0 max-w-[580px] sm:max-w-[620px] md:max-w-[660px] w-full relative shadow-2xl">
                
                {/* Logo Oficial GP Solutions en el centro (al frente z-40, tamaño optimizado) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none flex items-center justify-center">
                  <div className="relative w-30 h-30 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 aspect-square flex items-center justify-center select-none transition-all duration-300">
                    {/* Anillo perimetral sincronizado idéntico al Hero */}
                    <div className="absolute inset-0 rounded-full border-2 sm:border-[2.5px] logo-ring-cycle pointer-events-none z-10" />

                    {/* Resplandor ambiental suave detrás del logo */}
                    <div className="absolute -inset-3 rounded-full bg-sky-500/25 blur-xl pointer-events-none" />

                    <picture>
                      <source srcSet="/logo.avif" type="image/avif" />
                      <source srcSet="/logo.webp" type="image/webp" />
                      <img
                        src="/logo.png"
                        alt="Logo Oficial GP Solutions"
                        className="w-full h-full object-contain opacity-95 logo-border-glow-cycle drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)]"
                        width={176}
                        height={176}
                        loading="eager"
                      />
                    </picture>
                  </div>
                </div>

                {CORPORATE_VALUES.map((val) => {
                  const IconComp = val.icon;
                  const isCeleste = val.theme === 'celeste';
                  const isActive = activeMobileValue === val.id;

                  return (
                    <div
                      key={val.id}
                      onClick={() => setActiveMobileValue((prev) => (prev === val.id ? null : val.id))}
                      onMouseLeave={() => setActiveMobileValue(null)}
                      className={`group relative z-10 aspect-square w-full rounded-none overflow-hidden border border-sky-400/30 hover:border-[#38BDF8] flex flex-col items-center justify-center text-center p-4 sm:p-6 cursor-pointer bg-slate-900 transition-all duration-300 hover:z-20 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] ${
                        isActive ? 'border-[#38BDF8] z-20 shadow-[0_0_35px_rgba(56,189,248,0.35)]'
                          : 'border-sky-400/30 hover:border-[#38BDF8]'
                      }`}
                    >
                      {/* Fotografía de fondo: clara en reposo, se atenúa en hover (PC) o al tocar (Móvil) */}
                      <img
                        src={val.image}
                        alt={val.title}
                        className={`absolute inset-0 w-full h-full object-cover object-center brightness-105 contrast-105 select-none transition-opacity duration-300 group-hover:opacity-35 ${
                          isActive ? 'opacity-35' : 'opacity-100'
                        }`}
                        loading="lazy"
                      />

                      {/* Velo estético: luminoso en reposo, en hover o al tocar se difumina y atenúa para destacar el texto */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t backdrop-blur-[0.5px] transition-all duration-300 group-hover:from-[#071324]/90 group-hover:via-[#071324]/75 group-hover:to-[#071324]/60 group-hover:backdrop-blur-sm ${
                          isActive
                            ? 'from-[#071324]/90 via-[#071324]/75 to-[#071324]/60 backdrop-blur-sm'
                            : 'from-[#071324]/50 via-[#071324]/15 to-transparent'
                        }`}
                      />

                      {/* Resplandor fotográfico sutil en el borde interior */}
                      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_0_15px_rgba(7,19,36,0.25)] pointer-events-none" />

                      {/* Contenido frontal: Icono, Título y Descripción que aparece en hover (PC) o al tocar (Móvil) */}
                      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-[88%] select-none transition-all duration-300">
                        
                        {/* Ícono */}
                        <div
                          className={`mb-1.5 sm:mb-2 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] ${
                            isActive ? 'scale-105' : ''
                          }`}
                        >
                          <IconComp
                            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 stroke-[2.2] shrink-0 ${
                              isCeleste ? 'text-[#38BDF8]' : 'text-[#FCD34D]'
                            }`}
                          />
                        </div>

                        {/* Título del valor */}
                        <h4
                          className={`font-heading font-black text-xs sm:text-sm md:text-base lg:text-[17px] text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] group-hover:text-[#38BDF8] transition-colors break-words ${
                            isActive ? 'text-[#38BDF8]' : ''
                          }`}
                        >
                          {val.title}
                        </h4>

                        {/* Texto descriptivo que aparece al pasar el mouse (PC) o tocar (Móvil) */}
                        <div
                          className={`grid transition-all duration-400 ease-out w-full group-hover:grid-rows-[1fr] ${
                            isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-[10px] sm:text-xs text-slate-100 text-center leading-relaxed mt-1 sm:mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)] font-medium antialiased">
                              <span className="sm:hidden">{val.shortDescription}</span>
                              <span className="hidden sm:inline">{val.description}</span>
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          BLOQUE 2: PERFILES DIRECTIVOS Y EQUIPO PROFESIONAL
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#071324] relative z-20 overflow-hidden text-white">
        {/* Luces y brillos ambientales */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Perfiles y Dirección de GP SOLUTIONS
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
              Profesionales especializados al frente de las áreas contable, tributaria, laboral y legal corporativa.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            
            {/* PERFIL 1: ÁLVARO GUERRA - DIRECCIÓN GENERAL */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              <div className="lg:col-span-5 flex flex-col items-center justify-center order-1">
                {/* Contenedor tipo marco ejecutivo para anclar el retrato y evitar que quede flotando */}
                <div className="relative w-full max-w-[270px] xs:max-w-[300px] sm:max-w-[330px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#132849]/90 via-[#0e1f38]/95 to-[#081324] border border-sky-400/30 shadow-[0_16px_36px_rgba(0,0,0,0.6)] pt-5 px-3 flex flex-col items-center justify-end select-none">
                  {/* Resplandor ambiental de fondo */}
                  <div className="absolute top-4 w-40 h-40 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10 w-full flex justify-center">
                    <picture>
                      <source srcSet="/images/director-3d.avif" type="image/avif" />
                      <source srcSet="/images/director-3d.webp" type="image/webp" />
                      <img
                        src="/images/director-3d.png"
                        alt={COMPANY_DATA.director}
                        className="w-full h-auto max-h-[360px] sm:max-h-[400px] object-contain select-none block drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                        loading="lazy"
                        width={500}
                        height={491}
                      />
                    </picture>
                  </div>

                  {/* Fusión suave en la base inferior del corte del busto */}
                  <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-[#081324] to-transparent pointer-events-none z-20" />
                </div>

                {/* Título, nombre y cargo debajo de la imagen */}
                <div
                  style={{ textAlign: 'center' }}
                  className="mt-5 sm:mt-6 space-y-1.5 w-full flex flex-col items-center justify-center text-center"
                >
                  <span
                    style={{ textAlign: 'center' }}
                    className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest block text-center w-full"
                  >
                    Dirección General & Consultoría Principal
                  </span>
                  <h3
                    style={{ textAlign: 'center' }}
                    className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight text-center w-full"
                  >
                    {COMPANY_DATA.director}
                  </h3>
                  <p
                    style={{ textAlign: 'center' }}
                    className="text-xs sm:text-sm font-bold text-[#38BDF8] text-center w-full m-0"
                  >
                    Representante Legal & Consultor Contable / Tributario
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 order-2 text-left">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                  Con más de 12 años de trayectoria liderando la gestión contable, tributaria y societaria en el Ecuador, Álvaro Guerra ha posicionado a GP SOLUTIONS como un aliado estratégico fundamental para personas naturales y compañías.
                </p>

                {/* En móvil se comprime; en desktop siempre visible */}
                <div className={showMoreAlvaro ? "space-y-4 transition-all duration-300" : "hidden lg:block lg:space-y-4"}>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                    Su dirección técnica combina rigor metodológico bajo normas NIIF, estructuración preventiva ante el SRI, auditoría de balances y una constante optimización de procesos que blindan patrimonialmente a cada cliente.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    Especialista en planificación fiscal integral, auditorías preventivas y cumplimiento ante la Superintendencia de Compañías, IESS y Ministerio del Trabajo, asesora a accionistas y directores en la toma de decisiones contables de alto impacto.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    Su gestión garantiza solvencia financiera, optimización tributaria legítima y un acompañamiento continuo que protege el patrimonio empresarial frente a revisiones o requerimientos de las entidades de control.
                  </p>
                </div>

                {/* Botón Ver Más / Ver Menos exclusivo para móviles */}
                <div className="lg:hidden flex justify-center pt-1">
                  <button
                    type="button"
                    onClick={() => setShowMoreAlvaro(!showMoreAlvaro)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-sky-300 py-1.5 px-3 rounded-lg bg-sky-950/50 border border-sky-500/30 transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>{showMoreAlvaro ? 'Ver menos' : 'Ver más'}</span>
                    {showMoreAlvaro ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="pt-2 flex justify-center">
                  <a
                    href={buildWhatsAppLink("Hola Álvaro Guerra, solicito consultoría directa en Seguridad, Salud Ocupacional o Asesoría Tributaria.", "alvaro")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-[#0284C7] hover:bg-[#0369a1] text-white transition-all shadow-md cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Contactar con Álvaro Guerra</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Separador sutil entre perfiles */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

            {/* PERFIL 2: LUIS FERNANDO GUERRA - ASESOR LEGAL CORPORATIVO */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              <div className="lg:col-span-5 flex flex-col items-center justify-center order-1">
                {/* Contenedor tipo marco ejecutivo para anclar el retrato y evitar que quede flotando */}
                <div className="relative w-full max-w-[270px] xs:max-w-[300px] sm:max-w-[330px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#102d33]/90 via-[#0c2227]/95 to-[#081324] border border-emerald-400/30 shadow-[0_16px_36px_rgba(0,0,0,0.6)] pt-5 px-3 flex flex-col items-center justify-end select-none">
                  {/* Resplandor ambiental de fondo */}
                  <div className="absolute top-4 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 w-full flex justify-center">
                    <picture>
                      <source srcSet="/images/luis-guerra-bust.webp" type="image/webp" />
                      <img
                        src="/images/luis-guerra-bust.png"
                        alt="Luis Fernando Guerra - Asesor Legal Corporativo"
                        className="w-full h-auto max-h-[360px] sm:max-h-[400px] object-contain select-none block drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                        loading="lazy"
                        width={796}
                        height={896}
                      />
                    </picture>
                  </div>

                  {/* Fusión suave en la base inferior del corte del busto */}
                  <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-[#081324] to-transparent pointer-events-none z-20" />
                </div>

                {/* Título, nombre y cargo debajo de la imagen */}
                <div
                  style={{ textAlign: 'center' }}
                  className="mt-5 sm:mt-6 space-y-1.5 w-full flex flex-col items-center justify-center text-center"
                >
                  <span
                    style={{ textAlign: 'center' }}
                    className="text-xs font-bold text-emerald-400 uppercase tracking-widest block text-center w-full"
                  >
                    Área Legal & Corporativa
                  </span>
                  <h3
                    style={{ textAlign: 'center' }}
                    className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight text-center w-full"
                  >
                    Luis Fernando Guerra
                  </h3>
                  <p
                    style={{ textAlign: 'center' }}
                    className="text-xs sm:text-sm font-bold text-emerald-300 text-center w-full m-0"
                  >
                    Asesor Legal Corporativo
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 order-2 text-left">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                  Abogado con amplia experiencia en asesoría jurídica a empresas nacionales e internacionales, brindando acompañamiento integral en asuntos corporativos, contractuales, tributarios, regulatorios y de cumplimiento.
                </p>

                {/* En móvil se comprime; en desktop siempre visible */}
                <div className={showMoreLuis ? "space-y-4 transition-all duration-300" : "hidden lg:block lg:space-y-4"}>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    A lo largo de su trayectoria profesional ha asesorado a compañías y organizaciones de diversos sectores, entre ellos telecomunicaciones, tecnología, servicios financieros y cobranza, seguros, salud, educación, construcción e inmobiliario, comercio y servicios, así como entidades del sector público y organizaciones internacionales.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    Su práctica comprende la elaboración y negociación de contratos comerciales, asesoría societaria, análisis de aspectos legales vinculados con obligaciones tributarias y operaciones empresariales, protección de datos personales, telecomunicaciones, tecnología, propiedad intelectual y cumplimiento regulatorio.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    Su experiencia con organizaciones de distintas industrias le permite abordar las necesidades legales desde una perspectiva empresarial, identificando riesgos y proponiendo soluciones que consideren tanto el cumplimiento normativo como la operación y los objetivos del negocio.
                  </p>
                </div>

                {/* Botón Ver Más / Ver Menos exclusivo para móviles */}
                <div className="lg:hidden flex justify-center pt-1">
                  <button
                    type="button"
                    onClick={() => setShowMoreLuis(!showMoreLuis)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 py-1.5 px-3 rounded-lg bg-emerald-950/50 border border-emerald-500/30 transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>{showMoreLuis ? 'Ver menos' : 'Ver más'}</span>
                    {showMoreLuis ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="pt-2 flex justify-center">
                  <a
                    href={buildWhatsAppLink("Hola Luis Fernando Guerra, solicito consultoría en Asesoría Legal Corporativa.", "luis")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white transition-all shadow-md cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Contactar con Asesoría Legal</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* =========================================================================
          BLOQUE 4: SOLUCIONES DE CRECIMIENTO & POR QUÉ ELEGIRNOS (WHAT WE DO)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F4F8FC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* Columna Izquierda: Grid de 9 Soluciones sin contenedores/cajas, centrados */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#102547] tracking-tight mb-8 sm:mb-10 text-center">
                  Soluciones que Respaldan su Crecimiento
                </h2>

                {/* Grid 9 Soluciones sin cajas/contenedores y solo icono + título: 2 por fila en móvil, 3 en pantallas medianas */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-7 sm:gap-6 md:gap-8">
                  
                  {/* Ítem 1: SSO */}
                  <div className="flex flex-col items-center text-center group cursor-default px-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-100/90 text-[#0284C7] border border-sky-200/60 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <HardHat className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm md:text-base text-[#102547] text-center group-hover:text-[#0284C7] transition-colors leading-tight">
                      Elaboración de matrices de riesgo y planes de emergencia
                    </h4>
                  </div>

                  {/* Ítem 2: SSO */}
                  <div className="flex flex-col items-center text-center group cursor-default px-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-100/90 text-amber-600 border border-amber-300/60 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <FileCheck className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm md:text-base text-[#102547] text-center group-hover:text-amber-600 transition-colors leading-tight">
                      Gestión de reglamentos y planes de prevención
                    </h4>
                  </div>

                  {/* Ítem 3: SSO */}
                  <div className="flex flex-col items-center text-center group cursor-default px-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-100/90 text-[#0284C7] border border-sky-200/60 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm md:text-base text-[#102547] text-center group-hover:text-[#0284C7] transition-colors leading-tight">
                      Capacitaciones obligatorias en SSO
                    </h4>
                  </div>

                  {/* Ítem 4: Tributaria */}
                  <div className="flex flex-col items-center text-center group cursor-default px-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-100/90 text-amber-600 border border-amber-300/60 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <FileText className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm md:text-base text-[#102547] text-center group-hover:text-amber-600 transition-colors leading-tight">
                      Declaraciones de Impuestos
                    </h4>
                  </div>

                  {/* Ítem 5: Tributaria */}
                  <div className="flex flex-col items-center text-center group cursor-default px-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-100/90 text-[#0284C7] border border-sky-200/60 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <BadgePercent className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm md:text-base text-[#102547] text-center group-hover:text-[#0284C7] transition-colors leading-tight">
                      Devoluciones de Impuestos
                    </h4>
                  </div>

                  {/* Ítem 6: Tributaria / Laboral */}
                  <div className="flex flex-col items-center text-center group cursor-default px-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-100/90 text-amber-600 border border-amber-300/60 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <Users className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm md:text-base text-[#102547] text-center group-hover:text-amber-600 transition-colors leading-tight">
                      Manejo integral de nómina
                    </h4>
                  </div>

                  {/* Ítem 7: Legal */}
                  <div className="flex flex-col items-center text-center group cursor-default px-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-100/90 text-[#0284C7] border border-sky-200/60 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <Building2 className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm md:text-base text-[#102547] text-center group-hover:text-[#0284C7] transition-colors leading-tight">
                      Creación y liquidación de SAS
                    </h4>
                  </div>

                  {/* Ítem 8: Legal */}
                  <div className="flex flex-col items-center text-center group cursor-default px-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-100/90 text-amber-600 border border-amber-300/60 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm md:text-base text-[#102547] text-center group-hover:text-amber-600 transition-colors leading-tight">
                      Manejo y actualización de libros societarios
                    </h4>
                  </div>

                  {/* Ítem 9: Legal */}
                  <div className="flex flex-col items-center text-center group cursor-default px-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-100/90 text-[#0284C7] border border-sky-200/60 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <Award className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm md:text-base text-[#102547] text-center group-hover:text-[#0284C7] transition-colors leading-tight">
                      Registro de marcas y signos distintivos
                    </h4>
                  </div>

                </div>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Azul Destacada "¿Por Qué Elegirnos?" */}
            <div className="lg:col-span-4 rounded-3xl bg-gradient-to-b from-[#0284C7] via-[#0369a1] to-[#102547] text-white p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="font-heading font-black text-2xl text-white tracking-tight text-center">
                    ¿Por Qué Elegir GP Solutions?
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    'Enfoque preventivo y libre de sanciones del SRI',
                    'Comunicación directa sin intermediarios',
                    'Cumplimiento estricto de calendarios legales',
                    'Atención presencial en Quito y remota nacional',
                    'Relaciones de largo plazo con blindaje patrimonial',
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-[13px] text-sky-50 leading-snug font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón CTA al pie de la tarjeta azul */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/15">
                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm bg-white hover:bg-sky-50 text-[#102547] shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Solicitar Asesoría Inmediata</span>
                </a>
              </div>

              {/* Luces sutiles de fondo en la tarjeta azul */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-300/20 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-400/10 rounded-full blur-[60px] pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutView;
