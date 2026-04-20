"use client";

import { motion } from "framer-motion";

export function Features() {
  return (
    <section id="features" className="w-full py-32 px-8 flex flex-col items-center justify-center bg-[#ECECEC] text-black">
      <div className="max-w-6xl w-full">
        <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-20 text-center">
          La inteligencia artificial <br /> que ve lo que tú ves.
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "IA Contextual",
              desc: "Nuestras nuevas gafas VEXA entienden tu entorno y proyectan información predictiva en tiempo real sobre tu campo de visión."
            },
            {
              title: "Audio Espacial Integrado",
              desc: "Tecnología de conducción ósea para interactuar con tu asistente de IA sin que nadie más pueda escucharlo."
            },
            {
              title: "Confort Todo el Día",
              desc: "Montura de titanio aeroespacial de solo 35 gramos. Las gafas inteligentes más ligeras del mercado."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-black/5 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-black/10 mb-6 flex items-center justify-center">
                 {/* Icon placeholder */}
                 <div className="w-4 h-4 bg-black rounded-full" />
              </div>
              <h4 className="text-2xl font-medium tracking-tight mb-3 text-black/90">{feature.title}</h4>
              <p className="text-black/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="ai-core" className="w-full py-32 px-8 bg-black text-[#ECECEC] flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            El núcleo neuronal.
          </h3>
          <p className="text-xl text-[#ECECEC]/60 mb-10 leading-relaxed">
            Las nuevas VEXA procesan datos visuales directamente en el chip de las gafas sin depender de la nube. 
            Gracias a nuestra IA integrada, identifican objetos, traducen texto en vivo y analizan el entorno en milisegundos.
          </p>
          <button className="px-6 py-3 bg-white text-black font-medium tracking-tight rounded-full hover:scale-105 transition-transform">
            Reservar Ahora
          </button>
        </div>
        <div className="flex-1 w-full aspect-square bg-[#ECECEC]/10 rounded-full flex items-center justify-center relative overflow-hidden">
          {/* Abstract visualization of the neural core processing */}
          <div className="absolute w-[150%] h-[150%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,transparent_30%,rgba(236,236,236,0.2)_50%,transparent_70%)]" />
          <div className="w-1/2 h-1/2 rounded-full bg-[#ECECEC]/20 backdrop-blur-3xl absolute" />
        </div>
      </div>
    </section>
  );
}

export function Specs() {
  return (
    <section id="specs" className="w-full py-32 px-8 bg-[#ECECEC] text-black">
      <div className="max-w-6xl mx-auto flex flex-col">
        <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-20">
          Especificaciones <br className="hidden md:block"/> sin concesiones.
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 border-t border-black/10 pt-12">
          {[
            { label: "Display", value: "Micro-OLED 4K" },
            { label: "Weight", value: "35 Grams" },
            { label: "Battery", value: "18 Hours" },
            { label: "Connectivity", value: "Wi-Fi 7 & 5G" },
            { label: "Processor", value: "VEXA N1 Chip" },
            { label: "Camera", value: "12MP Ultra-wide" },
            { label: "Audio", value: "Bone Conduction" },
            { label: "Sensors", value: "LiDAR & Gyro" }
          ].map((spec, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-sm font-medium text-black/40 uppercase tracking-widest mb-2">{spec.label}</span>
              <span className="text-2xl md:text-3xl font-medium tracking-tight text-black/90">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="w-full py-32 px-8 bg-[#ECECEC] text-black flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 leading-tight">
          "Las nuevas gafas VEXA no son solo tecnología. Son el punto exacto donde la IA se vuelve verdaderamente invisible para el ser humano."
        </h3>
        <p className="text-sm uppercase tracking-widest font-medium text-black/40 mb-2">Tech.Review</p>
      </div>
      
      <div className="flex gap-4 mt-16 max-w-6xl w-full justify-center flex-wrap">
        {/* Placeholder Logos */}
        {['WIRED', 'THE VERGE', 'FORBES', 'GQ'].map((logo, i) => (
          <div key={i} className="px-8 py-4 opacity-30 text-xl font-bold tracking-widest uppercase">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="w-full py-40 px-8 bg-black text-[#ECECEC] flex flex-col items-center justify-center text-center">
      <h2 className="text-5xl md:text-8xl font-medium tracking-tighter mb-8">
        El Futuro, Ensamblado.
      </h2>
      <p className="text-xl md:text-2xl text-[#ECECEC]/60 mb-12 max-w-2xl font-light">
        Únete al grupo exclusivo de fundadores y experimenta la inteligencia artificial directamente en tus ojos. Unidades estrictamente limitadas.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <button className="px-10 py-5 bg-[#ECECEC] text-black rounded-full font-medium tracking-tight text-lg hover:scale-105 transition-transform">
          Reserva las VEXA AI • $999
        </button>
        <span className="text-sm text-[#ECECEC]/40 mt-4 md:mt-0 md:ml-4">Envío estimado T4 2026</span>
      </div>
    </section>
  );
}
