import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5519983989800?text=Olá, vim pelo site! Gostaria de atendimento Oftalmológico para meu PET"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[hsl(145,63%,49%)] shadow-elevated hover:shadow-glow flex items-center justify-center group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contato via WhatsApp"
    >
      <Phone className="w-8 h-8 text-primary-foreground fill-primary-foreground" />

      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[hsl(145,63%,49%)] animate-ping opacity-25" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-4 py-2 bg-foreground text-primary-foreground text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-elevated">
        Fale conosco!
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
