import { motion } from "framer-motion";
import { MapPin, Clock, Users, Shield, Wifi } from "lucide-react";

export default function Locations() {
  const features = [
    {
      icon: Shield,
      text: "Ambiente acolhedor, confortável e totalmente privativo",
    },
    {
      icon: Clock,
      text: "Consultas com tempo dedicado a cada paciente",
    },
    {
      icon: Users,
      text: "Equipe preparada para suporte em agendamentos",
    },
    {
      icon: Wifi,
      text: "Atendimento online disponível conforme avaliação",
    },
  ];

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6 border" style={{ backgroundColor: "rgba(184,150,78,0.08)", borderColor: "rgba(184,150,78,0.2)" }}>
            <span className="text-sm font-medium" style={{ color: "#B8964E" }}>Localização</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Localização
          </h3>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Atendimento presencial e online
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border"
                  style={{ borderColor: "rgba(184,150,78,0.18)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(184,150,78,0.10)" }}>
                    <feature.icon className="w-5 h-5" style={{ color: "#B8964E" }} />
                  </div>
                  <span className="font-medium pt-2 text-sm" style={{ color: "#212529" }}>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 p-6 rounded-2xl border"
              style={{ borderColor: "rgba(184,150,78,0.2)", backgroundColor: "rgba(184,150,78,0.05)" }}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#B8964E" }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Clínica Dra. Viviane Vendramini</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                    Av. Marquês de São Vicente, 2219 — conj. 312<br />
                    Água Branca — São Paulo / SP
                  </p>
                  <a
                    href="https://maps.google.com/?q=Av+Marques+de+Sao+Vicente+2219+Agua+Branca+Sao+Paulo+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-2 inline-block hover:underline"
                    style={{ color: "#B8964E" }}
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border"
            style={{ borderColor: "rgba(184,150,78,0.18)" }}
          >
            <iframe
              title="Localização Dra. Viviane Vendramini"
              src="https://maps.google.com/maps?q=Av+Marques+de+Sao+Vicente+2219+Agua+Branca+Sao+Paulo+SP&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
