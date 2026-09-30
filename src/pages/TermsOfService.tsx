import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfService() {
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
            <FileText size={28} />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-display font-bold">
              Términos del Servicio
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Última actualización: Septiembre 2026
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-8 mt-10 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Aceptación de los Términos
            </h2>
            <p>
              El acceso y uso de este sitio web implican la aceptación plena de
              los presentes Términos de Servicio. Si no estás de acuerdo con
              alguna de estas condiciones, te solicitamos no utilizar este
              sitio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Servicios y Presupuestos
            </h2>
            <p>
              La información, imágenes y especificaciones técnicas publicadas en
              esta web tienen carácter informativo sobre los trabajos de
              remodelación, construcción e instalaciones de{" "}
              <strong>NewGie</strong>. Los presupuestos o estimaciones enviados
              a través del formulario o vía WhatsApp están sujetos a evaluación
              técnica in situ y formalización contractual mediante contrato de
              obra independiente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Propiedad Intelectual
            </h2>
            <p>
              Todos los contenidos de este sitio, incluyendo fotografías de
              obras, planos, textos, logotipos, elementos gráficos y marcas
              registradas, son propiedad exclusiva de NewGie o se exhiben bajo
              autorización. Queda prohibida su reproducción, copia o
              distribución comercial sin el consentimiento previo por escrito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Limitación de Responsabilidad
            </h2>
            <p>
              NewGie no se responsabiliza por posibles fallas de conexión,
              caídas temporales del servidor o daños derivados del uso o
              imposibilidad de uso del sitio web, trabajando continuamente para
              garantizar la máxima seguridad y disponibilidad del servicio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Contacto Legal
            </h2>
            <p>
              Para cualquier consulta o notificación referente a estos términos,
              puedes comunicarte a{" "}
              <strong>newgieinstalaciones@gmail.com</strong> o a nuestro
              teléfono de atención oficial.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
