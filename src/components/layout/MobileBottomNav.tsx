import React, { useState } from 'react';
import { Home, Users, Briefcase, Phone, ShieldCheck, Receipt, Scale, X, ChevronRight } from 'lucide-react';
import type { TabKey } from '../../types';

interface MobileBottomNavProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, onSelectTab }) => {
  const [servicesSheetOpen, setServicesSheetOpen] = useState(false);

  const isServiceActive =
    activeTab === 'seguridad-salud' ||
    activeTab === 'asesoria-tributaria' ||
    activeTab === 'asesoria-legal' ||
    activeTab === 'servicios-contables' ||
    activeTab === 'servicios-tributarios';

  const getActiveServiceLabel = () => 'Servicios';

  const serviceCategories: {
    key: TabKey;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    badge: string;
  }[] = [
    {
      key: 'seguridad-salud',
      title: 'Seguridad y Salud Ocupacional',
      description: 'Gestión de riesgos, planes de emergencia y capacitaciones MDT.',
      icon: ShieldCheck,
      badge: 'Prevención & MDT',
    },
    {
      key: 'asesoria-tributaria',
      title: 'Asesoría Tributaria',
      description: 'Declaraciones, planificación fiscal y contingencias SRI.',
      icon: Receipt,
      badge: 'Fiscal SRI',
    },
    {
      key: 'asesoria-legal',
      title: 'Asesoría Legal Corporativa',
      description: 'Constitución SAS, contratos, libros societarios y marcas SENADI.',
      icon: Scale,
      badge: 'Societario & Mercantil',
    },
  ];

  const handleSelectService = (key: TabKey) => {
    onSelectTab(key);
    setServicesSheetOpen(false);
  };

  return (
    <>
      {/* Drawer / Bottom Sheet para seleccionar las 3 categorías de servicios */}
      {servicesSheetOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col justify-end animate-in fade-in duration-200"
          onClick={() => setServicesSheetOpen(false)}
        >
          <div
            className="bg-[#0b172a] border-t-2 border-amber-400/90 rounded-t-3xl p-5 pb-8 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase font-black text-amber-400 tracking-widest block">
                  Nuestros Servicios
                </span>
                <h3 className="text-base font-black text-white">Selecciona una categoría</h3>
              </div>
              <button
                onClick={() => setServicesSheetOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5 text-amber-300" />
              </button>
            </div>

            <div className="space-y-2.5">
              {serviceCategories.map((cat) => {
                const Icon = cat.icon;
                const isSelected =
                  activeTab === cat.key ||
                  (cat.key === 'seguridad-salud' && activeTab === 'servicios-contables') ||
                  (cat.key === 'asesoria-tributaria' && activeTab === 'servicios-tributarios');

                return (
                  <button
                    key={cat.key}
                    onClick={() => handleSelectService(cat.key)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#0284C7]/90 to-[#0369a1] border-amber-400 shadow-lg text-white'
                        : 'bg-white/5 hover:bg-white/10 border-white/10 text-white/90'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-white/10 text-sky-300'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading font-bold text-sm text-white">{cat.title}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 ${isSelected ? 'text-amber-300' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Barra de Navegación Inferior */}
      <nav
        id="mobile-bottom-navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c1a30]/95 backdrop-blur-xl border-t-2 border-amber-400/80 shadow-[0_-8px_30px_rgba(0,0,0,0.45),0_-2px_15px_rgba(245,158,11,0.25)] px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
        aria-label="Navegación inferior móvil"
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FCD34D] to-transparent shadow-[0_0_10px_#FCD34D] pointer-events-none" />

        <div className="flex items-center justify-between max-w-md sm:max-w-lg md:max-w-xl mx-auto h-11 sm:h-12 px-2 sm:px-4">
          {/* Inicio */}
          <button
            onClick={() => onSelectTab('inicio')}
            className={`flex items-center gap-1.5 py-1.5 transition-all duration-300 ease-out cursor-pointer select-none shrink-0 ${
              activeTab === 'inicio'
                ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-[#FCD34D] text-[#0a1829] font-black px-3.5 rounded-full border border-yellow-200 shadow-[0_0_22px_rgba(251,191,36,0.7),0_2px_10px_rgba(0,0,0,0.35)] scale-102'
                : 'text-white/80 hover:text-amber-300 p-2 rounded-full hover:bg-amber-400/15'
            }`}
            aria-label="Inicio"
          >
            <Home className="w-5 h-5 shrink-0" />
            {activeTab === 'inicio' && <span className="text-xs font-black text-[#0a1829]">Inicio</span>}
          </button>

          {/* Nosotros */}
          <button
            onClick={() => onSelectTab('nosotros')}
            className={`flex items-center gap-1.5 py-1.5 transition-all duration-300 ease-out cursor-pointer select-none shrink-0 ${
              activeTab === 'nosotros'
                ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-[#FCD34D] text-[#0a1829] font-black px-3.5 rounded-full border border-yellow-200 shadow-[0_0_22px_rgba(251,191,36,0.7),0_2px_10px_rgba(0,0,0,0.35)] scale-102'
                : 'text-white/80 hover:text-amber-300 p-2 rounded-full hover:bg-amber-400/15'
            }`}
            aria-label="Nosotros"
          >
            <Users className="w-5 h-5 shrink-0" />
            {activeTab === 'nosotros' && <span className="text-xs font-black text-[#0a1829]">Nosotros</span>}
          </button>

          {/* Servicios (Despliega las 3 Categorías) */}
          <button
            onClick={() => setServicesSheetOpen(true)}
            className={`flex items-center gap-1.5 py-1.5 transition-all duration-300 ease-out cursor-pointer select-none shrink-0 ${
              isServiceActive
                ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-[#FCD34D] text-[#0a1829] font-black px-3.5 rounded-full border border-yellow-200 shadow-[0_0_22px_rgba(251,191,36,0.7),0_2px_10px_rgba(0,0,0,0.35)] scale-102'
                : 'text-white/80 hover:text-amber-300 p-2 rounded-full hover:bg-amber-400/15'
            }`}
            aria-label="Servicios"
          >
            <Briefcase className="w-5 h-5 shrink-0" />
            <span className={`text-xs font-black ${isServiceActive ? 'text-[#0a1829]' : 'text-white'}`}>
              {getActiveServiceLabel()}
            </span>
          </button>

          {/* Contacto */}
          <button
            onClick={() => onSelectTab('contacto')}
            className={`flex items-center gap-1.5 py-1.5 transition-all duration-300 ease-out cursor-pointer select-none shrink-0 ${
              activeTab === 'contacto'
                ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-[#FCD34D] text-[#0a1829] font-black px-3.5 rounded-full border border-yellow-200 shadow-[0_0_22px_rgba(251,191,36,0.7),0_2px_10px_rgba(0,0,0,0.35)] scale-102'
                : 'text-white/80 hover:text-amber-300 p-2 rounded-full hover:bg-amber-400/15'
            }`}
            aria-label="Contacto"
          >
            <Phone className="w-5 h-5 shrink-0" />
            {activeTab === 'contacto' && <span className="text-xs font-black text-[#0a1829]">Contacto</span>}
          </button>
        </div>
      </nav>
    </>
  );
};
