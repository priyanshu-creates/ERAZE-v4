"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlight?: boolean;
  spotlightColor?: string;
  spotlightSize?: string;
  spotlightIntensity?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  backgroundColor?: string;
  className?: string;
  children: React.ReactNode;
}

const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  (
    {
      spotlight = true,
      spotlightColor = "rgba(127, 226, 0, 0.7)", // Changed to variation of #7fe200
      spotlightSize = "100px", // Reduced size from 150px to 100px
      spotlightIntensity = "50px", // Reduced blur from 80px to 50px for sharper effect
      borderRadius = "25px",
      borderWidth = "1px",
      borderColor = "rgba(255, 255, 255, 0.1)",
      backgroundColor = "transparent",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref) return;
      
      const rect = (ref as React.RefObject<HTMLDivElement>).current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => {
      setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          className
        )}
        style={{
          borderRadius,
          border: `${borderWidth} solid ${borderColor}`,
          backgroundColor,
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15)`,
          width: "372px",
          height: "370px",
          ...props.style,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {spotlight && isMouseOver && (
          <div
            className="absolute pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${spotlightColor}, transparent)`,
              width: spotlightSize,
              height: spotlightSize,
              left: mousePosition.x - parseInt(spotlightSize) / 2,
              top: mousePosition.y - parseInt(spotlightSize) / 2,
              filter: `blur(${spotlightIntensity})`,
              opacity: 0.8,
              transition: "opacity 0.2s ease",
            }}
          />
        )}
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
          {children}
        </div>
      </div>
    );
  }
);

SpotlightCard.displayName = "SpotlightCard";

export { SpotlightCard, type SpotlightCardProps };