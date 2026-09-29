// Registro de SEO/GEO: origem canônica, entrada por rota, dados estruturados e
// o texto do llms.txt. Fonte única lida pelo pré-render (`entry-ssr.tsx`).
//
// v2 (copy "Diagnóstico C.A.S.A.L", foco em casais): as perguntas frequentes
// ficam aqui e são lidas tanto pela tela (FAQ.tsx) quanto pelo FAQPage do
// JSON-LD — o Google exige que o texto marcado seja o mesmo que o visitante vê.

export const ORIGIN = "https://www.dravivianevendramini.com";

export const urlDaRota = (path: string) =>
  path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`;

export const MEDICA = {
  nome: "Dra. Viviane Vendramini",
  especialidade: "Ginecologista e obstetra, com foco em sexualidade e saúde do casal",
  registro: "CRM-SP 134.036 / RQE 51.931",
  titulos: "TEGO / FEBRASGO",
  whatsapp: "5511991076188",
  telefone: "(11) 99107-6188",
  email: "contato@dravivianevendramini.com",
  instagram: "https://www.instagram.com/dravivianevendramini/",
  linkedin: "https://www.linkedin.com/in/viviane-vendramini-667b8b34",
  youtube: "https://www.youtube.com/@dravivianevendramini",
  endereco: "Av. Marquês de São Vicente, 2219, conj. 316",
  bairro: "Água Branca",
  regiao: "zona oeste de São Paulo",
  cidade: "São Paulo",
  estado: "SP",
  razaoSocial: "V & V SERVICOS MEDICOS EM GINECOLOGIA E OBSTETRICIA LTDA",
  cnpj: "01.074.944/0001-76",
} as const;

export const linkWhatsApp = (texto?: string) =>
  `https://wa.me/${MEDICA.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ""}`;

export const formacao = [
  "Graduação: Centro Universitário Lusíada (UNILUS)",
  "Residência: Hospital Maternidade Leonor Mendes de Barros",
  "Especialização em Reprodução Humana",
  "Estágio internacional em Segovia",
  "Certificações: Sírio-Libanês, CETRUS e FMUSP",
] as const;

/** Tags da seção "Outros cuidados" (cada uma pode virar página própria). */
export const outrosCuidados = [
  "Ginecologia",
  "Sexualidade feminina",
  "Baixa libido",
  "Dor na relação",
  "Infertilidade e fertilidade do casal",
  "Menopausa e reposição hormonal",
  "Implantes hormonais",
  "Harmonização íntima",
  "Contracepção (DIU)",
  "Cirurgia por vídeo",
] as const;

/** Bairros citados na página para buscas locais ("perto de mim"). */
export const bairros = ["Água Branca", "Perdizes", "Jardim das Perdizes", "Barra Funda", "Pompeia"] as const;

