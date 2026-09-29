import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SecaoTitulo from "@/components/SecaoTitulo";

export default function Diagnostico() {
  const frentes = [
    {
      numero: "Frente 01",
      titulo: "O lado dela",
      itens: [
        "Avaliação hormonal e ginecológica (ginecologista)",
        "Avaliação metabólica (nutróloga)",
        "Saúde íntima: libido, lubrificação, dor na relação",
        "Histórico e exames antes da consulta",
        "Leitura dos resultados em casal",
      ],
    },
    {
      numero: "Frente 02",
      titulo: "O lado dele",
      itens: [
        "Avaliação urológica (urologista parceiro)",
        "Avaliação hormonal, incluindo testosterona, e física",
        "Histórico e exames antes da consulta",
        "Leitura dos resultados em casal",
      ],
    },
  ];

  const letra = (l: string) => <strong style={{ color: "#6B4560" }}>{l}</strong>;

  return (
    <section id="diagnostico" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SecaoTitulo
          selo="O que o Diagnóstico C.A.S.A.L avalia"
          titulo="Diagnóstico do casal: as duas frentes de uma mesma avaliação"
          subtitulo={
            <>
              Quando só um lado é investigado, metade da história fica de fora. No Diagnóstico C.A.S.A.L (
              {letra("C")}onexão, {letra("A")}valiação, {letra("S")}aúde, {letra("A")}mor e {letra("L")}ongevidade),
              ela e ele são avaliados em paralelo, e os resultados são lidos juntos.
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {frentes.map((frente, index) => (
            <motion.div
              key={frente.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-3xl p-8 border"
              style={{ borderColor: "rgba(184,150,78,0.2)", backgroundColor: "#FDFAF5" }}
            >
              <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#B8964E", letterSpacing: "0.14em" }}>
                {frente.numero}
              </p>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#2D1A28", fontFamily: "'Playfair Display', serif" }}>
                {frente.titulo}
              </h3>
              <ul className="space-y-3">
                {frente.itens.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#B8964E" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
