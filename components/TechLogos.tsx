"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { name: "Cisco",          src: "/logos/cisco.svg" },
  { name: "Cisco Meraki",   src: "/logos/meraki.svg" },
  { name: "Fortinet",       src: "/logos/fortinet.svg" },
  { name: "Aruba",          src: "/logos/aruba.svg" },
  { name: "HPE",            src: "/logos/hpe.svg" },
  { name: "Dell",           src: "/logos/dell.svg" },
  { name: "Hikvision",      src: "/logos/hikvision.svg" },
  { name: "Palo Alto",      src: "/logos/paloalto.svg" },
];

export default function TechLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10"
        >
          Tecnologías con las que trabajamos
        </motion.p>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain max-w-[120px]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
