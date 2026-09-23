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
          ? 'backdrop-blur-xl bg-[#F4F9F9]/95 border-b border-teal-900/10 shadow-[0_4px_25px_-5px_rgba(16,37,71,0.08)] py-2.5'
          : 'bg-[#F4F9F9]/55 backdrop-blur-md border-b border-teal-900/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO OFICIAL LIMPIO (SOLAMENTE EL LOGOTOCITO) */}
        <button
          onClick={() => onSelectTab('inicio')}
          className="flex items-center focus:outline-none cursor-pointer group"
          aria-label="Ir al inicio de GP Solutions"
          title="GP Solutions S.A.S. - Inicio"
        >
          <img
            src="/logo.webp"
            alt="Logo Oficial GP Solutions"
            className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
            width={48}
            height={48}
          />
        </button>

        {/* NAVEGACIÓN DESKTOP (5 SECCIONES OFICIALES SIN CONTENEDOR REDUNDANTE) */}
        <nav
          className="hidden lg:flex items-center gap-1"
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
                    ? 'bg-[#0D9488] text-white shadow-sm'
                    : 'text-[#102547] hover:text-[#0D9488] hover:bg-teal-50/70'
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
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0D9488] transition-colors py-1.5 px-2.5"
            title="Llamada directa"
          >
            <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
            <span className="font-mono font-medium">{COMPANY_DATA.phoneFormatted1}</span>
          </a>

          <a
            href={COMPANY_DATA.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0D9488] hover:bg-[#0b7c72] transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-[#0D9488]/20 cursor-pointer min-h-[38px]"
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
