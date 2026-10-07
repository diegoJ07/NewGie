import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Building,
  Hammer,
  Users,
  Star,
  Quote,
  ChevronDown,
  Zap,
  Wrench,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faqs") {
      const timer = setTimeout(() => {
        const faqSection = document.getElementById("faqs");

        if (faqSection) {
          faqSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const faqs = [
    {
      question: "¿Qué tipos de proyectos y servicios realizan?",
      answer:
        "En NewGie nos especializamos en construcción de obras nuevas, remodelaciones residenciales de alta gama, intervenciones industriales y hoteleras, además de servicios técnicos de instalaciones eléctricas (tableros, cañerías Daisa, cableados), plomería y mantenimiento integral.",
    },
    {
      question:
        "¿Cuentan con electricistas matriculados para obras y comercios?",
      answer:
        "Sí, nuestro equipo cuenta con especialistas e instaladores para tableros eléctricos, iluminación LED, sistemas de emergencia y fuerza motriz bajo estrictas normas de seguridad.",
    },
    {
      question: "¿Ofrecen garantía por los trabajos realizados?",
      answer:
        "Sí, todos nuestros proyectos cuentan con garantía de cumplimiento y calidad. Realizamos controles técnicos rigurosos antes de la entrega final para asegurar que cada detalle cumpla con los estándares pactados.",
    },
    {
      question: "¿Cómo es el proceso de cotización?",
      answer:
        "Una vez que nos contactas, agendamos una reunión técnica para entender las necesidades del proyecto. Luego, nuestro equipo de especialistas elabora un presupuesto detallado y un cronograma estimado de ejecución.",
    },
    {
      question: "¿En qué zonas trabajan?",
      answer:
        "Operamos principalmente en San Fernando, Zona Norte y Gran Buenos Aires, con capacidad técnica y logística para grandes proyectos en distintas regiones. Consúltanos por tu ubicación específica.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#E6FAFC]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* TU H1 ORIGINAL */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 md:mb-8 text-secondary">
                DEL <span className="text-primary">DISEÑO</span> A LA REALIDAD
                ENFOCADOS EN <span className="text-primary">CADA DETALLE</span>
              </h1>

              <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-10 max-w-xl leading-relaxed">
                En <strong>NewGie</strong> transformamos visiones
                arquitectónicas en estructuras de alto rendimiento. Construcción
                moderna, servicios eléctricos profesionales, cañerías,
                sanitarias y remodelaciones enfocadas en la excelencia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="btn-primary gap-2 w-full sm:w-auto"
                >
                  Proyectos
                  <ArrowRight size={18} />
                </Link>

                <Link to="/contact" className="btn-outline w-full sm:w-auto">
                  Contacto
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto"
            >
              <img
                src="/NewGie/img/img-principal.png"
                alt="Equipo de electricistas e ingenieros de obra en NewGie"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-left mb-20">
            <span className="text-primary font-medium tracking-widest text-xs uppercase mb-3 block">
              Ventajas
            </span>

            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Por qué elegirnos
            </h2>

            <p className="text-slate-500 max-w-2xl text-left">
              Elaboramos documentación técnica con nuestros especialistas para
              obtener un mejor resultado en cada tarea, desde instalaciones de
              obra hasta montajes eléctricos.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          >
            {[
              {
                title: "Equipo profesional y Comprometido",
                desc: "Gente que conoce su oficio y tiene experiencia de años de trayectoria.",
                icon: <Users className="text-primary" size={32} />,
                image: "../NewGie/img/electricistas.jpeg",
                alt: "Electricistas profesionales realizando montaje en obra",
              },
              {
                title: "Cumplimiento Garantizado",
                desc: "Consideramos fundamental pactar un control de calidad antes de la entrega para mayor tranquilidad del cliente.",
                icon: <CheckCircle2 className="text-primary" size={32} />,
                image: "../NewGie/img/cumplimiento-garantizado.jpeg",
                alt: "Control técnico y garantía en obras e instalaciones",
              },
              {
                title: "Relaciones Duraderas",
                desc: "Nuestros clientes vuelven porque saben qué esperar en cada proyecto comercial o residencial.",
                icon: <Star className="text-primary" size={32} />,
                image:
                  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=640&auto=format&fit=crop",
                alt: "Atención personalizada para clientes y arquitectos",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="bg-slate-50 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 h-full border border-slate-100 group-hover:border-primary/20 transition-all hover:shadow-xl">
                  <div className="mb-6">{card.icon}</div>

                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>

                  <p className="text-slate-500 text-sm mb-10 leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="rounded-2xl overflow-hidden h-48">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-left mb-20">
            <span className="text-primary font-medium tracking-widest text-xs uppercase mb-3 block">
              Servicios
            </span>

            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Lo que hacemos en cada proyecto
            </h2>

            <p className="text-slate-500 max-w-2xl text-left">
              Desde la concepción hasta la entrega final, ejecutamos trabajos
              que perduran. Cada servicio responde a necesidades reales de
              nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Construcción de obras nuevas",
                icon: <Building size={40} />,
                desc: "Edificaciones sólidas levantadas con materiales de calidad y técnica comprobada.",
              },
              {
                title: "Instalaciones eléctricas y tableros",
                icon: <Zap size={40} />,
                desc: "Montaje de tableros, cañerías Daisa, cableado integral, iluminación LED y fuerza motriz.",
              },
              {
                title: "Remodelaciones industriales y hoteleras",
                icon: <Hammer size={40} />,
                desc: "Transformamos estructuras existentes en ambientes funcionales, sanitarias modernas y confort.",
              },
              {
                title: "Cuadrillas y mantenimiento continuo",
                icon: <Wrench size={40} />,
                desc: "Equipos especializados que cuidan y preservan instalaciones eléctricas, edilicias y sanitarias.",
              },
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col h-full items-start">
                <div className="h-16 flex items-center">
                  <div className="text-secondary">{service.icon}</div>
                </div>

                <h4 className="text-lg font-bold mb-4">{service.title}</h4>

                <p className="text-slate-500 text-sm leading-relaxed text-left">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">
                Nuestros números hablan de excelencia
              </h2>

              <p className="text-slate-500 mb-12 max-w-lg">
                NewGie es sinónimo de rigor técnico. Cada proyecto es una pieza
                de ingeniería única ejecutada con los más altos estándares del
                mercado.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-slate-50 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] text-center">
                  <div className="text-4xl md:text-6xl font-display font-bold text-secondary mb-2">
                    12
                  </div>

                  <div className="text-[10px] md:text-sm text-slate-500 uppercase tracking-wider">
                    Proyectos completados
                  </div>
                </div>

                <div className="bg-slate-50 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] text-center">
                  <div className="text-4xl md:text-6xl font-display font-bold text-secondary mb-2">
                    2
                  </div>

                  <div className="text-[10px] md:text-sm text-slate-500 uppercase tracking-wider">
                    Años en el mercado
                  </div>
                </div>

                <div className="col-span-1 sm:col-span-2 bg-slate-50 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?u=${i}`}
                          alt="Cliente satisfecho con obras NewGie"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-display font-bold text-secondary">
                      15
                    </div>

                    <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">
                      Clientes satisfechos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                  alt="Instalador y profesional técnico de construcción en obra"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-[2.5rem] hidden md:block">
                <Quote
                  className="text-white opacity-20 absolute top-4 left-4"
                  size={40}
                />

                <p className="text-white font-medium text-lg italic max-w-[200px]">
                  "La calidad no es un acto, es un hábito."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-left mb-16">
            <span className="text-primary font-medium tracking-widest text-xs uppercase mb-3 block">
              Obras
            </span>

            <h2 className="text-4xl font-display font-bold mb-6">
              Proyectos en marcha
            </h2>

            <p className="text-slate-500">
              Cada trabajo refleja nuestro compromiso con la calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {[
              {
                title: "Habitación Singular De Hotel",
                desc: "Residencia moderna con vistas al valle, instalaciones renovadas y acabados premium.",
                tags: ["Hotelería", "Diseño", "Remodelación"],
                image:
                  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
                alt: "Habitación singular de hotel remodelada con iluminación de diseño",
                id: "p1",
              },
              {
                title: "Habitación Doble De Hotel",
                desc: "Remodelación integral de espacios hoteleros con estándares internacionales.",
                tags: ["Hotelería", "Remodelación", "Acabados"],
                image:
                  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
                alt: "Habitación doble de hotel con instalaciones y acabados modernos",
                id: "p2",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2.5rem] overflow-hidden group border border-slate-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-80 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute top-6 left-6 flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    {project.desc}
                  </p>

                  <Link
                    to={`/projects/${project.id}`}
                    className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    Ver proyecto
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="bg-slate-200 hover:bg-slate-300 px-10 py-4 rounded-full font-bold text-sm transition-colors"
            >
              Ver todos
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-left mb-20">
            <h2 className="text-4xl font-display font-bold mb-4">
              Lo que dicen
            </h2>

            <p className="text-slate-500">
              Clientes que confían en nuestro trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "NewGie entregó nuestra residencia en el plazo acordado, con una calidad de terminaciones que superó nuestras expectativas.",
                author: "Carlos Mendoza",
                role: "Propietario, Casa Mirador",
                avatar: "https://i.pravatar.cc/150?u=carlos",
              },
              {
                text: "El equipo supo escuchar lo que queríamos y lo hizo realidad con profesionalismo.",
                author: "Patricia Gómez",
                role: "Gerente, Hotel Renovado",
                avatar: "https://i.pravatar.cc/150?u=patricia",
              },
              {
                text: "Trabajar con ellos fue tranquilo. Sabíamos que estábamos en buenas manos.",
                author: "Roberto Silva",
                role: "Director, Fábrica del Sur",
                avatar: "https://i.pravatar.cc/150?u=roberto",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-10 rounded-[2.5rem] relative"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-secondary text-secondary"
                    />
                  ))}
                </div>

                <p className="text-slate-600 mb-8 italic">"{t.text}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <div className="font-bold text-sm">{t.author}</div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-left mb-16">
              <span className="text-primary font-medium tracking-widest text-xs uppercase mb-3 block">
                FAQ
              </span>

              <h2 className="text-4xl font-display font-bold mb-6">
                Preguntas Frecuentes
              </h2>

              <p className="text-slate-500">
                Resolvemos tus dudas sobre cómo trabajamos en NewGie.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
                  >
                    <span className="font-bold text-secondary">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`text-primary transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="relative bg-slate-50 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

            <h2 className="relative z-10 text-4xl md:text-5xl font-display font-bold mb-6 text-black text-left">
              Hablemos de tu proyecto
            </h2>

            <p className="relative z-10 text-black mb-12 max-w-xl text-lg leading-relaxed text-left mx-auto">
              Tenemos experiencia en lo que hacemos. Cuéntanos qué necesitas y
              construyamos algo extraordinario en San Fernando y Gran Buenos
              Aires.
            </p>

            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link to="/contact" className="btn-primary px-10">
                Cotizar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
