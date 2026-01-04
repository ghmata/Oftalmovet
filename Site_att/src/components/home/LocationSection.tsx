import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Localização
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Venha nos Visitar
          </h2>
          <p className="text-muted-foreground">
            Estamos localizados em Rio Claro - SP, com fácil acesso e estacionamento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address Card */}
            <div className="bg-card p-6 rounded-2xl shadow-card space-y-6">
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
                  <h4 className="font-heading font-semibold text-foreground mb-1">Telefone / WhatsApp</h4>
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
                  <h4 className="font-heading font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl">
              <p className="text-foreground font-medium mb-2">
                Acompanhe nosso trabalho no Instagram
              </p>
              <a
                href="https://instagram.com/oftalmologiaanimal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors font-semibold"
              >
                @oftalmologiaanimal
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
