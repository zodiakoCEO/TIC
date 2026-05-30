import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';
import imagen3 from '../../../public/imagen3.jpeg';

export default function Analisis() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div ref={container} className="bg-white p-8 lg:p-10 rounded-[32px] shadow-sm border border-slate-100 animate-fadeIn space-y-8" data-anime>
      
      {/* Encabezado */}
      <div>
        <h2 className="text-3xl font-black text-slate-900">Análisis y Perspectiva Ciudadana</h2>
        <p className="text-slate-600 text-lg mt-2 max-w-2xl">
          ¿Cómo las TIC potencian la economía local y transforman el trabajo cotidiano en La Magnolia?
        </p>
      </div>

      {/* Grid Principal: Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Columna Izquierda */}
        <div className="lg:col-span-7 space-y-6">
          {/* Dimensiones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Inclusión</h3>
              <p className="text-sm text-slate-600 leading-relaxed">El acceso digital se vuelve significativo si permite participación económica, educativa y comunitaria.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">Cohesión</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Las TIC apoyan la memoria colectiva, el intercambio y la gobernanza barrial.</p>
            </div>
          </div>

          {/* Indicadores de Impacto */}
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">Indicadores de Apropiación Digital</h3>
            <div className="space-y-4">
              {[
                { label: "Acceso a Smartphone con datos moviles", score: 82 },
                { label: "Uso Whatsapp para ventas/pedidos", score: 46 },
                { label: "Presencia en mapas digitales o buscadores (Google Maps, Waze)", score: 8 },
                { label: "Uso de billeteras digitales (Nequi, Bancolombia, DaviPlata etc...) ", score: 56 }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600 font-medium">{item.label}</span>
                    <span className="font-bold text-teal-700">{item.score}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: `${item.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elementos Clave */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 text-lg">Elementos clave en las TIC</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Inclusión y equidad", desc: "Los beneficios de la tecnología deben llegar de manera democrática, priorizando poblaciones vulnerables." },
                { title: "Participación Ciudadana", desc: "Que las comunidades locales tengan voz activa sobre cómo y para qué se implementan las TIC." },
                { title: "Acceso justo a recursos", desc: "Garantizar que servicios de conectividad y herramientas educativas estén disponibles para todos." },
                { title: "Continuidad temporal", desc: "Las políticas tecnológicas deben ser sostenibles y adaptarse orgánicamente al crecimiento del territorio." }
              ].map((el, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-teal-200 transition-colors">
                  <h4 className="font-bold text-sm text-slate-900 mb-2">{el.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{el.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* ← ÚNICA línea cambiada */}
          <div className="flex-1 rounded-3xl overflow-hidden border border-slate-100 min-h-[300px]">
            <img
              src={imagen3}
              alt="Reunión comunitaria para análisis urbano"
              className="h-full w-full object-cover object-center"
            />
          </div>
          
          <div className="bg-teal-50 p-6 rounded-3xl border border-teal-100">
            <p className="text-teal-900 text-sm italic font-medium leading-relaxed">
              "Las ciudades inteligentes requieren herramientas accesibles para la ciudadanía, no solo sensores y datos".
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Descarga 1 */}
      <div className="bg-teal-700 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg" data-anime>
        <div className="flex items-center gap-6">
          <div className="bg-white/20 p-4 rounded-2xl shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Revisión de literatura: Ciudades Inteligentes</h3>
            <p className="text-teal-100 text-sm">Perspectiva centrada en las TIC (Maestre Góngora).</p>
          </div>
        </div>
        <a href="/literatura-ciudades.pdf" download="Literatura_Ciudades_Inteligentes.pdf" className="bg-white text-teal-700 px-8 py-3 rounded-xl font-bold hover:bg-teal-50 transition-all shadow-sm shrink-0 whitespace-nowrap cursor-pointer">
          Descargar PDF
        </a>
      </div>

      {/* Sección de Descarga 2 */}
      <div className="bg-teal-700 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg" data-anime>
        <div className="flex items-center gap-6">
          <div className="bg-white/20 p-4 rounded-2xl shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Revisión sistemática: Tecnologías de Servicios Urbanos</h3>
            <p className="text-teal-100 text-sm">2012–2021 (Caicedo Plúa & Amaya Fernández).</p>
          </div>
        </div>
        <a href="/revision-sistematica.pdf" download="Revision_Sistematica_Servicios_Urbanos.pdf" className="bg-white text-teal-700 px-8 py-3 rounded-xl font-bold hover:bg-teal-50 transition-all shadow-sm shrink-0 whitespace-nowrap cursor-pointer">
          Descargar PDF
        </a>
      </div>
    </div>
  );
}