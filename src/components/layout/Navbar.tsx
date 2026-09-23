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
    { key: 'servicios', label: 'Servicios' },
    { key: 'cotizador', label: 'Cotizador' },
    { key: 'nosotros', label: 'Nosotros' },
    { key: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#0B192C]/95 border-b border-white/10 shadow-lg shadow-black/30 py-2.5'
          : 'bg-[#0B192C]/80 backdrop-blur-md border-b border-white/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO OFICIAL LIMPIO (SIN CAJONES BLANCOS NI CONTENEDORES ARTIFICIALES) */}
        <button
          onClick={() => onSelectTab('inicio')}
          className="flex items-center gap-3 group focus:outline-none cursor-pointer text-left"
          aria-label="Ir al inicio de GP Solutions"
        >
          <img
            src="/logo.webp"
            alt="Logo Oficial GP Solutions"
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            width={44}
            height={44}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold tracking-tight text-white text-base sm:text-lg leading-tight font-heading">
                GP SOLUTIONS
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#00D26A]/15 text-[#00D26A] border border-[#00D26A]/30">
                S.A.S.
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-normal">
              {COMPANY_DATA.legacySlogan}
            </span>
          </div>
        </button>

        {/* NAVEGACIÓN DESKTOP (5 PESTAÑAS INDEPENDIENTES) */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 shadow-inner backdrop-blur-sm"
          aria-label="Navegación principal de 5 secciones"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onSelectTab(item.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#153760] text-white shadow-sm border border-[#00C4A7]/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
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
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#00D26A] transition-colors py-1.5 px-2.5"
            title="Llamada telefónica inmediata"
          >
            <Phone className="w-3.5 h-3.5 text-[#00D26A]" />
            <span className="font-mono font-medium">{COMPANY_DATA.phoneFormatted1}</span>
          </a>

          <a
            href={COMPANY_DATA.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-[#0B192C] bg-[#00D26A] hover:bg-[#00c060] transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-[#00D26A]/20 cursor-pointer min-h-[38px]"
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
