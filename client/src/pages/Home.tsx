import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sinais from "@/components/Sinais";
import Caminhos from "@/components/Caminhos";
import Diagnostico from "@/components/Diagnostico";
import ComoFunciona from "@/components/ComoFunciona";
import About from "@/components/About";
import Equipe from "@/components/Equipe";
import Depoimentos from "@/components/Depoimentos";
import OutrosCuidados from "@/components/OutrosCuidados";
import Teste from "@/components/Teste";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante";

// Ordem das seções = ordem da copy v2 ("Diagnóstico C.A.S.A.L", foco em casais).
const SECOES = [
  "hero",
  "sinais",
  "caminhos",
  "diagnostico",
  "como-funciona",
  "sobre",
  "equipe",
  "depoimentos",
  "outros-cuidados",
  "teste",
  "duvidas",
  "contato",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    SECOES.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Sinais />
        <Caminhos />
        <Diagnostico />
        <ComoFunciona />
        <About />
        <Equipe />
        <Depoimentos />
        <OutrosCuidados />
        <Teste />
        <FAQ />
        <Contact />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </div>
  );
}
