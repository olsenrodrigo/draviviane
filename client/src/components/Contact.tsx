import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) return;

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
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#F0E4EA" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(155, 107, 122, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#2D1A28" }}>Entre em Contato</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Agende sua consulta
          </h3>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Preencha os dados e entraremos em contato
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(155, 107, 122, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F7EAF0" }}>
                  <MapPin className="w-5 h-5" style={{ color: "#9B6B7A" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Localização</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    São Paulo / SP<br />
                    <span style={{ color: "#9B6B7A" }}>Presencial e Online</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(155, 107, 122, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F7EAF0" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B6B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 5.42 5.42l1.21-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.22 16z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Agendamento</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    Via WhatsApp ou formulário<br />
                    <span style={{ color: "#9B6B7A" }}>Retorno em breve</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(155, 107, 122, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F7EAF0" }}>
                  <Instagram className="w-5 h-5" style={{ color: "#9B6B7A" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Instagram</p>
                  <a
                    href="https://www.instagram.com/dravivianevendramini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "#9B6B7A" }}
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
                  <h4 className="text-xl font-bold mb-2" style={{ color: "#2D1A28" }}>Mensagem Enviada!</h4>
                  <p className="mb-6" style={{ color: "#3C3C3C" }}>
                    Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 rounded-lg border font-medium transition-colors hover:bg-gray-50 cursor-pointer"
                    style={{ borderColor: "rgba(155, 107, 122, 0.3)", color: "#2D1A28" }}
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
                        style={{ borderColor: "rgba(155, 107, 122, 0.3)" }}
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
                        style={{ borderColor: "rgba(155, 107, 122, 0.3)" }}
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
                      style={{ borderColor: "rgba(155, 107, 122, 0.3)" }}
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
                      style={{ borderColor: "rgba(155, 107, 122, 0.3)" }}
                      placeholder="Como posso te ajudar?"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">Ocorreu um erro ao enviar. Tente novamente.</p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg, #9B6B7A 0%, #2D1A28 100%)" }}
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
      </div>
    </section>
  );
}
