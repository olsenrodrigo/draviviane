import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SecaoTitulo from "@/components/SecaoTitulo";
import { faq } from "@/content/seo";

// Mesmo conteúdo do FAQPage no JSON-LD (content/seo.ts). `<details>` mantém as
// respostas no HTML pré-renderizado — um acordeão que só monta a resposta ao
// clicar esconderia o texto de quem não executa JavaScript.
export default function FAQ() {
  return (
    <section id="duvidas" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SecaoTitulo selo="Dúvidas frequentes" titulo="Dúvidas sobre saúde sexual e o diagnóstico do casal" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faq.map((item, index) => (
            <details
              key={item.pergunta}
              open={index === 0}
              className="group rounded-2xl border px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
              style={{ borderColor: "rgba(184,150,78,0.22)", backgroundColor: "#FDFAF5" }}
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <h3 className="text-base md:text-lg font-semibold" style={{ color: "#2D1A28" }}>
                  {item.pergunta}
                </h3>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
                  style={{ color: "#B8964E" }}
                />
              </summary>
              <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: "#3C3C3C" }}>
                {item.resposta}
              </p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
