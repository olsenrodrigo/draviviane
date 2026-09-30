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

        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
        <motion.figure
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block lg:sticky lg:top-28"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ backgroundColor: "#EDE3D0" }}>
            <img
              src="/fotos/duvidas-dra-1000.webp"
              srcSet="/fotos/duvidas-dra-600.webp 600w, /fotos/duvidas-dra-1000.webp 1000w"
              sizes="400px"
              width={1000}
              height={1778}
              alt="Dra. Viviane Vendramini de braços cruzados, sorrindo"
              loading="lazy"
              decoding="async"
              className="w-full h-[560px] object-cover"
              style={{ objectPosition: "50% 90%" }}
            />
          </div>
          <figcaption
            className="absolute -bottom-6 left-6 right-6 rounded-2xl px-5 py-4 text-sm shadow-lg"
            style={{ backgroundColor: "#FFFFFF", color: "#3C3C3C", border: "1px solid rgba(184,150,78,0.2)" }}
          >
            Ficou alguma dúvida? Pergunte na primeira conversa: <strong style={{ color: "#6B4560" }}>aqui não existe pergunta boba.</strong>
          </figcaption>
          <div aria-hidden="true" className="absolute -top-5 -left-5 w-32 h-32 rounded-full -z-10" style={{ backgroundColor: "rgba(184,150,78,0.1)" }} />
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl w-full mx-auto space-y-3"
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
      </div>
    </section>
  );
}