/** Seção "Dúvidas sobre saúde sexual e o diagnóstico do casal" (FAQ.tsx + FAQPage). */
export const faq = [
  {
    pergunta: "Falta de desejo no casamento é normal?",
    resposta:
      "É comum, mas não precisa ser aceita como normal. Depois de alguns anos de relação, a queda da libido costuma ter causas que podem ser investigadas: alterações hormonais, estresse, sono ruim, uso de medicamentos, pós-parto, menopausa, queda de testosterona ou dor na relação. Identificar a causa é o primeiro passo para tratar.",
  },
  {
    pergunta: "A consulta substitui terapia de casal?",
    resposta:
      "Não, e as duas coisas se complementam. A terapia de casal cuida da comunicação e das questões emocionais. O Diagnóstico C.A.S.A.L investiga o que está acontecendo no corpo dos dois: hormônios, metabolismo, saúde íntima e sexual. Muitos casais se beneficiam das duas frentes, e a Dra. Viviane orienta quando é o caso de buscar também um psicólogo ou terapeuta.",
  },
  {
    pergunta: "Preciso estar tentando engravidar para fazer o Diagnóstico C.A.S.A.L?",
    resposta:
      "Não. O diagnóstico é para qualquer casal que sinta que a saúde, o desejo ou a intimidade mudaram. Se houver planos de gravidez ou dificuldade para engravidar, a avaliação de fertilidade do casal entra no mesmo plano.",
  },
  {
    pergunta: "Meu marido não quer ir numa consulta assim. Como funciona?",
    resposta:
      "É muito comum um dos dois chegar primeiro. Você pode começar sozinha, e a avaliação dele pode ser feita em outro momento, diretamente com o urologista parceiro, com toda a discrição. A leitura em casal acontece só quando os dois se sentirem prontos.",
  },
  {
    pergunta: "Posso fazer sozinha ou sozinho, sem meu parceiro(a)?",
    resposta:
      "Sim. Existem caminhos individuais para mulheres e para homens, pensados para quem está em um relacionamento ou não.",
  },
  {
    pergunta: "Homem também tem queda de libido?",
    resposta:
      "Sim. Queda de testosterona, estresse, sono, peso e algumas medicações afetam o desejo e o desempenho masculino. Pelo lado dele, a avaliação é feita pelo urologista da equipe.",
  },
  {
    pergunta: "A consulta pode ser online?",
    resposta:
      "Sim. A conversa inicial e parte do acompanhamento podem ser online. Os exames e o exame físico são feitos presencialmente, no consultório ou em locais indicados.",
  },
  {
    pergunta: "Onde fica o consultório?",
    resposta:
      "Na Av. Marquês de São Vicente, 2219, conj. 316, Água Branca, zona oeste de São Paulo, perto da Barra Funda, Perdizes e Pompeia.",
  },
  {
    pergunta: "Como agendo?",
    resposta:
      "Pelo WhatsApp (11) 99107-6188 ou pelo formulário desta página. A equipe retorna para entender seu momento e indicar o melhor caminho.",
  },
] as const;

export type Rota = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  /** Título do compartilhamento (WhatsApp, redes). Sem ele usa `title`. */
  ogTitle?: string;
  /** Rotas institucionais (ex.: política de privacidade) não levam o FAQPage. */
  comFaq?: boolean;
};

export const rotas: Rota[] = [
  {
    path: "/",
    title: "Falta de desejo no casamento? Saúde do casal | Dra. Viviane",
    description:
      "Baixa libido, cansaço e distância no casamento podem ter causa hormonal e física. Diagnóstico do casal com ginecologista em São Paulo, presencial e online.",
    ogTitle: "Quando o desejo esfria no casamento, existe causa. E existe cuidado.",
    comFaq: true,
    keywords: [
      "falta de desejo no casamento",
      "falta de libido no casamento",
      "baixa libido feminina",
      "baixa libido masculina",
      "sexualidade do casal",
      "saúde sexual do casal",
      "ginecologista especialista em sexualidade em São Paulo",
      "casamento esfriou",
      "relação esfriou",
      "casamento sem intimidade",
      "dor na relação sexual",
      "dispareunia",
      "reposição hormonal e libido",
      "menopausa e desejo sexual",
      "dificuldade para engravidar",
      "fertilidade do casal",
      "terapia de casal",
      "ginecologista Água Branca",
      "ginecologista Perdizes",
      "ginecologista Barra Funda",
      "ginecologista Pompeia",
      "Diagnóstico C.A.S.A.L",
      "Dra. Viviane Vendramini",
    ],
  },
  {
    path: "/politica-de-privacidade",
    title: "Política de Privacidade | Dra. Viviane Vendramini",
    description:
      "Como o site da Dra. Viviane Vendramini trata os dados enviados pelo formulário de agendamento, em conformidade com a LGPD (Lei 13.709/2018).",
    keywords: ["política de privacidade", "LGPD", "Dra. Viviane Vendramini"],
  },
];

