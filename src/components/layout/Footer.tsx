import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Building2, Receipt } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from '../ui/SocialIcons';
import { COMPANY_DATA } from '../../data/company';
import type { TabKey } from '../../types';

interface FooterProps {
  onSelectTab: (tab: TabKey) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-[#102547] text-white pt-16 pb-28 lg:pb-14 border-t border-sky-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Identity & Authority (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.webp"
                alt="GP Solutions Logo"
                className="w-12 h-12 object-contain drop-shadow-md"
                width={48}
                height={48}
              />
              <div>
                <span className="font-heading font-black text-xl text-white tracking-tight">
                  GP SOLUTIONS
                </span>
                <span className="block text-xs text-[#38BDF8] font-semibold">
                  GUERRAPADILLAGPSOLUTIONS S.A.S.
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
              {COMPANY_DATA.trajectory}. Brindamos soluciones contables NIIF, tributarias ante el SRI, nómina en el IESS y societarias para empresas y personas naturales en Tumbaco, Quito y todo el Ecuador.
            </p>

            <p className="text-xs text-slate-400 font-medium">
              Régimen RIMPE & General • RUC Activo
            </p>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Secciones
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('inicio')}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer text-slate-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('servicios-contables')}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer text-slate-300"
                >
                  Servicios Contables y Corporativos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('servicios-tributarios')}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer text-slate-300"
                >
                  Servicios Tributarios y Laborales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('nosotros')}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer text-slate-300"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contacto')}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer text-slate-300"
                >
                  Atención y Despacho
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacto Oficial (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Contacto Oficial
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={COMPANY_DATA.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#38BDF8] transition-colors text-slate-300 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#38BDF8] group-hover:scale-110 transition-transform shrink-0 mt-0.5" />
                <span>WhatsApp: {COMPANY_DATA.phoneFormatted1}</span>
              </a>

              <a
                href={`tel:${COMPANY_DATA.phoneFormatted2}`}
                className="flex items-start gap-2.5 hover:text-[#38BDF8] transition-colors text-slate-300"
              >
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>Línea 2: {COMPANY_DATA.phoneFormatted2}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DATA.email}`}
                className="flex items-start gap-2.5 hover:text-[#38BDF8] transition-colors text-slate-300 break-all"
              >
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.location}</span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.hours}</span>
              </div>
            </div>

            {/* Redes Sociales Oficiales */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Canales & Redes Oficiales
              </span>
              <div className="flex items-center gap-3.5">
                <a
                  href={COMPANY_DATA.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Oficial GP Solutions"
                  className="social-icon-btn rounded-xl text-[#25D366] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(37,211,102,0.8)] inline-flex items-center justify-center p-1.5 cursor-pointer"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>

                <a
                  href={COMPANY_DATA.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook GP Solutions"
                  className="social-icon-btn rounded-xl text-[#1877F2] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(24,119,242,0.8)] inline-flex items-center justify-center p-1.5 cursor-pointer"
                  title="Facebook"
                >
                  <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>

                <a
                  href={COMPANY_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram GP Solutions"
                  className="social-icon-btn rounded-xl text-[#E4405F] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(228,64,95,0.8)] inline-flex items-center justify-center p-1.5 cursor-pointer"
                  title="Instagram"
                >
                  <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>

                <a
                  href={COMPANY_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn GP Solutions"
                  className="social-icon-btn rounded-xl text-[#0A66C2] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(10,102,194,0.8)] inline-flex items-center justify-center p-1.5 cursor-pointer"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Kindev Official Stamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY_DATA.name} Todos los derechos reservados.
          </p>

          <p className="flex items-center gap-1.5 text-slate-300">
            <span>Desarrollado por</span>
            <a
              href="https://www.kindevsas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38BDF8] hover:underline font-semibold inline-flex items-center gap-0.5"
            >
              <span>Kindev S.A.S.</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
