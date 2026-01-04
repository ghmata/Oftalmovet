import { motion } from "framer-motion";
import catarataImg from "@/assets/images/Cirurgia de Catarata com Implante de Lente.jpg";
import glaucomaImg from "@/assets/images/Tratamentos Clínicos e Cirúrgicos para Glaucoma.jpg";
import epiforaImg from "@/assets/images/Epifora_(lagrima_acida).jpg";
import cherryImg from "@/assets/images/Olho de Cereja.jpg";
import corneaImg from "@/assets/images/Cirurgias de Córnea.jpg";
import retinaImg from "@/assets/images/Estudo da Retina Eletrorretinografia.jpg";

const specialties = [
  {
    image: catarataImg,
    title: "Cirurgia de Catarata com Implante de Lente",
    description: "Cirurgia com implante de lente intraocular para restauração da visão",
  },
  {
    image: glaucomaImg,
    title: "Tratamentos Clínicos e Cirúrgicos para Glaucoma",
    description: "Tratamentos clínicos e cirúrgicos para controle da pressão intraocular",
  },
  {
    image: epiforaImg,
    title: "Epífora",
    description: "Tratamento da 'lágrima ácida' e excesso de lacrimejamento",
  },
  {
    image: cherryImg,
    title: "Olho de Cereja",
    description: "Correção cirúrgica do prolapso da glândula da terceira pálpebra",
  },
  {
    image: corneaImg,
    title: "Cirurgias de Córnea",
    description: "Ceratoplastias, enxertos e tratamento de úlceras corneanas",
  },
  {
    image: retinaImg,
    title: "Estudo da Retina Eletrorretinografia",
    description: "Estudo avançado da função retiniana para diagnóstico preciso",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SpecialtiesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Especialidades
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tratamentos Especializados
          </h2>
          <p className="text-muted-foreground">
            Oferecemos uma gama completa de serviços oftalmológicos para
            garantir a saúde visual do seu pet
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {specialties.map((specialty) => (
            <motion.div
              key={specialty.title}
              variants={item}
              className="group bg-primary/5 p-4 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-primary/10 scale-[0.68] origin-center"
            >
              <div className="rounded-3xl overflow-hidden mb-4 w-full group-hover:scale-105 transition-transform duration-500">
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {specialty.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
