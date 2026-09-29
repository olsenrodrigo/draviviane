import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Clock, Route, ArrowLeft, RotateCcw, Calendar } from "lucide-react";
import SecaoTitulo from "@/components/SecaoTitulo";
import { agendar } from "@/lib/navegacao";
import { linkWhatsApp } from "@/content/seo";

// Teste rápido: 5 perguntas sobre energia, sono, desejo e intimidade que
// indicam por onde começar (casal, mulher ou homem). Não é diagnóstico.
// As respostas ficam só no estado do componente: nada é enviado nem salvo,
// e a mensagem pré-preenchida leva apenas o caminho indicado, nunca as
// respostas (dado de saúde, LGPD art. 11).

type Caminho = "casal" | "mulher" | "homem";

type Opcao = { texto: string; valor: string; pontos?: number };
type Pergunta = { id: string; texto: string; opcoes: Opcao[] };

const perguntas: Pergunta[] = [
  {
    id: "quem",
    texto: "Quem está respondendo?",
    opcoes: [
      { texto: "Sou mulher", valor: "mulher" },
      { texto: "Sou homem", valor: "homem" },
    ],
  },
  {
    id: "desejo",
    texto: "Como está o seu desejo sexual nos últimos meses?",
    opcoes: [
      { texto: "Como sempre foi", valor: "igual", pontos: 0 },
      { texto: "Diminuiu um pouco", valor: "pouco", pontos: 1 },
      { texto: "Diminuiu muito ou sumiu", valor: "muito", pontos: 2 },
    ],
  },
  {
    id: "energia",
    texto: "E a sua energia e o seu sono?",
    opcoes: [
      { texto: "Estão bem", valor: "bem", pontos: 0 },
      { texto: "Às vezes falta energia", valor: "as-vezes", pontos: 1 },
      { texto: "Cansaço quase todo dia e sono ruim", valor: "sempre", pontos: 2 },
    ],
  },
  {
    id: "intimidade",
    texto: "Como está a intimidade?",
    opcoes: [
      { texto: "Está boa", valor: "boa", pontos: 0 },
      { texto: "Esfriou um pouco", valor: "esfriou", pontos: 1 },
      { texto: "Parecemos colegas de quarto", valor: "colegas", pontos: 2 },
      { texto: "Tem dor ou desconforto na relação", valor: "dor", pontos: 2 },
    ],
  },
  {
    id: "parceiro",
    texto: "E do outro lado da relação?",
    opcoes: [
      { texto: "Acho que os dois sentimos essas mudanças", valor: "os-dois" },
      { texto: "Parece que é mais comigo", valor: "comigo" },
      { texto: "Não sei dizer", valor: "nao-sei" },
      { texto: "Não estou em um relacionamento", valor: "sem-relacionamento" },
    ],
  },
];

const caminhos: Record<Caminho, { para: string; titulo: string; texto: string }> = {
  casal: {
    para: "Pra vocês",
    titulo: "Diagnóstico C.A.S.A.L",
    texto:
      "Hormônios, corpo, metabolismo e vínculo investigados nos dois ao mesmo tempo, com um plano de cuidado em comum. Se o outro lado ainda não estiver pronto, você pode começar sozinha ou sozinho.",
  },
  mulher: {
    para: "Pra você",
    titulo: "Saúde íntima e sexualidade feminina",
    texto:
      "Baixa libido, dor na relação, alterações hormonais, menopausa e fertilidade, cuidadas no seu tempo, com escuta e sem julgamento.",
  },
  homem: {
    para: "Pra ele",
    titulo: "Vitalidade e saúde sexual masculina",
    texto:
      "Avaliação hormonal e urológica com a equipe parceira: testosterona, energia, desejo e desempenho, com discrição.",
  },
};

function resultado(respostas: Record<string, string>) {
  const pontos = perguntas.reduce((total, p) => {
    const opcao = p.opcoes.find((o) => o.valor === respostas[p.id]);
    return total + (opcao?.pontos ?? 0);
  }, 0);

  const parceiro = respostas.parceiro;
  const caminho: Caminho =
    parceiro === "os-dois" || (parceiro === "nao-sei" && pontos >= 2)
      ? "casal"
      : respostas.quem === "homem"
        ? "homem"
        : "mulher";

  const leitura =
    pontos >= 4
      ? "Vários sinais aparecem juntos. Vale uma avaliação, sem esperar que passe sozinho."
      : pontos >= 2
        ? "Alguns sinais merecem atenção. Vale uma avaliação para entender o que está por trás."
        : "Poucos sinais por enquanto. Uma consulta é um bom momento para cuidar da prevenção.";

  return { caminho, leitura };
}

