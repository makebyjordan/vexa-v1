"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between mix-blend-difference text-[#ECECEC] pointer-events-auto"
    >
      <div className="text-xl font-medium tracking-tight uppercase hover:opacity-70 transition-opacity cursor-pointer">
        VEXA
      </div>
      
      <nav className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase">
        <a href="#features" className="hover:opacity-70 transition-opacity">Design</a>
        <a href="#ai-core" className="hover:opacity-70 transition-opacity">AI Core</a>
        <a href="#specs" className="hover:opacity-70 transition-opacity">Specs</a>
      </nav>

      <button className="px-5 py-2 uppercase text-xs font-medium tracking-widest rounded-full border border-white/20 glass-hover">
        Pre-order
      </button>
    </motion.header>
  );
}
