import React, { useState } from 'react';
import {
  Search,
  Check,
  X,
  FileText,
  MessageCircle,
  Building2,
  Receipt,
  Users,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { ALL_SERVICES, CATEGORIES_CONFIG } from '../data/services';
import { buildWhatsAppLink } from '../data/company';
import type { ServiceCategory } from '../types';

export const ServicesView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredServices = ALL_SERVICES.filter((service) => {
    const matchesCategory =
      selectedCategory === 'todos' || service.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.legalBasis.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-16 sm:pb-28 pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de Catálogo */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D26A] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catálogo Oficial de Especialidades</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Servicios Contables, Tributarios & Laborales
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300">
            Los 21 servicios oficiales de GP SOLUTIONS con entregables mensuales, base legal ecuatoriana y soporte directo por WhatsApp.
          </p>
        </div>

        {/* Buscador y Filtros por Categoría */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Pestañas de Categoría */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES_CONFIG.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setSelectedCategory(cat.key);
                    setExpandedId(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#00D26A] text-[#0B192C] shadow-md shadow-[#00D26A]/20'
                      : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-[#0B192C]/20 text-[#0B192C]' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Input de Búsqueda Instantánea */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar servicio, NIIF, SRI..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00D26A] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Grid de Servicios con Sangrado Completo y Slide-Up In-Situ */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-white/10">
            <p className="text-sm text-slate-400 mb-2">No se encontraron servicios que coincidan con su búsqueda.</p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#00D26A] hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredServices.map((service) => {
              const isExpanded = expandedId === service.id;

              return (
                <div
                  key={service.id}
                  className="bg-slate-900/80 rounded-3xl border border-white/10 hover:border-white/20 shadow-xl flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Stage Superior de Imagen con Cajón Técnico Desplegable */}
                  <div
                    className="relative w-full h-52 sm:h-56 overflow-hidden cursor-pointer select-none rounded-t-3xl bg-slate-950"
                    onClick={() => toggleExpand(service.id)}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Badge de Categoría */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-900/90 text-[#00D26A] border border-white/15 backdrop-blur-md shadow-sm">
                        {service.badge}
                      </span>
                    </div>

                    {/* Frecuencia / Periodo */}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[10px] text-slate-300 font-medium px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                        {service.frequency}
                      </span>
                    </div>

                    {/* CAJÓN TÉCNICO DESPLEGABLE IN-SITU (SLIDE-UP DRAWER) */}
                    <div
                      className={`absolute inset-0 z-20 bg-slate-950/95 backdrop-blur-md p-5 flex flex-col justify-between transition-all duration-300 ease-out cursor-default ${
                        isExpanded
                          ? 'translate-y-0 opacity-100 pointer-events-auto'
                          : 'translate-y-full opacity-0 pointer-events-none'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div>
                        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#00D26A] uppercase tracking-wider">
                            <FileText className="w-3.5 h-3.5" />
                            <span>Ficha de Entregables</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleExpand(service.id)}
                            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Cerrar ficha"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-white mb-2 line-clamp-1">
                          {service.title}
                        </h4>

                        <div className="space-y-1.5 mb-2.5 max-h-32 overflow-y-auto no-scrollbar">
                          {service.deliverables.map((deliv, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300 leading-tight">
                              <Check className="w-3.5 h-3.5 text-[#00D26A] shrink-0 mt-0.5" />
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>

                        <p className="text-[10px] text-slate-400 italic line-clamp-2">
                          Norma: {service.legalBasis}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
                        <a
                          href={buildWhatsAppLink(service.whatsappMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#00D26A] hover:underline flex items-center gap-1"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>Cotizar</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => toggleExpand(service.id)}
                          className="text-slate-400 hover:text-white cursor-pointer"
                        >
                          Volver a la foto
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Cuerpo de la Tarjeta */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                        {service.categoryLabel}
                      </span>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-2 line-clamp-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2.5">
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isExpanded
                            ? 'bg-[#00D26A] text-[#0B192C]'
                            : 'bg-white/5 hover:bg-white/10 text-slate-200'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{isExpanded ? 'Ver Foto' : 'Ficha Técnica'}</span>
                      </button>

                      <a
                        href={buildWhatsAppLink(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-[#00D26A] hover:bg-[#00c060] text-[#0B192C] transition-all cursor-pointer shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Cotizar</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
