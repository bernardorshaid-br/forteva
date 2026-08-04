"use client";

import { motion } from "framer-motion";
import { Layers, Target, TrendingUp, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Integración completa",
    subtitle: "Un socio, todo el proyecto",
    description:
      "Combinamos infraestructura física, tecnología e IT y servicios administrados en una única empresa. Integramos disciplinas que normalmente se contratan por separado, eliminando fragmentación y problemas de coordinación entre proveedores.",
    features: [
      "Desde la obra civil hasta la puesta en marcha",
      "Un único responsable del proyecto",
      "Menor complejidad para el cliente",
    ],
  },
  {
    icon: Target,
    title: "Metodología sólida",
    subtitle: "Proceso estandarizado",
    description:
      "Cada proyecto sigue un proceso claro: relevamiento, diagnóstico, ingeniería, diseño, planificación, implementación, documentación, puesta en marcha y soporte. Esto garantiza previsibilidad, calidad y trazabilidad en todas las etapas.",
    features: [
      "Documentación técnica completa",
      "Trazabilidad en cada etapa",
      "Mejora continua incorporada al proceso",
    ],
  },
  {
    icon: TrendingUp,
    title: "Visión de largo plazo",
    subtitle: "Socios estratégicos",
    description:
      "Nuestro objetivo es construir relaciones duraderas. No buscamos proyectos puntuales — buscamos acompañar a cada cliente desde el diseño inicial hasta la evolución permanente de su infraestructura mediante contratos de operación y soporte.",
    features: [
      "Mayor velocidad de implementación",
      "Menores costos de coordinación",
      "Mayor disponibilidad operativa",
    ],
  },
];

const values = [
  "Compromiso", "Excelencia técnica", "Transparencia",
  "Innovación", "Calidad", "Seguridad",
  "Profesionalismo", "Mejora continua", "Orientación al cliente",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-brand-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-brand-600" />
            ¿Por qué FORTEVA?
            <span className="w-8 h-0.5 bg-brand-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 leading-tight mb-4">
            No somos un proveedor de productos.
            <br className="hidden sm:block" />
            <span className="text-brand-600"> Somos un integrador de soluciones.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Diseñamos soluciones integrales que van desde la obra civil
            hasta la operación continua de la infraestructura — con un único responsable
            y foco total en disponibilidad, eficiencia y escalabilidad.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group">
              <div className="h-full bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300">
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                  <pillar.icon size={22} className="text-white" />
                </div>
                <div className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-1">
                  {pillar.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-brand-600 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 px-8 bg-gray-50 rounded-2xl border border-gray-100"
        >
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Nuestros valores
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {values.map((v) => (
              <span
                key={v}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-full hover:border-brand-300 hover:text-brand-700 transition-colors duration-200"
              >
                {v}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 py-8 px-8 bg-gray-50 rounded-2xl border border-gray-100"
        >
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Tecnologías con las que trabajamos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            {["Cisco", "Cisco Meraki", "Aruba", "Fortinet", "HPE", "Dell", "Lenovo", "Ubiquiti", "VMware", "Mikrotik"].map((brand) => (
              <span
                key={brand}
                className="text-gray-300 font-bold text-sm tracking-wide hover:text-gray-500 transition-colors duration-200"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
