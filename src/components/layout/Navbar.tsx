import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';
import type { TabKey } from '../../types';

interface NavbarProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { key: TabKey; label: string }[] = [
    { key: 'inicio', label: 'Inicio' },
    { key: 'servicios-contables', label: 'Servicios Contables' },
    { key: 'servicios-tributarios', label: 'Servicios Tributarios' },
    { key: 'nosotros', label: 'Nosotros' },
    { key: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/95 border-b border-sky-100 shadow-[0_4px_25px_-5px_rgba(16,37,71,0.08)] py-2.5 sm:py-3'
          : 'bg-transparent border-transparent shadow-none py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO OFICIAL CON NOMBRE DE MARCA */}
        <button
          onClick={() => onSelectTab('inicio')}
          className="flex items-center gap-3 focus:outline-none cursor-pointer group text-left"
          aria-label="Ir al inicio de GP Solutions"
          title="GP Solutions S.A.S. - Inicio"
        >
          <img
            src="/logo.webp"
            alt="Logo Oficial GP Solutions"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            width={48}
            height={48}
          />
          <div className="flex flex-col">
            <span
              className={`font-heading font-black text-lg sm:text-xl tracking-tight leading-none transition-colors duration-300 ${
                scrolled ? 'text-[#102547]' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'
              }`}
            >
              GP SOLUTIONS
            </span>
            <span
              className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase transition-colors duration-300 mt-1 ${
                scrolled ? 'text-[#0284C7]' : 'text-sky-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
              }`}
            >
              Asesoría Contable & Legal
            </span>
          </div>
        </button>

        {/* NAVEGACIÓN DESKTOP (5 SECCIONES OFICIALES) */}
        <nav
          className="hidden lg:flex items-center gap-1.5"
          aria-label="Navegación principal de 5 secciones"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onSelectTab(item.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0284C7] text-white shadow-sm font-bold'
                    : scrolled
                    ? 'text-[#102547] hover:text-[#0284C7] hover:bg-sky-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* ACCIÓN DIRECTA WHATSAPP / TELEFONO */}
        <div className="flex items-center gap-2.5">
          <a
            href={`tel:${COMPANY_DATA.phoneFormatted1}`}
            className={`hidden sm:inline-flex items-center gap-1.5 text-xs transition-colors py-1.5 px-2.5 rounded-lg ${
              scrolled
                ? 'text-slate-600 hover:text-[#0284C7]'
                : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
            }`}
            title="Llamada directa"
          >
            <Phone className={`w-3.5 h-3.5 ${scrolled ? 'text-[#0284C7]' : 'text-sky-300'}`} />
            <span className="font-mono font-medium">{COMPANY_DATA.phoneFormatted1}</span>
          </a>

          <a
            href={COMPANY_DATA.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0284C7] hover:bg-[#0369a1] transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-sky-500/20 cursor-pointer min-h-[38px]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden sm:inline">Asesoría Directa</span>
            <span className="sm:hidden">WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </header>
  );
};
