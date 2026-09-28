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
  X,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/SocialIcons';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { ALL_SERVICES } from '../data/services';
import { ServiceCardSlideUp } from '../components/ui/ServiceCardSlideUp';
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from '../components/ui/reveal-on-hover';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import type { TabKey, ServiceItem } from '../types';

const getServiceIcon = (id: string) => {
  switch (id) {
    case 'cont-1': return Building2;
    case 'cont-2': return Receipt;
    case 'cont-3': return ShieldCheck;
    case 'cont-4': return Scale;
    case 'cont-5': return Users;
    case 'cont-6': return Award;
    case 'cont-7': return Clock;
    case 'cont-8': return Sparkles;
    case 'cont-9': return Lock;
    default: return Building2;
  }
};

interface HomeViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Estado para efecto de perspectiva y profundidad 3D interactiva en la foto del Director
  const [photoTilt, setPhotoTilt] = useState({ x: 0, y: 0 });
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  const handlePhotoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Cálculo de rotación suave en 3D
    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 14;
    setPhotoTilt({ x: rotateX, y: rotateY });
  };

  const handlePhotoMouseLeave = () => {
    setIsPhotoHovered(false);
    setPhotoTilt({ x: 0, y: 0 });
  };

  const accountingScrollRef = useRef<HTMLDivElement>(null);
  const corporateScrollRef = useRef<HTMLDivElement>(null);
  const taxScrollRef = useRef<HTMLDivElement>(null);
  const laborScrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const card = (ref.current.querySelector('.snap-center') || ref.current.querySelector('.snap-start')) as HTMLElement;
      const scrollAmount = card ? (card.offsetWidth + 24) : 480;
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
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
      <section className="relative pt-40 pb-16 sm:pt-46 sm:pb-20 md:pt-54 md:pb-24 overflow-hidden bg-[#102547]">
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
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center mt-4 sm:mt-7 mb-8 sm:mb-12">
            
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
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#0d1d36] border-2 border-amber-400/60 backdrop-blur-xl flex flex-col items-center justify-center text-center p-3 sm:p-3.5 cursor-default pointer-events-none transform -translate-y-1 sm:-translate-y-2 shadow-[0_4px_20px_rgba(245,158,11,0.2)]">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner border border-amber-400/30">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-white px-2 leading-tight">
                Balances NIIF & Contabilidad
              </h3>
            </div>

            {/* Card Circular 2: Blindaje Tributario */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#0d1d36] border-2 border-sky-400/60 backdrop-blur-xl flex flex-col items-center justify-center text-center p-3 sm:p-3.5 cursor-default pointer-events-none transform translate-y-1 sm:translate-y-2 shadow-[0_4px_20px_rgba(56,189,248,0.2)]">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sky-400/20 text-[#38BDF8] flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner border border-sky-400/30">
                <Receipt className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-white px-2 leading-tight">
                Blindaje Tributario & SRI
              </h3>
            </div>

            {/* Card Circular 3: Nómina & IESS */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#0d1d36] border-2 border-amber-400/60 backdrop-blur-xl flex flex-col items-center justify-center text-center p-3 sm:p-3.5 cursor-default pointer-events-none transform -translate-y-1 sm:-translate-y-1 shadow-[0_4px_20px_rgba(245,158,11,0.2)]">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner border border-amber-400/30">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-white px-2 leading-tight">
                Nómina & Cumplimiento IESS
              </h3>
            </div>

            {/* Card Circular 4: Constitución S.A.S. & Legal */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#0d1d36] border-2 border-sky-400/60 backdrop-blur-xl flex flex-col items-center justify-center text-center p-3 sm:p-3.5 cursor-default pointer-events-none transform translate-y-1 sm:translate-y-2 shadow-[0_4px_20px_rgba(56,189,248,0.2)]">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sky-400/20 text-[#38BDF8] flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner border border-sky-400/30">
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
          2. RESUMEN: SERVICIOS CONTABLES Y CORPORATIVOS (FONDO BLANCO & DISPOSICIÓN ALTERNADA)
         ========================================================================= */}
      <section className="pt-10 sm:pt-14 pb-8 sm:pb-10 bg-white relative overflow-hidden text-[#102547]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Encabezado Centrado */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#102547] tracking-tight">
              Contabilidad, Balances NIIF & Creación de Empresas S.A.S.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
              Cumplimiento societario, asesoría integral y estructuración de estados financieros bajo normativa vigente.
            </p>
          </div>

          {/* Carrusel Deslizable Horizontalmente con Iluminación Ambiental y Flechas */}
          <div className="relative group/carousel">
            {/* Efectos de Iluminación Ambiental de Fondo */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#0284C7]/10 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-200/20 rounded-full blur-[130px] pointer-events-none" />

            {/* Botón Anterior Flotante Translúcido (más afuera del carrusel) */}
            <button
              type="button"
              onClick={() => scrollCarousel(accountingScrollRef, 'left')}
              aria-label="Deslizar anterior"
              className="absolute -left-4 sm:-left-8 md:-left-12 lg:-left-14 xl:-left-16 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-white text-[#102547] hover:text-[#0284C7] border border-slate-200 shadow-[0_8px_32px_rgba(2,132,199,0.25)] flex items-center justify-center transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.8]" />
            </button>

            {/* Contenedor del Carrusel: Disposición Alternada de Imagen y Contenedor */}
            <div
              ref={accountingScrollRef}
              className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 pt-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 relative z-10"
            >
              {contableServicesList.map((service, idx) => {
                const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);
                
                const shortDescriptions: Record<string, string> = {
                  'cont-1': 'Registro contable bajo NIIF, conciliaciones bancarias y libros mayores al día.',
                  'cont-2': 'Balances generales y estados de resultados auditables para bancos y accionistas.',
                  'cont-3': 'Presentación anual de balances, informes y nómina de socios en la SuperCías.',
                  'cont-4': 'Constitución digital de SAS con estatutos blindados y liquidación societaria.',
                  'cont-5': 'Aumentos de capital, actas de juntas generales y reformas estatutarias.',
                  'cont-6': 'Búsqueda fonética y registro oficial de marca ante el SENADI por 10 años.',
                  'cont-7': 'Cálculo mensual de roles de pago, décimos y planillas patronales del IESS.',
                  'cont-8': 'Talleres prácticos in-house en normativa tributaria SRI y facturación.',
                  'cont-9': 'Revisión preventiva de libros contables y control interno antes de auditorías.',
                };

                const shortText = shortDescriptions[service.id] || service.description;
                const isImageTop = idx % 2 === 0;

                const imageBlock = (
                  <div className="w-full h-56 sm:h-60 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-sky-300/40 group-hover:border-sky-500 shadow-md group-hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all duration-500 relative shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('hero-accounting.jpg')) {
                          target.src = '/images/heroes/hero-accounting.jpg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a172c]/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                );

                const isYellowAccent = idx % 2 === 1;

                const textBlock = (
                  <article className={`rounded-2xl sm:rounded-3xl border-2 ${
                    isYellowAccent
                      ? 'border-amber-400/80 group-hover:border-amber-400 shadow-[0_6px_25px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_35px_rgba(245,158,11,0.4)]'
                      : 'border-sky-400/80 group-hover:border-[#0284C7] shadow-[0_6px_25px_rgba(2,132,199,0.22)] group-hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]'
                  } bg-gradient-to-b from-[#0e2440] via-[#0a1a2f] to-[#071322] p-6 min-h-[200px] sm:min-h-[220px] group-hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between flex-1 text-white ${isImageTop ? 'mt-3.5' : 'mb-3.5'}`}>
                    <div>
                      {/* Título */}
                      <h3 className={`text-base sm:text-lg font-heading font-bold text-white ${
                        isYellowAccent ? 'group-hover:text-amber-300' : 'group-hover:text-[#38bdf8]'
                      } transition-colors duration-300 leading-snug mb-2.5`}>
                        {service.title}
                      </h3>

                      {/* Poco texto descriptivo */}
                      <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed mb-5">
                        {shortText}
                      </p>
                    </div>

                    {/* Botón de Cotizar */}
                    <div className={`pt-2.5 border-t ${isYellowAccent ? 'border-amber-400/25' : 'border-sky-400/20'}`}>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm ${
                          isYellowAccent
                            ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-black shadow-md shadow-amber-950/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)]'
                            : 'bg-gradient-to-r from-[#0284C7] to-[#00b4d8] hover:from-[#38BDF8] hover:to-[#0284C7] text-white shadow-md shadow-sky-950/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]'
                        } transition-all duration-300 active:scale-95 cursor-pointer`}
                      >
                        <span>Cotizar</span>
                        <WhatsAppIcon className={`w-4 h-4 ${isYellowAccent ? 'text-slate-950' : 'text-white'}`} />
                      </a>
                    </div>
                  </article>
                );

                return (
                  <div
                    key={service.id}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start flex flex-col justify-between group"
                  >
                    {isImageTop ? (
                      <>
                        {imageBlock}
                        {textBlock}
                      </>
                    ) : (
                      <>
                        {textBlock}
                        {imageBlock}
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Botón Siguiente Flotante Translúcido (más afuera del carrusel) */}
            <button
              type="button"
              onClick={() => scrollCarousel(accountingScrollRef, 'right')}
              aria-label="Deslizar siguiente"
              className="absolute -right-4 sm:-right-8 md:-right-12 lg:-right-14 xl:-right-16 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-white text-[#102547] hover:text-[#0284C7] border border-slate-200 shadow-[0_8px_32px_rgba(2,132,199,0.25)] flex items-center justify-center transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 pointer-events-none group-hover/carousel:pointer-events-auto hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.8]" />
            </button>
          </div>

          {/* Botón Ver Más debajo de las tarjetas */}
          <div className="flex items-center justify-center mt-4 sm:mt-5">
            <button
              onClick={() => onSelectTab('servicios-contables')}
              className="inline-flex items-center gap-3 text-base sm:text-lg font-black text-[#0284C7] hover:text-white bg-sky-50/90 hover:bg-[#0284C7] border-2 border-sky-300 shadow-md hover:shadow-xl hover:shadow-sky-400/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer py-3 sm:py-3.5 px-8 sm:px-10 rounded-full"
            >
              <span>Ver más</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1.5" />
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          3. RESUMEN: SERVICIOS CONTABLES Y CORPORATIVOS (ESTILO REFERENCIA & FONDO BANNER)
         ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 bg-[#102547] relative overflow-hidden text-white border-t border-sky-900/60 group/corporate">
        {/* Fondo panorámico con overlays de alta legibilidad igual al banner */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/heroes/hero-home.jpg"
            alt="GP Solutions - Servicios Contables y Corporativos"
            className="w-full h-full object-cover object-center transform scale-105 opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a30]/95 via-[#0e203c]/90 to-[#0c1a30]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1526]/85 via-transparent to-[#0a1526]/95" />
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-400/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          
          {/* Cabecera del Apartado */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight text-justify">
                Servicios Contables y Corporativos
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl text-justify">
                Contabilidad general, balances NIIF, cumplimiento ante Superintendencia de Compañías, constitución de SAS, marcas y nóminas con blindaje legal.
              </p>
            </div>

            {/* Botón Ver Catálogo (sin flechas al lado) */}
            <div className="flex items-center self-start md:self-auto shrink-0">
              <button
                onClick={() => onSelectTab('servicios-contables')}
                className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#38bdf8] hover:to-[#0284c7] text-white transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Ver catálogo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carrusel Horizontal de Tarjetas Estilo Referencia (Image 1) */}
          <div className="relative group/corporate-carousel">
            {/* Botón Anterior Flotante Translúcido (posicionado más afuera del carrusel) */}
            <button
              type="button"
              onClick={() => scrollCarousel(corporateScrollRef, 'left')}
              aria-label="Deslizar anterior"
              className="absolute -left-4 sm:-left-8 md:-left-12 lg:-left-14 xl:-left-16 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-300 opacity-0 group-hover/corporate-carousel:opacity-100 pointer-events-none group-hover/corporate-carousel:pointer-events-auto hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.8]" />
            </button>

            {/* Contenedor del Carrusel Deslizable */}
            <div
              ref={corporateScrollRef}
              className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 relative z-10"
            >
              {contableServicesList.map((service, cardIdx) => {
                const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);
                const IconComponent = getServiceIcon(service.id);
                const isGold = cardIdx % 2 === 1;

                const shortDescriptions: Record<string, string> = {
                  'cont-1': 'Registro contable bajo NIIF, conciliaciones bancarias y declaraciones SRI sin mora.',
                  'cont-2': 'Balances generales y estados de resultados auditables para bancos y accionistas.',
                  'cont-3': 'Presentación anual de balances, informes y nómina de socios ante la SuperCías.',
                  'cont-4': 'Constitución ágil de SAS con estatutos blindados y liquidación societaria legal.',
                  'cont-5': 'Aumentos de capital, actas de juntas generales y reformas estatutarias.',
                  'cont-6': 'Búsqueda fonética y registro oficial de marca ante el SENADI por 10 años.',
                  'cont-7': 'Cálculo mensual de roles de pago, décimos y planillas patronales del IESS.',
                  'cont-8': 'Talleres prácticos in-company en normativa tributaria SRI y facturación.',
                  'cont-9': 'Revisión preventiva de libros contables y control interno antes de auditorías.',
                };

                const shortText = shortDescriptions[service.id] || service.description;

                return (
                  <div
                    key={service.id}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start flex flex-col pt-3"
                  >
                    {/* Tarjeta con fondo oscuro estilizado según la paleta del proyecto */}
                    <div className={`relative bg-[#0d1e38]/95 hover:bg-[#112646] rounded-3xl overflow-visible shadow-xl ${
                      isGold
                        ? 'hover:shadow-[0_0_35px_rgba(245,158,11,0.35)] border-amber-400/35 hover:border-amber-400'
                        : 'hover:shadow-[0_0_35px_rgba(56,189,248,0.4)] border-sky-400/30 hover:border-[#38bdf8]'
                    } transition-all duration-500 hover:-translate-y-1.5 border backdrop-blur-xl flex flex-col h-full group/card`}>
                      
                      {/* Badge Circular con icono del servicio: En el filo superior derecho */}
                      <div className={`absolute -top-3.5 right-4 sm:right-5 z-30 w-11 h-11 rounded-full border-2 ${
                        isGold
                          ? 'border-amber-400/80 bg-gradient-to-br from-amber-400 via-amber-500 to-[#102547] text-slate-950 shadow-[0_4px_15px_rgba(245,158,11,0.4)] group-hover/card:shadow-[0_0_20px_rgba(245,158,11,0.7)]'
                          : 'border-sky-400/70 bg-gradient-to-br from-[#38bdf8] via-[#0284c7] to-[#102547] text-white shadow-[0_4px_15px_rgba(56,189,248,0.4)] group-hover/card:shadow-[0_0_20px_rgba(56,189,248,0.7)]'
                      } flex items-center justify-center transition-all duration-500 group-hover/card:scale-110`}>
                        <IconComponent className={`w-5 h-5 ${isGold ? 'text-slate-950' : 'text-white'} stroke-[2.2]`} />
                      </div>

                      {/* 1. Imagen Superior */}
                      <div className="relative w-full h-48 sm:h-52 shrink-0 overflow-hidden rounded-t-3xl bg-[#091526]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-500 opacity-90"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('hero-accounting.jpg')) {
                              target.src = '/images/heroes/hero-accounting.jpg';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e38] via-transparent to-transparent opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-transparent to-amber-300/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>

                      {/* 2. Contenido de la Tarjeta */}
                      <div className="p-6 flex flex-col justify-between flex-1 min-w-0 bg-[#0d1e38]/95 group-hover/card:bg-gradient-to-b group-hover/card:from-[#112646] group-hover/card:to-[#0d1e38] rounded-b-3xl transition-colors duration-500">
                        <div className="space-y-3">
                          {/* Título Centrado en blanco */}
                          <h3 className={`font-heading font-black text-base sm:text-lg text-white leading-snug text-center ${
                            isGold ? 'group-hover/card:text-amber-300' : 'group-hover/card:text-[#38bdf8]'
                          } transition-colors duration-300 drop-shadow-sm min-h-[3rem] flex items-center justify-center`}>
                            {service.title}
                          </h3>

                          {/* Descripción Centrada */}
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-center group-hover/card:text-slate-200 transition-colors">
                            {shortText}
                          </p>
                        </div>

                        {/* Botón Cotizar Centrado */}
                        <div className={`flex items-center justify-center pt-5 mt-6 border-t ${isGold ? 'border-amber-400/20' : 'border-sky-400/20'}`}>
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-2 py-2.5 px-8 rounded-full font-bold text-xs sm:text-sm ${
                              isGold
                                ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-black border border-amber-300/40 shadow-md shadow-amber-950/40 hover:shadow-[0_0_18px_rgba(245,158,11,0.6)]'
                                : 'bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#102547] hover:from-[#38bdf8] hover:via-[#0284c7] hover:to-[#0369a1] text-white border border-sky-400/30 shadow-md shadow-sky-500/20 hover:shadow-[0_0_18px_rgba(56,189,248,0.6)]'
                            } transition-all duration-300 active:scale-95 group/btn`}
                          >
                            <span>Cotizar</span>
                            <WhatsAppIcon className={`w-4 h-4 ${isGold ? 'text-slate-950' : 'text-white'}`} />
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botón Siguiente Flotante Translúcido (posicionado más afuera del carrusel) */}
            <button
              type="button"
              onClick={() => scrollCarousel(corporateScrollRef, 'right')}
              aria-label="Deslizar siguiente"
              className="absolute -right-4 sm:-right-8 md:-right-12 lg:-right-14 xl:-right-16 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-300 opacity-0 group-hover/corporate-carousel:opacity-100 pointer-events-none group-hover/corporate-carousel:pointer-events-auto hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.8]" />
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          4. RESUMEN: QUIÉNES SOMOS / TRAYECTORIA INSTITUCIONAL
         ========================================================================= */}
      <section className="pt-8 sm:pt-12 pb-14 sm:pb-20 bg-[#071324] relative overflow-hidden text-white">
        {/* Luces y brillos ambientales acordes a la paleta del logo */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-[#0284C7]/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Columna Izquierda: Títulos, Párrafos, Especialidades y Acciones */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              
              {/* Título de Trayectoria */}
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Más de 12 Años de Rigor Técnico y Respaldo Empresarial
              </h2>

              {/* Párrafos informativos completos */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                Bajo la dirección de <strong className="text-white font-semibold">{COMPANY_DATA.director}</strong>, GP SOLUTIONS se ha consolidado como un aliado estratégico para emprendedores, personas naturales (RIMPE y Régimen General) y sociedades mercantiles (S.A.S., Cías. Ltda. y S.A.) en todo el Ecuador.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                Operamos desde nuestro despacho en <strong className="text-sky-300 font-semibold">Tumbaco, Quito</strong>, integrando canales digitales para asegurar un control estricto de balances, declaraciones ante el SRI y nóminas patronales sin contingencias legales.
              </p>

              {/* Especialidades con Iconos Centrados */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex flex-col items-center text-center">
                  <div className="p-2.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-[#38BDF8] mb-2.5 flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white max-w-xs text-center">
                    Especialista en Balances y Normas NIIF
                  </h4>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="p-2.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-[#FCD34D] mb-2.5 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white max-w-xs text-center">
                    Estrategia Tributaria y Defensa SRI
                  </h4>
                </div>
              </div>

              {/* Botones de Acción Centrados */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => onSelectTab('nosotros')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369a1] text-white transition-all cursor-pointer shadow-lg shadow-sky-600/30 hover:shadow-sky-500/50"
                >
                  <span>Conocer más sobre GP Solutions</span>
                  <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                </button>

                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-sky-400/30 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Hablar con el Director</span>
                </a>
              </div>

            </div>

            {/* Columna Derecha: Retrato del Director con silueta natural y sin contenedor */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
              <div
                className="relative w-full max-w-sm sm:max-w-md flex justify-center [perspective:1000px] select-none"
                onMouseMove={handlePhotoMouseMove}
                onMouseEnter={() => setIsPhotoHovered(true)}
                onMouseLeave={handlePhotoMouseLeave}
              >
                {/* Silueta natural del personaje sin contenedores, cajas ni marcos */}
                <div
                  className="relative transition-transform duration-200 ease-out select-none"
                  style={{
                    transform: `perspective(1000px) rotateX(${photoTilt.x * 0.7}deg) rotateY(${photoTilt.y * 0.7}deg) ${
                      isPhotoHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'
                    }`,
                  }}
                >
                  <img
                    src="/images/director-3d.png"
                    alt={COMPANY_DATA.director}
                    className="w-full h-auto max-h-[500px] sm:max-h-[560px] lg:max-h-[600px] object-contain select-none"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Nombre y Representante DEBAJO DE LA IMAGEN */}
              <div className="text-center mt-4 space-y-1">
                <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
                  {COMPANY_DATA.director}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#38BDF8]">
                  Representante Legal & Consultor Principal
                </p>
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
            
            {/* Acordeón de Preguntas Frecuentes estilo Barra Traslúcida con iluminación en hover */}
            <div className="lg:col-span-7 space-y-3.5">
              {homeFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl backdrop-blur-md transition-all duration-300 overflow-hidden ${
                    openFaq === idx
                      ? 'bg-amber-100/40 border border-amber-400/50 shadow-[0_8px_25px_rgba(245,158,11,0.12)]'
                      : 'bg-white/80 border border-slate-200/70 hover:bg-amber-100/35 hover:border-amber-400/50 hover:shadow-[0_8px_25px_rgba(245,158,11,0.12)] shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 transition-colors cursor-pointer group"
                  >
                    <span className="font-bold text-xs sm:text-sm text-[#102547] group-hover:text-amber-900 transition-colors">
                      {faq.q}
                    </span>

                    {/* Flecha interactiva */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                        openFaq === idx
                          ? 'rotate-180 bg-amber-500 text-white border-amber-500 shadow-sm'
                          : 'bg-slate-100/80 text-slate-500 border-slate-200/80 group-hover:bg-amber-400/25 group-hover:text-amber-600 group-hover:border-amber-400/40'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {openFaq === idx && (
                    <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-xs sm:text-sm text-slate-700 border-t border-amber-300/40 pt-3.5 leading-relaxed text-justify bg-amber-50/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Ficha de Despacho y Canales de Contacto con estilo de tarjeta traslúcida oscura de la referencia */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0b1a30]/95 via-[#0d1f3b]/95 to-[#0b1a30]/95 hover:from-[#0e274c]/95 hover:via-[#12335f]/95 hover:to-[#081528]/95 backdrop-blur-xl border border-sky-400/25 hover:border-sky-300/60 shadow-2xl hover:shadow-[0_20px_50px_rgba(2,132,199,0.25)] transition-all duration-500 text-white group/despacho">
                {/* Cabecera centrada con icono superior y texto centrado */}
                <div className="flex flex-col items-center text-center mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400/20 via-[#0284C7]/20 to-amber-400/15 group-hover/despacho:from-sky-400/35 group-hover/despacho:to-amber-400/30 border border-sky-400/30 group-hover/despacho:border-sky-300/60 flex items-center justify-center text-[#38BDF8] group-hover/despacho:text-white shadow-lg shadow-sky-900/40 group-hover/despacho:shadow-sky-500/30 group-hover/despacho:scale-105 transition-all duration-500 mb-3">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight">
                    Despacho Presencial y Digital
                  </h3>
                  <p className="text-xs text-[#38BDF8] font-semibold mt-0.5">
                    Atención directa en Tumbaco & Cobertura Nacional
                  </p>
                  <p className="text-xs text-slate-300 mt-2 text-center leading-relaxed max-w-sm">
                    Estamos listos para revisar sus libros y balances con atención directa sin intermediarios.
                  </p>
                </div>

                {/* Filas de información sin contenedores */}
                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Dirección Principal:</span>
                      <span className="text-slate-300 leading-relaxed text-justify">{COMPANY_DATA.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Horarios de Atención:</span>
                      <span className="text-slate-300 leading-relaxed">{COMPANY_DATA.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#FCD34D] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Contacto Directo:</span>
                      <span className="text-slate-300 leading-relaxed">{COMPANY_DATA.phoneFormatted1}</span>
                    </div>
                  </div>
                </div>

                {/* Botones de Acción estilo tarjetas traslúcidas */}
                <div className="pt-5 mt-5 border-t border-sky-800/40 flex flex-col gap-2.5">
                  <a
                    href={COMPANY_DATA.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-bold bg-[#0284C7] hover:bg-[#0369a1] text-white transition-all shadow-lg shadow-sky-600/30 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Escribir por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onSelectTab('contacto')}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-sky-400/25 transition-all cursor-pointer backdrop-blur-sm"
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
