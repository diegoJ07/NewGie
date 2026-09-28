import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FaqButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Si ya estamos en Home
    if (location.pathname === "/") {
      const faqSection = document.getElementById("faqs");

      if (faqSection) {
        faqSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Si estamos en cualquier otra página,
    // vamos directamente al Home con el hash #faqs
    navigate("/#faqs");
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[40] bg-[#0f172a] hover:bg-[#1e293b] text-white p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center border-2 border-white group transition-all cursor-pointer"
      aria-label="Ir a preguntas frecuentes"
    >
      <HelpCircle size={28} className="md:w-8 md:h-8" />

      <span className="hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
        Preguntas Frecuentes
      </span>
    </motion.button>
  );
}
