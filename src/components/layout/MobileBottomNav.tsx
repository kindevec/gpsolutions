import React from 'react';
import { Home, Building2, Receipt, Users, MessageSquare } from 'lucide-react';
import type { TabKey } from '../../types';

interface MobileBottomNavProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, onSelectTab }) => {
  const items: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { key: 'inicio', label: 'Inicio', icon: Home },
    { key: 'servicios-contables', label: 'Contable', icon: Building2 },
    { key: 'servicios-tributarios', label: 'Tributario', icon: Receipt },
    { key: 'nosotros', label: 'Nosotros', icon: Users },
    { key: 'contacto', label: 'Contacto', icon: MessageSquare },
  ];

  return (
    <nav
      id="mobile-bottom-navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-sky-900/10 shadow-[0_-4px_20px_rgba(16,37,71,0.08)] px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      aria-label="Navegación inferior móvil"
    >
      <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
        {items.map((item) => {
          const isActive = activeTab === item.key;
          const IconComponent = item.icon;
          return (
            <button
              key={item.key}
              onClick={() => onSelectTab(item.key)}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-[#0284C7] font-bold bg-sky-50'
                  : 'text-slate-500 hover:text-[#102547]'
              }`}
            >
              <div className="relative">
                <IconComponent className={`w-5 h-5 ${isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                )}
              </div>
              <span className="text-[10px] mt-1 tracking-tight leading-none line-clamp-1">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
