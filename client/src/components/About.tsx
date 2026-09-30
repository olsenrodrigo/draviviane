import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, IdCard } from "lucide-react";
import { agendar } from "@/lib/navegacao";

export default function About() {
  const credentials = [
    { icon: GraduationCap, text: "Graduação: Centro Universitário Lusíada (UNILUS)" },
    { icon: Briefcase, text: "Residência: Hospital Maternidade Leonor Mendes de Barros" },
    { icon: Award, text: "Certificações: Sírio-Libanês, CETRUS e FMUSP" },
    { icon: IdCard, text: "CRM-SP 134.036 / RQE 51.931 · TEGO/FEBRASGO" },
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-block px-4 py-2 rounded-full mb-6 border"
              style={{ backgroundColor: "rgba(184,150,78,0.08)", borderColor: "rgba(184,150,78,0.2)" }}
            >
              <span className="text-sm font-medium" style={{ color: "#B8964E" }}>Quem sou eu</span>
            </div>

            <h2
              className="font-bold mb-6 leading-tight"
              style={{
                color: "#6B4560",
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.4vw, 2.7rem)"
              }}
            >
              Dra. Viviane Vendramini: ginecologista especialista em sexualidade e saúde do casal
            </h2>

            <blockquote
              className="text-xl md:text-2xl italic mb-8 pl-5 border-l-2"
              style={{ color: "#8B6A2E", fontFamily: "'Playfair Display', serif", borderColor: "#B8964E" }}
            >
              "A prevenção é o maior gesto de amor-próprio. E de amor pelo outro."
            </blockquote>

            <p className="text-base mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Sou médica ginecologista e obstetra, com especialização em Reprodução Humana e formação complementar
              em sexualidade, ultrassonografia, cirurgia minimamente invasiva e psicodrama. Fiz estágio internacional
              em Segovia e tenho certificações pelo Hospital Sírio-Libanês, CETRUS e FMUSP.
            </p>

            <p className="text-base mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Em mais de 10 anos de consultório, atendendo mais de mil mulheres, percebi que muitas queixas de "falta
              de vontade", cansaço e distância no casamento não eram só dela. Eram do casal. Foi daí que nasceu o{" "}
              <strong style={{ color: "#2D1A28" }}>Diagnóstico C.A.S.A.L</strong>: um jeito de olhar para o corpo e
              para a relação ao mesmo tempo, com a ciência e o acolhimento que esse tema pede.
            </p>

            <p className="text-base mb-8 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Atendo em consultório na Água Branca, zona oeste de São Paulo, e também online.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {credentials.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center gap-3 rounded-xl p-3 border"
                  style={{ borderColor: "rgba(184,150,78,0.18)", backgroundColor: "rgba(184,150,78,0.04)" }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(184,150,78,0.1)" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#B8964E" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#212529" }}>{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => agendar()}
              className="mt-10 px-8 py-4 text-white rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer"
              style={{ background: "linear-gradient(135deg, #B8964E 0%, #8B6A2E 100%)" }}
            >
              Agendar consulta
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md w-full">
              <img
                src="/fotos/sobre-dra-1100.webp"
                srcSet="/fotos/sobre-dra-700.webp 700w, /fotos/sobre-dra-1100.webp 1100w"
                sizes="(min-width: 1024px) 400px, 90vw"
                width={1100}
                height={1467}
                alt="Dra. Viviane Vendramini, ginecologista especialista em sexualidade do casal em São Paulo"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-3xl -z-10" style={{ backgroundColor: "rgba(184,150,78,0.1)" }} />
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full -z-10" style={{ backgroundColor: "rgba(184,150,78,0.07)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
