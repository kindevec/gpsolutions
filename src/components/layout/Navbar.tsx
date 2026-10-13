import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from '../ui/SocialIcons';
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

  // Secciones de navegación en orden secuencial con texto completo original
  const navItems: { key: TabKey; label: string; action: () => void }[] = [
    { key: 'inicio', label: 'Inicio', action: () => onSelectTab('inicio') },
    { key: 'nosotros', label: 'Nosotros', action: () => onSelectTab('nosotros') },
    { key: 'servicios-contables', label: 'Servicios Corporativos', action: () => onSelectTab('servicios-contables') },
    { key: 'servicios-tributarios', label: 'Servicios Tributarios', action: () => onSelectTab('servicios-tributarios') },
    { key: 'contacto', label: 'Contacto', action: () => onSelectTab('contacto') },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#0e1d35]/95 border-b border-amber-400/40 shadow-[0_4px_25px_-5px_rgba(245,158,11,0.15)] py-2'
          : 'bg-transparent border-transparent shadow-none py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        {/* Layout Desktop (xl:) y Laptops (lg:): En laptop Inicio empieza a la derecha con justify-between y ml-auto; en PC mantiene layout original */}
        <div className="hidden lg:flex items-center justify-between xl:justify-start xl:gap-8 w-full">
          
          {/* LADO IZQUIERDO: LOGO Y MARCA */}
          <button
            onClick={() => onSelectTab('inicio')}
            className="flex items-center gap-2 lg:gap-2.5 xl:gap-3.5 focus:outline-none cursor-pointer group text-left shrink-0 mr-0 xl:mr-4"
            aria-label="Ir al inicio de GP Solutions"
            title="GP Solutions S.A.S. - Inicio"
          >
            <div className="relative shrink-0">
              <img
                src="/logo.webp"
                alt="Logo Oficial GP Solutions"
                className="w-10 h-10 lg:w-11 lg:h-11 xl:w-20 xl:h-20 object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
                width={80}
                height={80}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-sm lg:text-base xl:text-2xl tracking-tight leading-none text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] whitespace-nowrap">
                GP SOLUTIONS
              </span>
              <span className="text-[9.5px] lg:text-[10px] xl:hidden text-[#38BDF8] font-bold tracking-wider uppercase mt-0.5">
                S.A.S.
              </span>
            </div>
          </button>

          {/* NAVEGACIÓN SECUENCIAL (Inicio -> Nosotros -> Servicios Corporativos -> Servicios Tributarios -> Contacto) + WHATSAPP */}
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-3 shrink-0 ml-auto xl:ml-0">
            <nav className="flex items-center gap-1.5 lg:gap-2.5 xl:gap-2.5" aria-label="Navegación principal">
              {navItems.map((item, idx) => {
                const isActive = activeTab === item.key;
                return (
                  <button
                    key={`${item.key}-${idx}`}
                    onClick={item.action}
                    className={`px-3 lg:px-3.5 xl:px-4 py-1.5 xl:py-2.5 rounded-lg xl:rounded-xl text-xs lg:text-[13px] xl:text-base font-semibold tracking-normal xl:tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#0284C7] text-white shadow-md font-bold ring-2 ring-amber-400/80 shadow-amber-400/20'
                        : 'text-white/90 hover:text-amber-300 hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => window.open(COMPANY_DATA.whatsappBaseUrl, '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center gap-1.5 2xl:gap-2 px-3 py-1.5 lg:px-3 lg:py-1.5 xl:px-3.5 xl:py-1.5 2xl:px-5 2xl:py-2.5 rounded-lg 2xl:rounded-xl text-xs lg:text-[11.5px] xl:text-xs 2xl:text-base font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0284C7] border border-amber-400/50 hover:border-amber-300 transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-amber-400/10 cursor-pointer whitespace-nowrap shrink-0 ml-1.5 lg:ml-2.5 xl:ml-3 mr-1"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-white" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 text-amber-300" />
            </button>
          </div>
        </div>

        {/* Layout Móvil y Tablet: Logo + Contacto directo + WhatsApp original */}
        <div className="flex lg:hidden items-center justify-between">
          <button
            onClick={() => onSelectTab('inicio')}
            className="flex items-center gap-3 focus:outline-none cursor-pointer group text-left"
            aria-label="Ir al inicio de GP Solutions"
          >
            <img
              src="/logo.webp"
              alt="Logo GP Solutions"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              width={64}
              height={64}
            />
            <div className="flex flex-col">
              <span className="font-heading font-black text-base sm:text-lg tracking-tight leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                GP SOLUTIONS
              </span>
            </div>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={COMPANY_DATA.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-[#0284C7] hover:bg-[#0369a1] border border-amber-400/40 transition-all shadow-md shadow-sky-500/20 cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 text-amber-300" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
