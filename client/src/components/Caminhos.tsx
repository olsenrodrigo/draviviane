import { motion } from "framer-motion";
import { HeartHandshake, Flower2, ShieldCheck } from "lucide-react";
import SecaoTitulo from "@/components/SecaoTitulo";
import { agendar } from "@/lib/navegacao";

export default function Caminhos() {
  const caminhos = [
    {
      icon: HeartHandshake,
      para: "Pra vocês",
      titulo: "Diagnóstico C.A.S.A.L",
      texto:
        "Hormônios, corpo, metabolismo e vínculo investigados nos dois ao mesmo tempo, com um plano de cuidado em comum. Para casais que querem reacender a intimidade e entender por que o desejo mudou.",
      botao: "Quero o Diagnóstico do casal",
      mensagem: "Olá! Tenho interesse no Diagnóstico C.A.S.A.L para o casal.",
      destaque: true,
    },
    {
      icon: Flower2,
      para: "Pra você",
      titulo: "Saúde íntima e sexualidade feminina",
      texto:
        "Baixa libido, dor na relação, alterações hormonais, menopausa e fertilidade, cuidadas no seu tempo, com escuta e sem julgamento.",
      botao: "Quero minha consulta",
      mensagem: "Olá! Gostaria de agendar uma consulta de saúde íntima e sexualidade feminina.",
      destaque: false,
    },
    {
      icon: ShieldCheck,
      para: "Pra ele",
      titulo: "Vitalidade e saúde sexual masculina",
      texto:
        "Avaliação hormonal e urológica com a equipe parceira: testosterona, energia, desejo e desempenho, com discrição.",
      botao: "Quero saber mais",
      mensagem: "Olá! Gostaria de saber mais sobre a avaliação de vitalidade e saúde sexual masculina.",
      destaque: false,
    },
  ];

  return (
    <section id="caminhos" className="py-24" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SecaoTitulo
          selo="Escolha seu caminho"
          titulo="Três caminhos para cuidar da saúde sexual e do relacionamento"
          subtitulo="Em casal, sozinha ou sozinho, você começa de onde estiver. Muitos casais começam com um só dos dois, e está tudo bem."
        />

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {caminhos.map((caminho, index) => (
            <motion.article
              key={caminho.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col rounded-3xl p-8 border"
              style={
                caminho.destaque
                  ? { background: "linear-gradient(160deg, #6B4560 0%, #2D1A28 100%)", borderColor: "transparent", boxShadow: "0 18px 40px rgba(45,26,40,0.22)" }
                  : { backgroundColor: "#FFFFFF", borderColor: "rgba(184,150,78,0.2)" }
              }
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: caminho.destaque ? "rgba(255,255,255,0.12)" : "rgba(184,150,78,0.12)" }}
              >
                <caminho.icon className="w-6 h-6" style={{ color: caminho.destaque ? "#E6CF9F" : "#B8964E" }} />
              </div>
              <p className="text-sm italic mb-1" style={{ color: caminho.destaque ? "#E6CF9F" : "#B8964E", fontFamily: "'Playfair Display', serif" }}>
                {caminho.para}
              </p>
              <h3 className="text-2xl font-bold mb-4" style={{ color: caminho.destaque ? "#FFFFFF" : "#2D1A28", fontFamily: "'Playfair Display', serif" }}>
                {caminho.titulo}
              </h3>
              <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: caminho.destaque ? "#F3EBDD" : "#3C3C3C" }}>
                {caminho.texto}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => agendar(caminho.mensagem)}
                className="w-full px-6 py-3.5 rounded-full font-semibold transition-all cursor-pointer"
                style={
                  caminho.destaque
                    ? { backgroundColor: "#B8964E", color: "#FFFFFF" }
                    : { border: "2px solid #B8964E", color: "#8B6A2E", backgroundColor: "transparent" }
                }
              >
                {caminho.botao}
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
