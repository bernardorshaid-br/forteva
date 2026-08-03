import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FORTEVA | Infraestructura Tecnológica Empresarial",
  description:
    "FORTEVA es un integrador de infraestructura, tecnología y servicios administrados. Diseñamos, construimos, operamos y protegemos la infraestructura crítica de organizaciones públicas y privadas en Argentina.",
  keywords: [
    "infraestructura tecnológica",
    "networking empresarial",
    "cableado estructurado",
    "WiFi empresarial",
    "data center",
    "ciberseguridad",
    "redes corporativas",
    "Buenos Aires",
    "Argentina",
  ],
  authors: [{ name: "FORTEVA S.A.S." }],
  creator: "FORTEVA",
  publisher: "FORTEVA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://forteva.com.ar",
    title: "FORTEVA | Infraestructura Tecnológica Empresarial",
    description:
      "Diseñamos, implementamos y mantenemos infraestructura tecnológica para empresas y organismos públicos.",
    siteName: "FORTEVA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FORTEVA - Infraestructura Tecnológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORTEVA | Infraestructura Tecnológica Empresarial",
    description:
      "Diseñamos, implementamos y mantenemos infraestructura tecnológica para empresas y organismos públicos.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://forteva.com.ar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
