import React, { useState } from 'react';
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
} from 'lucide-react';
import { WhatsAppIcon, LinkedInIcon } from '../components/ui/SocialIcons';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import type { TabKey } from '../types';

interface AboutViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onSelectTab }) => {
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
  return (
    <div className="bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO
         ========================================================================= */}
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-32 md:pt-56 md:pb-36 overflow-hidden bg-[#102547]">
        {/* Foto de Fondo con Máscara Ondulada y Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/hero-about.jpg"
            alt="Firma Contable y Legal GP Solutions en Tumbaco, Quito"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a30]/95 via-[#102547]/88 to-[#0c1a30]/82" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a30]/80 via-transparent to-[#102547]/90" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mt-4 sm:mt-8 mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 font-heading drop-shadow-md leading-[1.12]">
              <span className="text-white">Firma </span>
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#7dd3fc] to-white bg-clip-text text-transparent">
                Contable
              </span>
              <span className="text-white"> & </span>
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
                Legal
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-200 mt-2">
                en <span className="text-[#38BDF8]">Tumbaco, Quito</span> & Cobertura Nacional
              </span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              En <strong className="text-white font-bold">{COMPANY_DATA.name}</strong> proporcionamos certeza y tranquilidad tributaria a personas naturales (RIMPE y Régimen General) y a sociedades mercantiles (S.A.S., Cías. Ltda. y S.A.) en todo el Ecuador.
            </p>
          </div>
        </div>

        {/* Separador Ondulado SVG en la base del Hero en color azul (#071324) para transicionar sin franjas blancas */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <CurvedShapeDivider fillColor="#071324" position="bottom" variant="wave1" />
        </div>
      </section>


      {/* =========================================================================
          BLOQUE 1: CONOZCA A LA DIRECCIÓN (ESTILO MÁS DE 12 AÑOS - IDÉNTICO)
         ========================================================================= */}
      <section className="pt-10 sm:pt-14 pb-14 sm:pb-20 bg-[#071324] relative overflow-hidden text-white border-t border-sky-900/40">
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
                <div className="flex flex-col items-center text-center p-3">
                  <div className="p-3 rounded-full bg-sky-500/15 border border-sky-400/30 text-[#38BDF8] mb-2.5 flex items-center justify-center">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white max-w-xs text-center">
                    Especialista en Balances y Normas NIIF
                  </h4>
                </div>

                <div className="flex flex-col items-center text-center p-3">
                  <div className="p-3 rounded-full bg-amber-500/15 border border-amber-400/30 text-[#FCD34D] mb-2.5 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white max-w-xs text-center">
                    Estrategia Tributaria y Defensa SRI
                  </h4>
                </div>
              </div>

              {/* Botones de Acción Centrados */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369a1] text-white transition-all cursor-pointer shadow-lg shadow-sky-600/30 hover:shadow-sky-500/50"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Hablar con el Director</span>
                </a>

                <button
                  onClick={() => onSelectTab('contacto')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-sky-400/30 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <span>Agendar Cita en Despacho</span>
                  <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                </button>
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
          BLOQUE 2: NUESTRA HISTORIA Y COMPROMISO (ESTILO SLIDER CARD PANORÁMICO)
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F4F8FC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tarjeta Panorámica Horizontal Estilo Referencia Más Ancha */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0f2445] border border-sky-900/40 text-white flex flex-col md:flex-row items-stretch">
            
            {/* Lado Izquierdo: Foto Panorámica con Esquinas Redondeadas Integradas (sin etiqueta) */}
            <div className="relative w-full md:w-1/2 min-h-[320px] md:min-h-[440px] bg-slate-900 overflow-hidden">
              <img
                src="/images/heroes/hero-about.jpg"
                alt="Despacho contable GP Solutions en Tumbaco, Quito"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2445]/70 via-transparent to-transparent md:hidden" />
            </div>

            {/* Lado Derecho: Contenedor con Contenido Institucional de Historia */}
            <div className="w-full md:w-1/2 p-7 sm:p-10 lg:p-12 flex flex-col justify-center bg-[#0f2445] text-white space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Nuestra Historia y Compromiso
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
                GP SOLUTIONS nació a partir de un propósito claro: democratizar el acceso a una consultoría contable, tributaria y societaria con el rigor y estándar que tradicionalmente solo disfrutaban las grandes multinacionales.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Con más de 12 años de actividad continua desde nuestro despacho en Tumbaco, Quito, nos hemos ganado la confianza de cientos de comerciantes, profesionales y empresas en Pichincha y en todo el país. Creemos que el éxito de un negocio se cimenta en la pulcritud de sus libros y en la tranquilidad de estar 100% al día con el SRI y la Superintendencia de Compañías.
              </p>

              {/* Botón de Contacto */}
              <div className="pt-2">
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
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight">
              Construyendo Seguridad y Claridad Financiera
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
              Visualizamos un ecosistema empresarial donde cada contribuyente opere con balances transparentes, optimización fiscal ética y total certidumbre ante los entes de fiscalización.
            </p>
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
                Rigor Técnico NIIF
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
            
            {/* Columna Izquierda: Grid de 6 Soluciones sin contenedores/cajas, centrados */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <h2 className="font-heading text-2xl sm:text-4xl font-black text-[#102547] tracking-tight mb-8 sm:mb-10 text-center">
                  Soluciones que Respaldan su Crecimiento
                </h2>

                {/* Grid 6 Soluciones sin cajas/contenedores y solo icono + título */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                  
                  {/* Ítem 1 */}
                  <div className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-sky-100/90 text-[#0284C7] border border-sky-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <Building2 className="w-8 h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#102547] text-center mb-1 group-hover:text-[#0284C7] transition-colors">
                      Contabilidad & NIIF
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-center max-w-[200px]">
                      Registro contable bajo NIIF y conciliaciones bancarias al día.
                    </p>
                  </div>

                  {/* Ítem 2: Acento Amarillo / Dorado */}
                  <div className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-amber-100/90 text-amber-600 border border-amber-300/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <Scale className="w-8 h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#102547] text-center mb-1 group-hover:text-amber-600 transition-colors">
                      Declaraciones SRI
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-center max-w-[200px]">
                      Declaraciones de IVA, Renta y retenciones sin mora.
                    </p>
                  </div>

                  {/* Ítem 3 */}
                  <div className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-sky-100/90 text-[#0284C7] border border-sky-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <Award className="w-8 h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#102547] text-center mb-1 group-hover:text-[#0284C7] transition-colors">
                      Creación de SAS
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-center max-w-[200px]">
                      Constitución 100% digital con estatutos blindados.
                    </p>
                  </div>

                  {/* Ítem 4: Acento Amarillo / Dorado */}
                  <div className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-amber-100/90 text-amber-600 border border-amber-300/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <Users className="w-8 h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#102547] text-center mb-1 group-hover:text-amber-600 transition-colors">
                      Nóminas & IESS
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-center max-w-[200px]">
                      Roles de pago, décimos y planillas patronales al día.
                    </p>
                  </div>

                  {/* Ítem 5 */}
                  <div className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-sky-100/90 text-[#0284C7] border border-sky-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#102547] text-center mb-1 group-hover:text-[#0284C7] transition-colors">
                      Devolución IVA
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-center max-w-[200px]">
                      Recuperación de saldos ante el SRI para personas y empresas.
                    </p>
                  </div>

                  {/* Ítem 6: Acento Amarillo / Dorado */}
                  <div className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-16 h-16 rounded-2xl bg-amber-100/90 text-amber-600 border border-amber-300/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <ShieldCheck className="w-8 h-8 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#102547] text-center mb-1 group-hover:text-amber-600 transition-colors">
                      Auditoría Interna
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-center max-w-[200px]">
                      Revisión preventiva de libros y control interno societario.
                    </p>
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
                    'Atención presencial en Tumbaco y remota nacional',
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
