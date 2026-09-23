import React from 'react';
import {
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Building2,
  Receipt,
  Users,
  CheckCircle2,
  Phone,
  FileSpreadsheet,
  Award,
} from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';
import { MaskedBackgroundLayer } from '../components/ui/MaskedBackgroundLayer';
import type { TabKey } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: TabKey) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab }) => {
  const whatsappHeroUrl = buildWhatsAppLink(
    'Hola GP SOLUTIONS (+593999840649), deseo solicitar asesoría y blindaje para mi empresa en Ecuador.'
  );

  return (
    <div className="relative bg-[#F4F9F9] text-[#102547]">
      
      {/* =========================================================================
          1. HERO INSTITUCIONAL ONDULADO (FONDO PASTEL TURQUESA METÁLICO)
         ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F4F9F9] via-[#EAF4F5] to-[#F4F9F9]">
        
        {/* Glows ambientales turquesa suave */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-teal-300/20 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-teal-200/30 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columna Izquierda: Mensaje y Acciones */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-[#102547] tracking-tight leading-[1.08] mb-4">
                Asesoría Integral{' '}
                <span className="text-[#0D9488]">
                  Contable, Tributaria y Legal
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
                <strong className="text-[#102547]">«{COMPANY_DATA.slogan}»</strong>. {COMPANY_DATA.trajectory}. Brindamos soluciones seguras para blindar su empresa ante el SRI, IESS y Superintendencia de Compañías.
              </p>

              {/* Botones de Acción */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
                <button
                  onClick={() => onSelectTab('servicios-contables')}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#102547] hover:bg-[#153760] text-white transition-all duration-200 shadow-md cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-[#00C4A7]" />
                  <span>Servicios Contables</span>
                </button>

                <button
                  onClick={() => onSelectTab('servicios-tributarios')}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#0D9488] hover:bg-[#0b7c72] text-white transition-all duration-200 shadow-md shadow-[#0D9488]/20 cursor-pointer"
                >
                  <Receipt className="w-4 h-4" />
                  <span>Servicios Tributarios</span>
                </button>

                <a
                  href={whatsappHeroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-white text-[#102547] hover:bg-slate-50 border border-teal-200 transition-all cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#0D9488]" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>

              {/* Métricas de Confianza */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-teal-900/10 w-full">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#0D9488] font-heading">
                    +12 Años
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 font-medium">
                    Trayectoria
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#102547] font-heading">
                    100%
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 font-medium">
                    Cumplimiento SRI
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#00C4A7] font-heading">
                    0 Mora
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 font-medium">
                    IESS Patronal
                  </div>
                </div>
              </div>

            </div>

            {/* Columna Derecha: Tarjeta Institucional de Autoridad */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-3xl bg-white border border-teal-900/10 shadow-xl flex flex-col items-center text-center">
                
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
                <p className="text-xs text-[#0D9488] font-semibold mb-4">
                  {COMPANY_DATA.legacySlogan}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {COMPANY_DATA.subSlogan}. Asesoría presencial en Tumbaco y Quito, con cobertura digital a nivel nacional.
                </p>

                <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Director: <strong className="text-[#102547]">{COMPANY_DATA.director}</strong></span>
                  <span className="text-[#0D9488] font-bold">RUC Activo</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Separador Ondulado SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="wave1" />
        </div>
      </section>


      {/* ========================================================= */}
      {/* 2. LOS DOS GRANDES APARTADOS DE SERVICIOS                 */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#102547] tracking-tight mb-3">
              Soluciones Integrales para su Negocio
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore los dos apartados independientes con las 21 soluciones oficiales del afiche publicitario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* APARTADO 1: SERVICIOS CONTABLES Y CORPORATIVOS */}
            <div className="rounded-3xl bg-gradient-to-br from-[#F4F9F9] to-[#EAF4F5] border border-teal-900/10 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#102547] text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6 text-[#00C4A7]" />
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-[#102547] mb-3">
                  Servicios Contables y Corporativos
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Contabilidad general bajo NIIF, elaboración de estados financieros auditables, cumplimiento anual en Superintendencia de Compañías, constitución y liquidación de empresas S.A.S., registro de marcas en SENADI y manejo de nóminas.
                </p>

                <div className="space-y-2 mb-8 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    <span>Contabilidad general & Balances NIIF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    <span>Cumplimiento anual SuperCías & Certificados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    <span>Constitución express de empresas S.A.S.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectTab('servicios-contables')}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold bg-[#102547] hover:bg-[#153760] text-white transition-all cursor-pointer shadow-md"
              >
                <span>Ver los 8 Servicios Contables</span>
                <ArrowRight className="w-4 h-4 text-[#00C4A7]" />
              </button>
            </div>

            {/* APARTADO 2: SERVICIOS TRIBUTARIOS Y LABORALES */}
            <div className="rounded-3xl bg-gradient-to-br from-[#EAF4F5] to-[#F4F9F9] border border-teal-900/10 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0D9488] text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Receipt className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-[#102547] mb-3">
                  Servicios Tributarios y Laborales
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Declaraciones de IVA e Impuesto a la Renta ante el SRI, retenciones, impuestos a herencias, declaración patrimonial, anexos ATS/RDEP, devolución de IVA, patentes 1.5 x mil, contratos SUT, roles de pago y obligaciones IESS.
                </p>

                <div className="space-y-2 mb-8 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    <span>Declaraciones SRI (IVA, Renta & Anexos ATS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    <span>Devolución de IVA Tercera Edad y Exportadores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    <span>Contratos de trabajo SUT y planillas IESS</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectTab('servicios-tributarios')}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold bg-[#0D9488] hover:bg-[#0b7c72] text-white transition-all cursor-pointer shadow-md shadow-[#0D9488]/20"
              >
                <span>Ver los 13 Servicios Tributarios</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 3. VISTA DEL AFICHE OFICIAL Y METODOLOGÍA KINDEV         */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-[#F4F9F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#102547] tracking-tight mb-4">
                Protección Jurídica y Financiera sin Sorpresas
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                En GP SOLUTIONS no dejamos nada al azar. Cada declaración tributaria, cada rol de pago y cada balance cuenta con respaldo documental estricto para que ante cualquier requerimiento del SRI, IESS o SuperCías, su negocio esté 100% amparado.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Monitoreo anticipado del calendario tributario por noveno dígito',
                  'Elaboración técnica conforme normas NIIF y LORTI',
                  'Atención directa con Luis Fernando Guerra Padilla',
                  'Despacho presencial en Tumbaco y atención remota nacional',
                ].map((txt, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>{txt}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectTab('contacto')}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-[#102547] hover:bg-[#153760] text-white transition-all cursor-pointer"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-4 h-4 text-[#00C4A7]" />
                </button>

                <a
                  href={`tel:${COMPANY_DATA.phoneFormatted1}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-[#102547] bg-white border border-teal-200 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#0D9488]" />
                  <span>{COMPANY_DATA.phoneFormatted1}</span>
                </a>
              </div>
            </div>

            {/* Tarjeta Visual de Información del Flyer */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-8 rounded-3xl bg-white border border-teal-900/10 shadow-lg text-center max-w-sm w-full">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0D9488] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-black text-xl text-[#102547] mb-2">
                  Afiche Oficial 2026
                </h3>
                <p className="text-xs text-slate-600 mb-6">
                  Consulte nuestros servicios clasificados tal como se presentan en el afiche oficial de asesoría contable, tributaria y legal.
                </p>

                <div className="space-y-2.5 text-xs text-left mb-6">
                  <div className="p-3 rounded-xl bg-[#F4F9F9] border border-teal-100 flex items-center justify-between">
                    <span className="font-bold text-[#102547]">Columna 1: Contable</span>
                    <span className="text-[#0D9488] font-semibold">8 Soluciones</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F4F9F9] border border-teal-100 flex items-center justify-between">
                    <span className="font-bold text-[#102547]">Columna 2: Tributario</span>
                    <span className="text-[#0D9488] font-semibold">8 Soluciones</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F4F9F9] border border-teal-100 flex items-center justify-between">
                    <span className="font-bold text-[#102547]">Columna 3: Laboral</span>
                    <span className="text-[#0D9488] font-semibold">5 Soluciones</span>
                  </div>
                </div>

                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-[#0D9488] hover:bg-[#0b7c72] text-white transition-all shadow-md shadow-[#0D9488]/20"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
