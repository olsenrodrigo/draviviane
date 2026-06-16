import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
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
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "services", label: "Especialidades" },
    { id: "treatments", label: "Tratamentos" },
    { id: "differentials", label: "Diferenciais" },
    { id: "locations", label: "Consultório" },
    { id: "faq", label: "Depoimentos" },
    { id: "how-it-works", label: "FAQ" },
    { id: "contact", label: "Contato" },
  ];

  const handleNav = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

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

          <nav className="hidden lg:flex items-center space-x-5">
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
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              onClick={() => handleNav("contact")}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer hover:shadow-md"
              style={{ borderColor: "#B8964E", color: "#B8964E", backgroundColor: "transparent" }}
            >
              <Calendar size={15} />
              Agendar
            </motion.button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "#494949" }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                onClick={() => handleNav("contact")}
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
