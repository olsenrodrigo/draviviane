import { motion } from "framer-motion";
import { Calendar, Users, Heart, Sparkles } from "lucide-react";

interface HeroProps {
  scrollToSection?: (section: string) => void;
}

/* Folha grande estilo palmeira/tropical */
function LeafTall({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} viewBox="0 0 80 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 230 C40 230 5 160 12 90 C18 30 40 8 40 8 C40 8 62 30 68 90 C75 160 40 230 40 230Z"
        stroke="#B8964E" strokeWidth="0.9" fill="rgba(184,150,78,0.055)" />
      <line x1="40" y1="8" x2="40" y2="230" stroke="#B8964E" strokeWidth="0.7" strokeDasharray="5 4" />
      <path d="M26 65 Q40 74 54 62" stroke="#B8964E" strokeWidth="0.6" fill="none"/>
      <path d="M22 95 Q40 106 58 93" stroke="#B8964E" strokeWidth="0.6" fill="none"/>
      <path d="M20 128 Q40 140 60 126" stroke="#B8964E" strokeWidth="0.6" fill="none"/>
      <path d="M22 162 Q40 173 58 160" stroke="#B8964E" strokeWidth="0.6" fill="none"/>
      <path d="M26 196 Q40 206 54 193" stroke="#B8964E" strokeWidth="0.6" fill="none"/>
    </svg>
  );
}

/* Folha longa e fina estilo bambu */
function LeafSlim({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} viewBox="0 0 50 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 175 C25 175 8 120 14 65 C18 25 25 5 25 5 C25 5 32 25 36 65 C42 120 25 175 25 175Z"
        stroke="#B8964E" strokeWidth="0.8" fill="rgba(184,150,78,0.05)" />
      <line x1="25" y1="5" x2="25" y2="175" stroke="#B8964E" strokeWidth="0.6" />
      <path d="M17 55 Q25 62 33 52" stroke="#B8964E" strokeWidth="0.5" fill="none"/>
      <path d="M14 90 Q25 99 36 88" stroke="#B8964E" strokeWidth="0.5" fill="none"/>
      <path d="M15 125 Q25 134 35 124" stroke="#B8964E" strokeWidth="0.5" fill="none"/>
      <path d="M17 158 Q25 165 33 155" stroke="#B8964E" strokeWidth="0.5" fill="none"/>
    </svg>
  );
}

/* Ramo com folhas pequenas espalhadas */
function LeafBranch({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 140 Q50 100 80 70 Q110 40 140 20" stroke="#B8964E" strokeWidth="0.9" fill="none"/>
      {/* Folhinhas ao longo do ramo */}
      <ellipse cx="45" cy="112" rx="12" ry="6" stroke="#B8964E" strokeWidth="0.6" fill="rgba(184,150,78,0.06)" transform="rotate(-40 45 112)"/>
      <ellipse cx="65" cy="90" rx="11" ry="5" stroke="#B8964E" strokeWidth="0.6" fill="rgba(184,150,78,0.06)" transform="rotate(-50 65 90)"/>
      <ellipse cx="88" cy="66" rx="12" ry="5" stroke="#B8964E" strokeWidth="0.6" fill="rgba(184,150,78,0.06)" transform="rotate(-55 88 66)"/>
      <ellipse cx="112" cy="44" rx="11" ry="5" stroke="#B8964E" strokeWidth="0.6" fill="rgba(184,150,78,0.06)" transform="rotate(-60 112 44)"/>
      <ellipse cx="133" cy="28" rx="10" ry="4" stroke="#B8964E" strokeWidth="0.6" fill="rgba(184,150,78,0.06)" transform="rotate(-65 133 28)"/>
      {/* Side sprigs */}
      <path d="M65 90 Q52 78 48 68" stroke="#B8964E" strokeWidth="0.6" fill="none"/>
      <ellipse cx="48" cy="68" rx="9" ry="4" stroke="#B8964E" strokeWidth="0.5" fill="rgba(184,150,78,0.05)" transform="rotate(-80 48 68)"/>
      <path d="M88 66 Q100 55 108 48" stroke="#B8964E" strokeWidth="0.6" fill="none"/>
      <ellipse cx="108" cy="48" rx="8" ry="4" stroke="#B8964E" strokeWidth="0.5" fill="rgba(184,150,78,0.05)" transform="rotate(30 108 48)"/>
    </svg>
  );
}

