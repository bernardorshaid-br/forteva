"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  servicios: [
    "Infraestructura Tecnológica",
    "Seguridad Electrónica",
    "Ciberseguridad",
    "Infraestructura Física",
    "Servicios Administrados",
    "Proyectos Llave en Mano",
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Trabajá con nosotros", href: "mailto:ventas@forteva.com.ar?subject=Quiero%20trabajar%20en%20FORTEVA" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export default function Footer() {
  const handleScroll = (href: string) => {
    if (href.startsWith("mailto:")) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 border-b border-white/10">
          {/* Brand */}
          <div className="">
            <div className="mb-5">
              <Image
                src="/logo-forteva.png"
                alt="FORTEVA"
                width={180}
                height={60}
                className="object-contain h-12 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Diseñamos, implementamos y operamos infraestructura tecnológica crítica
              para empresas, gobiernos e integradores.
            </p>
            <motion.a
              href="mailto:ventas@forteva.com.ar"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-600 flex items-center justify-center transition-colors duration-200 inline-flex"
            >
              <Mail size={16} />
            </motion.a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScroll("#servicios")}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 text-left flex items-center gap-1 group"
                  >
                    {item.label}
                    {item.href.startsWith("mailto:") && (
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span>© {new Date().getFullYear()} FORTEVA. Todos los derechos reservados.</span>
          <div className="flex items-center gap-6">
            <button className="hover:text-white/60 transition-colors duration-200">
              Política de privacidad
            </button>
            <button className="hover:text-white/60 transition-colors duration-200">
              Términos de servicio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
