"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { LogoIcon } from "./Logo";

const footerLinks = {
  servicios: [
    "Infraestructura Tecnológica",
    "Seguridad Electrónica",
    "Ciberseguridad",
    "Infraestructura y Construcción",
    "Servicios Administrados",
    "Proyectos Llave en Mano",
  ],
  empresa: [
    "Nosotros",
    "Casos de éxito",
    "Trabajá con nosotros",
    "Contacto",
  ],
  contacto: [
    "info@forteva.com.ar",
    "+54 11 1234-5678",
    "Buenos Aires, Argentina",
  ],
};

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <LogoIcon size={30} />
              <span className="font-bold text-xl tracking-wide">FORTEVA</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Diseñamos, construimos, operamos y protegemos infraestructura crítica
              para organizaciones públicas y privadas.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://linkedin.com/company/forteva"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-600 flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin size={16} />
              </motion.a>
              <motion.a
                href="mailto:info@forteva.com.ar"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-600 flex items-center justify-center transition-colors duration-200"
              >
                <Mail size={16} />
              </motion.a>
            </div>
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
              {footerLinks.empresa.map((item, i) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      handleScroll(i === 3 ? "#contacto" : "#nosotros")
                    }
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Contacto
            </h4>
            <ul className="space-y-3">
              {footerLinks.contacto.map((item) => (
                <li key={item} className="text-sm text-white/60">
                  {item}
                </li>
              ))}
            </ul>
            <motion.button
              onClick={() => handleScroll("#contacto")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-medium transition-colors duration-200"
            >
              Enviar mensaje
              <ArrowUpRight size={14} />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span>© {new Date().getFullYear()} FORTEVA S.A.S. Todos los derechos reservados.</span>
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
