import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';

export default function Cierre() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-3 h-3 rounded-full bg-purple-600 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Cierre y Reflexión</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900">Cierre</h2>
      </div>

      <div
        ref={container}
        className="bg-purple-700 text-white rounded-[32px] p-8 lg:p-10 shadow-xl animate-fadeIn"
        data-anime
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-black">Visión de Futuro</h2>
            <p className="mt-4 text-base lg:text-lg text-purple-100 leading-relaxed">
              Documentar y replicar las prácticas que ya funcionan. Cada iniciativa local aporta a una ciudad más equitativa cuando comparte sabereres.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm lg:text-base">
            <div className="rounded-3xl bg-purple-800/80 p-5 border border-purple-600">
              <span className="text-xs uppercase tracking-[0.25em] text-purple-200">Estado</span>
              <p className="mt-3 font-bold text-white">En Crecimiento</p>
            </div>
            <div className="rounded-3xl bg-purple-800/80 p-5 border border-purple-600">
              <span className="text-xs uppercase tracking-[0.25em] text-purple-200">Objetivo</span>
              <p className="mt-3 font-bold text-white">Territorial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}