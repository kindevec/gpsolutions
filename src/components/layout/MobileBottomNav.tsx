import React from 'react';
import { Home, Building2, Receipt, Users, Phone } from 'lucide-react';
import type { TabKey } from '../../types';

interface MobileBottomNavProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, onSelectTab }) => {
  const items: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { key: 'inicio', label: 'Inicio', icon: Home },
    { key: 'nosotros', label: 'Nosotros', icon: Users },
    { key: 'servicios-contables', label: 'Servicios Corporativos', icon: Building2 },
    { key: 'servicios-tributarios', label: 'Servicios Tributarios', icon: Receipt },
    { key: 'contacto', label: 'Contacto', icon: Phone },
  ];

  return (
    <nav
      id="mobile-bottom-navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c1a30]/95 backdrop-blur-xl border-t-2 border-amber-400/80 shadow-[0_-8px_30px_rgba(0,0,0,0.45),0_-2px_15px_rgba(245,158,11,0.25)] px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      aria-label="Navegación inferior móvil"
    >
      {/* Sutil línea de brillo dorado superior */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FCD34D] to-transparent shadow-[0_0_10px_#FCD34D] pointer-events-none" />

      <div className="flex items-center justify-between max-w-md sm:max-w-lg md:max-w-xl mx-auto h-11 sm:h-12 px-2 sm:px-4">
        {items.map((item) => {
          const isActive = activeTab === item.key;
          const IconComponent = item.icon;
          return (
            <button
              key={item.key}
              onClick={() => onSelectTab(item.key)}
              className={`flex items-center gap-1.5 py-1.5 transition-all duration-300 ease-out cursor-pointer select-none shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-[#FCD34D] text-[#0a1829] font-black px-3.5 rounded-full border border-yellow-200 shadow-[0_0_22px_rgba(251,191,36,0.7),0_2px_10px_rgba(0,0,0,0.35)] scale-102'
                  : 'text-white/80 hover:text-amber-300 p-2 rounded-full hover:bg-amber-400/15'
              }`}
              aria-label={item.label}
            >
              <IconComponent
                className={`w-5 h-5 shrink-0 transition-colors ${
                  isActive
                    ? 'stroke-[2.6] text-[#0a1829]'
                    : 'stroke-[1.9] group-hover:text-amber-300 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                }`}
              />
              {isActive && (
                <span className="text-xs sm:text-[13px] font-black text-[#0a1829] tracking-tight whitespace-nowrap animate-in fade-in slide-in-from-left-1 duration-200">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
