import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import clinicaImg from "@/assets/images/Oftalmologia Clínica.jpg";
import cirurgiaImg from "@/assets/images/Cirurgia.jpg";
import microcirurgiaImg from "@/assets/images/Microcirurgia.png";
import parceriasImg from "@/assets/images/Parcerias.png";

const services = [
  {
    image: clinicaImg,
    title: "Oftalmologia Clínica",
    description: "Atendimento clínico e oftalmológico completo para cães, gatos e pets não convencionais, com diagnóstico preciso e tratamento personalizado.",
    features: ["Consultas especializadas", "Exames diagnósticos", "Tratamentos clínicos"],
  },
  {
    image: cirurgiaImg,
    title: "Cirurgia Ocular",
    description: "Procedimentos cirúrgicos avançados para correção de problemas oculares, realizados com técnicas modernas e seguras.",
    features: ["Blefaroplastias", "Neoplasias oculares", "Bulbo ocular e órbita"],
  },
  {
    image: microcirurgiaImg,
    title: "Microcirurgia",
    description: "Procedimentos de alta precisão para tratamentos delicados da superfície ocular, córnea e esclera.",
    features: ["Ceratoplastias", "Transplantes", "Crioterapia"],
  },
  {
    image: parceriasImg,
    title: "Parcerias",
    description: "Atendimento integrado com médicos veterinários parceiros e encaminhamentos para tratamentos especializados.",
    features: ["Rede de parceiros", "Encaminhamentos", "Atendimento integrado"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cuidado Completo para seu Pet
          </h2>
          <p className="text-muted-foreground">
            Contamos com estrutura completa e equipe especializada para
            oferecer o melhor atendimento oftalmológico
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-primary/5 border border-primary/10 rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:border-primary/30"
            >
              <div className="p-4">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full max-h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
              </div>

              <div className="px-4 pb-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/servicos">Ver Todos os Serviços</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
