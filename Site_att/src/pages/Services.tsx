import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Scissors,
  Microscope,
  Users,
  Eye,
  Sparkles,
  Droplets,
  Cherry,
  Activity,
  Scan,
  Check
} from "lucide-react";
import logoBanner from "@/assets/images/newl.png";
import divisorImg from "@/assets/images/Divisor.png";
import eyesBanner from "@/assets/images/teste1.png";
import logoNoBack from "@/assets/images/logo_no_back.png";

const mainServices = [
  {
    id: "oftalmologia-clinica",
    icon: Stethoscope,
    title: "Oftalmologia Clínica",
    description: "Atendimento clínico e oftalmológico completo para cães, gatos e pets não convencionais.",
    features: [
      "Consultas especializadas",
      "Exames diagnósticos avançados",
      "Tratamentos clínicos personalizados",
      "Acompanhamento contínuo",
      "Orientação preventiva",
    ],
  },
  {
    id: "cirurgia-ocular",
    icon: Scissors,
    title: "Cirurgia Ocular",
    description: "Procedimentos cirúrgicos avançados para correção de diversos problemas oculares.",
    features: [
      "Blefaroplastias (pálpebras)",
      "Remoção de neoplasias oculares",
      "Cirurgias de bulbo ocular",
      "Procedimentos orbitários",
      "Correções palpebrais",
    ],
  },
  {
    id: "microcirurgia",
    icon: Microscope,
    title: "Microcirurgia",
    description: "Procedimentos de alta precisão para tratamentos delicados da superfície ocular.",
    features: [
      "Ceratoplastias (córnea e limbo)",
      "Crioterapia ocular",
      "Microcirurgia de córnea e esclera",
      "Enxertos e transplantes",
      "Xenotransplantes",
    ],
  },
  {
    id: "parcerias",
    icon: Users,
    title: "Parcerias",
    description: "Rede integrada de atendimento com profissionais especializados.",
    features: [
      "Médicos veterinários parceiros",
      "Encaminhamentos especializados",
      "Atendimento integrado",
      "Segunda opinião",
      "Suporte técnico",
    ],
  },
];

const specialties = [
  {
    id: "cirurgia-catarata",
    icon: Sparkles,
    title: "Cirurgia de Catarata com Implante de Lente",
    description: "Cirurgia de facoemulsificação com implante de lente intraocular para restauração completa da visão. Técnica moderna e segura.",
  },
  {
    id: "tratamento-glaucoma",
    icon: Activity,
    title: "Tratamentos para Glaucoma",
    description: "Tratamentos clínicos e cirúrgicos para controle da pressão intraocular, incluindo laser e procedimentos de drenagem.",
  },
  {
    icon: Droplets,
    title: "Epífora (Lágrima Ácida)",
    description: "Diagnóstico e tratamento do lacrimejamento excessivo, com correção das causas subjacentes e orientações de manejo.",
  },
  {
    icon: Cherry,
    title: "Olho de Cereja",
    description: "Correção cirúrgica do prolapso da glândula da terceira pálpebra, preservando a função lacrimal do olho.",
  },
  {
    id: "cirurgias-cornea",
    icon: Eye,
    title: "Cirurgias de Córnea",
    description: "Tratamento de úlceras, descemetoceles, sequestros corneanos e outras alterações da superfície ocular.",
  },
  {
    icon: Scan,
    title: "Eletrorretinografia (ERG)",
    description: "Exame avançado para avaliação funcional da retina, essencial para diagnóstico de retinopatias e antes de cirurgias de catarata.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/20 via-accent to-primary/5 relative overflow-hidden">
        {/* Decorative Eyes Banner - positioned at top, very translucent */}
        <div className="absolute inset-x-0 top-0 opacity-[0.25] pointer-events-none overflow-hidden h-full">
          <img src={eyesBanner} alt="" className="w-full h-auto object-cover object-top scale-[6] translate-y-28 translate-x-0 lg:scale-[1.6] lg:translate-y-8 lg:translate-x-12" />
        </div>


        {/* Centered Logo Background - full height, translucent */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src={logoNoBack} alt="" className="h-80 lg:h-full w-auto opacity-[0.40] translate-x-56 scale-[2.2] lg:translate-x-96 lg:scale-[2.88]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-foreground/80">
              Tratamentos oftalmológicos completos para a saúde visual do seu pet
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divisor */}
      <img src={divisorImg} alt="" className="w-full" />

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-muted-foreground">
              Atendimento especializado em todas as áreas da oftalmologia veterinária
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all scroll-mt-24"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-2xl text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Procedimentos Especializados
            </h2>
            <p className="text-muted-foreground">
              Tratamentos avançados com tecnologia de ponta
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                id={specialty.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all group scroll-mt-24"
              >
                <div className="w-14 h-14 rounded-xl bg-accent group-hover:gradient-primary flex items-center justify-center mb-6 transition-all">
                  <specialty.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {specialty.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Seu pet precisa de cuidados oftalmológicos?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Agende uma avaliação e garanta a saúde visual do seu melhor amigo
            </p>
            <Button variant="secondary" size="xl" asChild>
              <a
                href="https://wa.me/5519983989800?text=Olá, vim pelo site! Gostaria de atendimento Oftalmológico para meu PET"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
