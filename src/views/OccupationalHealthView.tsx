import React from 'react';
import { WhatsAppIcon } from '../components/ui/SocialIcons';
import { buildWhatsAppLink } from '../data/company';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import FocusPullCarousel, { Slide } from '../components/ui/focus-pull-carousel';
import { CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';

const SSO_CAROUSEL_SLIDES: Slide[] = [
  {
    image: '/images/servicios-corporativos/simulacro-primeros-auxilios-oficina.jpg',
    title: 'Simulacro de Primeros Auxilios en Oficina',
    caption: 'Prácticas vivenciales de inmovilización y respuesta inmediata con camilla rígida.',
    alt: 'Simulacro de primeros auxilios y camilla rígida en oficina GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/capacitacion-recursos-humanos-reglamento-interno.jpg',
    title: 'Recursos Humanos & Reglamento Interno de Trabajo',
    caption: 'Asesoría legal laboral y socialización presencial de normativas internas.',
    alt: 'Capacitación en reglamento interno de trabajo y recursos humanos GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/entrenamiento-rescate-camilla-rigida.jpg',
    title: 'Entrenamiento Táctico de Brigadas & Rescate',
    caption: 'Simulacro de rescate en campo, traslado seguro y fijación espinal de lesionados.',
    alt: 'Entrenamiento de brigada en rescate con camilla rígida GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/brigada-primeros-auxilios-camilla.jpg',
    title: 'Entrenamiento de Brigadas & Primeros Auxilios',
    caption: 'Prácticas de inmovilización en camilla rígida y protocolos de respuesta.',
    alt: 'Entrenamiento de brigada de primeros auxilios y camilla rígida GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/practica-inmovilizacion-camilla-rigida.jpg',
    title: 'Protocolos de Evacuación & Camilla Rígida',
    caption: 'Práctica vivencial de brigadas en estabilización y traslado de pacientes.',
    alt: 'Práctica de inmovilización y traslado en camilla rígida GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/ponencia-magistral-koica-ecuador.jpg',
    title: 'Ponencias Magistrales & Representación Técnica',
    caption: 'Exposiciones institucionales y consultoría técnica de alto nivel.',
    alt: 'Ponencia magistral y representación institucional GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/conferencia-cooperacion-internacional.jpg',
    title: 'Conferencias & Cooperación Institucional',
    caption: 'Articulación técnica con organismos multilaterales y gobierno corporativo.',
    alt: 'Conferencia de cooperación institucional y gobernanza GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/seminario-tecnico-institucional.jpg',
    title: 'Seminarios & Capacitaciones Especializadas',
    caption: 'Formación continua y exposiciones directivas para organizaciones.',
    alt: 'Seminario técnico y capacitación empresarial GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/pausa-activa-ergonomia-oficina.jpg',
    title: 'Pausas Activas & Ergonomía Laboral',
    caption: 'Dinámicas preventivas de salud ocupacional y bienestar en oficina.',
    alt: 'Pausas activas y salud ocupacional en oficina GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/estiramiento-ergonomia-salud-ocupacional.jpg',
    title: 'Salud Ocupacional & Compensación Postural',
    caption: 'Ejercicios guiados de elongación y prevención de fatiga osteomuscular.',
    alt: 'Ejercicios de estiramiento y ergonomía laboral GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/capacitacion-seguridad-operativa.jpg',
    title: 'Protocolos de Seguridad & Prevención de Riesgos',
    caption: 'Capacitación integral en medidas de resguardo y seguridad operativa.',
    alt: 'Capacitación en normas de seguridad y prevención GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/entrega-certificados-capacitacion.jpg',
    title: 'Certificación & Acreditación de Competencias',
    caption: 'Entrega de certificados oficiales a participantes en jornadas técnicas.',
    alt: 'Entrega de certificados de participación en capacitación GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/simulacro-evacuacion-campo-brigadas.jpg',
    title: 'Simulacros de Evacuación & Respuesta en Campo',
    caption: 'Coordinación táctica de brigadas y ejercicios prácticos de primeros auxilios.',
    alt: 'Simulacro de evacuación en campo y brigadas de emergencia GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/seguridad-institucional-koica-seminario.jpg',
    title: 'Seminarios de Seguridad Institucional & Corporativa',
    caption: 'Jornadas formativas en resguardo y protocolos preventivos para organismos.',
    alt: 'Seminario de seguridad institucional KOICA GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/capacitacion-rcp-soporte-vital-basico.jpg',
    title: 'Soporte Vital Básico & Práctica con Maniquí Clínico',
    caption: 'Capacitación práctica en reanimación cardiopulmonar (RCP) para brigadistas.',
    alt: 'Capacitación en RCP y soporte vital con maniquí clínico GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/pausa-activa-bandas-elasticas-ergonomia.jpg',
    title: 'Pausas Activas & Ejercicios con Bandas Elásticas',
    caption: 'Dinámicas con bandas elásticas para fortalecimiento y prevención ergonómica.',
    alt: 'Pausas activas con bandas elásticas en oficina GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/taller-normativa-laboral-equipo-corporativo.jpg',
    title: 'Talleres de Cumplimiento Normativo & Socialización',
    caption: 'Sesiones interactivas de asesoría laboral y clima organizacional en equipo.',
    alt: 'Taller de cumplimiento normativo y reglamento interno GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/entrenamiento-brigada-contra-incendios-extintor.jpg',
    title: 'Brigadas Contra Incendios & Uso de Extintores',
    caption: 'Práctica vivencial de control y extinción de amagos de fuego en campo.',
    alt: 'Práctica de extinción de incendios con extintor portátil GP Solutions',
  },
  {
    image: '/images/servicios-corporativos/taller-induccion-seguridad-integral.jpg',
    title: 'Instrucción Técnica & Formación Continua',
    caption: 'Sesiones formativas de prevención de riesgos y seguridad ocupacional.',
    alt: 'Taller de instrucción técnica y seguridad integral GP Solutions',
  },
];

export const OccupationalHealthView: React.FC = () => {
  const data = CATEGORIES_DATA['seguridad-salud'];

  return (
    <div className="bg-[#F4F8FC] text-[#102547]">
      {/* =========================================================================
          1. HEADER HERO INSTITUCIONAL
         ========================================================================= */}
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-32 md:pt-56 md:pb-36 overflow-hidden bg-[#102547]">
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            alt="Seguridad y Salud Ocupacional - GP Solutions"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a30]/95 via-[#102547]/88 to-[#0c1a30]/82" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a30]/80 via-transparent to-[#102547]/90" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-4 sm:mt-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 font-heading drop-shadow-md leading-[1.12]">
            <span className="text-white">Seguridad y Salud </span>
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
              Ocupacional
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            {data.generalDescription}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none translate-y-px">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="organic" />
        </div>
      </section>

      {/* =========================================================================
          2. PILARES Y SUBSECCIONES DETALLADAS
         ========================================================================= */}
      <section className="-mt-1 py-14 sm:py-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {data.subsections.map((sub, idx) => {
            const isReverse = idx % 2 === 1;
            const whatsappMsg = `Hola GP Solutions (+593 982577313), deseo cotizar el área de: Seguridad y Salud Ocupacional - ${sub.title}.`;
            const whatsappUrl = buildWhatsAppLink(whatsappMsg);

            return (
              <div
                key={sub.id}
                id={sub.id}
                className="scroll-mt-28 rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-[0_10px_35px_rgba(16,37,71,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_15px_45px_rgba(2,132,199,0.12)]"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 ${isReverse ? 'lg:grid-flow-dense' : ''}`}>
                  
                  {/* Bloque Imagen: Limpia sin etiquetas ni títulos */}
                  <div className={`lg:col-span-5 relative group ${isReverse ? 'lg:col-start-8' : ''}`}>
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-xl border-2 border-slate-200/80 group-hover:border-amber-400/80 transition-colors duration-500">
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('hero-accounting.jpg')) {
                            target.src = '/images/heroes/hero-accounting.jpg';
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Bloque Contenido: Título limpio sin números */}
                  <div className={`lg:col-span-7 flex flex-col justify-center space-y-5 ${isReverse ? 'lg:col-start-1' : ''}`}>
                    <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#102547] tracking-tight">
                      {sub.title}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {sub.description}
                    </p>

                    {/* Lista de Servicios */}
                    <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-5 sm:p-6 space-y-3">
                      <h3 className="text-xs font-black uppercase text-[#0284C7] tracking-wider flex items-center gap-2">
                        <span>Servicios incluidos en esta área:</span>
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2.5">
                        {sub.services.map((srv, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3 text-slate-800 text-xs sm:text-sm">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0 mt-0.5" />
                            <span className="font-medium leading-snug">{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botones de Acción */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 py-3 px-6 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#0284C7] via-[#0369a1] to-[#102547] hover:from-[#38BDF8] hover:via-[#0284C7] hover:to-[#0369a1] text-white shadow-md hover:shadow-sky-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white" />
                        <span>Cotizar {sub.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <a
                        href="tel:+593982577313"
                        className="inline-flex items-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 hover:text-[#0284C7] bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>Llamar a un asesor</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. CARRUSEL: NUESTRA EXPERIENCIA EN IMÁGENES (SÓLO EN SEGURIDAD Y SALUD)
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#081324] text-white overflow-hidden border-t border-sky-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Fotografías Oficiales</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Nuestra Experiencia en Imágenes
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
            Jornadas de capacitación, simulacros con brigadas de rescate, pausas activas y ponencias técnicas en empresas e instituciones.
          </p>
        </div>

        <FocusPullCarousel
          height="clamp(400px, 52vw, 560px)"
          blur={0}
          autoplay={5000}
          background="transparent"
          ink="#ffffff"
          showCaption={true}
          showCount={false}
          showBar={false}
          slides={SSO_CAROUSEL_SLIDES}
        />
      </section>
    </div>
  );
};
