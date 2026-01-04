import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Stethoscope, Eye } from "lucide-react";
import heroImage from "@/assets/images/Foto apresentacao.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-muted" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mt-8"
          >

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Cuidando da{" "}
              <span className="text-gradient">visão</span>
              <br />
              do seu melhor amigo
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Tratamento especializado em oftalmologia clínica, cirúrgica e
              microcirurgia ocular para cães, gatos e animais exóticos.
              Atendimento em Rio Claro e região.
            </p>

            {/* Credentials */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Award className="w-4 h-4" />
                  <span>CRMV-SP 36.811</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Stethoscope className="w-4 h-4" />
                  <span>+15 anos de experiência</span>
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Graduado em Medicina Veterinária pela Universidade de Marília</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Graduado em Zootecnia pela Universidade Estadual de Maringá</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Especialização em Oftalmologia e Microcirurgia Ocular</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Atua na Área de Oftalmologia Clínica, Cirúrgica e Microcirurgia de Animais de Companhia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Realiza Atendimentos Clínicos, cirúrgicos e microcirúrgicos em Rio Claro e Região (Interior de SP)</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://wa.me/5519983989800?text=Olá, vim pelo site! Gostaria de atendimento Oftalmológico para meu PET"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agende uma Avaliação
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#servicos">Nossos Serviços</a>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Dr. Leonardo Balthazar - Oftalmologista Veterinário"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-elevated"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
