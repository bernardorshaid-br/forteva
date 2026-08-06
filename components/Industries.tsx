"use client";

import { motion } from "framer-motion";
import { Landmark, Building2, GraduationCap, HeartPulse, Factory, Zap } from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Gobierno",
    description:
      "Organismos nacionales, provinciales y municipales. Obra pública, infraestructura escolar y hospitalaria, redes gubernamentales y centros de comando y monitoreo.",
    lightBg: "bg-blue-50",
    lightIcon: "text-blue-600",
    accent: "bg-blue-600",
  },
  {
    icon: Building2,
    title: "Empresas",
    description:
      "Grandes corporaciones, bancos, retail, logística y constructoras. Infraestructura tecnológica escalable, seguridad electrónica y servicios administrados con SLA.",
    lightBg: "bg-indigo-50",
    lightIcon: "text-indigo-600",
    accent: "bg-indigo-600",
  },
  {
    icon: GraduationCap,
    title: "Educación",
    description:
      "Universidades y colegios. Conectividad de campus, WiFi de alta densidad, laboratorios tecnológicos, cableado estructurado e infraestructura edilicia.",
    lightBg: "bg-violet-50",
    lightIcon: "text-violet-600",
    accent: "bg-violet-600",
  },
  {
    icon: HeartPulse,
    title: "Salud",
    description:
      "Hospitales y clínicas. Infraestructura crítica de alta disponibilidad, seguridad electrónica, ciberseguridad y continuidad operativa sin tolerancia a fallos.",
    lightBg: "bg-sky-50",
    lightIcon: "text-sky-600",
    accent: "bg-sky-600",
  },
  {
    icon: Factory,
    title: "Industria",
    description:
      "Plantas industriales, utilities y operadores de telecomunicaciones. Redes industriales, automatización, climatización HVAC, instalaciones eléctricas y grupos electrógenos.",
    lightBg: "bg-amber-50",
    lightIcon: "text-amber-600",
    accent: "bg-amber-600",
  },
  {
    icon: Zap,
    title: "Energía & Oil&Gas",
    description:
      "Empresas de energía, petróleo y gas. Infraestructura para entornos críticos, media y baja tensión, sistemas UPS, comunicaciones industriales y seguridad perimetral.",
    lightBg: "bg-orange-50",
    lightIcon: "text-orange-600",
    accent: "bg-orange-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Industries() {
  return (
    <section id="industrias" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-brand-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-brand-600" />
            Sectores
            <span className="w-8 h-0.5 bg-brand-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 leading-tight mb-4">
            Ejecutamos proyectos de infraestructura
            <br className="hidden sm:block" />
            <span className="text-brand-600"> en los sectores que más lo necesitan.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Entendemos los desafíos de cada sector y ofrecemos soluciones
            de infraestructura que generan impacto real en la operación.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${industry.lightBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon size={26} className={industry.lightIcon} />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-brand-700 transition-colors duration-200">
                {industry.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {industry.description}
              </p>
              <div className={`mt-6 h-1 w-0 group-hover:w-12 ${industry.accent} rounded-full transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
