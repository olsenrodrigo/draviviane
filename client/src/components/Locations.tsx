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
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(155, 107, 122, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#2D1A28" }}>Localização</span>
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
                  style={{ borderColor: "rgba(155, 107, 122, 0.15)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F7EAF0" }}>
                    <feature.icon className="w-5 h-5" style={{ color: "#9B6B7A" }} />
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
              style={{ borderColor: "rgba(155, 107, 122, 0.2)", backgroundColor: "rgba(247, 234, 240, 0.5)" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#9B6B7A" }} />
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Clínica Dra. Viviane Vendramini</p>
                  <p style={{ color: "#3C3C3C" }}>
                    São Paulo / SP<br />
                    <span className="text-sm" style={{ color: "#9B6B7A" }}>Endereço completo disponível no agendamento</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border"
            style={{ borderColor: "rgba(155, 107, 122, 0.15)" }}
          >
            <div
              className="w-full flex items-center justify-center"
              style={{ minHeight: "400px", backgroundColor: "#F7EAF0" }}
            >
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: "#9B6B7A" }} />
                <p className="text-lg font-medium" style={{ color: "#2D1A28" }}>São Paulo / SP</p>
                <p className="text-sm mt-2" style={{ color: "#3C3C3C" }}>Mapa disponível em breve</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
