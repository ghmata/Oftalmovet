import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, MapPin, Instagram, Facebook, Mail } from "lucide-react";
import logoImg from "@/assets/images/newlogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to page and scroll to top
  const handleNavigate = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  // Navigate to section on same page or different page
  const handleSectionNavigate = (path: string, sectionId?: string) => {
    if (location.pathname === path && sectionId) {
      // Same page - scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Different page - navigate and scroll to top (or section if specified)
      navigate(path);
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <button onClick={() => handleNavigate("/")} className="flex items-center gap-3">
              <img src={logoImg} alt="Oftalmologia Animal" className="w-10 h-10 object-contain" />
              <div className="flex flex-col text-left">
                <span className="font-heading font-bold text-lg leading-tight">
                  Oftalmologia
                </span>
                <span className="font-heading text-sm text-primary font-medium">
                  Animal
                </span>
              </div>
            </button>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Cuidado especializado para a saúde ocular do seu pet.
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              <span className="font-medium">Cidades atendidas:</span> Rio Claro, Araras, São Pedro, Pirassununga, Piracicaba, Charqueada, Leme e Região.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              CRMV-SP 36.811
            </p>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <button onClick={() => handleSectionNavigate("/servicos", "oftalmologia-clinica")} className="hover:text-primary transition-colors text-left">
                  Oftalmologia Clínica
                </button>
              </li>
              <li>
                <button onClick={() => handleSectionNavigate("/servicos", "cirurgia-catarata")} className="hover:text-primary transition-colors text-left">
                  Cirurgia de Catarata
                </button>
              </li>
              <li>
                <button onClick={() => handleSectionNavigate("/servicos", "tratamento-glaucoma")} className="hover:text-primary transition-colors text-left">
                  Tratamento de Glaucoma
                </button>
              </li>
              <li>
                <button onClick={() => handleSectionNavigate("/servicos", "microcirurgia")} className="hover:text-primary transition-colors text-left">
                  Microcirurgia Ocular
                </button>
              </li>
              <li>
                <button onClick={() => handleSectionNavigate("/servicos", "cirurgias-cornea")} className="hover:text-primary transition-colors text-left">
                  Cirurgias de Córnea
                </button>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <button onClick={() => handleNavigate("/")} className="hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/sobre")} className="hover:text-primary transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/blog")} className="hover:text-primary transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate("/contato")} className="hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">
                  Av 14a, 254, entre ruas 5b e 6b<br />
                  Rio Claro - SP
                </span>
              </li>
              <li>
                <a
                  href="tel:+5519983989800"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">(19) 98398-9800</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@oftalmologiaanimal.com.br"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm break-all">contato@oftalmologiaanimal.com.br</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://wa.me/5519983989800?text=Olá, vim pelo site! Gostaria de atendimento Oftalmológico para meu PET"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://instagram.com/medvetleonardofiorio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://www.facebook.com/oftalmologiaanimal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-left">
            © {currentYear} Oftalmologia Animal. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Dr. Leonardo F. Balthazar - CRMV-SP 36.811
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
