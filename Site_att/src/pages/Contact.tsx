import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from "lucide-react";
import contactHeroImg from "@/assets/images/Imagem_Pagina__contato.jpg";
import divisorImg from "@/assets/images/Divisor.png";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-accent via-background to-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Contato
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl text-muted-foreground">
                Estamos prontos para atender você e seu pet. Entre em contato
                para agendar uma consulta ou tirar suas dúvidas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <img src={divisorImg} alt="" className="w-full" />

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-elevated">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Envie uma Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(19) 99999-9999"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva sua necessidade ou dúvida..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl text-primary-foreground">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Atendimento Rápido via WhatsApp
                </h3>
                <p className="mb-6 opacity-90">
                  Para agendar sua consulta de forma rápida, entre em contato
                  diretamente pelo WhatsApp.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/5519983989800?text=Olá, vim pelo site! Gostaria de atendimento Oftalmológico para meu PET"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-5 h-5" />
                    (19) 98398-9800
                  </a>
                </Button>
              </div>

              {/* Contact Details */}
              <div className="bg-card p-8 rounded-2xl shadow-card space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av 14a, 254, entre ruas 5b e 6b<br />
                      Rio Claro - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Telefone</h4>
                    <a
                      href="tel:+5519983989800"
                      className="text-primary hover:text-primary-dark transition-colors font-medium"
                    >
                      (19) 98398-9800
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">E-mail</h4>
                    <a
                      href="mailto:contato@oftalmologiaanimal.com.br"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      contato@oftalmologiaanimal.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Horário</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/oftalmologiaanimal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl shadow-card hover:shadow-elevated transition-all group"
                >
                  <Instagram className="w-6 h-6 text-primary" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    @oftalmologiaanimal
                  </span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-card rounded-xl shadow-card hover:shadow-elevated flex items-center justify-center transition-all group"
                >
                  <Facebook className="w-6 h-6 text-primary" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] rounded-2xl overflow-hidden shadow-elevated"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0373!2d-47.5574!3d-22.4149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI0JzUzLjYiUyA0N8KwMzMnMjYuNiJX!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Oftalmologia Animal"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
