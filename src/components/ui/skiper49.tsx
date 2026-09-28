"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, ExternalLink, FileText, X } from "lucide-react";
import React, { useState } from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types";
import { buildWhatsAppLink } from "@/data/company";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

const Skiper49 = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      alt: "Contabilidad y finanzas empresariales",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      alt: "Balances y auditoría NIIF",
    },
    {
      src: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      alt: "Cumplimiento y legal corporativo",
    },
    {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      alt: "Constitución de empresas S.A.S.",
    },
    {
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      alt: "Asesoría societaria",
    },
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      alt: "Capacitación tributaria",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3] py-12">
      <Carousel_003 className="" images={images} showPagination loop />
    </div>
  );
};

export { Skiper49 };

interface Carousel003Props {
  images?: { src: string; alt: string }[];
  services?: ServiceItem[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}

const Carousel_003 = ({
  images,
  services,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: Carousel003Props) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const css = `
  .Carousal_003 {
    width: 100%;
    padding-top: 20px !important;
    padding-bottom: 60px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    transition: transform 0.3s ease;
  }

  @media (min-width: 640px) {
    .Carousal_003 .swiper-slide {
      width: 360px;
    }
  }

  @media (min-width: 1024px) {
    .Carousal_003 .swiper-slide {
      width: 380px;
    }
  }

  .Carousal_003 .swiper-pagination-bullet {
    background-color: #0284C7 !important;
    opacity: 0.4;
    width: 10px;
    height: 10px;
    transition: all 0.3s ease;
  }

  .Carousal_003 .swiper-pagination-bullet-active {
    opacity: 1;
    width: 26px;
    border-radius: 9999px;
    background-color: #0284C7 !important;
  }

  .Carousal_003 .swiper-3d .swiper-slide-shadow-left,
  .Carousal_003 .swiper-3d .swiper-slide-shadow-right {
    border-radius: 28px;
    background-image: linear-gradient(to right, rgba(10, 21, 38, 0.65), rgba(10, 21, 38, 0.2)) !important;
  }
`;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className={cn("relative w-full max-w-6xl mx-auto px-4 sm:px-6", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full relative"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 28,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {/* Si se proporcionan servicios de la empresa */}
          {services && services.length > 0
            ? services.map((service) => {
                const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);
                return (
                  <SwiperSlide key={service.id} className="rounded-[28px] overflow-hidden">
                    <div className="flex flex-col justify-between h-[490px] sm:h-[510px] w-full rounded-[28px] overflow-hidden text-white bg-gradient-to-b from-[#0c1a30] via-[#091426] to-[#060e1c] border border-sky-400/30 shadow-[0_20px_45px_rgba(0,0,0,0.45)] select-none">
                      {/* Imagen superior con gradiente */}
                      <div
                        onClick={() => setSelectedService(service)}
                        className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-900 cursor-pointer group"
                        title="Pulsar para ver ficha técnica y entregables"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90"
                          loading="lazy"
                          crossOrigin="anonymous"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes("hero-accounting.jpg")) {
                              target.src = "/images/heroes/hero-accounting.jpg";
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a30] via-[#0c1a30]/30 to-transparent" />
                        
                        {/* Badge de categoría */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-sky-500/80 backdrop-blur-md text-[11px] font-bold text-white px-3 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-md">
                            {service.badge || "GP Solutions"}
                          </span>
                        </div>
                      </div>

                      {/* Contenido inferior */}
                      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between relative z-10">
                        <div>
                          <h3 className="text-lg sm:text-xl font-heading font-black text-white tracking-tight leading-snug line-clamp-2 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-slate-300 line-clamp-2 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Botones de acción */}
                        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 items-center mt-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedService(service);
                            }}
                            className="text-xs sm:text-sm font-semibold text-sky-300 hover:text-white underline-offset-4 hover:underline transition-colors cursor-pointer text-center py-2"
                          >
                            Ficha Técnica
                          </button>

                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#0284C7] to-[#0369a1] text-white hover:brightness-110 transition-all shadow-md shadow-sky-900/40 active:scale-95 cursor-pointer"
                          >
                            <span>Cotizar</span>
                            <WhatsAppIcon className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            : images?.map((image, index) => (
                <SwiperSlide key={index} className="rounded-[28px] overflow-hidden">
                  <div className="w-full h-[350px] overflow-hidden rounded-[28px] shadow-xl">
                    <img
                      className="h-full w-full object-cover"
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>

        {/* Botones de navegación personalizados */}
        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Anterior"
              className="swiper-button-prev-custom absolute -left-2 sm:-left-6 lg:-left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#102547] text-white border-2 border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#0284C7] hover:scale-110 active:scale-95"
            >
              <ChevronLeftIcon className="h-6 w-6 stroke-[2.5]" />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              className="swiper-button-next-custom absolute -right-2 sm:-right-6 lg:-right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#102547] text-white border-2 border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#0284C7] hover:scale-110 active:scale-95"
            >
              <ChevronRightIcon className="h-6 w-6 stroke-[2.5]" />
            </button>
          </>
        )}
      </motion.div>

      {/* Modal Ficha Técnica para el Servicio Seleccionado */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#091426] border border-sky-400/40 rounded-3xl p-6 sm:p-7 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block">
                  {selectedService.categoryLabel}
                </span>
                <h4 className="font-heading font-black text-lg text-white">
                  {selectedService.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar ficha"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3 mb-5">
              <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
                Entregables & Alcance:
              </span>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedService.legalBasis && (
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-5 text-[11px] text-slate-300">
                <strong className="text-sky-300">Base Normativa:</strong> {selectedService.legalBasis}
              </div>
            )}

            <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Frecuencia: <strong className="text-white">{selectedService.frequency}</strong>
              </span>
              <a
                href={buildWhatsAppLink(selectedService.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 rounded-xl font-bold text-xs bg-[#0284C7] hover:bg-[#0369a1] text-white transition-all shadow-md cursor-pointer"
              >
                <span>Cotizar por WhatsApp</span>
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export { Carousel_003 };
export default Skiper49;
