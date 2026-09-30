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
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden grid md:grid-cols-5"
          style={{ background: "linear-gradient(135deg, #B8964E 0%, #2D1A28 100%)" }}
        >
          <div className="relative md:col-span-2 h-72 md:h-auto overflow-hidden">
            <motion.img
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              src="/fotos/cta-dra-1100.webp"
              srcSet="/fotos/cta-dra-700.webp 700w, /fotos/cta-dra-1100.webp 1100w"
              sizes="(min-width: 768px) 400px, 100vw"
              alt="Dra. Viviane Vendramini sorrindo com uma xícara de café no consultório"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "50% 18%" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 md:bg-gradient-to-r bg-gradient-to-b from-transparent from-60% to-[#6E4F3A]/70"
            />
          </div>

          <div className="md:col-span-3 p-10 md:p-14 text-center md:text-left flex flex-col justify-center">
            <h2
              className="font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)" }}
            >
              Vocês merecem se reencontrar
            </h2>
            <p className="text-lg mb-8 max-w-xl" style={{ color: "#FAF4EC" }}>
              Sozinha, sozinho ou em casal, tudo começa com uma conversa para entender o que mudou e por onde recomeçar.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => agendar()}
                className="flex items-center justify-center gap-2 px-7 py-4 whitespace-nowrap bg-white rounded-full font-semibold transition-colors cursor-pointer hover:bg-[#FAF4EC]"
                style={{ color: "#2D1A28" }}
              >
                <Calendar size={18} /> Agendar conversa
              </button>
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-4 whitespace-nowrap rounded-full font-semibold border-2 border-white text-white transition-colors hover:bg-white/10"
              >
                WhatsApp {MEDICA.telefone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
