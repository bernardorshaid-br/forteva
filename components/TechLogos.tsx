"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const logos = [
  { name: "Cisco", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/320px-Cisco_logo_blue_2016.svg.png" },
  { name: "Cisco Meraki", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Meraki_Logo.svg/320px-Meraki_Logo.svg.png" },
  { name: "Fortinet", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fortinet_logo.svg/320px-Fortinet_logo.svg.png" },
  { name: "Aruba Networks", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aruba_Networks_logo.svg/320px-Aruba_Networks_logo.svg.png" },
  { name: "HPE", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hewlett_Packard_Enterprise_logo.svg/320px-Hewlett_Packard_Enterprise_logo.svg.png" },
  { name: "Dell Technologies", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/320px-Dell_Logo.png" },
  { name: "Hikvision", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Hikvision_logo.svg/320px-Hikvision_logo.svg.png" },
  { name: "Palo Alto Networks", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Palo_Alto_Networks_2020_Logo.svg/320px-Palo_Alto_Networks_2020_Logo.svg.png" },
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
                className="h-8 w-auto object-contain max-w-[110px]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
