import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';

const plataformas = [
  {
    nombre: 'SENA',
    temas: 'Alimentos, marketing, contabilidad, diseño',
    publico: 'General, emprendedores',
    certificacion: 'Sí, oficial',
    costo: 'Gratis',
    url: 'https://oferta.senasofiaplus.edu.co',
    label: 'Ver cursos SENA',
  },
  {
    nombre: 'IPES',
    temas: 'Alimentos, marketing, servicio al cliente',
    publico: 'Vendedores informales, plazas de mercado',
    certificacion: 'Sí',
    costo: 'Gratis',
    url: 'https://www.ipes.gov.co/index.php/programas/formacion/formacion-y-capacitacion',
    label: 'Ver cursos IPES',
  },
  {
    nombre: 'Bancóldex',
    temas: 'Comercio electrónico, finanzas, publicidad',
    publico: 'Micro y pequeñas empresas',
    certificacion: 'Sí',
    costo: 'Gratis',
    url: 'https://conectadigital.bancoldex.com/capacitate',
    label: 'Ver cursos Bancóldex',
  },
];

const fases = [
  {
    numero: 'FASE 1',
    titulo: 'Mapeo y Registro',
    descripcion: 'Carga ágil de negocios en el micrositio.',
  },
  {
    numero: 'FASE 2',
    titulo: 'Capacitación Práctica',
    descripcion: 'Talleres intergeneracionales de uso de billeteras virtuales y otras plataformas digitales.',
  },
  {
    numero: 'FASE 3',
    titulo: 'Visibilidad y Ventas',
    descripcion: 'Acceso a clientes locales y foráneos a través del directorio que estara disponible en el micrositio.',
  },
];

export default function Propuesta() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div
      ref={container}
      className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-[#a855f7] animate-fadeIn space-y-10"
    >
      {/* ── Encabezado ── */}
      <div data-anime>
        <h2 className="text-2xl font-bold text-slate-900">Propuesta Pedagógica</h2>
        <p className="text-slate-700 text-lg mt-4 max-w-2xl">
          La propuesta articula saberes locales con herramientas educativas que empoderan a
          vecinos, comerciantes y jóvenes como actores activos del territorio.
        </p>
      </div>

      {/* ── Tabla de plataformas ── */}
      <div data-anime className="space-y-4">
        <h3 className="font-semibold text-slate-900 text-lg">
          Plataformas de Capacitación Gratuita
        </h3>
        <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {['Plataforma', 'Temas clave', 'Público objetivo', 'Certificación', 'Costo', 'Acceso'].map(
                  (col) => (
                    <th key={col} className="px-5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {plataformas.map((p, i) => (
                <tr
                  key={p.nombre}
                  className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                >
                  <td className="px-5 py-4 font-semibold text-slate-900">{p.nombre}</td>
                  <td className="px-5 py-4 text-slate-600">{p.temas}</td>
                  <td className="px-5 py-4 text-slate-600">{p.publico}</td>
                  <td className="px-5 py-4 text-slate-600">{p.certificacion}</td>
                  <td className="px-5 py-4">
                    <span className="inline-block bg-purple-50 text-purple-600 font-semibold text-xs px-3 py-1 rounded-full border border-purple-200">
                      {p.costo}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-purple-600 font-semibold text-xs hover:underline underline-offset-2 transition-all"
                    >
                      {p.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Pilar Tecnológico ── */}
      <div data-anime className="rounded-3xl bg-slate-50 border border-slate-200 shadow-sm p-8 space-y-6">
        {/* Badge */}
        <span className="inline-block bg-purple-600/10 text-purple-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-purple-600/20">
          Pilar Tecnológico
        </span>

        {/* Título y descripción */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-slate-900 leading-snug">
            Esquema de Red de Economía Local
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
            Esta propuesta no solo georreferencia los comercios populares; establece una{' '}
            <strong className="text-slate-900">arquitectura de apoyo mutuo</strong>. Los jóvenes
            del barrio actúan como "dinamizadores digitales" ayudando a los adultos mayores a
            implementar códigos QR y catálogos en WhatsApp.
          </p>
        </div>

        {/* Fases */}
        <div className="grid gap-4 sm:grid-cols-3">
          {fases.map((fase) => (
            <div
              key={fase.numero}
              className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 space-y-2"
            >
              <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">
                {fase.numero}
              </span>
              <h4 className="font-semibold text-slate-900 text-base leading-tight">
                {fase.titulo}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">{fase.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}