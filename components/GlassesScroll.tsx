"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 192; // Based on local files 00001.png -> 00192.png

// Utility to generate image paths
const getImagePath = (index: number) => {
  const paddedIndex = String(index).padStart(5, '0');
  return `/secuencia gafas/${paddedIndex}.jpg`;
};

export default function GlassesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingCounter, setLoadingCounter] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getImagePath(i);
      img.onload = () => {
        loadedCount++;
        setLoadingCounter(loadedCount);
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, []);

  // Frame updating logic
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || !canvasRef.current) return;
    
    const context = canvasRef.current.getContext("2d");
    if (!context) return;
    
    // Map latest (0 to 1) to (1 to TOTAL_FRAMES)
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * TOTAL_FRAMES))
    );
    
    requestAnimationFrame(() => {
      const img = images[frameIndex];
      if (!img || !img.complete) return;
      
      const canvas = canvasRef.current!;
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // We want object-fit: contain logic to draw image perfectly inside canvas
      const canvasAspectRatio = canvas.width / canvas.height;
      const imageAspectRatio = img.width / img.height;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (imageAspectRatio > canvasAspectRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imageAspectRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imageAspectRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }
      
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    });
  });

  // Initial draw + Canvas resize logic
  useEffect(() => {
    if (!isLoaded) return;
    
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      // High DPI screens
      const dpr = window.devicePixelRatio || 1;
      canvasRef.current.width = window.innerWidth * dpr;
      canvasRef.current.height = window.innerHeight * dpr;
      
      // Force trigger draw to repopulate
      scrollYProgress.set(scrollYProgress.get());
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "400vh" }}>
      
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent">
        
        {/* Loading overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#ECECEC]">
            <div className="w-8 h-8 rounded-full border-2 border-black/10 border-t-black/90 animate-spin mb-4" />
            <p className="text-sm text-black/60 tracking-tight">
              Loading VEXA sequence... {Math.round((loadingCounter / TOTAL_FRAMES) * 100)}%
            </p>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.6s ease" }}
        />

        {/* Logo at the end of the sequence (appears at 90% scroll) */}
        {isLoaded && (
          <LogoOverlay scrollYProgress={scrollYProgress} />
        )}
      </div>
    </div>
  );
}

function LogoOverlay({ scrollYProgress }: { scrollYProgress: any }) {
  // Fades in from 0 to 1 between 90% and 100% of the scroll
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  // Slight upward movement as it fades in
  const y = useTransform(scrollYProgress, [0.9, 1], [20, 0]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ opacity, y }}
    >
      <img 
        src="/vexa-background.png" 
        alt="VEXA Final" 
        className="w-full h-full object-cover mix-blend-darken"
      />
    </motion.div>
  );
}


