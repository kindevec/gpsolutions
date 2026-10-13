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
  HardHat,
  FileCheck,
  FileText,
  BadgePercent,
  BookOpen,
} from 'lucide-react';
import { WhatsAppIcon, LinkedInIcon } from '../components/ui/SocialIcons';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import type { TabKey } from '../types';

interface AboutViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onSelectTab }) => {
  return (
    <div className="bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO
         ========================================================================= */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 md:pt-48 md:pb-24 overflow-hidden bg-[#102547]">
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
          <div className="text-center max-w-4xl mx-auto mt-4 sm:mt-8 mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 font-heading drop-shadow-md leading-[1.12]">
              <span className="text-white">Firma </span>
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#7dd3fc] to-white bg-clip-text text-transparent">
                Contable
              </span>
              <span className="text-white">, </span>
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
                Tributaria
              </span>
              <span className="text-white"> & </span>
              <span className="text-[#38BDF8]">Legal</span>
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              En <strong className="text-white font-bold">{COMPANY_DATA.name}</strong> proporcionamos certeza y tranquilidad integral a personas naturales (RIMPE y Régimen General) y a sociedades mercantiles (S.A.S., Cías. Ltda. y S.A.) en Quito y con cobertura nacional.
            </p>
          </div>
        </div>

        {/* Separador Ondulado SVG en la base del Hero en color azul (#071324) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none translate-y-px">
          <CurvedShapeDivider fillColor="#071324" position="bottom" variant="wave1" />
        </div>
      </section>


      {/* =========================================================================
          BLOQUE 1: MISIÓN Y VISIÓN (ESTRUCTURA INSTITUCIONAL)
         ========================================================================= */}
      <section className="-mt-1 pt-14 sm:pt-20 md:pt-24 pb-14 sm:pb-20 bg-[#071324] relative z-20 overflow-hidden text-white border-b border-sky-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Tarjeta Misión */}
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0c1d37] via-[#09172c] to-[#071324] border border-sky-400/30 shadow-xl relative overflow-hidden group hover:border-[#38BDF8] transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/20 border border-sky-400/40 text-[#38BDF8] flex items-center justify-center font-black">
                  <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white">Misión</h3>
                </div>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
                Brindar soluciones contables, tributarias, laborales y legales corporativas de la más alta solvencia, otorgando a empresas, emprendedores y personas naturales la seguridad técnica, el cumplimiento normativo preventivo y el control necesario para maximizar su crecimiento con total tranquilidad patrimonial.
              </p>
            </div>

            {/* Tarjeta Visión */}
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0c1d37] via-[#09172c] to-[#071324] border border-amber-400/30 shadow-xl relative overflow-hidden group hover:border-amber-400 transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-[#FCD34D] flex items-center justify-center font-black">
                  <TrendingUp className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white">Visión</h3>
                </div>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
                Consolidarnos a nivel nacional como la firma referente de consultoría integral empresarial, reconocida por su excelencia operativa, innovación digital, cercanía personalizada y capacidad de blindar el desarrollo de cada uno de nuestros clientes ante las entidades de control del Ecuador.
              </p>
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

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                  Su dirección técnica combina rigor metodológico bajo normas NIIF, estructuración preventiva ante el SRI, auditoría de balances y una constante optimización de procesos que blindan patrimonialmente a cada cliente.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  Especialista en planificación fiscal integral, auditorías preventivas y cumplimiento ante la Superintendencia de Compañías, IESS y Ministerio del Trabajo, asesora a accionistas y directores en la toma de decisiones contables de alto impacto.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  Su gestión garantiza solvencia financiera, optimización tributaria legítima y un acompañamiento continuo que protege el patrimonio empresarial frente a revisiones o requerimientos de las entidades de control.
                </p>

                <div className="pt-2 flex justify-center">
                  <a
                    href={COMPANY_DATA.whatsappBaseUrl}
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

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  A lo largo de su trayectoria profesional ha asesorado a compañías y organizaciones de diversos sectores, entre ellos telecomunicaciones, tecnología, servicios financieros y cobranza, seguros, salud, educación, construcción e inmobiliario, comercio y servicios, así como entidades del sector público y organizaciones internacionales.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  Su práctica comprende la elaboración y negociación de contratos comerciales, asesoría societaria, análisis de aspectos legales vinculados con obligaciones tributarias y operaciones empresariales, protección de datos personales, telecomunicaciones, tecnología, propiedad intelectual y cumplimiento regulatorio.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  Su experiencia con organizaciones de distintas industrias le permite abordar las necesidades legales desde una perspectiva empresarial, identificando riesgos y proponiendo soluciones que consideren tanto el cumplimiento normativo como la operación y los objetivos del negocio.
                </p>

                <div className="pt-2 flex justify-center">
                  <a
                    href={COMPANY_DATA.whatsappBaseUrl}
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
            
            <div className="relative w-full md:w-1/2 min-h-[320px] md:min-h-[440px] bg-slate-900 overflow-hidden">
              <img
                src="/images/heroes/hero-about.jpg"
                alt="Despacho contable y legal GP Solutions en Quito"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2445]/70 via-transparent to-transparent md:hidden" />
            </div>

            <div className="w-full md:w-1/2 p-7 sm:p-10 lg:p-12 flex flex-col justify-center bg-[#0f2445] text-white space-y-4">
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
