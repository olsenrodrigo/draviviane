// Navegação entre seções e pré-preenchimento do formulário de contato.
//
// Os botões dos "três caminhos" e o resultado do teste levam ao formulário já
// com a mensagem escrita ("Quero o Diagnóstico C.A.S.A.L…"). Em vez de subir
// estado até o Home, disparamos um evento que o Contact.tsx escuta.

export const EVENTO_MENSAGEM_CONTATO = "contato:mensagem";

export function irPara(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function agendar(mensagem?: string) {
  if (mensagem) {
    window.dispatchEvent(new CustomEvent(EVENTO_MENSAGEM_CONTATO, { detail: mensagem }));
  }
  irPara("contato");
}
