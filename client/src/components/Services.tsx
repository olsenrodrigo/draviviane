import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    "Ginecologia",
    "Sexualidade Feminina",
    "Infertilidade",
    "Harmonização Íntima",
    "Cirurgia por Vídeo",
    "Contracepção (DIU)",
    "Menopausa",
    "Implantes Hormonais",
  ];

  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#F7EAF0" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(155, 107, 122, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#2D1A28" }}>Especialidades</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Áreas de atuação
          </h3>

          <p className="text-xl max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            Cuidado completo e integrado para a saúde feminina
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border"
              style={{ borderColor: "rgba(155, 107, 122, 0.15)" }}
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#9B6B7A" }} />
              <span className="font-medium" style={{ color: "#212529" }}>{service}</span>
            </motion.div>
          ))}
        </div>

        {/* Bloco de Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #9B6B7A 0%, #2D1A28 100%)" }}
        >
          <h4 className="text-3xl font-bold mb-4 text-white">
            Cansaço, baixa libido, alterações hormonais ou dificuldade para emagrecer?
          </h4>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#F7EAF0" }}>
            Descubra a causa e trate de forma segura com acompanhamento médico especializado.
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#2D1A28" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Quero agendar minha consulta
          </button>
        </motion.div>
      </div>
    </section>
  );
}
