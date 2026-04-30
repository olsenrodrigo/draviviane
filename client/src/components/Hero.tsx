import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";

interface HeroProps {
  scrollToSection?: (section: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const goTo = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #2D1A28 0%, #4A2840 40%, #9B6B7A 100%)"
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(45, 26, 40, 0.96), rgba(45, 26, 40, 0.72), rgba(45, 26, 40, 0.3))" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 pt-32 sm:pt-36">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-block px-4 py-2 backdrop-blur-sm border rounded-full mb-6"
              style={{ backgroundColor: "rgba(155, 107, 122, 0.2)", borderColor: "rgba(155, 107, 122, 0.35)" }}
            >
              <span className="text-sm font-medium" style={{ color: "#F7EAF0" }}>
                Saúde da Mulher • Ginecologia • Reprodução Humana
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Cuidado completo para a saúde da mulher em{" "}
              <span style={{ color: "#C49BAA" }}>
                todas as fases da vida
              </span>
            </h2>

            <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(247, 234, 240, 0.88)" }}>
              Atendimento humanizado e atualizado para menopausa, hormônios, emagrecimento, sexualidade
              e bem-estar feminino. Mais de 1000 mulheres acompanhadas com foco em qualidade de vida,
              energia e autoestima.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("contact")}
                className="group px-8 py-4 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer"
                style={{ background: "#9B6B7A" }}
              >
                <Calendar size={20} />
                Agendar consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("about")}
                className="px-8 py-4 backdrop-blur-sm text-white rounded-full font-medium border-2 transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.25)" }}
              >
                <User size={20} />
                Conheça a Dra. Viviane
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-16 pt-6 sm:pt-10 border-t"
            style={{ borderColor: "rgba(255, 255, 255, 0.12)" }}
          >
            {[
              { value: "+1000", label: "Mulheres atendidas" },
              { value: "10+", label: "Anos de formação" },
              { value: "CRM 134036", label: "TEGO / FEBRASGO" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm" style={{ color: "#F7EAF0" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
      />
    </div>
  );
}
