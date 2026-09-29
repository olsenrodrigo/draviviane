import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { agendar } from "@/lib/navegacao";
import { MEDICA, linkWhatsApp } from "@/content/seo";

export default function CtaFinal() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-3xl p-10 md:p-14 text-center"
          style={{ background: "linear-gradient(135deg, #B8964E 0%, #2D1A28 100%)" }}
        >
          <h2
            className="font-bold mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)" }}
          >
            Vocês merecem se reencontrar
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#FAF4EC" }}>
            Sozinha, sozinho ou em casal, tudo começa com uma conversa para entender o que mudou e por onde recomeçar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => agendar()}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full font-semibold transition-colors cursor-pointer hover:bg-[#FAF4EC]"
              style={{ color: "#2D1A28" }}
            >
              <Calendar size={18} /> Agendar conversa
            </button>
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white text-white transition-colors hover:bg-white/10"
            >
              WhatsApp {MEDICA.telefone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
