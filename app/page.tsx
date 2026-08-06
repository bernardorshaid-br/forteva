import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Partner from "@/components/Partner";
import HowWeWork from "@/components/HowWeWork";
import WhyForteva from "@/components/WhyForteva";
import Industries from "@/components/Industries";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <Partner />
      <HowWeWork />
      <WhyForteva />
      <Industries />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