export default function Teste() {
  // null = tela de abertura; 0..4 = pergunta; 5 = resultado
  const [etapa, setEtapa] = useState<number | null>(null);
  const [respostas, setRespostas] = useState<Record<string, string>>({});

  const responder = (perguntaId: string, valor: string) => {
    setRespostas((r) => ({ ...r, [perguntaId]: valor }));
    setEtapa((e) => (e ?? 0) + 1);
  };

  const recomecar = () => {
    setRespostas({});
    setEtapa(0);
  };

  const indicadores = [
    { icon: ClipboardCheck, texto: "5 perguntas" },
    { icon: Clock, texto: "1 minuto" },
    { icon: Route, texto: "3 caminhos possíveis" },
  ];

  const final = etapa !== null && etapa >= perguntas.length ? resultado(respostas) : null;
  const pergunta = etapa !== null && etapa < perguntas.length ? perguntas[etapa] : null;

  return (
    <section id="teste" className="py-24" style={{ background: "linear-gradient(160deg, #6B4560 0%, #2D1A28 100%)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SecaoTitulo
          claro
          selo="Teste rápido"
          titulo="O desejo mudou? Faça o teste e descubra por onde começar"
          subtitulo="Cinco perguntas sobre energia, sono, desejo e intimidade. Em 1 minuto você sabe qual dos 3 caminhos faz mais sentido para você ou para o casal."
        />

        <div className="max-w-2xl mx-auto">
          {etapa === null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <ul className="flex flex-wrap justify-center gap-3 mb-10">
                {indicadores.map((item) => (
                  <li
                    key={item.texto}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#FAF4EC" }}
                  >
                    <item.icon size={16} style={{ color: "#E6CF9F" }} />
                    {item.texto}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setEtapa(0)}
                className="px-10 py-4 rounded-full font-semibold cursor-pointer"
                style={{ backgroundColor: "#B8964E", color: "#FFFFFF", boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
              >
                Fazer o teste agora
              </motion.button>
            </motion.div>
          )}

          {pergunta && etapa !== null && (
            <motion.div
              key={pergunta.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-7 md:p-10 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3 text-sm" style={{ color: "#8B7355" }}>
                <span>
                  Pergunta {etapa + 1} de {perguntas.length}
                </span>
                {etapa > 0 && (
                  <button
                    onClick={() => setEtapa(etapa - 1)}
                    className="flex items-center gap-1 hover:underline cursor-pointer"
                    style={{ color: "#8B6A2E" }}
                  >
                    <ArrowLeft size={14} /> Voltar
                  </button>
                )}
              </div>
              <div className="h-1.5 rounded-full mb-8" style={{ backgroundColor: "rgba(184,150,78,0.15)" }}>
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${((etapa + 1) / perguntas.length) * 100}%`, backgroundColor: "#B8964E" }}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-6" style={{ color: "#2D1A28", fontFamily: "'Playfair Display', serif" }}>
                {pergunta.texto}
              </h3>
              <div className="grid gap-3">
                {pergunta.opcoes.map((opcao) => {
                  const marcada = respostas[pergunta.id] === opcao.valor;
                  return (
                    <button
                      key={opcao.valor}
                      onClick={() => responder(pergunta.id, opcao.valor)}
                      className="w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all cursor-pointer hover:shadow-md"
                      style={{
                        borderColor: marcada ? "#B8964E" : "rgba(184,150,78,0.25)",
                        backgroundColor: marcada ? "rgba(184,150,78,0.08)" : "#FFFFFF",
                        color: "#2D1A28",
                      }}
                    >
                      {opcao.texto}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {final && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-7 md:p-10 shadow-2xl"
            >
              <p className="text-sm font-semibold uppercase mb-3" style={{ color: "#B8964E", letterSpacing: "0.14em" }}>
                Por onde começar
              </p>
              <p className="text-base mb-6" style={{ color: "#3C3C3C" }}>{final.leitura}</p>

              <div className="rounded-2xl p-6 mb-6" style={{ backgroundColor: "#FAF4EC" }}>
                <p className="text-sm italic mb-1" style={{ color: "#B8964E", fontFamily: "'Playfair Display', serif" }}>
                  {caminhos[final.caminho].para}
                </p>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#2D1A28", fontFamily: "'Playfair Display', serif" }}>
                  {caminhos[final.caminho].titulo}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>{caminhos[final.caminho].texto}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() =>
                    agendar(`Olá! Fiz o teste no site e o caminho indicado foi: ${caminhos[final.caminho].titulo}. Gostaria de agendar uma conversa.`)
                  }
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-white cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #B8964E 0%, #8B6A2E 100%)" }}
                >
                  <Calendar size={18} /> Quero agendar
                </button>
                <a
                  href={linkWhatsApp(`Olá! Fiz o teste no site e o caminho indicado foi: ${caminhos[final.caminho].titulo}. Gostaria de agendar uma conversa.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold border-2"
                  style={{ borderColor: "#B8964E", color: "#8B6A2E" }}
                >
                  Falar no WhatsApp
                </a>
              </div>

              <button
                onClick={recomecar}
                className="mt-5 flex items-center gap-1 text-sm hover:underline cursor-pointer mx-auto"
                style={{ color: "#8B7355" }}
              >
                <RotateCcw size={14} /> Refazer o teste
              </button>
            </motion.div>
          )}

          <p className="text-xs text-center mt-6 leading-relaxed" style={{ color: "rgba(250,244,236,0.75)" }}>
            O teste não é um diagnóstico e não substitui a consulta. Suas respostas ficam só no seu navegador: não
            são enviadas nem armazenadas.
          </p>
        </div>
      </div>
    </section>
  );
}
