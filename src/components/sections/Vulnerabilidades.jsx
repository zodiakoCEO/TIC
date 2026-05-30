import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';
import imagen4 from '../../../public/imagen4.jpeg';

export default function Vulnerabilidades() {
  const container = useRef(null);
  useAnimeReveal(container);

  const vuls = [
    { tipo: 'Sociales', desc: 'Precariedad laboral, migración y economías informales que tensionan el tejido barrial.' },
    { tipo: 'Digitales', desc: 'Brecha tecnológica, acceso desigual a internet y falta de alfabetización digital.' },
    { tipo: 'Ambientales', desc: 'Presión urbanística y riesgos de pérdida de espacios públicos y culturales.' },
    { tipo: 'Territoriales', desc: 'Desigualdad en la distribución de servicios y espacios de encuentro.' }
  ];

  return (
    <div ref={container} className="bg-white p-8 lg:p-10 rounded-[32px] shadow-sm border border-slate-100 animate-fadeIn space-y-8" data-anime>
      
      {/* 1. Encabezado */}
      <div data-anime>
        <h2 className="text-3xl font-black text-slate-900">Vulnerabilidades Identificadas</h2>
        <p className="text-slate-600 text-lg mt-4 max-w-2xl">
          Análisis de los riesgos y tensiones territoriales donde las soluciones TIC deben articularse con prácticas sociales para ser efectivas.
        </p>
      </div>

      {/* 2. Grid de Vulnerabilidades */}
      <div className="grid gap-6 md:grid-cols-2" data-anime>
        {vuls.map((v, i) => (
          <div key={i} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">{v.tipo}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. Imagen */}
      <div className="rounded-[32px] overflow-hidden border border-slate-100 shadow-sm" data-anime>
        <img
          src={imagen4}
          alt="Grupo comunitario en reunión sobre territorio"
          className="h-72 w-full object-cover object-center"
        />
      </div>

      {/* 4. Footer de Contexto y Oportunidades */}
      <footer className="bg-slate-900 rounded-[32px] p-8 text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-anime>
        <div className="space-y-2">
          <h4 className="font-black text-xl">Ruta de Acción</h4>
          <p className="text-slate-400 text-sm">
            Combinar infraestructura digital con procesos participativos es clave para reducir las brechas detectadas.
          </p>
        </div>
        
        <div className="flex justify-end gap-6 border-t border-slate-700 pt-6 md:border-t-0 md:pt-0">
          <div className="text-center">
            <span className="block text-teal-400 font-bold text-xs uppercase tracking-wider">Enfoque</span>
            <span className="block font-semibold mt-1">Colaborativo</span>
          </div>
          <div className="w-px bg-slate-700 h-10"></div>
          <div className="text-center">
            <span className="block text-teal-400 font-bold text-xs uppercase tracking-wider">Prioridad</span>
            <span className="block font-semibold mt-1">Cuidado</span>
          </div>
        </div>
      </footer>
      
    </div>
  );
}