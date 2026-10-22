import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X, ShieldCheck, Receipt, Scale } from 'lucide-react';
import { WhatsAppIcon } from '../ui/SocialIcons';
import { COMPANY_DATA } from '../../data/company';
import type { TabKey } from '../../types';

interface NavbarProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista de items de navegación con las 3 categorías de servicios solicitadas
  const navItems: {
    key: TabKey;
    label: string;
    shortLabel: string;
    isService?: boolean;
    icon?: React.ComponentType<{ className?: string }>;
  }[] = [
    { key: 'inicio', label: 'Inicio', shortLabel: 'Inicio' },
    { key: 'nosotros', label: 'Nosotros', shortLabel: 'Nosotros' },
    {
      key: 'seguridad-salud',
      label: 'Seguridad y Salud Ocupacional',
      shortLabel: 'Seguridad y Salud',
      isService: true,
      icon: ShieldCheck,
    },
    {
      key: 'asesoria-tributaria',
      label: 'Asesoría Tributaria',
      shortLabel: 'Asesoría Tributaria',
      isService: true,
      icon: Receipt,
    },
    {
      key: 'asesoria-legal',
      label: 'Asesoría Legal Corporativa',
      shortLabel: 'Asesoría Legal',
      isService: true,
      icon: Scale,
    },
    { key: 'contacto', label: 'Contacto', shortLabel: 'Contacto' },
  ];

  const handleNavClick = (tab: TabKey) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'backdrop-blur-xl bg-[#0e1d35]/95 border-b border-amber-400/40 shadow-[0_4px_25px_-5px_rgba(245,158,11,0.15)] py-2'
          : 'bg-transparent border-transparent shadow-none py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8">
        {/* Layout Desktop y Laptops */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* LADO IZQUIERDO: LOGO Y MARCA */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2 lg:gap-2.5 xl:gap-3 focus:outline-none cursor-pointer group text-left shrink-0 mr-2 xl:mr-4"
            aria-label="Ir al inicio de GP Solutions"
            title="GP Solutions S.A.S. - Inicio"
          >
            <div className="relative shrink-0">
              <img
                src="/logo.webp"
                alt="Logo Oficial GP Solutions"
                className="w-10 h-10 lg:w-11 lg:h-11 xl:w-16 xl:h-16 object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
                width={64}
                height={64}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-sm lg:text-base xl:text-xl tracking-tight leading-none text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] whitespace-nowrap">
                GP SOLUTIONS
              </span>
              <span className="text-[9px] xl:text-[10px] text-[#38BDF8] font-bold tracking-wider uppercase mt-0.5">
                S.A.S.
              </span>
            </div>
          </button>

          {/* NAVEGACIÓN DIVIDIDA EN LAS 3 CATEGORÍAS DE SERVICIOS */}
          <div className="flex items-center gap-1.5 xl:gap-2.5 shrink-0 ml-auto">
            <nav className="flex items-center gap-1 xl:gap-2" aria-label="Navegación principal">
              {navItems.map((item) => {
                const isActive =
                  activeTab === item.key ||
                  (item.key === 'seguridad-salud' && activeTab === 'servicios-contables') ||
                  (item.key === 'asesoria-tributaria' && activeTab === 'servicios-tributarios');

                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-lg xl:rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#0284C7] text-white shadow-md font-bold ring-2 ring-amber-400/80 shadow-amber-400/20'
                        : 'text-white/90 hover:text-amber-300 hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
                    }`}
                  >
                    {item.isService && item.icon && (
                      <item.icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${isActive ? 'text-amber-300' : 'text-sky-300'}`} />
                    )}
                    <span className="hidden xl:inline">{item.label}</span>
                    <span className="inline xl:hidden">{item.shortLabel}</span>
                  </button>
                );
              })}
            </nav>

            {/* BOTÓN WHATSAPP */}
            <button
              onClick={() => window.open(COMPANY_DATA.whatsappBaseUrl, '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg xl:rounded-xl text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0284C7] border border-amber-400/50 hover:border-amber-300 transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-amber-400/10 cursor-pointer whitespace-nowrap shrink-0 ml-1"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-amber-300" />
            </button>
          </div>
        </div>

        {/* Layout Móvil y Tablet: Logo + WhatsApp + Botón de Menú */}
        <div className="flex lg:hidden items-center justify-between">
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2.5 focus:outline-none cursor-pointer group text-left"
            aria-label="Ir al inicio de GP Solutions"
          >
            <img
              src="/logo.webp"
              alt="Logo GP Solutions"
              className="w-11 h-11 sm:w-14 sm:h-14 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              width={56}
              height={56}
            />
            <div className="flex flex-col">
              <span className="font-heading font-black text-sm sm:text-base tracking-tight leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                GP SOLUTIONS
              </span>
              <span className="text-[9px] text-[#38BDF8] font-bold tracking-wider uppercase mt-0.5">
                S.A.S.
              </span>
            </div>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={COMPANY_DATA.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0284C7] hover:bg-[#0369a1] border border-amber-400/40 transition-all shadow-md shadow-sky-500/20 cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1a30]/98 border-t border-amber-400/40 px-4 py-5 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1.5 max-w-md mx-auto">
            <div className="text-[10px] uppercase font-black text-amber-400/90 tracking-widest px-3 py-1">
              Navegación & Servicios
            </div>
            {navItems.map((item) => {
              const isActive =
                activeTab === item.key ||
                (item.key === 'seguridad-salud' && activeTab === 'servicios-contables') ||
                (item.key === 'asesoria-tributaria' && activeTab === 'servicios-tributarios');

              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0284C7] to-[#0369a1] text-white border border-amber-400/80 shadow-md'
                      : 'text-white/90 hover:bg-white/10 hover:text-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon ? (
                      <item.icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-sky-300'}`} />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    )}
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="text-[10px] uppercase font-black text-amber-300">Activo</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
