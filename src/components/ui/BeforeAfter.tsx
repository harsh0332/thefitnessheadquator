"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string; // e.g. "aspect-[4/3]" or "aspect-video"
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  aspectRatio = "aspect-[16/10]",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl border border-white/10 shadow-2xl select-none cursor-ew-resize`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Before Image (Bottom Layer) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={beforeImage}
          alt="Before Transformation"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none filter brightness-90 grayscale-[30%]"
          priority
        />
        {/* Before Label (Pill bottom-left) */}
        <div className="absolute bottom-4 left-4 px-3 py-1 text-xs font-display font-black tracking-widest text-light glass rounded-full z-10">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Top Layer, clipped) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* We keep the image full size inside the clipped container */}
        <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}>
          <Image
            src={afterImage}
            alt="After Transformation"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover pointer-events-none filter brightness-100"
          />
        </div>
        {/* After Label (Pill bottom-right, must stay in position) */}
        <div className="absolute bottom-4 left-4 px-3 py-1 text-xs font-display font-black tracking-widest text-brand-red bg-white/95 rounded-full z-10 shadow-lg whitespace-nowrap">
          {afterLabel}
        </div>
      </div>

      {/* Slide Handle/Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-brand-red cursor-ew-resize z-20 shadow-[0_0_10px_rgba(225,29,42,0.8)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slide Indicator Ball */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-xl border border-white/20 hover:scale-110 active:scale-95 transition-transform z-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="8 18 2 12 8 6" />
            <polyline points="16 6 22 12 16 18" />
          </svg>
        </div>
      </div>
    </div>
  );
};
