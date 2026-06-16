import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Briefcase, IdCard, Globe } from "lucide-react";

export default function About() {
  const credentials = [
    { icon: GraduationCap, text: "Graduação — Centro Universitário Lusíada (UNILUS)" },
    { icon: Briefcase, text: "Residência — H.M. Leonor Mendes de Barros" },
    { icon: Globe, text: "Estágio internacional em Segovia, Itália" },
    { icon: Award, text: "Especialização em Reprodução Humana" },
    { icon: BookOpen, text: "Certificações: Sírio Libanês, CETRUS e FMUSP" },
    { icon: IdCard, text: "CRM 134036 • TEGO / FEBRASGO" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
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
              <span className="text-sm font-medium" style={{ color: "#B8964E" }}>Sobre a Especialista</span>
            </div>

            <h2
              className="font-bold mb-2 leading-tight"
              style={{
                color: "#6B4560",
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)"
              }}
            >
              Dra. Viviane Vendramini
            </h2>

            <p className="text-base mb-6 font-medium" style={{ color: "#B8964E", letterSpacing: "0.02em" }}>
              Ginecologia • Reprodução Humana • Ultrassonografia • Sexualidade
            </p>

            <p className="text-base mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              A <strong style={{ color: "#2D1A28" }}>Dra. Viviane Vendramini</strong> é médica especialista em saúde da mulher, com
              formação sólida em ginecologia e obstetrícia e atuação focada no cuidado integral feminino.
            </p>

            <p className="text-base mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Realizou estágio internacional em Segovia, Itália, e especializou-se em Reprodução Humana,
              com atuação complementar em ultrassonografia, sexualidade, cirurgia minimamente invasiva e
              psicodrama. Acumulou certificações pelo Hospital Sírio Libanês, CETRUS e FMUSP.
            </p>

            <p className="text-base mb-8 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Hoje, com <strong style={{ color: "#2D1A28" }}>mais de 1000 mulheres acompanhadas</strong>, oferece um cuidado personalizado
              que integra saúde física, emocional e íntima — promovendo bem-estar, autoestima e qualidade de
              vida em todas as fases da vida feminina.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {credentials.map((item, index) => (
                <motion.div
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-sm w-full">
              <img
                src="/draviviane_ajustado.png"
                alt="Dra. Viviane Vendramini"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-3xl -z-10" style={{ backgroundColor: "rgba(184,150,78,0.1)" }} />
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full -z-10" style={{ backgroundColor: "rgba(184,150,78,0.07)" }} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t"
          style={{ borderColor: "rgba(184,150,78,0.2)" }}
        >
          {[
            { value: "+1000 pacientes", label: "atendidas com cuidado personalizado" },
            { value: "10+ anos", label: "de formação e prática especializada" },
            { value: "5+ áreas", label: "de especialização em saúde feminina" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: "#6B4560", fontFamily: "'Playfair Display', serif" }}
              >
                {item.value}
              </div>
              <div className="text-base" style={{ color: "#3C3C3C" }}>{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote
            className="text-2xl md:text-3xl font-medium italic max-w-3xl mx-auto mb-8"
            style={{ color: "#6B4560", fontFamily: "'Playfair Display', serif" }}
          >
            "A prevenção é o maior gesto de amor-próprio."
          </blockquote>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 text-white rounded-full font-semibold hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "linear-gradient(135deg, #B8964E 0%, #8B6A2E 100%)" }}
          >
            Agende sua consulta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
