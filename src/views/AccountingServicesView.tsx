import React, { useState, useMemo } from 'react';
import { WhatsAppIcon } from '../components/ui/SocialIcons';
import { ALL_SERVICES } from '../data/services';
import { buildWhatsAppLink } from '../data/company';
import { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent } from '../components/ui/reveal-on-hover';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import FocusPullCarousel, { Slide } from '../components/ui/focus-pull-carousel';

const CORPORATE_CAROUSEL_SLIDES: Slide[] = [
  {
    image: '/images/servicios-corporativos/seminario-en-seguridad.jpg',
    title: 'Seminarios Especializados en Seguridad Laboral',
    caption: 'Formación continua y cultura de prevención laboral.',
    alt: 'Seminario en seguridad y salud ocupacional GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/seguridad-salud-ocupacional-simulacro.jpg',
    title: 'Seguridad y Salud Ocupacional (S.S.O.)',
    caption: 'Simulacros y control de emergencias en campo.',
    alt: 'Entrenamiento de brigadas y simulacro contra incendios GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/asesoria-consultoria-personalizada.jpg',
    title: 'Consultoría y Asesoría Técnica Personalizada',
    caption: 'Diagnóstico integral y acompañamiento societario.',
    alt: 'Mesa de trabajo y asesoría personalizada GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/reunion-instituciones-receptoras.jpg',
    title: 'Reuniones de Cooperación & Articulación Institucional',
    caption: 'Mesas de trabajo y alianzas estratégicas.',
    alt: 'Reunión de instituciones receptoras y articulación institucional GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/conferencias-corporativas.jpg',
    title: 'Conferencias & Asesoría Institucional',
    caption: 'Ponencias magistrales y resolución normativa.',
    alt: 'Conferencias corporativas y asesoría institucional GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/alianzas-estrategicas-cooperacion.jpg',
    title: 'Alianzas Estratégicas & Cooperación Internacional',
    caption: 'Gestión técnica y proyectos multilaterales.',
    alt: 'Alianzas estratégicas y delegación internacional GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/seminarios-capacitaciones-masivas.jpg',
    title: 'Capacitaciones Obligatorias & Seminarios',
    caption: 'Talleres formativos para equipos de trabajo.',
    alt: 'Seminarios masivos y capacitaciones laborales GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/simulacros-prevencion-campo.jpg',
    title: 'Simulacros de Evacuación & Prevención en Campo',
    caption: 'Protocolos de repliegue y zonas seguras.',
    alt: 'Simulacros y dinámicas de prevención en campo GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/capacitacion-rcp-primeros-auxilios.jpg',
    title: 'Primeros Auxilios & Reanimación Cardiopulmonar (RCP)',
    caption: 'Soporte vital básico ante emergencias laborales.',
    alt: 'Capacitación en RCP y primeros auxilios GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/entrenamiento-practico-brigadas-rcp.jpg',
    title: 'Entrenamiento Práctico de Brigadas de Emergencia',
    caption: 'Prácticas vivenciales con maniquíes clínicos.',
    alt: 'Prácticas de primeros auxilios y brigadas de emergencia GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/equipamiento-emergencia-protocolos.jpg',
    title: 'Equipamiento de Emergencia & Protocolos de Prevención',
    caption: 'Botiquines normativos y kits de supervivencia.',
    alt: 'Equipamiento y kits de emergencia ocupacional GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/jornadas-capacitacion-talleres-tecnicos.jpg',
    title: 'Jornadas de Formación Técnica Empresarial',
    caption: 'Capacitación interactiva para mandos y directivos.',
    alt: 'Jornadas de capacitación empresarial GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/asesoria-virtual-comites-interinstitucionales.jpg',
    title: 'Comités Interinstitucionales & Asesoría Virtual',
    caption: 'Mesas técnicas remotas a nivel nacional.',
    alt: 'Comités virtuales y asesoría técnica a distancia GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/entrenamiento-rescate-camilla-rigida.jpg',
    title: 'Brigadas de Rescate & Camilla Espinal Rígida',
    caption: 'Inmovilización y transporte seguro de heridos.',
    alt: 'Entrenamiento de brigada con camilla rígida espinal GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/simulacro-primeros-auxilios-oficina.jpg',
    title: 'Simulacros de Evacuación en Espacios de Oficina',
    caption: 'Ejercicios prácticos in situ para el personal.',
    alt: 'Simulacro de primeros auxilios y evacuación en oficina GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/ponencias-magistrales-internacionales.jpg',
    title: 'Ponencias & Representación Internacional',
    caption: 'Exposiciones en foros de cooperación técnica.',
    alt: 'Ponencia institucional internacional GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/comision-institucional-diplomatica.jpg',
    title: 'Relaciones Diplomáticas & Seguridad Intersectorial',
    caption: 'Coordinación con organismos y autoridades.',
    alt: 'Delegación institucional y diplomática GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/ceremonia-protocolo-institucional.jpg',
    title: 'Protocolo Oficial & Apertura Institucional',
    caption: 'Actos solemnes y acuerdos institucionales.',
    alt: 'Protocolo oficial y apertura institucional GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/brigada-contra-incendios-terraza.jpg',
    title: 'Brigada Contra Incendios & Equipos de Primera Respuesta',
    caption: 'Control de conatos y uso de extintores.',
    alt: 'Brigada contra incendios y uso de extintores GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/capacitacion-recursos-humanos-reglamento.jpg',
    title: 'Recursos Humanos & Reglamento Interno de Trabajo',
    caption: 'Socialización normativa y cumplimiento laboral.',
    alt: 'Capacitación de recursos humanos y reglamento interno GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/gestion-riesgos-desastres-naturales.jpg',
    title: 'Gestión del Riesgo de Desastres Naturales',
    caption: 'Resiliencia y continuidad ante contingencias.',
    alt: 'Gestión de riesgos y desastres naturales GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/conferencia-planes-contingencia.jpg',
    title: 'Planes de Contingencia & Continuidad Operativa',
    caption: 'Estrategias de respuesta ante eventos mayores.',
    alt: 'Conferencia de planes de contingencia empresarial GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/coordinacion-policial-seguridad-integral.jpg',
    title: 'Seguridad Integral & Coordinación Interinstitucional',
    caption: 'Articulación con autoridades de seguridad pública.',
    alt: 'Coordinación con policía nacional y seguridad integral GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/practica-extincion-fuego-terraza.jpg',
    title: 'Práctica Vivencial de Extinción & Control de Fuego',
    caption: 'Descarga técnica con extintores portátiles.',
    alt: 'Práctica vivencial de extinción de incendios en terraza GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/capacitacion-dinamica-empresarial.jpg',
    title: 'Capacitación Dinámica & Metodologías Activas',
    caption: 'Metodología ágil y participativa para empresas.',
    alt: 'Capacitación dinámica y participativa empresarial GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/simulacro-evacuacion-guiada-campo.jpg',
    title: 'Rutas de Evacuación & Simulacros Guiados',
    caption: 'Desalojo ordenado y rutas libres de peligro.',
    alt: 'Simulacro de evacuación guiada en campo GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/mesas-dialogo-ejecutivo-estrategico.jpg',
    title: 'Mesas de Diálogo Ejecutivo & Planificación Estratégica',
    caption: 'Gobernanza corporativa y toma de decisiones.',
    alt: 'Mesa de diálogo y planificación ejecutiva GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/gestion-institucional-corporativa.jpg',
    title: 'Gestión Institucional & Gobierno Corporativo',
    caption: 'Representación técnica ante gremios y entidades.',
    alt: 'Encuentro institucional y gobierno corporativo GP Solutions',
  },
];

