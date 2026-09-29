import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, MapPin, Instagram, ShieldCheck } from "lucide-react";
import { EVENTO_MENSAGEM_CONTATO } from "@/lib/navegacao";
import { MEDICA, linkWhatsApp } from "@/content/seo";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [autorizado, setAutorizado] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Botões dos caminhos e do teste chegam aqui com a mensagem já escrita.
  useEffect(() => {
    const preencher = (e: Event) => {
      const mensagem = (e as CustomEvent<string>).detail;
      setStatus("idle");
      setFormData((f) => ({ ...f, message: mensagem }));
    };
    window.addEventListener(EVENTO_MENSAGEM_CONTATO, preencher);
    return () => window.removeEventListener(EVENTO_MENSAGEM_CONTATO, preencher);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message || !autorizado) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setAutorizado(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-24" style={{ backgroundColor: "#EDE3D0" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6 border" style={{ backgroundColor: "rgba(184,150,78,0.10)", borderColor: "rgba(184,150,78,0.25)" }}>
            <span className="text-sm font-medium" style={{ color: "#8B6A2E" }}>Contato e agendamento</span>
          </div>

          <h2
            className="font-bold mb-6 leading-tight"
            style={{ color: "#6B4560", fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)" }}
          >
            Agende sua consulta com a Dra. Viviane Vendramini
          </h2>

          <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Preencha os dados e nossa equipe entra em contato, ou fale direto pelo WhatsApp. Atendimento presencial
            na Água Branca (zona oeste de São Paulo) e online.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(184,150,78,0.18)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(184,150,78,0.10)" }}>
                  <MapPin className="w-5 h-5" style={{ color: "#B8964E" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Localização</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                    Av. Marquês de São Vicente, 2219, conj. 316<br />
                    Água Branca, São Paulo/SP<br />
                    <span style={{ color: "#8B6A2E" }}>Presencial e online</span>
                  </p>
                  <a
                    href="https://maps.google.com/?q=Av+Marques+de+Sao+Vicente+2219+Agua+Branca+Sao+Paulo+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-2 inline-block hover:underline"
                    style={{ color: "#8B6A2E" }}
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(184,150,78,0.18)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(184,150,78,0.10)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8964E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 5.42 5.42l1.21-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.22 16z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Agendamento</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    <a
                      href={linkWhatsApp()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-semibold"
                      style={{ color: "#8B6A2E" }}
                    >
                      {MEDICA.telefone}
                    </a>
                    <br />
                    WhatsApp ou formulário
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(184,150,78,0.18)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(184,150,78,0.10)" }}>
                  <Instagram className="w-5 h-5" style={{ color: "#B8964E" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Instagram</p>
                  <a
                    href={MEDICA.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "#8B6A2E" }}
                  >
                    @dravivianevendramini
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#2D1A28" }}>Mensagem enviada!</h3>
                  <p className="mb-6" style={{ color: "#3C3C3C" }}>
                    Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 rounded-lg border font-medium transition-colors hover:bg-gray-50 cursor-pointer"
                    style={{ borderColor: "rgba(184,150,78,0.25)", color: "#2D1A28" }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>Nome</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                        style={{ borderColor: "rgba(184,150,78,0.25)" }}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>Telefone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                        style={{ borderColor: "rgba(184,150,78,0.25)" }}
                        placeholder="(XX) XXXXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                      style={{ borderColor: "rgba(184,150,78,0.25)" }}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>Mensagem</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all resize-none outline-none"
                      style={{ borderColor: "rgba(184,150,78,0.25)" }}
                      placeholder="Conte em poucas palavras o que você procura: para o casal, para você ou para ele."
                    />
                  </div>

                  <div
                    className="flex items-start gap-3 rounded-xl p-4 text-sm"
                    style={{ backgroundColor: "rgba(184,150,78,0.08)", color: "#3C3C3C" }}
                  >
                    <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#8B6A2E" }} />
                    <p className="text-sm leading-relaxed">
                      Seus dados são usados só para retornarmos o contato e não são compartilhados. Não é preciso
                      descrever sintomas nem enviar exames por aqui: isso fica para a consulta.
                    </p>
                  </div>

                  <label className="flex items-start gap-3 text-sm cursor-pointer" style={{ color: "#3C3C3C" }}>
                    <input
                      type="checkbox"
                      required
                      checked={autorizado}
                      onChange={(e) => setAutorizado(e.target.checked)}
                      className="mt-1 w-4 h-4 flex-shrink-0 accent-[#B8964E]"
                    />
                    <span>
                      Autorizo a equipe da Dra. Viviane Vendramini a entrar em contato pelos dados informados, conforme a{" "}
                      <a href="/politica-de-privacidade" target="_blank" className="underline" style={{ color: "#8B6A2E" }}>
                        Política de Privacidade
                      </a>
                      {" "}(LGPD).
                    </span>
                  </label>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">Ocorreu um erro ao enviar. Tente novamente.</p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg, #B8964E 0%, #2D1A28 100%)" }}
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                    ) : (
                      <>Quero agendar <Send size={20} /></>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg border"
          style={{ borderColor: "rgba(184,150,78,0.18)" }}
        >
          <iframe
            title="Mapa do consultório da Dra. Viviane Vendramini na Água Branca, São Paulo"
            src="https://maps.google.com/maps?q=Av+Marques+de+Sao+Vicente+2219+Agua+Branca+Sao+Paulo+SP&output=embed"
            width="100%"
            height="360"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
