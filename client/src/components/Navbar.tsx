import { useState, useEffect } from "react";
import { Menu, X, Calendar, Instagram } from "lucide-react";
import { MEDICA, linkWhatsApp } from "@/content/seo";
import { motion } from "framer-motion";

interface NavbarProps {
  activeSection?: string;
  scrollToSection?: (section: string) => void;
}

function Logo() {
  return (
    <img
      src="/logo.png"
      alt="Dra. Viviane Vendramini — Ginecologista"
      style={{
        height: "46px",
        width: "auto",
        objectFit: "contain"
      }}
    />
  );
}

export default function Navbar({ activeSection = "hero", scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "sinais", label: "Sinais" },
    { id: "caminhos", label: "Caminhos" },
    { id: "diagnostico", label: "Diagnóstico" },
    { id: "sobre", label: "Sobre" },
    { id: "equipe", label: "Equipe" },
    { id: "teste", label: "Teste" },
    { id: "duvidas", label: "Dúvidas" },
    { id: "contato", label: "Contato" },
  ];

  const handleNav = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else if (document.getElementById(id)) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fora da home (ex.: política de privacidade) a seção não existe aqui.
      window.location.href = `/#${id}`;
    }
    setIsMobileMenuOpen(false);
  };

  const redes = (
    <>
      <a
        href={MEDICA.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram @dravivianevendramini"
        className="p-2 rounded-full transition-opacity hover:opacity-70"
        style={{ color: "#8B6A2E" }}
      >
        <Instagram size={18} />
      </a>
      <a
        href={linkWhatsApp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${MEDICA.telefone}`}
        className="p-2 rounded-full transition-opacity hover:opacity-70"
        style={{ color: "#8B6A2E" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-[#FAF4EC]/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center cursor-pointer"
            onClick={() => handleNav("hero")}
          >
            <Logo />
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-5">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleNav(item.id)}
                className="relative text-sm font-medium transition-colors cursor-pointer hover:opacity-80"
                style={{
                  color: activeSection === item.id ? "#B8964E" : "#494949"
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ background: "#B8964E" }}
                  />
                )}
              </motion.button>
            ))}
            <div className="flex items-center">{redes}</div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              onClick={() => handleNav("contato")}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer hover:shadow-md"
              style={{ borderColor: "#B8964E", color: "#B8964E", backgroundColor: "transparent" }}
            >
              <Calendar size={15} />
              Agendar
            </motion.button>
          </nav>

          <div className="flex items-center lg:hidden">
            {redes}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2 transition-colors hover:opacity-80 cursor-pointer"
              style={{ color: "#494949" }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden py-4 border-t"
            style={{ borderColor: "rgba(184, 150, 78, 0.2)" }}
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:opacity-90 cursor-pointer"
                style={{
                  color: activeSection === item.id ? "#B8964E" : "#494949",
                  backgroundColor: activeSection === item.id ? "#FAF4EC" : "transparent"
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-3 pb-1">
              <button
                onClick={() => handleNav("contato")}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer"
                style={{ borderColor: "#B8964E", color: "#B8964E" }}
              >
                <Calendar size={15} />
                Agendar Consulta
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
