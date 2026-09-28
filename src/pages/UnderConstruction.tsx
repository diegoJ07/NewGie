import { motion } from "framer-motion";
import { Hammer, HardHat, Construction } from "lucide-react";
import { Link } from "react-router-dom";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-white px-6 text-center">
      {/* Icono animado */}
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mb-6"
      >
        <Construction size={80} className="text-[#13bfc9]" />
      </motion.div>

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#000]">
        Página en construcción
      </h1>

      {/* Subtítulo */}
      <p className="text-slate-400 max-w-xl mb-8">
        Estamos trabajando para traerte esta sección muy pronto. Nuestro equipo
        está construyendo algo increíble 🏗️
      </p>

      {/* Animación de herramientas */}
      <div className="flex gap-6 mb-10">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <Hammer size={40} className="text-[#13bfc9]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HardHat size={40} className="text-[#13bfc9]" />
        </motion.div>
      </div>

      {/* Botón para volver */}
      <Link
        to="/"
        className="bg-[#13bfc9] hover:bg-[#17D7E4] text-black font-semibold px-6 py-3 rounded-xl transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
