"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Network, HardHat, Shield, Wrench } from "lucide-react";

const blocks = [
  {
    icon: Network,
    title: "Infraestructura Tecnológica",
    description: "Networking, WiFi, Data Centers, cableado estructurado y fibra óptica.",
  },
  {
    icon: HardHat,
    title: "Infraestructura Física",
    description: "Salas técnicas, canalizaciones, instalaciones eléctricas y adecuaciones edilicias.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Seguridad electrónica y ciberseguridad para proteger activos físicos y digitales.",
  },
  {
    icon: Wrench,
    title: "Operación",
    description: "Field Services, mantenimiento, soporte técnico y operación continua.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-brand-500" />
            ¿Qué hacemos?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ejecución integral de proyectos<br className="hidden sm:block" />
            <span className="text-gradient"> de infraestructura tecnológica.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-4">
            FORTEVA ejecuta proyectos de infraestructura tecnológica de punta a punta.
            Acompañamos a organizaciones públicas, empresas privadas e integradores tecnológicos
            en el diseño, implementación y puesta en marcha de soluciones críticas para su operación.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            Integramos infraestructura física y tecnológica bajo un único equipo de trabajo,
            reduciendo la complejidad del proyecto y garantizando una ejecución coordinada.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                <block.icon size={22} className="text-brand-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{block.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{block.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
