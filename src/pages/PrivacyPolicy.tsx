import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 overflow-hidden min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-8 font-medium text-sm group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Volver al inicio
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-display font-bold">
              Política de Privacidad
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Última actualización: Septiembre 2026
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-8 mt-10 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos recabados en este
              sitio web es <strong>NewGie Construcciones</strong>, con domicilio
              en 3 de Febrero 14, San Fernando, Provincia de Buenos Aires,
              Argentina. Correo electrónico de contacto:{" "}
              <strong>newgieinstalaciones@gmail.com</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Datos que Recopilamos
            </h2>
            <p>
              Recopilamos únicamente los datos personales que nos proporcionas
              de forma voluntaria a través de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Formulario de Contacto:</strong> Nombre, apellido,
                correo electrónico, teléfono y detalles de la consulta
                constructiva.
              </li>
              <li>
                <strong>Suscripción al Newsletter:</strong> Dirección de correo
                electrónico para el envío de novedades sobre proyectos y obras.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Finalidad del Tratamiento
            </h2>
            <p>Tus datos son utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Responder a tus solicitudes de cotización o consultas sobre
                nuestros servicios.
              </li>
              <li>
                Coordinar reuniones, relevamientos técnicos o visitas a obra.
              </li>
              <li>
                Enviarte comunicaciones informativas sobre nuevos proyectos
                finalizados (siempre con la posibilidad de darte de baja en
                cualquier momento).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Cookies y Tecnologías Similares
            </h2>
            <p>
              Este sitio web opera con fines informativos y de contacto. No
              utilizamos cookies de perfil publicitario ni vendemos información
              a terceros. Eventuales herramientas de análisis solo recopilan
              datos técnicos anonimizados para optimizar el rendimiento y la
              velocidad de carga de la web.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Derechos del Usuario
            </h2>
            <p>
              Conforme a la Ley de Protección de Datos Personales (Ley N° 25.326
              de la República Argentina), tienes derecho a acceder, rectificar,
              actualizar o solicitar la supresión de tus datos de nuestros
              registros escribiendo a{" "}
              <strong>newgieinstalaciones@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
