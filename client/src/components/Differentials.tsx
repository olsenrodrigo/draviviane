import { motion } from "framer-motion";
import { GraduationCap, Heart, Users, Sparkles } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento humanizado",
      description: "Consulta focada em escuta, acolhimento e personalização do tratamento para cada paciente.",
    },
    {
      icon: GraduationCap,
      title: "Formação completa e atualizada",
      description: "Especializações e constante aprimoramento em diversas áreas da saúde feminina.",
    },
    {
      icon: Sparkles,
      title: "Abordagem integrativa",
      description: "Cuidado que une corpo, mente e saúde íntima da mulher em todas as fases da vida.",
    },
    {
      icon: Users,
      title: "Experiência comprovada",
      description: "Mais de 1000 mulheres acompanhadas com resultados reais e seguimento dedicado.",
    },
  ];

  return (
    <section id="differentials" className="py-24" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6 border" style={{ backgroundColor: "rgba(184,150,78,0.08)", borderColor: "rgba(184,150,78,0.2)" }}>
              <span className="text-sm font-medium" style={{ color: "#B8964E" }}>Por que escolher</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
              Diferenciais
            </h3>

            <p className="text-xl" style={{ color: "#3C3C3C" }}>
              Por que escolher a Dra. Viviane Vendramini
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border text-center"
                style={{ borderColor: "rgba(184,150,78,0.18)" }}
              >
                <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #B8964E 0%, #2D1A28 100%)" }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold mb-4" style={{ color: "#212529" }}>
                  {item.title}
                </h4>

                <p className="leading-relaxed text-sm" style={{ color: "#3C3C3C" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
