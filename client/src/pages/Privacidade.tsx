import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MEDICA } from "@/content/seo";

// Política de privacidade do site (formulário de agendamento e teste rápido).
// Texto-base: precisa da validação da Dra. Viviane / jurídico antes de ser
// tratado como definitivo.
export default function Privacidade() {
  const secoes = [
    {
      titulo: "1. Quem é o responsável pelos seus dados",
      texto: [
        `${MEDICA.razaoSocial}, CNPJ ${MEDICA.cnpj}, com consultório na ${MEDICA.endereco}, ${MEDICA.bairro}, ${MEDICA.cidade}/${MEDICA.estado}. Contato para assuntos de privacidade: ${MEDICA.email}.`,
      ],
    },
    {
      titulo: "2. Quais dados coletamos",
      texto: [
        "Pelo formulário de agendamento: nome, telefone, e-mail e a mensagem que você escrever.",
        "O teste rápido do site não coleta dados: as respostas ficam apenas no seu navegador e não são enviadas nem armazenadas por nós.",
        "Pedimos que você não descreva sintomas nem envie exames pelo formulário. Informações de saúde são tratadas na consulta, com o sigilo médico.",
      ],
    },
    {
      titulo: "3. Para que usamos",
      texto: [
        "Exclusivamente para retornar o seu contato, entender o seu momento e agendar o atendimento. A base legal é o seu consentimento (art. 7º, I, da Lei 13.709/2018, LGPD), dado ao marcar a autorização no formulário.",
      ],
    },
    {
      titulo: "4. Com quem compartilhamos",
      texto: [
        "Não vendemos nem compartilhamos seus dados para fins comerciais. Eles passam apenas pelos serviços necessários para o site funcionar (hospedagem e envio de e-mail).",
        "Ao usar o botão de WhatsApp, a conversa acontece no aplicativo do WhatsApp, sujeito às políticas da Meta. O mapa do consultório é exibido pelo Google Maps, sujeito às políticas do Google.",
      ],
    },
    {
      titulo: "5. Por quanto tempo guardamos",
      texto: [
        "Pelo tempo necessário para o contato e o agendamento, ou até você pedir a exclusão, salvo obrigação legal de guarda.",
      ],
    },
    {
      titulo: "6. Seus direitos",
      texto: [
        `Você pode, a qualquer momento, pedir acesso, correção, exclusão dos seus dados ou revogar o consentimento (art. 18 da LGPD), escrevendo para ${MEDICA.email} ou pelo WhatsApp ${MEDICA.telefone}.`,
      ],
    },
    {
      titulo: "7. Segurança",
      texto: [
        "O site usa conexão criptografada (HTTPS) e o acesso às mensagens recebidas é restrito à equipe do consultório.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1
            className="font-bold mb-4"
            style={{ color: "#6B4560", fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
          >
            Política de Privacidade
          </h1>
          <p className="text-base mb-10" style={{ color: "#3C3C3C" }}>
            Esta política explica como o site da Dra. Viviane Vendramini trata os dados enviados pelo formulário de agendamento, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
          </p>
          {secoes.map((secao) => (
            <section key={secao.titulo} className="mb-8">
              <h2 className="text-xl font-bold mb-3" style={{ color: "#2D1A28" }}>{secao.titulo}</h2>
              {secao.texto.map((paragrafo) => (
                <p key={paragrafo} className="text-base leading-relaxed mb-3" style={{ color: "#3C3C3C" }}>
                  {paragrafo}
                </p>
              ))}
            </section>
          ))}
          <a href="/" className="inline-block mt-4 font-semibold hover:underline" style={{ color: "#8B6A2E" }}>
            ← Voltar para o site
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
