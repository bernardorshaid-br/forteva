"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Zap, ClipboardList, ArrowLeftRight } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Un único responsable",
    description:
      "Coordinamos infraestructura física y tecnológica bajo un mismo equipo. Sin fragmentación de proveedores ni pérdida de información entre partes.",
  },
  {
    icon: Zap,
    title: "Capacidad de ejecución",
    description:
      "Participamos en proyectos de distinta escala con metodologías de trabajo estandarizadas que garantizan calidad y trazabilidad en cada etapa.",
  },
  {
    icon: ClipboardList,
    title: "Metodología",
    description:
      "Cada proyecto sigue un proceso claro: planificación, implementación, documentación y soporte. Previsibilidad en plazos, costos y entregables.",
  },
  {
    icon: ArrowLeftRight,
    title: "Flexibilidad",
    description:
      "Trabajamos tanto con clientes finales como con grandes integradores tecnológicos. Nos adaptamos al modelo de ejecución que requiere cada proyecto.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function WhyForteva() {
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-brand-500" />
            Diferencial
            <span className="w-8 h-0.5 bg-brand-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            ¿Por qué <span className="text-gradient">FORTEVA?</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            No somos un proveedor de productos. Somos un equipo de ejecución especializado en proyectos de infraestructura tecnológica.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                <card.icon size={22} className="text-brand-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
