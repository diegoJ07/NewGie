import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
// Importamos los datos centralizados
import { PROJECTS_DATA } from "./data";

export default function ProjectDetail() {
  const { id } = useParams();

  // Buscamos el proyecto específico por su ID
  const project = PROJECTS_DATA.find((p) => p.id === id);

  // Manejo de error: Si el ID no existe en data.ts
  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Proyecto no encontrado</h2>
        <p className="text-slate-500 mb-8">
          El proyecto que buscas no existe o ha sido movido.
        </p>
        <Link to="/projects" className="btn-primary px-8">
          Volver a Proyectos
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Navegación de regreso */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 font-medium text-sm group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Volver a proyectos
        </Link>

        {/* Encabezado Dinámico */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 md:mb-8">
              {project.title}
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 mt-6 md:mt-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <ChevronLeft />
              </button>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Principal */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[3rem] overflow-hidden aspect-video shadow-2xl relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary/10 pointer-events-none"></div>
          </motion.div>

          {/* Grilla de Información y Storytelling */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20">
            <div className="lg:col-span-5 bg-black text-white p-8 md:p-12 rounded-3xl md:rounded-[3rem] self-start space-y-10 md:space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-8 md:mb-10">
                  Ficha Técnica
                </h3>
                <div className="space-y-6 md:space-y-8">
                  {Object.entries(project.details).map(([key, val]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center border-b border-white/10 pb-4 md:pb-6 group cursor-default"
                    >
                      <span className="text-xs md:text-sm text-slate-400 font-medium capitalize">
                        {key}
                      </span>
                      <span className="text-sm md:text-base font-bold group-hover:text-primary transition-colors">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed block italic">
                "Compromiso absoluto con la visión del cliente y la excelencia
                constructiva."
              </p>
            </div>

            <div className="lg:col-span-7 py-10">
              <div className="prose prose-slate prose-lg max-w-none">
                {project.story.split("\n\n").map((p, i) => (
                  <p key={i} className="text-slate-600 leading-[1.8] mb-8">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Excelencia (Estática/General) */}
        <section className="mt-32 border-t border-slate-100 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-primary font-medium tracking-widest text-xs uppercase mb-3 block">
                Excelencia Técnica
              </span>
              <h2 className="text-4xl font-display font-bold mb-8">
                Diseño detallado y ejecución de precisión
              </h2>
              <p className="text-slate-500 mb-10 leading-relaxed italic">
                En NewGie, creemos que la diferencia está en los milímetros.
                Cada unión y material es planificado exhaustivamente.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Estudio de fundaciones",
                    desc: "Cimientos que garantizan estabilidad estructural duradera.",
                  },
                  {
                    title: "Aislación avanzada",
                    desc: "Sistemas que optimizan el confort y el consumo energético.",
                  },
                  {
                    title: "Terminaciones NewGie",
                    desc: "Detalles constructivos ejecutados con rigor artesanal.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden aspect-square bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1541976590-713941fbc1f6?q=80&w=1200&auto=format&fit=crop"
                  alt="Detalle constructivo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[240px] hidden md:block">
                <p className="text-3xl font-display font-bold text-primary mb-2">
                  0.5mm
                </p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                  Tolerancia máxima permitida
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Galería Dinámica */}
        <section className="mt-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4">
              Galería del proyecto
            </h2>
            <p className="text-slate-500">
              Imágenes reales del proceso y resultado final.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl md:rounded-[2.5rem] overflow-hidden aspect-square cursor-zoom-in"
              >
                <img
                  src={img}
                  alt={`Galería ${project.title} ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="mt-32 bg-slate-50 rounded-[3rem] p-16 md:p-24 text-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 relative z-10">
            Construyamos juntos
          </h2>
          <p className="text-slate-500 mb-12 max-w-2xl mx-auto relative z-10">
            Transformamos visiones en realidades tangibles con profesionalismo y
            rigor técnico.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link to="/contact" className="btn-primary px-12">
              Contacto
            </Link>
            <Link to="/projects" className="btn-outline px-12">
              Otros Proyectos
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
