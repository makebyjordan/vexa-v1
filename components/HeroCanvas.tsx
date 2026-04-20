"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 120;

const BEATS = [
  { trigger: 0.1, text: "VEXA Vision" },
  { trigger: 0.3, text: "Augmented Reality" },
  { trigger: 0.6, text: "Bionic Architecture" },
  { trigger: 0.9, text: "The Future, Assembled" }
];

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Derived transforms for text overlays
  // Using motion templates or directly mapping in render. We'll map each beat in render.

  // Mock preloader
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Canvas drawing logic
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!canvasRef.current || loading) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // We use a placeholder approach: drawing a color that changes hue based on the frame.
    // In the real version, we would draw the preloaded image for the current frame.
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(latest * TOTAL_FRAMES)
    );

    requestAnimationFrame(() => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate color based on frame. Fog to Obsidian transition or just hue shift.
      // Let's do a smooth gradient representation or dynamic shapes to feel premium.
      const hue = 210; // Blue/grayish
      const saturation = 10;
      const lightness = 90 - (frameIndex / TOTAL_FRAMES) * 80; // Moves towards dark (#0A0A0A)
      
      ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      
      // Draw centered element simulating the glasses
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Scale based on scroll
      const scale = 1 + latest * 0.5;
      const sizeX = 400 * scale;
      const sizeY = 200 * scale;

      ctx.fillRect(0, 0, canvas.width, canvas.height); // Background fill to simulate canvas bounds

      // Abstract shape for "glasses"
      ctx.fillStyle = "#878681"; // Titanium gray
      ctx.beginPath();
      ctx.roundRect(centerX - sizeX/2, centerY - sizeY/2, sizeX/2 - 10, sizeY, 40);
      ctx.roundRect(centerX + 10, centerY - sizeY/2, sizeX/2 - 10, sizeY, 40);
      ctx.fill();

      // Label
      ctx.fillStyle = "#FFF";
      ctx.font = "24px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`Frame ${frameIndex + 1} / ${TOTAL_FRAMES}`, centerX, centerY + sizeY/2 + 40);
    });
  });

  // Setup canvas size
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // High DPI canvas support
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        
        // Initial drawing to prevent blank canvas
        scrollYProgress.set(scrollYProgress.get());
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "400vh" }}>
      {/* Sticky Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#ECECEC]">
        
        {/* Loading State */}
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#ECECEC]"
          >
            <div className="w-12 h-12 border border-[#0A0A0A]/10 border-t-[#0A0A0A] rounded-full animate-spin mb-4" />
            <div className="text-xs font-medium tracking-widest text-[#0A0A0A]">{progress}%</div>
          </motion.div>
        )}

        {/* Canvas */}
        <motion.canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain", opacity: loading ? 0 : 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text Beat Overlays */}
        {BEATS.map((beat, i) => {
          // Calculate individual trigger ranges
          // Beat appears over a 10% scroll window around its trigger point.
          // Example: trigger 0.1 -> appears 0.05 to 0.1, disappears 0.1 to 0.15
          return (
            <OverlayText 
              key={i} 
              text={beat.text} 
              trigger={beat.trigger} 
              scrollYProgress={scrollYProgress} 
            />
          );
        })}
      </div>
    </div>
  );
}

function OverlayText({ text, trigger, scrollYProgress }: { text: string, trigger: number, scrollYProgress: any }) {
  const start = trigger - 0.05;
  const peak = trigger;
  const end = trigger + 0.05;

  const y = useTransform(
    scrollYProgress, 
    [start, peak, end], 
    [20, 0, -20]
  );
  
  const opacity = useTransform(
    scrollYProgress, 
    [start, peak, end], 
    [0, 1, 0]
  );

  const blurRaw = useTransform(
    scrollYProgress, 
    [start, peak, end], 
    [10, 0, 10]
  );

  // useTransform to create a string for the filter
  const filter = useTransform(blurRaw, (b) => `blur(${b}px)`);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ y, opacity, filter }}
    >
      <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-[#0A0A0A] mix-blend-overlay">
        {text}
      </h2>
    </motion.div>
  );
}
