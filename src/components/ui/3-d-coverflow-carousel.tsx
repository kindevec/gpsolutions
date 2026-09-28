"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

// Inline Icons (Zero external dependencies)
const ChevronLeftIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export interface CarouselItem {
  tag?: string;
  titleLine1: string;
  titleLine2?: string;
  desc?: string;
  deliverables?: string[];
  legalBasis?: string;
  img: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface CoverFlowCarouselProps {
  items?: CarouselItem[];
  sectionLabel?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  onCtaClick?: (item: CarouselItem) => void;
  renderItemContent?: (item: CarouselItem, isCenter: boolean) => React.ReactNode;
}

export const defaultDishes: CarouselItem[] = [
  {
    tag: "#Signature",
    titleLine1: "BUTTER CHICKEN",
    titleLine2: "– DELHI HERITAGE",
    desc: "Velvety roasted tomato and fenugreek gravy with tender charred chicken",
    img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    ctaText: "View Menu",
    ctaUrl: "#",
  },
  {
    tag: "#ChefSpecial",
    titleLine1: "TANDOORI CHOPS",
    titleLine2: "– SMOKED SPICE",
    desc: "Grass-fed lamb chops charred in live charcoal tandoor with Kashmiri spices",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    ctaText: "View Menu",
    ctaUrl: "#",
  },
  {
    tag: "#Vegetarian",
    titleLine1: "PANEER TIKKA",
    titleLine2: "– CLAY ROASTED",
    desc: "Artisan cottage cheese marinated in spiced yogurt, bell peppers & saffron",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    ctaText: "View Menu",
    ctaUrl: "#",
  },
  {
    tag: "#CoastalCatch",
    titleLine1: "MALABAR PRAWNS",
    titleLine2: "– COCONUT GRAVY",
    desc: "Jumbo wild tiger prawns simmered in fragrant curry leaves and coconut milk",
    img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    ctaText: "View Menu",
    ctaUrl: "#",
  },
  {
    tag: "#ArtisanBake",
    titleLine1: "TRUFFLE NAAN",
    titleLine2: "– CHARCOAL OVEN",
    desc: "Crispy puffed leavened bread brushed with pure ghee and black winter truffle",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    ctaText: "View Menu",
    ctaUrl: "#",
  },
];

export function CoverFlowCarousel({
  items = defaultDishes,
  sectionLabel = "",
  autoplay = true,
  autoplayDelay = 5000,
  className = "",
  onCtaClick,
  renderItemContent,
}: CoverFlowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const total = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx % total);
  };

  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return;
    const interval = setInterval(nextSlide, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered, nextSlide, total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`relative w-full min-h-[580px] sm:min-h-[620px] flex items-center justify-center overflow-hidden py-6 select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full max-w-6xl mx-auto px-4 z-10 flex flex-col items-center">
        {/* Eyebrow / Section Label */}
        {sectionLabel && (
          <div className="flex items-center gap-3 mb-6">
            <span style={{ width: "36px", height: "1px", background: "linear-gradient(90deg, transparent, #0284c7)" }} />
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#0284c7",
                margin: 0,
              }}
            >
              {sectionLabel}
            </h3>
            <span style={{ width: "36px", height: "1px", background: "linear-gradient(90deg, #0284c7, transparent)" }} />
          </div>
        )}

        {/* 3D Coverflow Stage */}
        <div
          className="relative w-full h-[520px] sm:h-[550px] flex justify-center items-center mb-6"
          style={{ perspective: "1400px" }}
        >
          {items.map((item, idx) => {
            const offset = (idx - currentIndex + total) % total;

            let transform = "translateX(0px) scale(0.4) rotateY(0deg)";
            let opacity = 0;
            let zIndex = 0;
            let filter = "brightness(0.4) blur(2px)";
            let isCenter = false;

            if (offset === 0) {
              isCenter = true;
              transform = "translateX(0px) scale(1) rotateY(0deg)";
              opacity = 1;
              zIndex = 30;
              filter = "brightness(1)";
            } else if (offset === 1) {
              transform = "translateX(280px) scale(0.84) rotateY(-22deg)";
              opacity = 0.68;
              zIndex = 20;
              filter = "brightness(0.85)";
            } else if (offset === 2) {
              transform = "translateX(490px) scale(0.68) rotateY(-36deg)";
              opacity = 0.4;
              zIndex = 10;
              filter = "brightness(0.6) blur(1px)";
            } else if (offset === total - 1) {
              transform = "translateX(-280px) scale(0.84) rotateY(22deg)";
              opacity = 0.68;
              zIndex = 20;
              filter = "brightness(0.85)";
            } else if (offset === total - 2) {
              transform = "translateX(-490px) scale(0.68) rotateY(36deg)";
              opacity = 0.4;
              zIndex = 10;
              filter = "brightness(0.6) blur(1px)";
            }

            return (
              <div
                key={idx}
                onClick={() => !isCenter && goToSlide(idx)}
                style={{
                  position: "absolute",
                  width: "350px",
                  maxWidth: "92vw",
                  height: "530px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  backgroundColor: "#0d1e38",
                  border: isCenter ? "2px solid rgba(56, 189, 248, 0.7)" : "1px solid rgba(255, 255, 255, 0.15)",
                  transform,
                  opacity,
                  zIndex,
                  filter,
                  transformOrigin: "center center",
                  transition: "all 700ms cubic-bezier(0.25, 1, 0.5, 1)",
                  boxShadow: isCenter
                    ? "0 25px 60px rgba(0,0,0,0.7), 0 0 35px rgba(2,132,199,0.35)"
                    : "0 15px 35px rgba(0,0,0,0.4)",
                  cursor: isCenter ? "default" : "pointer",
                }}
              >
                {/* Photo */}
                <img
                  src={item.img}
                  alt={item.titleLine1}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.28,
                  }}
                />

                {/* Dark Vignette Overlay with Brand Palette */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(13,30,56,0.92) 0%, rgba(13,30,56,0.85) 35%, rgba(9,20,38,0.96) 100%)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                {/* Content Overlay */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    padding: "24px 20px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                    zIndex: 20,
                    opacity: isCenter ? 1 : 0.75,
                    transform: isCenter ? "translateY(0px)" : "translateY(6px)",
                    transition: "opacity 500ms ease, transform 500ms ease",
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  {renderItemContent ? (
                    renderItemContent(item, isCenter)
                  ) : (
                    <>
                      {/* Tag / Badge */}
                      {item.tag && (
                        <div style={{ textAlign: "right", width: "100%", paddingRight: "4px" }}>
                          <span
                            style={{
                              display: "inline-block",
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              color: "#38bdf8",
                              backgroundColor: "rgba(56, 189, 248, 0.15)",
                              border: "1px solid rgba(56, 189, 248, 0.3)",
                              padding: "3px 10px",
                              borderRadius: "9999px",
                            }}
                          >
                            {item.tag}
                          </span>
                        </div>
                      )}

                      {/* Body Content */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "4px",
                          marginTop: "auto",
                          paddingBottom: "4px",
                        }}
                      >
                        <h2
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: 900,
                            letterSpacing: "0.02em",
                            color: "#ffffff",
                            margin: 0,
                            lineHeight: 1.2,
                          }}
                        >
                          {item.titleLine1}
                        </h2>

                        {item.titleLine2 && (
                          <span
                            style={{
                              fontSize: "0.95rem",
                              fontWeight: 700,
                              color: "#7dd3fc",
                              lineHeight: 1.2,
                            }}
                          >
                            {item.titleLine2}
                          </span>
                        )}

                        <div
                          style={{
                            width: "36px",
                            height: "2px",
                            backgroundColor: "#38bdf8",
                            borderRadius: "2px",
                            margin: "6px auto 6px",
                            boxShadow: "0 0 8px rgba(56,189,248,0.7)",
                          }}
                        />

                        {item.desc && (
                          <p
                            style={{
                              fontSize: "0.82rem",
                              color: "rgba(226, 232, 240, 0.95)",
                              maxWidth: "300px",
                              margin: "0 0 10px",
                              lineHeight: 1.35,
                            }}
                          >
                            {item.desc}
                          </p>
                        )}

                        {item.deliverables && item.deliverables.length > 0 && (
                          <div
                            style={{
                              width: "100%",
                              textAlign: "left",
                              marginBottom: "12px",
                              paddingTop: "8px",
                              borderTop: "1px solid rgba(255,255,255,0.1)",
                            }}
                          >
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                              {item.deliverables.slice(0, 2).map((del, dIdx) => (
                                <div key={dIdx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.78rem", color: "#cbd5e1" }}>
                                  <span style={{ color: "#38bdf8", fontWeight: "bold" }}>✓</span>
                                  <span style={{ lineHeight: 1.25 }}>{del}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <a
                          href={item.ctaUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (onCtaClick) {
                              e.preventDefault();
                              onCtaClick(item);
                            }
                          }}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 22px",
                            borderRadius: "9999px",
                            background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                            color: "#ffffff",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            boxShadow: "0 4px 14px rgba(0,0,0,0.3), 0 0 15px rgba(2,132,199,0.35)",
                            cursor: "pointer",
                            transition: "transform 200ms ease, box-shadow 200ms ease",
                          }}
                        >
                          <span>{item.ctaText || "Cotizar"}</span>
                          <ArrowRightIcon />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Anterior servicio"
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(13,30,56,0.75)",
            border: "1px solid rgba(56,189,248,0.3)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            zIndex: 40,
            transition: "all 200ms ease",
          }}
        >
          <ChevronLeftIcon />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Siguiente servicio"
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(13,30,56,0.75)",
            border: "1px solid rgba(56,189,248,0.3)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            zIndex: 40,
            transition: "all 200ms ease",
          }}
        >
          <ChevronRightIcon />
        </button>

        {/* Pagination Dots */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", zIndex: 30 }}>
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Ir al servicio ${idx + 1}`}
              style={{
                height: "8px",
                width: idx === currentIndex ? "28px" : "8px",
                borderRadius: "9999px",
                backgroundColor: idx === currentIndex ? "#0284c7" : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                boxShadow: idx === currentIndex ? "0 0 10px rgba(56,189,248,0.7)" : "none",
                transition: "all 300ms ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const Component = CoverFlowCarousel;
export default CoverFlowCarousel;
