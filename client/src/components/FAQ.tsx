import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function FAQ() {
  const testimonials = [
    {
      text: "Tenho o privilégio de ser acompanhada pela Dra. Viviane há 13 anos. Sempre recebi um atendimento excepcional. Sua competência, profissionalismo e atenção aos detalhes fazem toda a diferença. Além do conhecimento técnico, ela tem um olhar humano e acolhedor, transmitindo confiança e segurança em cada consulta. Recomendo sem ressalvas!",
      name: "Tahiná Di Sessa Ribeiro",
      detail: "Paciente há 13 anos",
    },
    {
      text: "Me passou confiança desde a primeira consulta. A Dra. Vivi é muito atenciosa, é aquela profissional que te explica tudo direitinho, prestativa e muito acolhedora.",
      name: "Priscilla Ramalho",
      detail: "Paciente",
    },
    {
      text: "Fui muito bem atendida pela Dra. Vivi, muito acolhedora. Estou fazendo meu processo de emagrecimento com ela e já perdi 5kg. Estou muito feliz que estou tendo resultado e acolhimento. Ela é muito atenciosa e atualizada!",
      name: "Laura Costa",
      detail: "Programa de emagrecimento",
    },
  ];

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "#F7EAF0" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(155, 107, 122, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#2D1A28" }}>Depoimentos</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
            O que dizem nossas pacientes
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Histórias reais de quem confiou sua saúde à Dra. Viviane
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border relative"
              style={{ borderColor: "rgba(155, 107, 122, 0.15)" }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: "#9B6B7A" }} />

              <p className="text-base leading-relaxed mb-6" style={{ color: "#3C3C3C" }}>
                "{item.text}"
              </p>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" style={{ color: "#9B6B7A" }} />
                ))}
              </div>

              <div>
                <p className="font-semibold text-sm" style={{ color: "#212529" }}>{item.name}</p>
                <p className="text-xs" style={{ color: "#9B6B7A" }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #9B6B7A 0%, #2D1A28 100%)" }}
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Comece agora a cuidar da sua saúde com quem entende você
          </h4>
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-lg" style={{ color: "#F7EAF0" }}>
            <span>Atendimento presencial e online</span>
            <span>|</span>
            <span>São Paulo / SP</span>
          </div>
          <p className="text-base mb-8" style={{ color: "rgba(247, 234, 240, 0.8)" }}>
            Agende sua consulta e dê o primeiro passo para mais qualidade de vida
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#2D1A28" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agendar consulta
          </button>
        </motion.div>
      </div>
    </section>
  );
}
