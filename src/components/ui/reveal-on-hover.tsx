"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CardHoverRevealContextValue {
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  isTouchDevice: boolean;
}

const CardHoverRevealContext = React.createContext<CardHoverRevealContextValue>(
  {} as CardHoverRevealContextValue
);

const useCardHoverRevealContext = () => {
  const context = React.useContext(CardHoverRevealContext);
  if (!context) {
    throw new Error(
      "useCardHoverRevealContext must be used within a CardHoverRevealProvider"
    );
  }
  return context;
};

const CardHoverReveal = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, onClick, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState<boolean>(false);

  React.useEffect(() => {
    const checkTouch = () => {
      const hasNoFinePointer = typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const isMobileWidth = typeof window !== 'undefined' && window.innerWidth < 1024;
      setIsTouchDevice(hasNoFinePointer || isMobileWidth);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const isInteractive = target.closest('a, button, input, select, textarea');

    // If card is already revealed and user clicked an actionable link/button, let it navigate
    if (isInteractive && isHovered) {
      onClick?.(e);
      return;
    }

    // On touch devices or mobile widths, clicking toggles the card reveal state
    if (isTouchDevice || (typeof window !== 'undefined' && window.innerWidth < 1024)) {
      setIsHovered((prev) => !prev);
    }

    onClick?.(e);
  };

  return (
    <CardHoverRevealContext.Provider
      value={{
        isHovered,
        setIsHovered,
        isTouchDevice,
      }}
    >
      <div
        ref={ref}
        data-revealed={isHovered ? "true" : "false"}
        className={cn(
          "relative overflow-hidden cursor-pointer select-none group",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...props}
      />
    </CardHoverRevealContext.Provider>
  );
});
CardHoverReveal.displayName = "CardHoverReveal";

interface CardHoverRevealMainProps {
  initialScale?: number;
  hoverScale?: number;
}

const CardHoverRevealMain = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardHoverRevealMainProps
>(({ className, initialScale = 1, hoverScale = 1.05, ...props }, ref) => {
  const { isHovered } = useCardHoverRevealContext();
  return (
    <div
      ref={ref}
      className={cn("size-full transition-transform duration-300", className)}
      style={
        isHovered
          ? { transform: `scale(${hoverScale})`, ...props.style }
          : { transform: `scale(${initialScale})`, ...props.style }
      }
      {...props}
    />
  );
});
CardHoverRevealMain.displayName = "CardHoverRevealMain";

const CardHoverRevealContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => {
  const { isHovered } = useCardHoverRevealContext();
  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-[auto_1.25rem_1.25rem] sm:inset-[auto_1.5rem_1.5rem] p-5 sm:p-6 backdrop-blur-lg transition-all duration-500 ease-in-out z-20",
        className
      )}
      style={{
        translate: isHovered ? "0% 0%" : "0% 120%",
        opacity: isHovered ? 1 : 0,
        pointerEvents: isHovered ? "auto" : "none",
        ...style,
      }}
      {...props}
    />
  );
});
CardHoverRevealContent.displayName = "CardHoverRevealContent";

export { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent, useCardHoverRevealContext };

