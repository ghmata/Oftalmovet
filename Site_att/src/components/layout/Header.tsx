import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/images/newlogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Serviços", path: "/servicos" },
  { name: "Blog", path: "/blog" },
  { name: "Contato", path: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoImg} alt="Oftalmologia Animal" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-foreground leading-tight">
                Oftalmologia
              </span>
              <span className="font-heading text-sm text-primary font-medium">
                Animal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 relative py-2 ${isActive(link.path)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href="https://wa.me/5519983989800?text=Olá, vim pelo site! Gostaria de atendimento Oftalmológico para meu PET"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-3 px-4 rounded-lg transition-colors ${isActive(link.path)
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="whatsapp" size="lg" className="mt-2" asChild>
                <a
                  href="https://wa.me/5519983989800?text=Olá, vim pelo site! Gostaria de atendimento Oftalmológico para meu PET"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
