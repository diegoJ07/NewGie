import { motion } from "motion/react";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Hablemos de tu proyecto
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Estamos listos para escuchar tus ideas y convertirlas en realidad
            con experiencia y dedicación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">
                Envía tu consulta
              </h2>
              <p className="text-slate-500 mb-10">
                Cuéntanos qué necesitas construir y nos pondremos en contacto
                contigo lo antes posible.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:info@newgie.com"
                  className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
                      Correo
                    </p>
                    <p className="font-bold">newgieinstalaciones@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+56912345678"
                  className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
                      Teléfono
                    </p>
                    <p className="font-bold">+54 9 2214 38-3512</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
                      Ubicación
                    </p>
                    <p className="font-bold">
                      3 de febrero 14, san Fernando, Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Dónde nos encuentras</h3>
              <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.678950227537!2d-58.56839692339869!3d-34.43490924860418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca57758448255%3A0x6064f36e8ab8e350!2s3%20de%20Febrero%2014%2C%20B1646CVB%20San%20Fernando%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1790792041001!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la oficina"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 self-start"
          >
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">
                  Mensaje enviado
                </h3>
                <p className="text-slate-500 mb-8">
                  Gracias por contactarnos. Nuestro equipo te responderá en las
                  próximas 24 horas.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Enviar otro
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">
                      Nombre
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary h-14"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">
                      Apellido
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary h-14"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">
                      Correo
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary h-14"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary h-14"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">
                    Tipo de consulta
                  </label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary h-14 appearance-none">
                    <option>Selecciona una opción</option>
                    <option>Residencial</option>
                    <option>Remodelación</option>
                    <option>Instalación eléctrica</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Describe tu proyecto aquí..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <span className="text-xs text-slate-500">
                    Acepto los términos legales y el tratamiento de mis datos.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary h-16 text-lg gap-3"
                >
                  Enviar consulta <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
