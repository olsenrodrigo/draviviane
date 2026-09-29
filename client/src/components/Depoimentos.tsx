import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SecaoTitulo from "@/components/SecaoTitulo";

// Res. CFM 2.336/2023: depoimento não pode prometer nem divulgar resultado de
// tratamento. Por isso só entram trechos sobre acolhimento e atendimento.
export default function Depoimentos() {
  const depoimentos = [
    {
      texto:
        "Acompanhada pela Dra. Viviane há 13 anos. Atendimento excepcional, com competência e um olhar humano que passa segurança em cada consulta.",
      nome: "Tahiná Di Sessa Ribeiro",
      detalhe: "paciente há 13 anos",
    },
    {
      texto: "Passou confiança desde a primeira consulta. É atenciosa, explica tudo com calma e é muito acolhedora.",
      nome: "Priscilla Ramalho",
      detalhe: "paciente",
    },
    {
      texto: "Muita atenção e acolhimento em cada etapa do acompanhamento.",
      nome: "Laura Costa",
      detalhe: "paciente",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SecaoTitulo selo="Depoimentos" titulo="Mais de mil mulheres e casais já cuidados com esse olhar" />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {depoimentos.map((item, index) => (
            <motion.figure
              key={item.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl p-8 border flex flex-col"
              style={{ borderColor: "rgba(184,150,78,0.18)", backgroundColor: "#FDFAF5" }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-25" style={{ color: "#B8964E" }} />
              <blockquote className="text-base leading-relaxed mb-6 flex-1" style={{ color: "#3C3C3C" }}>
                "{item.texto}"
              </blockquote>
              <div className="flex items-center gap-1 mb-3" aria-label="5 estrelas no Google">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" style={{ color: "#B8964E" }} />
                ))}
              </div>
              <figcaption>
                <p className="font-semibold text-sm" style={{ color: "#212529" }}>{item.nome}</p>
                <p className="text-xs" style={{ color: "#B8964E" }}>{item.detalhe}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="text-center text-sm mt-10" style={{ color: "#6B5A48" }}>
          Avaliações publicadas no Google.{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Dra.+Viviane+Vendramini+Ginecologista+S%C3%A3o+Paulo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#8B6A2E" }}
          >
            Ver todas no Google →
          </a>
        </p>
      </div>
    </section>
  );
}
