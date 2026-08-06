"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Network, ShieldAlert, Lock, HardHat, Headphones, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Infraestructura Tecnológica",
    description:
      "Nuestra especialidad central. Diseñamos e implementamos redes LAN/WAN, WiFi empresarial, Data Centers, cableado estructurado, switching, routing, SD-WAN y backbone de fibra óptica. Integramos soluciones Cisco, Meraki, Aruba, Fortinet, HPE y Dell.",
    tag: "Core",
    items: ["Redes LAN / WAN / WiFi", "Data Centers & Micro DC", "Fibra óptica & cableado estructurado", "Servidores & Storage"],
  },
  {
    icon: HardHat,
    title: "Infraestructura Física",
    description:
      "Capacidad civil para ejecutar proyectos tecnológicos de forma integral. Salas técnicas, pisos técnicos, canalizaciones, instalaciones eléctricas, climatización HVAC y grupos electrógenos.",
    tag: "Obra Civil",
    items: ["Salas técnicas & Data Centers", "Instalaciones eléctricas", "Climatización HVAC", "Obra pública & edilicia"],
  },
  {
    icon: ShieldAlert,
    title: "Seguridad Electrónica",
    description:
      "Protección física de instalaciones e infraestructura crítica. CCTV con video analytics, reconocimiento facial, LPR, control de accesos, biometría, alarmas y detección de incendios.",
    tag: "Seguridad Física",
    items: ["CCTV & Video Analytics", "Control de accesos", "Detección de incendios", "Centros de monitoreo"],
  },
  {
    icon: Lock,
    title: "Ciberseguridad",
    description:
      "Protección digital como componente del proyecto integral. Auditorías, pentesting, Zero Trust, SIEM, SOC, endpoint security, respuesta ante incidentes y cumplimiento normativo ISO 27001.",
    tag: "Cyber",
    items: ["Auditorías & Pentesting", "Zero Trust & SIEM", "SOC & Respuesta ante incidentes", "ISO 27001 & Backup"],
  },
  {
    icon: Headphones,
    title: "Servicios Administrados",
    description:
      "Continuidad operativa una vez ejecutado el proyecto. Mesa de ayuda, NOC & SOC 7×24, monitoreo, gestión de incidentes, mantenimiento preventivo/correctivo y field services con SLA definidos.",
    tag: "Operación",
    items: ["NOC & SOC 7×24", "Mesa de ayuda & Field Services", "Mantenimiento preventivo", "SLA & Operación tercerizada"],
  },
  {
    icon: Layers,
    title: "Proyectos Llave en Mano",
    description:
      "Integramos todas las capacidades anteriores bajo un único equipo de trabajo. Desde el relevamiento hasta la puesta en marcha y el soporte continuo. Un responsable, un contrato, un resultado.",
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-brand-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-brand-600" />
            Capacidades
            <span className="w-8 h-0.5 bg-brand-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 leading-tight mb-4">
            Infraestructura tecnológica como especialidad.
            <br className="hidden sm:block" />
            <span className="text-brand-600"> Todo lo demás, para ejecutar proyectos integrales.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            La obra civil, la seguridad y los servicios administrados no son negocios separados — son capacidades complementarias que nos permiten entregar proyectos completos sin depender de terceros.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative group h-full"
            >
              <div className="h-full bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300">
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                    <svc.icon size={22} className="text-white" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    i === 0
                      ? "bg-brand-50 text-brand-700 border border-brand-200"
                      : "bg-gray-50 text-gray-500 border border-gray-100"
                  }`}>
                    {svc.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{svc.description}</p>
                <ul className="space-y-2 mb-6">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 text-brand-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver más <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
