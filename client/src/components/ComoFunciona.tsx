import { motion } from "framer-motion";
import SecaoTitulo from "@/components/SecaoTitulo";
import { agendar } from "@/lib/navegacao";

export default function ComoFunciona() {
  const passos = [
    {
      numero: "01",
      titulo: "Avaliação individual",
      texto: "Cada um conta sua história e faz os exames no próprio ritmo, com privacidade.",
    },
    {
      numero: "02",
      titulo: "Consulta guiada",
      texto:
        "A Dra. Viviane faz a leitura dos resultados com vocês, em casal ou individualmente, em linguagem clara e sem constrangimento.",
    },
    {
      numero: "03",
      titulo: "Plano de ação do casal",
      texto:
        "Próximos passos definidos no Método NOS: hormônios, sono, alimentação, atividade física e saúde sexual, com acompanhamento.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SecaoTitulo selo="Método NOS: como funciona" titulo="Como funciona, em três passos" />

        <ol className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {passos.map((passo, index) => (
            <motion.li
              key={passo.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="bg-white rounded-3xl p-8 border"
              style={{ borderColor: "rgba(184,150,78,0.18)" }}
            >
              <span
                className="block text-5xl font-bold mb-4"
                style={{ color: "rgba(184,150,78,0.45)", fontFamily: "'Playfair Display', serif" }}
              >
                {passo.numero}
              </span>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#2D1A28" }}>{passo.titulo}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>{passo.texto}</p>
            </motion.li>
          ))}
        </ol>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => agendar()}
            className="px-8 py-4 text-white rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "linear-gradient(135deg, #B8964E 0%, #8B6A2E 100%)" }}
          >
            Agendar a primeira conversa
          </motion.button>
        </div>
      </div>
    </section>
  );
}
