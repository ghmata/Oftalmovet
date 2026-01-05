import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import blogImage1 from "@/assets/images/B1.png";
import blogImage2 from "@/assets/images/B2.png";
import blogImage3 from "@/assets/images/B3.png";
import logoBanner from "@/assets/images/newl.png";
import divisorImg from "@/assets/images/Divisor.png";
import eyesBanner from "@/assets/images/teste1.png";
import logoNoBack from "@/assets/images/logo_no_back.png";

export const blogPosts = [
  {
    id: "problemas-oculares-sazonais",
    title: "Identificação e Manejo dos Problemas Oculares Sazonais em Pets",
    excerpt: "Os animais de estimação são membros valiosos de nossas famílias, e é essencial cuidar de sua saúde ocular. Os problemas oculares sazonais são mais comuns em certas épocas do ano...",
    image: blogImage1,
    date: "15 de Dezembro, 2024",
    category: "Saúde Ocular",
  },
  {
    id: "desordens-hereditarias",
    title: "Desordens Hereditárias e Genéticas em Raças Caninas",
    excerpt: "Entenda como as desordens hereditárias impactam a saúde ocular dos cães e como a seleção genética responsável pode prevenir problemas...",
    image: blogImage2,
    date: "10 de Dezembro, 2024",
    category: "Genética",
  },
  {
    id: "principais-doencas-oculares",
    title: "Principais Doenças Oculares em Cães e Gatos",
    excerpt: "Conheça as doenças oculares mais comuns em cães e gatos, como detectar cada uma delas e quando procurar um especialista...",
    image: blogImage3,
    date: "5 de Dezembro, 2024",
    category: "Doenças",
  },
];

const Blog = () => {
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
              Artigos e Informações
            </h1>
            <p className="text-xl text-foreground/80">
              Conteúdo educativo sobre saúde ocular animal para tutores conscientes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divisor */}
      <img src={divisorImg} alt="" className="w-full" />

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all">
                    <div className="relative p-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-auto object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <h2 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        Ler mais
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
