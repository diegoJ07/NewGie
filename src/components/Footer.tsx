import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
} from "lucide-react";

const telefono = "5493512902552";

const servicios = [
  "Construcción",
  "Remodelaciones",
  "Diseño",
  "Mantenimiento",
  "Cuadrillas",
];

const crearLinkWhatsApp = (servicio: string) => {
  const mensaje = `Hola queria saber sobre el servicio de ${servicio}`;
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold mb-6 block">
              NewGie
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Recibe noticias sobre nuestros proyectos y servicios.
            </p>
            <div className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Tu correo"
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary-dark px-4 py-2.5 rounded-lg text-sm font-bold transition-colors shrink-0">
                OK
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-primary transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <ul className="space-y-4 text-slate-400 text-sm">
            {servicios.map((servicio) => (
              <li key={servicio}>
                <a
                  href={crearLinkWhatsApp(servicio)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {servicio}
                </a>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-6">Síguenos</h4>
            <div className="flex flex-wrap gap-4">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-slate-400 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} NewGie. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-slate-300">
              Términos de servicio
            </a>
            <a href="#" className="hover:text-slate-300">
              Configuración de cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
