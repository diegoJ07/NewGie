import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  History,
  Target,
  Users,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const team = [
    {
      name: "Roberto Sánchez",
      role: "Fundador",
      image: "https://i.pravatar.cc/300?u=roberto_s",
    },
    {
      name: "Alejandra Vega",
      role: "Directora de proyectos",
      image: "https://i.pravatar.cc/300?u=alejandra_v",
    },
    {
      name: "Miguel Torres",
      role: "Jefe de obra",
      image: "https://i.pravatar.cc/300?u=miguel_t",
    },
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      {/* Introduction */}
      <section className="container mx-auto px-6 mb-20 md:mb-32 bg-">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 md:mb-8">
            Quiénes somos
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed italic">
            Una constructora nacida del compromiso de entregar obras que
            perduran en el tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-10"
          >
            <div className="flex gap-4 md:gap-6 items-start">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center text-secondary shrink-0">
                <History size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">
                  Nuestra historia y propósito
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
                  NewGie nace con la determinación de construir con honestidad y
                  rigor técnico. Nuestra metodología se basa en la transparencia
                  total y la búsqueda incansable de la perfección estructural.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden aspect-video bg-slate-100"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Office"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20">
            <div className="max-w-2xl">
              <span className="text-primary font-medium tracking-widest text-xs uppercase mb-2 md:mb-3 block">
                Equipo
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 md:mb-8">
                Quiénes construyen
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Los nombres detrás de cada obra que levantamos con dedicación.
                Estamos orgullosos de nuestro equipo multidisciplinario.
              </p>
            </div>
            <Link to="/contact" className="btn-outline w-full md:w-auto">
              Súmate a nosotros
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] mb-8 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      <Twitter
                        size={20}
                        className="hover:text-primary cursor-pointer text-white"
                      />
                      <Linkedin
                        size={20}
                        className="hover:text-primary cursor-pointer text-white"
                      />
                      <Instagram
                        size={20}
                        className="hover:text-primary cursor-pointer text-white"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-slate-400 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl font-display font-bold">
                Lo que hemos construido en poco tiempo habla por sí solo
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Estructura sólida</h4>
                    <p className="text-sm text-slate-500 italic leading-relaxed">
                      Cimientos y estructura que resisten el tiempo y los
                      elementos.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Acabados precisos</h4>
                    <p className="text-sm text-slate-500 italic leading-relaxed">
                      Detalles que reflejan calidad en cada rincón del hogar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-slate-50 p-10 rounded-[2.5rem]">
                <div className="text-5xl font-display font-bold mb-4">12</div>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-widest leading-relaxed">
                  Proyectos completados
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem]">
                <div className="text-5xl font-display font-bold mb-4">30</div>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-widest leading-relaxed">
                  Años de experiencia combinada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
