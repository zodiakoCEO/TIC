import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';

export default function Cierre() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div ref={container} className="bg-white p-8 lg:p-10 rounded-[32px] shadow-sm border border-slate-100 animate-fadeIn space-y-8" data-anime>
      
      {/* 1. Encabezado */}
      <div data-anime>
        <h2 className="text-3xl font-black text-slate-900">Cierre del Recorrido</h2>
        <p className="text-slate-600 text-lg mt-4 max-w-2xl">
          Sintetizamos los aprendizajes clave para seguir construyendo ciudades más justas, 
          conectadas y respetuosas de los saberes locales en La Magnolia y Castilla.
        </p>
      </div>

      {/* 2. Grid de Reflexiones */}
      <div className="grid gap-6 lg:grid-cols-2" data-anime>
        <div className="rounded-[32px] bg-slate-50 p-8 border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-3 text-lg">Caminos posibles</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Fortalecer la participación ciudadana y apoyar iniciativas de economía local 
            que ya tienen raíces en los barrios es el primer paso hacia una verdadera sostenibilidad digital.
          </p>
        </div>
        <div className="rounded-[32px] bg-slate-50 p-8 border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-3 text-lg">Transformación</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Las herramientas digitales funcionan mejor cuando son adaptadas por y para quienes habitan 
            el territorio, evitando la imposición tecnológica externa.
          </p>
        </div>
      </div>

      {/* 3. Imagen de contexto */}
      <div className="rounded-[32px] overflow-hidden border border-slate-100 shadow-sm" data-anime>
        <img
          src=""
          alt="Comunidad celebrando un proyecto local"
          className="h-72 w-full object-cover"
        />
      </div>

      {/* 4. Footer de Cierre (Invertido a estilo Teal) */}
      <footer className="bg-teal-700 rounded-[32px] p-8 text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-anime>
        <div className="space-y-2">
          <h4 className="font-black text-xl">Visión de Futuro</h4>
          <p className="text-teal-100 text-sm">
            Documentar y replicar las prácticas que ya funcionan. Cada iniciativa local aporta a una ciudad más equitativa cuando comparte saberes.
          </p>
        </div>
        
        <div className="flex justify-end gap-6 border-t border-teal-600 pt-6 md:border-t-0 md:pt-0">
          <div className="text-center">
            <span className="block text-teal-200 font-bold text-xs uppercase tracking-wider">Estado</span>
            <span className="block font-semibold mt-1">En Crecimiento</span>
          </div>
          <div className="w-px bg-teal-600 h-10"></div>
          <div className="text-center">
            <span className="block text-teal-200 font-bold text-xs uppercase tracking-wider">Objetivo</span>
            <span className="block font-semibold mt-1">Territorial</span>
          </div>
        </div>
      </footer>
      
    </div>
  );
}