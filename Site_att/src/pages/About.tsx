import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, GraduationCap, Heart, Eye, Stethoscope } from "lucide-react";
import aboutImage from "@/assets/images/Apresentacao_2.jpeg";
import logoBanner from "@/assets/images/logo_completa_oftalmo.jpg";
import divisorImg from "@/assets/images/Divisor.png";

const About = () => {
  return (
    <Layout>
      {/* Logo Banner */}
      <section className="bg-background overflow-hidden">
        <img
          src={logoBanner}
          alt="Oftalmologia Animal"
          className="w-full h-64 md:h-72 object-cover object-center"
        />
        <img
          src={divisorImg}
          alt=""
          className="w-full"
        />
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutImage}
                alt="Dr. Leonardo Balthazar"
                className="rounded-2xl shadow-elevated w-full"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Uma paixão pela saúde visual animal
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Com mais de 15 anos de experiência em medicina veterinária,
                  o Dr. Leonardo Balthazar dedica sua carreira ao cuidado especializado
                  da saúde ocular de animais de companhia.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sua formação sólida e constante atualização permitem oferecer
                  os tratamentos mais avançados disponíveis na oftalmologia veterinária,
                  sempre com foco no bem-estar e na qualidade de vida dos pacientes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Formação Acadêmica
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-1" />
                    <p className="text-muted-foreground">
                      Graduado em Medicina Veterinária pela Universidade de Marília
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-1" />
                    <p className="text-muted-foreground">
                      Graduado em Zootecnia pela Universidade Estadual de Maringá
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-1" />
                    <p className="text-muted-foreground">
                      Especialização em Oftalmologia e Microcirurgia Ocular
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 p-6 rounded-xl shadow-elevated inline-block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-primary">CRMV-SP</p>
                    <p className="text-primary/70 font-medium">36.811</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground">
              Princípios que guiam nosso trabalho todos os dias
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Cuidado Humanizado",
                description: "Tratamos cada paciente com carinho e respeito, entendendo a importância do vínculo entre tutores e seus pets.",
              },
              {
                icon: Eye,
                title: "Excelência Técnica",
                description: "Investimos constantemente em atualização e equipamentos para oferecer o melhor tratamento disponível.",
              },
              {
                icon: Stethoscope,
                title: "Atendimento Completo",
                description: "Oferecemos desde diagnóstico preciso até tratamentos cirúrgicos avançados, tudo em um só lugar.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-card text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