export const AccountingServicesView: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'todos' | 'seguridad-salud' | 'legal-corporativa'>('todos');

  const displayedServices = useMemo(() => {
    return ALL_SERVICES.filter((s) => {
      if (filterCategory === 'todos') {
        return s.category === 'seguridad-salud' || s.category === 'legal-corporativa';
      }
      return s.category === filterCategory;
    });
  }, [filterCategory]);

  return (
    <div className="bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO (TÍTULO Y TEXTO CENTRADOS)
         ========================================================================= */}
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-32 md:pt-56 md:pb-36 overflow-hidden bg-[#102547]">
        {/* Foto de Fondo con Máscara Ondulada y Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/hero-accounting.jpg"
            alt="Servicios Corporativos y Seguridad Ocupacional en GP Solutions"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a30]/95 via-[#102547]/88 to-[#0c1a30]/82" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a30]/80 via-transparent to-[#102547]/90" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Contenido del Hero Centrado */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-4 sm:mt-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 font-heading drop-shadow-md leading-[1.12]">
            <span className="text-white">Servicios </span>
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#7dd3fc] to-white bg-clip-text text-transparent">
              Corporativos
            </span>
            <span className="text-white"> & </span>
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
              Seguridad Ocupacional
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Matrices de riesgo y planes de emergencia, reglamentos en SUT, capacitaciones obligatorias, constitución de SAS, custodia de libros societarios y registro de marcas SENADI.
          </p>
        </div>

        {/* Onda Divisoria */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none translate-y-px">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="organic" />
        </div>
      </section>


      {/* =========================================================================
          2. GRID DE TARJETAS ESTILO CONTABILIDAD Y BALANCES (CARD HOVER REVEAL)
         ========================================================================= */}
      <section className="-mt-1 py-12 sm:py-20 bg-white relative z-20 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Selector de Categorías (Pills Interactivas) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-10 sm:mb-14">
            <button
              onClick={() => setFilterCategory('todos')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filterCategory === 'todos'
                  ? 'bg-[#102547] text-white shadow-lg shadow-blue-950/30 ring-2 ring-amber-400'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Todos los Servicios (10)
            </button>
            <button
              onClick={() => setFilterCategory('seguridad-salud')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filterCategory === 'seguridad-salud'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/30 ring-2 ring-amber-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Seguridad y Salud Ocupacional (4)
            </button>
            <button
              onClick={() => setFilterCategory('legal-corporativa')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filterCategory === 'legal-corporativa'
                  ? 'bg-[#0284C7] text-white shadow-lg shadow-sky-600/30 ring-2 ring-sky-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Asesoría Legal Corporativa (6)
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8">
            {displayedServices.map((service, idx) => {
              const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);
              const isGold = idx % 2 === 1;
              return (
                <div
                  key={service.id}
                  className="w-full md:w-[calc((100%-1.75rem)/2)] lg:w-[calc((100%-4rem)/3)] max-w-md md:max-w-none flex flex-col"
                >
                  <CardHoverReveal className={`w-full h-[500px] sm:h-[520px] md:h-[540px] rounded-3xl overflow-hidden shadow-xl border ${
                    isGold
                      ? 'border-amber-400/40 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]'
                      : 'border-slate-700/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]'
                  } bg-slate-900 relative group transition-all duration-500 hover:-translate-y-1.5`}>
                    
                    {/* Portada Principal con Imagen Nítida sin tintes azules */}
                    <CardHoverRevealMain className="size-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="size-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-100"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('hero-accounting.jpg')) {
                            target.src = '/images/heroes/hero-accounting.jpg';
                          }
                        }}
                      />
                      {/* Degradado oscuro neutro inferior para máxima legibilidad del texto sin teñir la foto de azul */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                      {/* Haz de luz perimetral sutil en dorado */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/15 via-transparent to-yellow-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                      {/* Indicador táctil en pantallas móviles para descubrir entregables */}
                      <div className="absolute top-4 left-4 z-20 lg:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-[10.5px] font-semibold text-slate-200 pointer-events-none group-data-[revealed=true]:opacity-0 transition-opacity duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span>Toca para detalles</span>
                      </div>

                      {/* Título y descripción en la base: Visibles completos sin cortes, se ocultan al revelar */}
                      <div className="absolute bottom-5 left-5 right-5 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-y-4 group-data-[revealed=true]:opacity-0 group-data-[revealed=true]:translate-y-4 pointer-events-none">
                        <h3 className="text-lg sm:text-xl font-heading font-black text-white leading-snug drop-shadow-md">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-200 mt-2 leading-relaxed drop-shadow-sm">
                          {service.description}
                        </p>
                      </div>
                    </CardHoverRevealMain>

                    {/* Contenido desplegable en Hover: Solo se muestra este cuadro al pasar el mouse */}
                    <CardHoverRevealContent className={`space-y-3.5 rounded-2xl bg-gradient-to-b from-[#091426]/95 via-[#0c1e38]/95 to-[#091426]/98 backdrop-blur-2xl border ${
                      isGold ? 'border-amber-400/50 shadow-[0_10px_35px_rgba(245,158,11,0.25)]' : 'border-sky-400/40 shadow-[0_10px_35px_rgba(2,132,199,0.3)]'
                    } p-5 sm:p-6 text-white`}>
                      <div className="space-y-2">
                        <span className={`text-[11px] sm:text-xs font-bold ${isGold ? 'text-amber-300' : 'text-[#38BDF8]'} uppercase tracking-wider block`}>
                          Entregables destacados:
                        </span>
                        <div className="space-y-2">
                          {service.deliverables.slice(0, 4).map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-200">
                              <span className={`w-1.5 h-1.5 rounded-full ${isGold ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b]' : 'bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]'} mt-1.5 shrink-0`} />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {service.legalBasis && (
                        <div className="pt-2 border-t border-white/10 text-[11px] text-slate-300 flex items-start gap-1.5">
                          <span className="font-bold text-[#FCD34D] shrink-0">Base legal:</span>
                          <span className="leading-tight">{service.legalBasis}</span>
                        </div>
                      )}

                      <div className="pt-2 border-t border-white/10">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm ${
                            isGold
                              ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-black shadow-md shadow-amber-950/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)]'
                              : 'bg-gradient-to-r from-[#0284C7] via-[#0369a1] to-[#102547] hover:from-[#38BDF8] hover:via-[#0284C7] hover:to-[#0369a1] text-white shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]'
                          } transition-all duration-300 active:scale-95`}
                        >
                          <span>Cotizar</span>
                          <WhatsAppIcon className={`w-4 h-4 ${isGold ? 'text-slate-950' : 'text-white'}`} />
                        </a>
                      </div>
                    </CardHoverRevealContent>

                  </CardHoverReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =========================================================================
          3. CARRUSEL ENFOCADO: SERVICIOS CORPORATIVOS
         ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#081324] text-white overflow-hidden border-t border-sky-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Nuestra Experiencia en Terreno
          </h2>
        </div>

        <FocusPullCarousel
          height="560px"
          blur={0}
          autoplay={5000}
          background="transparent"
          ink="#ffffff"
          showCaption={true}
          showCount={false}
          showBar={false}
          slides={CORPORATE_CAROUSEL_SLIDES}
        />
      </section>

    </div>
  );
};
