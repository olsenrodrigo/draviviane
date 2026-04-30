import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function HowItWorks() {
  const faqs = [
    {
      title: "Quando devo ir ao ginecologista?",
      description: "O ideal é realizar consultas regulares anuais ou sempre que houver sintomas. A prevenção é fundamental para detectar precocemente qualquer alteração.",
    },
    {
      title: "A reposição hormonal é segura?",
      description: "Sim, quando indicada corretamente e acompanhada por médico especialista. A avaliação individualizada é essencial para definir a melhor conduta.",
    },
    {
      title: "O que é laser íntimo?",
      description: "É um procedimento moderno, não cirúrgico, para melhorar a saúde e estética vaginal, indicado para ressecamento, frouxidão e outros desconfortos.",
    },
    {
      title: "A consulta pode ser online?",
      description: "Sim, o atendimento online está disponível conforme avaliação. Muitas orientações e acompanhamentos podem ser realizados de forma remota.",
    },
    {
      title: "Como funciona o acompanhamento para emagrecimento?",
      description: "É um programa supervisionado com avaliação hormonal e metabólica completa, garantindo um processo seguro, eficaz e personalizado.",
    },
    {
      title: "Quais exames são realizados?",
      description: "Ultrassonografia ginecológica e obstétrica, exames hormonais, metabólicos e outros conforme a necessidade de cada paciente.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#F7EAF0" }}>
            <span className="text-sm font-medium" style={{ color: "#9B6B7A" }}>Dúvidas Frequentes</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Perguntas comuns das pacientes
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Tire suas dúvidas e chegue à consulta mais tranquila
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(155, 107, 122, 0.15)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#F7EAF0" }}
              >
                <HelpCircle className="w-5 h-5" style={{ color: "#9B6B7A" }} />
              </div>

              <h4 className="text-lg font-bold mb-3" style={{ color: "#212529" }}>
                {faq.title}
              </h4>

              <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                {faq.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
