import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from '../ui/SocialIcons';
import { COMPANY_DATA } from '../../data/company';
import type { TabKey } from '../../types';

interface FooterProps {
  onSelectTab: (tab: TabKey) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-[#102547] text-white pt-6 sm:pt-8 pb-28 md:pb-8 border-t border-sky-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            GRID DE 3 COLUMNAS BALANCEADO (SECCIONES OCULTAS EN MÓVIL)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 pb-6 sm:pb-8 border-b border-white/10 items-start">
          
          {/* Columna 1: Identidad y Razón Social */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3 text-left">
            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="GP Solutions Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-md shrink-0"
                width={48}
                height={48}
              />
              <div>
                <span className="font-heading font-black text-lg sm:text-xl text-white tracking-tight leading-none block">
                  GP SOLUTIONS
                </span>
                <span className="block text-[11px] sm:text-xs text-[#38BDF8] font-semibold tracking-wide mt-0.5">
                  GUERRAPADILLAGPSOLUTIONS S.A.S.
                </span>
              </div>
            </div>

            <p className="text-[12px] sm:text-[12.5px] text-slate-300 leading-relaxed font-normal max-w-sm">
              {COMPANY_DATA.trajectory}. Asesoría contable NIIF, tributaria ante el SRI, nómina IESS y constitución societaria en Tumbaco, Quito y todo el Ecuador.
            </p>
          </div>

          {/* Columna 2: Secciones alineadas a la izquierda (oculta en móvil por solicitud previa) */}
          <div className="lg:col-span-3 hidden md:flex flex-col items-start space-y-2 text-left">
            <h4 className="font-heading font-bold text-xs sm:text-sm text-white uppercase tracking-wider text-left w-full">
              Secciones
            </h4>
            <ul className="space-y-1.5 text-[11.5px] sm:text-[13px] font-medium text-slate-300 text-left">
              <li>
                <button
                  onClick={() => onSelectTab('inicio')}
                  className="hover:text-[#38BDF8] hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-amber-400 text-[10px]">✦</span>
                  <span>Inicio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('servicios-contables')}
                  className="hover:text-[#38BDF8] hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-amber-400 text-[10px]">✦</span>
                  <span>Servicios Contables</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('servicios-tributarios')}
                  className="hover:text-[#38BDF8] hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-amber-400 text-[10px]">✦</span>
                  <span>Servicios Tributarios</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('nosotros')}
                  className="hover:text-[#38BDF8] hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-amber-400 text-[10px]">✦</span>
                  <span>Quiénes Somos</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contacto')}
                  className="hover:text-[#38BDF8] hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-amber-400 text-[10px]">✦</span>
                  <span>Atención y Despacho</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Oficial & Redes Sociales */}
          <div className="lg:col-span-5 space-y-2 text-left">
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-heading font-bold text-xs sm:text-sm text-white uppercase tracking-wider shrink-0">
                Contacto Oficial
              </h4>

              {/* Redes Sociales arriba a la derecha en la misma dirección de Contacto */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <a
                  href={COMPANY_DATA.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Oficial GP Solutions"
                  className="w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-[#25D366]/25 border border-white/15 hover:border-[#25D366]/60 flex items-center justify-center text-white hover:text-[#25D366] transition-all hover:scale-110 shadow-sm hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] cursor-pointer"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </a>

                <a
                  href={COMPANY_DATA.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook GP Solutions"
                  className="w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-[#1877F2]/25 border border-white/15 hover:border-[#1877F2]/60 flex items-center justify-center text-white hover:text-[#1877F2] transition-all hover:scale-110 shadow-sm hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] cursor-pointer"
                  title="Facebook"
                >
                  <FacebookIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </a>

                <a
                  href={COMPANY_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram GP Solutions"
                  className="w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-[#E4405F]/25 border border-white/15 hover:border-[#E4405F]/60 flex items-center justify-center text-white hover:text-[#E4405F] transition-all hover:scale-110 shadow-sm hover:shadow-[0_0_15px_rgba(228,64,95,0.4)] cursor-pointer"
                  title="Instagram"
                >
                  <InstagramIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </a>

                <a
                  href={COMPANY_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn GP Solutions"
                  className="w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-[#0A66C2]/25 border border-white/15 hover:border-[#0A66C2]/60 flex items-center justify-center text-white hover:text-[#0A66C2] transition-all hover:scale-110 shadow-sm hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] cursor-pointer"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </a>
              </div>
            </div>

            <div className="space-y-2 text-[11.5px] sm:text-[12.5px] font-medium text-slate-300">
              {/* Ubicación */}
              <div className="flex items-start gap-2 group">
                <div className="w-6 h-6 rounded-md bg-white/10 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-snug">
                  {COMPANY_DATA.location}
                </span>
              </div>

              {/* Teléfonos de contacto en la misma línea separados por un guion */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/10 text-[#38BDF8] flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-2 font-semibold flex-wrap">
                  <a
                    href={COMPANY_DATA.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#38BDF8] transition-colors cursor-pointer"
                    title="WhatsApp"
                  >
                    {COMPANY_DATA.phoneFormatted1}
                  </a>
                  <span className="text-slate-400 font-normal">-</span>
                  <a
                    href={`tel:${COMPANY_DATA.phoneFormatted2}`}
                    className="hover:text-[#38BDF8] transition-colors cursor-pointer"
                    title="Llamar Línea 2"
                  >
                    {COMPANY_DATA.phoneFormatted2}
                  </a>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_DATA.email}`}
                className="flex items-center gap-2 hover:text-[#38BDF8] transition-colors group truncate cursor-pointer"
              >
                <div className="w-6 h-6 rounded-md bg-white/10 text-[#38BDF8] flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold truncate">{COMPANY_DATA.email}</span>
              </a>

              {/* Horario */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/10 text-[#38BDF8] flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_DATA.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            BARRA INFERIOR: COPYRIGHT | POLÍTICA Y TÉRMINOS | DESARROLLADO POR KINDEV
           ======================================================== */}
        <div className="pt-3 sm:pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          {/* Izquierda: Copyright */}
          <p className="text-[11px] sm:text-xs text-slate-500 text-center md:text-left shrink-0">
            © {new Date().getFullYear()} {COMPANY_DATA.name} Todos los derechos reservados.
          </p>

          {/* Centro y más hacia la izquierda: Política de Privacidad y Desarrollado por Kindev */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 sm:gap-x-5 gap-y-2 md:mr-auto md:ml-8 lg:ml-14">
            <div className="flex items-center gap-2 font-medium">
              <button
                onClick={() => onSelectTab('contacto')}
                className="text-slate-400 hover:text-[#38BDF8] transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Política de Privacidad
              </button>
              <span>·</span>
              <button
                onClick={() => onSelectTab('contacto')}
                className="text-slate-400 hover:text-[#38BDF8] transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Términos y Condiciones
              </button>
            </div>

            <span className="hidden sm:inline text-slate-600">|</span>

            {/* Desarrollado por Kindev S.A.S. mandado más a la izquierda */}
            <a
              href="https://www.kindevsas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-95 transition-all text-[11px] sm:text-xs inline-flex items-center gap-1.5 sm:gap-2 group cursor-pointer"
              title="Desarrollado por Kindev S.A.S."
              aria-label="Desarrollado por Kindev S.A.S."
            >
              <div className="relative inline-flex items-center justify-center shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#38BDF8]/30 blur-md opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
                <img
                  src="/kindev_icon.webp"
                  alt="KINDEV Logo"
                  width="22"
                  height="22"
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 ease-out inline-block"
                />
              </div>
              <span className="text-[11px] sm:text-xs text-slate-300 group-hover:text-[#38BDF8] transition-colors font-semibold tracking-wide">
                Desarrollado por{" "}
                <span className="font-bold text-white inline-block">
                  Kindev S.A.S.
                </span>
              </span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
