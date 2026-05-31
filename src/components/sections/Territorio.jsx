import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';
import Map from '../Map';

// Importación de imágenes locales
import imagen1 from '../../../public/imagen1.jpeg';
import imagen2 from '../../../public/imagen2.jpeg';

// Importación de iconos
import iconCooperacion from "../../assets/cooperacion.png";
import iconGente from "../../assets/gente.png";

export default function Territorio() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div ref={container} className="space-y-8 animate-fadeIn">
      {/* Contenedor Principal */}
      <div className="bg-white p-8 lg:p-12 rounded-[32px] shadow-sm border border-slate-100" data-anime>
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Observación
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
            Dinámicas Cotidianas y Territorio
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            La Magnolia (Envigado) es el territorio donde el comercio popular, la movilidad barrial y las redes de cuidado construyen nuevas formas de ciudad.
          </p>
        </div>

        {/* Bento Grid: Tarjetas e Imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Tarjeta 1: Redes comunitarias */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col justify-center hover:shadow-md transition-shadow" data-anime>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5 border border-slate-100 p-2 overflow-hidden">
              <img src={iconGente} alt="Icono Redes Comunitarias" className="w-full h-full object-contain opacity-80" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Redes comunitarias</h3>
            <p className="text-slate-600 leading-relaxed">Redes de apoyo, trueque y cuidado mutuo sostienen los hogares ante las tensiones urbanas y tecnológicas.</p>
          </div>

          {/* Tarjeta 2: Comercio local */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col justify-center hover:shadow-md transition-shadow" data-anime>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5 border border-slate-100 p-2 overflow-hidden">
              <img src={iconCooperacion} alt="Icono Comercio Local" className="w-full h-full object-contain opacity-80" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Comercio local</h3>
            <p className="text-slate-600 leading-relaxed">Mercados de barrio, ventas ambulantes y pequeñas cadenas de valor generan vida económica cotidiana.</p>
          </div>

          {/* Imagen 1: Archivo local */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 h-[280px] md:h-[320px] group" data-anime>
            <img
              src={imagen1}
              alt="Territorio La Magnolia"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Imagen 2: Archivo local */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 h-[280px] md:h-[320px] group" data-anime>
            <img
              src={imagen2}
              alt="Calle urbana con comercio comunitario"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Nuevos Checkmarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" data-anime>
          <div className="flex items-center gap-3 p-4 bg-purple-50 border border-emerald-100 rounded-2xl">
            <div className="bg-purple-500 rounded-full p-1 text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="font-semibold text-purple-900">Integración con el entorno geográfico</span>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-purple-50 border border-emerald-100 rounded-2xl">
            <div className="bg-purple-500 rounded-full p-1 text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="font-semibold text-purple-900">Potenciación de la vida barrial</span>
          </div>
        </div>

        {/* Sección del Mapa */}
        <div className="rounded-[32px] p-2 bg-slate-50 border border-slate-200" data-anime>
           <Map />
        </div>
        
      </div>
    </div>
  );
}