const endereco = {
  "@type": "PostalAddress",
  streetAddress: MEDICA.endereco,
  addressLocality: MEDICA.cidade,
  addressRegion: MEDICA.estado,
  addressCountry: "BR",
};

const areaServed = [
  { "@type": "City", name: "São Paulo" },
  ...bairros.map((name) => ({ "@type": "Place", name: `${name}, São Paulo` })),
];

// Tipos de serviço do consultório (MedicalProcedure é o tipo genérico que o
// schema.org aceita em `availableService`).
const servicos = [
  "Diagnóstico C.A.S.A.L: avaliação hormonal, física e sexual do casal",
  "Avaliação de baixa libido feminina",
  "Avaliação de dor na relação sexual (dispareunia)",
  "Menopausa e reposição hormonal",
  "Implantes hormonais",
  "Avaliação de fertilidade do casal",
  "Harmonização íntima",
  "Contracepção (DIU)",
  "Cirurgia por vídeo",
];

export function grafoJsonLd(path = "/") {
  const rota = rotas.find((r) => r.path === path);

  // `medicalSpecialty` só aceita valores da enumeração do schema.org
  // (Gynecologic, Obstetric, Urologic…). "Saúde sexual" e "saúde reprodutiva"
  // não existem na lista, por isso entram em `knowsAbout`.
  const physician = {
    "@type": "Physician",
    "@id": `${ORIGIN}/#physician`,
    name: MEDICA.nome,
    description:
      "Ginecologista em São Paulo com foco em sexualidade e saúde do casal: baixa libido, dor na relação, menopausa, reposição hormonal e fertilidade. Atendimento para mulheres, homens e casais, presencial na Água Branca e online.",
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/opengraph.jpg`,
    identifier: MEDICA.registro,
    telephone: `+${MEDICA.whatsapp}`,
    email: MEDICA.email,
    medicalSpecialty: ["Gynecologic", "Obstetric"],
    address: endereco,
    areaServed,
    knowsAbout: [
      "Sexual health",
      "Reproductive health",
      "saúde sexual do casal",
      "baixa libido feminina",
      "baixa libido masculina",
      "dor na relação sexual",
      "menopausa",
      "reposição hormonal",
      "fertilidade do casal",
      "reprodução humana",
    ],
    memberOf: { "@id": `${ORIGIN}/#clinica` },
    sameAs: [MEDICA.instagram, MEDICA.linkedin, MEDICA.youtube],
  };

  const clinica = {
    "@type": "MedicalClinic",
    "@id": `${ORIGIN}/#clinica`,
    name: `Consultório ${MEDICA.nome}`,
    legalName: MEDICA.razaoSocial,
    taxID: MEDICA.cnpj,
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/opengraph.jpg`,
    telephone: `+${MEDICA.whatsapp}`,
    email: MEDICA.email,
    address: endereco,
    geo: { "@type": "GeoCoordinates", latitude: -23.5271, longitude: -46.6769 },
    areaServed,
    medicalSpecialty: ["Gynecologic", "Obstetric"],
    availableService: servicos.map((name) => ({ "@type": "MedicalProcedure", name })),
    sameAs: [MEDICA.instagram],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${ORIGIN}/#website`,
    url: `${ORIGIN}/`,
    name: MEDICA.nome,
    inLanguage: "pt-BR",
    publisher: { "@id": `${ORIGIN}/#physician` },
  };

  const grafo: object[] = [physician, clinica, website];

  if (rota?.comFaq) {
    grafo.push({
      "@type": "FAQPage",
      "@id": `${ORIGIN}/#faq`,
      inLanguage: "pt-BR",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.pergunta,
        acceptedAnswer: { "@type": "Answer", text: f.resposta },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": grafo };
}

export function llmsTxt() {
  return [
    `# ${MEDICA.nome}`,
    "",
    `> ${MEDICA.especialidade}, em ${MEDICA.cidade}/${MEDICA.estado}. Cuida do lado`,
    "> físico, hormonal e sexual da crise do casal: falta de desejo no casamento,",
    "> baixa libido feminina e masculina, dor na relação, menopausa e fertilidade.",
    `> Atendimento presencial na ${MEDICA.bairro} (${MEDICA.regiao}) e online. Registro: ${MEDICA.registro}.`,
    "",
    "## Ficha",
    "",
    `- Profissional: ${MEDICA.nome}`,
    `- Especialidade: ${MEDICA.especialidade}`,
    `- Registro: ${MEDICA.registro} · ${MEDICA.titulos}`,
    `- Endereço: ${MEDICA.endereco}, ${MEDICA.bairro}, ${MEDICA.cidade}/${MEDICA.estado} (perto da Barra Funda, Perdizes e Pompeia)`,
    `- WhatsApp: ${MEDICA.telefone} · https://wa.me/${MEDICA.whatsapp}`,
    `- E-mail: ${MEDICA.email}`,
    `- Instagram: ${MEDICA.instagram}`,
    `- Site: ${ORIGIN}/`,
    "",
    "## Diagnóstico C.A.S.A.L",
    "",
    "Avaliação do casal (Conexão, Avaliação, Saúde, Amor e Longevidade): ela e ele são",
    "avaliados em paralelo e os resultados são lidos juntos.",
    "",
    "- Lado dela: avaliação hormonal e ginecológica (ginecologista), avaliação metabólica",
    "  (nutróloga), saúde íntima (libido, lubrificação, dor na relação), histórico e exames",
    "  antes da consulta, leitura dos resultados em casal.",
    "- Lado dele: avaliação urológica (urologista parceiro), avaliação hormonal, incluindo",
    "  testosterona, e física, histórico e exames antes da consulta, leitura dos resultados em casal.",
    "",
    "## Três caminhos",
    "",
    "- Em casal: Diagnóstico C.A.S.A.L.",
    "- Mulher: saúde íntima e sexualidade feminina (baixa libido, dor na relação, alterações",
    "  hormonais, menopausa e fertilidade).",
    "- Homem: vitalidade e saúde sexual masculina, com o urologista parceiro (testosterona,",
    "  energia, desejo e desempenho).",
    "",
    "## Como funciona (Método NOS)",
    "",
    "1. Avaliação individual: cada um conta sua história e faz os exames no próprio ritmo.",
    "2. Consulta guiada: leitura dos resultados com a Dra. Viviane, em casal ou individualmente.",
    "3. Plano de ação do casal: hormônios, sono, alimentação, atividade física e saúde sexual, com acompanhamento.",
    "",
    "## Equipe multidisciplinar",
    "",
    "- Ginecologista (Dra. Viviane Vendramini), que conduz o caso do início ao fim.",
    "- Urologista parceiro.",
    "- Nutróloga e nutricionista.",
    "- Personal trainer.",
    "",
    "Investimento: sob consulta, definido na conversa inicial de acordo com o caminho escolhido.",
    "",
    "## Formação",
    "",
    ...formacao.map((f) => `- ${f}`),
    "",
    "## Outros cuidados em saúde da mulher",
    "",
    ...outrosCuidados.map((c) => `- ${c}`),
    "",
    "## Perguntas frequentes",
    "",
    ...faq.flatMap((f) => [`### ${f.pergunta}`, "", f.resposta, ""]),
    "## Observações",
    "",
    "- A Dra. Viviane é ginecologista e não faz terapia de casal: ela cuida do lado físico,",
    "  hormonal e sexual e orienta quando é o caso de buscar também um psicólogo ou terapeuta.",
    "- Este site é informativo e não substitui consulta médica: nenhuma conduta é",
    "  indicada sem avaliação.",
    `- Fonte: ${ORIGIN}/`,
  ].join("\n");
}
