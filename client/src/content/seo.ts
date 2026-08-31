// Registro de SEO/GEO: origem canônica, entrada por rota e o texto do llms.txt.
// Fonte única lida pelo pré-render (`entry-ssr.tsx`).
//
// O `index.html` já trazia title, description, keywords, geo e um JSON-LD de
// Physician. Faltavam três coisas: canonical (o site responde 200 em www e no
// ápice, ou seja, duas cópias para o Google), corpo indexável (o HTML servido
// era um `<div id="root">` vazio, invisível para GPTBot, ClaudeBot e
// PerplexityBot, que não executam JavaScript) e URL absoluta na imagem do
// schema.

export const ORIGIN = "https://www.dravivianevendramini.com";

export const urlDaRota = (path: string) =>
  path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`;

export const MEDICA = {
  nome: "Dra. Viviane Vendramini",
  especialidade: "Ginecologista e especialista em saúde da mulher",
  registro: "CRM-SP 134.036 / RQE 51.931",
  titulos: "TEGO / FEBRASGO",
  whatsapp: "5511991076188",
  endereco: "Av. Marquês de São Vicente, 2219 — conj. 316",
  bairro: "Jardim das Perdizes",
  cidade: "São Paulo",
  estado: "SP",
} as const;

export const formacao = [
  "Graduação — Centro Universitário Lusíada (UNILUS)",
  "Residência — H.M. Leonor Mendes de Barros",
  "Estágio internacional em Segovia, Itália",
  "Especialização em Reprodução Humana",
  "Certificações: Sírio Libanês, CETRUS e FMUSP",
] as const;

export const areas = [
  "Sexualidade Feminina",
  "Harmonização Íntima",
  "Cirurgia por Vídeo",
  "Contracepção (DIU)",
  "Implantes Hormonais",
] as const;

export const tratamentos = [
  "Reposição hormonal personalizada",
  "Programas de emagrecimento supervisionado",
  "Laser íntimo",
  "Ultrassonografia ginecológica",
  "Infertilidade feminina",
  "Tratamentos para sexualidade feminina",
] as const;

/** Espelha o bloco de dúvidas exibido na tela (HowItWorks.tsx). */
export const faq = [
  {
    pergunta: "Quando devo ir ao ginecologista?",
    resposta:
      "O ideal é realizar consultas regulares anuais ou sempre que houver sintomas. A prevenção é fundamental para detectar precocemente qualquer alteração.",
  },
  {
    pergunta: "A reposição hormonal é segura?",
    resposta:
      "Sim, quando indicada corretamente e acompanhada por médico especialista. A avaliação individualizada é essencial para definir a melhor conduta.",
  },
  {
    pergunta: "O que é laser íntimo?",
    resposta:
      "É um procedimento moderno, não cirúrgico, para melhorar a saúde e estética vaginal, indicado para ressecamento, frouxidão e outros desconfortos.",
  },
  {
    pergunta: "Como funciona o acompanhamento para emagrecimento?",
    resposta:
      "É um programa supervisionado com avaliação hormonal e metabólica completa, garantindo um processo seguro, eficaz e personalizado.",
  },
] as const;

export type Rota = { path: string; title: string; description: string; keywords: string[] };

export const rotas: Rota[] = [
  {
    path: "/",
    title:
      "Dra. Viviane Vendramini | Ginecologista em São Paulo — Jardim das Perdizes e Barra Funda",
    description:
      "Dra. Viviane Vendramini — Ginecologista em Jardim das Perdizes e Barra Funda. Especialista em saúde da mulher, reposição hormonal, fertilidade e reprodução humana em São Paulo. Agende sua consulta.",
    keywords: [
      "saúde da mulher em São Paulo",
      "ginecologia Jardim das Perdizes",
      "ginecologista Jardim das Perdizes",
      "ginecologista na Barra Funda",
      "reposição hormonal em São Paulo",
      "implante hormonal São Paulo",
      "fertilidade em São Paulo",
      "reprodução humana São Paulo",
      "laser íntimo São Paulo",
      "DIU São Paulo",
      "médica da mulher Barra Funda",
      "Dra. Viviane Vendramini",
    ],
  },
];

export function grafoJsonLd() {
  const physician = {
    "@type": "Physician",
    "@id": `${ORIGIN}/#physician`,
    name: MEDICA.nome,
    description:
      "Ginecologista especialista em saúde da mulher, reposição hormonal, fertilidade e reprodução humana em São Paulo.",
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/opengraph.jpg`,
    identifier: MEDICA.registro,
    telephone: `+${MEDICA.whatsapp}`,
    medicalSpecialty: ["Gynecology", "ObstetricsAndGynecology"],
    address: {
      "@type": "PostalAddress",
      streetAddress: MEDICA.endereco,
      addressLocality: MEDICA.cidade,
      addressRegion: MEDICA.estado,
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "São Paulo" },
      { "@type": "Neighborhood", name: "Jardim das Perdizes" },
      { "@type": "Neighborhood", name: "Barra Funda" },
    ],
    availableService: tratamentos.map((nome) => ({
      "@type": "MedicalProcedure",
      name: nome,
    })),
    knowsAbout: [...areas],
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${ORIGIN}/#faq`,
    inLanguage: "pt-BR",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${ORIGIN}/#website`,
    url: `${ORIGIN}/`,
    name: MEDICA.nome,
    inLanguage: "pt-BR",
    publisher: { "@id": `${ORIGIN}/#physician` },
  };

  return { "@context": "https://schema.org", "@graph": [physician, website, faqPage] };
}

export function llmsTxt() {
  return [
    `# ${MEDICA.nome}`,
    "",
    `> ${MEDICA.especialidade}, em ${MEDICA.cidade}/${MEDICA.estado}. Atendimento no`,
    `> ${MEDICA.bairro}, cobrindo também a Barra Funda. Reposição hormonal,`,
    `> fertilidade, contracepção e saúde íntima. Registro: ${MEDICA.registro}.`,
    "",
    "## Ficha",
    "",
    `- Profissional: ${MEDICA.nome}`,
    `- Especialidade: ${MEDICA.especialidade}`,
    `- Registro: ${MEDICA.registro} — ${MEDICA.titulos}`,
    `- Endereço: ${MEDICA.endereco}, ${MEDICA.bairro}, ${MEDICA.cidade}/${MEDICA.estado}`,
    `- WhatsApp: https://wa.me/${MEDICA.whatsapp}`,
    `- Site: ${ORIGIN}/`,
    "",
    "## Formação",
    "",
    ...formacao.map((f) => `- ${f}`),
    "",
    "## Áreas de atuação",
    "",
    ...areas.map((a) => `- ${a}`),
    "",
    "## Tratamentos",
    "",
    ...tratamentos.map((t) => `- ${t}`),
    "",
    "## Como é o atendimento",
    "",
    "- Consulta com tempo dedicado, em ambiente privativo.",
    "- Abordagem que une corpo, mente e saúde íntima em todas as fases da vida.",
    "- Atendimento online disponível conforme avaliação.",
    "",
    "## Perguntas frequentes",
    "",
    ...faq.flatMap((f) => [`### ${f.pergunta}`, "", f.resposta, ""]),
    "## Observações",
    "",
    "- Este site é informativo e não substitui consulta médica: nenhuma conduta é",
    "  indicada sem avaliação presencial.",
    `- Fonte: ${ORIGIN}/`,
  ].join("\n");
}
