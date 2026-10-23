import React, { useState, useEffect } from 'react';
import {
  Users,
  Rocket,
  TrendingUp,
  Building2,
  Scale,
  Award,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
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

const HISTORY_CAROUSEL_IMAGES = [
  {
    src: '/images/reunion-estrategica-equipo.jpg',
    alt: 'Equipo multidisciplinario reunido en consultoría estratégica y blindaje empresarial',
    objectPosition: 'object-[center_35%]',
  },
  {
    src: '/images/reunion-acuerdo-equipo.jpg',
    alt: 'Alianza estratégica y confianza mutua entre cliente y equipo asesor',
    objectPosition: 'object-[center_38%]',
  },
  {
    src: '/images/servicios-corporativos/mesas-dialogo-ejecutivo-estrategico.jpg',
    alt: 'Mesa de diálogo y asesoría ejecutiva en Quito con Álvaro Guerra',
    objectPosition: 'object-[center_45%]',
  },
  {
    src: '/images/reunion-directorio.jpg',
    alt: 'Directorio corporativo y planificación societaria integral',
    objectPosition: 'object-[center_62%]',
  },
];

interface AboutViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onSelectTab }) => {
  const [historySlide, setHistorySlide] = useState(0);
  const [showMoreAlvaro, setShowMoreAlvaro] = useState(false);
  const [showMoreLuis, setShowMoreLuis] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setHistorySlide((prev) => (prev + 1) % HISTORY_CAROUSEL_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
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
          <CurvedShapeDivider fillColor="#071324" position="bottom" variant="wave1" />
        </div>
      </section>


      {/* =========================================================================
          BLOQUE 1: MISIÓN, VISIÓN Y VALORES CORPORATIVOS
         ========================================================================= */}
      <section className="-mt-1 pt-14 sm:pt-20 md:pt-24 pb-14 sm:pb-20 bg-[#071324] relative z-20 overflow-hidden text-white border-b border-sky-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Misión y Visión con tipografía de alto contraste y legibilidad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            
            {/* Tarjeta Misión */}
            <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#0c1d37] via-[#09172c] to-[#071324] border border-sky-400/40 shadow-2xl relative overflow-hidden group hover:border-[#38BDF8] transition-all duration-300 flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-400/10 rounded-full blur-[70px] pointer-events-none" />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0284C7]/25 border border-sky-400/50 text-[#38BDF8] flex items-center justify-center font-black shadow-lg">
                    <ShieldCheck className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest block">Propósito Institucional</span>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white">Misión</h3>
                  </div>
                </div>
                <p className="text-slate-100 text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-[1.8] font-normal text-left sm:text-justify antialiased">
                  "En GP Solutions brindamos soluciones integrales en seguridad y salud ocupacional, asesoría contable, legal y financiera, optimizando la gestión estratégica y el cumplimiento normativo de nuestros clientes. Protegemos el talento humano, blindamos la estructura legal y maximizamos la salud financiera de las organizaciones a través de un equipo multidisciplinario altamente calificado, garantizando su tranquilidad operativa y su crecimiento sostenible."
                </p>
              </div>
            </div>

            {/* Tarjeta Visión */}
            <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#0c1d37] via-[#09172c] to-[#071324] border border-amber-400/40 shadow-2xl relative overflow-hidden group hover:border-amber-400 transition-all duration-300 flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/10 rounded-full blur-[70px] pointer-events-none" />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/25 border border-amber-400/50 text-[#FCD34D] flex items-center justify-center font-black shadow-lg">
                    <TrendingUp className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">Proyección Estratégica</span>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white">Visión</h3>
                  </div>
                </div>
                <p className="text-slate-100 text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-[1.8] font-normal text-left sm:text-justify antialiased">
                  "Consolidarnos como la firma aliada líder en asesoría multidisciplinaria, siendo reconocidos por nuestra innovación, ética y excelencia en la gestión del riesgo laboral, legal y financiero. Proyectamos expandir nuestra cobertura a nivel nacional, transformando la complejidad regulatoria en ventajas competitivas y seguridad patrimonial para nuestros socios estratégicos."
                </p>
              </div>
            </div>

          </div>

          {/* =========================================================================
              VALORES CORPORATIVOS - DISEÑO ARQUITECTÓNICO CON MÁSCARAS
             ========================================================================= */}
          <div className="mt-14 sm:mt-20 pt-12 sm:pt-16 border-t border-sky-900/60 relative">
            
            {/* Máscara de Luz y Textura Institucional Radial de Fondo */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#0284C7]/20 via-amber-400/15 to-[#0369a1]/20 rounded-full blur-[140px]" />
              <img
                src="/images/reunion-estrategica-equipo.jpg"
                alt="Textura de fondo valores corporativos"
                className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-110"
              />
            </div>

            {/* Cabecera Centrada de Valores */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative z-10">
              <h3 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight drop-shadow-md">
                Valores Corporativos
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2.5 max-w-2xl mx-auto leading-relaxed">
                Directrices fundamentales de integridad técnica, blindaje preventivo y confidencialidad que guían cada actuación de nuestra firma en el Ecuador.
              </p>
            </div>

            {/* Grid 2 + 3 con Máscaras de Diseño y Marca de Agua Numérica */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-7 relative z-10">
              
              {/* Valor 1: Ética y Transparencia (Destacado Fila 1 - lg:col-span-3) */}
              <div className="lg:col-span-3 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1d37]/95 via-[#09172c]/98 to-[#071324] border border-sky-400/35 hover:border-[#38BDF8] p-7 sm:p-9 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(56,189,248,0.25)] group flex flex-col justify-between">
                {/* Máscara Fotográfica Interna en la esquina superior derecha */}
                <div className="absolute top-0 right-0 w-3/5 h-4/5 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_top_right,black_40%,transparent_80%)] opacity-20 group-hover:opacity-35 transition-opacity duration-500">
                  <img
                    src="/images/reunion-directorio.jpg"
                    alt="Ética y Transparencia"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-sky-900/30 mix-blend-color" />
                </div>

                {/* Número de Agua Tipográfico Enmascarado */}
                <span className="absolute top-1 right-5 font-heading font-black text-7xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-sky-400/25 via-sky-400/5 to-transparent select-none pointer-events-none leading-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                  01
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-[#38BDF8] stroke-[2.2] shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(56,189,248,0.4)]" />
                    <h4 className="font-heading font-black text-xl sm:text-2xl text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                      Ética y Transparencia
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl text-left sm:text-justify antialiased">
                    Manejo íntegro de la información financiera, legal y de salud ocupacional de cada organización.
                  </p>
                </div>

                {/* Línea de acento inferior enmascarada */}
                <div className="relative z-10 mt-6 pt-4 border-t border-sky-900/40 flex items-center gap-2">
                  <span className="h-1 w-8 rounded-full bg-gradient-to-r from-[#38BDF8] to-transparent" />
                  <span className="text-[11px] text-sky-300 font-semibold tracking-wide">Rigor profesional irrenunciable</span>
                </div>
              </div>

              {/* Valor 2: Prevención y Rigor (Destacado Fila 1 - lg:col-span-3) */}
              <div className="lg:col-span-3 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1d37]/95 via-[#09172c]/98 to-[#071324] border border-amber-400/35 hover:border-amber-400 p-7 sm:p-9 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(245,158,11,0.25)] group flex flex-col justify-between">
                {/* Máscara Fotográfica Interna */}
                <div className="absolute top-0 right-0 w-3/5 h-4/5 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_top_right,black_40%,transparent_80%)] opacity-20 group-hover:opacity-35 transition-opacity duration-500">
                  <img
                    src="/images/inicio-tributaria-legal/devoluciones-contingencias-home.jpg"
                    alt="Prevención y Rigor"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-amber-900/30 mix-blend-color" />
                </div>

                {/* Número de Agua Tipográfico Enmascarado */}
                <span className="absolute top-1 right-5 font-heading font-black text-7xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-amber-400/25 via-amber-400/5 to-transparent select-none pointer-events-none leading-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                  02
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#FCD34D] stroke-[2.2] shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(252,211,77,0.4)]" />
                    <h4 className="font-heading font-black text-xl sm:text-2xl text-white group-hover:text-amber-300 transition-colors leading-tight">
                      Prevención y Rigor
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl text-left sm:text-justify antialiased">
                    Anticipación a riesgos laborales, fiscales y jurídicos antes de que se conviertan en contingencias.
                  </p>
                </div>

                {/* Línea de acento inferior enmascarada */}
                <div className="relative z-10 mt-6 pt-4 border-t border-amber-900/40 flex items-center gap-2">
                  <span className="h-1 w-8 rounded-full bg-gradient-to-r from-amber-400 to-transparent" />
                  <span className="text-[11px] text-amber-300 font-semibold tracking-wide">Blindaje técnico integral</span>
                </div>
              </div>

              {/* Valor 3: Confidencialidad (Fila 2 - lg:col-span-2) */}
              <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1d37]/90 via-[#09172c]/95 to-[#071324] border border-emerald-400/30 hover:border-emerald-400 p-6 sm:p-7 transition-all duration-400 hover:shadow-[0_12px_32px_rgba(16,185,129,0.2)] group flex flex-col justify-between">
                {/* Máscara Fotográfica Interna */}
                <div className="absolute top-0 right-0 w-1/2 h-3/4 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_top_right,black_35%,transparent_75%)] opacity-15 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src="/images/inicio-tributaria-legal/libros-societarios-home.jpg"
                    alt="Confidencialidad"
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                </div>

                <span className="absolute top-1 right-4 font-heading font-black text-6xl text-transparent bg-clip-text bg-gradient-to-b from-emerald-400/25 via-emerald-400/5 to-transparent select-none pointer-events-none leading-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                  03
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock className="w-6 h-6 text-emerald-400 stroke-[2.2] shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(52,211,153,0.4)]" />
                    <h4 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-emerald-300 transition-colors leading-tight">
                      Confidencialidad
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Protección absoluta de los datos sensibles de la empresa y sus colaboradores.
                  </p>
                </div>

                <div className="relative z-10 mt-5 pt-3.5 border-t border-emerald-900/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wider">Custodia blindada</span>
                </div>
              </div>

              {/* Valor 4: Enfoque Multidisciplinario (Fila 2 - lg:col-span-2) */}
              <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1d37]/90 via-[#09172c]/95 to-[#071324] border border-sky-400/30 hover:border-[#38BDF8] p-6 sm:p-7 transition-all duration-400 hover:shadow-[0_12px_32px_rgba(56,189,248,0.2)] group flex flex-col justify-between">
                {/* Máscara Fotográfica Interna */}
                <div className="absolute top-0 right-0 w-1/2 h-3/4 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_top_right,black_35%,transparent_75%)] opacity-15 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src="/images/reunion-estrategica-equipo.jpg"
                    alt="Enfoque Multidisciplinario"
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                </div>

                <span className="absolute top-1 right-4 font-heading font-black text-6xl text-transparent bg-clip-text bg-gradient-to-b from-sky-400/25 via-sky-400/5 to-transparent select-none pointer-events-none leading-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                  04
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-[#38BDF8] stroke-[2.2] shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(56,189,248,0.4)]" />
                    <h4 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                      Enfoque Multidisciplinario
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Trabajo articulado entre áreas de seguridad, tributaria, contable y corporativa.
                  </p>
                </div>

                <div className="relative z-10 mt-5 pt-3.5 border-t border-sky-900/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  <span className="text-[10px] text-sky-300 font-semibold uppercase tracking-wider">Sinergia técnica 360°</span>
                </div>
              </div>

              {/* Valor 5: Compromiso con el Cliente (Fila 2 - lg:col-span-2) */}
              <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1d37]/90 via-[#09172c]/95 to-[#071324] border border-amber-400/30 hover:border-amber-400 p-6 sm:p-7 transition-all duration-400 hover:shadow-[0_12px_32px_rgba(245,158,11,0.2)] group flex flex-col justify-between">
                {/* Máscara Fotográfica Interna */}
                <div className="absolute top-0 right-0 w-1/2 h-3/4 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_top_right,black_35%,transparent_75%)] opacity-15 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src="/images/reunion-acuerdo-equipo.jpg"
                    alt="Compromiso con el Cliente"
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                </div>

                <span className="absolute top-1 right-4 font-heading font-black text-6xl text-transparent bg-clip-text bg-gradient-to-b from-amber-400/25 via-amber-400/5 to-transparent select-none pointer-events-none leading-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                  05
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Handshake className="w-6 h-6 text-[#FCD34D] stroke-[2.2] shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(252,211,77,0.4)]" />
                    <h4 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors leading-tight">
                      Compromiso con el Cliente
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Trato personalizado orientado a resultados medibles y sostenibilidad de negocio.
                  </p>
                </div>

                <div className="relative z-10 mt-5 pt-3.5 border-t border-amber-900/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">Cercanía y solvencia</span>
                </div>
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
          BLOQUE 3: NUESTRA HISTORIA Y COMPROMISO (PANORÁMICA)
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F4F8FC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0f2445] border border-sky-900/40 text-white flex flex-col md:flex-row items-stretch">
            
            {/* Contenedor del Carrusel: Proporción armónica 16:10 / 3:2 que llena el contenedor sin dejar espacios ni recortar sujetos */}
                        {/* Contenedor del Carrusel: Transición automática continua sin flechas ni puntos */}
            <div
              className="relative w-full md:w-[54%] lg:w-[56%] aspect-[16/10] sm:aspect-[16/10] md:aspect-auto md:min-h-[420px] bg-slate-900 overflow-hidden"
            >
              {HISTORY_CAROUSEL_IMAGES.map((img, idx) => (
                <div
                  key={img.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === historySlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full h-full object-cover ${img.objectPosition} transition-transform duration-700`}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}

              {/* Degradado sutil en móvil para suavizar la transición hacia el texto inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2445]/70 via-transparent to-transparent md:hidden pointer-events-none" />
            </div>

            <div className="w-full md:w-[46%] lg:w-[44%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-[#0f2445] text-white space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight text-center">
                Nuestra Historia y Compromiso
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
                GP SOLUTIONS nació a partir de un propósito claro: democratizar el acceso a una consultoría contable, tributaria y societaria con la más alta excelencia que tradicionalmente solo disfrutaban las grandes multinacionales.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Con más de 12 años de actividad continua desde nuestro despacho en Quito, nos hemos ganado la confianza de cientos de comerciantes, profesionales y empresas en Pichincha y en todo el país. Creemos que el éxito de un negocio se cimenta en la pulcritud de sus libros y en la tranquilidad de estar 100% al día con el SRI y la Superintendencia de Compañías.
              </p>

              <div className="pt-2 flex justify-center">
                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#0284C7] to-[#0369a1] hover:from-[#38BDF8] hover:to-[#0284C7] text-white transition-all shadow-md shadow-sky-950/40 active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Conocer más de nuestros servicios</span>
                  <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          BLOQUE 3: NUESTRA VISIÓN Y PILARES (OUR VISION)
         ========================================================================= */}
      {/* =========================================================================
          BLOQUE 3: NUESTRA VISIÓN Y PILARES (ESTILO ARCOS DECORATIVOS)
         ========================================================================= */}
      {/* =========================================================================
          BLOQUE 3: NUESTRA VISIÓN Y PILARES (FONDO AZUL & ESTILO ARCOS DECORATIVOS)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0d1e38] relative overflow-hidden text-white border-t border-sky-900/60">
        {/* Luces y brillos ambientales de fondo */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#0284C7]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Encabezado Centrado: Sin texto previo al título */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight">
              Construyendo Seguridad y Claridad Financiera
            </h2>
          </div>

          {/* 3 Columnas con Contenedores en Forma de Arco Superior (rounded-t-full) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Contenedor Arco 1: Celeste GP Solutions */}
            <div className="rounded-t-full rounded-b-3xl bg-[#112646]/90 hover:bg-[#163056] border border-sky-400/30 hover:border-sky-300 pt-14 pb-10 px-7 sm:px-8 text-center flex flex-col items-center group transition-all duration-300 hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] hover:-translate-y-2 backdrop-blur-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0369a1] text-white shadow-lg border border-sky-300/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-[#38BDF8] transition-colors mb-3">
                Enfoque en el Cliente
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs">
                Diseñamos soluciones personalizadas que se adaptan a la escala y naturaleza de su negocio, sin fórmulas genéricas.
              </p>
            </div>

            {/* Contenedor Arco 2: Azul Profundo */}
            <div className="rounded-t-full rounded-b-3xl bg-[#091526]/90 hover:bg-[#0c1c33] border border-sky-400/25 hover:border-[#0284C7] pt-14 pb-10 px-7 sm:px-8 text-center flex flex-col items-center group transition-all duration-300 hover:shadow-[0_0_35px_rgba(2,132,199,0.3)] hover:-translate-y-2 backdrop-blur-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0284C7] text-white shadow-lg border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-[#38BDF8] transition-colors mb-3">
                Excelencia Técnica NIIF
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs">
                Balances auditables y declaraciones estructuradas con 100% de apego a la normativa legal, evitando multas y glosas del SRI.
              </p>
            </div>

            {/* Contenedor Arco 3: Acento Ámbar Dorado GP Solutions */}
            <div className="rounded-t-full rounded-b-3xl bg-[#112646]/90 hover:bg-[#163056] border border-amber-400/30 hover:border-amber-300 pt-14 pb-10 px-7 sm:px-8 text-center flex flex-col items-center group transition-all duration-300 hover:shadow-[0_0_35px_rgba(252,211,77,0.3)] hover:-translate-y-2 backdrop-blur-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg border border-amber-200/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors mb-3">
                Innovación Digital
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs">
                Aceleramos sus gestiones mediante canales virtuales, carpetas seguras en la nube y reportes oportunos en todo el Ecuador.
              </p>
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
