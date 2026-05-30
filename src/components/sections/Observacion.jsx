import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';

export default function Observacion() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div ref={container} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 animate-fadeIn space-y-8" data-anime>
      {/* Encabezado Principal */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="p-2 bg-teal-100 rounded-lg text-teal-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </span>
          <span className="text-sm font-bold text-teal-700 uppercase tracking-wider">Trabajo de Campo</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900">2. Observación Activa e Instrumentos</h2>
        <p className="text-slate-600 text-lg mt-4 max-w-3xl">
          A través de caminatas territoriales sistemáticas y el diálogo activo con los habitantes, se ha construido una <strong>Bitácora de Observación</strong> para capturar las cápsulas audiovisuales, notas de campo y fotografías que sustentan el diagnóstico social de la economía popular.
        </p>
      </div>

      {/* Título de Extractos */}
      <div className="flex items-center gap-2 mt-8">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        <h3 className="text-xl font-bold text-slate-800">Extractos de la Bitácora de Campo</h3>
      </div>

      {/* Grid de Tarjetas */}
      <div className="grid gap-6 md:grid-cols-3" data-anime>
        
        {/* Tarjeta 1 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-slate-500 font-medium">Envigado, Quebrada La Ayurá</span>
              <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded-md">REGISTRO #01</span>
            </div>
            <h4 className="font-bold text-lg mb-3">"Las Chasas de la Ayurá"</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              "Observamos tres puestos móviles de venta de jugos y dulces en el corredor de ciclorruta. Sus dueños son una pareja migrante venezolana y un adulto mayor de Envigado..."
            </p>
          </div>
          <a href="#" className="text-teal-700 text-sm font-semibold mt-4 hover:underline">Ver foto</a>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-slate-500 font-medium">La Magnolia, Envigado</span>
              <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded-md">REGISTRO #02</span>
            </div>
            <h4 className="font-bold text-lg mb-3">Economía y Redes de Cuidado</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              "En la zona comercial de La Magnolia, observamos cómo las redes de cuidado local gestionan la alimentación de los vecinos. Existe un fuerte intercambio pedagógico entre comerciantes..."
            </p>
          </div>
          <a href="#" className="text-teal-700 text-sm font-semibold mt-4 hover:underline">Ver foto</a>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-slate-500 font-medium">La Magnolia - Puntos Críticos</span>
              <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded-md">REGISTRO #03</span>
            </div>
            <h4 className="font-bold text-lg mb-3">Espacio Público y Convivencia</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              "La calle se convierte en el principal espacio de encuentro social. Identificamos dinámicas donde el comercio local fomenta la solidaridad vecinal para el cuidado mutuo de los espacios..."
            </p>
          </div>
          <a href="#" className="text-teal-700 text-sm font-semibold mt-4 hover:underline">Ver foto</a>
        </div>

      </div>
    </div>
  );
}