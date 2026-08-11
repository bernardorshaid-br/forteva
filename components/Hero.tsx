"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-800/10 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-5xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Infraestructura · Tecnología · Servicios
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Ejecutamos infraestructura tecnológica crítica para{" "}
            <span className="text-gradient">empresas, gobiernos e integradores.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-white/60 max-w-3xl leading-relaxed mb-10"
          >
            Diseñamos, implementamos y ponemos en operación proyectos de infraestructura tecnológica.
            Integramos networking, WiFi empresarial, Data Centers, cableado estructurado, seguridad
            electrónica e infraestructura física bajo un único equipo de ejecución.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => handleScroll("#contacto")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-xl shadow-brand-600/30 text-sm"
            >
              Solicitar reunión
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              onClick={() => handleScroll("#servicios")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-200 text-sm backdrop-blur-sm"
            >
              <Play size={14} className="fill-white" />
              Ver servicios
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
