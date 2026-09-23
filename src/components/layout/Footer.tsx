import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';
import type { TabKey } from '../../types';

interface FooterProps {
  onSelectTab: (tab: TabKey) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-28 md:pb-16 text-slate-300">
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
                <span className="block text-xs text-[#00D26A] font-semibold">
                  GUERRAPADILLAGPSOLUTIONS S.A.S.
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              {COMPANY_DATA.trajectory}. Soluciones contables NIIF, tributarias SRI, nómina IESS y societarias para empresas y personas naturales en Tumbaco, Quito y todo el Ecuador.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#00D26A]" />
                <span>Régimen RIMPE & General</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span>RUC Activo</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('inicio')}
                  className="hover:text-[#00D26A] transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('servicios')}
                  className="hover:text-[#00D26A] transition-colors cursor-pointer"
                >
                  Catálogo de Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('cotizador')}
                  className="hover:text-[#00D26A] transition-colors cursor-pointer"
                >
                  Cotizador Interactivo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('nosotros')}
                  className="hover:text-[#00D26A] transition-colors cursor-pointer"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contacto')}
                  className="hover:text-[#00D26A] transition-colors cursor-pointer"
                >
                  Atención y Despacho
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Áreas de Práctica (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Contabilidad NIIF</li>
              <li>Declaraciones SRI</li>
              <li>Anexos ATS & RDEP</li>
              <li>Nómina & Roles IESS</li>
              <li>Constitución S.A.S.</li>
              <li>Registro de Marcas</li>
              <li>Devolución de IVA</li>
            </ul>
          </div>

          {/* Col 4: Atención & Contacto Directo (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Contacto Oficial
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={COMPANY_DATA.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#00D26A] transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-[#00D26A] shrink-0 mt-0.5" />
                <span>WhatsApp: {COMPANY_DATA.phoneFormatted1}</span>
              </a>

              <a
                href={`tel:${COMPANY_DATA.phoneFormatted2}`}
                className="flex items-start gap-2.5 hover:text-[#00D26A] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                <span>Línea 2: {COMPANY_DATA.phoneFormatted2}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DATA.email}`}
                className="flex items-start gap-2.5 hover:text-[#00D26A] transition-colors group break-all"
              >
                <Mail className="w-4 h-4 text-[#D8AC43] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.location}</span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.hours}</span>
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
            <span>Desarrollado con alto rendimiento por</span>
            <a
              href="https://www.kindevsas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00D26A] hover:underline font-semibold inline-flex items-center gap-0.5"
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
