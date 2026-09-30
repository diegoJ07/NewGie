import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Sobre nosotros", path: "/about" },
    { name: "Proyectos", path: "/projects" },
    // { name: "test", path: "/test" },
  ];

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    // Si estamos en la misma página
    if (location.pathname === path) {
      // Si estamos en Home y existe un hash, lo eliminamos
      if (location.pathname === "/" && location.hash) {
        navigate("/", { replace: true });
      }

      // Volvemos siempre al principio
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Si estamos en otra página:
    // primero navegamos y después subimos arriba.
    navigate(path);

    // Esperamos un instante para que React Router monte
    // la nueva página antes de mover el scroll.
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 50);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-sm py-3"
          : "bg-black py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          onClick={(e) => handleNavigation(e, "/")}
          className="text-2xl font-display font-bold text-white flex items-center gap-2"
        >
          <img src="/NewGie/img/logo.png" alt="Logo" className="w-8 h-8" />
          NewGie
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavigation(e, link.path)}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* COTIZAR */}
          <Link
            to="/contact"
            onClick={(e) => handleNavigation(e, "/contact")}
            className="bg-[#17D7E4] hover:bg-[#13bfc9] text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all"
          >
            Cotizar
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavigation(e, link.path)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={(e) => handleNavigation(e, "/contact")}
                className="bg-primary text-white text-center py-3 rounded-xl font-medium"
              >
                Cotizar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
