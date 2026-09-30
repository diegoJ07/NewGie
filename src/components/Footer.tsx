import { useState } from "react";
import { Link } from "react-router-dom";
import {
  // Facebook,
  Instagram,
  Linkedin,
  Mail,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const telefono = "+549221438-3512";

const servicios = [
  "Construcción",
  "Remodelaciones",
  "Diseño",
  "Mantenimiento",
  "Cuadrillas",
];

const redes = [
  // { name: "Facebook", icon: Facebook, url: "#" },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/new.gie/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/newgie-construcciones-318b003b2/",
  },
  { name: "Mail", icon: Mail, url: "mailto:newgieinstalaciones@gmail.com" },
];

const crearLinkWhatsApp = (servicio: string) => {
  const mensaje = `Hola queria saber sobre el servicio de ${servicio}`;
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
};

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxahi4ZSGAVyysy7uSUCq-I9fqivc3WWNMIo6oMfl_3cDtYfnQSQP6feivYl-zN5k_A/exec";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("email", email);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSubscribed(true);
      setEmail("");
    } catch (err) {
      setError("No pudimos procesar tu suscripción. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

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

            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm bg-slate-900 border border-slate-800 p-3 rounded-lg">
                <CheckCircle2 size={18} className="shrink-0" />
                <span>¡Gracias por suscribirte a NewGie!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 max-w-sm">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo"
                    className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary hover:bg-primary-dark px-4 py-2.5 rounded-lg text-sm font-bold transition-colors shrink-0 flex items-center justify-center min-w-[52px] disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      "OK"
                    )}
                  </button>
                </div>
                {error && <p className="text-xs text-red-400">{error}</p>}
              </form>
            )}
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
          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
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
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-6">Síguenos</h4>

            <div className="flex flex-wrap gap-4">
              {redes.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-slate-400 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} NewGie. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300">
              Política de privacidad
            </Link>
            <Link to="/terms" className="hover:text-slate-300">
              Términos de servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
