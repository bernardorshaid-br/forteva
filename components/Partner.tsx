"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Server, Wifi, Wrench, HardHat, FileCheck, ArrowRight } from "lucide-react";

const capabilities = [
  { icon: Network, label: "Networking" },
  { icon: Server, label: "Data Centers" },
  { icon: Wifi, label: "WiFi Empresarial" },
  { icon: Wrench, label: "Field Services" },
  { icon: HardHat, label: "Infraestructura Física" },
  { icon: FileCheck, label: "Documentación y Puesta en Marcha" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Partner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-0.5 bg-brand-500" />
              Integradores
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Partner de implementación<br className="hidden sm:block" />
              <span className="text-gradient"> para grandes integradores.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-4">
              FORTEVA acompaña a integradores tecnológicos y contratistas principales en la
              ejecución de proyectos de infraestructura.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Nos integramos como equipo de implementación para despliegues nacionales,
              renovaciones tecnológicas, migraciones, ampliaciones y soporte en campo.
            </p>
            <motion.button
              onClick={() => {
                const el = document.querySelector("#contacto");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-xl shadow-brand-600/30 text-sm"
            >
              Conversemos
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Right — capability grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-brand-500/30 transition-all duration-300 flex flex-col items-center text-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                  <cap.icon size={20} className="text-brand-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-white/80 text-sm font-medium leading-snug">{cap.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
