import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { Calendar, ClipboardCheck, ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from "lucide-react";
import { irPara } from "@/lib/navegacao";

interface HeroProps {
  scrollToSection?: (section: string) => void;
}

interface Slide {
  rotulo: string;
  foto: string;
  alt: string;
  posicao: string;
  selo: string;
  titulo: React.ReactNode;
  texto: React.ReactNode;
  botoes: { rotulo: string; destino: string; icone: typeof Calendar; principal?: boolean }[];
}

/* Abertura no estilo da referência (higiia.com.br): fotos que se alternam com
   zoom lento, texto que entra em cascata e faixa de números logo abaixo.
   Todos os slides ficam no HTML (o H1 é do primeiro) para o pré-render e o
   Google lerem o conteúdo inteiro; só a visibilidade muda. */
const SLIDES: Slide[] = [
  {
    rotulo: "O casal",
    foto: "hero-dra",
    alt: "Dra. Viviane Vendramini, ginecologista especialista em sexualidade do casal em São Paulo",
    posicao: "50% 4%",
    selo: "Ginecologista em São Paulo · Sexualidade e Saúde do Casal",
    titulo: (
      <>
        Quando o desejo esfria no casamento, <span style={{ color: "#B8964E" }}>existe causa. E existe cuidado.</span>
      </>
    ),
    texto: (
      <>
        Falta de libido, cansaço, dor na relação e aquela distância que foi chegando sem ninguém perceber podem ter
        origem hormonal, metabólica e física, nela e nele. O{" "}
        <strong style={{ color: "#2D1A28" }}>Diagnóstico C.A.S.A.L</strong> investiga corpo, hormônios e vínculo do
        casal numa mesma jornada, com a Dra. Viviane Vendramini e equipe multidisciplinar.
      </>
    ),
    botoes: [
      { rotulo: "Quero cuidar da nossa relação", destino: "contato", icone: Calendar, principal: true },
      { rotulo: "Fazer o teste de 1 minuto", destino: "teste", icone: ClipboardCheck },
    ],
  },
  {
    rotulo: "Diagnóstico",
    foto: "hero-casal",
    alt: "Casal sorrindo abraçado no sofá de casa",
    posicao: "40% 30%",
    selo: "Diagnóstico C.A.S.A.L",
    titulo: (
      <>
        Corpo, hormônios e vínculo, <span style={{ color: "#B8964E" }}>investigados nos dois ao mesmo tempo.</span>
      </>
    ),
    texto: (
      <>
        Ela e ele avaliados em paralelo, com ginecologista, urologista, nutróloga e personal trainer. Os resultados são
        lidos juntos e viram um plano de cuidado em comum.
      </>
    ),
    botoes: [
      { rotulo: "Conhecer o Diagnóstico", destino: "diagnostico", icone: ArrowRight, principal: true },
      { rotulo: "Fazer o teste de 1 minuto", destino: "teste", icone: ClipboardCheck },
    ],
  },
  {
    rotulo: "Para você",
    foto: "hero-consultorio",
    alt: "Dra. Viviane Vendramini caminhando no consultório",
    posicao: "50% 12%",
    selo: "Para ela, para ele ou para os dois",
    titulo: (
      <>
        Você começa de onde estiver: <span style={{ color: "#B8964E" }}>sozinha, sozinho ou em casal.</span>
      </>
    ),
    texto: (
      <>
        Consultório na Água Branca, zona oeste de São Paulo, e atendimento online. Escuta, ciência e cuidado, sem
        julgamento e no tempo de vocês.
      </>
    ),
    botoes: [
      { rotulo: "Escolher meu caminho", destino: "caminhos", icone: ArrowRight, principal: true },
      { rotulo: "Agendar conversa", destino: "contato", icone: Calendar },
    ],
  },
];

const DURACAO_SLIDE = 7; // segundos

const cascata: Variants = {
  on: { transition: { staggerChildren: 0.11, delayChildren: 0.35 } },
  off: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const item: Variants = {
  on: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  off: { opacity: 0, y: 26, filter: "blur(4px)", transition: { duration: 0.3, ease: "easeIn" } },
};

// Grade 2×2 no celular e 4 colunas no desktop: divisórias só entre vizinhos.
const BORDAS_STATS = [
  "lg:pl-0",
  "pl-4 border-l",
  "border-t lg:border-t-0 lg:border-l",
  "pl-4 border-l border-t lg:border-t-0",
];

const srcSet = (foto: string) => `/fotos/${foto}-800.webp 800w, /fotos/${foto}-1400.webp 1400w`;

/* Número que conta de 0 até o valor quando aparece na tela. O HTML pré-renderizado
   já traz o valor final. */
function Contador({ valor, prefixo = "", sufixo = "" }: { valor: number; prefixo?: string; sufixo?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visivel = useInView(ref, { once: true, margin: "-40px" });
  const reduzir = useReducedMotion();

  useEffect(() => {
    if (!visivel || reduzir || !ref.current) return;
    const el = ref.current;
    const controle = animate(0, valor, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = `${prefixo}${Math.round(v).toLocaleString("pt-BR")}${sufixo}`;
      },
    });
    return () => controle.stop();
  }, [visivel, reduzir, valor, prefixo, sufixo]);

  return (
    <span ref={ref}>
      {prefixo}
      {valor.toLocaleString("pt-BR")}
      {sufixo}
    </span>
  );
}

export default function Hero({ scrollToSection }: HeroProps) {
  const reduzir = useReducedMotion();
  const [atual, setAtual] = useState(0);
  const [primeiraVolta, setPrimeiraVolta] = useState(true);
  const [pausadoPeloUsuario, setPausadoPeloUsuario] = useState(false);
  const toqueX = useRef<number | null>(null);

  // Quem pede menos movimento no sistema começa com o carrossel parado.
  useEffect(() => {
    if (reduzir) setPausadoPeloUsuario(true);
  }, [reduzir]);

  const pausado = pausadoPeloUsuario;

  const irParaSlide = (i: number) => {
    setPrimeiraVolta(false);
    setAtual((i + SLIDES.length) % SLIDES.length);
  };
  const proximo = () => irParaSlide(atual + 1);
  const anterior = () => irParaSlide(atual - 1);

  const goTo = (id: string) => {
    if (scrollToSection) scrollToSection(id);
    else irPara(id);
  };

  const stats = [
    { numero: <Contador valor={1000} prefixo="+" />, rotulo: "mulheres e casais acompanhados" },
    { numero: <Contador valor={10} sufixo="+" />, rotulo: "anos de prática em saúde da mulher e reprodução humana" },
    { numero: <Contador valor={3} />, rotulo: "caminhos: mulher, homem ou casal" },
    { numero: <>Presencial</>, rotulo: "e online · Água Branca, zona oeste de SP" },
  ];

  return (
    <section
      id="hero"
      aria-roledescription="carrossel"
      aria-label="Apresentação"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FAF4EC" }}
    >
      <div
        className="relative pt-20 lg:pt-0 lg:min-h-[100svh] lg:flex lg:items-center"
        onTouchStart={(e) => (toqueX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (toqueX.current === null) return;
          const delta = e.changedTouches[0].clientX - toqueX.current;
          if (Math.abs(delta) > 50) (delta < 0 ? proximo : anterior)();
          toqueX.current = null;
        }}
      >
        {/* ── Fotos: crossfade + zoom lento (Ken Burns) ── */}
        <div className="hero-fotos relative h-[54svh] min-h-[360px] sm:h-[64svh] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[38%] lg:h-auto">
          {SLIDES.map((s, i) => (
            <img
              key={s.foto}
              src={`/fotos/${s.foto}-1400.webp`}
              srcSet={srcSet(s.foto)}
              sizes="(min-width: 1024px) 62vw, 100vw"
              alt={i === atual ? s.alt : ""}
              aria-hidden={i !== atual}
              fetchPriority={i === 0 ? "high" : "low"}
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                i === atual ? "opacity-100 hero-kb" : "opacity-0"
              }`}
              style={{ objectPosition: s.posicao }}
            />
          ))}
        </div>

        {/* Linhas douradas que se desenham sobre a borda da foto */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full hidden lg:block"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M 540 910 C 700 720, 880 840, 1060 640 S 1300 300, 1460 330"
            stroke="#B8964E"
            strokeWidth="1.2"
            strokeOpacity="0.55"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.path
            d="M 600 910 C 760 760, 940 880, 1110 690 S 1340 380, 1460 420"
            stroke="#B8964E"
            strokeWidth="0.8"
            strokeOpacity="0.35"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.7 }}
          />
        </svg>

        {/* ── Texto ── */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 -mt-28 sm:-mt-36 lg:mt-0 pb-10 lg:pt-28 lg:pb-16">
          <div className="max-w-[600px] grid">
            {SLIDES.map((s, i) => {
              const ativo = i === atual;
              const entrada = primeiraVolta && i === 0 ? "hero-entrada" : "";
              return (
                <motion.div
                  key={s.foto}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} de ${SLIDES.length}: ${s.rotulo}`}
                  aria-hidden={!ativo}
                  inert={!ativo}
                  initial={false}
                  animate={ativo ? "on" : "off"}
                  variants={cascata}
                  className={`[grid-area:1/1] flex flex-col justify-end lg:justify-center ${ativo ? "" : "pointer-events-none"}`}
                >
                  <motion.p
                    variants={item}
                    className={`text-xs sm:text-sm font-semibold uppercase mb-4 ${entrada}`}
                    style={{ color: "#B8964E", letterSpacing: "0.14em", animationDelay: "0.15s" }}
                  >
                    {s.selo}
                  </motion.p>

                  {i === 0 ? (
                    <motion.h1
                      variants={item}
                      className={`mb-5 font-bold ${entrada}`}
                      style={{ fontFamily: "'Playfair Display', serif", color: "#6B4560", fontSize: "clamp(2rem, 3.6vw, 3.35rem)", lineHeight: 1.1, animationDelay: "0.3s" }}
                    >
                      {s.titulo}
                    </motion.h1>
                  ) : (
                    <motion.p
                      variants={item}
                      className="mb-5 font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#6B4560", fontSize: "clamp(2rem, 3.6vw, 3.35rem)", lineHeight: 1.1 }}
                    >
                      {s.titulo}
                    </motion.p>
                  )}

                  <motion.p
                    variants={item}
                    className={`text-base xl:text-lg mb-7 leading-relaxed ${entrada}`}
                    style={{ color: "#3C3C3C", animationDelay: "0.45s" }}
                  >
                    {s.texto}
                  </motion.p>

                  <motion.div variants={item} className={`flex flex-col sm:flex-row gap-3 ${entrada}`} style={{ animationDelay: "0.6s" }}>
                    {s.botoes.map((b) => (
                      <motion.button
                        key={b.rotulo}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => goTo(b.destino)}
                        className={`flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-base transition-shadow cursor-pointer sm:whitespace-nowrap ${
                          b.principal ? "text-white" : "border-2"
                        }`}
                        style={
                          b.principal
                            ? { background: "linear-gradient(135deg, #B8964E 0%, #8B6A2E 100%)", boxShadow: "0 8px 24px rgba(184,150,78,0.32)" }
                            : { borderColor: "#B8964E", color: "#8B6A2E", backgroundColor: "rgba(255,255,255,0.7)", backdropFilter: "blur(6px)" }
                        }
                      >
                        <b.icone size={19} />
                        {b.rotulo}
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Controles: setas, barras de progresso e pausa ── */}
          <div className={`mt-8 flex items-center gap-4 max-w-[600px] ${primeiraVolta ? "hero-entrada" : ""}`} style={{ animationDelay: "0.8s" }}>
            <button
              onClick={anterior}
              aria-label="Slide anterior"
              className="w-10 h-10 flex-shrink-0 rounded-full border flex items-center justify-center transition-colors hover:bg-white cursor-pointer"
              style={{ borderColor: "rgba(184,150,78,0.45)", color: "#8B6A2E" }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex-1 flex gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.foto}
                  onClick={() => irParaSlide(i)}
                  aria-label={`Ir para o slide ${i + 1}: ${s.rotulo}`}
                  aria-current={i === atual}
                  className="group flex-1 text-left cursor-pointer py-2"
                >
                  <span className="block h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: "rgba(184,150,78,0.22)" }}>
                    <span
                      key={i === atual ? `ativo-${atual}` : "inativo"}
                      className={`block h-full rounded-full ${i === atual ? "hero-progresso" : ""}`}
                      style={{
                        backgroundColor: "#B8964E",
                        width: i === atual ? undefined : i < atual ? "100%" : "0%",
                        opacity: i < atual ? 0.45 : 1,
                        animationDuration: `${DURACAO_SLIDE}s`,
                        animationPlayState: pausado ? "paused" : "running",
                      }}
                      onAnimationEnd={i === atual ? proximo : undefined}
                    />
                  </span>
                  <span
                    className="hidden sm:block mt-2 text-[11px] uppercase font-semibold transition-colors"
                    style={{ letterSpacing: "0.12em", color: i === atual ? "#6B4560" : "rgba(107,69,96,0.45)" }}
                  >
                    {s.rotulo}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={proximo}
              aria-label="Próximo slide"
              className="w-10 h-10 flex-shrink-0 rounded-full border flex items-center justify-center transition-colors hover:bg-white cursor-pointer"
              style={{ borderColor: "rgba(184,150,78,0.45)", color: "#8B6A2E" }}
            >
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => setPausadoPeloUsuario((p) => !p)}
              aria-label={pausadoPeloUsuario ? "Retomar apresentação" : "Pausar apresentação"}
              className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-colors hover:bg-white cursor-pointer"
              style={{ color: "#8B6A2E" }}
            >
              {pausadoPeloUsuario ? <Play size={16} /> : <Pause size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Faixa de números ── */}
      <div className="relative z-10 bg-white border-t" style={{ borderColor: "rgba(184,150,78,0.18)" }}>
        <ul className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-3 py-6 lg:py-8 pr-2 lg:px-6 ${BORDAS_STATS[i]}`}
              style={{ borderColor: "rgba(184,150,78,0.18)" }}
            >
              <span
                className="font-semibold leading-none whitespace-nowrap"
                style={{ fontFamily: "'Playfair Display', serif", color: "#B8964E", fontSize: i === 3 ? "clamp(1.25rem, 2.2vw, 1.8rem)" : "clamp(1.9rem, 3.4vw, 2.9rem)" }}
              >
                {s.numero}
              </span>
              <span className="text-xs sm:text-sm leading-snug" style={{ color: "#6B5A48" }}>
                {s.rotulo}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