/* Folha arredondada simples */
function LeafRound({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 120 C50 120 5 90 8 48 C11 18 50 5 50 5 C50 5 89 18 92 48 C95 90 50 120 50 120Z"
        stroke="#B8964E" strokeWidth="0.8" fill="rgba(184,150,78,0.07)" />
      <line x1="50" y1="5" x2="50" y2="120" stroke="#B8964E" strokeWidth="0.7" />
      <path d="M28 50 Q50 60 72 48" stroke="#B8964E" strokeWidth="0.55" fill="none"/>
      <path d="M22 75 Q50 87 78 73" stroke="#B8964E" strokeWidth="0.55" fill="none"/>
      <path d="M30 98 Q50 108 70 96" stroke="#B8964E" strokeWidth="0.55" fill="none"/>
    </svg>
  );
}

export default function Hero({ scrollToSection }: HeroProps) {
  const goTo = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const stats = [
    { icon: Users, value: "+1000", label: "pacientes" },
    { icon: Heart, value: "10+", label: "anos" },
    { icon: Sparkles, value: "5+", label: "especialidades" },
  ];

  return (
    <div id="hero" className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#FAF4EC" }}>

      {/* ── Decorações botânicas abundantes ── */}

      {/* Esquerda: coluna de folhas verticais */}
      <LeafTall style={{ position: "absolute", left: "-18px", top: "8%", width: "70px", opacity: 0.55, pointerEvents: "none", transform: "rotate(-18deg)" }} />
      <LeafSlim style={{ position: "absolute", left: "10px", top: "30%", width: "45px", opacity: 0.40, pointerEvents: "none", transform: "rotate(-8deg) scaleX(-1)" }} />
      <LeafRound style={{ position: "absolute", left: "-8px", top: "52%", width: "62px", opacity: 0.38, pointerEvents: "none", transform: "rotate(-25deg)" }} />
      <LeafSlim style={{ position: "absolute", left: "5px", bottom: "22%", width: "40px", opacity: 0.32, pointerEvents: "none", transform: "rotate(12deg)" }} />
      <LeafBranch style={{ position: "absolute", left: "-10px", bottom: "6%", width: "100px", opacity: 0.30, pointerEvents: "none", transform: "rotate(15deg) scaleX(-1)" }} />

      {/* Canto superior esquerdo: ramo decorativo */}
      <LeafBranch style={{ position: "absolute", left: "3%", top: "5%", width: "130px", opacity: 0.35, pointerEvents: "none", transform: "rotate(5deg) scaleY(-1)" }} />
      <LeafSlim style={{ position: "absolute", left: "6%", top: "18%", width: "38px", opacity: 0.28, pointerEvents: "none", transform: "rotate(-35deg)" }} />

      {/* Direita: folhas verticais */}
      <LeafTall style={{ position: "absolute", right: "-15px", top: "5%", width: "68px", opacity: 0.45, pointerEvents: "none", transform: "rotate(20deg) scaleX(-1)" }} />
      <LeafSlim style={{ position: "absolute", right: "8px", top: "28%", width: "42px", opacity: 0.35, pointerEvents: "none", transform: "rotate(10deg)" }} />
      <LeafRound style={{ position: "absolute", right: "-5px", top: "50%", width: "58px", opacity: 0.32, pointerEvents: "none", transform: "rotate(22deg) scaleX(-1)" }} />
      <LeafSlim style={{ position: "absolute", right: "12px", bottom: "28%", width: "36px", opacity: 0.28, pointerEvents: "none", transform: "rotate(-8deg) scaleX(-1)" }} />
      <LeafBranch style={{ position: "absolute", right: "-5px", bottom: "10%", width: "95px", opacity: 0.28, pointerEvents: "none", transform: "rotate(-12deg)" }} />

      {/* Meio superior: ramo centralizado */}
      <LeafBranch style={{ position: "absolute", right: "12%", top: "2%", width: "110px", opacity: 0.28, pointerEvents: "none", transform: "rotate(-5deg) scaleX(-1) scaleY(-1)" }} />

      {/* Canto inferior direito extra */}
      <LeafTall style={{ position: "absolute", right: "3%", bottom: "3%", width: "55px", opacity: 0.22, pointerEvents: "none", transform: "rotate(8deg) scaleX(-1) scaleY(-1)" }} />

      {/* Pontos dourados dispersos */}
      <div className="absolute pointer-events-none" style={{ left: "8%", top: "45%", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "rgba(184,150,78,0.25)" }} />
      <div className="absolute pointer-events-none" style={{ left: "15%", top: "75%", width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "rgba(184,150,78,0.20)" }} />
      <div className="absolute pointer-events-none" style={{ right: "18%", top: "60%", width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "rgba(184,150,78,0.18)" }} />
      <div className="absolute pointer-events-none" style={{ right: "6%", top: "38%", width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "rgba(184,150,78,0.22)" }} />

      {/* Gradientes circulares suaves */}
      <div className="absolute pointer-events-none" style={{ right: "-60px", top: "15%", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,150,78,0.07) 0%, transparent 70%)" }} />
      <div className="absolute pointer-events-none" style={{ left: "-50px", bottom: "8%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,150,78,0.06) 0%, transparent 70%)" }} />

      {/* ── Conteúdo principal ── */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-200px)]">

            {/* Esquerda: texto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex flex-col justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="block font-bold" style={{ color: "#6B4560", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 1.1 }}>
                    Saúde Feminina
                  </span>
                  <span className="block font-bold" style={{ color: "#B8964E", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 1.1 }}>
                    com Propósito
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <p className="text-lg font-semibold mb-1" style={{ color: "#2D1A28" }}>
                  Dra Viviane Vendramini — Ginecologista
                </p>
                <p className="text-base mb-8 italic leading-relaxed" style={{ color: "#6B5A48", fontFamily: "'Playfair Display', serif" }}>
                  Cuidado integral, acolhedor e personalizado<br />
                  em todas as fases da sua jornada.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => goTo("contact")}
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all cursor-pointer border-2"
                  style={{
                    borderColor: "#B8964E",
                    color: "#B8964E",
                    backgroundColor: "transparent",
                    boxShadow: "0 2px 12px rgba(184,150,78,0.12)"
                  }}
                >
                  <Calendar size={20} />
                  Agendar Consulta
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => goTo("about")}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-base transition-all cursor-pointer"
                  style={{ color: "#6B5A48", backgroundColor: "rgba(184,150,78,0.08)" }}
                >
                  Conheça a Dra. Viviane
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex gap-3"
              >
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl flex-1 border"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.7)",
                      borderColor: "rgba(184,150,78,0.18)",
                      backdropFilter: "blur(8px)"
                    }}
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(184,150,78,0.12)" }}>
                      <stat.icon size={16} style={{ color: "#B8964E" }} />
                    </div>
                    <div>
                      <div className="font-bold text-lg leading-none" style={{ color: "#2D1A28" }}>{stat.value}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#8B7355" }}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Direita: foto */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="relative flex justify-center lg:justify-end items-end h-full"
            >
              <div className="relative" style={{ maxWidth: "480px", width: "100%" }}>
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(160deg, rgba(184,150,78,0.10) 0%, rgba(45,26,40,0.06) 100%)",
                    transform: "rotate(2deg) scale(1.02)",
                    borderRadius: "2rem"
                  }}
                />
                <img
                  src="/draviviane_hero.png"
                  alt="Dra. Viviane Vendramini"
                  className="relative w-full rounded-3xl"
                  style={{
                    maxHeight: "580px",
                    objectFit: "cover",
                    objectPosition: "center top",
                    filter: "contrast(1.01) brightness(1.02)"
                  }}
                />
                <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl -z-10" style={{ backgroundColor: "rgba(184,150,78,0.12)" }} />
                <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full -z-10" style={{ backgroundColor: "rgba(184,150,78,0.08)" }} />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Fade inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
      />
    </div>
  );
}
