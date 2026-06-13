import { useRef } from 'react';
import useAnimeReveal from '../../hooks/useAnimeReveal';

export default function Cierre() {
  const container = useRef(null);
  useAnimeReveal(container);

  return (
    <div
      ref={container}
      className="bg-purple-700 text-white rounded-[32px] p-8 lg:p-10 shadow-xl animate-fadeIn"
      data-anime
    >
      <div className="border-b border-white/20 pb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-3 h-3 rounded-full bg-purple-300 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-purple-100">
            Cierre y Reflexión
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-white">Cierre del Recorrido</h2>
        <p className="text-white/90 text-sm mt-3 max-w-2xl leading-relaxed">
          Documentar y replicar las prácticas que ya funcionan. Cada iniciativa local aporta a una ciudad más equitativa cuando comparte sabereres.
        </p>
        <div className="mt-6 rounded-[28px] bg-white/10 border border-white/15 p-6 max-w-4xl">
          <p className="text-sm text-white/90 leading-relaxed">
            La Red de Economía Local Inteligente es la apuesta por una ciudad pensada desde abajo: una ciudad que reconoce la fuerza de la economía popular, que valora la memoria de sus líderes comunitarios y que integra la tecnología como herramienta pedagógica para cerrar brechas y potenciar la soberanía alimentaria y comercial.
          </p>
          <p className="text-sm text-white/90 leading-relaxed mt-4">
            Este micrositio es más que un producto académico: es un espacio de diálogo entre lo territorial y lo digital, entre lo autóctono e identitario y lo contemporáneo. Es una invitación a resignificar el concepto de ciudad inteligente desde la solidaridad, la inclusión y la participación activa de quienes habitan los barrios.
          </p>
          <p className="mt-6 text-sm font-bold text-white tracking-widest uppercase">
            Hacia una ciudad inteligente pensada desde y para la gente
          </p>
        </div>
      </div>
    </div>
  );
}
