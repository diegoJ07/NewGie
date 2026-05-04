import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
// Importamos el array de datos desde tu nuevo archivo
import { PROJECTS_DATA } from "./data";

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  // Lógica de filtrado y búsqueda combinada
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesFilter = filter === "Todos" || project.tags.includes(filter);
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  const categories = ["Todos", "Residencial", "Comercial", "Remodelación"];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Nuestros proyectos
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto italic">
            Trabajos realizados con precisión y dedicación en cada detalle
            constructivo.
          </p>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 pb-8 border-b border-slate-100">
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto invisible-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Buscar proyecto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border-none rounded-full px-10 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Grilla de Proyectos con Animación */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link to={`/projects/${project.id}`} className="block">
                  <div className="rounded-3xl md:rounded-[2.5rem] overflow-hidden aspect-square mb-6 md:mb-8 relative shadow-sm border border-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 md:p-10 flex flex-col justify-end">
                      <p className="text-white text-xs md:text-sm font-medium mb-2">
                        {project.desc}
                      </p>
                      <p className="text-primary text-sm font-bold flex items-center gap-2">
                        Ver detalles <ArrowRight size={18} />
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-200 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mensaje si no hay resultados */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              No se encontraron proyectos que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setFilter("Todos");
                setSearchQuery("");
              }}
              className="text-primary font-bold mt-4 underline"
            >
              Mostrar todos los proyectos
            </button>
          </div>
        )}

        {/* Paginación (Visual) */}
        <div className="mt-20 flex justify-center gap-4">
          {[1].map((n) => (
            <button
              key={n}
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold bg-primary text-white shadow-xl shadow-primary/20"
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
