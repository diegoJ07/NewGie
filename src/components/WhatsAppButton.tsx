/* WhatsAppButton.tsx */

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+5493512902552";
  const message =
    "Hola, me gustaría obtener más información sobre sus servicios de construcción.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      /* 
         CAMBIO AQUÍ: 
         Se reemplaza 'bottom-6' por 'bottom-20 md:bottom-24' 
         para que quede perfectamente alineado sobre el botón de FAQ.
      */
      className="fixed bottom-20 md:bottom-24 right-6 z-[40] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center border-2 border-white group transition-all"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="md:w-8 md:h-8" />

      {/* Texto expansible */}
      <span className="hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
        WhatsApp
      </span>
    </motion.a>
  );
}
