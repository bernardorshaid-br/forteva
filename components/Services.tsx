"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Network, ShieldAlert, Lock, HardHat, Headphones, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Infraestructura Tecnológica",
    description:
      "Diseño, implementación y mantenimiento de redes LAN/WAN, WiFi empresarial, Data Centers, cableado estructurado, switching, routing, SD-WAN y backbone de fibra óptica. Soluciones Cisco, Meraki, Aruba, Fortinet, HPE y Dell.",
    tag: "Networking & IT",
    items: ["Redes LAN / WAN / WiFi", "Data Centers & Micro DC", "Fibra óptica & cobre", "Servidores & Storage"],
  },
  {
    icon: ShieldAlert,
    title: "Seguridad Electrónica",
    description:
      "Protección integral de personas, edificios e infraestructura crítica. CCTV con video analytics e IA, reconocimiento facial, LPR, control de accesos, biometría, alarmas, detección de incendios y centros de monitoreo.",
    tag: "Seguridad Física",
    items: ["CCTV & Video Analytics", "Control de accesos", "Detección de incendios", "Centros de monitoreo"],
  },
  {
    icon: Lock,
    title: "Ciberseguridad",
    description:
      "Protección de la infraestructura digital y continuidad operativa. Auditorías, pentesting, Zero Trust, SIEM, SOC, endpoint security, seguridad cloud, respuesta ante incidentes y cumplimiento normativo ISO 27001.",
    tag: "Cyber",
    items: ["Auditorías & Pentesting", "Zero Trust & SIEM", "SOC & Respuesta ante incidentes", "ISO 27001 & Backup"],
  },
  {
    icon: HardHat,
    title: "Infraestructura y Construcción",
    description:
      "Obras civiles y adecuaciones edilicias para proyectos tecnológicos. Salas técnicas, pisos técnicos, canalizaciones, instalaciones eléctricas, climatización HVAC, grupos electrógenos y construcción de Data Centers.",
    tag: "Obra Civil",
    items: ["Salas técnicas & Data Centers", "Instalaciones eléctricas", "Climatización HVAC", "Obra pública & edilicia"],
  },
  {
    icon: Headphones,
    title: "Servicios Administrados",
    description:
      "Operación continua de la infraestructura de nuestros clientes. Mesa de ayuda, NOC & SOC, monitoreo 7×24, gestión de incidentes y cambios, mantenimiento preventivo/correctivo, field services y despliegues nacionales.",
    tag: "Managed Services",
    items: ["NOC & SOC 7×24", "Mesa de ayuda & Field Services", "Mantenimiento preventivo", "SLA & Operación tercerizada"],
  },
  {
    icon: Network,
    title: "Proyectos Llave en Mano",
    description:
      "Integramos disciplinas que normalmente se contratan por separado: desde la obra civil hasta la puesta en funcionamiento de toda la infraestructura tecnológica. Un único responsable, menor complejidad, mejor calidad de ejecución.",
    tag: "Integración Total",
    items: ["Relevamiento & Ingeniería", "Diseño & Planificación", "Implementación & Documentación", "Operación & Mejora continua"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 text-brand-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-brand-600" />
            Servicios
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 leading-tight max-w-xl">
              Cinco unidades de negocio,{" "}
              <span className="text-brand-600">una sola empresa</span>
            </h2>
            <p className="text-gray-500 max-w-sm lg:text-right leading-relaxed">
              Integramos infraestructura física, tecnología y servicios administrados
              en soluciones llave en mano con foco en disponibilidad y eficiencia.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/0 group-hover:from-brand-50/50 group-hover:to-white transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-600 flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon size={22} className="text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <span className="inline-block text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
                  {service.tag}
                </span>

                <h3 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-brand-700 transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-1 mb-6">
                  {service.items.map((item, ii) => (
                    <li key={ii} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-brand-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-brand-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Saber más
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
