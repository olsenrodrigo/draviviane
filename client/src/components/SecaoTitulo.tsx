import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SecaoTituloProps {
  selo: string;
  titulo: ReactNode;
  subtitulo?: ReactNode;
  claro?: boolean;
}

/** Selo + H2 + subtítulo, no padrão visual de todas as seções. */
export default function SecaoTitulo({ selo, titulo, subtitulo, claro = false }: SecaoTituloProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14 max-w-3xl mx-auto"
    >
      <div
        className="inline-block px-4 py-2 rounded-full mb-6 border"
        style={{ backgroundColor: "rgba(184,150,78,0.08)", borderColor: "rgba(184,150,78,0.2)" }}
      >
        <span className="text-sm font-medium" style={{ color: claro ? "#E6CF9F" : "#B8964E" }}>{selo}</span>
      </div>

      <h2
        className="font-bold mb-5 leading-tight"
        style={{
          color: claro ? "#FFFFFF" : "#6B4560",
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
        }}
      >
        {titulo}
      </h2>

      {subtitulo && (
        <p className="text-base md:text-lg leading-relaxed" style={{ color: claro ? "#FAF4EC" : "#3C3C3C" }}>
          {subtitulo}
        </p>
      )}
    </motion.div>
  );
}
