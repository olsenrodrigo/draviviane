import { motion } from "framer-motion";
import SecaoTitulo from "@/components/SecaoTitulo";
import { agendar } from "@/lib/navegacao";

export default function Equipe() {
  const equipe = [
    {
      numero: "01",
      titulo: "Ginecologista",
      texto: "a Dra. Viviane conduz o caso do início ao fim, cuidando da saúde hormonal, íntima e sexual dela.",
    },
    {
      numero: "02",
      titulo: "Urologista",
      texto: "avaliação hormonal, urológica e da saúde sexual masculina, pelo lado dele.",
    },
    {
      numero: "03",
      titulo: "Nutróloga e nutricionista",
      texto: "equilíbrio metabólico, peso e energia dos dois.",
    },
    {
      numero: "04",
      titulo: "Personal trainer",
      texto: "disposição, sono e autoestima, porque o corpo em movimento também muda o desejo.",
    },
  ];

  return (
    <section id="equipe" className="py-24" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SecaoTitulo
          selo="Equipe multidisciplinar"
          titulo="Uma equipe inteira cuidando da saúde de vocês dois"
          subtitulo="A falta de desejo e o desgaste no relacionamento raramente têm uma causa só. Por isso o Diagnóstico C.A.S.A.L reúne especialistas que conversam entre si."
        />

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {equipe.map((membro, index) => (
            <motion.li
              key={membro.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-7 border"
              style={{ borderColor: "rgba(184,150,78,0.18)" }}
            >
              <span className="block text-sm font-semibold mb-3" style={{ color: "#B8964E", letterSpacing: "0.1em" }}>
                {membro.numero}
              </span>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#2D1A28" }}>{membro.titulo}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>{membro.texto}</p>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 rounded-2xl p-6 text-center border"
          style={{ borderColor: "rgba(184,150,78,0.25)", backgroundColor: "rgba(255,255,255,0.7)" }}
        >
          <p className="text-base" style={{ color: "#3C3C3C" }}>
            <strong style={{ color: "#2D1A28" }}>Investimento:</strong> sob consulta · definido na conversa inicial,
            de acordo com o caminho escolhido.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => agendar("Olá! Quero fazer meu diagnóstico e entender o investimento.")}
            className="mt-5 px-8 py-4 text-white rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "linear-gradient(135deg, #B8964E 0%, #8B6A2E 100%)" }}
          >
            Quero meu diagnóstico
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
