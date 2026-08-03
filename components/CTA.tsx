"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  const handleScroll = () => {
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-800/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-400 text-sm font-medium mb-8">
            <Calendar size={14} />
            Sin costo — primera reunión de consultoría
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            ¿Su organización necesita
            <br className="hidden sm:block" />
            <span className="text-gradient"> infraestructura confiable</span>?
          </h2>

          <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
            Conversemos sobre sus desafíos. Diseñamos la solución integral que
            su organización necesita, desde la obra civil hasta la operación continua.
          </p>

          <motion.button
            onClick={handleScroll}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-colors duration-200 shadow-2xl shadow-brand-600/30 text-base"
          >
            Solicitar una reunión
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
