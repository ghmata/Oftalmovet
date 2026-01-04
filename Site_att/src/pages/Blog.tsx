import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import blogImage1 from "@/assets/images/B1.png";
import blogImage2 from "@/assets/images/B2.png";
import blogImage3 from "@/assets/images/B3.png";
import divisorImg from "@/assets/images/Divisor.png";

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
      <section className="py-20 bg-gradient-to-br from-accent via-background to-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Artigos e Informações
            </h1>
            <p className="text-xl text-muted-foreground">
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
