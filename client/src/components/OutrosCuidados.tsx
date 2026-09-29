import { motion } from "framer-motion";
import SecaoTitulo from "@/components/SecaoTitulo";
import { outrosCuidados } from "@/content/seo";

export default function OutrosCuidados() {
  return (
    <section id="outros-cuidados" className="py-24" style={{ backgroundColor: "#FAF4EC" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SecaoTitulo
          selo="Outros cuidados"
          titulo="Outros cuidados em saúde da mulher"
          subtitulo="Além dos três caminhos, o consultório acompanha mulheres em todas as fases da vida, da primeira consulta à menopausa."
        />

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {outrosCuidados.map((cuidado) => (
            <li
              key={cuidado}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-white border"
              style={{ borderColor: "rgba(184,150,78,0.3)", color: "#2D1A28" }}
            >
              {cuidado}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
