import { motion } from "framer-motion";
import { Stethoscope, Activity, AlertCircle, Scissors, Zap, Scale } from "lucide-react";

export default function Treatments() {
  const treatments = [
    { icon: Activity, text: "Reposição hormonal personalizada" },
    { icon: Scale, text: "Programas de emagrecimento supervisionado" },
    { icon: Zap, text: "Laser íntimo" },
    { icon: Stethoscope, text: "Ultrassonografia ginecológica" },
    { icon: Stethoscope, text: "Infertilidade feminina" },
    { icon: Scissors, text: "Videolaparoscopia" },
    { icon: Scissors, text: "Histeroscopia" },
    { icon: Activity, text: "Tratamentos para sexualidade feminina" },
  ];

  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6 border" style={{ backgroundColor: "rgba(184,150,78,0.08)", borderColor: "rgba(184,150,78,0.2)" }}>
            <span className="text-sm font-medium" style={{ color: "#B8964E" }}>Procedimentos</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Tratamentos e procedimentos
          </h3>

          <p className="text-lg max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            Tecnologia, segurança e cuidado personalizado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-12">
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(184,150,78,0.18)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(184,150,78,0.10)" }}>
                <item.icon className="w-5 h-5" style={{ color: "#B8964E" }} />
              </div>
              <span className="font-medium pt-2 text-sm" style={{ color: "#212529" }}>{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 max-w-3xl mx-auto p-6 rounded-xl"
          style={{ backgroundColor: "rgba(184,150,78,0.07)" }}
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#B8964E" }} />
            <p className="text-base" style={{ color: "#3C3C3C" }}>
              Todos os tratamentos são realizados com base em avaliação individualizada, garantindo
              segurança, eficácia e resultados consistentes.
            </p>
          </div>
          <p className="text-sm pl-9" style={{ color: "#5A5A5A" }}>
            O objetivo é promover saúde, autoestima e qualidade de vida com abordagens modernas e
            cientificamente comprovadas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
