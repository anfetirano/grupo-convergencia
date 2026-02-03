"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function VantaCdnBg() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const init = () => {
      if (!containerRef.current) return;
      if ((window as any).VANTA && (window as any).VANTA.NET) {
        (window as any).VANTA.NET({
          el: containerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.25,
          scaleMobile: 1.0,
          backgroundColor: 0x020b14,
          color: 0x1f4b7a,
          points: 10,
          maxDistance: 22,
          spacing: 18,
        });
      }
    };

    const id = setInterval(() => {
      if ((window as any).VANTA) {
        clearInterval(id);
        init();
      }
    }, 100);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        strategy="beforeInteractive"
      />
      <div ref={containerRef} className="absolute inset-0 z-0" />
    </>
  );
}