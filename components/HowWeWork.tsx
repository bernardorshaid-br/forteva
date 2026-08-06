"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Relevamiento", desc: "Analizamos las necesidades técnicas y operativas del proyecto." },
  { n: "02", title: "Ingeniería", desc: "Diseñamos la solución y planificamos la ejecución en detalle." },
  { n: "03", title: "Planificación", desc: "Coordinamos recursos, cronograma y logística de implementación." },
  { n: "04", title: "Implementación", desc: "Desplegamos la infraestructura siguiendo estándares de calidad." },
  { n: "05", title: "Puesta en Marcha", desc: "Validamos el funcionamiento integral de la solución entregada." },
  { n: "06", title: "Documentación", desc: "Entregamos planos, configuraciones y documentación técnica completa." },
  { n: "07", title: "Soporte", desc: "Acompañamos la operación y el mantenimiento de la infraestructura." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
            Metodología
            <span className="w-8 h-0.5 bg-brand-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 leading-tight mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Un proceso estandarizado que garantiza trazabilidad, calidad y previsibilidad en cada proyecto.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-brand-400 to-brand-200 -translate-x-1/2" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`relative flex items-center gap-8 lg:gap-0 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-row mb-6 lg:mb-0`}
                >
                  {/* Card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}`}>
                    <div className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-brand-100 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:flex-row-reverse lg:justify-start" : ""}`}>
                        <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full tracking-widest">
                          {step.n}
                        </span>
                        <h3 className="text-lg font-bold text-navy-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-2/12 justify-center items-center">
                    <div className="w-4 h-4 rounded-full bg-brand-600 border-4 border-white shadow-md shadow-brand-200 z-10" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
