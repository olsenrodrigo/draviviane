import { motion } from "framer-motion";
import { HeartCrack, CloudRain, BatteryLow, Activity, Baby, BedDouble } from "lucide-react";
import SecaoTitulo from "@/components/SecaoTitulo";
import { agendar } from "@/lib/navegacao";

export default function Sinais() {
  const sinais = [
    {
      icon: HeartCrack,
      titulo: "O desejo sumiu",
      texto: "baixa libido nela, nele ou nos dois, e vocês nem lembram a última vez que foi natural.",
    },
    {
      icon: CloudRain,
      titulo: "A relação dói ou incomoda",
      texto: "dor na relação sexual, ressecamento ou desconforto que faz evitar a intimidade.",
    },
    {
      icon: BatteryLow,
      titulo: "Cansaço que não passa",
      texto: "falta de energia, sono ruim e irritação que acabam virando brigas e afastamento.",
    },
    {
      icon: Activity,
      titulo: "Mudanças no corpo",
      texto: "ganho de peso, alterações hormonais, pré-menopausa, menopausa ou queda de testosterona.",
    },
    {
      icon: Baby,
      titulo: "Dificuldade para engravidar",
      texto: "tentativas sem sucesso que trazem pressão e desgaste para os dois.",
    },
    {
      icon: BedDouble,
      titulo: "Parecem colegas de quarto",
      texto: "carinho existe, mas a conexão e a intimidade de antes ficaram para trás.",
    },
  ];

  return (
    <section id="sinais" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SecaoTitulo
          selo="Vocês se reconhecem?"
          titulo="Vocês se reconhecem em algum desses sinais?"
          subtitulo={
            <>
              Depois de alguns anos juntos, é comum o casal achar que "é assim mesmo": a rotina, os filhos, o
              trabalho. Mas muitas vezes o corpo está dando sinais que merecem ser investigados. Falta de desejo
              sexual não é falta de amor. Muitas vezes é hormônio, sono, estresse, metabolismo ou dor, e isso tem
              tratamento.
            </>
          }
        />

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {sinais.map((sinal, index) => (
            <motion.li
              key={sinal.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-start gap-4 rounded-2xl p-6 border"
              style={{ borderColor: "rgba(184,150,78,0.18)", backgroundColor: "#FDFAF5" }}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(184,150,78,0.12)" }}>
                <sinal.icon className="w-5 h-5" style={{ color: "#B8964E" }} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                <strong className="block text-base mb-1" style={{ color: "#2D1A28" }}>{sinal.titulo}</strong>
                {sinal.texto}
              </p>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg mb-6" style={{ color: "#2D1A28" }}>
            Se vocês marcaram dois ou mais, vale uma avaliação, de preferência <strong>juntos</strong>.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => agendar()}
            className="px-8 py-4 text-white rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "linear-gradient(135deg, #B8964E 0%, #8B6A2E 100%)" }}
          >
            Quero entender o que está acontecendo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
